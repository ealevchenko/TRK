// Бит вкл\откл. логирования для отладки
var blog_view = $.parseJSON(log_view);
var log = (blog_view === true ? log4javascript.getDefaultLogger() : null);
//=========== ПЕРЕМЕННЫЕ ДЛЯ ТЕСТОВ ====================================================
// TODO:!!!ТЕСТ УБРАТЬ
var ntype_test = Number(type_test);
if (log) { log.info('Тип запущенного проекта - ', ntype_test); }
// TODO:!!!ТЕСТ УБРАТЬ
var bcontrolTRK_ban = $.parseJSON(controlTRK_ban);
if (log) { log.info('Включена блокировка передачи управления на колонку - ', bcontrolTRK_ban); }
// TODO:!!!ТЕСТ УБРАТЬ
var bpollDIO = $.parseJSON(pollDIO);
if (log) { log.info('Включен опрос датчиков ДИО (наливных стояков) - ', bpollDIO); }
// TODO:!!!ТЕСТ УБРАТЬ
var btanks_one = $.parseJSON(tanks_one);
if (log) { log.info('Включен выбор одной емкости - ', btanks_one); }
// TODO:!!!ТЕСТ УБРАТЬ
var ins_advance = $.parseJSON(ns_advance);
if (log) { log.info('Упреждение выдачи НС - ', ins_advance); }
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
    ];
// TODO:!!!ТЕСТ УБРАТЬ
var reservation_out =
    [
        {
            "RSNUM": "0004364606",
            "RSPOS": "0001",
            "MATNR": "000000000107000024",
            "WERKS": "0010",
            "LGORT": "435 ",
            "UMLGO": "163 ",
            "UMWRK": "0010",
            "BDMNG": "2.9239999999990687",
            "ENMNG": null,
            "LGOBE": "Запр.стан.УСХиПП",
            "MEINS": "KG ",
            "BWART": "X01"
        },
        {
            "RSNUM": "0004364606",
            "RSPOS": "0002",
            "MATNR": "000000000107000024",
            "WERKS": "0010",
            "LGORT": "435 ",
            "UMLGO": "163 ",
            "UMWRK": "0010",
            "BDMNG": "3.9279999999998836",
            "ENMNG": null,
            "LGOBE": "Запр.стан.УСХиПП",
            "MEINS": "KG ",
            "BWART": "X01"
        },
        {
            "RSNUM": "0004364606",
            "RSPOS": "0003",
            "MATNR": "000000000107000024",
            "WERKS": "0010",
            "LGORT": "435 ",
            "UMLGO": "163 ",
            "UMWRK": "0010",
            "BDMNG": "56864.332",
            "ENMNG": null,
            "LGOBE": "Запр.стан.УСХиПП",
            "MEINS": "KG ",
            "BWART": "X01"
        }
    ];
 //   { "RSNUM": "0003947680", "RSPOS": "0001", "MATNR": "000000000107000024", "WERKS": "0010", "LGORT": "435 ", "UMLGO": "080 ", "UMWRK": "0010", "BDMNG": "0.05", "ENMNG": null, "LGOBE": "Запр.стан.УСХиПП", "MEINS": "TO ", "BWART": "X01" };
//{ "RSNUM": "0003052703", "RSPOS": "0001", "MATNR": "000000000310008399", "WERKS": "0010", "LGORT": "424 ", "UMLGO": "184 ", "UMWRK": "0010", "BDMNG": "0.4", "ENMNG": "0.365", "LGOBE": "ЦС ГСМ", "MEINS": "TO" };
var reservation_debitor_out =
    { "RSNUM": "0003900524", "RSPOS": "0008", "MATNR": "000000000107000024", "WERKS": "0010", "LGORT": "435 ", "UMLGO": "163 ", "UMWRK": "0010", "BDMNG": "18000.0", "ENMNG": null, "LGOBE": "Запр.стан.УСХиПП", "MEINS": "KG ", "BWART": "X01" };
var reservation_vd_debitor_out =
    { "RSNUM": "0004231005", "RSPOS": "0001", "MATNR": "000000000107000024", "WERKS": "0010", "LGORT": "435 ", "UMLGO": "163 ", "UMWRK": "0010", "BDMNG": "500.00", "ENMNG": null, "LGOBE": "Запр.стан.УСХиПП", "MEINS": "KG ", "BWART": "X01" }
var reservation_ndopusk =
    { "RSNUM": "0004074757", "RSPOS": "0002", "MATNR": "000000000107000024", "WERKS": "0010", "LGORT": "435 ", "UMLGO": "162 ", "UMWRK": "", "BDMNG": "9.0", "ENMNG": null, "LGOBE": "", "MEINS": "", "BWART": "X01" }

// TODO:!!!ТЕСТ УБРАТЬ
var bunk_out =
    { "num_tank": "B9", "dens": 754.065493, "fill_percent": 35.194191766997911, "level": 1060.24, "mass": 18934.58452923, "status1": 64, "status2": 48, "status": 0, "temp": -1.8, "ullage": 46237, "unit": null, "volume": 2511.0, "water_level": 0.0, "water_volume": 0.0 }    //{ "num_tank": "B2", "dens": 769.206967, "fill_percent": 29.265209819673053, "level": 93490, "mass": 16028.734778345999, "status1": 64, "status2": 48, "status": 0, "temp": -23, "ullage": 50366, "unit": null, "volume": 20838, "water_level": 36, "water_volume": 0 };
//// TODO:!!!ТЕСТ УБРАТЬ
//var guns_out = [
//    { "num_trk": 1, "num_gun": 1, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": null, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000024 },
//    { "num_trk": 1, "num_gun": 2, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": null, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000024 },
//    { "num_trk": 2, "num_gun": 3, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": true, "passage": false, "price_to_write": 0, "start": false, "state": 1, "stop": false, "taken": true, "total_volume": 5555555, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000024 },
//    { "num_trk": 2, "num_gun": 4, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": true, "passage": false, "price_to_write": 0, "start": false, "state": 1, "stop": false, "taken": true, "total_volume": 6666666, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000024 },
//    { "num_trk": 3, "num_gun": 5, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": true, "passage": false, "price_to_write": 0, "start": false, "state": 1, "stop": false, "taken": true, "total_volume": 4444444, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000024 },
//    { "num_trk": 3, "num_gun": 6, "side": 1, "current_volume": 300, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 2, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 5000, "write_price": false, "type_fuel": 107000024 },
//    { "num_trk": 4, "num_gun": 7, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 4, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000024 },
//    { "num_trk": 4, "num_gun": 8, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 4, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000024 },
//    { "num_trk": 5, "num_gun": 9, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
//    { "num_trk": 5, "num_gun": 10, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
//    { "num_trk": 6, "num_gun": 11, "side": 0, "current_volume": 2000, "density": 0, "last_out_volume": 0, "online": true, "passage": false, "price_to_write": 0, "start": false, "state": 1, "stop": false, "taken": true, "total_volume": 56902228, "status": 0, "volume_to_write": 3000, "write_price": false, "type_fuel": 107000022 },
//    { "num_trk": 6, "num_gun": 12, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
//    { "num_trk": 7, "num_gun": 13, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": true, "passage": false, "price_to_write": 0, "start": false, "state": 1, "stop": false, "taken": true, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
//    { "num_trk": 7, "num_gun": 14, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
//    { "num_trk": 7, "num_gun": 15, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": true, "passage": false, "price_to_write": 0, "start": false, "state": 1, "stop": false, "taken": true, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000023 },
//    { "num_trk": 7, "num_gun": 16, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000023 },
//    { "num_trk": 7, "num_gun": 17, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
//    { "num_trk": 7, "num_gun": 18, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
//    { "num_trk": 7, "num_gun": 19, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000023 },
//    { "num_trk": 7, "num_gun": 20, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000023 },
//    { "num_trk": 8, "num_gun": 21, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000023 },
//    { "num_trk": 8, "num_gun": 22, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000023 },
//    { "num_trk": 8, "num_gun": 23, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
//    { "num_trk": 8, "num_gun": 24, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
//    { "num_trk": 8, "num_gun": 25, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000023 },
//    { "num_trk": 8, "num_gun": 26, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000023 },
//    { "num_trk": 8, "num_gun": 27, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
//    { "num_trk": 8, "num_gun": 28, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
//    { "num_trk": 9, "num_gun": 29, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000024 }
//];
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
        { "num": 1, "type_fuel": 107000024, "Counter": 69950387261, "CounterResetable": 0, "CountOn": 1781, "Error": 0, "Flow": 0, "Flow2": 0.0, "Freq": 0, "PiontsCount": 6, "Status": 0, "Temp": -0.9375, "TimerLiveOn": 5530357, "TimerOn": 365495 },
        { "num": 2, "type_fuel": 107000027, "Counter": 69950387261, "CounterResetable": 0, "CountOn": 1781, "Error": 0, "Flow": 0, "Flow2": 0.0, "Freq": 0, "PiontsCount": 6, "Status": 0, "Temp": -0.9375, "TimerLiveOn": 5530357, "TimerOn": 365495 },
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
        "inp_km": true, // Насос включен
        "inp_kvq1": true,
        "inp_kvq2": false, // Заземление
        "inp_sa2": true, // Режим 0-Авто 1 ручной
        "out_kv1": false,
        "out_kv2": false,
        "TScut": 100,
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
        "inp_kvq2": false,
        "inp_sa2": true,
        "out_kv1": false,
        "out_kv2": false,
        "TScut": 0,
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
        "out_kv2": false,
        "TScut": 0,
    }
];
// TODO:!!!ТЕСТ УБРАТЬ
var bunks_out = [
    { "num_tank": "B2", "dens": 755.495805, "fill_percent": 17.640862872872312, "level": 653.14, "mass": 9488.07, "status1": 64, "status2": 48, "status": 0, "temp": 1.3, "ullage": 58643, "unit": null, "volume": 1256.1, "water_level": 0.31, "water_volume": 0.0 },
    { "num_tank": "B3", "dens": 757.904171, "fill_percent": 35.737970982049163, "level": 1082.59, "mass": 19361.07, "status1": 64, "status2": 48, "status": 0, "temp": 1.1, "ullage": 45930, "unit": null, "volume": 2554.3, "water_level": 1.1, "water_volume": 0.2 }
];
// TODO:!!!ТЕСТ УБРАТЬ
var all_tags =
{
    "rfids": [
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
    ],
    "guns": [
        { "num_trk": 1, "num_gun": 1, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": null, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000024 },
        { "num_trk": 1, "num_gun": 2, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": null, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000024 },
        { "num_trk": 2, "num_gun": 3, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": true, "passage": false, "price_to_write": 0, "start": false, "state": 1, "stop": false, "taken": true, "total_volume": 5555555, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000024 },
        { "num_trk": 2, "num_gun": 4, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": true, "passage": false, "price_to_write": 0, "start": false, "state": 1, "stop": false, "taken": true, "total_volume": 6666666, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000024 },
        { "num_trk": 3, "num_gun": 5, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": true, "passage": false, "price_to_write": 0, "start": false, "state": 1, "stop": false, "taken": true, "total_volume": 515033336, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000024 },
        { "num_trk": 3, "num_gun": 6, "side": 1, "current_volume": 300, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 2, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 5000, "write_price": false, "type_fuel": 107000024 },
        { "num_trk": 4, "num_gun": 7, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 4, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000024 },
        { "num_trk": 4, "num_gun": 8, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 4, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000024 },
        { "num_trk": 5, "num_gun": 9, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
        { "num_trk": 5, "num_gun": 10, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
        { "num_trk": 6, "num_gun": 11, "side": 0, "current_volume": 2000, "density": 0, "last_out_volume": 0, "online": true, "passage": false, "price_to_write": 0, "start": false, "state": 1, "stop": false, "taken": true, "total_volume": 56902228, "status": 0, "volume_to_write": 3000, "write_price": false, "type_fuel": 107000022 },
        { "num_trk": 6, "num_gun": 12, "side": 1, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
        { "num_trk": 7, "num_gun": 13, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": true, "passage": false, "price_to_write": 0, "start": false, "state": 1, "stop": false, "taken": true, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
        { "num_trk": 7, "num_gun": 14, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": false, "passage": false, "price_to_write": 0, "start": false, "state": 128, "stop": false, "taken": false, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000022 },
        { "num_trk": 7, "num_gun": 15, "side": 0, "current_volume": 0, "density": 0, "last_out_volume": 0, "online": true, "passage": false, "price_to_write": 0, "start": false, "state": 1, "stop": false, "taken": true, "total_volume": 0, "status": 0, "volume_to_write": 0, "write_price": false, "type_fuel": 107000023 },
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
    ],
    "risers": [
        {
            "num": 1,
            "type_fuel": 107000024,
            "door": false,
            "power": false,
            "flg_kv1": false,
            "flg_kv2": false,
            "inp_km": true, // Насос включен
            "inp_kvq1": true,
            "inp_kvq2": false, // Заземление
            "inp_sa2": true, // Режим 0-Авто 1 ручной
            "out_kv1": false,
            "out_kv2": false,
            "TScut": 100,
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
            "inp_kvq2": false,
            "inp_sa2": true,
            "out_kv1": false,
            "out_kv2": false,
            "TScut": 0,
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
            "out_kv2": false,
            "TScut": 0,
        }
    ],
    "dios": null
};
// TODO:!!!ТЕСТ УБРАТЬ
var tanks_status = [

    {
        "id": 1,
        "typefuel": 107000022,
        "tank": "b02",
        "timestamp": "2019-08-14T10:50:13.333",
        "fill_percent": 7.8703443626762537,
        "level": 37465.0,
        "volume": 5604.0,
        "dens": 747.604058,
        "mass": 0.0,
        "temp": 247.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 2,
        "typefuel": 107000022,
        "tank": "b03",
        "timestamp": "2019-08-23T11:28:56.41",
        "fill_percent": 8.83805526407835,
        "level": 40392.0,
        "volume": 6317.0,
        "dens": 728.862162,
        "mass": 4671.07,
        "temp": 262.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 3,
        "typefuel": 107000022,
        "tank": "b09",
        "timestamp": "2019-08-14T10:50:06.967",
        "fill_percent": 8.0031395854065348,
        "level": 36858.0,
        "volume": 5710.0,
        "dens": 743.753402,
        "mass": 4238.07,
        "temp": 247.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 4,
        "typefuel": 107000022,
        "tank": "b11",
        "timestamp": "2019-08-26T21:49:02.877",
        "fill_percent": 66.63182132817245,
        "level": 176581.0,
        "volume": 47168.0,
        "dens": 735.662916,
        "mass": 34709.07,
        "temp": 280.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 5,
        "typefuel": 107000022,
        "tank": "b16",
        "timestamp": "2019-08-23T11:28:59.433",
        "fill_percent": 9.6559254178448448,
        "level": 42818.0,
        "volume": 6898.0,
        "dens": 735.449508,
        "mass": 5057.07,
        "temp": 259.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 6,
        "typefuel": 107000023,
        "tank": "b17",
        "timestamp": "2019-08-23T11:28:58.91",
        "fill_percent": 29.836995038979449,
        "level": 92629.0,
        "volume": 21471.0,
        "dens": 751.616343,
        "mass": 16172.07,
        "temp": 257.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 7,
        "typefuel": 107000023,
        "tank": "b18",
        "timestamp": "2019-08-16T09:23:17.84",
        "fill_percent": 7.8176895810656175,
        "level": 35984.0,
        "volume": 5602.0,
        "dens": 746.381823,
        "mass": 4194.07,
        "temp": 204.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 8,
        "typefuel": 107000023,
        "tank": "b19",
        "timestamp": "2019-08-23T13:46:45.927",
        "fill_percent": 9.81105765878826,
        "level": 42493.0,
        "volume": 7036.0,
        "dens": 735.38128,
        "mass": 5182.07,
        "temp": 268.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 9,
        "typefuel": 107000023,
        "tank": "b20",
        "timestamp": "2019-08-26T21:48:56.33",
        "fill_percent": 88.497911632000225,
        "level": 227257.0,
        "volume": 63353.0,
        "dens": 737.596945,
        "mass": 46788.07,
        "temp": 280.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 10,
        "typefuel": 107000022,
        "tank": "b13",
        "timestamp": "2019-08-23T11:29:00.907",
        "fill_percent": 2.0250615350190198,
        "level": 14677.0,
        "volume": 1448.0,
        "dens": 829.975766,
        "mass": 0.0,
        "temp": 286.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 11,
        "typefuel": 107000024,
        "tank": "01",
        "timestamp": "2019-08-26T21:48:56.203",
        "fill_percent": 100.0,
        "level": 268335.0,
        "volume": 72751.0,
        "dens": 825.509195,
        "mass": 60119.08,
        "temp": 299.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 12,
        "typefuel": 107000024,
        "tank": "02",
        "timestamp": "2019-08-26T21:48:55.75",
        "fill_percent": 100.0,
        "level": 269612.0,
        "volume": 72759.0,
        "dens": 824.990134,
        "mass": 60038.08,
        "temp": 297.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 13,
        "typefuel": 107000024,
        "tank": "03",
        "timestamp": "2019-08-26T21:49:03.73",
        "fill_percent": 100.0,
        "level": 264910.0,
        "volume": 72344.0,
        "dens": 827.057618,
        "mass": 59844.08,
        "temp": 296.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 14,
        "typefuel": 107000024,
        "tank": "04",
        "timestamp": "2019-08-26T21:49:01.927",
        "fill_percent": 96.414638938003421,
        "level": 248516.0,
        "volume": 68707.0,
        "dens": 827.220617,
        "mass": 56799.08,
        "temp": 293.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 15,
        "typefuel": 107000024,
        "tank": "05",
        "timestamp": "2019-08-26T21:49:03.23",
        "fill_percent": 11.097880447725649,
        "level": 46529.0,
        "volume": 7922.0,
        "dens": 827.749561,
        "mass": 6561.08,
        "temp": 281.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 16,
        "typefuel": 107000024,
        "tank": "06",
        "timestamp": "2019-08-26T21:48:56.583",
        "fill_percent": 99.051452767640754,
        "level": 258740.0,
        "volume": 71113.0,
        "dens": 825.568492,
        "mass": 58849.08,
        "temp": 297.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 17,
        "typefuel": 107000024,
        "tank": "07",
        "timestamp": "2019-08-26T21:48:54.917",
        "fill_percent": 10.715731576228833,
        "level": 45255.0,
        "volume": 7676.0,
        "dens": 825.269554,
        "mass": 6341.08,
        "temp": 282.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 18,
        "typefuel": 107000024,
        "tank": "08",
        "timestamp": "2019-08-26T21:49:03.18",
        "fill_percent": 10.837183979450812,
        "level": 45814.0,
        "volume": 7763.0,
        "dens": 825.215803,
        "mass": 6411.08,
        "temp": 282.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 19,
        "typefuel": 107000024,
        "tank": "09",
        "timestamp": "2019-08-26T21:48:55.443",
        "fill_percent": 10.164699229518625,
        "level": 45116.0,
        "volume": 7190.0,
        "dens": 825.8941,
        "mass": 5947.08,
        "temp": 282.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 20,
        "typefuel": 107000024,
        "tank": "10",
        "timestamp": "2019-08-26T21:49:03.58",
        "fill_percent": 11.721544915052119,
        "level": 48972.0,
        "volume": 8355.0,
        "dens": 826.490207,
        "mass": 6908.08,
        "temp": 279.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 21,
        "typefuel": 117000024,
        "tank": "11",
        "timestamp": "2019-08-26T21:49:03.47",
        "fill_percent": 10.586051221467448,
        "level": 47427.0,
        "volume": 7527.0,
        "dens": 824.814137,
        "mass": 6216.08,
        "temp": 279.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 22,
        "typefuel": 107000024,
        "tank": "12",
        "timestamp": "2019-08-26T21:49:02.847",
        "fill_percent": 93.8108689236477,
        "level": 241308.0,
        "volume": 66753.0,
        "dens": 829.248083,
        "mass": 55324.08,
        "temp": 285.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 23,
        "typefuel": 107000024,
        "tank": "13",
        "timestamp": "2019-08-26T21:48:54.243",
        "fill_percent": 12.073450436339225,
        "level": 49490.0,
        "volume": 8633.0,
        "dens": 823.899964,
        "mass": 7109.08,
        "temp": 276.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 24,
        "typefuel": 107000024,
        "tank": "14",
        "timestamp": "2019-08-26T21:49:02.677",
        "fill_percent": 13.542106299766466,
        "level": 53491.0,
        "volume": 9626.0,
        "dens": 824.159011,
        "mass": 7950.08,
        "temp": 291.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 25,
        "typefuel": 107000024,
        "tank": "15",
        "timestamp": "2019-08-26T21:48:56.173",
        "fill_percent": 29.128252193622849,
        "level": 91276.0,
        "volume": 20947.0,
        "dens": 824.715585,
        "mass": 17297.08,
        "temp": 284.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 26,
        "typefuel": 107000024,
        "tank": "16",
        "timestamp": "2019-08-26T21:49:02.653",
        "fill_percent": 100.0,
        "level": 268332.0,
        "volume": 72898.0,
        "dens": 823.93274,
        "mass": 60101.08,
        "temp": 291.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 27,
        "typefuel": 107000024,
        "tank": "17",
        "timestamp": "2019-08-26T21:49:03.51",
        "fill_percent": 100.0,
        "level": 268225.0,
        "volume": 72217.0,
        "dens": 825.710783,
        "mass": 59692.08,
        "temp": 289.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 28,
        "typefuel": 107000024,
        "tank": "18",
        "timestamp": "2019-08-26T21:49:02.69",
        "fill_percent": 94.857456758127213,
        "level": 244472.0,
        "volume": 67345.0,
        "dens": 826.222175,
        "mass": 55665.08,
        "temp": 279.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 29,
        "typefuel": 107000024,
        "tank": "19",
        "timestamp": "2019-08-26T21:49:01.873",
        "fill_percent": 100.0,
        "level": 268379.0,
        "volume": 72840.0,
        "dens": 820.375946,
        "mass": 59783.08,
        "temp": 289.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 30,
        "typefuel": 107000024,
        "tank": "20",
        "timestamp": "2019-08-26T21:48:59.897",
        "fill_percent": 100.0,
        "level": 269509.0,
        "volume": 73105.0,
        "dens": 820.308344,
        "mass": 60019.08,
        "temp": 289.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 31,
        "typefuel": 107000024,
        "tank": "21",
        "timestamp": "2019-08-26T21:49:03.41",
        "fill_percent": 100.0,
        "level": 269009.0,
        "volume": 72580.0,
        "dens": 821.264777,
        "mass": 59663.08,
        "temp": 289.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 32,
        "typefuel": 107000024,
        "tank": "22",
        "timestamp": "2019-08-26T21:48:58.13",
        "fill_percent": 100.0,
        "level": 269234.0,
        "volume": 72547.0,
        "dens": 819.935399,
        "mass": 59464.08,
        "temp": 288.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 33,
        "typefuel": 107000024,
        "tank": "23",
        "timestamp": "2019-08-26T21:48:55.533",
        "fill_percent": 100.0,
        "level": 267897.0,
        "volume": 72243.0,
        "dens": 824.549908,
        "mass": 59532.08,
        "temp": 291.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 34,
        "typefuel": 107000024,
        "tank": "24",
        "timestamp": "2019-08-26T21:49:03.987",
        "fill_percent": 100.0,
        "level": 267747.0,
        "volume": 72305.0,
        "dens": 824.236897,
        "mass": 59547.08,
        "temp": 290.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 35,
        "typefuel": 107000024,
        "tank": "25",
        "timestamp": "2019-08-26T21:48:56.583",
        "fill_percent": 100.0,
        "level": 267227.0,
        "volume": 72746.0,
        "dens": 823.3488,
        "mass": 59835.08,
        "temp": 288.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 36,
        "typefuel": 107000024,
        "tank": "26",
        "timestamp": "2019-08-26T21:49:03.08",
        "fill_percent": 55.23509214490926,
        "level": 151099.0,
        "volume": 39413.0,
        "dens": 823.74599,
        "mass": 32484.08,
        "temp": 287.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 37,
        "typefuel": 107000024,
        "tank": "27",
        "timestamp": "2019-08-16T10:10:04.73",
        "fill_percent": 10.931610878367964,
        "level": 46263.0,
        "volume": 7802.0,
        "dens": 825.7817,
        "mass": 0.0,
        "temp": 227.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 38,
        "typefuel": 107000024,
        "tank": "28",
        "timestamp": "2019-08-16T10:09:51.59",
        "fill_percent": 11.779367902202679,
        "level": 48441.0,
        "volume": 8412.0,
        "dens": 825.836272,
        "mass": 6939.08,
        "temp": 220.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 39,
        "typefuel": 107000024,
        "tank": "29",
        "timestamp": "2019-08-16T10:10:00.597",
        "fill_percent": 11.782743846089222,
        "level": 49835.0,
        "volume": 8415.0,
        "dens": 828.130808,
        "mass": 0.0,
        "temp": 220.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 40,
        "typefuel": 107000024,
        "tank": "30",
        "timestamp": "2019-08-16T10:09:51.027",
        "fill_percent": 12.834458174235273,
        "level": 53357.0,
        "volume": 9109.0,
        "dens": 829.040893,
        "mass": 7547.08,
        "temp": 220.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 41,
        "typefuel": 107000024,
        "tank": "31",
        "timestamp": "2019-08-23T09:46:56.247",
        "fill_percent": 35.238162048404071,
        "level": 107552.0,
        "volume": 25116.0,
        "dens": 824.203311,
        "mass": 0.0,
        "temp": 254.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 42,
        "typefuel": 107000024,
        "tank": "32",
        "timestamp": "2019-08-23T09:46:47.153",
        "fill_percent": 10.020578724119105,
        "level": 43367.0,
        "volume": 7158.0,
        "dens": 823.414126,
        "mass": 5917.08,
        "temp": 253.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 43,
        "typefuel": 107000027,
        "tank": "33",
        "timestamp": "2019-08-23T09:46:46.987",
        "fill_percent": 27.554551035214018,
        "level": 88944.0,
        "volume": 19750.0,
        "dens": 796.441402,
        "mass": 15737.08,
        "temp": 259.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 44,
        "typefuel": 107000027,
        "tank": "38",
        "timestamp": "2019-08-12T12:10:26.647",
        "fill_percent": 14.875522748322995,
        "level": 58597.0,
        "volume": 10600.0,
        "dens": 793.377478,
        "mass": 8416.07,
        "temp": 225.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    },
    {
        "id": 45,
        "typefuel": 107000027,
        "tank": "39",
        "timestamp": "2019-08-12T12:10:37.83",
        "fill_percent": 12.358670099630583,
        "level": 51287.0,
        "volume": 8832.0,
        "dens": 802.955266,
        "mass": 0.0,
        "temp": 229.0,
        "water_leve": 0.0,
        "water_volume": 0.0
    }
];

//=========== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ====================================================
var ntanks_alarm_high = Number(tanks_alarm_high);       //Аварийная уставка высокий
var ntanks_warning_high = Number(tanks_warning_high);   //Предварительная уставка высокий
var ntanks_warning_low = Number(tanks_warning_low);     //Предварительная уставка низкий
var ntanks_alarm_low = Number(tanks_alarm_low);         //Аварийная уставка низкий

// список емкостей
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
                { value: '13', text: '13' }, // конфискат
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
        }
    ],
    // Вернуть список емкостей по типу
    getTanks: function (type) {
        var tanks = getObjects(ozm_bak.list, 'type', type);
        if (tanks && tanks.length > 0) {
            return tanks[0].tanks;
        }
    }
};

//=========== ГЛОБАЛЬНЫЕ МЕТОДЫ ====================================================
// Вывести сообщение на основной экран
var updateMessageTips = function (t) {
    $(".messageTips")
        .text(t)
        .addClass("ui-state-highlight");
    setTimeout(function () {
        $(".messageTips").removeClass("ui-state-highlight", 1500);
    }, 500);
}
/* ----------------------------------------------------------
    Блокировка экрана
-------------------------------------------------------------*/
// Блокировать с текстом
var LockScreen = function (message) {
    var lock = document.getElementById('lockPanel');
    if (lock)
        lock.className = 'LockOn';
    lock.innerHTML = message;
};
// Разблокировать 
var LockScreenOff = function () {
    var lock = document.getElementById('lockPanel');
    if (lock)
        lock.className = 'LockOff';
};
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
};
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
};
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
};
/* ----------------------------------------------------------
    Общие спомогательные функции
-------------------------------------------------------------*/
// Коррекция вывода даты с учетом зоны
var toISOStringTZ = function (date) {
    return new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
};
//
var outVal = function (i) {
    return i != null ? Number(i) : '';
};
// Вернуть тип топлива по коду SAP
var outFuelType = function (i) {
    switch (i) {
        case 107000022: return "А92";
        case 107000023: return "А95";
        case 107000024: return "ДТ";
        case 107000027: return "Керосин";
        case 0: return "Конфискат";
        case 1: return "Наливные стояки";
        default: return i;
    }
};
// Вернуть тип сообщения
var outLevelLog = function (i) {
    switch (i) {
        case 0: return "INFO";
        case 1: return "WARNING";
        case 2: return "ERROR";
        case 3: return "DEBUG";
        case 4: return "SYSTEM";
        default: return i;
    }
};
// Вернуть режим
var outMode = function (i) {
    if (i === null) return null;
    switch (Number(i)) {
        case 1: return "Резер. кер.";
        case 2: return "Резер.";
        case 3: return "Исх. пост.";
        case 4: return "Самовывоз";
        case 5: return "Бак";
        case 6: return "Цистерна";
        case 7: return "Пролив";
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
        for (i = 0, count_data_select = data.length; i < count_data_select; i++) {
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
};
// Обновим компонента Select
var updateOptionSelect = function (obj_select, data, callback_option, value_select, exceptions_value) {
    var options = [];
    var lang = 'ru';
    // Проверка выбор неопределен
    if (value_select === -1) {
        options.push("<option value='-1' >" + (lang == 'en' ? 'Select...' : 'Выберите...') + "</option>");
    }
    if (data !== null) {
        for (i = 0, count_data_update = data.length; i < count_data_update; i++) {
            var option = { value: data[i].value, text: data[i].text, disabled: data[i].disabled };
            // Преобразовать формат
            if (typeof callback_option === 'function') {
                option = callback_option(data[i]);
            }
            if (option !== null) {
                if (exceptions_value !== null) {
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
};

/* ----------------------------------------------------------
    Обработчики ajax - функций
-------------------------------------------------------------*/
// Событие перед запросом
var AJAXBeforeSend = function () {
    //OnBegin();
};
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

var OnFunctionAJAXError = function (name, x, y, z) {
    logError('Client Script', 'Ошибка выполнения API функция[' + name + '] - ' + z);
    //LockScreenOff();
    //confirm_df.updateTips(x.statusText);
    //if (x.status != 404) {
    //    //confirm_df.updateTips(x.statusText);
    //    //alert(x + '\n' + y + '\n' + z);
    //}
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
};
// Событие после выполнения
var AJAXComplete = function () {
    //LockScreenOff();
};
// ---- запросы к OPC -----------------------------------
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
};
// Прочесть теги из списка бака
var getTanksTags = function (nums, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/trk/tank/list/' + nums,
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                // TODO:!!!ТЕСТ УБРАТЬ
                if (ntype_test == 1) {
                    callback(bunks_out);
                } else {
                    callback(data);
                }
            }
        },
        error: function (x, y, z) {
            // TODO:!!!ТЕСТ УБРАТЬ
            if (ntype_test == 2) {
                if (typeof callback === 'function') {
                    callback(bunks_out);
                }
            } else {
                OnAJAXError(x, y, z);
            }


        },
        complete: function () {
            AJAXComplete();
        }
    });
};
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
                // TODO:!!!ТЕСТ УБРАТЬ
                if (ntype_test == 1) {
                    callback(rfid_out);
                } else {
                    callback(data);
                }
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
};
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
};
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
                if (ntype_test === 1) {
                    callback(risers_out);
                } else {
                    callback(data);
                }
            }
        },
        error: function (x, y, z) {
            // TODO:!!!ТЕСТ УБРАТЬ
            if (ntype_test === 2) {
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
};
// Прочесть все теги
var getAllTags = function (callback) {
    $.ajax({
        type: 'GET',
        url: '/api/trk/all/tags',
        async: true,
        dataType: 'json',
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function (data) {
            if (typeof callback === 'function') {
                // TODO:!!!ТЕСТ УБРАТЬ
                if (ntype_test === 1) {
                    callback(all_tags);
                } else {
                    callback(data);
                }
            }
        },
        error: function (x, y, z) {
            // TODO:!!!ТЕСТ УБРАТЬ
            if (ntype_test === 2) {
                if (typeof callback === 'function') {
                    callback(all_tags);
                }
            } else {
                OnAJAXError(x, y, z);
            }
        },
        complete: function () {
            AJAXComplete();
        },
    });
};

// ---- запросы к БД -----------------------------------
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
};
// ---- запросы к SAP -----------------------------------
// Резервирование
var getReservation = function (num, pos, mode, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/sap/reservation/num/' + num + '/pos/' + pos + '/mode/' + mode,
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
};
// Резервирование с уточнением ozm
var getReservationMatrn = function (num, matrn, mode, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/sap/reservation_matrn/num/' + num + '/matrn/' + matrn + '/mode/' + mode,
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
                if (num == "" || num == null) {
                    OnAJAXErrorOfMessage("Ошибка получения данных из САП по резервированию. Укажите номер резервирования.");
                }
            }
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Резервирование по дебитору
var getReservationOfDebitor = function (debitor, ozm, mode, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/sap/reservation/debitor/' + debitor + '/ozm/' + ozm + '/mode/' + mode,
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
            if (ntype_test === 1) {
                if (typeof callback === 'function') {
                    callback(reservation_debitor_out);
                }
            } else {
                if (ozm === "" || ozm === null) {
                    OnAJAXErrorOfMessage("Ошибка получения данных из САП по коду дебитора. Неопределен код ОЗМ.");
                }
                if (debitor === "" || debitor === null) {
                    OnAJAXErrorOfMessage("Ошибка получения данных из САП по коду дебитора. Неопределен код Дебитора.");
                }
            }
        },
        complete: function () {
            AJAXComplete();
        }
    });
};
// Резервирование по объему, массе и дебитору
var getReservationOfVolumeMassDebitor = function (valume, mass, debitor, ozm, mode, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/sap/reservation/value/' + valume + '/mass/' + mass + '/debitor/' + debitor + '/ozm/' + ozm + '/mode/' + mode,
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
            if (ntype_test === 1) {
                if (typeof callback === 'function') {
                    callback(reservation_vd_debitor_out);
                }
            } else {
                if (ozm === "" || ozm === null) {
                    OnAJAXErrorOfMessage("Ошибка получения данных из САП по коду дебитора. Неопределен код ОЗМ.");
                }
                if (debitor === "" || debitor === null) {
                    OnAJAXErrorOfMessage("Ошибка получения данных из САП по коду дебитора. Неопределен код Дебитора.");
                }
                if (mass === "" || mass === null) {
                    OnAJAXErrorOfMessage("Ошибка получения данных из САП по коду дебитора. Неопределена Масса выдачи.");
                }
                if (valume === "" || valume === null) {
                    OnAJAXErrorOfMessage("Ошибка получения данных из САП по коду дебитора. Неопределен Объем выдачи.");
                }
            }
        },
        complete: function () {
            AJAXComplete();
        }
    });
};
// Резервирование по наряд-допуску
var getReservationOfNDopusk = function (num, mode, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/sap/reservation/num_dopusk/' + num + '/mode/' + mode,
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
                    callback(reservation_ndopusk);
                }
            } else {
                if (num == "" || num == null) {
                    OnAJAXErrorOfMessage("Ошибка получения данных из САП по резервированию. Укажите номер резервирования.");
                }
            }
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
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
};
// ---- запросы к БД (Справочники АЗС) -------------------
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
};
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
};
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
};
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
};
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
};
// ---- запросы к БД (FuelSale & Buffer_SAP) -------------------
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
};
//Получить открытый sap_buffer по num
var getAsyncOpenSAP_BufferOfNum = function (num, pos, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/azs/sap_buffer/num_treb/' + num+'/pos/'+pos,
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
};
//Получить массу выдаваемую на текущий момент по номеру требования и позиции
var getAsyncCurrentIssueFuelOfNumPos = function (num, pos, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/azs/current_issue_fuel/num/' + num + '/pos/' + pos,
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
};
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
};
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
};
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
};
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
};
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
};
// Веруть id если по указаному номеру пистолета\НС есть открытая выдача
var getAsyncOpenFuelSaleOfNum = function (num, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/azs/fuel_sale/num/'+num+'/open',
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
};
// Получить строку из базы данных
var getAsyncFuelSale = function (id, callback) {
    $.ajax({
        type: 'GET',
        url: 'api/azs/fuel_sale/'+id,
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
};
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
};
// ---- запросы к БД (Пользователи) -------------------
// Веруть последний UsersActions
var getAsyncCurrentUsersActions = function (callback) {
    $.ajax({
        type: 'GET',
        url: '../../api/azs/user/curent',
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
};
// ---- Управление колонками и наливными стояками -----
// Включить колонку
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
};
// Сбросить настройки колонки
var postAsyncGunClear = function (gun_clear, callback) {
    $.ajax({
        url: '/api/trk/gun/clear',
        type: 'POST',
        data: JSON.stringify(gun_clear),
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
};
// Остановить колонку
var postAsyncGunStop = function (gun_stop, callback) {
    $.ajax({
        url: '/api/trk/gun/stop',
        type: 'POST',
        data: JSON.stringify(gun_stop),
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
};
// Включить наливной стояк
var postAsyncNSStart = function (ns_start, callback) {
    $.ajax({
        url: '/api/trk/ns/start',
        type: 'POST',
        data: JSON.stringify(ns_start),
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
};
// Сбросить настройки наливного стояка
var postAsyncNSClear = function (ns_clear, callback) {
    $.ajax({
        url: '/api/trk/ns/clear',
        type: 'POST',
        data: JSON.stringify(ns_clear),
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
};
// Остановить наливной стояк
var postAsyncNSStop = function (ns_stop, callback) {
    $.ajax({
        url: '/api/trk/ns/stop',
        type: 'POST',
        data: JSON.stringify(ns_stop),
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
};
// ---- Управление RFID- считывателями -----------------
// Сбросить RFID карту
var postAsyncRFIDClear = function (rfid_clear, callback) {
    $.ajax({
        url: '/api/rfid/db/clear',
        type: 'POST',
        data: JSON.stringify(rfid_clear),
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
};
// ---- Запросы к БД (настройка емкостей) -----------------
// Веруть выбранные емкости по А92
var getAsyncSelectTanks_A92 = function (callback) {
    $.ajax({
        type: 'GET',
        url: 'api/azs/tanks/a92/select',
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
};
// Добавить новые выбраные баки
var postAsyncTanks_A92 = function (tanks_a92, callback) {
    $.ajax({
        url: '/api/azs/tanks/a92/',
        type: 'POST',
        data: JSON.stringify(tanks_a92),
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
};
// Веруть выбранные емкости по А95
var getAsyncSelectTanks_A95 = function (callback) {
    $.ajax({
        type: 'GET',
        url: 'api/azs/tanks/a95/select',
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
};
// Добавить новые выбраные баки
var postAsyncTanks_A95 = function (tanks_a95, callback) {
    $.ajax({
        url: '/api/azs/tanks/a95/',
        type: 'POST',
        data: JSON.stringify(tanks_a95),
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
};
// Веруть выбранные емкости по dt
var getAsyncSelectTanks_dt = function (callback) {
    $.ajax({
        type: 'GET',
        url: 'api/azs/tanks/dt/select',
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
};
// Добавить новые выбраные баки
var postAsyncTanks_dt = function (tanks_dt, callback) {
    $.ajax({
        url: '/api/azs/tanks/dt/',
        type: 'POST',
        data: JSON.stringify(tanks_dt),
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
        }
    });
};
// Веруть выбранные емкости по kerosene
var getAsyncSelectTanks_kerosene = function (callback) {
    $.ajax({
        type: 'GET',
        url: 'api/azs/tanks/kerosene/select',
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
        }
    });
};
// Добавить новые выбраные баки
var postAsyncTanks_kerosene = function (tanks_kerosene, callback) {
    $.ajax({
        url: '/api/azs/tanks/kerosene/',
        type: 'POST',
        data: JSON.stringify(tanks_kerosene),
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
        }
    });
};
// ---- Запросы к БД (Режим прием ГСМ в емкостя) -----------------
// Веруть список ReceivingFuel открытых 
var getAsyncOpenReceivingFuel = function (callback) {
    $.ajax({
        type: 'GET',
        url: '/api/rf/receiving_fuel/open',
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
        }
    });
};
//Получить ReceivingFuel
var getAsyncReceivingFuel = function (id, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/rf/receiving_fuel/id/' + id,
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
        }
    });
};
//Добавить ReceivingFuel
var postAsyncReceivingFuel = function (receiving_fuel, callback) {
    $.ajax({
        url: '../../api/rf/receiving_fuel',
        type: 'POST',
        data: JSON.stringify(receiving_fuel),
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
        }
    });
};
//Обновить ReceivingFuelTanks
var putAsyncReceivingFuel = function (receiving_fuel, callback) {
    $.ajax({
        type: 'PUT',
        url: '/api/rf/receiving_fuel/' + receiving_fuel.id,
        data: JSON.stringify(receiving_fuel),
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
        }
    });
};
//Получить ReceivingFuelTanks
var getAsyncReceivingFuelTanks = function (id, num, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/rf/receiving_fuel_tanks/id/' + id + '/num/' + num,
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
};
//Добавить ReceivingFuelTanks
var postAsyncReceivingFuelTanks = function (receiving_fuel_tanks, callback) {
    $.ajax({
        url: '../../api/rf/receiving_fuel_tanks',
        type: 'POST',
        data: JSON.stringify(receiving_fuel_tanks),
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
        }
    });
};
//Обновить ReceivingFuelTanks
var putAsyncReceivingFuelTanks = function (receiving_fuel_tanks, callback) {
    $.ajax({
        type: 'PUT',
        url: '/api/rf/receiving_fuel_tanks/' + receiving_fuel_tanks.id,
        data: JSON.stringify(receiving_fuel_tanks),
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
};
// ---- Запросы к БД [KRR-PA-CNT-Oil2] (карточки АЗС) -----------------
// Веруть список azsCards карточек
var getAsyncViewazsCards = function (callback) {
    $.ajax({
        type: 'GET',
        url: '/api/trk/cards',
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
        }
    });
};
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
        }
    };
    ref.initObject();
};

var getAsyncCurrentPlanOfIDCard = function (id_card, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/trk/plan/cerrent/id_card/'+id_card,
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
        }
    });
};
//----ЛОГИРОВАНИЕ-----------------------------------------------
// Вывести последние lines записи
var getAsyncTRKLogsLastLines= function (lines, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/logs/last/lines/' + lines,
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
        }
    });
};
//
var postAsyncTRKLogs = function (trk_logs, callback) {
    $.ajax({
        url: '/api/logs/ins/',
        type: 'POST',
        data: JSON.stringify(trk_logs),
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
        }
    });
};
// Лог информация
var logInfo = function (user, message) {
    trk_logs = {
        ID: 0,
        DateTime: toISOStringTZ(new Date()),
        UserName: user,
        Level: 0,
        Log: message
    };
    postAsyncTRKLogs(trk_logs,
        function (result) {

        }
    );
};
// Лог внимание
var logWarn = function (user, message) {
    trk_logs = {
        ID: 0,
        DateTime: toISOStringTZ(new Date()),
        UserName: user,
        Level: 1,
        Log: message
    };
    postAsyncTRKLogs(trk_logs,
        function (result) {

        }
    );
};
// Лог ошибка
var logError = function (user, message) {
    trk_logs = {
        ID: 0,
        DateTime: toISOStringTZ(new Date()),
        UserName: user,
        Level: 2,
        Log: message
    };
    postAsyncTRKLogs(trk_logs,
        function (result) {

        }
    );
};
// Лог отладка
var logDebug = function (user, message) {
    trk_logs = {
        ID: 0,
        DateTime: toISOStringTZ(new Date()),
        UserName: user,
        Level: 3,
        Log: message
    };
    postAsyncTRKLogs(trk_logs,
        function (result) {

        }
    );
};
// Лог события системы
var logEvent = function (user, message) {
    trk_logs = {
        ID: 0,
        DateTime: toISOStringTZ(new Date()),
        UserName: user,
        Level: 4,
        Log: message
    };
    postAsyncTRKLogs(trk_logs,
        function (result) {

        }
    );
};
//----СИНХРОНИЗАЦИЯ-----------------------------------------------
// Прочесть номера пистолетов по которым идет заполнение выдачи или закрытия
var getAsyncGuns = function (callback) {
    $.ajax({
        type: 'GET',
        url: '/api/global/guns',
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
};
// Добавить номер пистолета по которму идет заполнение выдачи или закрытия
var postAsyncGuns = function (num_gun) {
    $.ajax({
        url: '/api/global/guns/',
        type: 'POST',
        data: JSON.stringify(num_gun),
        contentType: "application/json;charset=utf-8",
        async: true,
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function () {

        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        }
    });
};
// Убрать номер пистолета по которму идет заполнение выдачи или закрытия
var deleteAsyncGuns = function (num) {
    $.ajax({
        url: '/api/global/guns/' + num,
        type: 'DELETE',
        contentType: "application/json;charset=utf-8",
        async: true,
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function () {

        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
// Очистить список пистолета по которму идет заполнение выдачи или закрытия
var deleteAsyncClearGuns = function () {
    $.ajax({
        url: '/api/global/guns/clear',
        type: 'DELETE',
        contentType: "application/json;charset=utf-8",
        async: true,
        beforeSend: function () {
            AJAXBeforeSend();
        },
        success: function () {

        },
        error: function (x, y, z) {
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
}
// Прочесть список открытых выдач
var getAsyncOFS = function (callback) {
    $.ajax({
        type: 'GET',
        url: '/api/global/open_fuel_sale',
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
};
// Добавить id открытой выдача
var putAsyncOFS = function (ofs_put, callback) {
    $.ajax({
        type: 'PUT',
        url: '/api/global/open_fuel_sale/' + ofs_put.num,
        data: JSON.stringify(ofs_put),
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
};
//  Убрать id открытой выдача
var putAsyncClearOFS = function (num, callback) {
    $.ajax({
        type: 'PUT',
        url: '/api/global/open_fuel_sale/'+num,
        data: JSON.stringify({num:num, id:0, dose:0, counter:0 }),
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
};
// Очистить список открытых выдач
var deleteAsyncOFS = function (callback) {
    $.ajax({
        url: '/api/global/open_fuel_sale/clear',
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
};
// Прочесть количество клиентов
var getAsyncClient = function (callback) {
    $.ajax({
        type: 'GET',
        url: '/api/global/client',
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
};
//-------ОТЧЕТЫ-----------------------------------------------
// Веруть отчет по приему ГСМ в резервуары
var getAsyncViewReportRFOfDateTime = function (type, start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/rf/report/type/' + type + '/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
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
            OnFunctionAJAXError('getAsyncViewReportRFOfDateTime', x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Веруть лог
var getAsyncViewReportLogsOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/logs/report/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
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
};
// Веруть заправочную ведомость
var getAsyncViewReportFuelListOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/azs/fuel_list/report/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
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
};
// Отчет по движению топлива в емкостях АЗС
var getAsyncViewReportFTLOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/it/report/tanks_fuel_flow/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
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
};
// Сменный рапорт
var getAsyncViewReportSRLOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/azs/report/shift_report/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
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
};
// остатки
var getAsyncViewReportTROfDateTime = function (date, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/it/report/tanks_remains/date/' + toISOStringTZ(date).substring(0, 19),
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
            OnFunctionAJAXError('getAsyncViewReportTROfDateTime',x, y, z);
        },
        complete: function () {
            AJAXComplete();
        },
    });
};
// Суточный репорт
var getAsyncViewReportDROfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/azs/report/daily_report/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
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
};
// Суточный репорт
var getAsyncViewReportDR15OfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/azs/report/daily_report15/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
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
};
// Состояние емкостей
var getAsyncViewReportTSOfDateTime = function (callback) {
    $.ajax({
        type: 'GET',
        url: '/api/it/report/tanks_status/current',
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
            if (ntype_test === 2 || ntype_test === 1) {
                if (typeof callback === 'function') {
                    callback(tanks_status);
                }
            } else {
                OnFunctionAJAXError('getAsyncViewReportTSOfDateTime', x, y, z);
            }


        },
        complete: function () {
            AJAXComplete();
        }
    });
};


//-------ГРАФИКИ-----------------------------------------------
// График по емкостям
var getAsyncViewReportTGOfDateTime = function (tank, start, stop, callback) {
    var table;
    switch (tank) {
        case 'B2': table = 'BT2'; break;
        case 'B3': table = 'BT3'; break;
        case 'B9': table = 'BT9'; break;
        case 'B11': table = 'BT11'; break;
        case 'B16': table = 'BT16'; break;
        case 'B17': table = 'BT17'; break;
        case 'B18': table = 'BT18'; break;
        case 'B19': table = 'BT19'; break;
        case 'B20': table = 'BT20'; break;
        default : table = 'DT'+tank; break;
    };
    $.ajax({
        type: 'GET',
        url: '/api/it/report/tanks_grafic/table/' + table + '/tank/' + tank + '/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
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
            LockScreenOff();
            OnAJAXError(x, y, z);
        },
        complete: function () {
            AJAXComplete();
        }
    });
};
var printPageArea = function (areaID, width, height) {
    var printContent = document.getElementById(areaID);
    var WinPrint = window.open('', '', 'width=' + width + ',height=' + height);
    WinPrint.document.write('<table>');
    WinPrint.document.write(printContent.innerHTML);
    WinPrint.document.write('</table>');
    WinPrint.document.close();
    WinPrint.focus();
    //WinPrint.print();
    //WinPrint.close();
};

var printTable = function (table, title, width, height) {
    var WinPrint = window.open('', '', 'width=' + width + ',height=' + height);
    WinPrint.document.write('<h1>'+title+'</h1>');
    WinPrint.document.write(table);
    WinPrint.document.close();
    WinPrint.focus();
    //WinPrint.print();
    //WinPrint.close();
};

// Экспорт отчетов в Excel
function fnExcelReport(tab, name_file) {
    var file_name = name_file + '.xls';
    var tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
    tab_text = tab_text + '<head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>';

    tab_text = tab_text + '<x:Name>Test Sheet</x:Name>';

    tab_text = tab_text + '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>';
    tab_text = tab_text + '</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>';

    tab_text = tab_text + "<table border='1px'>";
    //var tab = $('#table-list-wagons-tracking').html();
    tab_text = tab_text + tab
    tab_text = tab_text + '</table></body></html>';

    var data_type = 'data:application/vnd.ms-excel';

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        if (window.navigator.msSaveBlob) {
            var blob = new Blob([tab_text], {
                type: "application/csv;charset=utf-8;"
            });
            navigator.msSaveBlob(blob, file_name);
        }
    } else {
        $('#test').attr('href', data_type + ', ' + encodeURIComponent(tab_text));
        $('#test').attr('download', file_name);
    }
}