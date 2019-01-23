// не использую
function replaceWith(html) {
    var StyledError = "<div class=\"ui-state-error ui-corner-all\" style=\"padding: 0 .7em;\">";
    StyledError += "<p><span class=\"ui-icon ui-icon-alert\" style=\"float: left; margin-right: .3em;\">";
    StyledError += "</span><strong>Attention : </strong>";
    StyledError += html;
    StyledError += "</p></div>";
    return StyledError;
};

$(document).keypress(
    function (event) {

        if (event.which == '13') {
            $(".validateTips").text('');
            $(".ui-state-error").removeClass("ui-state-error");
            event.preventDefault();
            if (event.target.name == 'DoseFuel') {
                confirm_df.viewCalcMass();
            }

        }
    });

function updateMessageTips(t) {
    $(".messageTips")
        .text(t)
        .addClass("ui-state-highlight");
    setTimeout(function () {
        $(".messageTips").removeClass("ui-state-highlight", 1500);
    }, 500);
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
// Список открытых выдач
var openFuelSale = {
    list: null,
    init: function () {
        openFuelSale.list = null;
        // Загрузка (common.js)
        getAsyncOpenFuelSale(function (result) {
            openFuelSale.list = result;
        });
    },
    getFuelSaleID: function (trk_num, side, num) {
        // Считаем карту
        var fs_trk = getObjects(openFuelSale.list, 'num_trk', trk_num)
        if (fs_trk) {
            var fs_num = getObjects(openFuelSale.list, 'num', num)
            if (fs_num && fs_num.length > 0) {
                return fs_num[0].id;
            }
        }
        return null
    },
    getFuelSale: function (id) {
        // Считаем карту
        var fs = getObjects(openFuelSale.list, 'id', id)
        if (fs && fs.length > 0) {
            return fs[0];
        }
        return null
    }
};
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
            var card = getObjects(cards.list, 'num_trk', trk_num)
            if (card && card.length > 0) {
                for (ic = 0; ic < card.length; ic++) {
                    if (card[ic].side == side) {
                        return card[ic].card;
                    }
                }
            }
        }
        return null;
    },
    //// Получить карточку
    //getCardOfGun: function (num) {
    //    var trk_num = 0;
    //    var side = 0;
    //    switch (num) {
    //        case 1: trk_num = 1; side = 0; break;
    //        case 2: trk_num = 1; side = 1; break;
    //        case 3: trk_num = 2; side = 0; break;
    //        case 4: trk_num = 2; side = 1; break;
    //        case 5: trk_num = 3; side = 0; break;
    //        case 6: trk_num = 3; side = 1; break;
    //        case 7: trk_num = 4; side = 0; break;
    //        case 8: trk_num = 4; side = 1; break;
    //        case 9: trk_num = 5; side = 0; break;
    //        case 10: trk_num = 5; side = 1; break;
    //        case 11: trk_num = 6; side = 0; break;
    //        case 12: trk_num = 6; side = 1; break;
    //        case 13:
    //        case 14:
    //        case 15:
    //        case 16: trk_num = 7; side = 0; break;
    //        case 17:
    //        case 18:
    //        case 19:
    //        case 20: trk_num = 7; side = 1; break;
    //        case 21:
    //        case 22:
    //        case 23:
    //        case 24: trk_num = 8; side = 0; break;
    //        case 25:
    //        case 26:
    //        case 27:
    //        case 28: trk_num = 8; side = 1; break;
    //        case 29: trk_num = 9; side = 0; break;
    //    }
    //    // Считаем карту
    //    if (cards.list && cards.list.length > 0) {
    //        var card = getObjects(cards.list, 'num_trk', trk_num)
    //        if (card && card.length > 0) {
    //            for (ic = 0; ic < card.length; ic++) {
    //                if (card[ic].side == side) {
    //                    return card[ic].card;
    //                }
    //            }
    //        }
    //    }
    //    return null;
    //},
    // Получить всю запись с карточкой
    getRFIDCardOfNumSide: function (trk_num, side) {
        // Считаем карту
        if (cards.list && cards.list.length > 0) {
            var card = getObjects(cards.list, 'num_trk', trk_num)
            if (card && card.length > 0) {
                for (ic = 0; ic < card.length; ic++) {
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
    },
};
// список тегов пистолетов
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
        var obj = getObjects(risers.list, 'num', num)
        if (obj && obj.length > 0) {
            return obj[0];
        }
        return null
    },

    getDIORisers: function (num) {
        var obj = getObjects(risers.list_dio, 'num', num)
        if (obj && obj.length > 0) {
            return obj[0];
        }
        return null
    }

};
// список тегов керосина
var kerosenes = {
    list: [],
    setKerosenes: function (data) {
        kerosenes.list = data;
    },
    getKerosenes: function (num) {
        var obj = getObjects(kerosenes.list, 'num', num)
        if (obj && obj.length > 0) {
            return obj[0];
        }
        return null
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
    },
    hide: function () {
        pb_deliver.obj.each(function (indx, element) {
            var id = $(this).attr('id');
            $('div#' + id).hide();
        });
    }
}
// Вывести информацию по считывателям
function viewRFID() {
    if (rfid) {
        list = rfid.list;
        if (list) {
            for (i = 0; i < list.length; i++) {
                var c_rfid = list[i];
                if (c_rfid) {

                    // Покажем состояние
                    if (c_rfid.num_trk > 0 && c_rfid.num_trk < 13) {
                        // Вывод связь
                        if (c_rfid.online != null) {
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
                                $('#button-trk-' + c_card.num_trk + '-' + c_card.side + '-rfid').text(c_card.card.Number);
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
                    }
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
                // вывод тегов тест
                if (gun.num_gun == confirm_tags_gun.current) {
                    confirm_tags_gun.out(gun);
                }
                // Проверим сотояние TRK
                var id_ofs = openFuelSale.getFuelSaleID(gun.num_trk, gun.side, gun.num_gun);
                // Отобразим кнопки выдать\закрыть
                if (id_ofs != null) {
                    $('#button-gun-' + gun.num_gun + '-deliver').hide();
                    $('#button-gun-' + gun.num_gun + '-close').show().attr("data-id", id_ofs);
                } else {
                    $('#button-gun-' + gun.num_gun + '-deliver').show();
                    $('#button-gun-' + gun.num_gun + '-close').hide().attr("data-id", '');
                }
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

                //gun.state = 2;
                //gun.volume_to_write = 2000;
                //gun.current_volume = 150;
                // Проверим сотояние TRK
                var id_ofs = openFuelSale.getFuelSaleID(gun.num_trk, gun.side, gun.num_gun);
                // Определить активную кнопку
                if (gun.state != null) {
                    switch (gun.state) {
                        case 1: //  разрешено выдавать
                            var card = cards.getCardOfNumSide(gun.num_trk, gun.side);
                            $('div#progressbar-gun-' + gun.num_gun).hide();
                            $('button#button-gun-' + gun.num_gun + '-close').hide();
                            // Отобразим кнопки выдать\закрыть
                            if (id_ofs != null) {
                                $('#button-gun-' + gun.num_gun + '-deliver').hide();
                                $('#button-gun-' + gun.num_gun + '-close').show().attr("data-id", id_ofs);
                            } else {
                                //if (card && gun && card.Active && gun.online && gun.taken) {
                                if (gun && gun.online && gun.taken) {
                                    $('button#button-gun-' + gun.num_gun + '-deliver').show();
                                } else {
                                    $('button#button-gun-' + gun.num_gun + '-deliver').hide();
                                }
                            }
                            break;
                        case 2: //  Выдача
                            $('button#button-gun-' + gun.num_gun + '-close').hide();
                            $('button#button-gun-' + gun.num_gun + '-deliver').hide();
                            $('div#progressbar-gun-' + gun.num_gun).show();
                            if (gun && gun.volume_to_write > 0) {
                                var curr = 0;
                                curr = ((gun.current_volume * 100.0) / gun.volume_to_write);
                                pb_deliver.outValume(gun.num_gun, curr);
                            }
                            break;
                        case 4: //  Выдача стоп
                            $('button#button-gun-' + gun.num_gun + '-close').hide();
                            $('button#button-gun-' + gun.num_gun + '-deliver').hide();
                            $('div#progressbar-gun-' + gun.num_gun).show();
                            pb_deliver.outValume(gun.num_gun, 100);
                            break;
                        case 128: //  нет ответа
                            $('div#progressbar-gun-' + gun.num_gun).hide();
                            // Отобразим кнопки выдать\закрыть
                            if (id_ofs != null) {
                                $('#button-gun-' + gun.num_gun + '-deliver').hide();
                                $('#button-gun-' + gun.num_gun + '-close').show().attr("data-id", id_ofs);
                            } else {
                                $('button#button-gun-' + gun.num_gun + '-close').hide();
                                $('button#button-gun-' + gun.num_gun + '-deliver').hide();
                            }
                            break;
                        default: {
                            $('div#progressbar-gun-' + gun.num_gun).hide();
                            // Отобразим кнопки выдать\закрыть
                            if (id_ofs != null) {
                                $('#button-gun-' + gun.num_gun + '-deliver').hide();
                                $('#button-gun-' + gun.num_gun + '-close').show().attr("data-id", id_ofs);
                            } else {
                                $('button#button-gun-' + gun.num_gun + '-close').hide();
                                $('button#button-gun-' + gun.num_gun + '-deliver').hide();
                            }
                            break;
                        }

                    }
                } else {
                    // Статус не определен
                    $('button#button-gun-' + gun.num_gun + '-close').hide();
                    $('button#button-gun-' + gun.num_gun + '-deliver').hide();
                    $('div#progressbar-gun-' + gun.num_gun).hide();
                }
            }
        }
    }
};
//
function viewDIORisers() {
    if (risers) {
        list = risers.list_dio;
        if (list) {
            for (i = 0; i < list.length; i++) {
                var riser = list[i];

                // Counter
                if (riser.Counter != null) {
                    $('#ns-' + riser.num + '-Counter').val((riser.Counter / 1000000).toFixed(2)).removeClass('error');
                } else {
                    $('#ns-' + riser.num + '-Counter').val('').addClass('error');
                }
                // Counter
                if (riser.Flow != null) {
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
                if (riser.TimerLiveOn != null) {
                    $('#ns-' + riser.num + '-TimerLiveOn').val(riser.TimerLiveOn).removeClass('error');
                } else {
                    $('#ns-' + riser.num + '-TimerLiveOn').val('').addClass('error');
                }
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
//
function viewRisers() {
    if (risers) {
        list = risers.list;
        if (list) {
            for (i = 0; i < list.length; i++) {
                var riser = list[i];

                // Проверим сотояние
                var num_riser = Number(riser.num) + 9;
                var id_ofs = openFuelSale.getFuelSaleID(num_riser, 0, riser.num);
                // Отобразим кнопки выдать\закрыть
                if (id_ofs != null) {
                    $('#button-ns-' + num_riser + '-deliver').hide();
                    $('#button-ns-' + num_riser + '-close').show().attr("data-id", id_ofs);
                } else {
                    $('#button-ns-' + num_riser + '-deliver').show();
                    $('#button-ns-' + num_riser + '-close').hide().attr("data-id", '');
                }
                //
                if (riser.flg_kv1 != null) {
                    if (riser.flg_kv1) {
                        $('#ns-' + riser.num + '-flg_kv1').html("").removeClass().addClass('active');
                    } else {
                        $('#ns-' + riser.num + '-flg_kv1').html("").removeClass().addClass('not_active');
                    }
                } else {
                    $('#ns-' + riser.num + '-flg_kv1').html("").removeClass().addClass('null_active');
                }
                //
                if (riser.flg_kv2 != null) {
                    if (riser.flg_kv2) {
                        $('#ns-' + riser.num + '-flg_kv2').html("").removeClass().addClass('active');
                    } else {
                        $('#ns-' + riser.num + '-flg_kv2').html("").removeClass().addClass('not_active');
                    }
                } else {
                    $('#ns-' + riser.num + '-flg_kv2').html("").removeClass().addClass('null_active');
                }
                //
                if (riser.inp_km != null) {
                    if (riser.inp_km) {
                        $('#ns-' + riser.num + '-inp_km').html("").removeClass().addClass('active');
                    } else {
                        $('#ns-' + riser.num + '-inp_km').html("").removeClass().addClass('not_active');
                    }
                } else {
                    $('#ns-' + riser.num + '-inp_km').html("").removeClass().addClass('null_active');
                }
                //
                if (riser.inp_kvq1 != null) {
                    if (riser.inp_kvq1) {
                        $('#ns-' + riser.num + '-inp_kvq1').html("").removeClass().addClass('active');
                    } else {
                        $('#ns-' + riser.num + '-inp_kvq1').html("").removeClass().addClass('not_active');
                    }
                } else {
                    $('#ns-' + riser.num + '-inp_kvq1').html("").removeClass().addClass('null_active');
                }
                //
                if (riser.inp_kvq2 != null) {
                    if (riser.inp_kvq2) {
                        $('#ns-' + riser.num + '-inp_kvq2').html("").removeClass().addClass('active');
                    } else {
                        $('#ns-' + riser.num + '-inp_kvq2').html("").removeClass().addClass('not_active');
                    }
                } else {
                    $('#ns-' + riser.num + '-inp_kvq2').html("").removeClass().addClass('null_active');
                }
                //
                if (riser.inp_sa2 != null) {
                    if (riser.inp_sa2) {
                        $('#ns-' + riser.num + '-inp_sa2').html("").removeClass().addClass('active');
                    } else {
                        $('#ns-' + riser.num + '-inp_sa2').html("").removeClass().addClass('not_active');
                    }
                } else {
                    $('#ns-' + riser.num + '-inp_sa2').html("").removeClass().addClass('null_active');
                }
                //
                if (riser.out_kv1 != null) {
                    if (riser.out_kv1) {
                        $('#ns-' + riser.num + '-out_kv1').html("").removeClass().addClass('active');
                    } else {
                        $('#ns-' + riser.num + '-out_kv1').html("").removeClass().addClass('not_active');
                    }
                } else {
                    $('#ns-' + riser.num + '-out_kv1').html("").removeClass().addClass('null_active');
                }
                //
                if (riser.out_kv2 != null) {
                    if (riser.out_kv2) {
                        $('#ns-' + riser.num + '-out_kv2').html("").removeClass().addClass('active');
                    } else {
                        $('#ns-' + riser.num + '-out_kv2').html("").removeClass().addClass('not_active');
                    }
                } else {
                    $('#ns-' + riser.num + '-out_kv2').html("").removeClass().addClass('null_active');
                }
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
            }
        }
    );
    // Считаем RFID из буфера локальной базы
    getRFIDTags(
        function (result_rfid) {
            if (result_rfid) {
                rfid.setRFID(result_rfid);
                viewRFID();
            }
        }
    );
    // Прочтем теги пистолетов из OPC
    getGunTags(
        function (result_guns) {
            if (result_guns) {
                guns.setGuns(result_guns);
                viewGuns();
            }
        }
    );
    //  Прочесть теги счетчиков оборотов наливных стояков
    getDIORisersTags(
        function (result_dio) {
            if (result_dio) {
                risers.setDIORisers(result_dio)
                viewDIORisers();
            }
        }
    );
    // Прочесть теги наливных стояков
    getRisersTags(
        function (result_risers) {
            if (result_risers) {
                risers.setRisers(result_risers)
                viewRisers();
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
    operator_name: null,// 'Оператор тест',
    smena_num: null,// 0,
    smena_datetime: null,// new Date(2019, 0, 10, 0, 0, 0, 0),

    type: null,  // текущие тип (пистолет-0, стояк-1, керосин-2)
    gun: null,  // текущие теги пистолета
    risers: null,  // текущие теги разливочного стояка
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
    input_deliver_take_water_level: null,      // уровень воды
    input_deliver_dose_fuel: null,      // доза топлива
    input_deliver_mase_fuel: null,      // расчетная масса топлива
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

    // старт выдачи
    issuance_start: function (id) {
        if (bcontrolTRK_ban == false) {
            updateMessageTips("Производим выдачу на реальную колонку, id=" + id);
            var gun_start = {
                id: id,
                num: confirm_df.gun != null ? confirm_df.gun.num_gun : 0,
                passage: confirm_df.checkbox_deliver_Passage.prop('checked') ? true : false,
                volume: confirm_df.input_deliver_dose_fuel.val()
            }
            postAsyncGunStart(
                gun_start,
                function (status) {
                    updateMessageTips("Команда на отпуск ГСМ отправлена на колонку. Код состояния колонки =" + status + ".");
                });

        } else {
            updateMessageTips("Выдача на колонке заблокированна, id=" + id);
        }
        openFuelSale.init() // Обновим данные по открытим выдачам
        confirm_df.obj.dialog("close");
    },
    //сохраним данные в локальной базе fuelSale
    save_fuelSale: function (id) {
        var fuel_sale = confirm_df.getNewFuelSale(id);
        LockScreen('Подождите, идет создание строки ведомости выдачи ГСМ в БД');
        postAsyncFuelSale(
            fuel_sale,
            function (id) {
                LockScreenOff();
                // Данные в САП сохранились?
                if (id > 0) {
                    // Начнем выдавать
                    confirm_df.issuance_start(id);

                } else {
                    // Ошибка, операция отменена (! нужно решить что делать далее).
                    confirm_df.updateTips("Ошибка создания строки FuelSale в локальной базе данных. Код ошибки=" + id + ". Операция отменена.");
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
                buttons: {
                    'Начать выдачу': function () {
                        LockScreen('Подождите, идет создание строки БД для САП');
                        postAsyncSAP_Buffer(
                            sap_buffer,
                            function (id) {
                                LockScreenOff();
                                // Данные в САП сохранились?
                                if (id > 0) {
                                    // Запись в базу локальную
                                    confirm_df.save_fuelSale(id);
                                } else {
                                    // Ошибка, операция отменена (! нужно решить что делать далее).
                                    confirm_df.updateTips("Ошибка создания строки для SAP в локальной базе данных. Код ошибки=" + id + ". Операция отменена.");
                                }
                            }
                        );
                        $(this).dialog("close");
                    },
                    'Вернутся к выбору режимов': function () {
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
    // Проверка правильного заполнения формы
    validationConfirm: function (variant) {
        var valid = true;
        $(".validateTips").text('');
        $(".ui-state-error").removeClass("ui-state-error");
        // Проверка RFID карты на активность

        if (ntype_test == 0 && confirm_df.gun) { valid = valid && confirm_df.checkCheckboxOfMessage($('#deliver-Taken'), true, "Пистолет не снят - выдача запрещена!") }

        if (!confirm_df.checkbox_deliver_Passage.prop('checked')) {

            if (confirm_df.card == null) {
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
            if (variant != 4 && variant != 3) valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_sap_num_pos, "Не указан номер позиции");
            if (variant == 3) valid = valid && confirm_df.checkSelectValOfMessage(confirm_df.select_sap_num_pos, "Выберите номер позиции ИП", 1, 10);
            valid = valid && confirm_df.checkLength(confirm_df.input_sap_num_ts, "Номер ТС фактический", 1, 40);
            valid = valid && confirm_df.checkLength(confirm_df.input_sap_num_kpp, "№ КПП", 1, 2);
            valid = valid && confirm_df.checkLength(confirm_df.input_sap_name_forwarder, "ФИО экспедитора", 1, 40);
            //Проверка возврата САП
            if (variant != 4) valid = valid && confirm_df.checkLength(confirm_df.input_sap_ozm, "ОЗМ из (резервирования \ поставки) ", 1, 18);
            if (variant == 4) valid = valid && confirm_df.checkSelectValOfMessage(confirm_df.select_sap_ozm, "Выберите ОЗМ");
            //valid && confirm_df.checkLength(confirm_df.input_sap_ozm_bak, "ОЗМ согласно бака", 1, 18);
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
        valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_deliver_take_water_level, "Нет значения уровень п-воды в баке");
        // Проверка колонки
        valid = valid && confirm_df.checkIsNullOfMessage(confirm_df.input_deliver_dose_fuel, "Нет значения дозы");
        return valid;
    },
    // инициализация формы
    init: function () {
        confirm_df.obj = $("#confirm-deliver-fuel").dialog({
            resizable: false,
            modal: true,
            autoOpen: false,
            height: "auto",
            width: 900,
            buttons: {
                'Начать выдачу': function () {
                    var variant = confirm_df.select_variant.val();
                    // проверка правильности заполнения формы
                    var valid = confirm_df.validationConfirm(variant);
                    // Все заполненно?
                    if (valid) {
                        // Да форма заполнена
                        if (variant >= 1 && variant <= 6) {
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
                confirm_df.input_deliver_take_water_level.val('');
                if (ui.item.value !== '-1') {
                    getTankTags(ui.item.value,
                        function (result) {
                            // Обновим информацию по баку
                            confirm_df.input_deliver_take_level.val(result.level.toFixed(2));
                            confirm_df.input_deliver_take_mass.val(result.mass.toFixed(2));
                            confirm_df.input_deliver_take_temp.val(result.temp.toFixed(2));
                            confirm_df.input_deliver_take_volume.val(result.volume.toFixed(2));
                            confirm_df.input_deliver_take_dens.val(result.dens.toFixed(2));
                            confirm_df.input_deliver_take_water_level.val(result.water_level.toFixed(2));
                            confirm_df.viewCalcMass();
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
        confirm_df.input_deliver_take_water_level = $('#deliver-take-water-level');
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
            };
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
                            confirm_df.input_sap_num_ts.val(confirm_df.card.Debitor + '/' + confirm_df.card.AutoNumber + '/' + confirm_df.card.AutoModel);
                            confirm_df.input_sap_id_card.val(confirm_df.card.Id)
                        }
                        break;
                    case '6':
                        confirm_df.clear();
                        $('tr#button-sap').show();
                        $('tr#sap-num').show(); $('#label-sap-num').text('*Номер наряд допуска:');
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
            $(".validateTips").text('');
            $(".ui-state-error").removeClass("ui-state-error");
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
                    confirm_df.input_sap_num.val($.trim(confirm_df.input_sap_num.val())); // Уберем пробелы
                    var num = confirm_df.input_sap_num.val();
                    //var num = $('input#sap-num').val();
                    confirm_df.input_sap_num_pos.val($.trim(confirm_df.input_sap_num_pos.val()));// Уберем пробелы
                    var pos = confirm_df.input_sap_num_pos.val();
                    //var pos = $('input#sap-num-pos').val();

                    getReservation(
                        num,
                        pos,
                        function (result) {
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
                                        confirm_df.input_sap_num.val(result.RSNUM != "---" ? result.RSNUM : 999)
                                        //$('input#sap-num').val();
                                        confirm_df.input_sap_ozm.val(result.MATNR);
                                        confirm_df.input_sap_ozm_amount.val(result.BDMNG);
                                        confirm_df.input_sap_factory_recipient.val(result.WERKS)
                                        $('#label-sap-ozm-amount').text('Количество ' + result.MEINS + ':');
                                        if (result.RSNUM != "---") {
                                            var depots = catalog_depots.get($.trim(result.UMLGO));
                                            if (depots) {
                                                confirm_df.input_sap_stock_recipient.val('(' + depots.id + ') ' + depots.name)
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
                    var num = confirm_df.input_sap_num.val();
                    //var num = $('input#sap-num').val();
                    confirm_df.supply = null;
                    getSupply(
                        num,
                        function (result) {
                            if (result) {
                                // Проверим на возврат значений
                                if (result.length > 0 && result[0].posnr != "") {
                                    confirm_df.supply = result;
                                    var pos = [];
                                    for (i = 0; i < result.length; i++) {

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
                    $('#label-sap-ozm-amount').text('Количество ' + sup.MEINS + ':');
                    // Уточнить добавить WERKS (завод)
                };
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
            { width: 280 },
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
    Open: function (num, type) {
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
        confirm_df.kerosenes = null;  // Обнулим теги РС
        // Обновим информацию по баку
        confirm_df.input_deliver_take_level.val('').addClass('input_view');
        confirm_df.input_deliver_take_mass.val('').addClass('input_view');
        confirm_df.input_deliver_take_temp.val('').addClass('input_view');
        confirm_df.input_deliver_take_volume.val('').addClass('input_view');
        confirm_df.input_deliver_take_dens.val('').addClass('input_view');
        confirm_df.input_deliver_take_water_level.val('').addClass('input_view');

        confirm_df.select_variant.val(-1).selectmenu("refresh").selectmenu("enable"); // Сбросили выбор вариантов
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
                        { value: 6, text: 'Заправка в цистерну топливозаправщика', disabled: true },
                    ],
                    null,
                    -1,
                    null);

                var gun = guns.getGun(num);
                if (gun) {
                    confirm_df.gun = gun;
                    confirm_df.input_deliver_type_fuel.val(outFuelType(gun.type_fuel)).addClass('input_view');
                    confirm_df.input_sap_ozm_bak.val('(' + gun.type_fuel + ') ' + outFuelType(gun.type_fuel));
                    $('#deliver-Taken').prop('checked', gun.taken);
                    // Обновим перецень емкостей
                    updateOptionSelect(confirm_df.select_capacity, ozm_bak.getTanks(gun.type_fuel), null, -1, null);
                    // Получить информацию по карте
                    confirm_df.card = cards.getCardOfNumSide(gun.num_trk, gun.side);
                    // Вывести информацию по карте
                    confirm_df.viewCard();
                }
                break;

            case 1:
                confirm_df.obj.dialog("option", "title", 'Выдать топливо (разливочный стояк-' + num + ')');
                if (num == 2) {
                    // керосин
                    // Обновим варианты выдачи
                    updateOptionSelect(
                        confirm_df.select_variant,
                        [
                            { value: 1, text: 'По резервированию (керосин)' },
                            { value: 2, text: 'По резервированию (ГСМ)', disabled: true },
                            { value: 3, text: 'По исходящей поставке' },
                            { value: 4, text: 'По требованию (самовывоз)', disabled: true },
                            { value: 5, text: 'Заправка в баки ТС', disabled: true },
                            { value: 6, text: 'Заправка в цистерну топливозаправщика' },
                        ],
                        null,
                        -1,
                        null);

                } else {
                    // ДТ\92
                    // Обновим варианты выдачи
                    updateOptionSelect(
                        confirm_df.select_variant,
                        [
                            { value: 1, text: 'По резервированию (керосин)', disabled: true },
                            { value: 2, text: 'По резервированию (ГСМ)', disabled: true },
                            { value: 3, text: 'По исходящей поставке', disabled: true },
                            { value: 4, text: 'По требованию (самовывоз)', disabled: true },
                            { value: 5, text: 'Заправка в баки ТС', disabled: true },
                            { value: 6, text: 'Заправка в цистерну топливозаправщика' },
                        ],
                        null,
                        -1,
                        null);
                }
                var riser = risers.getRisers(num);
                if (riser) {
                    confirm_df.risers = riser;
                    confirm_df.input_deliver_type_fuel.val(outFuelType(riser.type_fuel));
                    confirm_df.input_sap_ozm_bak.val('(' + riser.type_fuel + ') ' + outFuelType(riser.type_fuel));
                    //$('#deliver-Taken').prop('checked', riser.taken);
                    // Обновим перецень емкостей
                    updateOptionSelect(confirm_df.select_capacity, ozm_bak.getTanks(riser.type_fuel), null, -1, null);
                    // Получить информацию по карте
                    confirm_df.card = cards.getCardOfNumSide((Number(num) + 9), 0);
                    // Вывести информацию по карте
                    confirm_df.viewCard();
                }
                break;
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
        $('tr#sap-num-pos').hide(); confirm_df.input_sap_num_pos.val('').hide().addClass('input_edit'); confirm_df.select_sap_num_pos.selectmenu("widget").hide().addClass('input_edit');;
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
            massa = Number(confirm_df.input_deliver_dose_fuel.val()) * dens * 0.001
            confirm_df.input_deliver_mase_fuel.val(massa.toFixed(2));
        } else {
            confirm_df.input_deliver_mase_fuel.val('Выберите емкость');
            confirm_df.input_deliver_dose_fuel.val('')
        }
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
    // Получить новую SAP_buffer
    getNewSAP_Buffer: function () {
        var now = new Date();
        var variant = confirm_df.select_variant.val();
        var num_pos = confirm_df.select_sap_num_pos.val();
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
            N_BAK: confirm_df.select_capacity.val(),
            OZM_BAK: fuel_type,
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
            //LGORT: variant == 3 ? confirm_df.getPosSupply(num_pos).LGORT : null, // до выяснения
            //WERKS: variant == 3 ? confirm_df.getPosSupply(num_pos).WERKS : null, // до выяснения
            LGORT: variant == 4 ? confirm_df.select_sap_stock_recipient.val() : null,
            WERKS: variant == 4 ? confirm_df.select_sap_factory_recipient.val() : null,
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
                trk_num = confirm_df.gun != null ? confirm_df.gun.num_trk : null;
                side = confirm_df.gun != null ? (confirm_df.gun.side == 0 ? false : true) : null;
                num = confirm_df.gun != null ? confirm_df.gun.num_gun : null;
                fuel_type = confirm_df.gun != null ? confirm_df.gun.type_fuel : null;
                counter = confirm_df.gun != null ? confirm_df.gun.total_volume : null;
                break;
            case 1:
                num = confirm_df.risers != null ? confirm_df.risers.num : null;
                trk_num = (9 + Number(num));
                fuel_type = confirm_df.risers != null ? confirm_df.risers.type_fuel : null;
                counter = 0; // Добавить счетчик
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
            tank_num: confirm_df.select_capacity.val(),
            id_card: confirm_df.input_sap_id_card.val(),
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
            id_sap: id_sap
        };
    }

};

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

var confirm_close_fuel = {
    obj: null,
    fs: null,
    sap: null,
    init: function () {
        confirm_close_fuel.obj = $("#dialog-close-fuel").dialog({
            modal: true,
            autoOpen: false,
            height: "auto",
            width: 700,
            buttons: {
                'Закрыть': function () {
                    if (confirm_close_fuel.fs) {
                        LockScreen("Подождите закрываю ведомость в БД");
                        // строка САП есть обновить выдачу
                        if (confirm_close_fuel.sap) {
                            confirm_close_fuel.sap.VOLUME = confirm_close_fuel.fs.volume;
                            confirm_close_fuel.sap.MASS = confirm_close_fuel.fs.mass;
                            // TODO:!!!ТЕСТ УБРАТЬ ТЕСТОВЫЙ ЗАПРЕТ ВЫДАЧИ В САП
                            if (btransferSAP_ban) {
                                var now = new Date();
                                confirm_close_fuel.sap.sending = toISOStringTZ(now);
                            }
                            putAsyncSAP_Buffer(confirm_close_fuel.sap,
                                function (result) {
                                    LockScreenOff();
                                    updateMessageTips("Запись САП обновлена результат = " + result);
                                    //alert("count update sap =" + result);
                                });
                        }
                        // строка FuelSales есть обновить выдачу
                        putAsyncFuelSales(
                            confirm_close_fuel.fs,
                            function (id) {
                                if (id > 0) {
                                    LockScreenOff();
                                    // Инициализация открытых выдач
                                    openFuelSale.init();
                                    confirm_close_fuel.obj.dialog("close");

                                }
                                updateMessageTips("Запись FuelSales обновлена результат = " + id);
                                //alert("count update FuelSales =" + id);
                            }
                        );

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
            confirm_close_fuel.obj.dialog("open");
            confirm_close_fuel.fs = null;
            confirm_close_fuel.sap = null;
            var fs = openFuelSale.getFuelSale(id);
            if (fs) {
                // Определим запись SAP
                getAsyncSAP_Buffer(
                    fs.id_sap,
                    function (result) {
                        confirm_close_fuel.sap = result;
                    });
                // обновим FuelSale
                var now = new Date();
                var trk_num = fs.trk_num
                if (trk_num > 0 && trk_num < 10) {
                    confirm_close_fuel.obj.dialog("option", "title", 'Закрыть ведомость выдачи топлива (пистолет-' + fs.num + ')');
                    $('tr#type-0').show();
                    $('tr#type-1').hide();
                    var gun = guns.getGun(fs.num);
                    if (gun) {
                        fs.volume = gun.last_out_volume; // выдано
                        fs.stop_counter = gun.total_volume; // по счетчику
                    }
                }
                if (trk_num >= 10 && trk_num <= 12) {
                    confirm_close_fuel.obj.dialog("option", "title", 'Закрыть ведомость выдачи топлива (наливной стояк-' + fs.num + ')');
                    $('tr#type-1').show();
                    $('tr#type-0').hide();
                    var riser = risers.getRisers(fs.num);
                    if (riser) {
                        fs.volume = 0;//riser.last_out_volume; // выдано
                        fs.stop_counter = 0;//riser.total_volume; // по счетчику
                    }
                }

                if (gun || riser) {
                    //fs.volume = gun.last_out_volume; // выдано
                    //fs.stop_counter = gun.total_volume; // по счетчику
                    fs.close = toISOStringTZ(now);
                    getTankTags(fs.tank_num,
                        function (result) {
                            // Обновим информацию по баку

                            fs.stop_datetime = toISOStringTZ(now);
                            fs.stop_level = result.level.toFixed(2);
                            fs.stop_mass = result.mass.toFixed(2);
                            fs.stop_temp = result.temp.toFixed(2);
                            fs.stop_volume = result.volume.toFixed(2);
                            fs.stop_density = result.dens.toFixed(2);
                            fs.stop_water_level = result.water_level.toFixed(2);

                            // Выполним расчет выданного объема и массы
                            fs.mass = 0;
                            fs.volume = fs.stop_counter - fs.start_counter;
                            // TODO:!!!ТЕСТ УБРАТЬ ТЕСТОВЫЙ ПЕРЕСЧЕТ
                            if (bIssue_test) {
                                fs.volume = fs.dose;
                            }
                            if (fs.volume > 0) {
                                fs.mass = (fs.volume * fs.start_density) * 0.001;
                            }
                            $('input#close-operator_name').val(fs.operator_name);
                            $('input#close-smena_num').val(fs.smena_num);
                            $('input#close-smena_datetime').val(fs.smena_datetime);
                            $('input#close-trk_num').val(fs.trk_num);
                            $('input#close-gun_num').val(fs.num);
                            $('input#close-num').val(fs.num);
                            $('input#close-fuel_type').val(fs.fuel_type);
                            $('input#close-tank_num').val(fs.tank_num);
                            $('input#close-id_card').val(fs.id_card);
                            $('input#close-dose').val(fs.dose);
                            $('input#close-passage').val(fs.passage);
                            $('input#close-volume').val(fs.volume);
                            $('input#close-mass').val(fs.mass);
                            $('input#close-start_datetime').val(fs.start_datetime);
                            $('input#close-start_level').val(fs.start_level);
                            $('input#close-start_volume').val(fs.start_volume);
                            $('input#close-start_density').val(fs.start_density);
                            $('input#close-start_mass').val(fs.start_mass);
                            $('input#close-start_temp').val(fs.start_temp);
                            $('input#close-start_water_level').val(fs.start_water_level);
                            $('input#close-start_counter').val(fs.start_counter);
                            $('input#close-stop_datetime').val(fs.stop_datetime);
                            $('input#close-stop_level').val(fs.stop_level);
                            $('input#close-stop_volume').val(fs.stop_volume);
                            $('input#close-stop_density').val(fs.stop_density);
                            $('input#close-stop_mass').val(fs.stop_mass);
                            $('input#close-stop_temp').val(fs.stop_temp);
                            $('input#close-stop_water_level').val(fs.stop_water_level);
                            $('input#close-stop_counter').val(fs.stop_counter);
                            //$('input#close-close').val(fs.close);
                            $('input#close-id_sap').val(fs.id_sap);
                        }
                    );
                }
                confirm_close_fuel.fs = fs;
            };
        };
    },
};

$(function () {

    // Загрузка библиотек
    loadReference = function (callback) {
        LockScreen('Инициализация данных');
        var count = 3;
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
    };

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
    // Инициализаия кнопки вывода панели "Задания выдачи и работе с SAP MII" - керосин
    $('.button-kerosene').on('click', function () {
        var kerosene = $(this).attr('data-kerosene');
        confirm_df.Open(kerosene, 2);
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

    $('.button-deliver').hide();
    $('.button-close').hide();

    // инициализация progresbar
    pb_deliver.init();
    pb_deliver.hide();
    // Инициализация открытых выдач
    openFuelSale.init();
    // Загрузка библиотек
    loadReference(function (result) {
        // Инициализаия панели  "Информация по RFID-карте"
        confirm_rfid_card.init();
        // Инициализаия панели  "Задания выдачи и работе с SAP MII"
        confirm_df.init();
        // Инициализаия панели  "Закрытия выдачи и SAP MII"
        confirm_close_fuel.init();
        // Загрузка документа
        $(document).ready(function () {
            show();
            setInterval('show()', 1000);
        });
    });
});
