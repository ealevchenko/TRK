// не использую
function replaceWith(html) {
    var StyledError = "<div class=\"ui-state-error ui-corner-all\" style=\"padding: 0 .7em;\">";
    StyledError += "<p><span class=\"ui-icon ui-icon-alert\" style=\"float: left; margin-right: .3em;\">";
    StyledError += "</span><strong>Attention : </strong>";
    StyledError += html;
    StyledError += "</p></div>";
    return StyledError;
};

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
                // Тест
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
var confirm_df = {
    obj: null,
    form: null,
    operator_name: 'Оператор тест',

    gun: null,  // текущие теги пистолета
    card: null, // текущая карта
    supply: null, // текущая поставка возвращенная от САП

    // КОЛОНКА ********************************************************
    input_deliver_type_fuel: null,      // тип топлива

    select_capacity: null,              // выбор емкостей
    // основные параметры емкости
    input_deliver_take_level: null,     // уровень
    input_deliver_take_mass: null,      // масса
    input_deliver_take_temp: null,      // температура
    input_deliver_take_volume: null,    // объем
    input_deliver_take_dens: null,      // плотность
    input_deliver_dose_fuel: null,      // доза топлива
    checkbox_deliver_Passage: null,     // Режим пролив
    // SAP ********************************************************
    select_variant: null,               // выбор номеров позиций по поставке
    buttom_select_sap: null,            // Запрос на САП
    input_sap_num: null,                // Номер запроса в САП
    input_sap_num_pos: null,            // Номер позиции запроса в САП
    select_sap_num_pos: null,           // выбор номеров позиций по поставке
    input_sap_num_ts: null,             // Номер транспортного средства
    input_sap_num_kpp: null,            // Номер КПП
    input_sap_name_forwarder: null,     // ФИО экпедитора
    select_sap_ozm: null,               // SAP-ОЗМ выбор
    input_sap_ozm: null,                // SAP-ОЗМ ответ справочника
    input_sap_ozm_bak: null,            // ОЗМ БАК
    input_sap_ozm_amount: null,         // Количество для выдачи
    select_sap_stock_recipient: null,   // Склад получателя выбор
    input_sap_stock_recipient: null,    // Склад получателя ответ справочника
    select_sap_factory_recipient: null, // Завод получатель выбор
    input_sap_factory_recipient: null,  // Завод получатель ответ справочника
    input_sap_id_card: null,            // ИД карта

    allFields: null,
    //сохраним данные в локальной базе fuelSale
    save_fuelSale: function (id) {
        alert('id=' + id);
        confirm_df.obj.dialog("close");
    },
    // Форма подтверждения сохранения данных в САП
    fsap : {
        obj: null,
        init: function () {
            confirm_df.fsap.obj = $("#dialog-message").dialog({
                modal: true,
                title: 'Отправить в SAP?',
                autoOpen: false,
                height: "auto",
                width: "auto",
                buttons: {
                    Ok: function () {
                        postAsyncSAP_Buffer(
                            sap_buffer,
                            function (id) {
                                // Данные в САП сохранились?
                                if (id > 0) {
                                    // Запись в базу локальную
                                    confirm_df.save_fuelSale(id);
                                }
                            }
                        );
                        $(this).dialog("close");
                    },
                    'Отмена': function () {
                        $(this).dialog("close");
                    }
                }
            });
        },
        open: function (sap_buffer) {
            confirm_df.fsap.obj.dialog("open");
            if (sap_buffer) {
                $('label#SAP-DATE').text(sap_buffer.DATE);
                $('label#SAP-TIME').text(sap_buffer.TIME);
                $('label#SAP-LOGIN_R').text(sap_buffer.LOGIN_R);
                $('label#SAP-N_BAK').text(sap_buffer.N_BAK);
                $('label#SAP-OZM_BAK').text(sap_buffer.OZM_BAK);
                $('label#SAP-OZM_TREB').text(sap_buffer.OZM_TREB);
                $('label#SAP-FLAG_R').text(sap_buffer.FLAG_R);
                $('label#SAP-PLOTNOST').text(sap_buffer.PLOTNOST);
                $('label#SAP-VOLUME').text(sap_buffer.VOLUME);
                $('label#SAP-MASS').text(sap_buffer.MASS);
                $('label#SAP-LOGIN_EXP').text(sap_buffer.LOGIN_EXP);
                $('label#SAP-N_POST').text(sap_buffer.N_POST);
                $('label#SAP-TRANSP_FAKT').text(sap_buffer.TRANSP_FAKT);
                $('label#SAP-N_DEB').text(sap_buffer.N_DEB);
                $('label#SAP-N_TREB').text(sap_buffer.N_TREB);
                $('label#SAP-LGORT').text(sap_buffer.LGORT);
                $('label#SAP-WERKS').text(sap_buffer.WERKS);
            }
        }
    },
        // Вернуть позицию поставки
    getPosSupply: function (pos) {
        var sup = getObjects(confirm_df.supply, 'posnr', pos)
        if (sup != null && sup.length > 0) {
            return sup[0];
        };
        return null;
    },
    //
    updateTips: function (t) {
        $(".validateTips")
            .text(t)
            .addClass("ui-state-highlight");
        setTimeout(function () {
            $(".validateTips").removeClass("ui-state-highlight", 1500);
        }, 500);
    },
    //
    checkLengthOfMessage: function (o, message, min, max) {
        if (o.val().length > max || o.val().length < min) {
            o.addClass("ui-state-error");
            confirm_df.updateTips(message);
            return false;
        } else {
            return true;
        }
    },
    //
    checkLength: function (o, n, min, max) {
        if (o.val().length > max || o.val().length < min) {
            o.addClass("ui-state-error");
            confirm_df.updateTips("Размер поля [" + n + "] должен быть в диапазоне от " +
                min + " до " + max + ".");
            return false;
        } else {
            return true;
        }
    },
    //
    checkSelect: function (o, n, min, max) {
        if (o.val() > max || o.val() < min) {
            o.addClass("ui-state-error");
            confirm_df.updateTips("Length of " + n + " must be between " +
                min + " and " + max + ".");
            return false;
        } else {
            return true;
        }
    },
    // Проверка на выбор за указаный период valume
    checkSelectOfMessage: function (o, message, min, max) {
        if (o.val() > max || o.val() < min) {
            o.addClass("ui-state-error");
            confirm_df.updateTips(message);
            return false;
        } else {
            return true;
        }
    },
    // Проверка на выбор valume >-1
    checkSelectValOfMessage: function (o, message) {
        if (Number(o.val()) <0) {
            o.addClass("ui-state-error");
            confirm_df.updateTips(message);
            return false;
        } else {
            return true;
        }
    },
    // Проверка на пустой объект
    checkIsNullOfMessage: function (o, message) {
        if (o.val() == '' || o.val() == null) {
            o.addClass("ui-state-error");
            confirm_df.updateTips(message);
            return false;
        } else {
            return true;
        }
    },
    // Проверка на пустой объект
    checkCheckboxOfMessage: function (o, condition, message) {
        if (o.prop('checked') != condition) {
            o.addClass("ui-state-error");
            confirm_df.updateTips(message);
            return false;
        } else {
            return true;
        }
    },
    // инициализация формы
    init: function () {
        confirm_df.obj = $("#confirm-deliver-fuel").dialog({
            resizable: false,
            modal: true,
            autoOpen: false,
            height: "auto",
            width: 1000,
            buttons: {
                'Начать выдачу': function () {
                    var valid = true;
                    confirm_df.allFields.removeClass("ui-state-error");

                    //if (confirm_df.gun) { valid = valid && confirm_df.checkCheckboxOfMessage($('#deliver-Taken'), true, "Пистолет не снят - выдача запрещена!")}

                    var variant = confirm_df.select_variant.val();

                    if (!confirm_df.checkbox_deliver_Passage.prop('checked')) {
                        // режим не пролив
                        valid = valid && confirm_df.checkSelectOfMessage(confirm_df.select_variant, "Выберите и заполните вариант выдачи", 1, 6);
                        
                        valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_sap_num, "Не указан номер (резервирования\ исх.поставки\ требования М-11)");
                        if (variant != 4 && variant != 3) valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_sap_num_pos, "Не указан номер позиции");
                        if (variant == 3) valid = valid && confirm_df.checkSelectValOfMessage(confirm_df.select_sap_num_pos, "Выберите номер позиции ИП", 1, 10);
                        valid = valid && confirm_df.checkLength(confirm_df.input_sap_num_ts, "Номер ТС фактический", 1, 40);
                        valid = valid && confirm_df.checkLength(confirm_df.input_sap_num_kpp, "№ КПП", 1, 2);
                        valid = valid && confirm_df.checkLength(confirm_df.input_sap_name_forwarder, "ФИО экспедитора", 1, 40);
                        //Проверка возврата САП
                        if (variant != 4) valid = valid && confirm_df.checkLength(confirm_df.input_sap_ozm, "ОЗМ из (резервирования \ поставки) ", 1, 18);
                        if (variant == 4) valid = valid && confirm_df.checkSelectValOfMessage(confirm_df.select_sap_ozm, "Выберите ОЗМ");
                        valid && confirm_df.checkLength(confirm_df.input_sap_ozm_bak, "ОЗМ согласно бака", 1, 18);
                        if (variant != 4) valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_sap_stock_recipient, "Нет значения склад получателя (из резервирования \ получатель материала в ИП)");
                        if (variant == 4) valid = valid && confirm_df.checkSelectValOfMessage(confirm_df.select_sap_stock_recipient, "Выберите склад получателя");
                        if (variant != 4 && variant != 3) valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_sap_factory_recipient, "Нет значения завод-получатель");
                        if (variant == 4) valid = valid && confirm_df.checkSelectValOfMessage(confirm_df.select_sap_factory_recipient, "Выберите завод-получатель");
                        if (variant == 2 && variant == 5 && variant == 6) valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_sap_id_card, "Нет значения ID карты");
                    }
                    // Проверка выбранного бака
                    valid = valid && confirm_df.checkSelectValOfMessage(confirm_df.select_capacity, "Выберите бак с топливом");
                    valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_deliver_take_dens, "Нет значения плотности ГСМ в баке");
                    valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_deliver_take_level, "Нет значения уровень ГСМ в баке");
                    valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_deliver_take_mass, "Нет значения массы ГСМ в баке");
                    valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_deliver_take_temp, "Нет значения температуры ГСМ в баке");
                    valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_deliver_take_volume, "Нет значения объема ГСМ в баке");
                    // Проверка колонки
                    valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_deliver_dose_fuel, "Нет значения дозы");
                    // Все заполненно?
                    if (valid) {
                        if (variant >= 1 && variant <= 6) {
                            var sap_buffer = confirm_df.getNewSAP_Buffer();
                            confirm_df.fsap.init();
                            confirm_df.fsap.open(sap_buffer);
                        } else {
                            // Запись в базу локальную
                            confirm_df.save_fuelSale(null);
                        }

                    }
                },
                'Отмена': function () {
                    $(this).dialog("close");
                }
            }
        });
        // Sumbit form
        confirm_df.form = confirm_df.obj.find("form").on("submit", function (event) {
            event.preventDefault();
        });
        // КОЛОНКА ****************************************************************
        // тип топлива
        confirm_df.input_deliver_type_fuel = $('input#deliver-type-fuel');
        // выбор емкости
        confirm_df.select_capacity = initSelect(
            $('select[name ="Capacity"]'),
            { width: 150 },
            null,
            null,
            -1,
            function (event, ui) {
                event.preventDefault();
                // Обновим информацию по баку
                confirm_df.input_deliver_take_level.val('');
                confirm_df.input_deliver_take_mass.val('');
                confirm_df.input_deliver_take_temp.val('');
                confirm_df.input_deliver_take_volume.val('');
                confirm_df.input_deliver_take_dens.val('');
                if (ui.item.value !== '-1') {
                    getTankTags(ui.item.value,
                        function (result) {
                            // Обновим информацию по баку
                            confirm_df.input_deliver_take_level.val(result.level);
                            confirm_df.input_deliver_take_mass.val(result.mass);
                            confirm_df.input_deliver_take_temp.val(result.temp);
                            confirm_df.input_deliver_take_volume.val(result.volume);
                            confirm_df.input_deliver_take_dens.val(result.dens);
                        }
                    );
                }
            },
            null);
        // основные параметры емкости
        confirm_df.input_deliver_take_level = $('#deliver-take-level');
        confirm_df.input_deliver_take_mass = $('#deliver-take-mass');
        confirm_df.input_deliver_take_temp = $('#deliver-take-temp');
        confirm_df.input_deliver_take_volume = $('#deliver-take-volume');
        confirm_df.input_deliver_take_dens = $('#deliver-take-dens');
        // доза топлива
        confirm_df.input_deliver_dose_fuel = $('input#deliver-DoseFuel');
        // пролив
        confirm_df.checkbox_deliver_Passage = $('#deliver-Passage').on("change", function (event) {
            event.preventDefault();
            var res = $(this).prop('checked');
            if (res) {
                confirm_df.select_variant.val(-1).selectmenu("refresh");
                confirm_df.clear();
                confirm_df.select_variant.selectmenu("disable");
            } else {
                confirm_df.select_variant.selectmenu("enable");
            };
        });
        // SAP ********************************************************
        // выбор режимов
        confirm_df.select_variant = initSelect(
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
                        confirm_df.clear();
                        $('tr#button-sap').show();
                        $('tr#sap-num').show(); $('#label-sap-num').text('*Номер резервирования :');
                        $('tr#sap-num-pos').show(); confirm_df.input_sap_num_pos.show(); $('#label-sap-num-pos').text('*Номер позиции :');
                        $('tr#sap-num-ts').show(); $('#label-sap-num-ts').text('*Номер ТС фактический :');
                        $('tr#sap-num-kpp').show(); $('#label-sap-num-kpp').text('*№ КПП :');
                        $('tr#sap-name-forwarder').show(); $('#label-sap-name-forwarder').text('*ФИО экспедитора :');
                        $('tr#sap-ozm').show(); confirm_df.input_sap_ozm.attr('disabled', 'disabled').show(); $('#label-sap-ozm').text('ОЗМ из резервирования :');
                        $('tr#sap-ozm-bak').show(); $('#label-sap-ozm-bak').text('ОЗМ согласно бака :');
                        $('tr#sap-ozm-amount').show(); $('#label-sap-ozm-amount').text('Количество :');
                        $('tr#sap-stock-recipient').show(); confirm_df.input_sap_stock_recipient.attr('disabled', 'disabled').show(); $('#label-sap-stock-recipient').text('Склад получателя из резервирования :');
                        $('tr#sap-factory-recipient').show(); confirm_df.input_sap_factory_recipient.attr('disabled', 'disabled').show(); $('#label-sap-factory-recipient').text('Завод-получатель :');
                        if (confirm_df.card) {
                            confirm_df.input_sap_num_ts.val(confirm_df.card.AutoNumber)
                        }
                        break;
                    case '2':
                        confirm_df.clear();
                        $('tr#button-sap').show();
                        $('tr#sap-num').show(); $('#label-sap-num').text('*Номер резервирования :');
                        $('tr#sap-num-pos').show(); confirm_df.input_sap_num_pos.show(); $('#label-sap-num-pos').text('*Номер позиции :');
                        $('tr#sap-num-ts').show(); $('#label-sap-num-ts').text('*Номер ТС фактический :');
                        $('tr#sap-num-kpp').show(); $('#label-sap-num-kpp').text('*№ КПП :');
                        $('tr#sap-name-forwarder').show(); $('#label-sap-name-forwarder').text('*ФИО экспедитора :');
                        $('tr#sap-ozm').show(); confirm_df.input_sap_ozm.attr('disabled', 'disabled').show(); $('#label-sap-ozm').text('ОЗМ из резервирования :');
                        $('tr#sap-ozm-bak').show(); $('#label-sap-ozm-bak').text('ОЗМ согласно бака :');
                        $('tr#sap-ozm-amount').show(); $('#label-sap-ozm-amount').text('Количество :');
                        $('tr#sap-stock-recipient').show(); confirm_df.input_sap_stock_recipient.attr('disabled', 'disabled').show(); $('#label-sap-stock-recipient').text('Склад получателя из резервирования :');
                        $('tr#sap-factory-recipient').show(); confirm_df.input_sap_factory_recipient.attr('disabled', 'disabled').show(); $('#label-sap-factory-recipient').text('Завод-получатель :');
                        $('tr#sap-id-card').show(); $('#label-sap-id-card').text('ИД карта :');
                        if (confirm_df.card) {
                            confirm_df.input_sap_num_ts.val(confirm_df.card.AutoNumber)
                            confirm_df.input_sap_id_card.val(confirm_df.card.Id)
                        }
                        break;
                    case '3':
                        confirm_df.clear();
                        $('tr#button-sap').show();
                        $('tr#sap-num').show(); $('#label-sap-num').text('*Номер исх.поставки :');
                        $('tr#sap-num-pos').show(); $('#label-sap-num-pos').text('*Номер позиции ИП :');
                        $('tr#sap-num-ts').show(); $('#label-sap-num-ts').text('*Номер ТС фактический :');
                        $('tr#sap-num-kpp').show(); $('#label-sap-num-kpp').text('*№ КПП :');
                        $('tr#sap-name-forwarder').show(); $('#label-sap-name-forwarder').text('*ФИО экспедитора :');
                        $('tr#sap-ozm').show(); confirm_df.input_sap_ozm.attr('disabled', 'disabled').show(); $('#label-sap-ozm').text('ОЗМ из поставки :');
                        $('tr#sap-ozm-bak').show(); $('#label-sap-ozm-bak').text('ОЗМ согласно бака :');
                        $('tr#sap-ozm-amount').show(); $('#label-sap-ozm-amount').text('Количество :');
                        $('tr#sap-stock-recipient').show(); confirm_df.input_sap_stock_recipient.attr('disabled', 'disabled').show(); $('#label-sap-stock-recipient').text('Склад получателя = Получатель материала в ИП :');

                        if (confirm_df.card) {
                            confirm_df.input_sap_num_ts.val(confirm_df.card.AutoNumber)
                        }
                        break;
                    case '4':
                        confirm_df.clear();
                        $('tr#sap-num').show(); $('#label-sap-num').text('*Номер требования М-11 :');
                        $('tr#sap-num-ts').show(); $('#label-sap-num-ts').text('*Номер ТС фактический :');
                        $('tr#sap-num-kpp').show(); $('#label-sap-num-kpp').text('*№ КПП :');
                        $('tr#sap-name-forwarder').show(); $('#label-sap-name-forwarder').text('*ФИО экспедитора :');
                        $('tr#sap-ozm').show();
                        confirm_df.select_sap_ozm.selectmenu("widget").show();
                        //confirm_df.select_sap_ozm.val(-1).selectmenu("refresh");
                        $('#label-sap-ozm').text('ОЗМ :');
                        $('tr#sap-ozm-bak').show(); $('#label-sap-ozm-bak').text('ОЗМ согласно бака :');
                        $('tr#sap-stock-recipient').show();
                        confirm_df.select_sap_stock_recipient.selectmenu("widget").show();
                        //confirm_df.select_sap_stock_recipient.val(-1).selectmenu("refresh");
                        $('#label-sap-stock-recipient').text('Склад получателя :');
                        $('tr#sap-factory-recipient').show();
                        confirm_df.select_sap_factory_recipient.selectmenu("widget").show();
                        //confirm_df.select_sap_factory_recipient.val(-1).selectmenu("refresh");
                        $('#label-sap-factory-recipient').text('Завод-получатель :');
                        if (confirm_df.card) {
                            confirm_df.input_sap_num_ts.val(confirm_df.card.AutoNumber)
                        }
                        break;
                    case '5':
                        confirm_df.clear();
                        $('tr#button-sap').show();
                        $('tr#sap-num').show(); $('#label-sap-num').text('*Номер резервирования :');
                        $('tr#sap-num-pos').show(); confirm_df.input_sap_num_pos.show(); $('#label-sap-num-pos').text('*Номер позиции :');
                        $('tr#sap-num-ts').show(); $('#label-sap-num-ts').text('*Номер ТС фактический :');
                        $('tr#sap-num-kpp').show(); $('#label-sap-num-kpp').text('*№ КПП :');
                        $('tr#sap-name-forwarder').show(); $('#label-sap-name-forwarder').text('*ФИО экспедитора :');
                        $('tr#sap-ozm').show(); confirm_df.input_sap_ozm.attr('disabled', 'disabled').show(); $('#label-sap-ozm').text('ОЗМ из резервирования :');
                        $('tr#sap-ozm-bak').show(); $('#label-sap-ozm-bak').text('ОЗМ согласно бака :');
                        $('tr#sap-ozm-amount').show(); $('#label-sap-ozm-amount').text('Количество :');
                        $('tr#sap-stock-recipient').show(); confirm_df.input_sap_stock_recipient.attr('disabled', 'disabled').show(); $('#label-sap-stock-recipient').text('Склад получателя из резервирования :');
                        $('tr#sap-factory-recipient').show(); confirm_df.input_sap_factory_recipient.attr('disabled', 'disabled').show(); $('#label-sap-factory-recipient').text('Завод-получатель :');
                        $('tr#sap-id-card').show(); $('#label-sap-id-card').text('ИД карта :');
                        if (confirm_df.card) {
                            confirm_df.input_sap_num_ts.val(confirm_df.card.Debitor+'/'+confirm_df.card.AutoNumber+'/'+confirm_df.card.AutoModel);
                            confirm_df.input_sap_id_card.val(confirm_df.card.Id)
                        }
                        break;
                    case '6':
                        confirm_df.clear();
                        $('tr#button-sap').show();
                        $('tr#sap-num').show(); $('#label-sap-num').text('*Номер резервирования :');
                        $('tr#sap-num-pos').show(); confirm_df.input_sap_num_pos.show(); $('#label-sap-num-pos').text('*Номер позиции :');
                        $('tr#sap-num-ts').show(); $('#label-sap-num-ts').text('*Номер ТС фактический :');
                        $('tr#sap-num-kpp').show(); $('#label-sap-num-kpp').text('*№ КПП :');
                        $('tr#sap-name-forwarder').show(); $('#label-sap-name-forwarder').text('*ФИО экспедитора :');
                        $('tr#sap-ozm').show(); confirm_df.input_sap_ozm.attr('disabled', 'disabled').show(); $('#label-sap-ozm').text('ОЗМ из резервирования :');
                        $('tr#sap-ozm-bak').show(); $('#label-sap-ozm-bak').text('ОЗМ согласно бака :');
                        $('tr#sap-ozm-amount').show(); $('#label-sap-ozm-amount').text('Количество :');
                        $('tr#sap-stock-recipient').show(); $('tr#sap-stock-recipient').show(); confirm_df.input_sap_stock_recipient.attr('disabled', 'disabled').show(); $('#label-sap-stock-recipient').text('Склад получателя из резервирования :');
                        $('tr#sap-factory-recipient').show(); confirm_df.input_sap_factory_recipient.attr('disabled', 'disabled').show(); $('#label-sap-factory-recipient').text('Завод-получатель :');
                        $('tr#sap-id-card').show(); $('#label-sap-id-card').text('ИД карта :');
                        if (confirm_df.card) {
                            confirm_df.input_sap_num_ts.val(confirm_df.card.Debitor + '/' + confirm_df.card.AutoNumber + '/' + confirm_df.card.AutoModel)
                            confirm_df.input_sap_id_card.val(confirm_df.card.Id)
                        }
                        break;
                    default:
                        confirm_df.clear();
                        break;
                }
            },
            null);
        // нажата кнопка "Получить из САП"
        confirm_df.buttom_select_sap = $('button#button-sap').on('click', function () {
            event.preventDefault();
            var i = confirm_df.select_variant.val();

            // Покажем позиции
            confirm_df.select_sap_num_pos.selectmenu("widget").hide();
            confirm_df.input_sap_ozm.val('');
            confirm_df.input_sap_ozm_amount.val('');
            confirm_df.input_sap_stock_recipient.val('')
            confirm_df.input_sap_factory_recipient.val('')
            switch (i) {
                case "1":
                case "2":
                case "5":
                case "6":
                    // По резервированию
                    var num = confirm_df.input_sap_num.val();
                    //var num = $('input#sap-num').val();
                    var pos = confirm_df.input_sap_num_pos.val();
                    //var pos = $('input#sap-num-pos').val();

                    getReservation(
                        num,
                        pos,
                        function (result) {
                            confirm_df.input_sap_num.val(result.RSNUM)
                            //$('input#sap-num').val();
                            confirm_df.input_sap_ozm.val(result.MATNR);
                            confirm_df.input_sap_ozm_amount.val(result.BDMNG);
                            confirm_df.input_sap_factory_recipient.val(result.WERKS)
                            var depots = catalog_depots.get($.trim(result.UMLGO));
                            if (depots) {
                                confirm_df.input_sap_stock_recipient.val('(' + depots.id + ') ' + depots.name)
                            }
                        }
                    );
                    break;
                case "3":
                    var num = confirm_df.input_sap_num.val();
                    //var num = $('input#sap-num').val();
                    confirm_df.supply = null;
                    getSupply(
                        num,
                        function (result) {
                            if (result) {
                                confirm_df.supply = result;
                                var pos = [];
                                for (i = 0; i < result.length; i++) {
                                    pos.push({ value: result[i].posnr, text: result[i].posnr });
                                };
                                // Обновим перечень позиций
                                updateOptionSelect(confirm_df.select_sap_num_pos, pos, null, -1, null);
                                // Покажем позиции
                                confirm_df.select_sap_num_pos.selectmenu("widget").show();
                            }
                        }
                    );
                    break;
            };
        });
        // Номер для запроса в сап
        confirm_df.input_sap_num = $('input#sap-num');
        // Номер позиции для запроса в сап
        confirm_df.input_sap_num_pos = $('input#sap-num-pos');
        confirm_df.select_sap_num_pos = initSelect(
            $('select[name ="sap-num-pos"]'),
            { width: 150 },
            null,
            null,
            -1,
            function (event, ui) {
                event.preventDefault();
                confirm_df.input_sap_ozm.val('');
                confirm_df.input_sap_ozm_amount.val('');
                confirm_df.input_sap_stock_recipient.val('');
                var sup = confirm_df.getPosSupply(ui.item.value);
                if (sup) {
                    confirm_df.input_sap_ozm.val(sup.MATNR);
                    confirm_df.input_sap_ozm_amount.val(sup.LFIMG);
                    confirm_df.input_sap_stock_recipient.val(sup.KUNNR)
                };
                //var sup = getObjects(confirm_df.supply, 'posnr', ui.item.value)
                //if (sup != null && sup.length > 0) {
                //    confirm_df.input_sap_ozm.val(sup[0].MATNR);
                //    confirm_df.input_sap_ozm_amount.val(sup[0].LFIMG);
                //    confirm_df.input_sap_stock_recipient.val(sup[0].KUNNR)
                //};
            },
            null);
        // номер транспортного средства
        confirm_df.input_sap_num_ts = $('input#sap-num-ts');
        // номер КПП
        confirm_df.input_sap_num_kpp = $('input#sap-num-kpp');
        // ФИО экспедитора
        confirm_df.input_sap_name_forwarder = $('input#sap-name-forwarder');
        // sap-ozm
        confirm_df.select_sap_ozm = initSelect(
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
        confirm_df.input_sap_ozm = $('input#sap-ozm');
        confirm_df.input_sap_ozm_bak = $('textarea#sap-ozm-bak');
        confirm_df.input_sap_ozm_amount = $('input#sap-ozm-amount');
        // склад получателя
        confirm_df.input_sap_stock_recipient = $('textarea#sap-stock-recipient');
        confirm_df.select_sap_stock_recipient = initSelect(
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
        confirm_df.input_sap_factory_recipient = $('input#sap-factory-recipient');
        confirm_df.select_sap_factory_recipient = initSelect(
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
        confirm_df.input_sap_id_card = $('input#sap-id-card');

        confirm_df.allFields = $([])
            .add(confirm_df.select_variant)
            .add(confirm_df.input_sap_num)
            .add(confirm_df.input_sap_num_pos)
            .add(confirm_df.select_sap_num_pos)
            .add(confirm_df.input_sap_num_ts)
            .add(confirm_df.input_sap_num_kpp)
            .add(confirm_df.input_sap_name_forwarder)
            .add(confirm_df.select_sap_ozm)
            .add(confirm_df.input_sap_ozm)
            .add(confirm_df.input_sap_ozm_bak)
            .add(confirm_df.input_sap_ozm_amount)
            .add(confirm_df.select_sap_stock_recipient)
            .add(confirm_df.input_sap_stock_recipient)
            .add(confirm_df.select_sap_factory_recipient)
            .add(confirm_df.input_sap_factory_recipient)
            .add(confirm_df.input_sap_id_card);
    },
    // Открыть панель "Задания выдачи и работе с SAP MII"
    Open: function (num_gun) {
        $(".validateTips").text('');
        $(".ui-state-error").removeClass("ui-state-error");
        // Спрячим все поля
        confirm_df.clear();
        confirm_df.card = null; // Обнулим карту
        confirm_df.gun = null;  // Обнулим теги пистолета
        confirm_df.select_variant.val(-1).selectmenu("refresh").selectmenu("enable"); // Сбросили выбор вариантов
        confirm_df.checkbox_deliver_Passage.prop('checked', false); // Сбросили технический пролив

        if (num_gun) {
            confirm_df.obj.dialog("option", "title", 'Выдать топливо (пистолет-' + num_gun + ')');
            confirm_df.obj.dialog("open");
            var gun = guns.getGun(num_gun);
            if (gun) {
                confirm_df.gun = gun;
                confirm_df.input_deliver_type_fuel.val(outFuelType(gun.type_fuel));
                confirm_df.input_sap_ozm_bak.val('(' + gun.type_fuel + ') ' + outFuelType(gun.type_fuel));
                $('#deliver-Taken').prop('checked', gun.taken);
                // Обновим информацию по баку
                confirm_df.input_deliver_take_level.val('');
                confirm_df.input_deliver_take_mass.val('');
                confirm_df.input_deliver_take_temp.val('');
                confirm_df.input_deliver_take_volume.val('');
                confirm_df.input_deliver_take_dens.val('');
                // Обновим перецень емкостей
                updateOptionSelect(confirm_df.select_capacity, ozm_bak.getTanks(gun.type_fuel), null, -1, null);

                confirm_df.card = cards.getCardOfNumSide(gun.num_trk, gun.side);
                // Вывести инфу по карте
                if (confirm_df.card) {
                    $('#deliver-Active').prop('checked', confirm_df.card.Active);
                    $('#deliver-Number').val(confirm_df.card.Number);
                    $('#deliver-AutoNumber').val(confirm_df.card.AutoNumber);
                    $('#deliver-Debitor').val(confirm_df.card.Debitor);
                    $('#deliver-AutoModel').val(confirm_df.card.AutoModel);
                } else {
                    $('#deliver-Active').prop('checked', false);
                    $('#deliver-Number').val('');
                    $('#deliver-AutoNumber').val('');
                    $('#deliver-Debitor').val('');
                    $('#deliver-AutoModel').val('');
                }
            }
        }
    },
    // Очистить данные
    clear: function () {
        confirm_df.input_deliver_dose_fuel.val(''); // Очистить дозу
        //confirm_df.checkbox_deliver_Passage.prop('checked', false);
        $('tr#button-sap').hide();
        $('tr#sap-num').hide(); confirm_df.input_sap_num.val('');
        $('tr#sap-num-pos').hide(); confirm_df.input_sap_num_pos.val('').hide(); confirm_df.select_sap_num_pos.selectmenu("widget").hide();
        $('tr#sap-num-ts').hide(); confirm_df.input_sap_num_ts.val(''); $('tr#sap-num-kpp').hide(); confirm_df.input_sap_num_kpp.val(''); $('tr#sap-name-forwarder').hide(); confirm_df.input_sap_name_forwarder.val('');
        $('tr#sap-ozm').hide(); confirm_df.input_sap_ozm.val('').hide(); confirm_df.select_sap_ozm.selectmenu("widget").hide();
        $('tr#sap-ozm-bak').hide(); //confirm_df.input_sap_ozm_bak.val('');
        $('tr#sap-ozm-amount').hide(); confirm_df.input_sap_ozm_amount.val('');
        $('tr#sap-stock-recipient').hide(); confirm_df.input_sap_stock_recipient.val('').hide(); confirm_df.select_sap_stock_recipient.selectmenu("widget").hide();
        $('tr#sap-factory-recipient').hide(); confirm_df.input_sap_factory_recipient.val('').hide(); confirm_df.select_sap_factory_recipient.selectmenu("widget").hide();
        $('tr#sap-id-card').hide(); confirm_df.input_sap_id_card.val('');
    },
    // Получить новую SAP_buffer
    getNewSAP_Buffer: function () {
        var now = new Date();
        var variant = confirm_df.select_variant.val();
        var num_pos = confirm_df.select_sap_num_pos.val();
        return sap_buffer = {
            id: 0,
            DATE: toISOStringTZ(now).substring(0, 10),
            TIME: toISOStringTZ(now).substring(11, 23),
            LOGIN_R: confirm_df.operator_name,
            N_BAK: confirm_df.select_capacity.val(),
            OZM_BAK: confirm_df.gun.type_fuel,
            OZM_TREB: variant == 4 ? confirm_df.select_sap_ozm.val() : confirm_df.input_sap_ozm.val(),
            FLAG_R: variant,
            PLOTNOST: confirm_df.input_deliver_take_dens.val(),
            VOLUME: null,
            MASS: null,
            LOGIN_EXP: confirm_df.input_sap_name_forwarder.val(),
            N_POST: confirm_df.input_sap_num_kpp.val(),
            TRANSP_FAKT: confirm_df.input_sap_num_ts.val(),
            N_DEB: variant == 5 || variant == 6 ? confirm_df.card.Debitor : null,
            N_TREB: confirm_df.input_sap_num.val(),
            LGORT: variant == 3 ? confirm_df.getPosSupply(num_pos).LGORT : null, // до выяснения
            WERKS: null, // до выяснения
            close: null,
            sending: null
        };


        //return sap_buffer = {
        //    Id: Number(confirm_ins_edit_panel.id),
        //    Number: $('#Number').val(),
        //    DriverName: $('#DriverName').val() != '' ? $('#DriverName').val() : null,
        //    AutoNumber: $('#AutoNumber').val(),
        //    Debitor: $('#Debitor').val() != '' ? Number($('#Debitor').val()) : null,
        //    Sn1: $('#Sn1').val() != '' ? $('#Sn1').val() : null,
        //    Sn2: $('#Sn2').val() != '' ? $('#Sn2').val() : null,
        //    AutoModel: $('#AutoModel').val() != '' ? $('#AutoModel').val() : null,
        //    Street: $('#Street').val() != '' ? Number($('#Street').val()) : null,
        //    House: $('#House').val() != '' ? Number($('#House').val()) : null,
        //    CreateDate: confirm_ins_edit_panel.id == 0 ? toISOStringTZ(now).substring(0, 10) : confirm_ins_edit_panel.create_date,
        //    CreateTime: confirm_ins_edit_panel.id == 0 ? toISOStringTZ(now).substring(11, 23) : confirm_ins_edit_panel.create_time,
        //    UpdateDate: toISOStringTZ(now).substring(0, 10),
        //    UpdateTime: toISOStringTZ(now).substring(11, 23),
        //    Owner: $('#Owner').val() != '' ? $('#Owner').val() : null,
        //    Active: $('#Active').prop('checked'),
        //};
    },

};

//var confirm_sap = {
//    obj: null,
//    init: function () {
//        confirm_sap.obj = $("#dialog-message").dialog({
//            modal: true,
//            title:'mt',
//            buttons: {
//                Ok: function () {
//                    $(this).dialog("close");
//                }
//            }
//        });
//    },
//    open: function () {
//        confirm_sap.obj.dialog("open");
//    }
//};

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
        confirm_df.Open(gun);
    });
    pb_deliver.init();

    // Загрузка библиотек
    loadReference(function (result) {
        // Инициализаия панели  "Информация по RFID-карте"
        confirm_rfid_card.init();
        // Инициализаия панели  "Задания выдачи и работе с SAP MII"
        confirm_df.init();
        // Загрузка документа
        $(document).ready(function () {
            show();
            setInterval('show()', 1000);
        });
    });



});
