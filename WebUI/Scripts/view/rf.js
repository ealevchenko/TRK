

var select_type_rf = null;
var select_type_fuel = null;
var select_capacity = null;

var tank_railway = null;
var tank_truck = null;

var input_reception_take_level;
var input_reception_take_mass;
var input_reception_take_temp;
var input_reception_take_volume;
var input_reception_take_dens;
var input_reception_take_water_level;

var open_rf = {
    list_tank: [],
    type: -1, // не выбран тип 
    fuel: -1, // тип топлива

};

// Вывод информации на экран 
var show_rf = function () {
    // Время
    var d = new Date();
    $('#date-value').text(toISOStringTZ(d));


};

$(function () {

    if (log) { log.info('Старт [Прием топлива]'); } // TODO:!!!ТЕСТ УБРАТЬ
    // Инициализаия кнопки
    $('button#button-add-tank').on('click', function () {
        event.preventDefault();
        var tank_num = select_capacity.val();
        open_rf.list_tank.push(tank_num);
        if (tank_num !== "-1") {
            $('div#add-tanks')
                .append('<div id="tank-' + tank_num + '" class="fuel-receiving-hopper">' +
                '<fieldset>' +
                '<legend>Резурвуар № <label>' + tank_num +'</label></legend>' +
                '<table class="table-striped table-fuel-receiving-hopper">' +
                '    <tr>' +
                '        <th>Уровень (мм) :</th>' +
                '        <td id="tank-level-' + tank_num +'"></td>' +
                '    </tr>' +
                '    <tr>' +
                '        <th>Объем (л) :</th>' +
                '        <td id="tank-volume-' + tank_num +'"></td>' +
                '    </tr>' +
                '    <tr>' +
                '        <th>Плотность (кг/м3) :</th>' +
                '        <td id="tank-dens-' + tank_num +'"></td>' +
                '    </tr>' +
                '    <tr>' +
                '        <th>Масса (кг) :</th>' +
                '        <td id="tank-mass-' + tank_num +'"></td>' +
                '    </tr>' +
                '    <tr>' +
                '        <th>Температура (С°) :</th>' +
                '        <td id="tank-temp-' + tank_num +'"></td>' +
                '    </tr>' +
                '    <tr>' +
                '        <th>Уровень п-воды (мм) :</th>' +
                '        <td id="tank-water-level-' + tank_num +'"></td>' +
                '    </tr>' +
                '    <tr><th colspan="2"><button id="button-close-tank-' + tank_num +'" class="ui-button ui-widget ui-corner-all button-close">Закрыть</button></th></tr>' +
                '</table>' +
                '</fieldset>' +
                '</div >');
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

    tank_railway = $('div#tank-railway').hide();
    tank_truck = $('div#tank-truck').hide();

    input_reception_take_level = $('input#reception-tank-level');
    input_reception_take_mass = $('input#reception-tank-mass');
    input_reception_take_temp = $('input#reception-tank-temp');
    input_reception_take_volume = $('input#reception-tank-volume');
    input_reception_take_dens = $('input#reception-tank-dens');
    input_reception_take_water_level = $('input#reception-tank-water-level');

    select_type_rf = initSelect(
        $('select#type-fuel-receiving'),
        { width: 150 },
        [{ value: '0', text: 'Автоцистерна' }, { value: '1', text: 'Ж.д.цистерна' }],
        null,
        open_rf.type,
        function (event, ui) {
            event.preventDefault();
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
            }
        },
        null);
    select_type_fuel = initSelect(
        $('select#type-fuel'),
        { width: 120 },
        [{ value: '107000022', text: 'А92' }, { value: '107000023', text: 'А95' }, { value: '107000024', text: 'ДТ' }, { value: '107000027', text: 'Керосин' }],
        null,
        open_rf.fuel,
        function (event, ui) {
            event.preventDefault();
            // Обновим информацию по баку
            input_reception_take_level.val('');
            input_reception_take_mass.val('');
            input_reception_take_temp.val('');
            input_reception_take_volume.val('');
            input_reception_take_dens.val('');
            input_reception_take_water_level.val('');
            if (ui.item.value !== '-1') {
                updateOptionSelect(select_capacity, ozm_bak.getTanks(select_type_fuel.val()), null, -1, open_rf.list_tank);
            }
        },
        null);
    select_capacity = initSelect(
        $('select#reception-tank'),
        { width: 120 },
        null,
        null,
        -1,
        function (event, ui) {
            event.preventDefault();
            open_rf.fuel = ui.item.value; // Сохраним сотояние
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
    // Загрузка документа
    $(document).ready(function () {
        show_rf();
        setInterval('show_rf()', 1000);
    });
    //});
});
