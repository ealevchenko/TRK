// список баков
var ozm_bak = {
    list: [
        {
            type: 107000022, // A92
            tanks: [{ value: 'B2', text: 'B2' }, { value: 'B3', text: 'B3' }, { value: 'B9', text: 'B9' }, { value: 'B11', text: 'B11' }, { value: 'B16', text: 'B16' }]
        },
        {
            type: 107000023, // A95
            tanks: [{ value: 'B17', text: 'B17' }, { value: 'B18', text: 'B18' }, { value: 'B19', text: 'B19' }, { value: 'B20', text: 'B20' }]
        },
        {
            type: 107000024, // ДТ
            tanks: [
                { value: '01', text: '01' },
                { value: '02', text: '02' },
                { value: '03', text: '03' },
                { value: '04', text: '04' },
                { value: '05', text: '05' },
                { value: '06', text: '06' },
                { value: '07', text: '07' },
                { value: '08', text: '08' },
                { value: '09', text: '09' },
                { value: '10', text: '10' },
                { value: '11', text: '11' },
                { value: '12', text: '12' },
                //{ value: '13', text: '13' }, // конфискат
                { value: '14', text: '14' },
                { value: '15', text: '15' },
                { value: '16', text: '16' },
                { value: '17', text: '17' },
                { value: '18', text: '18' },
                { value: '19', text: '19' },
                { value: '20', text: '20' },
                { value: '21', text: '21' },
                { value: '22', text: '22' },
                { value: '23', text: '23' },
                { value: '24', text: '24' },
                { value: '25', text: '25' },
                { value: '26', text: '26' },
                { value: '27', text: '27' },
                { value: '28', text: '28' },
                { value: '29', text: '29' },
                { value: '30', text: '30' },
                { value: '31', text: '31' },
                { value: '32', text: '32' },
            ]
        },
        {
            type: 107000027, // Керосин
            tanks: [{ value: '33', text: '3' }, { value: '38', text: '38' }, { value: '39', text: '39' }]
        },
    ],
    // Вернуть список баков по типу
    getTanks: function (type) {
        var tanks = getObjects(ozm_bak.list, 'type', type)
        if (tanks && tanks.length > 0) {
            return tanks[0].tanks;
        }
    }
};

var catalog_ozm = {
    list: null,
};

var catalog_depots = {
    list: null,
    get: function (id) {
        var depots = getObjects(catalog_depots.list, 'id', id)
        if (depots != null && depots.length > 0) {
            return depots[0];
        }
    }
};

var catalog_werks = {
    list: null,
};
// Список rfid-карт
var cards = {
    list: [],
    setCards: function (data) {
        cards.list = data;
    },
    getCardOfNumSide: function (trk_num, side) {
        // Считаем карту
        var card = getObjects(cards.list, 'num_trk', trk_num)
        if (card != null && card.length > 0) {
            for (i = 0; i < card.length; i++) {
                if (card[i].side == side) {
                    return card[i].card;
                }
            }
            return null;
        }
    }
};
// список пистолетов
var guns = {
    list: [],
    setGuns: function (data) {
        guns.list = data;
    },
    getGun: function (num_gun) {
        var obj = getObjects(guns.list, 'num_gun', num_gun)
        if (obj && obj.length > 0) {
            return obj[0];
        }
    }
};

var pb_deliver = {
    pb: [],
    obj: null,
    lab: null,
    init: function () {
        pb_deliver.obj = $(".progressbar-deliver").progressbar({
            value: false,
            change: function () {
                var s = $(this).progressbar("value") + "%";
            },
            //complete: function () {
            //    progressLabel.text("Complete!");
            //}


        });
        pb_deliver.lab = $(".progress-label");
    },
    outValume: function (num_gun, valume) {
        // вывести значение
        pb_deliver.obj.each(function (indx, element) {
            var id = $(this).attr('id');
            if ('progressbar-gun-' + num_gun == id) {
                $(this).progressbar("value", valume);
            }
        });
        // вывести показания
        pb_deliver.lab.each(function (indx, element) {
            var id = $(this).attr('id');
            if ('progress-label-gun-' + num_gun == id) {
                $(this).text(valume + '%');
            }
        });


        ////var pb = pb_deliver.obj.find("#progressbar-gun-" + num_gun);
        //var pb = pb_deliver.obj.find('progressbar-gun-11');
        //pb.progressbar("value", valume);
        ////pb_deliver.obj.progressbar("value", valume);
    }
}

// Показать все rfid-карты
function viewCards() {
    if (cards) {
        list = cards.list;
        if (list) {
            for (i = 0; i < list.length; i++) {
                if (list[i].card) {
                    $('#button-trk-' + list[i].num_trk + '-' + list[i].side + '-rfid').show();
                    $('#button-trk-' + list[i].num_trk + '-' + list[i].side + '-rfid').text(list[i].card.Number);
                    if (list[i].card.Active) {
                        $('#button-trk-' + list[i].num_trk + '-' + list[i].side + '-rfid').removeClass('button-rfid-not-active').addClass('button-rfid-active');
                    } else {
                        $('#button-trk-' + list[i].num_trk + '-' + list[i].side + '-rfid').removeClass('button-rfid-active').addClass('button-rfid-not-active');
                    }
                    $('#label-trk-' + list[i].num_trk + '-' + list[i].side + '-rfid').hide();
                } else {
                    $('#button-trk-' + list[i].num_trk + '-' + list[i].side + '-rfid').hide();
                    $('#label-trk-' + list[i].num_trk + '-' + list[i].side + '-rfid').show();
                }


            }
        }

    }
};
// Показать все пистолеты
function viewGuns() {
    if (guns) {
        list = guns.list;
        if (list) {
            for (i = 0; i < list.length; i++) {
                var gun = list[i];
                // Вывод связь
                if (gun.online != null) {
                    if (gun.online) {
                        $('#gun-' + gun.num_gun + '-online').html("").removeClass().addClass('active');
                    } else {
                        $('#gun-' + gun.num_gun + '-online').html("").removeClass().addClass('not_active');
                    }
                } else {
                    $('#gun-' + gun.num_gun + '-online').html("").removeClass().addClass('null_active');
                }
                // Вывод снятия пистолета
                if (gun.taken != null) {
                    if (gun.taken) {
                        $('#gun-' + gun.num_gun + '-taken').html("").removeClass().addClass('active');
                    } else {
                        $('#gun-' + gun.num_gun + '-taken').html("").removeClass().addClass('not_active');
                    }
                } else {
                    $('#gun-' + gun.num_gun + '-taken').html("").removeClass().addClass('null_active');
                }
                // Вывод всего
                if (gun.total_volume != null) {
                    $('#gun-' + gun.num_gun + '-total_volume').val(gun.total_volume).removeClass('error');
                } else {
                    $('#gun-' + gun.num_gun + '-total_volume').val('').addClass('error');
                }
                // Вывод заданно
                if (gun.volume_to_write != null) {
                    $('#gun-' + gun.num_gun + '-volume_to_write').val(gun.volume_to_write).removeClass('error');
                } else {
                    $('#gun-' + gun.num_gun + '-volume_to_write').val('').addClass('error');
                }
                // Вывод выданно
                if (gun.last_out_volume != null) {
                    $('#gun-' + gun.num_gun + '-last_out_volume').val(gun.last_out_volume).removeClass('error');
                } else {
                    $('#gun-' + gun.num_gun + '-last_out_volume').val('').addClass('error');
                }
                // Определить активную кнопку

                // тест
                pb_deliver.outValume(gun.num_gun, 10);
            }
        }

    }
};
// Вывод информации на экран 
function show() {
    // Время
    var d = new Date();
    $('#date-value').text(toISOStringTZ(d));

    // Считаем RFID из буфера локальной базы
    getRFIDDB(
        function (result_cards) {
            if (result_cards) {
                cards.setCards(result_cards);
                viewCards();

                var card = result_cards[0].card;
                if (card) {
                    $('#number-value').text(card.Number);
                    $('#autonumber-value').text(card.AutoNumber);
                }
            }
        }
    )
    // Прочтем теги пистолетов из OPC
    getGunTags(
        function (result_guns) {
            if (result_guns) {
                guns.setGuns(result_guns);
                viewGuns();
                // Тест
                var gun = result_guns[0]

                $('#current_volume-value').text(gun.current_volume);
                $('#density-value').text(gun.density);
                $('#last_out_volume-value').text(gun.last_out_volume);
                $('#online-value').text(gun.online);
                $('#passage-value').text(gun.passage);
                $('#price_to_write-value').text(gun.price_to_write);
                $('#start-value').text(gun.start);
                $('#state-value').text(gun.state);
                $('#stop-value').text(gun.stop);
                $('#taken-value').text(gun.taken);
                $('#total_volume-value').text(gun.total_volume);
                $('#Trk06_0_status-value').text(gun.status);
                $('#volume_to_write-value').text(gun.volume_to_write);
                $('#write_price-value').text(gun.write_price);
                $('#type_fuel-value').text(gun.type_fuel);


            }
        }
    );
};

// Панель "Информация по RFID-карте"
var confirm_rfid_card = {
    obj: null,
    init: function () {
        confirm_rfid_card.obj = $("#confirm-rfid-card").dialog({
            resizable: false,
            modal: true,
            autoOpen: false,
            height: "auto",
            width: 600,
            buttons: {
                Cancel: function () {
                    $(this).dialog("close");
                }
            }
        });
    },
    Open: function (trk_num, side) {
        if (trk_num && side) {
            confirm_rfid_card.obj.dialog("option", "title", 'RFID-карта (Колонка №' + trk_num + ', сторона :' + (side == 0 ? 'левая' : 'правая') + ')');
            confirm_rfid_card.obj.dialog("open");
            var card = cards.getCardOfNumSide(trk_num, side)
            if (card) {
                $('#id').val(card.Id);
                $('#Number').val(card.Number);
                $('#DriverName').val(card.DriverName);
                $('#AutoNumber').val(card.AutoNumber);
                $('#Debitor').val(card.Debitor);
                $('#Sn1').val(card.Sn1);
                $('#Sn2').val(card.Sn2);
                $('#AutoModel').val(card.AutoModel);
                $('#Street').val(card.Street);
                $('#House').val(card.Name);
                $('#CreateDate').val(card.CreateDate);
                $('#CreateTime').val(card.CreateTime);
                $('#UpdateDate').val(card.UpdateDate);
                $('#UpdateTime').val(card.UpdateTime);
                $('#Owner').val(card.Owner);
                $('#Active').prop('checked', card.Active);
            }
        }
    }
};
// Панель "Задания выдачи и работе с SAP MII"
var confirm_deliver_fuel = {
    obj: null,
    form: null,

    card: null,
    supply: null,

    input_deliver_type_fuel: null, // тип топлива
    input_deliver_dose_fuel: null, // доза топлива
    select_capacity: null, // выбор емкостей

    select_variant: null, // выбор номеров позиций по поставке

    select_num_pos: null,  // выбор номеров позиций по поставке

    // SAP-ОЗМ
    select_sap_ozm: null,
    input_sap_ozm: null,
    // Склад получателя
    select_sap_stock_recipient: null,
    input_sap_stock_recipient: null,
    // Завод получатель
    select_sap_factory_recipient: null,
    input_sap_factory_recipient: null,

    init: function () {
        confirm_deliver_fuel.obj = $("#confirm-deliver-fuel").dialog({
            resizable: false,
            modal: true,
            autoOpen: false,
            height: "auto",
            width: 1000,
            buttons: {
                'Начать': function () {
                    $(this).dialog("close");
                }
            }
        });
        // нажата кнопка "Получить из САП"
        $('.button-sap').on('click', function () {
            event.preventDefault();
            var i = confirm_deliver_fuel.select_variant.val();
            // Очистим результаты САП
            if (confirm_deliver_fuel.select_num_pos) {
                confirm_deliver_fuel.select_num_pos = null;
                $('select[name ="sap-num-pos"]').selectmenu("destroy");
            }
            confirm_deliver_fuel.input_sap_ozm.val('');
            //$('input#sap-ozm').val('');
            //$('textarea#sap-ozm-bak').val('');
            $('input#sap-ozm-amount').val('');
            confirm_deliver_fuel.input_sap_stock_recipient.val('')
            //$('textarea#sap-stock-recipient').val('');
            confirm_deliver_fuel.input_sap_factory_recipient.val('')
            //$('input#sap-factory-recipient').val('');


            switch (i) {
                case "1":
                case "2":
                case "5":
                case "6":
                    // По резервированию
                    var num = $('input#sap-num').val();
                    var pos = $('input#sap-num-pos').val();

                    getReservation(
                        num,
                        pos,
                        function (result) {
                            $('input#sap-num').val(result.RSNUM);
                            confirm_deliver_fuel.input_sap_ozm.val(result.MATNR);
                            //$('input#sap-ozm').val(result.MATNR);
                            $('input#sap-ozm-amount').val(result.BDMNG);
                            confirm_deliver_fuel.input_sap_factory_recipient.val(result.WERKS)
                            //$('input#sap-factory-recipient').val();

                            //getCatalogOfOZM(result.MATNR,
                            //    function (ozm) {
                            //        $('textarea#sap-ozm-bak').val('(' + ozm.id + ') ' + ozm.name);
                            //    }
                            //);
                            var depots = catalog_depots.get($.trim(result.UMLGO));
                            if (depots) {
                                confirm_deliver_fuel.input_sap_stock_recipient.val('(' + depots.id + ') ' + depots.name)
                                //$('textarea#sap-stock-recipient').val();
                            }
                        }
                    );
                    break;
                case "3":
                    var num = $('input#sap-num').val();
                    confirm_deliver_fuel.supply = null;
                    getSupply(
                        num,
                        function (result) {
                            if (result) {
                                confirm_deliver_fuel.supply = result;
                                var pos = [];
                                for (i = 0; i < result.length; i++) {
                                    pos.push({ value: result[i].posnr, text: result[i].posnr });
                                };
                                //$('select#sap-num-pos').show();
                                confirm_deliver_fuel.select_num_pos = initSelect(
                                    $('select[name ="sap-num-pos"]'),
                                    { width: 150 },
                                    pos,
                                    null,
                                    -1,
                                    function (event, ui) {
                                        event.preventDefault();
                                        confirm_deliver_fuel.input_sap_ozm.val('');
                                        //$('input#sap-ozm').val('');
                                        //$('textarea#sap-ozm-bak').val('');
                                        $('input#sap-ozm-amount').val('');
                                        confirm_deliver_fuel.input_sap_stock_recipient.val('')
                                        //$('textarea#sap-stock-recipient').val('');
                                        //$('input#sap-factory-recipient').val('');
                                        var sup = getObjects(confirm_deliver_fuel.supply, 'posnr', ui.item.value)
                                        if (sup != null && sup.length > 0) {
                                            confirm_deliver_fuel.input_sap_ozm.val(sup[0].MATNR);
                                            //$('input#sap-ozm').val(sup[0].MATNR);
                                            $('input#sap-ozm-amount').val(sup[0].LFIMG);
                                            confirm_deliver_fuel.input_sap_stock_recipient.val(sup[0].KUNNR)
                                            //$('textarea#sap-stock-recipient').val();
                                            //getCatalogOfOZM(sup[0].MATNR,
                                            //    function (ozm) {
                                            //        $('textarea#sap-ozm-bak').val('(' + ozm.id + ') ' + ozm.name);
                                            //    }
                                            //);
                                        };
                                    },
                                    null);

                            }
                        }
                    );
                    break;


            };
        });
        // Sumbit form
        confirm_deliver_fuel.form = confirm_deliver_fuel.obj.find("form").on("submit", function (event) {
            event.preventDefault();
            //var id = $(this).attr('id');
        });
        // выбор режимов
        confirm_deliver_fuel.select_variant = $('select[name ="variant-sap"]');
        initSelect(
            confirm_deliver_fuel.select_variant,
            { width: 300 },
            [
                { value: 1, text: 'По резервированию (керосин)' },
                { value: 2, text: 'По резервированию (ГСМ)' },
                { value: 3, text: 'По исходящей поставке' },
                { value: 4, text: 'По требованию (самовывоз)' },
                { value: 5, text: 'Заправка в баки ТС' },
                { value: 6, text: 'Заправка в цистерну топливозаправщика' },
            ],
            null,
            -1,
            function (event, ui) {
                event.preventDefault();
                switch (ui.item.value) {
                    case '1':
                        confirm_deliver_fuel.clear();
                        $('tr#button-sap').show();
                        $('tr#sap-num').show(); $('#label-sap-num').text('*Номер резервирования :');
                        $('tr#sap-num-pos').show(); $('input#sap-num-pos').show(); $('#label-sap-num-pos').text('*Номер позиции :');
                        $('tr#sap-num-ts').show(); $('#label-sap-num-ts').text('*Номер ТС фактический :');
                        $('tr#sap-num-kpp').show(); $('#label-sap-num-kpp').text('*№ КПП :');
                        $('tr#sap-name-forwarder').show(); $('#label-sap-name-forwarder').text('*ФИО экспедитора :');
                        $('tr#sap-ozm').show(); confirm_deliver_fuel.input_sap_ozm.attr('disabled', 'disabled').show(); $('#label-sap-ozm').text('ОЗМ из резервирования :');
                        $('tr#sap-ozm-bak').show(); $('#label-sap-ozm-bak').text('ОЗМ согласно бака :');
                        $('tr#sap-ozm-amount').show(); $('#label-sap-ozm-amount').text('Количество :');
                        $('tr#sap-stock-recipient').show(); confirm_deliver_fuel.input_sap_stock_recipient.attr('disabled', 'disabled').show(); $('#label-sap-stock-recipient').text('Склад получателя из резервирования :');
                        $('tr#sap-factory-recipient').show(); confirm_deliver_fuel.input_sap_factory_recipient.attr('disabled', 'disabled').show(); $('#label-sap-factory-recipient').text('Завод-получатель :');
                        if (confirm_deliver_fuel.card) {
                            $('input#sap-num-ts').val(confirm_deliver_fuel.card.AutoNumber)
                        }
                        break;
                    case '2':
                        confirm_deliver_fuel.clear();
                        $('tr#button-sap').show();
                        $('tr#sap-num').show(); $('#label-sap-num').text('*Номер резервирования :');
                        $('tr#sap-num-pos').show(); $('input#sap-num-pos').show(); $('#label-sap-num-pos').text('*Номер позиции :');
                        $('tr#sap-num-ts').show(); $('#label-sap-num-ts').text('*Номер ТС фактический :');
                        $('tr#sap-num-kpp').show(); $('#label-sap-num-kpp').text('*№ КПП :');
                        $('tr#sap-name-forwarder').show(); $('#label-sap-name-forwarder').text('*ФИО экспедитора :');
                        $('tr#sap-ozm').show(); confirm_deliver_fuel.input_sap_ozm.attr('disabled', 'disabled').show(); $('#label-sap-ozm').text('ОЗМ из резервирования :');
                        $('tr#sap-ozm-bak').show(); $('#label-sap-ozm-bak').text('ОЗМ согласно бака :');
                        $('tr#sap-ozm-amount').show(); $('#label-sap-ozm-amount').text('Количество :');
                        $('tr#sap-stock-recipient').show(); confirm_deliver_fuel.input_sap_stock_recipient.attr('disabled', 'disabled').show(); $('#label-sap-stock-recipient').text('Склад получателя из резервирования :');
                        $('tr#sap-factory-recipient').show(); confirm_deliver_fuel.input_sap_factory_recipient.attr('disabled', 'disabled').show(); $('#label-sap-factory-recipient').text('Завод-получатель :');
                        $('tr#sap-id-card').show(); $('#label-sap-id-card').text('ИД карта :');
                        if (confirm_deliver_fuel.card) {
                            $('input#sap-num-ts').val(confirm_deliver_fuel.card.AutoNumber)
                            $('input#sap-id-card').val(confirm_deliver_fuel.card.Id)
                        }
                        break;
                    case '3':
                        confirm_deliver_fuel.clear();
                        $('tr#button-sap').show();
                        $('tr#sap-num').show(); $('#label-sap-num').text('*Номер исх.поставки :');
                        $('tr#sap-num-pos').show(); $('input#sap-num-pos').hide(); $('#label-sap-num-pos').text('*Номер позиции ИП  :');
                        $('tr#sap-num-ts').show(); $('#label-sap-num-ts').text('*Номер ТС фактический :');
                        $('tr#sap-num-kpp').show(); $('#label-sap-num-kpp').text('*№ КПП :');
                        $('tr#sap-name-forwarder').show(); $('#label-sap-name-forwarder').text('*ФИО экспедитора :');
                        $('tr#sap-ozm').show(); confirm_deliver_fuel.input_sap_ozm.attr('disabled', 'disabled').show(); $('#label-sap-ozm').text('ОЗМ из поставки :');
                        $('tr#sap-ozm-bak').show(); $('#label-sap-ozm-bak').text('ОЗМ согласно бака :');
                        $('tr#sap-ozm-amount').show(); $('#label-sap-ozm-amount').text('Количество :');
                        $('tr#sap-stock-recipient').show(); confirm_deliver_fuel.input_sap_stock_recipient.attr('disabled', 'disabled').show(); $('#label-sap-stock-recipient').text('Склад получателя = Получатель материала в ИП :');

                        if (confirm_deliver_fuel.card) {
                            $('input#sap-num-ts').val(confirm_deliver_fuel.card.AutoNumber)
                        }
                        break;
                    case '4':
                        confirm_deliver_fuel.clear();
                        $('tr#sap-num').show(); $('#label-sap-num').text('*Номер требования М-11 :');
                        $('tr#sap-num-ts').show(); $('#label-sap-num-ts').text('*Номер ТС фактический :');
                        $('tr#sap-num-kpp').show(); $('#label-sap-num-kpp').text('*№ КПП :');
                        $('tr#sap-name-forwarder').show(); $('#label-sap-name-forwarder').text('*ФИО экспедитора :');
                        $('tr#sap-ozm').show(); confirm_deliver_fuel.select_sap_ozm.selectmenu("widget").show();
                        $('tr#sap-ozm-bak').show(); $('#label-sap-ozm-bak').text('ОЗМ согласно бака :');
                        //$('tr#sap-stock-recipient').show(); $('#label-sap-stock-recipient').text('Склад получателя :');
                        $('tr#sap-stock-recipient').show(); confirm_deliver_fuel.select_sap_stock_recipient.selectmenu("widget").show(); $('#label-sap-stock-recipient').text('Склад получателя :');
                        $('tr#sap-factory-recipient').show(); confirm_deliver_fuel.select_sap_factory_recipient.selectmenu("widget").show(); $('#label-sap-factory-recipient').text('Завод-получатель :');
                        // завод
                        break;
                    case '5':
                        confirm_deliver_fuel.clear();
                        $('tr#button-sap').show();
                        $('tr#sap-num').show(); $('#label-sap-num').text('*Номер резервирования :');
                        $('tr#sap-num-pos').show(); $('input#sap-num-pos').show(); $('#label-sap-num-pos').text('*Номер позиции :');
                        $('tr#sap-num-ts').show(); $('#label-sap-num-ts').text('*Номер ТС фактический :');
                        $('tr#sap-num-kpp').show(); $('#label-sap-num-kpp').text('*№ КПП :');
                        $('tr#sap-name-forwarder').show(); $('#label-sap-name-forwarder').text('*ФИО экспедитора :');
                        $('tr#sap-ozm').show(); confirm_deliver_fuel.input_sap_ozm.attr('disabled', 'disabled').show(); $('#label-sap-ozm').text('ОЗМ из резервирования :');
                        $('tr#sap-ozm-bak').show(); $('#label-sap-ozm-bak').text('ОЗМ согласно бака :');
                        $('tr#sap-ozm-amount').show(); $('#label-sap-ozm-amount').text('Количество :');
                        $('tr#sap-stock-recipient').show(); confirm_deliver_fuel.input_sap_stock_recipient.attr('disabled', 'disabled').show(); $('#label-sap-stock-recipient').text('Склад получателя из резервирования :');
                        $('tr#sap-factory-recipient').show(); confirm_deliver_fuel.input_sap_factory_recipient.attr('disabled', 'disabled').show(); $('#label-sap-factory-recipient').text('Завод-получатель :');
                        $('tr#sap-id-card').show(); $('#label-sap-id-card').text('ИД карта :');
                        if (confirm_deliver_fuel.card) {
                            $('input#sap-num-ts').val(confirm_deliver_fuel.card.AutoNumber)
                            $('input#sap-id-card').val(confirm_deliver_fuel.card.Id)
                        }
                        break;
                    case '6':
                        confirm_deliver_fuel.clear();
                        $('tr#button-sap').show();
                        $('tr#sap-num').show(); $('#label-sap-num').text('*Номер резервирования :');
                        $('tr#sap-num-pos').show(); $('input#sap-num-pos').show(); $('#label-sap-num-pos').text('*Номер позиции :');
                        $('tr#sap-num-ts').show(); $('#label-sap-num-ts').text('*Номер ТС фактический :');
                        $('tr#sap-num-kpp').show(); $('#label-sap-num-kpp').text('*№ КПП :');
                        $('tr#sap-name-forwarder').show(); $('#label-sap-name-forwarder').text('*ФИО экспедитора :');
                        $('tr#sap-ozm').show(); confirm_deliver_fuel.input_sap_ozm.attr('disabled', 'disabled').show(); $('#label-sap-ozm').text('ОЗМ из резервирования :');
                        $('tr#sap-ozm-bak').show(); $('#label-sap-ozm-bak').text('ОЗМ согласно бака :');
                        $('tr#sap-ozm-amount').show(); $('#label-sap-ozm-amount').text('Количество :');
                        $('tr#sap-stock-recipient').show(); $('tr#sap-stock-recipient').show(); confirm_deliver_fuel.input_sap_stock_recipient.attr('disabled', 'disabled').show(); $('#label-sap-stock-recipient').text('Склад получателя из резервирования :');
                        $('tr#sap-factory-recipient').show(); confirm_deliver_fuel.input_sap_factory_recipient.attr('disabled', 'disabled').show(); $('#label-sap-factory-recipient').text('Завод-получатель :');
                        $('tr#sap-id-card').show(); $('#label-sap-id-card').text('ИД карта :');
                        if (confirm_deliver_fuel.card) {
                            $('input#sap-num-ts').val(confirm_deliver_fuel.card.AutoNumber)
                            $('input#sap-id-card').val(confirm_deliver_fuel.card.Id)
                        }
                        break;
                    default:
                        confirm_deliver_fuel.clear();
                        break;
                }
            },
            null);

        // тип топлива
        confirm_deliver_fuel.input_deliver_type_fuel = $('input#deliver-type-fuel');
        // доза топлива
        confirm_deliver_fuel.input_deliver_dose_fuel = $('input#deliver-DoseFuel');
        // sap-ozm
        confirm_deliver_fuel.select_sap_ozm = initSelect(
            $('select[name ="sap-ozm"]'),
            { width: 250 },
            catalog_ozm.list,
            function (row) {
                return { value: Number(row.id), text: row.name };
            },
            -1,
            function (event, ui) {
                event.preventDefault();
            },
            null);
        confirm_deliver_fuel.input_sap_ozm = $('input#sap-ozm');
        // склад получателя
        confirm_deliver_fuel.input_sap_stock_recipient = $('textarea#sap-stock-recipient');
        confirm_deliver_fuel.select_sap_stock_recipient = initSelect(
            $('select[name ="sap-stock-recipient"]'),
            { width: 250 },
            catalog_depots.list,
            function (row) {
                return { value: Number(row.id), text: row.name };
            },
            -1,
            function (event, ui) {
                event.preventDefault();
            },
            null);
        // завод получателя
        confirm_deliver_fuel.input_sap_factory_recipient = $('input#sap-factory-recipient');     
        confirm_deliver_fuel.select_sap_factory_recipient =  initSelect(
            $('select[name ="sap-factory-recipient"]'),
            { width: 250 },
            catalog_werks.list,
            function (row) {
                return { value: Number(row.id), text: row.name };
            },
            -1,
            function (event, ui) {
                event.preventDefault();
            },
            null);
    },
    // Открыть панель "Задания выдачи и работе с SAP MII"
    Open: function (num_gun) {
        // Спрячим все поля
        confirm_deliver_fuel.clear();
        confirm_deliver_fuel.card = null; // Обнулим карту
        confirm_deliver_fuel.select_variant.val(-1).selectmenu("refresh");
        if (confirm_deliver_fuel.select_capacity) {
            confirm_deliver_fuel.select_capacity = null;
            $('select[name ="Capacity"]').selectmenu("destroy");
        };
        if (num_gun) {
            confirm_deliver_fuel.obj.dialog("option", "title", 'Выдать топливо (пистолет-' + num_gun + ')');
            confirm_deliver_fuel.obj.dialog("open");
            var gun = guns.getGun(num_gun);
            if (gun) {
                $('#deliver-type-fuel').val(outFuelType(gun.type_fuel));
                $('textarea#sap-ozm-bak').val('(' + gun.type_fuel + ') ' + outFuelType(gun.type_fuel));
                $('#deliver-Taken').prop('checked', gun.taken);
                // Обнулить данные по баку
                $('#deliver-take-level').val('');
                $('#deliver-take-mass').val('');
                $('#deliver-take-temp').val('');
                $('#deliver-take-volume').val('');
                $('#deliver-take-dens').val('');
                confirm_deliver_fuel.select_capacity = initSelect(
                    $('select[name ="Capacity"]'),
                    { width: 150 },
                    ozm_bak.getTanks(gun.type_fuel),
                    null,
                    -1,
                    function (event, ui) {
                        event.preventDefault();
                        getTankTags(ui.item.value,
                            function (result) {
                                $('#deliver-take-level').val(result.level);
                                $('#deliver-take-mass').val(result.mass);
                                $('#deliver-take-temp').val(result.temp);
                                $('#deliver-take-volume').val(result.volume);
                                $('#deliver-take-dens').val(result.dens);
                            }
                        );
                    },
                    null);
                confirm_deliver_fuel.card = cards.getCardOfNumSide(gun.num_trk, gun.side);
                // Вывести инфу по карте
                if (confirm_deliver_fuel.card) {
                    $('#deliver-Active').prop('checked', confirm_deliver_fuel.card.Active);
                    $('#deliver-Number').val(confirm_deliver_fuel.card.Number);
                    $('#deliver-AutoNumber').val(confirm_deliver_fuel.card.AutoNumber);
                } else {
                    $('#deliver-Active').prop('checked', false);
                    $('#deliver-Number').val('');
                    $('#deliver-AutoNumber').val('');
                }
            }
        }
    },
    // Очистить данные
    clear: function () {
        // Спрячим все поля
        if (confirm_deliver_fuel.select_num_pos) {
            confirm_deliver_fuel.select_num_pos = null;
            $('select[name ="sap-num-pos"]').selectmenu("destroy");
        }
        // спрятать select
        $('select#deliver-Capacity').hide();
        $('select#sap-num-pos').hide();

        $('input#deliver-DoseFuel').val(''); // Очистить дозу
        $('tr#button-sap').hide();
        $('tr#sap-num').hide(); $('input#sap-num').val('');
        $('tr#sap-num-pos').hide(); $('input#sap-num-pos').val('');
        $('tr#sap-num-ts').hide(); $('input#sap-num-ts').val('');
        $('tr#sap-num-kpp').hide(); $('input#sap-num-kpp').val('');
        $('tr#sap-name-forwarder').hide(); $('input#sap-name-forwarder').val('');

        $('tr#sap-ozm').hide();
        confirm_deliver_fuel.input_sap_ozm.val('').hide();
        confirm_deliver_fuel.select_sap_ozm.selectmenu("widget").hide();

        $('tr#sap-ozm-bak').hide();
        $('tr#sap-ozm-amount').hide(); $('input#sap-ozm-amount').val('');

        $('tr#sap-stock-recipient').hide();
        confirm_deliver_fuel.input_sap_stock_recipient.val('').hide();
        confirm_deliver_fuel.select_sap_stock_recipient.selectmenu("widget").hide();

        $('tr#sap-factory-recipient').hide();
        confirm_deliver_fuel.input_sap_factory_recipient.val('').hide();
        confirm_deliver_fuel.select_sap_factory_recipient.selectmenu("widget").hide();
        //$('input#sap-factory-recipient').val('');

        $('tr#sap-id-card').hide(); $('input#sap-id-card').val('');
    }
};

$(function () {

    // Загрузка библиотек
    loadReference = function (callback) {
        var count = 3;
        // Загрузка (common.js)
        getCatalogOZM(function (result) {
            catalog_ozm.list = result;
            count -= 1;
            if (count <= 0) {
                if (typeof callback === 'function') {
                    callback();
                }
            }
        });
        // Загрузка (common.js)
        getCatalogDepots(function (result) {
            catalog_depots.list = result;
            count -= 1;
            if (count <= 0) {
                if (typeof callback === 'function') {
                    callback();
                }
            }
        });
        // Загрузка (common.js)
        getCatalogWerks(function (result) {
            catalog_werks.list = result;
            count -= 1;
            if (count <= 0) {
                if (typeof callback === 'function') {
                    callback();
                }
            }
        });

    };

    // Инициализаия кнопки вывода панели "Информация по RFID-карте"
    $('.button-rfid').on('click', function () {
        var trk_num = $(this).attr('data-trk');
        var side = $(this).attr('data-side');
        confirm_rfid_card.Open(trk_num, side);
    });

    // Инициализаия кнопки вывода панели ""
    $('.button-deliver').on('click', function () {
        var gun = $(this).attr('data-gun');
        confirm_deliver_fuel.Open(gun);
    });
    pb_deliver.init();

    // Загрузка библиотек
    loadReference(function (result) {
        // Инициализаия панели  "Информация по RFID-карте"
        confirm_rfid_card.init();
        // Инициализаия панели  "Задания выдачи и работе с SAP MII"
        confirm_deliver_fuel.init();
        // Загрузка документа
        $(document).ready(function () {
            show();
            setInterval('show()', 1000);
        });
    });



});
