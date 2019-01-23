// TODO:!!!ТЕСТ УБРАТЬ
var ntype_test = Number(type_test);
// TODO:!!!ТЕСТ УБРАТЬ
var bIssue_test = $.parseJSON(issue_test);
// TODO:!!!ТЕСТ УБРАТЬ
var btransferSAP_ban = $.parseJSON(transferSAP_ban);
// TODO:!!!ТЕСТ УБРАТЬ
var bcontrolTRK_ban = $.parseJSON(controlTRK_ban);

// TODO:!!!ТЕСТ УБРАТЬ
var supply_out =
    [
        {
            "vbeln": "8000000020",
            "posnr": "000001",
            "MATNR": "000000000000000259",
            "WERKS": "0010",
            "LGORT": "706G",
            "KUNNR": "4000000600",
            "LFIMG": "3542.01",
            "LGOBE": "",
            "MEINS": "TO"
        },
        {
            "vbeln": "8000000020",
            "posnr": "000011",
            "MATNR": "000000000000000122",
            "WERKS": "0010",
            "LGORT": "",
            "KUNNR": "4000000600",
            "LFIMG": "3542.01",
            "LGOBE": "",
            "MEINS": "TO"
        },
        {
            "vbeln": "8000000020",
            "posnr": "000021",
            "MATNR": "000000000000000123",
            "WERKS": "0010",
            "LGORT": "",
            "KUNNR": "4000000600",
            "LFIMG": "3542.01",
            "LGOBE": "",
            "MEINS": "TO"
        }
    ]
// TODO:!!!ТЕСТ УБРАТЬ
var reservation_out = { "RSNUM": "0003052703", "RSPOS": "0001", "MATNR": "000000000310008399", "WERKS": "0010", "LGORT": "424 ", "UMLGO": "184 ", "UMWRK": "0010", "BDMNG": "0.4", "ENMNG": "0.365", "LGOBE": "ЦС ГСМ", "MEINS": "TO" };
// TODO:!!!ТЕСТ УБРАТЬ
var bunk_out =
    { "num_tank": "B9", "dens": 754.065493, "fill_percent": 35.194191766997911, "level": 1060.24, "mass": 18934.58452923, "status1": 64, "status2": 48, "status": 0, "temp": -1.8, "ullage": 46237, "unit": null, "volume": 2511.0, "water_level": 0.0, "water_volume": 0.0 }    //{ "num_tank": "B2", "dens": 769.206967, "fill_percent": 29.265209819673053, "level": 93490, "mass": 16028.734778345999, "status1": 64, "status2": 48, "status": 0, "temp": -23, "ullage": 50366, "unit": null, "volume": 20838, "water_level": 36, "water_volume": 0 };
// TODO:!!!ТЕСТ УБРАТЬ
var guns_out = [
    { "num_trk": 1, "num_gun": 1, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000024 },
    { "num_trk": 1, "num_gun": 2, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000024 },
    { "num_trk": 2, "num_gun": 3, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000024 },
    { "num_trk": 2, "num_gun": 4, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000024 },
    { "num_trk": 3, "num_gun": 5, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000024 },
    { "num_trk": 3, "num_gun": 6, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000024 },
    { "num_trk": 4, "num_gun": 7, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000024 },
    { "num_trk": 4, "num_gun": 8, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000024 },
    { "num_trk": 5, "num_gun": 9, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
    { "num_trk": 5, "num_gun": 10, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
    { "num_trk": 6, "num_gun": 11, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": true, "passage": false, "price_to_write": 0, "start": false, "state": 1, "stop": false, "taken": true, "total_volume": 56902228, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
    { "num_trk": 6, "num_gun": 12, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
    { "num_trk": 7, "num_gun": 13, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
    { "num_trk": 7, "num_gun": 14, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
    { "num_trk": 7, "num_gun": 15, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000023 },
    { "num_trk": 7, "num_gun": 16, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000023 },
    { "num_trk": 7, "num_gun": 17, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
    { "num_trk": 7, "num_gun": 18, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
    { "num_trk": 7, "num_gun": 19, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000023 },
    { "num_trk": 7, "num_gun": 20, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000023 },
    { "num_trk": 8, "num_gun": 21, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000023 },
    { "num_trk": 8, "num_gun": 22, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000023 },
    { "num_trk": 8, "num_gun": 23, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
    { "num_trk": 8, "num_gun": 24, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
    { "num_trk": 8, "num_gun": 25, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000023 },
    { "num_trk": 8, "num_gun": 26, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000023 },
    { "num_trk": 8, "num_gun": 27, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
    { "num_trk": 8, "num_gun": 28, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
    { "num_trk": 9, "num_gun": 29, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000024 }
]
// TODO:!!!ТЕСТ УБРАТЬ
var rfid_out = [
    { "num_trk": 1, "side": 0, "hi": 0, "lo": 0, "online": false, "ready": false, "status": 0, "card": null },
    { "num_trk": 1, "side": 1, "hi": 0, "lo": 0, "online": false, "ready": false, "status": 0, "card": null },
    { "num_trk": 2, "side": 0, "hi": 0, "lo": 0, "online": false, "ready": false, "status": 0, "card": null },
    { "num_trk": 2, "side": 1, "hi": 0, "lo": 0, "online": false, "ready": false, "status": 0, "card": null },
    { "num_trk": 3, "side": 0, "hi": 0, "lo": 0, "online": false, "ready": false, "status": 0, "card": null },
    { "num_trk": 3, "side": 1, "hi": 0, "lo": 0, "online": false, "ready": false, "status": 0, "card": null },
    { "num_trk": 4, "side": 0, "hi": 0, "lo": 0, "online": false, "ready": false, "status": 0, "card": null },
    { "num_trk": 4, "side": 1, "hi": 0, "lo": 0, "online": false, "ready": false, "status": 0, "card": null },
    { "num_trk": 5, "side": 0, "hi": 0, "lo": 0, "online": false, "ready": false, "status": 0, "card": null },
    { "num_trk": 5, "side": 1, "hi": 0, "lo": 0, "online": false, "ready": false, "status": 0, "card": null },
    { "num_trk": 6, "side": 0, "hi": 0, "lo": 0, "online": true, "ready": false, "status": 0, "card": null },
    { "num_trk": 6, "side": 1, "hi": 0, "lo": 0, "online": true, "ready": false, "status": 0, "card": null },
    { "num_trk": 7, "side": 0, "hi": 0, "lo": 0, "online": false, "ready": false, "status": 0, "card": null },
    { "num_trk": 7, "side": 1, "hi": 0, "lo": 0, "online": false, "ready": false, "status": 0, "card": null },
    { "num_trk": 8, "side": 0, "hi": 0, "lo": 0, "online": false, "ready": false, "status": 0, "card": null },
    { "num_trk": 8, "side": 1, "hi": 0, "lo": 0, "online": false, "ready": false, "status": 0, "card": null },
    { "num_trk": 9, "side": 0, "hi": 0, "lo": 0, "online": false, "ready": false, "status": 0, "card": null },
    { "num_trk": 10, "side": 0, "hi": 0, "lo": 0, "online": true, "ready": false, "status": 0, "card": null },
    { "num_trk": 11, "side": 0, "hi": 0, "lo": 0, "online": false, "ready": false, "status": 0, "card": null },
    { "num_trk": 12, "side": 0, "hi": 0, "lo": 0, "online": false, "ready": false, "status": null, "card": null }
];
// TODO:!!!ТЕСТ УБРАТЬ
var dio_out =
    [
        { "num": 1, "type_fuel": 107000024, "Counter": 69750387261, "CounterResetable": 0, "CountOn": 1781, "Error": 0, "Flow": 0, "Flow2": 0.0, "Freq": 0, "PiontsCount": 6, "Status": 0, "Temp": -0.9375, "TimerLiveOn": 5530357, "TimerOn": 365495 },
        { "num": 2, "type_fuel": 107000027, "Counter": null, "CounterResetable": null, "CountOn": null, "Error": null, "Flow": null, "Flow2": null, "Freq": null, "PiontsCount": null, "Status": null, "Temp": null, "TimerLiveOn": null, "TimerOn": null },
        { "num": 3, "type_fuel": 107000022, "Counter": null, "CounterResetable": null, "CountOn": null, "Error": null, "Flow": null, "Flow2": null, "Freq": null, "PiontsCount": null, "Status": null, "Temp": null, "TimerLiveOn": null, "TimerOn": null }
];
// TODO:!!!ТЕСТ УБРАТЬ
var risers_out = [
    {
        "num": 1,
        "type_fuel": 107000024,
        "door": false,
        "power": false,
        "flg_kv1": false,
        "flg_kv2": false,
        "inp_km": true,
        "inp_kvq1": true,
        "inp_kvq2": true,
        "inp_sa2": true,
        "out_kv1": false,
        "out_kv2": false
    },
    {
        "num": 2,
        "type_fuel": 107000027,
        "door": false,
        "power": false,
        "flg_kv1": false,
        "flg_kv2": false,
        "inp_km": true,
        "inp_kvq1": true,
        "inp_kvq2": true,
        "inp_sa2": false,
        "out_kv1": false,
        "out_kv2": false
    },
    {
        "num": 3,
        "type_fuel": 107000022,
        "door": false,
        "power": false,
        "flg_kv1": false,
        "flg_kv2": false,
        "inp_km": true,
        "inp_kvq1": true,
        "inp_kvq2": false,
        "inp_sa2": true,
        "out_kv1": false,
        "out_kv2": false
    }
];
/* ----------------------------------------------------------
    Блокировка экрана
-------------------------------------------------------------*/
// Блокировать с текстом
var LockScreen = function (message) {
    var lock = document.getElementById('lockPanel');
    if (lock)
        lock.className = 'LockOn';
    lock.innerHTML = message;
}
// Разблокировать 
var LockScreenOff = function () {
    var lock = document.getElementById('lockPanel');
    if (lock)
        lock.className = 'LockOff';
}
/* ----------------------------------------------------------
    Функции работы с масивами
-------------------------------------------------------------*/
// Поиск элемента массива по ключу по всем объектам включая и вложенные
var getAllObjects = function (obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] === 'object') {
            objects = objects.concat(getAllObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}
// Поиск элемента массива по ключу по первому уровню 
var getObjects = function (obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] === 'object') {
            objects = objects.concat(getChildObjects(obj[i], key, val));
        } else
            if (i == key && obj[key] == val) {
                objects.push(obj);
            }
    }
    return objects;
}
// Поиск элемента массива во вложенных обектах второго уровня 
var getChildObjects = function (obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] === 'object' & false == true) {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else
            if (i == key && obj[key] == val) {
                objects.push(obj);
            }
    }
    return objects;
}

// Коррекция вывода даты с учетом зоны
var toISOStringTZ = function (date) {
    return new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
}

var outVal = function (i) {
    return i != null ? Number(i) : '';
};
// Тип топлива
var outFuelType = function (i) {
    switch (i) {
        case 107000022: return "А92";
        case 107000023: return "А95";
        case 107000024: return "ДТ";
        case 107000027: return "Керосин";
        default: return i;
    }
};
// Инициализация компонента Select
var initSelect = function (obj_select, property, data, callback_option, value_select, event_change, exceptions_value) {
    var options = [];
    var lang = 'ru';
    // Проверка выбор неопределен
    if (value_select == -1) {
        options.push("<option value='-1' >" + (lang == 'en' ? 'Select...' : 'Выберите...') + "</option>");
    }
    if (data != null) {
        for (i = 0; i < data.length; i++) {
            var option = { value: data[i].value, text: data[i].text, disabled: data[i].disabled }
            // Преобразовать формат
            if (typeof callback_option === 'function') {
                option = callback_option(data[i]);
            }
            if (option != null) {
                if (exceptions_value != null) {
                    if (exceptions_value.indexOf(option.value) == -1) {
                        options.push("<option value='" + option.value + "' " + (option.disabled ? "disabled='disabled'" : "") + ">" + option.text + "</option>");
                    }
                } else {
                    options.push("<option value='" + option.value + "' " + (option.disabled ? "disabled='disabled'" : "") + ">" + option.text + "</option>");
                }
            }
        }
    }
    obj_select.empty();
    obj_select.selectmenu({
        icons: { button: "ui-icon ui-icon-circle-triangle-s" },
        width: property.width,
        change: event_change,
    }).selectmenu("menuWidget").addClass("overflow");;
    // Заполним селект 
    obj_select.append(options.join(""))
        .val(value_select)
        .selectmenu("refresh");
    return obj_select;
}
// Обновим компонента Select
var updateOptionSelect = function (obj_select, data, callback_option, value_select, exceptions_value) {
    var options = [];
    var lang = 'ru';
    // Проверка выбор неопределен
    if (value_select == -1) {
        options.push("<option value='-1' >" + (lang == 'en' ? 'Select...' : 'Выберите...') + "</option>");
    }
    if (data != null) {
        for (i = 0; i < data.length; i++) {
            var option = { value: data[i].value, text: data[i].text, disabled: data[i].disabled }
            // Преобразовать формат
            if (typeof callback_option === 'function') {
                option = callback_option(data[i]);
            }
            if (option != null) {
                if (exceptions_value != null) {
                    if (exceptions_value.indexOf(option.value) == -1) {
                        options.push("<option value='" + option.value + "' " + (option.disabled ? "disabled='disabled'" : "") + ">" + option.text + "</option>");
                    }
                } else {
                    options.push("<option value='" + option.value + "' " + (option.disabled ? "disabled='disabled'" : "") + ">" + option.text + "</option>");
                }
            }
        }
    }
    // Заполним селект 
    obj_select.empty()
        .append(options.join(""))
        .val(value_select)
        .selectmenu("refresh");
}

/* ----------------------------------------------------------
    Обработчики ajax - функций
-------------------------------------------------------------*/
// Событие перед запросом
var AJAXBeforeSend = function () {
    //OnBegin();
}
// Обработка ошибок
var OnAJAXError = function (x, y, z) {
    //LockScreenOff();
    //confirm_df.updateTips(x.statusText);
    if (x.status != 404) {
        //confirm_df.updateTips(x.statusText);
        //alert(x + '\n' + y + '\n' + z);
    }
    //LockScreenOff();
}
// Обработка ошибок
var OnAJAXErrorOfMessage = function (message) {
    confirm_df.updateTips(message);
    //switch(source){
    //    case 'getReservation':
    //        confirm_df.updateTips("Ошибка получения данных из САП по номеру резервирования");
    //        break;
    //}
}

// Событие после выполнения
var AJAXComplete = function () {
    //LockScreenOff();
}
// Прочесть теги бака
var getTankTags = function (num, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/trk/tank/num/' + num,
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                // TODO:!!!ТЕСТ УБРАТЬ
                if (ntype_test == 1) {
                    callback(bunk_out);
                } else {
                    callback(data);
                }
            }
        },
        error: function (x, y, z) {
            // TODO:!!!ТЕСТ УБРАТЬ
            if (ntype_test == 2) {
                if (typeof callback === 'function') {
                    callback(bunk_out);
                }
            } else {
                OnAJAXError(x, y, z);
            }


        },
        complete: function () {
            AJAXComplete();
        },
    });
}
// Прочесть теги пистолетов
var getGunTags = function (callback) {
    $.ajax({
        type: 'GET',
        url: '/api/trk/guns',
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                // TODO:!!!ТЕСТ УБРАТЬ
                if (ntype_test == 1) {
                    callback(guns_out);
                } else {
                    callback(data);
                }
            }
        },
        error: function (x, y, z) {
            // TODO:!!!ТЕСТ УБРАТЬ
            if (ntype_test == 2) {
                if (typeof callback === 'function') {
                    callback(guns_out);
                }
            } else {
                OnAJAXError(x, y, z);
            }

        },
        complete: function () {
            AJAXComplete();
        },
    });
}
// Прочесть теги rfid
var getRFIDTags = function (callback) {
    $.ajax({
        type: 'GET',
        url: '/api/trk/rfid/tags',
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            // TODO:!!!ТЕСТ УБРАТЬ
            if (ntype_test == 2) {
                if (typeof callback === 'function') {
                    callback(rfid_out);
                }
            } else {
                OnAJAXError(x, y, z);
            }

        },
        complete: function () {
            AJAXComplete();
        },
    });
}
// Прочесть теги DIORisers
var getDIORisersTags = function (callback) {
    $.ajax({
        type: 'GET',
        url: '/api/trk/dio/risers/tags',
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                // TODO:!!!ТЕСТ УБРАТЬ
                if (ntype_test == 1) {
                    callback(dio_out);
                } else {
                    callback(data);
                }
            }
        },
        error: function (x, y, z) {
            // TODO:!!!ТЕСТ УБРАТЬ
            if (ntype_test == 2) {
                if (typeof callback === 'function') {
                    callback(dio_out);
                }
            } else {
                OnAJAXError(x, y, z);
            }

        },
        complete: function () {
            AJAXComplete();
        },
    });
}
// Прочесть теги Risers
var getRisersTags = function (callback) {
    $.ajax({
        type: 'GET',
        url: '/api/trk/risers/tags',
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                // TODO:!!!ТЕСТ УБРАТЬ
                if (ntype_test == 1) {
                    callback(risers_out);
                } else {
                    callback(data);
                }
            }
        },
        error: function (x, y, z) {
            // TODO:!!!ТЕСТ УБРАТЬ
            if (ntype_test == 2) {
                if (typeof callback === 'function') {
                    callback(risers_out);
                }
            } else {
                OnAJAXError(x, y, z);
            }

        },
        complete: function () {
            AJAXComplete();
        },
    });
}
// Считать считаные карты по ТРК из буфера БД
var getRFIDDB = function (callback) {
    $.ajax({
        type: 'GET',
        url: '/api/rfid/db',
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
// Резервирование
var getReservation = function (num, pos, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/sap/reservation/num/' + num + '/pos/' + pos,
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            // TODO:!!!ТЕСТ УБРАТЬ
            if (ntype_test == 1) {
                if (typeof callback === 'function') {
                    callback(reservation_out);
                }
            } else {
                if (pos == "" || pos == null) {
                    OnAJAXErrorOfMessage("Ошибка получения данных из САП по резервированию. Укажите номер позиции.");
                }
                if (num == "" || num == null) {
                    OnAJAXErrorOfMessage("Ошибка получения данных из САП по резервированию. Укажите номер резервирования.");
                }
            }
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
// Поставки
var getSupply = function (post, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/sap/supply/post/' + post,
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            // TODO:!!!ТЕСТ УБРАТЬ
            if (ntype_test == 1) {
                if (typeof callback === 'function') {
                    callback(supply_out);
                }
            } else {
                if (post == "") {
                    OnAJAXErrorOfMessage("Ошибка получения данных из САП по ИП. Укажите номер ИП.");
                }
            }

        },
        complete: function () {
            AJAXComplete();
        },
    });
}
//Получить OZM из внутрененго справочника
var getCatalogOfOZM = function (id, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/catalog/ozm/id/' + id,
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
//Получить список всех OZM из внутрененго справочника
var getCatalogOZM = function (callback) {
    $.ajax({
        type: 'GET',
        url: '/api/catalog/ozm/all',
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
// Получить склад
var getCatalogOfDepots = function (id, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/catalog/depots/id/' + id,
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
// Получить Depots
var getCatalogDepots = function (callback) {
    $.ajax({
        type: 'GET',
        url: '/api/catalog/depots/all',
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
// Получить Завод
var getCatalogWerks = function (callback) {
    $.ajax({
        type: 'GET',
        url: '/api/catalog/werks/all',
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
//Получить sap_buffer по id
var getAsyncSAP_Buffer = function (id, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/azs/sap_buffer/id/' + id,
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
//Добавить sap_buffer
var postAsyncSAP_Buffer = function (sap_buffer, callback) {
    $.ajax({
        url: '/api/azs/sap_buffer',
        type: 'POST',
        data: JSON.stringify(sap_buffer),
        contentType: "application/json;charset=utf-8",
        async: true,
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            LockScreenOff();
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
//Обновить sap_buffer
var putAsyncSAP_Buffer = function (sap_buffer, callback) {
    $.ajax({
        type: 'PUT',
        url: '/api/azs/sap_buffer/' + sap_buffer.id,
        data: JSON.stringify(sap_buffer),
        contentType: "application/json;charset=utf-8",
        async: true,
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
// Удалить sap_buffer по id
var deleteAsynczsSAP_Buffer = function (id, callback) {
    $.ajax({
        url: '/api/azs/sap_buffer/' + id,
        type: 'DELETE',
        contentType: "application/json;charset=utf-8",
        async: true,
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
//Добавить FuelSale
var postAsyncFuelSale = function (fuel_sale, callback) {
    $.ajax({
        url: '/api/azs/fuel_sale',
        type: 'POST',
        data: JSON.stringify(fuel_sale),
        contentType: "application/json;charset=utf-8",
        async: true,
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            LockScreenOff();
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
// Веруть список FuelSale открытых выдач топлива
var getAsyncOpenFuelSale = function (callback) {
    $.ajax({
        type: 'GET',
        url: 'api/azs/fuel_sale/open',
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
//Обновить FuelSale
var putAsyncFuelSales = function (fuel_sale, callback) {
    $.ajax({
        type: 'PUT',
        url: '/api/azs/fuel_sale/' + fuel_sale.id,
        data: JSON.stringify(fuel_sale),
        contentType: "application/json;charset=utf-8",
        async: true,
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
// Веруть последний UsersActions
var getAsyncCurrentUsersActions = function (callback) {
    $.ajax({
        type: 'GET',
        url: 'api/azs/user/curent',
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}

//Включить колонку
var postAsyncGunStart = function (gun_start, callback) {
    $.ajax({
        url: '/api/trk/gun/start',
        type: 'POST',
        data: JSON.stringify(gun_start),
        contentType: "application/json;charset=utf-8",
        async: true,
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            //LockScreenOff();
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}

/////////////////////////////////////////////////////////////////////
// Веруть список azsCards карточек
var getAsyncViewazsCards = function (callback) {
    $.ajax({
        type: 'GET',
        url: 'api/trk/cards',
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                callback(data);
            }
        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
// Загрузить библиотеку azsCards 
var getReference_azsCards = function (callback) {
    var ref = {
        list: [],
        initObject: function () {
            getAsyncViewazsCards(function (result) {
                ref.list = result;
                if (typeof callback === 'function') {
                    callback(ref);
                }
            });
        },
        getResult: function (value) {
            var result = getObjects(this.list, 'Id', value)
            if (result != null && result.length > 0) {
                return result[0];
            }
        },
        getNumber: function (value) {
            var result = getObjects(this.list, 'Id', value)
            if (result != null && result.length > 0) {
                return result[0].Number;
            };
        },
        //getOb: function (value) {
        //    var result = getObjects(this.list, '  ', value)
        //    var txt = '(' + value + ')';
        //    if (result != null && result.length > 0) {
        //        txt += ' ' + result[0].name;
        //    };
        //    return txt;
        //},
    }
    ref.initObject();
}