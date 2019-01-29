

var select_type_rf = null;

// Вывод информации на экран 
function show_rf() {
    // Время
    var d = new Date();
    $('#date-value').text(toISOStringTZ(d));

};

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

    select_type_rf=initSelect(
            $('select#type-fuel-receiving'),
            { width: 150 },
            null,
            null,
            -1,
            function (event, ui) {
                event.preventDefault();
                if (ui.item.value !== '-1') {

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