/* ----------------------------------------------------------
    Функции работы с масивами
-------------------------------------------------------------*/
// Поиск элемента массива по ключу по всем объектам включая и вложенные
var getAllObjects = function (obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
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
        if (typeof obj[i] == 'object') {
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
        if (typeof obj[i] == 'object' & false == true) {
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
    if (x.status != 404) {
        alert(x + '\n' + y + '\n' + z);
    }
    //LockScreenOff();
}
// Событие после выполнения
var AJAXComplete = function () {
    //LockScreenOff();
}
var getTRKTags= function (callback) {
    $.ajax({
        type: 'GET',
        url: '/api/trk/tags',
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

var getTRK= function (callback) {
    $.ajax({
        type: 'GET',
        url: '/api/trk',
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

var getTRKOfID = function (id, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/trk/' + id,
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