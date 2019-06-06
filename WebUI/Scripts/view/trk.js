
$(window).on("beforeunload", function () {
    logInfo(catalog_user.name_log, 'Панель оператора "Выдача по ТРК" - ЗАКРЫТА. (Окно настройки выдачи - ' + (confirm_df.open_num !== null ? confirm_df.open_num : ' закрыто') + ', Окно закрытия выдачи - ' + (confirm_close_fuel.open_num !== null ? confirm_close_fuel.open_num : ' закрыто') + ')');
    if (confirm_df.obj !== null) confirm_df.obj.dialog("close");
    if (confirm_close_fuel.obj !== null) confirm_close_fuel.obj.dialog("close");
});

// Контроль нажатия кнопки на клавиатуре (исключить сворачивание окон по нажатию "ENTER")
$(document).keypress(
    function (event) {

        if (event.which === 13) {
            $(".validateTips").text('');
            $(".ui-state-error").removeClass("ui-state-error");
            event.preventDefault();
            if (event.target.name === 'DoseFuel') {
                confirm_df.viewCalcMass();
            }

        }
    });
//========= СПРАВОЧНИКИ ======================================================
// Справочник ОЗМ
var catalog_ozm = {
    list: null
};
// Справочник 
var catalog_depots = {
    list: null,
    get: function (id) {
        var depots = getObjects(catalog_depots.list, 'id', id);
        if (depots !== null && depots.length > 0) {
            return depots[0];
        }
    },
    getOfWerks: function (werks) {
        return getObjects(catalog_depots.list, 'parent_id', werks);
    }
};
// Справочник 
var catalog_werks = {
    list: null
};
// Справочник 
var catalog_user = {
    operator_name: null,
    smena_num: null,
    smena_datetime: null,
    name_log: null,
};
//
var ofs = {
    list: null,
    init: function () {
        getAsyncOpenFuelSale(function (result) {

            for (iofs = 1; iofs <= 29; iofs++) {
                var obj = getObjects(result, 'num', iofs);

                if (obj && obj.length > 0) {
                    for (iobj = 0, count_iobj = obj.length; iobj < count_iobj; iobj++) {
                        if (obj[iobj].trk_num < 10) {
                            putAsyncOFS(
                                { num: obj[iobj].num, id: obj[iobj].id, dose: obj[iobj].dose, counter: obj[iobj].start_counter },
                                function (result_set_put) {

                                });
                        }
                    }
                } else {
                    putAsyncClearOFS(iofs, null);
                }
            };

            for (iofs = 1; iofs <= 3; iofs++) {
                var obj = getObjects(result, 'num', iofs);

                if (obj && obj.length > 0) {
                    for (iobj = 0, count_iobj = obj.length; iobj < count_iobj; iobj++) {
                        if (obj[iobj].trk_num > 9) {
                            putAsyncOFS(
                                { num: obj[iobj].num + 29, id: obj[iobj].id, dose: obj[iobj].dose, counter: obj[iobj].start_counter },
                                function (result_set_put) {

                                });
                        }
                    }
                } else {
                    putAsyncClearOFS(iofs + 29, null);
                }
            }
        });
    },
    set: function (data) {
        ofs.list = data;
    },
    get: function (num) {
        var val = getObjects(ofs.list, 'num', num);
        if (val && val.length > 0) {
            return val[0].id;
        }
        return null;
    },
    getOFS: function (num) {
        var val = getObjects(ofs.list, 'num', num);
        if (val && val.length > 0) {
            return val[0];
        }
        return null;
    },
};
//=========== СПИСКИ ОБНОВЛЯЕМЫЕ SHOW() ====================================================
// Список rfid-карт и тегов считывателей
var cards = {
    list: [],
    setCards: function (data) {
        cards.list = data;
    },
    // Получить карточку
    getCardOfNumSide: function (trk_num, side) {
        // Считаем карту
        if (cards.list && cards.list.length > 0) {
            var card = getObjects(cards.list, 'num_trk', trk_num);
            if (card && card.length > 0) {
                for (ic = 0, count_ic1 = card.length; ic < count_ic1; ic++) {
                    if (card[ic].side == side) {
                        return card[ic].card;
                    }
                }
            }
        }
        return null;
    },
    // Получить всю запись с карточкой
    getRFIDCardOfNumSide: function (trk_num, side) {
        // Считаем карту
        if (cards.list && cards.list.length > 0) {
            var card = getObjects(cards.list, 'num_trk', trk_num);
            if (card && card.length > 0) {
                for (ic = 0, count_ic2 = card.length; ic < count_ic2; ic++) {
                    if (card[ic].side == side) {
                        return card[ic];
                    }
                }
            }
        }
        return null;
    }

};
// Список rfid-карт и тегов считывателей
var rfid = {
    list: [],
    setRFID: function (data) {
        rfid.list = data;
    }
};
// список тегов пистолетов
var guns = {
    list: [],
    setGuns: function (data) {
        guns.list = data;
    },
    getGun: function (num_gun) {
        var obj = getObjects(guns.list, 'num_gun', num_gun);
        if (obj && obj.length > 0) {
            return obj[0];
        }
        return null;
    }
};
// список тегов стояков
var risers = {
    list_dio: [],
    list: [],
    setDIORisers: function (data) {
        risers.list_dio = data;
    },
    setRisers: function (data) {
        risers.list = data;
    },
    getRisers: function (num) {
        var obj = getObjects(risers.list, 'num', num);
        if (obj && obj.length > 0) {
            return obj[0];
        }
        return null;
    },

    getDIORisers: function (num) {
        var obj = getObjects(risers.list_dio, 'num', num);
        if (obj && obj.length > 0) {
            return obj[0];
        }
        return null;
    }

};
// список пистолетов в настройке для синхронизации
var select_guns = {
    list: [],
    set: function (data) {
        select_guns.list = data;
    },
    get: function (num_gun) {

        for (ig = 0, count_ig = select_guns.list.length; ig < count_ig; ig++) {
            if (Number(select_guns.list[ig]) === num_gun) {
                return select_guns.list[ig];
            }
        }
        return null;
    }
};
//=========== МЕТОДЫ ОТОБРАЖЕНИЯ СОСТОЯНИЯ TRK ====================================================
var pb_deliver = {
    pb: [],
    obj: null,
    lab: null,
    init: function () {
        pb_deliver.obj = $(".progressbar-deliver").progressbar({
            value: false,
            change: function () {
                var s = $(this).progressbar("value") + "%";
            }
            //complete: function () {
            //    progressLabel.text("Complete!");
            //}


        });
        pb_deliver.lab = $(".progress-label");


    },
    outValume: function (num_gun, valume, curr_val) {
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
                $(this).text(curr_val.toFixed(1));
            }
        });
    },
    // Вывести наливные стояки
    outNSValume: function (num_ns, valume, curr_val) {
        // вывести значение
        pb_deliver.obj.each(function (indx, element) {
            var id = $(this).attr('id');
            if ('progressbar-ns-' + num_ns == id) {
                $(this).progressbar("value", valume);
            }
        });
        // вывести показания
        pb_deliver.lab.each(function (indx, element) {
            var id = $(this).attr('id');
            if ('progress-label-ns-' + num_ns == id) {
                $(this).text(curr_val.toFixed(1));
            }
        });
    },
    hide: function () {
        pb_deliver.obj.each(function (indx, element) {
            var id = $(this).attr('id');
            $('div#' + id).hide();
        });
    }
};
// Вывести информацию по считывателям
var viewRFID = function () {
    if (rfid) {
        var list = rfid.list;
        if (list) {
            confirm_rfid_all.Out(list);
            for (i = 0, count_rfid = list.length; i < count_rfid; i++) {
                var c_rfid = list[i];
                if (c_rfid) {

                    // Покажем состояние
                    if (c_rfid.num_trk > 0 && c_rfid.num_trk < 13) {
                        // Вывод связь
                        if (c_rfid.online !== null) {
                            if (c_rfid.online) {
                                $('#trk-' + c_rfid.num_trk + '-' + c_rfid.side + '-online').html("").removeClass().addClass('active');
                            } else {
                                $('#trk-' + c_rfid.num_trk + '-' + c_rfid.side + '-online').html("").removeClass().addClass('not_active');
                            }
                        } else {
                            $('#trk-' + c_rfid.num_trk + '-' + c_rfid.side + '-online').html("").removeClass().addClass('null_active');
                        }
                    }
                    // Показать карточки

                    if (cards && cards.list && cards.list.length > 0) {
                        var c_card = cards.getRFIDCardOfNumSide(c_rfid.num_trk, c_rfid.side);
                        if (c_card) {
                            // Карта есть в базе
                            if (c_card.card) {
                                // Да. карта есть в базе
                                $('#button-trk-' + c_card.num_trk + '-' + c_card.side + '-rfid').show();
                                $('#button-trk-' + c_card.num_trk + '-' + c_card.side + '-rfid').text(c_card.card.AutoNumber);
                                if (c_card.card.Active) {
                                    $('#button-trk-' + c_card.num_trk + '-' + c_card.side + '-rfid').removeClass('button-rfid-not-active').addClass('button-rfid-active');
                                } else {
                                    $('#button-trk-' + c_card.num_trk + '-' + c_card.side + '-rfid').removeClass('button-rfid-active').addClass('button-rfid-not-active');
                                }
                                $('#label-trk-' + c_card.num_trk + '-' + c_card.side + '-rfid').hide();
                            } else {
                                // Нет. карты нет в базе
                                $('#button-trk-' + c_card.num_trk + '-' + c_card.side + '-rfid').hide();
                                $('#label-trk-' + c_card.num_trk + '-' + c_card.side + '-rfid').show().text(c_card.hi > 0 && c_card.lo > 0 ? '(' + c_card.hi + ',' + c_card.lo + ') - ?' : ': Нет данных');
                            }
                        } else {
                            // Нет. карта не подносилась к считывтелю
                            $('#button-trk-' + c_rfid.num_trk + '-' + c_rfid.side + '-rfid').hide();
                            $('#label-trk-' + c_rfid.num_trk + '-' + c_rfid.side + '-rfid').show().text('Поднесите карту');
                        }
                    } else {
                        $('.button-rfid').hide();
                        $('.label-rfid').show().text('Поднесите карту');
                    }
                }
            }
        }
    }
};
// Показать все пистолеты
var viewGuns = function () {
    if (guns) {
        var list = guns.list;
        if (list) {
            for (i = 0, count_gun = list.length; i < count_gun; i++) {
                var gun = list[i];
                // вывод тегов тест
                if (gun.num_gun == confirm_tags_gun.current) {
                    confirm_tags_gun.out(gun);
                }
                // Проверим сотояние TRK
                //var id_ofs = openFuelSale.getFuelSaleID(gun.num_trk, gun.side, gun.num_gun);
                var id_ofs = ofs.get(gun.num_gun);
                //// Отобразим кнопки выдать\закрыть
                //if (id_ofs !== null) {
                //    $('#button-gun-' + gun.num_gun + '-deliver').hide();
                //    $('#button-gun-' + gun.num_gun + '-close').show().attr("data-id", id_ofs);
                //    // ttt
                //} else {
                //    $('#button-gun-' + gun.num_gun + '-deliver').show();
                //    $('#button-gun-' + gun.num_gun + '-close').hide().attr("data-id", '');
                //}
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

                    $('#gun-' + gun.num_gun + '-total_volume').val(gun.total_volume > 0 ? gun.total_volume / 100.0 : gun.total_volume).removeClass('error');
                } else {
                    $('#gun-' + gun.num_gun + '-total_volume').val('').addClass('error');
                }
                // Вывод заданно
                if (gun.volume_to_write != null) {
                    $('#gun-' + gun.num_gun + '-volume_to_write').val(gun.volume_to_write > 0 ? gun.volume_to_write / 100.0 : gun.volume_to_write).removeClass('error');
                } else {
                    $('#gun-' + gun.num_gun + '-volume_to_write').val('').addClass('error');
                }
                // Вывод выданно
                if (gun.last_out_volume != null) {
                    $('#gun-' + gun.num_gun + '-last_out_volume').val(gun.last_out_volume > 0 ? gun.last_out_volume / 100.0 : gun.last_out_volume).removeClass('error');
                } else {
                    $('#gun-' + gun.num_gun + '-last_out_volume').val('').addClass('error');
                }

                //gun.state = 2;
                //gun.volume_to_write = 10000;
                //gun.current_volume = 150;
                // Проверим сотояние TRK
                //var id_ofs = openFuelSale.getFuelSaleID(gun.num_trk, gun.side, gun.num_gun);
                // Определить активную кнопку
                if (gun.state !== null) {
                    switch (gun.state) {
                        case 1: //  разрешено выдавать
                            //var card = cards.getCardOfNumSide(gun.num_trk, gun.side);
                            $('div#progressbar-gun-' + gun.num_gun).hide();
                            $('button#button-gun-' + gun.num_gun + '-close').hide();
                            $('button#button-gun-' + gun.num_gun + '-continue').hide();
                            $('button#button-gun-' + gun.num_gun + '-stop').hide();
                            if (gun.taken === true) {
                                $('div#trk-gun-' + gun.num_gun).removeClass().addClass('trk-gun').addClass('trk-gun-active');
                            } else {
                                $('div#trk-gun-' + gun.num_gun).removeClass().addClass('trk-gun');
                            }
                            // Отобразим кнопки выдать\закрыть

                            if (id_ofs !== null && id_ofs > 0) {
                                $('#button-gun-' + gun.num_gun + '-deliver').hide();
                                $('#button-gun-' + gun.num_gun + '-close').attr("data-id", id_ofs);
                                if (select_guns && select_guns.get(gun.num_gun) === null) {
                                    $('#button-gun-' + gun.num_gun + '-close').show();
                                } else {
                                    $('#button-gun-' + gun.num_gun + '-close').hide();
                                }
                                $('div#trk-gun-' + gun.num_gun).removeClass().addClass('trk-gun').addClass('trk-gun-close');
                                //var cont = (gun.volume_to_write - gun.current_volume) / 100.0;
                                //if (cont >= 5) {
                                //    $('button#button-gun-' + gun.num_gun + '-continue').show().attr("data-dose", cont).attr("data-id", id_ofs);
                                //}
                                //var fs = openFuelSale.getFuelSale(id_ofs);


                            } else {
                                //if (card && gun && card.Active && gun.online && gun.taken) {
                                if (gun && gun.online && gun.taken) {
                                    if (select_guns && select_guns.get(gun.num_gun) === null) {
                                        $('button#button-gun-' + gun.num_gun + '-deliver').show();
                                    } else {
                                        $('button#button-gun-' + gun.num_gun + '-deliver').hide();
                                    }
                                } else {
                                    $('button#button-gun-' + gun.num_gun + '-deliver').hide();
                                }
                            }
                            //} else {
                            //    $('button#button-gun-' + gun.num_gun + '-close').hide();
                            //    $('button#button-gun-' + gun.num_gun + '-deliver').hide();
                            //}


                            break;
                        case 2: //  Выдача
                            $('button#button-gun-' + gun.num_gun + '-close').hide();
                            $('button#button-gun-' + gun.num_gun + '-deliver').hide();
                            $('button#button-gun-' + gun.num_gun + '-continue').hide();
                            $('button#button-gun-' + gun.num_gun + '-stop').show();
                            $('div#trk-gun-' + gun.num_gun).removeClass().addClass('trk-gun').addClass('trk-gun-run');
                            $('div#progressbar-gun-' + gun.num_gun).show();
                            if (gun && gun.volume_to_write > 0) {
                                var curr = 0;
                                var curr_val = gun.current_volume > 0 ? gun.current_volume / 100.00 : 0;
                                curr = ((gun.current_volume * 100.0) / gun.volume_to_write);
                                pb_deliver.outValume(gun.num_gun, curr, curr_val);
                            }
                            break;
                        case 4: //  Выдача стоп
                            $('button#button-gun-' + gun.num_gun + '-close').hide();
                            $('button#button-gun-' + gun.num_gun + '-deliver').hide();
                            $('button#button-gun-' + gun.num_gun + '-continue').hide();
                            $('button#button-gun-' + gun.num_gun + '-stop').hide();
                            $('div#trk-gun-' + gun.num_gun).removeClass().addClass('trk-gun').addClass('trk-gun-stop');
                            $('div#progressbar-gun-' + gun.num_gun).show();
                            pb_deliver.outValume(gun.num_gun, 100, 100);
                            break;
                        case 128: //  нет ответа
                            $('div#progressbar-gun-' + gun.num_gun).hide();
                            $('button#button-gun-' + gun.num_gun + '-stop').hide();
                            $('div#trk-gun-' + gun.num_gun).removeClass().addClass('trk-gun').addClass('trk-gun-error');
                            // Отобразим кнопки выдать\закрыть
                            if (id_ofs !== null && id_ofs > 0) {
                                $('#button-gun-' + gun.num_gun + '-deliver').hide();
                                $('#button-gun-' + gun.num_gun + '-close').show().attr("data-id", id_ofs);
                                $('button#button-gun-' + gun.num_gun + '-continue').hide();
                            } else {
                                $('button#button-gun-' + gun.num_gun + '-close').hide();
                                $('button#button-gun-' + gun.num_gun + '-deliver').hide();
                                $('button#button-gun-' + gun.num_gun + '-continue').hide();
                            }
                            break;
                        default: {
                            $('div#trk-gun-' + gun.num_gun).removeClass().addClass('trk-gun').addClass('trk-gun-error');
                            $('div#progressbar-gun-' + gun.num_gun).hide();
                            $('button#button-gun-' + gun.num_gun + '-stop').hide();
                            // Отобразим кнопки выдать\закрыть
                            if (id_ofs != null) {
                                $('#button-gun-' + gun.num_gun + '-deliver').hide();
                                $('#button-gun-' + gun.num_gun + '-close').show().attr("data-id", id_ofs);
                                $('button#button-gun-' + gun.num_gun + '-continue').hide();
                            } else {
                                $('button#button-gun-' + gun.num_gun + '-close').hide();
                                $('button#button-gun-' + gun.num_gun + '-deliver').hide();
                                $('button#button-gun-' + gun.num_gun + '-continue').hide();
                            }
                            break;
                        }

                    }
                } else {
                    // Статус не определен
                    $('button#button-gun-' + gun.num_gun + '-close').hide();
                    $('button#button-gun-' + gun.num_gun + '-deliver').hide();
                    $('button#button-gun-' + gun.num_gun + '-continue').hide();
                    $('div#progressbar-gun-' + gun.num_gun).hide();
                }
            }
        }
    }
};
// Показать значения счетчиков НС
var viewDIORisers = function () {
    if (risers) {
        var list = risers.list_dio;
        if (list) {
            for (i = 0, count_risers_dio = list.length; i < count_risers_dio; i++) {
                var riser = list[i];

                // Counter
                if (riser.Counter !== null) {
                    $('#ns-' + riser.num + '-Counter').val((riser.Counter / 1000000).toFixed(2)).removeClass('error');
                } else {
                    $('#ns-' + riser.num + '-Counter').val('').addClass('error');
                }
                // Counter
                if (riser.Flow !== null) {
                    $('#ns-' + riser.num + '-Flow').val((riser.Flow / 1000000).toFixed(2)).removeClass('error');
                } else {
                    $('#ns-' + riser.num + '-Flow').val('').addClass('error');
                }
                //// Status
                //if (riser.Status != null) {
                //    $('#ns-' + riser.num + '-Status').text(riser.Status).removeClass('error');
                //} else {
                //    $('#ns-' + riser.num + '-Status').val('').addClass('error');
                //}
                //// Temp
                //if (riser.Temp != null) {
                //    $('#ns-' + riser.num + '-Temp').text(riser.Temp).removeClass('error');
                //} else {
                //    $('#ns-' + riser.num + '-Temp').val('').addClass('error');
                //}
                // TimerLiveOn
                //if (riser.TimerLiveOn !== null) {
                //    $('#ns-' + riser.num + '-TimerLiveOn').val(riser.TimerLiveOn).removeClass('error');
                //} else {
                //    $('#ns-' + riser.num + '-TimerLiveOn').val('').addClass('error');
                //}
                //// TimerOn
                //if (riser.TimerOn != null) {
                //    $('#ns-' + riser.num + '-TimerOn').text(riser.TimerOn).removeClass('error');
                //} else {
                //    $('#ns-' + riser.num + '-TimerOn').val('').addClass('error');
                //}
            }
        }
    }
};
// Показать состояние НС
var viewRisers = function () {
    if (risers) {
        var list = risers.list;
        if (list) {
            for (i = 0, count_risers = list.length; i < count_risers; i++) {
                var riser = list[i];

                // Проверим сотояние
                var num_riser = Number(riser.num) + 9;
                //var id_ofs = openFuelSale.getFuelSaleID(num_riser, 0, riser.num);
                var id_ofs = ofs.get(riser.num + 29);
                var cur_ofs = null;
                var DIOriser = null;
                if (id_ofs > 0) {
                    cur_ofs = ofs.getOFS(riser.num + 29)
                    DIOriser = risers.getDIORisers(riser.num);
                }
                //// Отобразим кнопки выдать\закрыть
                //if (id_ofs !== null) {
                //    $('#button-ns-' + num_riser + '-deliver').hide();
                //    $('#button-ns-' + num_riser + '-close').show().attr("data-id", id_ofs);
                //} else {
                //    $('#button-ns-' + num_riser + '-deliver').show();
                //    $('#button-ns-' + num_riser + '-close').hide().attr("data-id", '');
                //}
                //
                //if (riser.flg_kv1 !== null) {
                //    if (riser.flg_kv1) {
                //        $('#ns-' + riser.num + '-flg_kv1').html("").removeClass().addClass('active');
                //    } else {
                //        $('#ns-' + riser.num + '-flg_kv1').html("").removeClass().addClass('not_active');
                //    }
                //} else {
                //    $('#ns-' + riser.num + '-flg_kv1').html("").removeClass().addClass('null_active');
                //}
                //
                //if (riser.flg_kv2 !== null) {
                //    if (riser.flg_kv2) {
                //        $('#ns-' + riser.num + '-flg_kv2').html("").removeClass().addClass('active');
                //    } else {
                //        $('#ns-' + riser.num + '-flg_kv2').html("").removeClass().addClass('not_active');
                //    }
                //} else {
                //    $('#ns-' + riser.num + '-flg_kv2').html("").removeClass().addClass('null_active');
                //}
                // состояние включения насоса
                //if (riser.inp_km !== null) {
                //    if (riser.inp_km) {
                //        $('#ns-' + riser.num + '-inp_km').html("").removeClass().addClass('active');
                //    } else {
                //        $('#ns-' + riser.num + '-inp_km').html("").removeClass().addClass('not_active');
                //    }
                //} else {
                //    $('#ns-' + riser.num + '-inp_km').html("").removeClass().addClass('null_active');
                //}
                // Датчик перелива
                if (riser.inp_kvq1 !== null) {
                    if (riser.inp_kvq1 === true) {
                        $('#ns-' + riser.num + '-inp_kvq1').html("").removeClass().addClass('active');
                    } else {
                        $('#ns-' + riser.num + '-inp_kvq1').html("").removeClass().addClass('not_active');
                    }
                } else {
                    $('#ns-' + riser.num + '-inp_kvq1').html("").removeClass().addClass('null_active');
                }
                // Датчик заземления
                if (riser.inp_kvq2 !== null) {
                    if (riser.inp_kvq2 === false) {
                        $('#ns-' + riser.num + '-inp_kvq2').html("").removeClass().addClass('active');
                    } else {
                        $('#ns-' + riser.num + '-inp_kvq2').html("").removeClass().addClass('not_active');
                    }
                } else {
                    $('#ns-' + riser.num + '-inp_kvq2').html("").removeClass().addClass('null_active');
                }
                // Режим
                if (riser.inp_sa2 !== null) {
                    if (riser.inp_sa2 === false) {
                        $('#ns-' + riser.num + '-inp_sa2').html("Ручной");//.removeClass().addClass('active');
                    } else {
                        $('#ns-' + riser.num + '-inp_sa2').html("Авто");//.removeClass().addClass('not_active');
                    }
                } else {
                    $('#ns-' + riser.num + '-inp_sa2').html("");//.removeClass().addClass('null_active');
                }
                ////
                //if (riser.out_kv1 !== null) {
                //    if (riser.out_kv1) {
                //        $('#ns-' + riser.num + '-out_kv1').html("").removeClass().addClass('active');
                //    } else {
                //        $('#ns-' + riser.num + '-out_kv1').html("").removeClass().addClass('not_active');
                //    }
                //} else {
                //    $('#ns-' + riser.num + '-out_kv1').html("").removeClass().addClass('null_active');
                //}
                ////
                //if (riser.out_kv2 !== null) {
                //    if (riser.out_kv2) {
                //        $('#ns-' + riser.num + '-out_kv2').html("").removeClass().addClass('active');
                //    } else {
                //        $('#ns-' + riser.num + '-out_kv2').html("").removeClass().addClass('not_active');
                //    }
                //} else {
                //    $('#ns-' + riser.num + '-out_kv2').html("").removeClass().addClass('null_active');
                //}
                if (riser.TScut !== null) {
                    $('#ns-' + riser.num + '-dose').val(riser.TScut).removeClass('error');
                } else {
                    $('#ns-' + riser.num + '-dose').val('').addClass('error');
                }
                // Проверка состояния
                if (riser.inp_km !== null) {
                    if (riser.inp_km === false) {
                        // Насос включен
                        $('button#button-ns-' + riser.num + '-close').hide();
                        $('button#button-ns-' + riser.num + '-deliver').hide();
                        // Отобразим прогрес-бар
                        if (riser && cur_ofs && cur_ofs.counter > 0 && DIOriser) {
                            $('button#button-ns-' + riser.num + '-stop').show();
                            $('div#progressbar-ns-' + riser.num).show();
                            var curr = 0;
                            var curr_val = DIOriser.Counter > 0 ? ((DIOriser.Counter / 1000000).toFixed(0) - cur_ofs.counter) : 0;
                            curr = (curr_val * 100.0) / cur_ofs.dose;
                            pb_deliver.outNSValume(riser.num, curr, Number(curr_val));
                        } else {
                            $('button#button-ns-' + riser.num + '-stop').hide();
                            $('div#progressbar-ns-' + riser.num).hide();
                        }
                    } else {
                        // Насос выключен
                        $('button#button-ns-' + riser.num + '-stop').hide();
                        $('div#progressbar-ns-' + riser.num).hide();
                        $('button#button-ns-' + riser.num + '-close').hide();
                        // Отобразим кнопки выдать\закрыть
                        if (id_ofs !== null && id_ofs > 0) {
                            $('#button-ns-' + riser.num + '-deliver').hide();
                            $('#button-ns-' + riser.num + '-close').attr("data-id", id_ofs);
                            var num_gun = Number(riser.num) + 29;
                            if (select_guns && select_guns.get(num_gun) === null) {
                                $('button#button-ns-' + riser.num + '-close').show();
                            } else {
                                $('button#button-ns-' + riser.num + '-close').hide();
                            }
                        } else {
                            // Режим Авто, Заземление
                            if (riser && riser.inp_sa2 === true && riser.inp_kvq2 === false) {
                                //$('button#button-ns-' + riser.num + '-deliver').show();
                                var num_gun = Number(riser.num) + 29;
                                if (select_guns && select_guns.get(num_gun) === null) {
                                    $('button#button-ns-' + riser.num + '-deliver').show();
                                } else {
                                    $('button#button-ns-' + riser.num + '-deliver').hide();
                                }

                            } else {
                                $('button#button-ns-' + riser.num + '-deliver').hide();
                            }
                        }
                    }
                } else {
                    // Статус не определен
                    $('button#button-ns-' + riser.num + '-close').hide();
                    $('button#button-ns-' + riser.num + '-deliver').hide();
                    $('button#button-ns-' + riser.num + '-stop').hide();
                    $('div#progressbar-ns-' + riser.num).hide();
                }
            }
        }
    }
};

var showCardView = function () {
    // Считаем RFID из буфера локальной базы (карточки)
    getRFIDDB(
        function (result_cards) {
            if (result_cards) {
                cards.setCards(result_cards);
            }
        }
    );
};

var showDIOView = function () {
    //  Прочесть теги счетчиков оборотов наливных стояков из OPC
    if (bpollDIO === true) {
        getDIORisersTags(
            function (result_dio) {
                if (result_dio) {
                    risers.setDIORisers(result_dio);
                    viewDIORisers();
                }
            }
        );
    }
};

var showView = function () {
    // Время
    var d = new Date();
    $('#date-value').text(toISOStringTZ(d));
    $('#date-user').text(user_name);
    $('#date-host').text(host_name);

    getAsyncClient(function (result_client) {
        $('#date-client').text(result_client);
    });
    //$('#date-client').text(natIP());

    // Прочесть открытые выдачи
    getAsyncOFS(
        function (result_ofs) {
            ofs.set(result_ofs);
        });
    // Оприсим номера пистолетов по которым идет настройка выдачи или закрытие
    getAsyncGuns(
        function (result_guns) {
            select_guns.set(result_guns);
            $('#date-guns').text(result_guns);
        }
    );
    // прочтем все теги
    getAllTags(
        function (result_allTag) {
            if (result_allTag) {
                // Rfid
                rfid.setRFID(result_allTag.rfids); viewRFID();
                // Пистолеты
                guns.setGuns(result_allTag.guns); viewGuns();
                // Пистолеты
                risers.setRisers(result_allTag.risers); viewRisers();
            }
        }
    );
};
//=========== ДИАЛОГОВЫЕ ОКНА ====================================================
//--------------------------------------------------------------------------------
// Панель "Состояние RFID-считывателей"
var confirm_rfid_all = {
    obj: null,
    init: function () {
        confirm_rfid_all.obj = $("#confirm-rfid-all").dialog({
            resizable: false,
            modal: true,
            autoOpen: false,
            height: "auto",
            title: "RFID - считыватели",
            width: 650,
            buttons: {
                'Закрыть': function () {
                    $(this).dialog("close");
                }
            }
        });
    },
    Open: function () {
        confirm_rfid_all.obj.dialog("open");
    },
    Out: function (rfid_list) {
        for (i = 0, count_rfid_list = rfid_list.length; i < count_rfid_list; i++) {
            var rfid = rfid_list[i];
            if (rfid.num_trk > 0 && rfid.num_trk < 13) {
                // Вывод связь
                if (rfid.online != null) {
                    if (rfid.online) {
                        $('#rfid-' + rfid.num_trk + '-' + rfid.side + '-online').html("").removeClass().addClass('active');
                    } else {
                        $('#rfid-' + rfid.num_trk + '-' + rfid.side + '-online').html("").removeClass().addClass('not_active');
                    }
                } else {
                    $('#rfid-' + rfid.num_trk + '-' + rfid.side + '-online').html("").removeClass().addClass('null_active');
                }
                if (cards && cards.list && cards.list.length > 0) {
                    var c_card = cards.getRFIDCardOfNumSide(rfid.num_trk, rfid.side);
                    if (c_card != null && c_card.card) {
                        $('#rfid-' + rfid.num_trk + '-' + rfid.side + '-id').html(c_card.card.Id);
                        $('#rfid-' + rfid.num_trk + '-' + rfid.side + '-Number').html(c_card.card.Number);
                        $('#rfid-' + rfid.num_trk + '-' + rfid.side + '-AutoNumber').html(c_card.card.AutoNumber);
                        $('#rfid-' + rfid.num_trk + '-' + rfid.side + '-Debitor').html(c_card.card.Debitor);
                        // Вывод активности
                        if (c_card.card.Active != null) {
                            if (c_card.card.Active) {
                                $('#rfid-' + rfid.num_trk + '-' + rfid.side + '-Active').html("").removeClass().addClass('active');
                            } else {
                                $('#rfid-' + rfid.num_trk + '-' + rfid.side + '-Active').html("").removeClass().addClass('not_active');
                            }
                        } else {
                            $('#rfid-' + rfid.num_trk + '-' + rfid.side + '-Active').html("").removeClass().addClass('null_active');
                        }
                    }
                }

            }
        }


    }
};
//--------------------------------------------------------------------------------
// Панель "Информация по RFID-карте"
var confirm_rfid_card = {
    obj: null,
    init: function () {
        confirm_rfid_card.obj = $("#confirm-rfid-card").dialog({
            resizable: false,
            modal: true,
            autoOpen: false,
            height: "auto",
            width: 400,
            buttons: {
                'Закрыть': function () {
                    $(this).dialog("close");
                }
            }
        });
    },
    Open: function (trk_num, side) {
        if (trk_num && side) {
            // пистолеты
            if (trk_num > 0 && trk_num < 10) {
                confirm_rfid_card.obj.dialog("option", "title", 'RFID-карта (Колонка №' + trk_num + ', сторона :' + (side == 0 ? 'левая' : 'правая') + ')');
            }
            // Наливной стояк
            if (trk_num >= 10 && trk_num <= 12) {
                var num = trk_num - 9;
                confirm_rfid_card.obj.dialog("option", "title", 'RFID-карта (Наливной стояк №' + num + ')');
            }
            confirm_rfid_card.obj.dialog("open");
            var card = cards.getCardOfNumSide(trk_num, side);
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
//--------------------------------------------------------------------------------
// Панель "Задания выдачи и работе с SAP MII"
var confirm_df = {
    obj: null,
    form: null,
    operator_name: null,// 'Оператор тест',
    smena_num: null,// 0,
    smena_datetime: null,// new Date(2019, 0, 10, 0, 0, 0, 0),

    open_num: null,

    type: null,  // текущие тип (пистолет-0, стояк-1, керосин-2)
    gun: null,  // текущие теги пистолета
    risers: null,       // текущие теги разливочного стояка
    DIOrisers: null,    // текущие теги счетчика стояка
    card: null, // текущая карта
    supply: null, // текущая поставка возвращенная от САП
    reserv: null, // текущий список резервирования возвращенный от САП
    plan: null, // текущий план на транспортное средство (на текушее время и дату)

    // КОЛОНКА ********************************************************
    input_deliver_type_fuel: null,      // тип топлива

    select_capacity: null,              // выбор емкости
    textarea_capacity: null,            // выбор емкостей
    // основные параметры емкости
    input_deliver_take_level: null,     // уровень
    input_deliver_take_mass: null,      // масса
    input_deliver_take_temp: null,      // температура
    input_deliver_take_volume_all: null,    // объем по всем
    input_deliver_take_volume: null,    // объем
    input_deliver_take_dens: null,      // плотность
    input_deliver_take_water_level: null,      // уровень воды
    input_deliver_start_counter: null,      // нач значение счетчика
    input_deliver_dose_fuel: null,      // доза топлива
    input_deliver_mase_fuel: null,      // расчетная масса топлива


    checkbox_deliver_Passage: null,     // Режим пролив
    // SAP ********************************************************
    select_variant: null,               // выбор номеров позиций по поставке
    buttom_select_sap: null,            // Запрос на САП
    buttom_select_sap_debitor: null,    // Запрос на САП дебитор
    buttom_select_sap_ndopusk: null,    // Запрос на САП наряд-допуск
    input_sap_ndopusk: null,            // Номер наряд допуска
    input_sap_num: null,                // Номер запроса в САП
    input_sap_num_pos: null,            // Номер позиции запроса в САП
    select_sap_num_pos: null,           // выбор номеров позиций по поставке
    select_sap_num_pos_reserv: null,    // выбор номеров позиций по резервированию.
    input_sap_num_ts: null,             // Номер транспортного средства
    input_sap_num_kpp: null,            // Номер КПП
    input_sap_name_forwarder: null,     // ФИО экпедитора
    select_sap_ozm: null,               // SAP-ОЗМ выбор
    input_sap_ozm: null,                // SAP-ОЗМ ответ справочника
    input_sap_ozm_bak: null,            // ОЗМ БАК
    input_sap_ozm_amount: null,         // Количество для выдачи
    sap_ozm_amount_multiplier: 1,        // Множитель
    select_sap_stock_recipient: null,   // Склад получателя выбор
    input_sap_stock_recipient: null,    // Склад получателя ответ справочника
    select_sap_factory_recipient: null, // Завод получатель выбор
    input_sap_factory_recipient: null,  // Завод получатель ответ справочника
    input_sap_id_card: null,            // ИД карта

    allFields: null,

    // старт выдачи
    issuance_start: function (id) {
        //if (log) { log.info('Начинаем выдачу на колонку. id открытой выдачи = ' + id); } // TODO:!!!ТЕСТ УБРАТЬ
        //logInfo(catalog_user.name_log, 'Начинаем выдачу на колонку. id открытой выдачи = ' + id);
        logInfo(catalog_user.name_log, 'Начинаем выдачу на колонку [FuelSale].[id] = ' + id + ' (тип = ' + confirm_df.type + ', № пистолета(НС) = ' + confirm_df.open_num + ')');
        if (bcontrolTRK_ban === false) {
            // Выдать ГСМ через ТРК по пистолету
            if (confirm_df.type === 0) {
                //if (log) { log.info('Производим выдачу на реальную колонку, id=' + id); } // TODO:!!!ТЕСТ УБРАТЬ
                updateMessageTips("Производим выдачу на реальную колонку, id=" + id);
                var gun_start = {
                    id: id,
                    num: confirm_df.gun !== null ? confirm_df.gun.num_gun : 0,
                    // !! отменили режим пасаж
                    //passage: confirm_df.checkbox_deliver_Passage.prop('checked') ? true : false,
                    passage: false,
                    volume: Number(Number(confirm_df.input_deliver_dose_fuel.val()).toFixed(2)) * 100
                };
                // TODO:!!!ТЕСТ УБРАТЬ
                //if (log) {
                //    log.info('Сформировали строку gun_start');
                //    log.debug(gun_start);
                //}
                postAsyncGunStart(
                    gun_start,
                    function (status) {
                        updateMessageTips("Команда на отпуск ГСМ отправлена на колонку. Код состояния колонки =" + status + ".");
                        logInfo(catalog_user.name_log, 'Команда на отпуск ГСМ отправлена на колонку ([FuelSale].[id] - ' + gun_start.id + ', num - ' + gun_start.num + ', volume - ' + gun_start.volume + '). Код состояния колонки = ' + status);
                        //if (log) { log.info('Команда на отпуск ГСМ отправлена на колонку. Код состояния колонки =' + status); } // TODO:!!!ТЕСТ УБРАТЬ
                    });
            }
            // Выдать ГСМ через наливной стояк
            if (confirm_df.type === 1) {
                //if (log) { log.info('Производим выдачу через реальный наливной стояк, id=' + id); } // TODO:!!!ТЕСТ УБРАТЬ
                updateMessageTips("Производим выдачу через реальный наливной стояк, id=" + id);
                // !!!!!!! сдесь реализуем выдачу через наливной стояк
                var ns_start = {
                    id: id,
                    num: confirm_df.risers != null ? confirm_df.risers.num : 0,
                    volume: confirm_df.input_deliver_dose_fuel.val(),
                    advance: ins_advance
                };
                //// TODO:!!!ТЕСТ УБРАТЬ
                //if (log) {
                //    log.info('Сформировали строку ns_start');
                //    log.debug(ns_start);
                //}
                postAsyncNSStart(
                    ns_start,
                    function (status) {
                        updateMessageTips("Команда на отпуск ГСМ отправлена на наливной стояк. Код состояния наливного стояка =" + status + ".");
                        logInfo(catalog_user.name_log, 'Команда на отпуск ГСМ отправлена на НС ([FuelSale].[id] - ' + ns_start.id + ', num - ' + ns_start.num + ', volume - ' + ns_start.volume + ', advance - ' + ns_start.advance + '). Код состояния НС = ' + status);
                        //if (log) { log.info('Команда на отпуск ГСМ отправлена на наливной стояк. Код состояния наливного стояка =' + status); } // TODO:!!!ТЕСТ УБРАТЬ
                    });
            }

        } else {
            //if (log) { log.info('Выдача на колонку или наливной стояк - заблокированна, id=' + id); } // TODO:!!!ТЕСТ УБРАТЬ
            updateMessageTips("Выдача на колонку или наливной стояк - заблокированна, id=" + id);
        }
        //openFuelSale.init(); // Обновим данные по открытим выдачам
        confirm_df.obj.dialog("close");
    },
    //сохраним данные в локальной базе fuelSale
    save_fuelSale: function (id) {
        var fuel_sale = confirm_df.getNewFuelSale(id);
        //// TODO:!!!ТЕСТ УБРАТЬ
        //if (log) {
        //    log.info('Сформировали строку fuel_sale');
        //    log.debug(fuel_sale);
        //}
        LockScreen('Подождите, идет создание строки ведомости выдачи ГСМ в БД');
        postAsyncFuelSale(
            fuel_sale,
            function (id) {
                //if (log) { log.info('Запись строки fuel_sale, результат id=' + id); } // TODO:!!!ТЕСТ УБРАТЬ
                logInfo(catalog_user.name_log, 'Создать строку [FuelSale].[id] = ' + id + ' (тип = ' + confirm_df.type + ', № пистолета(НС) = ' + confirm_df.open_num + ')');
                LockScreenOff();
                // Данные в САП сохранились?
                if (id > 0) {
                    // Сохраним открытые выдачи
                    if (confirm_df.type === 0) {
                        putAsyncOFS({ num: fuel_sale.num, id: id, dose: 0, counter: 0 }, null);
                    } else {
                        putAsyncOFS({ num: fuel_sale.num + 29, id: id, dose: Number(Number(fuel_sale.dose).toFixed(0)), counter: fuel_sale.start_counter }, null);
                    }
                    // Начнем выдавать
                    confirm_df.issuance_start(id);

                } else {
                    // Ошибка, операция отменена (! нужно решить что делать далее).
                    confirm_df.updateTips("Ошибка создания строки FuelSale в локальной базе данных. Код ошибки=" + id + ". Операция отменена.");
                    //logError(catalog_user.name_log, "Ошибка создания строки FuelSale в локальной базе данных. Код ошибки=" + id + ". Операция отменена.");
                }
            }
        );

    },
    // Форма подтверждения сохранения данных в САП
    fsap: {
        obj: null,
        init: function () {
            confirm_df.fsap.obj = $("#dialog-message").dialog({
                modal: true,
                title: 'Проверьте данные отправляемые в САП после завершения выдачи ГСМ!',
                autoOpen: false,
                height: "auto",
                width: 500,
                close: function (event, ui) {
                    // Удалим номер пистолета из списка по которым производятся настройки
                    logInfo(catalog_user.name_log, 'Окно «Настроить выдачу ГСМ» -> Закрыто окно «Проверьте данные отправляемые в САП после завершения выдачи ГСМ!». (тип = ' + confirm_df.type + ', № пистолета(НС) = ' + confirm_df.open_num + ')');
                },
                buttons: {
                    'Начать выдачу': function () {
                        logInfo(catalog_user.name_log, 'Окно «Настроить выдачу ГСМ» -> Окно «Проверьте данные отправляемые в САП после завершения выдачи ГСМ!». -> Нажата кнопка «Начать выдачу, данные САП проверены» (тип = ' + confirm_df.type + ', № пистолета(НС) = ' + confirm_df.open_num + ')');
                        LockScreen('Подождите, идет создание строки БД для САП');
                        postAsyncSAP_Buffer(
                            sap_buffer,
                            function (id) {
                                //if (log) { log.info('Запись строки sap_buffer, результат id=' + id); } // TODO:!!!ТЕСТ УБРАТЬ
                                logInfo(catalog_user.name_log, 'Создать строку САП [SAP_BUFFER].[id] = ' + id + ' (тип = ' + confirm_df.type + ', № пистолета(НС) = ' + confirm_df.open_num + ')');
                                LockScreenOff();
                                // Данные в САП сохранились?
                                if (id > 0) {
                                    // Запись в базу локальную
                                    confirm_df.save_fuelSale(id);
                                } else {
                                    // Ошибка, операция отменена (! нужно решить что делать далее).
                                    confirm_df.updateTips("Ошибка создания строки для SAP в локальной базе данных. Код ошибки=" + id + ". Операция отменена.");
                                    //logError(catalog_user.name_log, "Ошибка создания строки для SAP в локальной базе данных. Код ошибки=" + id + ". Операция отменена.");
                                }
                            }
                        );
                        $(this).dialog("close");
                    },
                    'Вернутся к выбору режимов': function () {
                        logInfo(catalog_user.name_log, 'Окно «Настроить выдачу ГСМ» -> Окно «Проверьте данные отправляемые в САП после завершения выдачи ГСМ!». -> Нажата кнопка «Вернутся к выбору режимов» (тип = ' + confirm_df.type + ', № пистолета(НС) = ' + confirm_df.open_num + ')');
                        $(this).dialog("close");
                    }
                }
            });
        },
        open: function (sap_buffer) {
            confirm_df.fsap.obj.dialog("open");
            logInfo(catalog_user.name_log, 'Окно «Настроить выдачу ГСМ» -> Открыто окно «Проверьте данные отправляемые в САП после завершения выдачи ГСМ!». (тип = ' + confirm_df.type + ', № пистолета(НС) = ' + confirm_df.open_num + ')');
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
                $('label#SAP-N_POS').text(sap_buffer.N_POS);
                $('label#SAP-LGORT').text(sap_buffer.LGORT);
                $('label#SAP-WERKS').text(sap_buffer.WERKS);
            }
        }
    },
    // Вернуть позицию поставки
    getPosSupply: function (pos) {
        var sup = getObjects(confirm_df.supply, 'posnr', pos);
        if (sup != null && sup.length > 0) {
            return sup[0];
        };
        return null;
    },
    // Вернуть позицию резервирования
    getPosReserv: function (pos) {
        var sup = getObjects(confirm_df.reserv, 'RSPOS', pos);
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
        if (o.val() > min && o.val() <= max) {
            return true;
        } else {
            o.addClass("ui-state-error");
            confirm_df.updateTips("Значение " + n + " должно быть в диапазоне от " +
                min + " до " + max + ".");
            return false;
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
        //var tst = o.val();
        if (Number(o.val()) < 0) {
            o.addClass("ui-state-error");
            confirm_df.updateTips(message);
            return false;
        } else {
            return true;
        }
    },
    // Проверка на пустой объект
    checkIsNullOfMessage: function (o, message) {
        if (o.val() === '' || o.val() === null) {
            o.addClass("ui-state-error");
            confirm_df.updateTips(message);
            return false;
        } else {
            return true;
        }
    },
    // Проверка на "0"
    checkIsZeroOfMessage: function (o, message) {
        if (o.val() === 0) {
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
    // Проверка правильного заполнения формы
    validationConfirm: function (variant) {
        var valid = true;
        $(".validateTips").text('');
        $(".ui-state-error").removeClass("ui-state-error");
        // Проверка RFID карты на активность

        if (ntype_test === 0 && confirm_df.gun) { valid = valid && confirm_df.checkCheckboxOfMessage($('#deliver-Taken'), true, "Пистолет не снят - выдача запрещена!") }

        if (confirm_df.input_deliver_start_counter.val() !== null && Number(confirm_df.input_deliver_start_counter.val()) > 0) {
            //
        } else {
            confirm_df.input_deliver_start_counter.addClass("ui-state-error");
            confirm_df.updateTips("Начальное значение счетчика неопределенно или равно '0'");

            return false;
        }

        if (!confirm_df.checkbox_deliver_Passage.prop('checked')) {

            if (confirm_df.card === null) {
                confirm_df.updateTips("Нет RFID-карты - выдача запрещена!");
                return false;
            }

            if (confirm_df.card && !confirm_df.card.Active) {
                confirm_df.updateTips("RFID-карта не активна - выдача запрещена!");
                return false;
            }
            // режим не пролив
            valid = valid && confirm_df.checkSelectOfMessage(confirm_df.select_variant, "Выберите и заполните вариант выдачи", 1, 6);

            valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_sap_num, "Не указан номер (резервирования\ исх.поставки\ требования М-11)");
            if (variant !== "4" && variant !== "3" && variant !== "2") valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_sap_num_pos, "Не указан номер позиции");
            if (variant === "3") valid = valid && confirm_df.checkSelectValOfMessage(confirm_df.select_sap_num_pos, "Выберите номер позиции ИП", 1, 10);
            if (variant === "2") valid = valid && confirm_df.checkSelectValOfMessage(confirm_df.select_sap_num_pos_reserv, "Выберите номер позиции ИП", 1, 10);
            valid = valid && confirm_df.checkLength(confirm_df.input_sap_num_ts, "Номер ТС фактический", 1, 40);
            //if (variant !== "5") valid = valid && confirm_df.checkLength(confirm_df.input_sap_num_kpp, "№ КПП", 1, 2);
            if (variant !== "5") valid = valid && confirm_df.checkLength(confirm_df.input_sap_name_forwarder, "ФИО экспедитора", 1, 40);
            //Проверка возврата САП
            if (variant !== "4") valid = valid && confirm_df.checkLength(confirm_df.input_sap_ozm, "ОЗМ из (резервирования \ поставки) ", 1, 18);
            if (variant === "4") valid = valid && confirm_df.checkSelectValOfMessage(confirm_df.select_sap_ozm, "Выберите ОЗМ");
            //valid && confirm_df.checkLength(confirm_df.input_sap_ozm_bak, "ОЗМ согласно бака", 1, 18);
            if (variant !== "4") valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_sap_stock_recipient, "Нет значения склад получателя (из резервирования \ получатель материала в ИП)");
            if (variant === "4") valid = valid && confirm_df.checkSelectValOfMessage(confirm_df.select_sap_stock_recipient, "Выберите склад получателя");
            if (variant !== "4" && variant !== "3") valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_sap_factory_recipient, "Нет значения завод-получатель");
            if (variant === "4") valid = valid && confirm_df.checkSelectValOfMessage(confirm_df.select_sap_factory_recipient, "Выберите завод-получатель");
            if (variant === "2" && variant === "5" && variant === "6") valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_sap_id_card, "Нет значения ID карты");

            if (variant !== "4") {
                var max_mass = confirm_df.input_sap_ozm_amount.val() !== null ? Number(confirm_df.input_sap_ozm_amount.val()) : 0;
                valid = valid && confirm_df.checkSelect(confirm_df.input_deliver_mase_fuel, "расчетной массы", 0, max_mass * confirm_df.sap_ozm_amount_multiplier);
            }
            // Проверка на совподение ОЗМ -------------------------------------------------
            var ozm_tanks;
            // Пистолет
            if (confirm_df.type === 0) {
                ozm_tanks = confirm_df.gun != null ? confirm_df.gun.type_fuel : null;
            }
            // НС
            if (confirm_df.type === 1) {
                ozm_tanks = confirm_df.risers != null ? confirm_df.risers.type_fuel : null;
            }
            var ozm_sap = variant === "4" ? confirm_df.select_sap_ozm.val() : confirm_df.input_sap_ozm.val();
            if (ozm_sap && ozm_sap !== "") {
                ozm_sap = Number(ozm_sap);
                if (ozm_sap !== ozm_tanks) {
                    confirm_df.updateTips("ОЗМ выбранной емкости и ОЗМ требования – не совпадают!");
                    valid = false;
                }
            }
            //-------------------------------------------------------------------------------
        }
        // Проверка выбранного бака
        //valid = valid && confirm_df.checkSelectValOfMessage(confirm_df.select_capacity, "Выберите бак с топливом");
        valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_deliver_take_dens, "Нет значения плотности ГСМ в баке");
        valid = valid && confirm_df.checkIsZeroOfMessage(confirm_df.input_deliver_take_dens, "Значение плотности ГСМ в баке = 0, вычисление массы невозможно");
        valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_deliver_take_level, "Нет значения уровень ГСМ в баке");
        valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_deliver_take_mass, "Нет значения массы ГСМ в баке");
        valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_deliver_take_temp, "Нет значения температуры ГСМ в баке");
        valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_deliver_take_volume, "Нет значения объема ГСМ в баке");
        valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_deliver_take_water_level, "Нет значения уровень п-воды в баке");
        // Проверка колонки
        valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_deliver_dose_fuel, "Нет значения дозы");
        if (confirm_df.type === 0) {
            valid = valid && confirm_df.checkSelect(confirm_df.input_deliver_dose_fuel, "дозы", 0, 4999);
        } else {
            valid = valid && confirm_df.checkSelect(confirm_df.input_deliver_dose_fuel, "дозы (для НС)", ins_advance, 99999);
        }
        return valid;
    },
    // Выдать
    StartIssueFuel: function (variant) {
        // проверка правильности заполнения формы
        var valid = confirm_df.validationConfirm(variant);
        logInfo(catalog_user.name_log, 'Окно «Настроить выдачу ГСМ» -> Проверка правильности заполнения valid = ' + valid + ', режим = ' + variant + '. (тип = ' + confirm_df.type + ', № пистолета(НС) = ' + confirm_df.open_num + ')');
        // Все заполненно?
        if (valid) {
            // Да форма заполнена
            if (variant >= 1 && variant <= 7) {
                // получим данные для SAP
                var sap_buffer = confirm_df.getNewSAP_Buffer();
                // Передадим управление форме подтверждения данных SAP
                confirm_df.fsap.init();
                confirm_df.fsap.open(sap_buffer);
            } else {
                // Запись в базу локальную
                confirm_df.save_fuelSale(null);
            }
        } else {
            // Нет форма не заполнена
            // .....
        }
    },
    // инициализация формы
    init: function () {
        confirm_df.obj = $("#confirm-deliver-fuel").dialog({
            resizable: false,
            modal: true,
            autoOpen: false,
            height: "auto",
            width: 900,
            close: function (event, ui) {
                // Удалим номер пистолета из списка по которым производятся настройки
                logInfo(catalog_user.name_log, 'Закрыто окно «Настроить выдачу ГСМ». № пистолета(НС) = ' + confirm_df.open_num);
                deleteAsyncGuns(Number(confirm_df.open_num));
                confirm_df.open_num = null;
            },
            buttons: {
                'Начать выдачу': function () {
                    LockScreen('Подождите... идет проверка введенных данных');
                    logInfo(catalog_user.name_log, 'Окно «Настроить выдачу ГСМ» -> Нажата кнопка «Начать выдачу» (тип = ' + confirm_df.type + ', № пистолета(НС) = ' + confirm_df.open_num + ')');
                    // Проверим по указаному номеру пистолета\НС уже идет выдача?
                    getAsyncOpenFuelSaleOfNum(confirm_df.open_num,
                        function (id_open_num) {
                            LockScreenOff();
                            if (id_open_num === null || id_open_num === 0) {
                                var variant = confirm_df.select_variant.val();
                                // Определим режим пролив
                                if (variant === "-1" && confirm_df.checkbox_deliver_Passage.prop('checked')) {
                                    variant = "7";
                                }
                                if (variant === "1" || variant === "2" || variant === "5") {
                                    // Проверим на требование
                                    var mass_input = confirm_df.input_deliver_mase_fuel.val() !== null && confirm_df.input_deliver_mase_fuel.val() !== "" ? Number(confirm_df.input_deliver_mase_fuel.val()) : 0;
                                    var mass_treb = confirm_df.input_sap_ozm_amount.val() !== null && confirm_df.input_sap_ozm_amount.val() !== "" ? Number((Number(confirm_df.input_sap_ozm_amount.val()) * confirm_df.sap_ozm_amount_multiplier).toFixed(2)) : 0;
                                    var pos = variant === "2" ? confirm_df.select_sap_num_pos_reserv.val() : confirm_df.input_sap_num_pos.val();
                                    var num_treb = confirm_df.input_sap_num.val();
                                    getAsyncCurrentIssueFuelOfNumPos(num_treb, pos,
                                        function (current) {
                                            if (current === null) {
                                                // Выдачи по этому требованию и номеру позиции нет
                                                confirm_df.StartIssueFuel(variant);
                                            } else {
                                                // Есть выдача, по указаному требванию и номеру позиции
                                                var ost = mass_treb - current; // Остаток
                                                if (mass_input <= ost) {
                                                    // Масса затребованая меньше или ровна остатку
                                                    confirm_df.StartIssueFuel(variant);
                                                } else {
                                                    confirm_df.updateTips("ВЫДАЧА ЗАПРЕЩЕНА. Найдена не закрытая выдача по требованию №" + num_treb + ", позиции № " + pos + ", ожидаемая выдача ГСМ = " + current + " кг. Текущий остаток ГСМ = " + mass_treb + ", остаток с учетом ожидаемой выдачи = " + ost + " кг. < затребованого ГСМ = " + mass_input + " кг. Произведите выдачу по другой ведомости или позиции или дождитесь закрытия текущей выдачи и обновления остатков в САП.");
                                                }
                                            }
                                        });

                                } else {
                                    // Выдадим
                                    confirm_df.StartIssueFuel(variant);
                                }
                                //var pos = 0;
                                //var num_treb = 0;

                                //} else {
                                //    var mass_input = confirm_df.input_deliver_mase_fuel.val() !== null && confirm_df.input_deliver_mase_fuel.val() !== "" ? Number(confirm_df.input_deliver_mase_fuel.val()) : 0;
                                //    var mass_treb = confirm_df.input_sap_ozm_amount.val() !== null && confirm_df.input_sap_ozm_amount.val() !== "" ? Number((Number(confirm_df.input_sap_ozm_amount.val()) * confirm_df.sap_ozm_amount_multiplier).toFixed(2)) : 0;
                                //    var variant = confirm_df.select_variant.val();
                                //    var pos = variant === "3" ? confirm_df.select_sap_num_pos.val() : variant === "2" ? confirm_df.select_sap_num_pos_reserv.val() : variant !== "4" && variant !== "7" ? confirm_df.input_sap_num_pos.val() : null;
                                //    var num_treb = confirm_df.input_sap_num.val();
                                //}

                                //
                                //getAsyncOpenSAP_BufferOfNum(
                                //    num_treb,
                                //    pos,
                                //    function (sap_buffer_open) {
                                //        LockScreenOff();
                                //        if (sap_buffer_open === null || sap_buffer_open.length === 0 || (mass_treb > 500 && sap_buffer_open.length > 0)) {

                                //        } else {
                                //            confirm_df.updateTips("ВЫДАЧА ЗАПРЕЩЕНА. Найдена не закрытая выдача требование №" + confirm_df.input_sap_num.val() + ", позиция № " + pos + ", текущий остаток ГСМ (" + mass_treb + ") <= 500 кг. Произведите выдачу по другой ведомости, позиции или дождитесь закрытия текущей.");

                                //        }
                                //    }
                                //);


                            } else {
                                LockScreenOff();
                                logWarn(catalog_user.name_log, 'Окно «Настроить выдачу ГСМ» -> Отмена «Начать выдачу», закройте предыдущую выдачу [id_open_num]=' + id_open_num + '. Проверьте в окне другого оператора. (тип = ' + confirm_df.type + ', № пистолета(НС) = ' + confirm_df.open_num + ')');
                                confirm_df.updateTips("ВЫДАЧА ЗАПРЕЩЕНА. Закройте предыдущую выдачу=" + id_open_num + ". Проверьте в окне другого оператора");
                            }
                        });
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
        confirm_df.textarea_capacity = $('textarea#deliver-Capacity');
        confirm_df.select_capacity = initSelect(
            $('select[name ="Capacity"]'),
            { width: 150 },
            null,
            null,
            -1,
            function (event, ui) {
                event.preventDefault();
                // Обновим информацию по баку
                confirm_df.viewParmetrOneTank(ui.item.value);
            },
            null);
        // основные параметры емкости
        confirm_df.input_deliver_take_level = $('input#deliver-take-level');
        confirm_df.input_deliver_take_mass = $('input#deliver-take-mass');
        confirm_df.input_deliver_take_temp = $('input#deliver-take-temp');
        confirm_df.input_deliver_take_volume_all = $('input#deliver-take-volume-all');
        confirm_df.input_deliver_take_volume = $('input#deliver-take-volume');
        confirm_df.input_deliver_take_dens = $('input#deliver-take-dens');
        confirm_df.input_deliver_take_water_level = $('input#deliver-take-water-level');

        confirm_df.input_deliver_start_counter = $('input#deliver-counter');

        // доза топлива
        confirm_df.input_deliver_dose_fuel = $('input#deliver-DoseFuel').on("change", function (event) {
            event.preventDefault();
            confirm_df.viewCalcMass();
        });
        confirm_df.input_deliver_mase_fuel = $('input#deliver-MassFuel');
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
            }
        });
        // SAP ********************************************************
        // выбор режимов
        confirm_df.select_variant = initSelect(
            $('select[name ="variant-sap"]'),
            { width: 300 },
            null,
            null,
            -1,
            function (event, ui) {
                event.preventDefault();
                confirm_df.viewVariant(ui.item.value);
            },
            null);
        confirm_df.buttom_select_sap_ndopusk = $('button#button-sap-ndopusk').on('click', function () {
            $(".validateTips").text('');
            $(".ui-state-error").removeClass("ui-state-error");
            event.preventDefault();
            var i = confirm_df.select_variant.val();
            if (i === "6") {
                confirm_df.input_sap_ndopusk = null;
                confirm_df.select_sap_num_pos.selectmenu("widget").hide();
                confirm_df.select_sap_num_pos_reserv.selectmenu("widget").hide();
                confirm_df.input_sap_ozm.val('');
                confirm_df.input_sap_ozm_amount.val('');
                confirm_df.input_sap_stock_recipient.val('');
                confirm_df.input_sap_factory_recipient.val('');

            }
            var valid = true;
            valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_sap_num, "Введите наряд-допуск");
            valid = valid && confirm_df.checkSelect(confirm_df.input_sap_num, "наряд-допуска", 0, 99999);

            if (valid === true) {
                confirm_df.input_sap_num.val($.trim(confirm_df.input_sap_num.val())); // Уберем пробелы
                var num = confirm_df.input_sap_num.val();
                getReservationOfNDopusk(
                    num, i,
                    function (result) {
                        //// TODO:!!!ТЕСТ УБРАТЬ
                        //if (log) {
                        //    log.info('Сформировали строку getReservationOfNDopusk - > result');
                        //    log.debug(result);
                        //}
                        if (result.RSNUM === "") {
                            OnAJAXErrorOfMessage("Резервирование по наряд-допуску:" + num + " не найдено");
                        } else {
                            confirm_df.input_sap_ndopusk = num;
                            confirm_df.input_sap_num.val(result.RSNUM);
                            confirm_df.input_sap_num_pos.val(result.RSPOS);
                            confirm_df.input_sap_ozm.val(result.MATNR);
                            confirm_df.input_sap_ozm_amount.val(result.BDMNG);
                            confirm_df.input_sap_factory_recipient.val(result.WERKS);
                            confirm_df.sap_ozm_amount_multiplier = ($.trim(result.MEINS) === "TO" ? 1000 : 1);
                            $('#label-sap-ozm-amount').text('Количество ' + result.MEINS + ':');
                            var depots = catalog_depots.get($.trim(result.UMLGO));
                            if (depots) {
                                confirm_df.input_sap_stock_recipient.val('(' + depots.id + ') ' + depots.name);
                            }
                        }
                    });
            }
        });
        // нажата кнопка "Получить из САП дебитор"
        confirm_df.buttom_select_sap_debitor = $('button#button-sap-debitor').on('click', function () {
            $(".validateTips").text('');
            $(".ui-state-error").removeClass("ui-state-error");
            event.preventDefault();
            var i = confirm_df.select_variant.val();

            var valid = true;
            valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_deliver_dose_fuel, "Нет значения дозы");
            valid = valid && confirm_df.checkSelect(confirm_df.input_deliver_dose_fuel, "дозы", 0, 99999);

            if (valid === true) {
                // Покажем позиции
                confirm_df.select_sap_num_pos.selectmenu("widget").hide();
                confirm_df.select_sap_num_pos_reserv.selectmenu("widget").hide();
                confirm_df.input_sap_ozm.val('');
                confirm_df.input_sap_ozm_amount.val('');
                confirm_df.input_sap_stock_recipient.val('');
                confirm_df.input_sap_factory_recipient.val('');
                switch (i) {
                    case "1":
                    case "2":
                    case "5":
                    case "6":
                        // По резервированию
                        var value = confirm_df.input_deliver_dose_fuel.val();
                        var mass = confirm_df.input_deliver_mase_fuel.val();
                        var debitor = confirm_df.card !== null ? confirm_df.card.Debitor : null;
                        var ozm = confirm_df.gun !== null ? confirm_df.gun.type_fuel : (confirm_df.risers !== null ? confirm_df.risers.type_fuel : null);

                        getReservationOfVolumeMassDebitor(
                            value,
                            mass,
                            debitor,
                            ozm,
                            i,
                            function (result) {
                                // TODO:!!!ТЕСТ УБРАТЬ
                                if (log) {
                                    log.info('Сформировали строку getReservationOfDebitor - > result');
                                    log.debug(result);
                                }
                                if (result.RSNUM === "") {
                                    OnAJAXErrorOfMessage("Резервирование для цеха не найдено. Код дебитора :" + debitor + ", объем :" + value + ", масса :" + mass);
                                } else {
                                    //// TODO:!!!ТЕСТ УБРАТЬ && result.RSNUM != "---"
                                    //if (i == 1 && result.RSNUM != "---" && (result.BWART != "311" && result.BWART != "301")) {
                                    //    OnAJAXErrorOfMessage("Вид движения BWART =" + result.BWART + " (В режиме 1, BWART должен содержать 301 или 311)");
                                    //} else {
                                    //    // TODO:!!!ТЕСТ УБРАТЬ && result.RSNUM != "---"
                                    //    if ((i == 2 || i == 5) && result.RSNUM != "---" && result.BWART != "X01") {
                                    //        OnAJAXErrorOfMessage("Вид движения BWART =" + result.BWART + " (В режиме 2 или 5, BWART должен содержать X01)");
                                    //    } else {
                                    //        // TODO:!!!ТЕСТ УБРАТЬ && result.RSNUM != "---"
                                    confirm_df.input_sap_num.val(result.RSNUM);
                                    confirm_df.input_sap_num_pos.val(result.RSPOS);
                                    //        //$('input#sap-num').val();
                                    confirm_df.input_sap_ozm.val(result.MATNR);
                                    confirm_df.input_sap_ozm_amount.val(result.BDMNG);
                                    confirm_df.input_sap_factory_recipient.val(result.WERKS);
                                    confirm_df.sap_ozm_amount_multiplier = ($.trim(result.MEINS) === "TO" ? 1000 : 1);
                                    $('#label-sap-ozm-amount').text('Количество ' + result.MEINS + ':');
                                    //        if (result.RSNUM != "---") {
                                    var depots = catalog_depots.get($.trim(result.UMLGO));
                                    if (depots) {
                                        confirm_df.input_sap_stock_recipient.val('(' + depots.id + ') ' + depots.name);
                                    }
                                    //        } else { // TODO:!!!ТЕСТ УБРАТЬ
                                    //            confirm_df.input_sap_stock_recipient.val("---");
                                    //        }

                                    //    }
                                    //}
                                }
                            }
                        );
                        break;
                }
            }
        });
        // нажата кнопка "Получить из САП"
        confirm_df.buttom_select_sap = $('button#button-sap').on('click', function () {
            $(".validateTips").text('');
            $(".ui-state-error").removeClass("ui-state-error");
            event.preventDefault();
            var i = confirm_df.select_variant.val();

            // Покажем позиции
            confirm_df.select_sap_num_pos.selectmenu("widget").hide();
            confirm_df.select_sap_num_pos_reserv.selectmenu("widget").hide();
            confirm_df.input_sap_ozm.val('');
            confirm_df.input_sap_ozm_amount.val('');
            confirm_df.input_sap_stock_recipient.val('');
            confirm_df.input_sap_factory_recipient.val('');
            switch (i) {
                case "1":
                case "5":
                case "6":
                    // По резервированию
                    confirm_df.input_sap_num.val($.trim(confirm_df.input_sap_num.val())); // Уберем пробелы
                    var num = confirm_df.input_sap_num.val();
                    //var num = $('input#sap-num').val();
                    confirm_df.input_sap_num_pos.val($.trim(confirm_df.input_sap_num_pos.val()));// Уберем пробелы
                    var pos = confirm_df.input_sap_num_pos.val();
                    //var pos = $('input#sap-num-pos').val();

                    getReservation(
                        num,
                        pos,
                        i,
                        function (result) {
                            //// TODO:!!!ТЕСТ УБРАТЬ
                            //if (log) {
                            //    log.info('Сформировали строку getReservation - > result');
                            //    log.debug(result);
                            //}
                            if (result.RSNUM == "") {
                                OnAJAXErrorOfMessage("Номер резервирования №" + num + ", позиции №" + pos + " - не найдет в САП");
                            } else {
                                // TODO:!!!ТЕСТ УБРАТЬ && result.RSNUM != "---"
                                if (i == 1 && result.RSNUM != "---" && (result.BWART != "311" && result.BWART != "301")) {
                                    OnAJAXErrorOfMessage("Вид движения BWART =" + result.BWART + " (В режиме 1, BWART должен содержать 301 или 311)");
                                } else {
                                    // TODO:!!!ТЕСТ УБРАТЬ && result.RSNUM != "---"
                                    if ((i == 2 || i == 5) && result.RSNUM != "---" && result.BWART != "X01") {
                                        OnAJAXErrorOfMessage("Вид движения BWART =" + result.BWART + " (В режиме 2 или 5, BWART должен содержать X01)");
                                    } else {
                                        // TODO:!!!ТЕСТ УБРАТЬ && result.RSNUM != "---"
                                        confirm_df.input_sap_num.val(result.RSNUM != "---" ? result.RSNUM : 999);
                                        //$('input#sap-num').val();
                                        confirm_df.input_sap_ozm.val(result.MATNR);
                                        confirm_df.input_sap_ozm_amount.val(result.BDMNG);
                                        confirm_df.input_sap_factory_recipient.val(result.WERKS);
                                        confirm_df.sap_ozm_amount_multiplier = ($.trim(result.MEINS) === "TO" ? 1000 : 1);
                                        $('#label-sap-ozm-amount').text('Количество ' + result.MEINS + ':');
                                        if (result.RSNUM != "---") {
                                            var depots = catalog_depots.get($.trim(result.UMLGO));
                                            if (depots) {
                                                confirm_df.input_sap_stock_recipient.val('(' + depots.id + ') ' + depots.name);
                                            }
                                        } else { // TODO:!!!ТЕСТ УБРАТЬ
                                            confirm_df.input_sap_stock_recipient.val("---");
                                        }

                                    }
                                }
                            }
                        }
                    );
                    break;
                case "3":
                    confirm_df.input_sap_num.val($.trim(confirm_df.input_sap_num.val())); // Уберем пробелы
                    num = confirm_df.input_sap_num.val();
                    //var num = $('input#sap-num').val();
                    confirm_df.supply = null;
                    getSupply(
                        num,
                        function (result) {
                            // TODO:!!!ТЕСТ УБРАТЬ
                            if (log) {
                                log.info('Сформировали строку getSupply - > result');

                            }
                            if (result) {
                                // Проверим на возврат значений
                                if (result.length > 0 && result[0].posnr != "") {
                                    confirm_df.supply = result;
                                    var pos = [];
                                    for (i = 0, count_result_supply = result.length; i < count_result_supply; i++) {
                                        // TODO:!!!ТЕСТ УБРАТЬ
                                        if (log) {
                                            log.debug(result[i]);
                                        }
                                        pos.push({ value: result[i].posnr, text: result[i].posnr });
                                    };
                                    // Обновим перечень позиций
                                    updateOptionSelect(confirm_df.select_sap_num_pos, pos, null, -1, null);
                                    // Покажем позиции
                                    confirm_df.select_sap_num_pos.selectmenu("widget").show();
                                } else {
                                    OnAJAXErrorOfMessage("Номер ИП №" + num + " - не найден в САП");
                                }

                            }
                        }
                    );
                    break;
                case "2":
                    // По резервированию с передачей озм
                    confirm_df.input_sap_num.val($.trim(confirm_df.input_sap_num.val())); // Уберем пробелы
                    var num = confirm_df.input_sap_num.val();
                    // Определим ОЗМ бака
                    var matrn = null;
                    if (confirm_df.gun !== null && confirm_df.gun.type_fuel !== null) {
                        matrn = "000000000" + confirm_df.gun.type_fuel;
                    }
                    if (confirm_df.risers !== null && confirm_df.risers.type_fuel !== null) {
                        matrn = "000000000" + confirm_df.risers.type_fuel;
                    }

                    getReservationMatrn(
                        num,
                        matrn,
                        2,
                        function (result) {
                            if (result === null || result[0].RSNUM === "") {
                                OnAJAXErrorOfMessage("Номер резервирования №" + num + ", по ОЗМ:" + matrn + " - не найдет в САП");
                            } else {

                                //// Проверим на возврат значений
                                //if (result.length > 0 && result[0].posnr != "") {
                                confirm_df.reserv = result;
                                var pos = [];
                                for (i = 0, count_result_supply = result.length; i < count_result_supply; i++) {
                                    pos.push({ value: result[i].RSPOS, text: result[i].RSPOS });
                                };
                                // Обновим перечень позиций
                                updateOptionSelect(confirm_df.select_sap_num_pos_reserv, pos, null, -1, null);
                                // Покажем позиции
                                confirm_df.select_sap_num_pos_reserv.selectmenu("widget").show();
                            }
                        }
                    );
                    break;
            }
        });
        // Номер для запроса в сап
        confirm_df.input_sap_num = $('input#sap-num');
        // Номер позиции для запроса в сап
        confirm_df.input_sap_num_pos = $('input#sap-num-pos');
        // Номер позиции для запроса в сап по поставкам
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
                    confirm_df.input_sap_stock_recipient.val(sup.KUNNR);
                    confirm_df.sap_ozm_amount_multiplier = ($.trim(sup.MEINS) === "TO" ? 1000 : 1);
                    $('#label-sap-ozm-amount').text('Количество ' + sup.MEINS + ':');
                    // Уточнить добавить WERKS (завод)
                };
            },
            null);
        // Номер позиции для запроса в сап по резервированию
        confirm_df.select_sap_num_pos_reserv = initSelect(
            $('select[name ="sap-num-pos-reserv"]'),
            { width: 150 },
            null,
            null,
            -1,
            function (event, ui) {
                event.preventDefault();
                confirm_df.input_sap_ozm.val('');
                confirm_df.input_sap_ozm_amount.val('');
                confirm_df.input_sap_factory_recipient.val('');
                confirm_df.input_sap_stock_recipient.val('');
                var reserv = confirm_df.getPosReserv(ui.item.value);
                if (reserv !== null) {

                    if (reserv.BWART !== "X01") {
                        OnAJAXErrorOfMessage("Вид движения BWART =" + result.BWART + " (В режиме 2, BWART должен содержать X01)");
                    } else {
                        confirm_df.input_sap_ozm.val(reserv.MATNR);
                        confirm_df.input_sap_ozm_amount.val(reserv.BDMNG);
                        confirm_df.input_sap_factory_recipient.val(reserv.WERKS);
                        confirm_df.sap_ozm_amount_multiplier = ($.trim(reserv.MEINS) === "TO" ? 1000 : 1);
                        $('#label-sap-ozm-amount').text('Количество ' + reserv.MEINS + ':');
                        var depots = catalog_depots.get($.trim(reserv.UMLGO));
                        if (depots) {
                            confirm_df.input_sap_stock_recipient.val('(' + depots.id + ') ' + depots.name);
                        }
                    }
                } else {
                    OnAJAXErrorOfMessage("По указанной позиции нет данных");
                }
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
            { width: 280 },
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
            { width: 280 },
            //catalog_depots.list,
            [],
            function (row) {
                return { value: row.id, text: row.name };
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
            { width: 280 },
            catalog_werks.list,
            function (row) {
                return { value: Number(row.id), text: row.name };
            },
            -1,
            function (event, ui) {
                event.preventDefault();
                confirm_df.select_sap_stock_recipient.selectmenu("enable");
                var kod = "000" + ui.item.value;
                //kod.length - 4;
                //var kd = kod.substring(kod.length - 4);
                //var list = catalog_depots.getOfWerks(kod.substring(kod.length - 4));
                updateOptionSelect(
                    confirm_df.select_sap_stock_recipient,
                    catalog_depots.getOfWerks(kod.substring(kod.length - 4)),
                    function (row) {
                        return { value: row.id, text: row.name };
                    },
                    -1,
                    null);
            },
            null);
        confirm_df.input_sap_id_card = $('input#sap-id-card');

        confirm_df.allFields = $([])
            .add(confirm_df.select_variant)
            .add(confirm_df.input_sap_num)
            .add(confirm_df.input_sap_num_pos)
            .add(confirm_df.select_sap_num_pos)
            .add(confirm_df.select_sap_num_pos_reserv)
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
            .add(confirm_df.input_deliver_start_counter)
            .add(confirm_df.input_sap_id_card);
    },
    // Открыть панель "Задания выдачи и работе с SAP MII"
    Open: function (num, type) {
        confirm_df.open_num = type === 0 ? Number(num) : Number(num) + 29;
        logInfo(catalog_user.name_log, 'Открыто окно «Настроить выдачу ГСМ». num = ' + num + ', type = ' + type + ', № пистолета(НС) = ' + confirm_df.open_num);
        // Добавить номер пистолета по которому будет производится настройка выдачи
        postAsyncGuns(confirm_df.open_num);
        // Определим пользователя и смену
        getAsyncCurrentUsersActions(
            function (user) {
                if (user) {
                    confirm_df.operator_name = user.UserName;
                    confirm_df.smena_num = user.SessionID;
                    confirm_df.smena_datetime = user.TimeStmp;
                }
            });
        confirm_df.type = type;
        // Спрячим все поля
        confirm_df.clear();
        confirm_df.card = null; // Обнулим карту
        confirm_df.viewCard();  // Обнулим карту
        confirm_df.gun = null;  // Обнулим теги пистолета
        confirm_df.risers = null;  // Обнулим теги РС
        confirm_df.DIOrisers = null;  // Обнулим теги РС
        confirm_df.kerosenes = null;  // Обнулим теги РС
        confirm_df.plan = null;  // Обнулим план ГСМ
        $('th#label-dose').text("Доза (л) :");
        // Обновим информацию по баку
        confirm_df.input_deliver_take_level.val('').addClass('input_view');
        confirm_df.input_deliver_take_mass.val('').addClass('input_view');
        confirm_df.input_deliver_take_temp.val('').addClass('input_view');
        confirm_df.input_deliver_take_volume_all.val('').addClass('input_view');
        confirm_df.input_deliver_take_volume.val('').addClass('input_view');
        confirm_df.input_deliver_take_dens.val('').addClass('input_view');
        confirm_df.input_deliver_take_water_level.val('').addClass('input_view');

        confirm_df.input_deliver_start_counter.val('').addClass('input_view');

        confirm_df.checkbox_deliver_Passage.prop('checked', false); // Сбросили технический пролив

        switch (confirm_df.type) {
            case 0:
                confirm_df.obj.dialog("option", "title", 'Выдать топливо (пистолет-' + num + ')');
                // Обновим варианты выдачи
                updateOptionSelect(
                    confirm_df.select_variant,
                    [
                        { value: 1, text: 'По резервированию (керосин)', disabled: true },
                        { value: 2, text: 'По резервированию (ГСМ)' },
                        { value: 3, text: 'По исходящей поставке' },
                        { value: 4, text: 'По требованию (самовывоз)' },
                        { value: 5, text: 'Заправка в баки ТС' },
                        { value: 6, text: 'Заправка в цистерну топливозаправщика' } //, disabled: true 
                    ],
                    null,
                    -1,
                    null);

                var gun = guns.getGun(num);
                if (gun) {
                    confirm_df.gun = gun;
                    confirm_df.input_deliver_start_counter.val((confirm_df.gun.total_volume / 100).toFixed(2));
                    confirm_df.input_deliver_type_fuel.val(outFuelType(gun.type_fuel)).addClass('input_view');
                    confirm_df.input_sap_ozm_bak.val('(' + gun.type_fuel + ') ' + outFuelType(gun.type_fuel));
                    $('th#label-taken').text('Пистолет снят:');
                    $('#deliver-Taken').prop('checked', gun.taken).show();
                    // Обновим перечень емкостей
                    if (btanks_one === true) {
                        // выбран режим одной емкости
                        confirm_df.select_capacity.selectmenu("widget").show();
                        confirm_df.textarea_capacity.hide();
                        $('tr#deliver-take-volume-all').hide();

                    } else {
                        // выбран режим нескольких емкостей
                        confirm_df.select_capacity.selectmenu("widget").hide();
                        confirm_df.textarea_capacity.show().text('');
                        $('tr#deliver-take-volume-all').show();
                        confirm_df.viewParmetrTanksOfType(
                            gun.type_fuel,
                            function (list_tags) {
                                var result = confirm_df.viewParamTanks(list_tags);
                                if (result) {
                                    confirm_df.input_deliver_take_level.val(result.level.toFixed(2));
                                    confirm_df.input_deliver_take_mass.val(result.mass.toFixed(2));
                                    confirm_df.input_deliver_take_temp.val(result.temp.toFixed(2));
                                    confirm_df.input_deliver_take_volume_all.val(result.volume_sum.toFixed(2));
                                    confirm_df.input_deliver_take_volume.val(result.volume.toFixed(2));
                                    confirm_df.input_deliver_take_dens.val(result.dens.toFixed(5));
                                    confirm_df.input_deliver_take_water_level.val(result.water_level.toFixed(2));
                                }
                            }
                        );
                    }

                    updateOptionSelect(confirm_df.select_capacity, ozm_bak.getTanks(gun.type_fuel), null, -1, null);
                    // Получить информацию по карте
                    confirm_df.getCard_Plan_ofView(gun.num_trk, gun.side, num, type)
                }
                break;

            case 1:
                confirm_df.obj.dialog("option", "title", 'Выдать топливо (разливочный стояк-' + num + ')');

                switch (num) {
                    case "1":
                        // ДТ
                        // Обновим варианты выдачи
                        updateOptionSelect(
                            confirm_df.select_variant,
                            [
                                { value: 1, text: 'По резервированию (керосин)', disabled: true },
                                { value: 2, text: 'По резервированию (ГСМ)' },
                                { value: 3, text: 'По исходящей поставке' },
                                { value: 4, text: 'По требованию (самовывоз)' },
                                { value: 5, text: 'Заправка в баки ТС', disabled: true },
                                { value: 6, text: 'Заправка в цистерну топливозаправщика' }
                            ],
                            null,
                            -1,
                            null);
                        break;
                    case "2":
                        // керосин
                        // Обновим варианты выдачи
                        updateOptionSelect(
                            confirm_df.select_variant,
                            [
                                { value: 1, text: 'По резервированию (керосин)' },
                                { value: 2, text: 'По резервированию (ГСМ)' },
                                { value: 3, text: 'По исходящей поставке' },
                                { value: 4, text: 'По требованию (самовывоз)' },
                                { value: 5, text: 'Заправка в баки ТС', disabled: true },
                                { value: 6, text: 'Заправка в цистерну топливозаправщика' }
                            ],
                            null,
                            -1,
                            null);
                        break;
                    case "3":
                        // 92
                        // Обновим варианты выдачи
                        updateOptionSelect(
                            confirm_df.select_variant,
                            [
                                { value: 1, text: 'По резервированию (керосин)', disabled: true },
                                { value: 2, text: 'По резервированию (ГСМ)' },
                                { value: 3, text: 'По исходящей поставке' },
                                { value: 4, text: 'По требованию (самовывоз)' },
                                { value: 5, text: 'Заправка в баки ТС', disabled: true },
                                { value: 6, text: 'Заправка в цистерну топливозаправщика' }
                            ],
                            null,
                            -1,
                            null);
                        break;
                }
                var riser = risers.getRisers(num);
                var DIOriser = risers.getDIORisers(num);
                if (riser != null && DIOriser != null) {
                    confirm_df.risers = riser;
                    confirm_df.DIOrisers = DIOriser;
                    confirm_df.input_deliver_start_counter.val((confirm_df.DIOrisers.Counter / 1000000).toFixed(0));
                    confirm_df.input_deliver_type_fuel.val(outFuelType(riser.type_fuel));
                    confirm_df.input_sap_ozm_bak.val('(' + riser.type_fuel + ') ' + outFuelType(riser.type_fuel));
                    $('th#label-taken').text('Заземление:');
                    $('#deliver-Taken').prop('checked', !riser.inp_kvq2).show(); // Заземление есть если false
                    // Обновим перечень емкостей
                    if (btanks_one === true) {
                        // выбран режим одной емкости
                        confirm_df.select_capacity.selectmenu("widget").show();
                        confirm_df.textarea_capacity.hide();

                    } else {
                        // выбран режим нескольких емкостей
                        confirm_df.select_capacity.selectmenu("widget").hide();
                        confirm_df.textarea_capacity.show().text('');
                        confirm_df.viewParmetrTanksOfType(
                            riser.type_fuel,
                            function (list_tags) {
                                var result = confirm_df.viewParamTanks(list_tags);
                                if (result) {
                                    confirm_df.input_deliver_take_level.val(result.level.toFixed(2));
                                    confirm_df.input_deliver_take_mass.val(result.mass.toFixed(2));
                                    confirm_df.input_deliver_take_temp.val(result.temp.toFixed(2));
                                    confirm_df.input_deliver_take_volume_all.val(result.volume_sum.toFixed(2));
                                    confirm_df.input_deliver_take_volume.val(result.volume.toFixed(2));
                                    confirm_df.input_deliver_take_dens.val(result.dens.toFixed(5));
                                    confirm_df.input_deliver_take_water_level.val(result.water_level.toFixed(2));
                                }
                            }
                        );
                    }
                    updateOptionSelect(confirm_df.select_capacity, ozm_bak.getTanks(riser.type_fuel), null, -1, null);
                    // Получить информацию по карте
                    confirm_df.getCard_Plan_ofView((Number(num) + 9), 0, num, type)
                }
                break;
        }
        // Выберем режим.
        if (confirm_df.type === 0) {
            confirm_df.select_variant.val(5).selectmenu("refresh").selectmenu("enable"); // Сбросили выбор вариантов
            confirm_df.viewVariant('5');
        }
        if (confirm_df.type === 1 || confirm_df.type === 2) {
            confirm_df.select_variant.val(6).selectmenu("refresh").selectmenu("enable"); // Сбросили выбор вариантов
            confirm_df.viewVariant('6');
        }
        if (num) {
            confirm_df.obj.dialog("open");
        }
    },
    // Очистить данные
    clear: function () {
        $(".validateTips").text('');
        $(".ui-state-error").removeClass("ui-state-error");
        confirm_df.input_deliver_dose_fuel.val('').addClass('input_edit'); // Очистить дозу
        confirm_df.input_deliver_mase_fuel.val('Введите дозу и [Enter]').addClass('input_view'); // Очистить массу
        $('#deliver-Capacity-button').addClass('input_edit');
        $('#deliver-variant-sap-button').addClass('input_edit');
        $('#deliver-type-fuel-button').addClass('input_edit');
        $('#sap-ozm-button').addClass('input_edit');
        $('#sap-stock-recipient-button').addClass('input_edit');
        $('#sap-factory-recipient-button').addClass('input_edit');
        //confirm_df.checkbox_deliver_Passage.prop('checked', false);
        $('tr#button-sap').hide();
        $('tr#sap-num').hide(); confirm_df.input_sap_num.val('').addClass('input_edit');
        $('tr#sap-num-pos').hide(); confirm_df.input_sap_num_pos.val('').hide().addClass('input_edit'); confirm_df.select_sap_num_pos.selectmenu("widget").hide().addClass('input_edit'); confirm_df.select_sap_num_pos_reserv.selectmenu("widget").hide().addClass('input_edit');
        $('tr#sap-num-ts').hide(); confirm_df.input_sap_num_ts.val('').addClass('input_edit'); $('tr#sap-num-kpp').hide(); confirm_df.input_sap_num_kpp.val('').addClass('input_edit'); $('tr#sap-name-forwarder').hide(); confirm_df.input_sap_name_forwarder.val('').addClass('input_edit');
        $('tr#sap-ozm').hide(); confirm_df.input_sap_ozm.val('').hide().addClass('input_view'); confirm_df.select_sap_ozm.selectmenu("widget").hide();
        $('tr#sap-ozm-bak').hide(); confirm_df.input_sap_ozm_bak.addClass('input_view');
        $('tr#sap-ozm-amount').hide(); confirm_df.input_sap_ozm_amount.val('').addClass('input_view');
        $('tr#sap-stock-recipient').hide(); confirm_df.input_sap_stock_recipient.val('').hide().addClass('input_view'); confirm_df.select_sap_stock_recipient.selectmenu("widget").hide();
        $('tr#sap-factory-recipient').hide(); confirm_df.input_sap_factory_recipient.val('').hide().addClass('input_view'); confirm_df.select_sap_factory_recipient.selectmenu("widget").hide();
        $('tr#sap-id-card').hide(); confirm_df.input_sap_id_card.val('').addClass('input_view');
    },
    // Вывести расчетную массу
    viewCalcMass: function () {
        var massa = 0;
        var dens = Number(confirm_df.input_deliver_take_dens.val());
        if (dens > 0) {
            massa = Number(confirm_df.input_deliver_dose_fuel.val()) * dens * 0.001;
            confirm_df.input_deliver_mase_fuel.val(massa.toFixed(2));
        } else {
            confirm_df.input_deliver_mase_fuel.val('Выберите емкость');
            confirm_df.input_deliver_dose_fuel.val('');
        }
    },
    // Определить карту и лимит вывести карту 
    getCard_Plan_ofView: function (trk, side, num, type) {
        // Получить информацию по карте
        confirm_df.card = cards.getCardOfNumSide(trk, side);
        if (confirm_df.card !== null) {
            logInfo(catalog_user.name_log, 'Окно «Настроить выдачу ГСМ». num = ' + num + ', type = ' + type + ', № пистолета(НС) = ' + confirm_df.open_num + '. Определена RFID-Карта [Id]=' + confirm_df.card.Id + ', [Number]=' + confirm_df.card.Number);
            getAsyncCurrentPlanOfIDCard(confirm_df.card.Id,
                function (result_plan) {
                    logInfo(catalog_user.name_log, 'Окно «Настроить выдачу ГСМ». num = ' + num +
                        ', type = ' + type +
                        ', № пистолета(НС) = ' + confirm_df.open_num +
                        ', RFID-Карта [Id]=' + confirm_df.card.Id +
                        ', [Number]=' + confirm_df.card.Number +
                        ', ЛИМИТ ГСМ ([VolumePlan] = ' + (result_plan.length > 0 ? result_plan[0].VolumePlan : null) + ', [VolumeFact]=' + (result_plan.length > 0 ? result_plan[0].VolumeFact : null) + ', [id]=' + (result_plan.length > 0 ? result_plan[0].id : null) + ')');
                    confirm_df.plan = result_plan;
                    $('th#label-dose').text("Доза (л), лимит <=[" + result_plan[0].VolumePlan + "] :");
                });
        }
        // Вывести информацию по карте
        confirm_df.viewCard();
    },
    // Вывести информацию по карте
    viewCard: function () {
        // Вывести инфу по карте
        if (confirm_df.card) {
            $('#deliver-Active').prop('checked', confirm_df.card.Active).addClass('input_view');
            $('#deliver-Number').val(confirm_df.card.Number).addClass('input_view');
            $('#deliver-AutoNumber').val(confirm_df.card.AutoNumber).addClass('input_view');
            $('#deliver-Debitor').val(confirm_df.card.Debitor).addClass('input_view');
            $('#deliver-AutoModel').val(confirm_df.card.AutoModel).addClass('input_view');
        } else {
            $('#deliver-Active').prop('checked', false).addClass('input_view');
            $('#deliver-Number').val('').addClass('input_view');
            $('#deliver-AutoNumber').val('').addClass('input_view');
            $('#deliver-Debitor').val('').addClass('input_view');
            $('#deliver-AutoModel').val('').addClass('input_view');
        }
    },
    // Вывести вариант выбора
    viewVariant: function (value) {
        switch (value) {
            case '1':
                confirm_df.clear();
                $('tr#button-sap').show();
                $('button#button-sap').show();
                $('button#button-sap-debitor').show();
                $('button#button-sap-ndopusk').hide();
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
                    confirm_df.input_sap_num_ts.val(confirm_df.card.AutoNumber);
                }
                break;
            case '2':
                confirm_df.clear();
                $('tr#button-sap').show();
                $('button#button-sap').show();
                $('button#button-sap-debitor').hide();
                $('button#button-sap-ndopusk').hide();
                $('tr#sap-num').show(); $('#label-sap-num').text('*Номер резервирования :');
                $('tr#sap-num-pos').show(); confirm_df.input_sap_num_pos.hide(); $('#label-sap-num-pos').text('Выберите № поз. :');
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
                    confirm_df.input_sap_num_ts.val(confirm_df.card.AutoNumber);
                    confirm_df.input_sap_id_card.val(confirm_df.card.Id);
                }
                break;
            case '3':
                confirm_df.clear();
                $('tr#button-sap').show();
                $('button#button-sap').show();
                $('button#button-sap-debitor').hide();
                $('button#button-sap-ndopusk').hide();
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
                    confirm_df.input_sap_num_ts.val(confirm_df.card.AutoNumber);
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
                confirm_df.select_sap_stock_recipient.selectmenu("disable");
                //confirm_df.select_sap_stock_recipient.val(-1).selectmenu("refresh");
                $('#label-sap-stock-recipient').text('Склад получателя :');
                $('tr#sap-factory-recipient').show();
                confirm_df.select_sap_factory_recipient.selectmenu("widget").show();
                //confirm_df.select_sap_factory_recipient.val(-1).selectmenu("refresh");
                $('#label-sap-factory-recipient').text('Завод-получатель :');
                if (confirm_df.card) {
                    confirm_df.input_sap_num_ts.val(confirm_df.card.AutoNumber);
                }
                break;
            case '5':
                confirm_df.clear();
                $('tr#button-sap').show();
                $('button#button-sap').hide();
                $('button#button-sap-debitor').show();
                $('button#button-sap-ndopusk').hide();
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
                    confirm_df.input_sap_num_ts.val(confirm_df.card.AutoNumber);
                    //confirm_df.input_sap_num_ts.val(confirm_df.card.Debitor + '/' + confirm_df.card.AutoNumber + '/' + confirm_df.card.AutoModel);
                    confirm_df.input_sap_id_card.val(confirm_df.card.Id);
                }
                break;
            case '6':
                confirm_df.clear();
                $('tr#button-sap').show();
                $('button#button-sap').hide();
                $('button#button-sap-debitor').hide();
                $('button#button-sap-ndopusk').show();
                $('tr#sap-num').show(); $('#label-sap-num').text('*Номер наряд-допуска(резервирования):');
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
                    //confirm_df.input_sap_num_ts.val(confirm_df.card.Debitor + '/' + confirm_df.card.AutoNumber + '/' + confirm_df.card.AutoModel)
                    confirm_df.input_sap_num_ts.val(confirm_df.card.AutoNumber);
                    confirm_df.input_sap_id_card.val(confirm_df.card.Id);
                }
                break;
            default:
                confirm_df.clear();
                break;
        }
    },
    // Вывести параметры выбранной емкости 
    viewParmetrOneTank: function (value) {
        // Обновим информацию по баку
        confirm_df.input_deliver_take_level.val('');
        confirm_df.input_deliver_take_mass.val('');
        confirm_df.input_deliver_take_temp.val('');
        confirm_df.input_deliver_take_volume.val('');
        confirm_df.input_deliver_take_dens.val('');
        confirm_df.input_deliver_take_water_level.val('');
        if (value !== '-1') {
            getTankTags(value,
                function (result) {
                    // Обновим информацию по баку
                    confirm_df.input_deliver_take_level.val(result.level.toFixed(2));
                    confirm_df.input_deliver_take_mass.val(result.mass.toFixed(2));
                    confirm_df.input_deliver_take_temp.val(result.temp.toFixed(2));
                    confirm_df.input_deliver_take_volume.val(result.volume.toFixed(2));
                    confirm_df.input_deliver_take_dens.val(result.dens.toFixed(5));
                    confirm_df.input_deliver_take_water_level.val(result.water_level.toFixed(2));
                    confirm_df.viewCalcMass();
                }
            );
        }
    },
    // Вывести усредненые параметры по выбранным ямкостям 
    viewParmetrTanksOfType: function (type_fuel, callback) {
        confirm_df.input_deliver_take_level.val('');
        confirm_df.input_deliver_take_mass.val('');
        confirm_df.input_deliver_take_temp.val('');
        confirm_df.input_deliver_take_volume.val('');
        confirm_df.input_deliver_take_dens.val('');
        confirm_df.input_deliver_take_water_level.val('');
        var tanks = '';
        //var param_tanks = [];
        switch (type_fuel) {
            case 107000022: // A92
                getAsyncSelectTanks_A92(
                    function (tanks_a92) {
                        if (tanks_a92) {
                            if (tanks_a92.B2) { tanks += 'B2,'; }
                            if (tanks_a92.B3) { tanks += 'B3,'; }
                            if (tanks_a92.B9) { tanks += 'B9,'; }
                            if (tanks_a92.B11) { tanks += 'B11,'; }
                            if (tanks_a92.B16) { tanks += 'B16,'; }
                            if (tanks.length > 0) {
                                tanks = tanks.substring(0, tanks.length - 1);
                                confirm_df.textarea_capacity.show().text(tanks);  // Покажем список баков
                                getTanksTags(
                                    tanks,
                                    function (list_tags) {
                                        if (typeof callback === 'function') {
                                            callback(list_tags);
                                        }
                                    });
                            } else {
                                confirm_df.textarea_capacity.show().text('Емкости не выбраны');  // Покажем список баков
                            }
                        }
                    });
                break;
            case 107000023: // A95
                getAsyncSelectTanks_A95(
                    function (tanks_a95) {
                        if (tanks_a95) {
                            if (tanks_a95.B17) { tanks += 'B17,'; }
                            if (tanks_a95.B18) { tanks += 'B18,'; }
                            if (tanks_a95.B19) { tanks += 'B19,'; }
                            if (tanks_a95.B20) { tanks += 'B20,'; }
                            if (tanks.length > 0) {
                                tanks = tanks.substring(0, tanks.length - 1);
                                confirm_df.textarea_capacity.show().text(tanks);  // Покажем список баков
                                getTanksTags(
                                    tanks,
                                    function (list_tags) {
                                        if (typeof callback === 'function') {
                                            callback(list_tags);
                                        }
                                    });
                            } else {
                                confirm_df.textarea_capacity.show().text('Емкости не выбраны');  // Покажем список баков
                            }
                        }
                    });
                break;
            case 107000024: // ДТ
                getAsyncSelectTanks_dt(
                    function (tanks_dt) {
                        if (tanks_dt) {
                            if (tanks_dt.C1) { tanks += '01,'; }
                            if (tanks_dt.C2) { tanks += '02,'; }
                            if (tanks_dt.C3) { tanks += '03,'; }
                            if (tanks_dt.C4) { tanks += '04,'; }
                            if (tanks_dt.C5) { tanks += '05,'; }
                            if (tanks_dt.C6) { tanks += '06,'; }
                            if (tanks_dt.C7) { tanks += '07,'; }
                            if (tanks_dt.C8) { tanks += '08,'; }
                            if (tanks_dt.C9) { tanks += '09,'; }
                            if (tanks_dt.C10) { tanks += '10,'; }
                            if (tanks_dt.C11) { tanks += '11,'; }
                            if (tanks_dt.C12) { tanks += '12,'; }
                            if (tanks_dt.C13) { tanks += '13,'; }
                            if (tanks_dt.C14) { tanks += '14,'; }
                            if (tanks_dt.C15) { tanks += '15,'; }
                            if (tanks_dt.C16) { tanks += '16,'; }
                            if (tanks_dt.C17) { tanks += '17,'; }
                            if (tanks_dt.C18) { tanks += '18,'; }
                            if (tanks_dt.C19) { tanks += '19,'; }
                            if (tanks_dt.C20) { tanks += '20,'; }
                            if (tanks_dt.C21) { tanks += '21,'; }
                            if (tanks_dt.C22) { tanks += '22,'; }
                            if (tanks_dt.C23) { tanks += '23,'; }
                            if (tanks_dt.C24) { tanks += '24,'; }
                            if (tanks_dt.C25) { tanks += '25,'; }
                            if (tanks_dt.C26) { tanks += '26,'; }
                            if (tanks_dt.C27) { tanks += '27,'; }
                            if (tanks_dt.C28) { tanks += '28,'; }
                            if (tanks_dt.C29) { tanks += '29,'; }
                            if (tanks_dt.C30) { tanks += '30,'; }
                            if (tanks_dt.C31) { tanks += '31,'; }
                            if (tanks_dt.C32) { tanks += '32,'; }
                            if (tanks.length > 0) {
                                tanks = tanks.substring(0, tanks.length - 1);
                                confirm_df.textarea_capacity.show().text(tanks);  // Покажем список баков
                                getTanksTags(
                                    tanks,
                                    function (list_tags) {
                                        if (typeof callback === 'function') {
                                            callback(list_tags);
                                        }
                                    });
                            } else {
                                confirm_df.textarea_capacity.show().text('Емкости не выбраны');  // Покажем список баков
                            }

                        }
                    });
                break;
            case 107000027: // Керосин
                getAsyncSelectTanks_kerosene(
                    function (tanks_kerosene) {
                        if (tanks_kerosene) {
                            if (tanks_kerosene.C33) { tanks += '33,'; }
                            if (tanks_kerosene.C38) { tanks += '38,'; }
                            if (tanks_kerosene.C39) { tanks += '39,'; }
                            if (tanks.length > 0) {
                                tanks = tanks.substring(0, tanks.length - 1);
                                confirm_df.textarea_capacity.show().text(tanks);  // Покажем список баков
                                getTanksTags(
                                    tanks,
                                    function (list_tags) {
                                        if (typeof callback === 'function') {
                                            callback(list_tags);
                                        }
                                        //confirm_df.viewParamTanks(list_tags);
                                    });
                            } else {
                                confirm_df.textarea_capacity.show().text('Емкости не выбраны');  // Покажем список баков
                            }
                        }
                    });
                break;
        }
    },
    // Показать параметры баков
    viewParamTanks: function (list_tags) {
        var count = list_tags.length;
        var volume_sum = 0;
        var level = 0;
        var mass = 0;
        var temp = 0;
        var volume = 0;
        var dens = 0;
        var water_level = 0;
        for (ip = 0, count_list_tags = list_tags.length; ip < count_list_tags; ip++) {
            level += list_tags[ip].level;
            mass += list_tags[ip].mass;
            temp += list_tags[ip].temp;
            volume += list_tags[ip].volume;
            dens += list_tags[ip].dens;
            water_level += list_tags[ip].water_level;
        }
        volume_sum = volume;
        level = level / count;
        mass = mass / count;
        temp = temp / count;
        volume = volume / count;
        dens = dens / count;
        water_level = water_level / count;

        var result = {
            volume_sum: volume_sum,
            level: level,
            mass: mass,
            temp: temp,
            volume: volume,
            dens: dens,
            water_level: water_level,
        };
        return result;
    },
    // Получить новую SAP_buffer
    getNewSAP_Buffer: function () {
        var now = new Date();
        var variant = confirm_df.select_variant.val();
        if (variant === "-1" && confirm_df.checkbox_deliver_Passage.prop('checked')) {
            variant = "7";
        }
        //var num_pos = confirm_df.select_sap_num_pos.val();
        var fuel_type = 0;

        switch (confirm_df.type) {
            case 0:
                fuel_type = confirm_df.gun != null ? confirm_df.gun.type_fuel : null;
                break;
            case 1:
                fuel_type = confirm_df.risers != null ? confirm_df.risers.type_fuel : null;
                break;
        }

        return sap_buffer = {
            id: 0,
            DATE: toISOStringTZ(now).substring(0, 10),
            TIME: toISOStringTZ(now).substring(11, 23),
            LOGIN_R: confirm_df.operator_name,
            N_BAK: btanks_one === true ? confirm_df.select_capacity.val() : confirm_df.textarea_capacity.text(),
            OZM_BAK: fuel_type,
            OZM_TREB: variant === "4" ? confirm_df.select_sap_ozm.val() : variant !== "7" ? confirm_df.input_sap_ozm.val() : null,
            FLAG_R: variant,
            PLOTNOST: confirm_df.input_deliver_take_dens.val(),
            VOLUME: null,
            MASS: null,
            LOGIN_EXP: variant !== "7" ? confirm_df.input_sap_name_forwarder.val() : null,
            N_POST: variant !== "7" ? confirm_df.input_sap_num_kpp.val() : null,
            TRANSP_FAKT: variant !== "7" ? confirm_df.input_sap_num_ts.val() : null,
            N_DEB: variant === "5" || variant === "6" ? confirm_df.card.Debitor : null,
            //N_TREB: variant !== "7" && variant !== "6" ? confirm_df.input_sap_num.val() : variant === "6" ? confirm_df.input_sap_ndopusk : null,
            N_TREB: variant !== "7" ? confirm_df.input_sap_num.val() : null,
            N_POS: variant === "3" ? confirm_df.select_sap_num_pos.val() : variant === "2" ? confirm_df.select_sap_num_pos_reserv.val() : variant !== "4" && variant !== "7" ? confirm_df.input_sap_num_pos.val() : null,
            LGORT: variant === "4" ? confirm_df.select_sap_stock_recipient.val() : null,
            WERKS: variant === "4" ? confirm_df.select_sap_factory_recipient.val() : null,
            sending: null
        };
    },
    // Получить новую строку FuelSale
    getNewFuelSale: function (id_sap) {
        var now = new Date();
        var trk_num = 0;
        var side = false;
        var num = 0;
        var fuel_type = 0;
        var counter = 0;

        switch (confirm_df.type) {
            case 0:
                trk_num = confirm_df.gun !== null ? confirm_df.gun.num_trk : null;
                side = confirm_df.gun !== null ? (confirm_df.gun.side === 0 ? false : true) : null;
                num = confirm_df.gun !== null ? confirm_df.gun.num_gun : null;
                fuel_type = confirm_df.gun !== null ? confirm_df.gun.type_fuel : null;
                counter = confirm_df.gun !== null ? confirm_df.gun.total_volume : null;
                break;
            case 1:
                num = confirm_df.risers !== null ? confirm_df.risers.num : null;
                trk_num = (9 + Number(num));
                fuel_type = confirm_df.risers !== null ? confirm_df.risers.type_fuel : null;
                counter = confirm_df.DIOrisers !== null ? (confirm_df.DIOrisers.Counter / 1000000).toFixed(0) : 0; // Добавить счетчик
                break;
        }

        return fuel_sale = {
            id: 0,
            operator_name: confirm_df.operator_name,
            smena_num: confirm_df.smena_num,
            smena_datetime: confirm_df.smena_datetime,
            trk_num: trk_num,
            side: side,
            num: num,
            fuel_type: fuel_type,
            tank_num: btanks_one === true ? confirm_df.select_capacity.val() : confirm_df.textarea_capacity.text(),
            //id_card: confirm_df.input_sap_id_card.val(),
            id_card: confirm_df.card !== null ? confirm_df.card.Id : 0,
            dose: confirm_df.input_deliver_dose_fuel.val(),
            passage: confirm_df.checkbox_deliver_Passage.prop('checked') ? 'A' : 'B',
            //passage: 'error',
            volume: null,
            mass: null,
            start_datetime: toISOStringTZ(now),
            start_level: confirm_df.input_deliver_take_level.val(),
            start_volume: confirm_df.input_deliver_take_volume.val(),
            start_density: confirm_df.input_deliver_take_dens.val(),
            start_mass: confirm_df.input_deliver_take_mass.val(),
            start_temp: confirm_df.input_deliver_take_temp.val(),
            start_water_level: confirm_df.input_deliver_take_water_level.val(),
            start_counter: counter,
            stop_datetime: null,
            stop_level: null,
            stop_volume: null,
            stop_density: null,
            stop_mass: null,
            stop_temp: null,
            stop_water_level: null,
            stop_counter: null,
            close: null,
            id_sap: id_sap,
            sending: null
        };
    }
};
//--------------------------------------------------------------------------------
// Панель "Состояние тегов TRK"
var confirm_tags_gun = {
    obj: null,
    current: null,
    init: function (num) {
        confirm_tags_gun.obj = $("#dialog-tags-gun").dialog({
            modal: false,
            title: 'Tags gun-' + num,
            buttons: {
                Ok: function () {
                    confirm_tags_gun.curren = null;
                    $(this).dialog("close");
                }
            }
        });
        confirm_tags_gun.current = num;
        confirm_tags_gun.clear();
    },
    open: function () {
        confirm_tags_gun.obj.dialog("open");
    },
    out: function (gun) {

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
    },
    clear: function () {
        $('#current_volume-value').text('');
        $('#density-value').text('');
        $('#last_out_volume-value').text('');
        $('#online-value').text('');
        $('#passage-value').text('');
        $('#price_to_write-value').text('');
        $('#start-value').text('');
        $('#state-value').text('');
        $('#stop-value').text('');
        $('#taken-value').text('');
        $('#total_volume-value').text('');
        $('#Trk06_0_status-value').text('');
        $('#volume_to_write-value').text('');
        $('#write_price-value').text('');
        $('#type_fuel-value').text('');
    }
};
//--------------------------------------------------------------------------------
// Панель "Закрыть выдачу по колонке"
var confirm_close_fuel = {
    obj: null,
    open_num: null,
    type: null,
    fs: null,
    sap: null,
    card: null,
    id_open: null,
    init: function () {
        confirm_close_fuel.obj = $("#dialog-close-fuel").dialog({
            modal: true,
            autoOpen: false,
            height: "auto",
            width: 700,
            close: function (event, ui) {
                logInfo(catalog_user.name_log, 'Закрыто окно «Закрыть выдачу ГСМ». [FuelSale].[id] = ' + confirm_close_fuel.id_open);
                // Удалим номер пистолета из списка по которым производилось закрытие
                deleteAsyncGuns(Number(confirm_close_fuel.open_num));
                confirm_close_fuel.open_num = null;
            },
            buttons: {
                'Закрыть': function () {
                    if (confirm_close_fuel.fs) {
                        LockScreen("Подождите, закрываю ведомость в БД");
                        if (confirm_close_fuel.fs.stop_datetime !== null) {
                            logInfo(catalog_user.name_log, 'Закрыть выдачу [FuelSale].[id] = ' + confirm_close_fuel.fs.id + ', [SAP_BUFFER].[id] = ' + confirm_close_fuel.fs.id_sap + ' (trk - ' + confirm_close_fuel.fs.trk_num + ', side - ' + confirm_close_fuel.fs.side + ', num - ' + confirm_close_fuel.fs.num + ')');
                            //--------------------------
                            // Сбросим RFID-карту
                            var rfid_clear = {
                                trk: confirm_close_fuel.fs != null ? confirm_close_fuel.fs.trk_num : 0,
                                side: confirm_close_fuel.fs != null ? confirm_close_fuel.fs.side : 0
                            };
                            postAsyncRFIDClear(
                                rfid_clear,
                                function (result_rfid_clear) {
                                    if (log) { log.info('RFID-карта - сброшена, результат = ' + result_rfid_clear); } // TODO:!!!ТЕСТ УБРАТЬ
                                }
                            );
                            // строка САП есть обновить выдачу
                            if (confirm_close_fuel.sap) {

                                // расчет для пистолета
                                if (confirm_close_fuel.type === 0) {
                                    confirm_close_fuel.sap.PLOTNOST = confirm_close_fuel.fs.stop_density;
                                }
                                // расчет для наливного стояка
                                if (confirm_close_fuel.type === 1) {
                                    confirm_close_fuel.sap.PLOTNOST = (Number(confirm_close_fuel.fs.start_density) + Number(confirm_close_fuel.fs.stop_density)) / 2.0;
                                }

                                confirm_close_fuel.sap.VOLUME = confirm_close_fuel.fs.volume;
                                confirm_close_fuel.sap.MASS = confirm_close_fuel.fs.mass;
                                //// TODO:!!!ТЕСТ УБРАТЬ ТЕСТОВЫЙ ЗАПРЕТ ВЫДАЧИ В САП
                                //if (btransferSAP_ban) {
                                //    var now = new Date();
                                //    confirm_close_fuel.sap.sending = toISOStringTZ(now);
                                //}
                                //// TODO:!!!ТЕСТ УБРАТЬ
                                //if (log) {
                                //    log.info('Обновим строку SAP confirm_close_fuel.sap');
                                //    log.debug(confirm_close_fuel.sap);
                                //}
                                putAsyncSAP_Buffer(confirm_close_fuel.sap,
                                    function (result) {
                                        //if (log) { log.info('Запись САП обновлена результат = ' + result); } // TODO:!!!ТЕСТ УБРАТЬ
                                        LockScreenOff();
                                        updateMessageTips("Запись САП обновлена результат = " + result);
                                        logInfo(catalog_user.name_log, 'Запись строки САП [SAP_BUFFER].[id] = ' + confirm_close_fuel.sap.id + ') - обновлена. Код выполнения = ' + result + '. (PLOTNOST = ' + confirm_close_fuel.sap.PLOTNOST + ', VOLUME = ' + confirm_close_fuel.sap.VOLUME + ', MASS = ' + confirm_close_fuel.sap.MASS + ')');
                                    });
                            }
                            // строка FuelSales есть обновить выдачу
                            //// TODO:!!!ТЕСТ УБРАТЬ ТЕСТОВЫЙ ЗАПРЕТ ВЫДАЧИ В Отчетность 
                            //if (btransferSAP_ban) {
                            //    var now = new Date();
                            //    confirm_close_fuel.fs.sending = toISOStringTZ(now);
                            //}
                            //// TODO:!!!ТЕСТ УБРАТЬ
                            //if (log) {
                            //    log.info('Обновим строку FuelSales confirm_close_fuel.fs');
                            //    log.debug(confirm_close_fuel.fs);
                            //}
                            putAsyncFuelSales(
                                confirm_close_fuel.fs,
                                function (id) {
                                    //if (log) { log.info('Запись FuelSales обновлена результат = ' + id); } // TODO:!!!ТЕСТ УБРАТЬ
                                    //logInfo(catalog_user.name_log, 'Запись FuelSales обновлена результат = ' + id);
                                    if (id > 0) {
                                        LockScreenOff();
                                        // Уберем id открытой выдачи
                                        putAsyncClearOFS(Number(confirm_close_fuel.open_num), null);
                                        // Инициализация открытых выдач
                                        //openFuelSale.init();
                                        // Сбросить настройки калонки или наливного стояка если есть разрешение на выдачу команд на колонку
                                        if (bcontrolTRK_ban === false) {
                                            // проверим колонка
                                            if (confirm_close_fuel.fs.trk_num > 0 && confirm_close_fuel.fs.trk_num < 10) {
                                                var gun_clear = {
                                                    id: confirm_close_fuel.fs !== null ? confirm_close_fuel.fs.id : 0,
                                                    num: confirm_close_fuel.fs !== null ? confirm_close_fuel.fs.num : 0
                                                };
                                                //// TODO:!!!ТЕСТ УБРАТЬ
                                                //if (log) {
                                                //    log.info('Команда на колонку (сбросить настройки) gun_clear');
                                                //    log.debug(gun_clear);
                                                //}
                                                postAsyncGunClear(
                                                    gun_clear,
                                                    function (reset_status) {
                                                        //if (log) { log.info('Сброс настроек на колонке, статус =' + reset_status); } // TODO:!!!ТЕСТ УБРАТЬ
                                                        updateMessageTips("Сброс настроек на колонке, статус =" + reset_status + ".");
                                                        logInfo(catalog_user.name_log, 'Сброс настроек на колонке (trk - ' + confirm_close_fuel.fs.trk_num + ', side - ' + confirm_close_fuel.fs.side + ', num - ' + confirm_close_fuel.fs.num + '). Код выполнения = ' + reset_status + '. [FuelSale].[id] = ' + confirm_close_fuel.fs.id);
                                                    });
                                            }
                                            // Проверим н-стояк
                                            if (confirm_close_fuel.fs.trk_num >= 10 && confirm_close_fuel.fs.trk_num <= 12) {
                                                var ns_clear = {
                                                    id: confirm_close_fuel.fs !== null ? confirm_close_fuel.fs.id : 0,
                                                    num: confirm_close_fuel.fs !== null ? confirm_close_fuel.fs.num : 0
                                                };
                                                // TODO:!!!ТЕСТ УБРАТЬ
                                                //if (log) {
                                                //    log.info('Команда на наливной стояк (сбросить настройки) ns_clear');
                                                //    log.debug(ns_clear);
                                                //}
                                                postAsyncNSClear(
                                                    ns_clear,
                                                    function (reset_status) {
                                                        //if (log) { log.info('Сброс настроек на наливном стояке, статус =' + reset_status); } // TODO:!!!ТЕСТ УБРАТЬ
                                                        updateMessageTips("Сброс настроек на наливном стояке, статус =" + reset_status + ".");
                                                        logInfo(catalog_user.name_log, 'Сброс настроек на НС (trk - ' + confirm_close_fuel.fs.trk_num + ', side - ' + confirm_close_fuel.fs.side + ', num - ' + confirm_close_fuel.fs.num + '). Код выполнения = ' + reset_status + '. [FuelSale].[id] = ' + confirm_close_fuel.fs.id);

                                                    });
                                            }
                                        }
                                        confirm_close_fuel.obj.dialog("close");
                                    }
                                    updateMessageTips("Запись FuelSales обновлена результат = " + id);
                                    logInfo(catalog_user.name_log, 'Запись строки FuelSales [FuelSales].[id] = ' + confirm_close_fuel.fs.id + ') - обновлена. Код выполнения = ' + id + '.');

                                }
                            );
                            //--------------------------
                        } else {
                            updateMessageTips("Отмена нет данных состояния емкостей в конце выдачи");
                            logError(catalog_user.name_log, "Отмена нет данных состояния емкостей в конце выдачи");
                        }
                    }
                },
                'Отмена': function () {
                    $(this).dialog("close");
                }
            }
        });

    },
    open: function (id) {
        if (id) {
            //if (log) { log.info('Производим закрытие открытой выдачи, id=' + id); } // TODO:!!!ТЕСТ УБРАТЬ
            logInfo(catalog_user.name_log, 'Открыто окно «Закрыть выдачу ГСМ». [FuelSale].[id] = ' + id);
            confirm_close_fuel.obj.dialog("open");
            confirm_close_fuel.id_open = id;
            confirm_close_fuel.fs = null;
            confirm_close_fuel.sap = null;
            confirm_close_fuel.card = null;
            confirm_close_fuel.clear_input();
            //confirm_close_fuel.fs = openFuelSale.getFuelSale(id);
            confirm_close_fuel.updateTips('Определим запись FuelSale');
            getAsyncFuelSale(
                id, function (result_fs) {
                    // Если данные FS есть - продолжить
                    if (result_fs) {
                        confirm_close_fuel.fs = result_fs;
                        confirm_close_fuel.open_num = confirm_close_fuel.fs.trk_num < 10 ? confirm_close_fuel.fs.num : confirm_close_fuel.fs.num + 29;
                        // Добавить номер пистолета по которому будет производится закрытие
                        postAsyncGuns(confirm_close_fuel.open_num);
                        if (confirm_close_fuel.fs.id_sap !== null) {
                            // Определим запись SAP
                            confirm_close_fuel.updateTips('Определим запись SAP');
                            getAsyncSAP_Buffer(
                                confirm_close_fuel.fs.id_sap,
                                function (result) {
                                    confirm_close_fuel.sap = result;
                                    confirm_close_fuel.update_FuelSale();
                                });
                        } else {
                            confirm_close_fuel.update_FuelSale();
                        }
                    } else {
                        confirm_close_fuel.updateTips('Ошибка чтения openFuelSale! id=' + id + ', открытых выдач = ' + (openFuelSale.list !== null ? openFuelSale.list.length : 'null'));
                    }
                });

        }
    },
    // Обновим выдачу
    update_FuelSale: function () {
        // обновим FuelSale
        var now = new Date();
        var trk_num = confirm_close_fuel.fs.trk_num;
        // Это пистолеты ?
        if (trk_num > 0 && trk_num < 10) {
            confirm_close_fuel.type = 0;
            //if (log) { log.info('Закрыть ведомость выдачи топлива (пистолет-' + fs.num + ')'); } // TODO:!!!ТЕСТ УБРАТЬ
            confirm_close_fuel.obj.dialog("option", "title", 'Закрыть ведомость выдачи топлива (пистолет-' + confirm_close_fuel.fs.num + ')');
            $('tr#type-0').show();
            $('tr#type-1').hide();
            var gun = guns.getGun(confirm_close_fuel.fs.num);
            if (gun) {
                confirm_close_fuel.fs.volume = gun.current_volume > 0 ? gun.current_volume / 100.0 : 0; // выдано
                confirm_close_fuel.fs.stop_counter = gun.total_volume; // по счетчику
            }
        }
        // Это наливные стояки
        if (trk_num >= 10 && trk_num <= 12) {
            confirm_close_fuel.type = 1;
            //if (log) { log.info('Закрыть ведомость выдачи топлива (наливной стояк-' + fs.num + ')'); } // TODO:!!!ТЕСТ УБРАТЬ
            confirm_close_fuel.obj.dialog("option", "title", 'Закрыть ведомость выдачи топлива (наливной стояк-' + confirm_close_fuel.fs.num + ')');
            $('tr#type-1').show();
            $('tr#type-0').hide();
            var riser = risers.getRisers(confirm_close_fuel.fs.num);
            var DIOriser = risers.getDIORisers(confirm_close_fuel.fs.num);
            if (DIOriser) {
                confirm_close_fuel.fs.stop_counter = (DIOriser.Counter / 1000000).toFixed(0); // по счетчику
                confirm_close_fuel.fs.volume = confirm_close_fuel.fs.stop_counter - confirm_close_fuel.fs.start_counter; // выдано
            }
        }

        if (gun || riser) {
            confirm_close_fuel.fs.close = toISOStringTZ(now);
            confirm_close_fuel.updateTips('Определим текущее состояние емкостей');
            if (btanks_one === true) {
                // выбран режим одной емкости
                getTankTags(confirm_close_fuel.fs.tank_num,
                    function (result) {
                        // Обновим информацию по баку
                        //confirm_close_fuel.confirm_close_fuel.fs = confirm_close_fuel.set_fs_Close(confirm_close_fuel.fs, result);
                        confirm_close_fuel.set_fs_Close(result);
                    }
                );
            } else {
                // выбран режим нескольких емкостей
                confirm_df.viewParmetrTanksOfType(
                    confirm_close_fuel.fs.fuel_type,
                    function (list_tags) {
                        var result = confirm_df.viewParamTanks(list_tags);
                        if (result) {
                            // Обновим информацию по баку
                            //confirm_close_fuel.fs = confirm_close_fuel.set_fs_Close(confirm_close_fuel.fs, result);
                            confirm_close_fuel.set_fs_Close(result);
                        }
                    }
                );
            }
        } else {
            updateMessageTips("Ошибка чтения тегов , пистолета или наливного стояка [gun || riser]");
            //confirm_close_fuel.fs = fs;
        }
    },
    // метод обновляет информацию о закрытии
    set_fs_Close: function (result) {
        var now = new Date();
        // Обновим информацию по баку
        confirm_close_fuel.fs.stop_level = result.level.toFixed(2);
        confirm_close_fuel.fs.stop_mass = result.mass.toFixed(2);
        confirm_close_fuel.fs.stop_temp = result.temp.toFixed(2);
        confirm_close_fuel.fs.stop_volume = result.volume.toFixed(2);
        confirm_close_fuel.fs.stop_density = result.dens.toFixed(5);
        confirm_close_fuel.fs.stop_water_level = result.water_level.toFixed(2);
        $('input#close-stop_level').val(confirm_close_fuel.fs.stop_level);
        $('input#close-stop_volume').val(confirm_close_fuel.fs.stop_volume);
        $('input#close-stop_density').val(confirm_close_fuel.fs.stop_density);
        $('input#close-stop_mass').val(confirm_close_fuel.fs.stop_mass);
        $('input#close-stop_temp').val(confirm_close_fuel.fs.stop_temp);
        $('input#close-stop_water_level').val(confirm_close_fuel.fs.stop_water_level);
        //
        confirm_close_fuel.fs.stop_datetime = toISOStringTZ(now);
        // Выполним расчет выданного объема и массы
        confirm_close_fuel.fs.mass = 0;
        //if (fs_out.passage === "B") {
        // Считаем разица посчетчикам
        confirm_close_fuel.fs.volume = confirm_close_fuel.fs.stop_counter - confirm_close_fuel.fs.start_counter;
        if (confirm_close_fuel.fs.volume > 0) {
            if (confirm_close_fuel.type === 0) {
                // если пистолет приведем к литрам (наливной стояк уже в литрах \1000000)
                confirm_close_fuel.fs.volume = confirm_close_fuel.fs.volume / 100.0;
            }
            //if (log) { log.info('В режиме выдачи топлива, выданно топлива fs_out.volume=fs_out.stop_counter - fs_out.start_counter / 100' + fs_out.volume); } // TODO:!!!ТЕСТ УБРАТЬ
        }
        //}

        //// TODO:!!!ТЕСТ УБРАТЬ ТЕСТОВЫЙ ПЕРЕСЧЕТ
        //if (bIssue_test) {
        //    confirm_close_fuel.fs.volume = confirm_close_fuel.fs.dose;
        //}
        if (confirm_close_fuel.fs.volume > 0) {
            // расчет для пистолета
            if (confirm_close_fuel.type === 0) {
                confirm_close_fuel.fs.mass = confirm_close_fuel.fs.volume * confirm_close_fuel.fs.stop_density * 0.001;
            }
            // расчет для наливного стояка
            if (confirm_close_fuel.type === 1) {
                var avg_dens = (Number(confirm_close_fuel.fs.start_density) + Number(confirm_close_fuel.fs.stop_density)) / 2.0;
                confirm_close_fuel.fs.mass = confirm_close_fuel.fs.volume * avg_dens * 0.001;
            }
        }
        //
        $('input#close-operator_name').val(confirm_close_fuel.fs.operator_name);
        $('input#close-smena_num').val(confirm_close_fuel.fs.smena_num);
        $('input#close-smena_datetime').val(confirm_close_fuel.fs.smena_datetime);
        $('input#close-trk_num').val(confirm_close_fuel.fs.trk_num);
        $('input#close-gun_num').val(confirm_close_fuel.fs.num);
        $('input#close-num').val(confirm_close_fuel.fs.num);
        $('input#close-fuel_type').val(confirm_close_fuel.fs.fuel_type);
        $('input#close-tank_num').val(confirm_close_fuel.fs.tank_num);
        $('input#close-id_card').val(confirm_close_fuel.fs.id_card + (confirm_close_fuel.sap !== null && confirm_close_fuel.sap.TRANSP_FAKT !== null ? ' / ' + confirm_close_fuel.sap.TRANSP_FAKT : ''));
        $('input#close-dose').val(confirm_close_fuel.fs.dose);
        $('input#close-passage').val(confirm_close_fuel.fs.passage);
        $('input#close-volume').val(confirm_close_fuel.fs.volume);
        $('input#close-mass').val(confirm_close_fuel.fs.mass);
        $('input#close-start_datetime').val(confirm_close_fuel.fs.start_datetime);
        $('input#close-start_level').val(confirm_close_fuel.fs.start_level);
        $('input#close-start_volume').val(confirm_close_fuel.fs.start_volume);
        $('input#close-start_density').val(confirm_close_fuel.fs.start_density);
        $('input#close-start_mass').val(confirm_close_fuel.fs.start_mass);
        $('input#close-start_temp').val(confirm_close_fuel.fs.start_temp);
        $('input#close-start_water_level').val(confirm_close_fuel.fs.start_water_level);
        $('input#close-start_counter').val(confirm_close_fuel.fs.start_counter);
        $('input#close-stop_datetime').val(confirm_close_fuel.fs.stop_datetime);
        $('input#close-stop_counter').val(confirm_close_fuel.fs.stop_counter);
        //$('input#close-close').val(confirm_close_fuel.fs.close);
        $('input#close-id_sap').val(confirm_close_fuel.fs.id_sap);
        // return fs_out;
        confirm_close_fuel.updateTips('Информация обновлена!');
    },
    // Очистить input
    clear_input: function () {
        $('input#close-operator_name').val('');
        $('input#close-smena_num').val('');
        $('input#close-smena_datetime').val('');
        $('input#close-trk_num').val('');
        $('input#close-gun_num').val('');
        $('input#close-num').val('');
        $('input#close-fuel_type').val('');
        $('input#close-tank_num').val('');
        $('input#close-id_card').val('');
        $('input#close-dose').val('');
        $('input#close-passage').val('');
        $('input#close-volume').val('');
        $('input#close-mass').val('');
        $('input#close-start_datetime').val('');
        $('input#close-start_level').val('');
        $('input#close-start_volume').val('');
        $('input#close-start_density').val('');
        $('input#close-start_mass').val('');
        $('input#close-start_temp').val('');
        $('input#close-start_water_level').val('');
        $('input#close-start_counter').val('');
        $('input#close-stop_datetime').val('');
        $('input#close-stop_level').val('');
        $('input#close-stop_volume').val('');
        $('input#close-stop_density').val('');
        $('input#close-stop_mass').val('');
        $('input#close-stop_temp').val('');
        $('input#close-stop_water_level').val('');
        $('input#close-stop_counter').val('');
        $('input#close-close').val('');
        $('input#close-id_sap').val('');
    },
    // Вывести сообщение
    updateTips: function (t) {
        $(".closeTips")
            .text(t)
            .addClass("ui-state-highlight");
        setTimeout(function () {
            $(".validateTips").removeClass("ui-state-highlight", 1500);
        }, 500);
    },
};
//--------------------------------------------------------------------------------
// Панель "Выбор емкостей"
var confirm_tanks = {
    obj: null,
    init: function () {
        confirm_tanks.obj = $("#confirm-tanks").dialog({
            resizable: false,
            modal: true,
            autoOpen: false,
            height: "auto",
            title: "Выбранные емкости для определения ср. плотности.",
            width: 500,
            buttons: {
                'Сохранить': function () {
                    confirm_tanks.Save();
                    $(this).dialog("close");
                },
                'Закрыть': function () {
                    $(this).dialog("close");
                }
            }
        });
    },
    Open: function () {
        confirm_tanks.obj.dialog("open");
        getAsyncSelectTanks_A92(function (tanks_a92) {
            if (tanks_a92) {
                $('input#B2').prop('checked', tanks_a92.B2);
                $('input#B3').prop('checked', tanks_a92.B3);
                $('input#B9').prop('checked', tanks_a92.B9);
                $('input#B11').prop('checked', tanks_a92.B11);
                $('input#B16').prop('checked', tanks_a92.B16);
            }
        });
        getAsyncSelectTanks_A95(function (tanks_a95) {
            if (tanks_a95) {
                $('input#B17').prop('checked', tanks_a95.B17);
                $('input#B18').prop('checked', tanks_a95.B18);
                $('input#B19').prop('checked', tanks_a95.B19);
                $('input#B20').prop('checked', tanks_a95.B20);
            }
        });
        getAsyncSelectTanks_dt(function (tanks_dt) {
            if (tanks_dt) {
                $('input#dt-1').prop('checked', tanks_dt.C1);
                $('input#dt-2').prop('checked', tanks_dt.C2);
                $('input#dt-3').prop('checked', tanks_dt.C3);
                $('input#dt-4').prop('checked', tanks_dt.C4);
                $('input#dt-5').prop('checked', tanks_dt.C5);
                $('input#dt-6').prop('checked', tanks_dt.C6);
                $('input#dt-7').prop('checked', tanks_dt.C7);
                $('input#dt-8').prop('checked', tanks_dt.C8);
                $('input#dt-9').prop('checked', tanks_dt.C9);
                $('input#dt-10').prop('checked', tanks_dt.C10);
                $('input#dt-11').prop('checked', tanks_dt.C11);
                $('input#dt-12').prop('checked', tanks_dt.C12);
                $('input#dt-13').prop('checked', tanks_dt.C13);
                $('input#dt-14').prop('checked', tanks_dt.C14);
                $('input#dt-15').prop('checked', tanks_dt.C15);
                $('input#dt-16').prop('checked', tanks_dt.C16);
                $('input#dt-17').prop('checked', tanks_dt.C17);
                $('input#dt-18').prop('checked', tanks_dt.C18);
                $('input#dt-19').prop('checked', tanks_dt.C19);
                $('input#dt-20').prop('checked', tanks_dt.C20);
                $('input#dt-21').prop('checked', tanks_dt.C21);
                $('input#dt-22').prop('checked', tanks_dt.C22);
                $('input#dt-23').prop('checked', tanks_dt.C23);
                $('input#dt-24').prop('checked', tanks_dt.C24);
                $('input#dt-25').prop('checked', tanks_dt.C25);
                $('input#dt-26').prop('checked', tanks_dt.C26);
                $('input#dt-27').prop('checked', tanks_dt.C27);
                $('input#dt-28').prop('checked', tanks_dt.C28);
                $('input#dt-29').prop('checked', tanks_dt.C29);
                $('input#dt-30').prop('checked', tanks_dt.C30);
                $('input#dt-31').prop('checked', tanks_dt.C31);
                $('input#dt-32').prop('checked', tanks_dt.C32);
            }
        });
        getAsyncSelectTanks_kerosene(function (tanks_kerosene) {
            if (tanks_kerosene) {
                $('input#k-33').prop('checked', tanks_kerosene.C33);
                $('input#k-38').prop('checked', tanks_kerosene.C38);
                $('input#k-39').prop('checked', tanks_kerosene.C39);
            }
        });
    },
    Save: function () {
        var now = new Date();
        // Определим пользователя и смену
        getAsyncCurrentUsersActions(
            function (user) {
                if (user) {
                    tanks_a92 = {
                        changed: toISOStringTZ(now),
                        user: user.UserName,
                        B2: $('input#B2').prop('checked'),
                        B3: $('input#B3').prop('checked'),
                        B9: $('input#B9').prop('checked'),
                        B11: $('input#B11').prop('checked'),
                        B16: $('input#B16').prop('checked')
                    };
                    postAsyncTanks_A92(tanks_a92,
                        function (result_tanks_a92) {
                            updateMessageTips("Новый список емкостей A92 - добавлен, id=" + result_tanks_a92);
                        });
                    tanks_a95 = {
                        changed: toISOStringTZ(now),
                        user: user.UserName,
                        B17: $('input#B17').prop('checked'),
                        B18: $('input#B18').prop('checked'),
                        B19: $('input#B19').prop('checked'),
                        B20: $('input#B20').prop('checked')
                    };
                    postAsyncTanks_A95(tanks_a95,
                        function (result_tanks_a95) {
                            updateMessageTips("Новый список емкостей A95 - добавлен, id=" + result_tanks_a95);
                        });
                    tanks_dt = {
                        changed: toISOStringTZ(now),
                        user: user.UserName,
                        C1: $('input#dt-1').prop('checked'),
                        C2: $('input#dt-2').prop('checked'),
                        C3: $('input#dt-3').prop('checked'),
                        C4: $('input#dt-4').prop('checked'),
                        C5: $('input#dt-5').prop('checked'),
                        C6: $('input#dt-6').prop('checked'),
                        C7: $('input#dt-7').prop('checked'),
                        C8: $('input#dt-8').prop('checked'),
                        C9: $('input#dt-9').prop('checked'),
                        C10: $('input#dt-10').prop('checked'),
                        C11: $('input#dt-11').prop('checked'),
                        C12: $('input#dt-12').prop('checked'),
                        C13: $('input#dt-13').prop('checked'),
                        C14: $('input#dt-14').prop('checked'),
                        C15: $('input#dt-15').prop('checked'),
                        C16: $('input#dt-16').prop('checked'),
                        C17: $('input#dt-17').prop('checked'),
                        C18: $('input#dt-18').prop('checked'),
                        C19: $('input#dt-19').prop('checked'),
                        C20: $('input#dt-20').prop('checked'),
                        C21: $('input#dt-21').prop('checked'),
                        C22: $('input#dt-22').prop('checked'),
                        C23: $('input#dt-23').prop('checked'),
                        C24: $('input#dt-24').prop('checked'),
                        C25: $('input#dt-25').prop('checked'),
                        C26: $('input#dt-26').prop('checked'),
                        C27: $('input#dt-27').prop('checked'),
                        C28: $('input#dt-28').prop('checked'),
                        C29: $('input#dt-29').prop('checked'),
                        C30: $('input#dt-30').prop('checked'),
                        C31: $('input#dt-31').prop('checked'),
                        C32: $('input#dt-32').prop('checked')
                    };
                    postAsyncTanks_dt(tanks_dt,
                        function (result_tanks_dt) {
                            updateMessageTips("Новый список емкостей ДТ - добавлен, id=" + result_tanks_dt);
                        });
                    tanks_kerosene = {
                        changed: toISOStringTZ(now),
                        user: user.UserName,
                        C33: $('input#k-33').prop('checked'),
                        C38: $('input#k-38').prop('checked'),
                        C39: $('input#k-39').prop('checked')
                    };
                    postAsyncTanks_kerosene(tanks_kerosene,
                        function (result_tanks_kerosene) {
                            updateMessageTips("Новый список емкостей Керосин - добавлен, id=" + result_tanks_kerosene);
                        });
                }
            });
    }
};
//=========== ЗАГРУЗКА СТРАНИЦЫ СТАРТ ПРОЕКТА ====================================================
$(function () {
    // Загрузка библиотек
    loadReference = function (callback) {
        LockScreen('Инициализация данных');
        var count = 4;
        // Загрузка (common.js)
        getCatalogOZM(function (result) {
            catalog_ozm.list = result;
            count -= 1;
            if (count <= 0) {
                if (typeof callback === 'function') {
                    LockScreenOff();
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
                    LockScreenOff();
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
                    LockScreenOff();
                    callback();

                }
            }
        });
        // Определим пользователя и смену
        getAsyncCurrentUsersActions(
            function (user) {
                if (user !== null) {
                    catalog_user.operator_name = user.UserName;
                    catalog_user.smena_num = user.SessionID;
                    catalog_user.smena_datetime = user.TimeStmp;
                    catalog_user.name_log = user.UserName + ', подключен:' + client_number;
                }
                count -= 1;
                if (count <= 0) {
                    if (typeof callback === 'function') {
                        LockScreenOff();
                        callback();
                    }
                }
            });
    };

    // Инициализаия кнопки вывода панели "Информация по всем RFID-считывателям"
    $('.button-rfid-all').on('click', function () {
        confirm_rfid_all.Open();
    });
    // Инициализаия кнопки вывода панели "Информация по выбраным Емкастям"
    $('.button-tanks').on('click', function () {
        confirm_tanks.Open();
    });
    // Инициализаия кнопки вывода панели "Сброс настроек"
    $('.button-setup').on('click', function () {
        logInfo(catalog_user.name_log, 'Нажата кнопка "Готовятся" - сброс номеров пистолетов по которым идет настройка выдачи(закрития)');
        deleteAsyncClearGuns();
    });
    // Инициализаия кнопки вывода панели "Информация по RFID-карте"
    $('.button-rfid').on('click', function () {
        var trk_num = $(this).attr('data-trk');
        var side = $(this).attr('data-side');
        confirm_rfid_card.Open(trk_num, side);
    });
    // Инициализаия кнопки вывода панели "Задания выдачи и работе с SAP MII" - пистолет
    $('.button-deliver').on('click', function () {
        var gun = $(this).attr('data-gun');
        confirm_df.Open(gun, 0);
    });
    // Инициализаия кнопки вывода панели "Задания выдачи и работе с SAP MII" - стояки
    $('.button-risers').on('click', function () {
        var risers = $(this).attr('data-risers');
        confirm_df.Open(risers, 1);
    });
    // Инициализаия кнопки вывода панели "Текущее значение тегов"
    $('th.button-online').on('click', function () {
        var num = $(this).attr('data-num');
        confirm_tags_gun.init(num);
        confirm_tags_gun.open();
    });
    // Инициализаия кнопки вывода панели "Закрытия выдачи"
    $('button.button-close').on('click', function () {
        var id = $(this).attr('data-id');
        confirm_close_fuel.open(id);
    });
    // Инициализаия кнопки "Остановить выдачу - пистолет"
    $('button.button-stop').on('click', function () {
        var gun = $(this).attr('data-gun');
        logInfo(catalog_user.name_log, 'Нажата кнопка остановить выдачу пистолет №' + gun);
        var gun_stop = {
            num: gun,
            value: true
        };
        postAsyncGunStop(
            gun_stop,
            function (result_stop) {
                updateMessageTips("Остановить выдачу, пистолет №" + gun + ". Ответ - " + result_stop);
                logInfo(catalog_user.name_log, "Остановить выдачу, пистолет №" + gun + ". Ответ - " + result_stop);
            });
    });
    // Инициализаия кнопки "Остановить выдачу - НС"
    $('button.button-stop-ns').on('click', function () {
        var risers = $(this).attr('data-risers');
        logInfo(catalog_user.name_log, 'Нажата кнопка остановить выдачу НС №' + risers);
        var ns_stop = {
            num: risers,
        };
        postAsyncNSStop(
            ns_stop,
            function (result_stop) {
                updateMessageTips("Остановить выдачу, НС №" + risers + ". Ответ - " + result_stop);
                logInfo(catalog_user.name_log, "Остановить выдачу, НС №" + risers + ". Ответ - " + result_stop);
            });
    });
    // Инициализаия кнопки вывода панели "Продолжить выдачу"
    $('button.button-continue').on('click', function () {
        var id = $(this).attr('data-id');
        var dose = $(this).attr('data-dose');
        var num = $(this).attr('data-gun');
        if (bcontrolTRK_ban === false) {
            // Выдать ГСМ через ТРК по пистолету
            updateMessageTips("Производим выдачу на реальную колонку, id=" + id);
            var gun_start = {
                id: id,
                num: num,
                passage: false,
                volume: dose
            };
            postAsyncGunStart(
                gun_start,
                function (status) {
                    updateMessageTips("Команда на отпуск ГСМ отправлена на колонку. Код состояния колонки =" + status + ".");
                });
        } else {
            updateMessageTips("Выдача на колонку или наливной стояк - заблокированна, id=" + id);
        }
        //openFuelSale.init(); // Обновим данные по открытим выдачам
    });
    $('.button-deliver').hide();
    $('.button-close').hide();
    $('.button-continue').hide();
    // инициализация progresbar
    pb_deliver.init();
    pb_deliver.hide();
    // Инициализация открытых выдач
    //openFuelSale.init(null);
    ofs.init(null);
    // Загрузка библиотек
    loadReference(function (result) {

        logInfo(catalog_user.name_log, 'Панель оператора "Выдача по ТРК" - ОТКРЫТА');
        // Инициализаия панели  "Выбранные емкости"
        confirm_tanks.init();
        // Инициализаия панели  "Информация по всем RFID-считывателям"
        confirm_rfid_all.init();
        // Инициализаия панели  "Информация по RFID-карте"
        confirm_rfid_card.init();
        // Инициализаия панели  "Задания выдачи и работе с SAP MII"
        confirm_df.init();
        // Инициализаия панели  "Закрытия выдачи и SAP MII"
        confirm_close_fuel.init();
        // Загрузка документа
        $(document).ready(function () {
            //show();
            showView();
            showDIOView();
            showCardView();
            //setInterval('show()', 1500);
            setInterval('showView()', 1000);
            setInterval('showDIOView()', 1500);
            setInterval('showCardView()', 5000);
        });
    });
});
