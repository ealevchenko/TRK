//// Карточки RFID
//var reference_cards = null;
//// Тэги контроллера 
//var trk_tags = {
//    list:[],
//    // Перенос считанных тегов
//    init: function (data) {

//        if (data) {
//            trk_tags.list = []; // Обнулим
//            var i;
//            // Пройдем по всем колонкам
//            for (i = 1; i < 9; i++) {
//                var obj = getObjects(data, 'trk_num', i);
//                if (obj && obj.length > 0) {
//                    var leftRFID = getRFID(obj[0].leftRFID, reference_cards);
//                    var reghtRFID = getRFID(obj[0].reghtRFID, reference_cards);
//                    // Проедем по пистолетам
//                    if (obj[0].trk_guns) {
//                        var guns = obj[0].trk_guns;
//                        for (ig = 0; ig < guns.length; ig++) {
//                            var gun_num = guns[ig].gun_num;
//                            var gun_value = getGun(gun_num, guns[ig])
//                            //trk_tag = { num_gun: gun_num, rfid: getRFID(trk.leftRFID, reference_cards), gun: gun_value };
//                        }

//                    }
//                }
//            }
//        }
//    },
//    // Вернуть теги по указоному пистолету
//    getGun: function (num) {

//    }

//}


//var tags = [];

//// Панель добавить обновить карту
//var confirm_deliver_fuel_panel = {
//    html_div: $("#deliver-fuel-confirm"),
//    obj: null,
//    form: null,
//    buton_start: null,
//    gun_select: null,
//    dose_fuel: null,
//    initObject: function () {
//        confirm_deliver_fuel_panel.obj = $("#deliver-fuel-confirm").dialog({
//            resizable: false,
//            modal: true,
//            autoOpen: false,
//            height: "auto",
//            width: 700,
//            buttons: {
//                Start: function () {

//                },
//                Save: function () {

//                },
//                Cancel: function () {
//                    $(this).dialog("close");
//                }
//            }
//        });
//        confirm_deliver_fuel_panel.form = confirm_deliver_fuel_panel.obj.find("form").on("submit", function (event) {
//            event.preventDefault();

//        });
//        //confirm_deliver_fuel_panel.buton_start = $('button#start');
//        confirm_deliver_fuel_panel.buton_start = $('button#start').on('click', function () {
//            event.preventDefault();
//            var gun_select = confirm_deliver_fuel_panel.gun_select;
//            //alert('Ok');
//            //var dosefuel = dose_fuel.spinner("value")
//            if (confirm_deliver_fuel_panel.dose_fuel.val() > 0 && gun_select.rfid.Active && gun_select.gun.taken) {
//                alert('Ok');
//            } else {
//                alert('Не все условия соблюдены доза(' + confirm_deliver_fuel_panel.dose_fuel.val() + ')>0, карта активна (' + gun_select.rfid.Active + '), пистолет снят (' + gun_select.gun.taken + ')');
//            }
//        });

//        confirm_deliver_fuel_panel.dose_fuel = $("#DoseFuel").spinner({
//            spin: function (event, ui) {
//                if (ui.value > 99999999) {
//                    $(this).spinner("value", 0);
//                    return false;
//                } else if (ui.value < 0) {
//                    $(this).spinner("value", 99999999);
//                    return false;
//                }
//            }
//        });

//        //$('#label-number-cards').text(langView('field_Number', langs) + ':');
//        //$('#label-drivername-cards').text(langView('field_DriverName', langs) + ':');
//        //$('#label-autonumber-cards').text(langView('field_AutoNumber', langs) + ':');
//        //$('#label-debitor-cards').text(langView('field_Debitor', langs) + ':');
//        //$('#label-sn1-cards').text(langView('field_Sn1', langs) + ':');
//        //$('#label-sn2-cards').text(langView('field_Sn2', langs) + ':');
//        //$('#label-automodel-cards').text(langView('field_AutoModel', langs) + ':');
//        //$('#label-street-cards').text(langView('field_Street', langs) + ':');
//        //$('#label-house-cards').text(langView('field_House', langs) + ':');
//        //$('#label-owner-cards').text(langView('field_Owner', langs) + ':');
//        //$('#label-active-cards').text(langView('field_Active', langs) + ':');
//    },
//    Open: function (num_gun) {
//        confirm_deliver_fuel_panel.obj.dialog("option", "title", "Выдать топливо (Пистолет - " + num_gun + ")");
//        confirm_deliver_fuel_panel.obj.dialog("open");

//        // Считаем карту
//        var gun_select = getObjects(tags, 'num_gun', num_gun)
//        if (gun_select != null && gun_select.length > 0) {
//            confirm_deliver_fuel_panel.gun_select = gun_select[0];

//            $('#Active').prop('checked', confirm_deliver_fuel_panel.gun_select.rfid.Active);
//            $('#Number').val(confirm_deliver_fuel_panel.gun_select.rfid.Number);
//            $('#AutoNumber').val(confirm_deliver_fuel_panel.gun_select.rfid.AutoNumber);
//            $('#Taken').prop('checked', confirm_deliver_fuel_panel.gun_select.gun.taken);

//        }




//        //var dose_fuel = $("#DoseFuel").spinner({
//        //    spin: function (event, ui) {
//        //        if (ui.value > 99999999) {
//        //            $(this).spinner("value", 0);
//        //            return false;
//        //        } else if (ui.value < 0) {
//        //            $(this).spinner("value", 99999999);
//        //            return false;
//        //        }
//        //    }
//        //});

//        //confirm_deliver_fuel_panel.buton_start.on('click', function () {
//        //    event.preventDefault();
//        //    //alert('Ok');

//        //    var dosefuel = dose_fuel.spinner("value")
//        //    if (dose_fuel.val() > 0 && card.Active && taken) {
//        //        alert('Ok');
//        //    } else {
//        //        alert('Не все условия соблюдены доза(' + dose_fuel.val() + ')>0, карта активна (' + card.Active + '), пистолет снят (' + taken+')');
//        //    }
//        //});
//        //$('button#start').on('click', function () {
//        //    event.preventDefault();
//        //    //var dosefuel = dose_fuel.spinner("value")
//        //    if (dose_fuel.val() > 0 && card.Active && taken) {
//        //        alert('Ok');
//        //    } else {
//        //        alert('Не все условия соблюдены доза(' + dose_fuel.val() + ')>0, карта активна (' + card.Active + '), пистолет снят (' + taken+')');
//        //    }
//        //});

//        //if (id != null) {
//        //    getAsyncViewazsCardsOfID(id,
//        //        function (result) {
//        //            confirm_ins_edit_panel.setCards(result);
//        //            confirm_ins_edit_panel.obj.dialog("option", "title", id == null ? langView('title_insert_cards', langs) : langView('title_edit_cards', langs));
//        //            confirm_ins_edit_panel.obj.dialog("open");
//        //        });
//        //} else {
//        //    confirm_ins_edit_panel.setCards(null);
//        //    confirm_ins_edit_panel.obj.dialog("option", "title", id == null ? langView('title_insert_cards', langs) : langView('title_edit_cards', langs));
//        //    confirm_ins_edit_panel.obj.dialog("open");
//        //}

//    }

//};
//// Получить данные по пистолету
//function getGun(num_gun, gun) {
//    // Получить данные по пистолету
//    var result = {
//        online: gun.item_gun[3].m_value,
//        taken: gun.item_gun[9].m_value,
//        current_volume: gun.item_gun[0].m_value, //current_volume = 20;
//        total_volume: gun.item_gun[10].m_value,
//        volume_to_write: gun.item_gun[12].m_value, //volume_to_write = 50;
//        last_out_volume: gun.item_gun[2].m_value,
//    }
//    // Отобразить для теста
//    $('#current_volume-value').text(gun.item_gun[0].m_value);
//    $('#density-value').text(gun.item_gun[1].m_value);
//    $('#last_out_volume-value').text(gun.item_gun[2].m_value);
//    $('#online-value').text(gun.item_gun[3].m_value);
//    $('#passage-value').text(gun.item_gun[4].m_value);
//    $('#price_to_write-value').text(gun.item_gun[5].m_value);
//    $('#start-value').text(gun.item_gun[6].m_value);
//    $('#state-value').text(gun.item_gun[7].m_value);
//    $('#stop-value').text(gun.item_gun[8].m_value);
//    $('#taken-value').text(gun.item_gun[9].m_value);
//    $('#total_volume-value').text(gun.item_gun[10].m_value);
//    $('#Trk06_0_status-value').text(gun.item_gun[11].m_value);
//    $('#volume_to_write-value').text(gun.item_gun[12].m_value);
//    $('#write_price-value').text(gun.item_gun[13].m_value);
//    return result;
//}

////function viewGuns(num_gun) {

////}

//function viewGun(num_gun, gun, card) {
//    if (gun != null) {

//        var d = new Date();

//        var pb = $('#progressbar-gun' + num_gun).progressbar({
//            value: false
//        });

//        var bt = $('button#deliver-gun' + num_gun);

//        gun_value = getGun(num_gun, gun);

//        // Вывести онлайн
//        if (gun_value.online != null) {
//            if (Boolean(gun_value.online)) {
//                $('#gun' + num_gun + '-online').html("").removeClass().addClass('active');
//            } else {
//                $('#gun' + num_gun + '-online').html("").removeClass().addClass('not_active');
//            }
//        }
//        else {
//            $('#gun' + num_gun + '-online').html("").removeClass().addClass('null_active');
//        }
//        // Пистолет
//        if (gun_value.taken != null) {
//            if (Boolean(gun_value.taken)) {
//                $('#gun' + num_gun + '-taken').html("").removeClass().addClass('active');
//            } else {
//                $('#gun' + num_gun + '-taken').html("").removeClass().addClass('not_active');
//            }
//        }
//        else {
//            $('#gun' + num_gun + '-taken').html("").removeClass().addClass('null_active');
//        }
//        // Выдача
//        if (gun_value.current_volume != null) {
//            if (Number(gun_value.current_volume) > 0) {
//                $('#gun' + num_gun + '-extradition').html("").removeClass().addClass('active');
//                //pb.progressbar("option", "enabled");
//                pb.progressbar("option", "max", gun_value.volume_to_write != null ? gun_value.volume_to_write : 100);
//                pb.progressbar("option", "value", gun_value.current_volume);


//            } else {
//                $('#gun' + num_gun + '-extradition').html("").removeClass().addClass('not_active');
//                pb.progressbar("option", "value", false);
//                //pb.progressbar("option", "disabled");
//            }
//        }
//        else {
//            $('#gun' + num_gun + '-extradition').html("").removeClass().addClass('null_active');
//        }
//        // Всего выданно

//        if (gun_value.total_volume != null) {
//            $('#gun' + num_gun + '-total_volume').html(Number(gun_value.total_volume)).removeClass().addClass('ok');
//        }
//        else {
//            $('#gun' + num_gun + '-total_volume').html("?").removeClass().addClass('error');
//        }
//        // Задано

//        if (gun_value.volume_to_write != null) {
//            $('#gun' + num_gun + '-volume_to_write').html(Number(gun_value.volume_to_write)).removeClass().addClass('ok');
//        }
//        else {
//            $('#gun' + num_gun + '-volume_to_write').html("?").removeClass().addClass('error');
//        }
//        // Последняя выдача

//        if (gun_value.last_out_volume != null) {
//            $('#gun' + num_gun + '-last_out_volume').html(Number(gun_value.last_out_volume)).removeClass().addClass('ok');
//        }
//        else {
//            $('#gun' + num_gun + '-last_out_volume').html("?").removeClass().addClass('error');
//        }

//        //bt.on('click', function () {
//        //    confirm_deliver_fuel_panel.Open(num_gun, card, taken);
//        //});

//        //$('#current_volume-value').text(gun.item_gun[0].m_value);
//        //$('#density-value').text(gun.item_gun[1].m_value);
//        //$('#last_out_volume-value').text(gun.item_gun[2].m_value);
//        //$('#online-value').text(gun.item_gun[3].m_value);
//        //$('#passage-value').text(gun.item_gun[4].m_value);
//        //$('#price_to_write-value').text(gun.item_gun[5].m_value);
//        //$('#start-value').text(gun.item_gun[6].m_value);
//        //$('#state-value').text(gun.item_gun[7].m_value);
//        //$('#stop-value').text(gun.item_gun[8].m_value);
//        //$('#taken-value').text(gun.item_gun[9].m_value);
//        //$('#total_volume-value').text(gun.item_gun[10].m_value);
//        //$('#Trk06_0_status-value').text(gun.item_gun[11].m_value);
//        //$('#volume_to_write-value').text(gun.item_gun[12].m_value);
//        //$('#write_price-value').text(gun.item_gun[13].m_value);
//    } else {

//    }

//};

//function getRFID(RFID, cards) {
//    RFID[0].m_value = '037';
//    RFID[1].m_value = '50907';

//    if (RFID != null && RFID.length == 2 && RFID[0].m_value != null && RFID[1].m_value != null) {
//        var number = RFID[0].m_value + ',' + RFID[1].m_value;
//        // Считаем карту
//        var card = getObjects(cards, 'Number', number)
//        if (card)
//            if (card != null && card.length > 0) {
//                return card[0];
//            }
//    }
//    return null;
//}

//function viewRFID(num_trk, leftRFID, reghtRFID, cards) {

//    var number_left = null;

//    var id_card_left;
//    var card_number_left;
//    var card_autonum_left;
//    var card_active_left;

//    var card_left = getRFID(leftRFID, cards);
//    if (card_left) {
//        id_card_left = card_left.Id;
//        card_number_left = card_left.Number;
//        card_autonum_left = card_left.AutoNumber;
//        card_active_left = card_left.Active
//    }

//    // Вывести онлайн

//    if (card_active_left != null) {
//        if (Boolean(card_active_left)) {
//            $('#rfid-' + num_trk + '-left-card-active').html("").removeClass().addClass('active');
//        } else {
//            $('#rfid-' + num_trk + '-left-card-active').html("").removeClass().addClass('not_active');
//        }
//    }
//    else {
//        $('#rfid-' + num_trk + '-left-card-active').html("").removeClass().addClass('null_active');
//    }
//    // Id
//    if (id_card_left != null) {
//        $('#rfid-' + num_trk + '-left-card-id').html(Number(id_card_left)).removeClass().addClass('ok');
//    }
//    else {
//        $('#rfid-' + num_trk + '-left-card-id').html("?").removeClass().addClass('error');
//    }
//    // Номер карты
//    if (card_number_left != null) {
//        $('#rfid-' + num_trk + '-left-card-number').html(card_number_left).removeClass().addClass('ok');
//    }
//    else {
//        $('#rfid-' + num_trk + '-left-card-number').html("?").removeClass().addClass('error');
//    }
//    // Номер машины
//    if (card_autonum_left != null) {
//        $('#rfid-' + num_trk + '-left-card-autonum').html(card_autonum_left).removeClass().addClass('ok');
//    }
//    else {
//        $('#rfid-' + num_trk + '-left-card-autonum').html("?").removeClass().addClass('error');
//    }
//    //$('#number-value').text(result[0].m_value + ',' + result[1].m_value);
//    $('#autonumber-value').text(card_autonum_left);

//};

//function show() {
//    getTRK(
//        function (result) {

//            trk_tags.init(result); // Перезапишим список тегов

//            var trk_tag;
//            tags = [];
//            //tags = result;
//            var trk;
//            var rfid;
//            var gun;

//            var obj = getObjects(result, 'trk_num', 6)
//            if (obj != null && obj.length > 0) {
//                trk = obj[0];
//                viewRFID(6, trk.leftRFID, trk.reghtRFID, reference_cards);

//                gun_obj = getObjects(trk.trk_guns, 'gun_num', 11);
//                //rfid = gun_obj;

//                if (gun_obj != null && gun_obj.length > 0) {
//                    var gun_current = gun_obj[0];
//                    viewGun(11, gun_current, getRFID(trk.leftRFID, reference_cards));

//                    trk_tag = { num_gun: 11, rfid: getRFID(trk.leftRFID, reference_cards), gun: getGun(11, gun_current) };
//                    tags.push(trk_tag);
//                }
//            }
//            // Время
//            var d = new Date();
//            $('#date-value').text(toISOStringTZ(d));
//        });
//}

//$(function () {

//    // Загрузка библиотек
//    var loadReference = function (callback) {
//        //LockScreen(langView('mess_load', langs));
//        var count = 1;
//        // Загрузка списка карточек (common.js)
//        getReference_azsCards(function (result) {
//            reference_cards = result != null ? result.list : null;
//            count -= 1;
//            if (count <= 0) {
//                if (typeof callback === 'function') {
//                    //LockScreenOff();
//                    callback();
//                }
//            }
//        })
//    }


//    confirm_deliver_fuel_panel.initObject();

//    $('button.deliver').on('click', function () {
//        var trk_num = $(this).attr('id');
//        confirm_deliver_fuel_panel.Open(trk_num);
//    });

//    loadReference(function (result) {
//        $(document).ready(function () {
//            show();
//            setInterval('show()', 1000);
//        });
//    });


//});
