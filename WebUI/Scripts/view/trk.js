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
                pb_deliver.outValume(gun.num_gun, 50);
            }
        }

    }
};
// Вывод информации на экран 
function show() {
    getTRKTags(
        function (result) {

            if (result) {
                cards.setCards(result.cards);
                guns.setGuns(result.guns);
                viewCards();
                viewGuns();
            }



            // Тест
            // Время
            var d = new Date();
            $('#date-value').text(toISOStringTZ(d));

            var gun = result.guns[0]

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
            var card = result.cards[10].card;
            $('#number-value').text(card.Number);
            $('#autonumber-value').text(card.AutoNumber);
        });
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

var confirm_deliver_fuel = {
    obj: null,
    form: null,
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
        confirm_deliver_fuel.form = confirm_deliver_fuel.obj.find("form").on("submit", function (event) {
            event.preventDefault();

        });
        initSelect(
            $('select[name ="variant-sap"]'),
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
                        $('tr#button-sap').show();
                        $('tr#sap-num').show(); $('#label-sap-num').text('*Номер резервирования :');
                        $('tr#sap-num-pos').show(); $('#label-sap-num-pos').text('*Номер позиции :');
                        $('tr#sap-num-ts').show(); $('#label-sap-num-ts').text('*Номер ТС фактический :');
                        $('tr#sap-num-kpp').show(); $('#label-sap-num-kpp').text('*№ КПП :');
                        $('tr#sap-name-forwarder').show(); $('#label-sap-name-forwarder').text('*ФИО экспедитора :');
                        $('tr#sap-ozm').show(); $('#sap-ozm').attr('disabled', 'disabled'); $('#label-sap-ozm').text('ОЗМ из резервирования  :');
                        break;
                    case '2':

                        break;
                    case '3':

                        break;
                    case '4':

                        break;
                    case '5':

                        break;
                    case '6':

                        break;
                    default:
                        confirm_deliver_fuel.clear();
                        break;
                }

            },
            null);
    },

    Open: function (num_gun) {
        confirm_deliver_fuel.clear();
        if (num_gun) {
            confirm_deliver_fuel.obj.dialog("option", "title", 'Выдать топливо (пистолет-' + num_gun + ')');
            confirm_deliver_fuel.obj.dialog("open");
            var gun = guns.getGun(num_gun);
            if (gun) {
                var card = cards.getCardOfNumSide(gun.num_trk, gun.side);
                if (card) {

                }
            }
        }

        //if (num_gun) {

        //    confirm_deliver_fuel.obj.dialog("option", "title", 'Выдать топливо (пистолет-' + num_gun+')');
        //    confirm_deliver_fuel.obj.dialog("open");

        //    var gun = guns.getGun(num_gun);
        //    var card = cards.getCardOfNumSide(gun.num_trk, gun.side);


        //    // Окно выдачи
        //    var sel = $('select[name ="Capacity"]');
        //    initSelect(
        //        sel,
        //        { width: 150 },
        //        [{value:0,text:'1'},{value:1,text:'2'}],
        //        null,
        //        -1,
        //        function (event, ui) {
        //            event.preventDefault();

        //        },
        //        null);
        //    $('#deliver-Active').prop('checked', card.Active);
        //    $('#deliver-Number').val(card.Number);
        //    $('#deliver-AutoNumber').val(card.AutoNumber);
        //    $('#deliver-Taken').prop('checked', card.taken);
        //    // Окно вариант выдачи

        //    $('tr#sap-num-ishod-postavki').hide();
        //    $('tr#sap-num-position-ip').hide();
        //    $('tr#sap-num-rezerv').hide();
        //    $('tr#sap-num-m11').hide();
        //    $('tr#sap-num-TC').hide();
        //    $('tr#sap-num-kpp').hide();
        //    $('tr#sap-fio-exp').hide();
        //    $('tr#sap-ozm-rezerv').hide();
        //    $('tr#sap-ozm-postavka').hide();
        //    $('tr#sap-ozm').hide();
        //    $('tr#sap-ozm-bak').hide();
        //    $('tr#sap-sklad-pol-reserv').hide();
        //    $('tr#sap-sklad-pol').hide();
        //    $('tr#sap-sklad-pol-mat-ip').hide();
        //    $('tr#sap-zavod-pol').hide();
        //    $('tr#sap-id-card').hide();
        //    var variant = $('select[name ="variant-sap"]');
        //    initSelect(
        //        variant,
        //        { width: 300 },
        //        [
        //            { value: 1, text: 'По резервированию (керосин)' },
        //            { value: 2, text: 'По резервированию (ГСМ)' },
        //            { value: 3, text: 'По исходящей поставке' },
        //            { value: 4, text: 'По требованию (самовывоз)' },
        //            { value: 5, text: 'Заправка в баки ТС' },
        //            { value: 6, text: 'Заправка в цистерну топливозаправщика' },
        //        ],
        //        null,
        //        -1,
        //        function (event, ui) {
        //            event.preventDefault();

        //            switch (ui.item.value){
        //                case '1':
        //                    $('tr#sap-num-ishod-postavki').hide();
        //                    $('tr#sap-num-position-ip').hide();
        //                    $('tr#sap-num-rezerv').show();
        //                    $('tr#sap-num-m11').hide();
        //                    $('tr#sap-num-TC').show();
        //                    $('tr#sap-num-kpp').show();
        //                    $('tr#sap-fio-exp').show();
        //                    $('tr#sap-ozm-rezerv').show();
        //                    $('tr#sap-ozm-postavka').hide();
        //                    $('tr#sap-ozm').hide();
        //                    $('tr#sap-ozm-bak').show();
        //                    $('tr#sap-sklad-pol-reserv').show();
        //                    $('tr#sap-sklad-pol').hide();
        //                    $('tr#sap-sklad-pol-mat-ip').hide();
        //                    $('tr#sap-zavod-pol').show();
        //                    $('tr#sap-id-card').hide();
        //                    break;
        //                case '2':
        //                    $('tr#sap-num-ishod-postavki').hide();
        //                    $('tr#sap-num-position-ip').hide();
        //                    $('tr#sap-num-rezerv').show();
        //                    $('tr#sap-num-m11').hide();
        //                    $('tr#sap-num-TC').show();
        //                    $('tr#sap-num-kpp').show();
        //                    $('tr#sap-fio-exp').show();
        //                    $('tr#sap-ozm-rezerv').show();
        //                    $('tr#sap-ozm-postavka').hide();
        //                    $('tr#sap-ozm').hide();
        //                    $('tr#sap-ozm-bak').show();
        //                    $('tr#sap-sklad-pol-reserv').show();
        //                    $('tr#sap-sklad-pol').hide();
        //                    $('tr#sap-sklad-pol-mat-ip').hide();
        //                    $('tr#sap-zavod-pol').show();
        //                    $('tr#sap-id-card').show();
        //                    break;
        //                case '3':
        //                    $('tr#sap-num-ishod-postavki').show();
        //                    $('tr#sap-num-position-ip').show();
        //                    $('tr#sap-num-rezerv').hide();
        //                    $('tr#sap-num-m11').hide();
        //                    $('tr#sap-num-TC').show();
        //                    $('tr#sap-num-kpp').show();
        //                    $('tr#sap-fio-exp').show();
        //                    $('tr#sap-ozm-rezerv').hide();
        //                    $('tr#sap-ozm-postavka').show();
        //                    $('tr#sap-ozm').hide();
        //                    $('tr#sap-ozm-bak').show();
        //                    $('tr#sap-sklad-pol-reserv').hide();
        //                    $('tr#sap-sklad-pol').hide();
        //                    $('tr#sap-sklad-pol-mat-ip').show();
        //                    $('tr#sap-zavod-pol').hide();
        //                    $('tr#sap-id-card').hide();
        //                    break;
        //                case '4':
        //                    $('tr#sap-num-ishod-postavki').hide();
        //                    $('tr#sap-num-position-ip').hide();
        //                    $('tr#sap-num-rezerv').hide();
        //                    $('tr#sap-num-m11').show();
        //                    $('tr#sap-num-TC').show();
        //                    $('tr#sap-num-kpp').show();
        //                    $('tr#sap-fio-exp').show();
        //                    $('tr#sap-ozm-rezerv').hide();
        //                    $('tr#sap-ozm-postavka').hide();
        //                    $('tr#sap-ozm').show();
        //                    $('tr#sap-ozm-bak').show();
        //                    $('tr#sap-sklad-pol-reserv').hide();
        //                    $('tr#sap-sklad-pol').show();
        //                    $('tr#sap-sklad-pol-mat-ip').hide();
        //                    $('tr#sap-zavod-pol').show();
        //                    $('tr#sap-id-card').hide();
        //                    break;
        //                case '5':
        //                    $('tr#sap-num-ishod-postavki').hide();
        //                    $('tr#sap-num-position-ip').hide();
        //                    $('tr#sap-num-rezerv').show();
        //                    $('tr#sap-num-m11').hide();
        //                    $('tr#sap-num-TC').show();
        //                    $('tr#sap-num-kpp').show();
        //                    $('tr#sap-fio-exp').show();
        //                    $('tr#sap-ozm-rezerv').show();
        //                    $('tr#sap-ozm-postavka').hide();
        //                    $('tr#sap-ozm').hide();
        //                    $('tr#sap-ozm-bak').show();
        //                    $('tr#sap-sklad-pol-reserv').show();
        //                    $('tr#sap-sklad-pol').hide();
        //                    $('tr#sap-sklad-pol-mat-ip').hide();
        //                    $('tr#sap-zavod-pol').show();
        //                    $('tr#sap-id-card').show();
        //                    break;
        //                case '6':
        //                    $('tr#sap-num-ishod-postavki').hide();
        //                    $('tr#sap-num-position-ip').hide();
        //                    $('tr#sap-num-rezerv').show();
        //                    $('tr#sap-num-m11').hide();
        //                    $('tr#sap-num-TC').show();
        //                    $('tr#sap-num-kpp').show();
        //                    $('tr#sap-fio-exp').show();
        //                    $('tr#sap-ozm-rezerv').show();
        //                    $('tr#sap-ozm-postavka').hide();
        //                    $('tr#sap-ozm').hide();
        //                    $('tr#sap-ozm-bak').show();
        //                    $('tr#sap-sklad-pol-reserv').show();
        //                    $('tr#sap-sklad-pol').hide();
        //                    $('tr#sap-sklad-pol-mat-ip').hide();
        //                    $('tr#sap-zavod-pol').show();
        //                    $('tr#sap-id-card').show();
        //                    break;
        //            }

        //        },
        //        null);
        //}

    },

    clear: function () {
        // Спячим все поля
        $('tr#button-sap').hide();
        $('tr#sap-num').hide();
        $('tr#sap-num-pos').hide();
        $('tr#sap-num-ts').hide();
        $('tr#sap-num-kpp').hide();
        $('tr#sap-name-forwarder').hide();
        $('tr#sap-ozm').hide();
    }
};

$(function () {
    // Инициализаия панели  "Информация по RFID-карте"
    confirm_rfid_card.init();
    confirm_deliver_fuel.init();
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

    // Загрузка документа
    $(document).ready(function () {
        show();
        setInterval('show()', 1000);
    });

});
