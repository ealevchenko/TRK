var select_type_rf = null;
var select_type_fuel = null;
var select_capacity = null;

var tank_railway = null;
var tank_truck = null;
var panel_add_tank = null;

var input_reception_take_level;
var input_reception_take_mass;
var input_reception_take_temp;
var input_reception_take_volume;
var input_reception_take_dens;
var input_reception_take_water_level;

var button_add_doc;

var allFields;

var open_rf = {
    operator_name: null,
    smena_num: null,
    smena_datetime: null,
    list_tank: [],
    master: 0, // Уровень прохождения мастера
    type: -1, // не выбран тип 
    fuel: -1, // тип топлива
    // автоцистерна
    truck_num_nak: null,
    truck_weight: null,
    truck_provider: null,
    // ж.д. цистерна
    railway_num_nak: null,
    railway_num_tanker: null,
    railway_provider: null,
    railway_nak_volume: null,
    railway_nak_dens: null,
    railway_nak_mass: null,
    railway_manual_level: null,
    railway_manual_volume: null,
    railway_manual_dens: null,
    railway_manual_mass: null,
    // Инициализируем при старте
    init: function () {
        this.truck_num_nak = $('input#tank-truck-num-nak').val('');
        this.truck_weight = $('input#tank-truck-weight').val('');
        this.truck_provider = $('textarea#tank-truck-provider').text('');
        this.railway_num_nak = $('input#tank-railway-num-nak').val('');
        this.railway_num_tanker = $('input#tank-railway-num-tanker').val('');
        this.railway_provider = $('textarea#tank-railway-provider').text('');
        this.railway_nak_volume = $('input#tank-railway-nak-volume').val('');
        this.railway_nak_dens = $('input#tank-railway-nak-dens').val('');
        this.railway_nak_mass = $('input#tank-railway-nak-mass').val('');
        this.railway_manual_level = $('input#tank-railway-manual-level').val('');
        this.railway_manual_volume = $('input#tank-railway-manual-volume').val('');
        this.railway_manual_dens = $('input#tank-railway-manual-dens').val('');
        this.railway_manual_mass = $('input#tank-railway-manual-mass').val('');

    },
    // Вывести показания тегов выбранных емкостей
    outTank: function () {
        if (open_rf.list_tank.length > 0) {
            var res = open_rf.list_tank.join(',');
            getTanksTags(
                res, function (result) {
                    if (result && result.length > 0) {
                        for (ir = 0; ir < result.length; ir++) {
                            $('td#tank-level-' + result[ir].num_tank).text(result[ir].level);
                            $('td#tank-volume-' + result[ir].num_tank).text(result[ir].volume);
                            $('td#tank-dens-' + result[ir].num_tank).text(result[ir].dens);
                            $('td#tank-mass-' + result[ir].num_tank).text(result[ir].mass);
                            $('td#tank-temp-' + result[ir].num_tank).text(result[ir].temp);
                            $('td#tank-water-level-' + result[ir].num_tank).text(result[ir].water_volume);
                        }
                    }
                }
            );
        }
    },
    // Получить текущего пользователя
    getCurrentUser: function (callback) {
        // Определим пользователя и смену
        getAsyncCurrentUsersActions(
            function (user) {
                if (user) {
                    open_rf.operator_name = user.UserName;
                    open_rf.smena_num = user.SessionID;
                    open_rf.smena_datetime = user.TimeStmp;
                }
                if (typeof callback === 'function') {
                    callback(user);
                }
            });
    },
    // Получить новую строку ReceivingFuel
    newReceivingFuel: function () {
        var now = new Date();
        var type = Number(open_rf.type);

        return receiving_fuel = {
            id: 0,
            operator_name: open_rf.operator_name,
            smena_num: open_rf.smena_num,
            smena_datetime: open_rf.smena_datetime,
            type: type,
            fuel: Number(open_rf.fuel),

            truck_num_nak: type === 0 ? open_rf.truck_num_nak.val() : null,
            truck_weight: type === 0 ? open_rf.truck_weight.val() : null,
            truck_provider: type === 0 ? open_rf.truck_provider.text() : null,

            railway_num_nak: type === 1 ? open_rf.railway_num_nak.val() : null,
            railway_num_tanker: type === 1 ? open_rf.railway_num_tanker.val() : null,
            railway_provider: type === 1 ? open_rf.railway_provider.text() : null,
            railway_nak_volume: type === 1 ? open_rf.railway_nak_volume.val() : null,
            railway_nak_dens: type === 1 ? open_rf.railway_nak_dens.val() : null,
            railway_nak_mass: type === 1 ? open_rf.railway_nak_mass.val() : null,
            railway_manual_level: type === 1 ? open_rf.railway_manual_level.val() : null,
            railway_manual_volume: type === 1 ? open_rf.railway_manual_volume.val() : null,
            railway_manual_dens: type === 1 ? open_rf.railway_manual_dens.val() : null,
            railway_manual_mass: type === 1 ? open_rf.railway_manual_mass.val() : null,

            start_datetime: toISOStringTZ(now),
            stop_datetime: null,
            close: null,
            sending: null
        };
    },
    // Получить новую строку ReceivingFuelTanks
    newReceivingFuelTanks: function (id_receiving_fuel, tank_fuel, tank_result) {
        var now = new Date();
        return receiving_fuel_tanks = {
            id: 0,
            id_receiving_fuel: id_receiving_fuel,
            num: tank_result.num_tank,
            fuel: tank_fuel,
            start_datetime: toISOStringTZ(now),
            start_level: tank_result.level,
            start_volume: tank_result.volume,
            start_density: tank_result.dens,
            start_mass: tank_result.mass,
            start_temp: tank_result.temp,
            start_water_level: tank_result.water_volume,
            stop_datetime: null,
            stop_level: null,
            stop_volume: null,
            stop_density: null,
            stop_mass: null,
            stop_temp: null,
            stop_water_level: null,
            close: null
        };
    }
};

// Форма подтверждения создания строки приема
var confirm_acceptance = {
    obj: null,
    init: function () {
        confirm_acceptance.obj = $("#confirm-acceptance").dialog({
            modal: true,
            title: 'Подтвердите правильность введённых данных.',
            autoOpen: false,
            height: "auto",
            width: 700,
            buttons: {
                'Начать прием': function () {
                    open_rf.master = 2;
                    //Вывести на экран шаг
                    outMasterStep();
                    LockScreen('Подождите, идет создание строки в БД');
                    // Определим текущего пользователя
                    open_rf.getCurrentUser(
                        function (user) {
                            var receiving_fuel = open_rf.newReceivingFuel();
                            postAsyncReceivingFuel(
                                receiving_fuel,
                                function (id) {
                                    if (log) { log.info('Запись строки receiving_fuel, результат id=' + id); } // TODO:!!!ТЕСТ УБРАТЬ
                                    LockScreenOff();
                                    // Данные в  сохранились?
                                    if (id > 0) {
                                        // Запись начального состояния емкостей
                                        if (open_rf.list_tank.length > 0) {
                                            var tanks = open_rf.list_tank.join(',');
                                            getTanksTags(
                                                tanks, function (result) {
                                                    if (result && result.length > 0) {
                                                        for (it = 0; it < result.length; it++) {
                                                            var receiving_fuel_tanks = open_rf.newReceivingFuelTanks(id, receiving_fuel.fuel, result[it]);

                                                        }
                                                    }
                                                }
                                            );
                                        }
                                    } else {
                                        // Ошибка, операция отменена (! нужно решить что делать далее).
                                        updateMessageTips("Ошибка создания строки для ReceivingFuel в локальной базе данных. Код ошибки=" + id + ". Операция отменена.");
                                    }
                                }
                            );
                        });
                    $(this).dialog("close");
                },
                'Отмена': function () {
                    $(this).dialog("close");
                }
            }
        });
    },
    open: function () {
        confirm_acceptance.obj.dialog("open");
        if (open_rf) {
            $('td#type-fuel-receiving').text(open_rf.type === "0" ? 'Автоцистерна' : open_rf.type === "1" ? 'Ж.Д. цистерна' : '?');
            $('td#type-fuel').text(outFuelType(Number(open_rf.fuel)));
            if (open_rf.type === "0") {
                $('tr#truck').show();
                $('tr#railway').hide();
                $('td#acceptance-tank-truck-num-nak').text(open_rf.truck_num_nak.val());
                $('td#acceptance-tank-truck-weight').text(open_rf.truck_weight.val());
                $('td#acceptance-tank-truck-provider').text(open_rf.truck_provider.text());
            }
            if (open_rf.type === "1") {
                $('tr#truck').hide();
                $('tr#railway').show();
                $('td#acceptance-tank-railway-num-nak').text(open_rf.railway_num_nak.val());
                $('td#acceptance-tank-railway-num-tanker').text(open_rf.railway_num_tanker.val());
                $('td#acceptance-tank-railway-provider').text(open_rf.railway_provider.text());
                $('td#acceptance-tank-railway-nak-volume').text(open_rf.railway_nak_volume.val());
                $('td#acceptance-tank-railway-nak-dens').text(open_rf.railway_nak_dens.val());
                $('td#acceptance-tank-railway-nak-mass').text(open_rf.railway_nak_mass.val());
                $('td#acceptance-tank-railway-manual-level').text(open_rf.railway_manual_level.val());
                $('td#acceptance-tank-railway-manual-volume').text(open_rf.railway_manual_volume.val());
                $('td#acceptance-tank-railway-manual-dens').text(open_rf.railway_manual_dens.val());
                $('td#acceptance-tank-railway-manual-mass').text(open_rf.railway_manual_mass.val());
            }
            $('td#list-tanks').text(open_rf.list_tank.join(','));
        }
    }
};

// Вывод информации на экран 
var show_rf = function () {
    // Время
    var d = new Date();
    $('#date-value').text(toISOStringTZ(d));
    open_rf.outTank();

};
// Проверка на не выбранный select
var checkSelectValOfMessage = function (o, message) {
    if (Number(o.val()) < 0) {
        o.addClass("ui-state-error");
        updateMessageTips(message);
        return false;
    } else {
        return true;
    }
};
// Проверка на пустой объект
var checkIsNullOfMessage = function (o, message) {
    if (o.val() === '' || o.val() === null) {
        o.addClass("ui-state-error");
        updateMessageTips(message);
        return false;
    } else {
        return true;
    }
};
// Проверка заполнения документов (Мастер шаг 0)
var validationAddDoc = function () {
    var valid = true;
    $(".messageTips").text('');
    $(".ui-state-error").removeClass("ui-state-error");

    valid = valid && checkSelectValOfMessage(select_type_rf, "Выберите откуда будет производится прием ГСМ (авто или ж.д цистерна)");
    if (select_type_rf.val() === "0") {
        // Проверка полей автоцистерна
        valid = valid && checkIsNullOfMessage(open_rf.truck_num_nak, "Введите номер накладной");
        valid = valid && checkIsNullOfMessage(open_rf.truck_weight, "Введите вес топлива");
        valid = valid && checkIsNullOfMessage(open_rf.truck_provider, "Укажите поставщика");
    }
    if (select_type_rf.val() === "1") {
        // Проверка полей ж.д. цистерна
        valid = valid && checkIsNullOfMessage(open_rf.railway_num_nak, "Введите номер ж.д. накладной");
        valid = valid && checkIsNullOfMessage(open_rf.railway_num_tanker, "Введите номер ж.д. цистерны");
        valid = valid && checkIsNullOfMessage(open_rf.railway_provider, "Укажите поставщика");
        valid = valid && checkIsNullOfMessage(open_rf.railway_nak_volume, "Введите объем указаный в накладной");
        valid = valid && checkIsNullOfMessage(open_rf.railway_nak_dens, "Введите плотность указаную в накладной");
        valid = valid && checkIsNullOfMessage(open_rf.railway_nak_mass, "Введите массу указаную в накладной");
        valid = valid && checkIsNullOfMessage(open_rf.railway_manual_level, "Введите уровень в цистерне по руч. измерениям");
        valid = valid && checkIsNullOfMessage(open_rf.railway_manual_volume, "Введите объем в цистерне по руч. измерениям");
        valid = valid && checkIsNullOfMessage(open_rf.railway_manual_dens, "Введите плотность в цистерне по руч. измерениям");
        valid = valid && checkIsNullOfMessage(open_rf.railway_manual_mass, "Введите массу в цистерне по руч. измерениям");
    }
    valid = valid && checkSelectValOfMessage(select_type_fuel, "Выберите тип ГСМ");

    return valid;
};
// Проверка перед приемом (Мастер шаг 1)
var validationStart = function () {
    var valid = true;
    $(".messageTips").text('');
    $(".ui-state-error").removeClass("ui-state-error");
    if (open_rf.list_tank.length > 0) {
        if (open_rf.type === "0") {
            // Проверка полей автоцистерна
            valid = valid && checkIsNullOfMessage(open_rf.truck_num_nak, "Введите номер накладной");
            valid = valid && checkIsNullOfMessage(open_rf.truck_weight, "Введите вес топлива");
            valid = valid && checkIsNullOfMessage(open_rf.truck_provider, "Укажите поставщика");
        }
        if (open_rf.type === "1") {
            // Проверка полей ж.д. цистерна
            valid = valid && checkIsNullOfMessage(open_rf.railway_num_nak, "Введите номер ж.д. накладной");
            valid = valid && checkIsNullOfMessage(open_rf.railway_num_tanker, "Введите номер ж.д. цистерны");
            valid = valid && checkIsNullOfMessage(open_rf.railway_provider, "Укажите поставщика");
            valid = valid && checkIsNullOfMessage(open_rf.railway_nak_volume, "Введите объем указаный в накладной");
            valid = valid && checkIsNullOfMessage(open_rf.railway_nak_dens, "Введите плотность указаную в накладной");
            valid = valid && checkIsNullOfMessage(open_rf.railway_nak_mass, "Введите массу указаную в накладной");
            valid = valid && checkIsNullOfMessage(open_rf.railway_manual_level, "Введите уровень в цистерне по руч. измерениям");
            valid = valid && checkIsNullOfMessage(open_rf.railway_manual_volume, "Введите объем в цистерне по руч. измерениям");
            valid = valid && checkIsNullOfMessage(open_rf.railway_manual_dens, "Введите плотность в цистерне по руч. измерениям");
            valid = valid && checkIsNullOfMessage(open_rf.railway_manual_mass, "Введите массу в цистерне по руч. измерениям");
        }
    } else {
        updateMessageTips("Выберите резервуар(ы) для приема ГСМ");
        valid = valid && false;
    }
    return valid;
};
// Вывести состояние элементов на экран в зависимости от мастера
var outMasterStep = function () {
    switch (open_rf.master) {
        case 0:
            button_add_doc.show();
            button_start.hide();
            button_close.hide();
            panel_add_tank.hide();

            select_type_rf.selectmenu("enable");
            select_type_fuel.selectmenu("enable");
            open_rf.truck_num_nak.attr("disabled", false);
            open_rf.truck_weight.attr("disabled", false);
            open_rf.truck_provider.attr("disabled", false);
            open_rf.railway_num_nak.attr("disabled", false);
            open_rf.railway_num_tanker.attr("disabled", false);
            open_rf.railway_provider.attr("disabled", false);
            open_rf.railway_nak_volume.attr("disabled", false);
            open_rf.railway_nak_dens.attr("disabled", false);
            open_rf.railway_nak_mass.attr("disabled", false);
            open_rf.railway_manual_level.attr("disabled", false);
            open_rf.railway_manual_volume.attr("disabled", false);
            open_rf.railway_manual_dens.attr("disabled", false);
            open_rf.railway_manual_mass.attr("disabled", false);

            break;
        case 1:
            button_add_doc.hide();
            button_start.show();
            button_close.hide();
            panel_add_tank.show();
            select_type_rf.selectmenu("disable");
            select_type_fuel.selectmenu("disable");
            //open_rf.truck_num_nak.attr("disabled", true);

            break;
        case 2:
            button_add_doc.hide();
            button_start.hide();
            button_close.show();
            panel_add_tank.hide();

            select_type_rf.selectmenu("disable");
            select_type_fuel.selectmenu("disable");
            open_rf.truck_num_nak.attr("disabled", true);
            open_rf.truck_weight.attr("disabled", true);
            open_rf.truck_provider.attr("disabled", true);
            open_rf.railway_num_nak.attr("disabled", true);
            open_rf.railway_num_tanker.attr("disabled", true);
            open_rf.railway_provider.attr("disabled", true);
            open_rf.railway_nak_volume.attr("disabled", true);
            open_rf.railway_nak_dens.attr("disabled", true);
            open_rf.railway_nak_mass.attr("disabled", true);
            open_rf.railway_manual_level.attr("disabled", true);
            open_rf.railway_manual_volume.attr("disabled", true);
            open_rf.railway_manual_dens.attr("disabled", true);
            open_rf.railway_manual_mass.attr("disabled", true);
    }
};

$(function () {

    if (log) { log.info('Старт [Прием топлива]'); } // TODO:!!!ТЕСТ УБРАТЬ

    button_add_doc = $('button#button-add-doc');
    button_add_doc.hide();
    button_add_doc.on('click', function () {
        event.preventDefault();
        var valid = validationAddDoc();
        if (valid === true) {
            open_rf.master = 1;
            // Вывести на экран шаг
            outMasterStep();
        }
    });
    button_start = $('button#button-start');
    button_start.hide();
    button_start.on('click', function () {
        event.preventDefault();
        var valid = validationStart();
        if (valid === true) {

            confirm_acceptance.open();
            // open_rf.master = 2;
            // Вывести на экран шаг
            //outMasterStep();
        }
    });
    button_close = $('button#button-close');
    button_close.hide();

    // Инициализаия кнопки
    $('button#button-add-tank').on('click', function () {
        event.preventDefault();
        var tank_num = select_capacity.val();
        if (tank_num !== "-1") {
            open_rf.list_tank.push(tank_num); // добавим в список
            $('div#add-tanks')
                .append('<div id="tank-' + tank_num + '" class="fuel-receiving-hopper">' +
                    '<fieldset>' +
                    '<legend>Резурвуар № <label>' + tank_num + '</label></legend>' +
                    '<table class="table-striped table-fuel-receiving-hopper">' +
                    '    <tr>' +
                    '        <th>Уровень (мм) :</th>' +
                    '        <td id="tank-level-' + tank_num + '"></td>' +
                    '    </tr>' +
                    '    <tr>' +
                    '        <th>Объем (л) :</th>' +
                    '        <td id="tank-volume-' + tank_num + '"></td>' +
                    '    </tr>' +
                    '    <tr>' +
                    '        <th>Плотность (кг/м3) :</th>' +
                    '        <td id="tank-dens-' + tank_num + '"></td>' +
                    '    </tr>' +
                    '    <tr>' +
                    '        <th>Масса (кг) :</th>' +
                    '        <td id="tank-mass-' + tank_num + '"></td>' +
                    '    </tr>' +
                    '    <tr>' +
                    '        <th>Температура (С°) :</th>' +
                    '        <td id="tank-temp-' + tank_num + '"></td>' +
                    '    </tr>' +
                    '    <tr>' +
                    '        <th>Уровень п-воды (мм) :</th>' +
                    '        <td id="tank-water-level-' + tank_num + '"></td>' +
                    '    </tr>' +
                    '    <tr><th colspan="2"><button id="button-close-tank-' + tank_num + '" class="ui-button ui-widget ui-corner-all button-close">Закрыть</button></th></tr>' +
                    '</table>' +
                    '</fieldset>' +
                    '</div >');
        } else {
            checkSelectValOfMessage(select_capacity, "Выберите резервуар для приема ГСМ");
        }
        updateOptionSelect(select_capacity, ozm_bak.getTanks(select_type_fuel.val()), null, -1, open_rf.list_tank);
    });

    $('button#button-clear').on('click', function () {
        event.preventDefault();
        $('div#add-tanks').empty();
        open_rf.list_tank = [];

        updateOptionSelect(select_capacity, ozm_bak.getTanks(select_type_fuel.val()), null, -1, open_rf.list_tank);
    });


    // Загрузка библиотек
    //loadReference = function (callback) {
    //    LockScreen('Инициализация данных');
    //    var count = 3;
    //     Загрузка (common.js)
    //    getCatalogOZM(function (result) {
    //        catalog_ozm.list = result;
    //        count -= 1;
    //        if (count <= 0) {
    //            if (typeof callback === 'function') {
    //                LockScreenOff();
    //                callback();
    //            }
    //        }
    //    });
    //     Загрузка (common.js)
    //    getCatalogDepots(function (result) {
    //        catalog_depots.list = result;
    //        count -= 1;
    //        if (count <= 0) {
    //            if (typeof callback === 'function') {
    //                LockScreenOff();
    //                callback();
    //            }
    //        }
    //    });
    //     Загрузка (common.js)
    //    getCatalogWerks(function (result) {
    //        catalog_werks.list = result;
    //        count -= 1;
    //        if (count <= 0) {
    //            if (typeof callback === 'function') {
    //                LockScreenOff();
    //                callback();

    //            }
    //        }
    //    });
    //};

    // Загрузка библиотек
    //loadReference(function (result) {
    open_rf.init(); // инициализируем

    confirm_acceptance.init(); // инициализируем форму подтверждения приема 

    tank_railway = $('div#tank-railway').hide(); // документы жд цистерна
    tank_truck = $('div#tank-truck').hide(); // документы автоцистерна

    panel_add_tank = $('div.input-tank').hide(); // панель выбора резервуаров

    input_reception_take_level = $('input#reception-tank-level');
    input_reception_take_mass = $('input#reception-tank-mass');
    input_reception_take_temp = $('input#reception-tank-temp');
    input_reception_take_volume = $('input#reception-tank-volume');
    input_reception_take_dens = $('input#reception-tank-dens');
    input_reception_take_water_level = $('input#reception-tank-water-level');


    // Настроим откуда принимаем
    select_type_rf = initSelect(
        $('select#type-fuel-receiving'),
        { width: 150 },
        [{ value: '0', text: 'Автоцистерна' }, { value: '1', text: 'Ж.д.цистерна' }],
        null,
        open_rf.type,
        function (event, ui) {
            event.preventDefault();
            $(".messageTips").text('');
            open_rf.type = ui.item.value; // Сохраним состояние
            if (ui.item.value !== '-1') {
                if (ui.item.value === '0') {
                    // Автоцистерна
                    tank_railway.hide();
                    tank_truck.show();
                }
                if (ui.item.value === '1') {
                    //ж.д. цистерна
                    tank_railway.show();
                    tank_truck.hide();
                }
            } else {
                tank_railway.hide();
                tank_truck.hide();
            }
        },
        null);
    // Настроим тип топлива
    select_type_fuel = initSelect(
        $('select#type-fuel'),
        { width: 120 },
        [{ value: '107000022', text: 'А92' }, { value: '107000023', text: 'А95' }, { value: '107000024', text: 'ДТ' }, { value: '107000027', text: 'Керосин' }],
        null,
        open_rf.fuel,
        function (event, ui) {
            event.preventDefault();
            $(".messageTips").text('');
            // Обновим информацию по баку
            input_reception_take_level.val('');
            input_reception_take_mass.val('');
            input_reception_take_temp.val('');
            input_reception_take_volume.val('');
            input_reception_take_dens.val('');
            input_reception_take_water_level.val('');
            if (ui.item.value !== '-1') {
                open_rf.fuel = ui.item.value;
                updateOptionSelect(select_capacity, ozm_bak.getTanks(select_type_fuel.val()), null, -1, open_rf.list_tank);
            }
        },
        null);
    // Настроим список емкостей по типу топлива
    select_capacity = initSelect(
        $('select#reception-tank'),
        { width: 120 },
        null,
        null,
        -1,
        function (event, ui) {
            event.preventDefault();
            $(".messageTips").text('');
            // Обновим информацию по баку
            input_reception_take_level.val('');
            input_reception_take_mass.val('');
            input_reception_take_temp.val('');
            input_reception_take_volume.val('');
            input_reception_take_dens.val('');
            input_reception_take_water_level.val('');
            if (ui.item.value !== '-1') {
                getTankTags(ui.item.value,
                    function (result) {
                        // Обновим информацию по баку
                        input_reception_take_level.val(result.level.toFixed(2));
                        input_reception_take_mass.val(result.mass.toFixed(2));
                        input_reception_take_temp.val(result.temp.toFixed(2));
                        input_reception_take_volume.val(result.volume.toFixed(2));
                        input_reception_take_dens.val(result.dens.toFixed(2));
                        input_reception_take_water_level.val(result.water_level.toFixed(2));
                    }
                );
            }
        },
        null);
    // Вывести на экран шаг
    outMasterStep();
    // Определим все поля для проверки валидации
    allFields = $([])
        .add(select_type_rf)
        .add(select_type_fuel)
        .add(select_capacity)
        .add(open_rf.truck_num_nak)
        .add(open_rf.truck_weight)
        .add(open_rf.truck_provider)
        .add(open_rf.railway_num_nak)
        .add(open_rf.railway_num_tanker)
        .add(open_rf.railway_provider)
        .add(open_rf.railway_nak_volume)
        .add(open_rf.railway_nak_dens)
        .add(open_rf.railway_nak_mass)
        .add(open_rf.railway_manual_level)
        .add(open_rf.railway_manual_volume)
        .add(open_rf.railway_manual_dens)
        .add(open_rf.railway_manual_mass);

    // Загрузка документа
    $(document).ready(function () {
        show_rf();
        setInterval('show_rf()', 1000);
    });
    //});
});
