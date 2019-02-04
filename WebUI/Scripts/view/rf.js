

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


// Вывод информации на экран 
function show_rf() {
    // Время
    var d = new Date();
    $('#date-value').text(toISOStringTZ(d));

}

$(function () {

    if (log) { log.info('Старт [Прием топлива]'); } // TODO:!!!ТЕСТ УБРАТЬ
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
        -1,
        function (event, ui) {
            event.preventDefault();
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
        { width: 150 },
        [{ value: '107000022', text: 'А92' }, { value: '107000023', text: 'А95' }, { value: '107000024', text: 'ДТ' }, { value: '107000027', text: 'Керосин' }],
        null,
        -1,
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
                updateOptionSelect(select_capacity, ozm_bak.getTanks(select_type_fuel.val()), null, -1, null);
            }
        },
        null);
    select_capacity = initSelect(
        $('select#reception-tank'),
        { width: 150 },
        null,
        null,
        -1,
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
