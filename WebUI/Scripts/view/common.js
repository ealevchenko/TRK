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
        "id_table": 2111280,
        "dt": "2019-09-16T20:45:31.56",
        "fuel_type": 0,
        "tank": "B13",
        "fill_percent": 2.4530096218393376,
        "level": 16724.0,
        "volume": 1754.0,
        "mass": 1452.08,
        "dens": 829.975766,
        "dens_avg": 827.86773090079816,
        "temp": 23.2,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 5,
        "id_table": 2688121,
        "dt": "2019-09-16T20:45:31.04",
        "fuel_type": 107000022,
        "tank": "B11",
        "fill_percent": 48.058314144853014,
        "level": 136611.0,
        "volume": 34020.0,
        "mass": 25333.07,
        "dens": 741.099177,
        "dens_avg": 744.65226337448553,
        "temp": 19.9,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 6,
        "id_table": 2555432,
        "dt": "2019-08-23T11:28:59.433",
        "fuel_type": 107000022,
        "tank": "B16",
        "fill_percent": 9.6559254178448448,
        "level": 42818.0,
        "volume": 6898.0,
        "mass": 5057.07,
        "dens": 735.449508,
        "dens_avg": 733.12119454914455,
        "temp": 25.9,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 2,
        "id_table": 2653363,
        "dt": "2019-09-16T20:45:31.553",
        "fuel_type": 107000022,
        "tank": "B2 ",
        "fill_percent": 99.995786753553176,
        "level": 261018.0,
        "volume": 71201.0,
        "mass": 52442.07,
        "dens": 738.072646,
        "dens_avg": 736.53558236541619,
        "temp": 22.6,
        "water_leve": null,
        "water_volume": 1.0
    },
    {
        "id": 3,
        "id_table": 2730213,
        "dt": "2019-09-16T20:45:31.513",
        "fuel_type": 107000022,
        "tank": "B3 ",
        "fill_percent": 62.126617698495977,
        "level": 165788.0,
        "volume": 44405.0,
        "mass": 32797.07,
        "dens": 737.236347,
        "dens_avg": 738.58957324625612,
        "temp": 21.0,
        "water_leve": null,
        "water_volume": 0.1
    },
    {
        "id": 4,
        "id_table": 2477466,
        "dt": "2019-08-14T10:50:06.967",
        "fuel_type": 107000022,
        "tank": "B9 ",
        "fill_percent": 8.0031395854065348,
        "level": 36858.0,
        "volume": 5710.0,
        "mass": 4238.07,
        "dens": 743.753402,
        "dens_avg": 742.21891418563928,
        "temp": 24.7,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 7,
        "id_table": 2555432,
        "dt": "2019-08-23T11:28:58.91",
        "fuel_type": 107000023,
        "tank": "B17",
        "fill_percent": 29.836995038979449,
        "level": 92629.0,
        "volume": 21471.0,
        "mass": 16172.07,
        "dens": 751.616343,
        "dens_avg": 753.20525359787621,
        "temp": 25.7,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 8,
        "id_table": 2669900,
        "dt": "2019-09-16T20:45:33.573",
        "fuel_type": 107000023,
        "tank": "B18",
        "fill_percent": 99.605068519914042,
        "level": 260368.0,
        "volume": 71375.0,
        "mass": 53214.07,
        "dens": 746.229178,
        "dens_avg": 745.55614711033274,
        "temp": 22.1,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 9,
        "id_table": 2731657,
        "dt": "2019-09-16T20:45:31.78",
        "fuel_type": 107000023,
        "tank": "B19",
        "fill_percent": 80.896870991131692,
        "level": 207485.0,
        "volume": 58016.0,
        "mass": 43321.07,
        "dens": 746.8468,
        "dens_avg": 746.70901130722552,
        "temp": 21.2,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 10,
        "id_table": 2704271,
        "dt": "2019-09-16T20:45:31.513",
        "fuel_type": 107000023,
        "tank": "B20",
        "fill_percent": 18.039840192216356,
        "level": 65961.0,
        "volume": 12914.0,
        "mass": 9634.07,
        "dens": 747.116759,
        "dens_avg": 746.01750038717671,
        "temp": 19.6,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 11,
        "id_table": 2740532,
        "dt": "2019-09-16T20:45:31.74",
        "fuel_type": 107000024,
        "tank": "01 ",
        "fill_percent": 100.0,
        "level": 266788.0,
        "volume": 72481.0,
        "mass": 60190.08,
        "dens": 830.720224,
        "dens_avg": 830.42562878547483,
        "temp": 23.3,
        "water_leve": null,
        "water_volume": 12.0
    },
    {
        "id": 12,
        "id_table": 2740163,
        "dt": "2019-09-16T20:45:32.273",
        "fuel_type": 107000024,
        "tank": "02 ",
        "fill_percent": 100.0,
        "level": 264773.0,
        "volume": 71899.0,
        "mass": 59596.08,
        "dens": 829.085274,
        "dens_avg": 828.88607630147851,
        "temp": 22.7,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 13,
        "id_table": 2705731,
        "dt": "2019-09-16T20:45:32.117",
        "fuel_type": 107000024,
        "tank": "03 ",
        "fill_percent": 100.0,
        "level": 267614.0,
        "volume": 72812.0,
        "mass": 59589.08,
        "dens": 819.549185,
        "dens_avg": 818.3964181728287,
        "temp": 22.7,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 14,
        "id_table": 2739965,
        "dt": "2019-09-16T20:45:30.867",
        "fuel_type": 107000024,
        "tank": "04 ",
        "fill_percent": 18.159748533580309,
        "level": 65828.0,
        "volume": 12941.0,
        "mass": 10777.08,
        "dens": 832.540026,
        "dens_avg": 832.78571980527011,
        "temp": 20.2,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 15,
        "id_table": 2705972,
        "dt": "2019-09-16T20:45:31.793",
        "fuel_type": 107000024,
        "tank": "05 ",
        "fill_percent": 13.098356751607525,
        "level": 52262.0,
        "volume": 9350.0,
        "mass": 7767.08,
        "dens": 831.073784,
        "dens_avg": 830.703743315508,
        "temp": 20.7,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 16,
        "id_table": 2713054,
        "dt": "2019-09-16T20:45:31.543",
        "fuel_type": 107000024,
        "tank": "06 ",
        "fill_percent": 13.077876673213266,
        "level": 51585.0,
        "volume": 9389.0,
        "mass": 7795.08,
        "dens": 833.755705,
        "dens_avg": 830.23538182980087,
        "temp": 20.6,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 17,
        "id_table": 2714383,
        "dt": "2019-09-16T20:45:32.373",
        "fuel_type": 107000024,
        "tank": "07 ",
        "fill_percent": 12.212248544665169,
        "level": 49619.0,
        "volume": 8748.0,
        "mass": 7286.08,
        "dens": 831.90995,
        "dens_avg": 832.88523090992226,
        "temp": 20.9,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 18,
        "id_table": 2713052,
        "dt": "2019-09-16T20:45:32.19",
        "fuel_type": 107000024,
        "tank": "08 ",
        "fill_percent": 13.823237893149805,
        "level": 54363.0,
        "volume": 9902.0,
        "mass": 8234.08,
        "dens": 832.14558,
        "dens_avg": 831.5572611593617,
        "temp": 20.6,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 19,
        "id_table": 2713066,
        "dt": "2019-09-16T20:45:31.78",
        "fuel_type": 107000024,
        "tank": "09 ",
        "fill_percent": 14.927546476284725,
        "level": 58622.0,
        "volume": 10559.0,
        "mass": 8799.08,
        "dens": 833.878826,
        "dens_avg": 833.325125485368,
        "temp": 20.4,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 20,
        "id_table": 2713234,
        "dt": "2019-09-16T20:45:31.58",
        "fuel_type": 107000024,
        "tank": "10 ",
        "fill_percent": 15.752185075548198,
        "level": 60106.0,
        "volume": 11228.0,
        "mass": 9364.08,
        "dens": 833.803087,
        "dens_avg": 833.99358745992163,
        "temp": 20.2,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 21,
        "id_table": 2716354,
        "dt": "2019-09-16T20:45:33.563",
        "fuel_type": 107000024,
        "tank": "11 ",
        "fill_percent": 14.362263195645753,
        "level": 58159.0,
        "volume": 10212.0,
        "mass": 8460.08,
        "dens": 828.35814,
        "dens_avg": 828.44496670583624,
        "temp": 20.2,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 22,
        "id_table": 2706781,
        "dt": "2019-09-16T20:45:33.41",
        "fuel_type": 107000024,
        "tank": "12 ",
        "fill_percent": 15.818542097052996,
        "level": 60660.0,
        "volume": 11256.0,
        "mass": 9348.08,
        "dens": 829.239018,
        "dens_avg": 830.49751243781088,
        "temp": 20.1,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 23,
        "id_table": 2710315,
        "dt": "2019-09-16T20:45:31.41",
        "fuel_type": 107000024,
        "tank": "13 ",
        "fill_percent": 92.898299395838,
        "level": 239042.0,
        "volume": 66426.0,
        "mass": 55339.08,
        "dens": 833.08572,
        "dens_avg": 833.09366814199257,
        "temp": 21.6,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 24,
        "id_table": 2697592,
        "dt": "2019-09-16T20:45:31.86",
        "fuel_type": 107000024,
        "tank": "14 ",
        "fill_percent": 100.0,
        "level": 267894.0,
        "volume": 72292.0,
        "mass": 59609.08,
        "dens": 825.392283,
        "dens_avg": 824.559840646268,
        "temp": 23.8,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 25,
        "id_table": 2697667,
        "dt": "2019-09-16T20:45:31.117",
        "fuel_type": 107000024,
        "tank": "15 ",
        "fill_percent": 100.0,
        "level": 265747.0,
        "volume": 72650.0,
        "mass": 60091.08,
        "dens": 827.714762,
        "dens_avg": 827.13117687543013,
        "temp": 22.4,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 26,
        "id_table": 2696657,
        "dt": "2019-09-16T20:45:31.51",
        "fuel_type": 107000024,
        "tank": "16 ",
        "fill_percent": 100.0,
        "level": 267926.0,
        "volume": 72829.0,
        "mass": 60375.08,
        "dens": 829.300189,
        "dens_avg": 828.99778934215772,
        "temp": 22.4,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 27,
        "id_table": 2697608,
        "dt": "2019-09-16T20:45:33.1",
        "fuel_type": 107000024,
        "tank": "17 ",
        "fill_percent": 100.0,
        "level": 265884.0,
        "volume": 71792.0,
        "mass": 59577.08,
        "dens": 830.841641,
        "dens_avg": 829.85680855805663,
        "temp": 22.4,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 28,
        "id_table": 2738989,
        "dt": "2019-09-16T20:45:32.433",
        "fuel_type": 107000024,
        "tank": "18 ",
        "fill_percent": 100.0,
        "level": 267828.0,
        "volume": 72261.0,
        "mass": 60038.08,
        "dens": 830.719945,
        "dens_avg": 830.850389560067,
        "temp": 22.4,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 29,
        "id_table": 2738977,
        "dt": "2019-09-16T20:45:33.527",
        "fuel_type": 107000024,
        "tank": "19 ",
        "fill_percent": 100.0,
        "level": 266528.0,
        "volume": 72514.0,
        "mass": 59756.08,
        "dens": 824.283383,
        "dens_avg": 824.06266376148051,
        "temp": 22.4,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 30,
        "id_table": 2739263,
        "dt": "2019-09-16T20:45:31.973",
        "fuel_type": 107000024,
        "tank": "20 ",
        "fill_percent": 100.0,
        "level": 265564.0,
        "volume": 72410.0,
        "mass": 59733.08,
        "dens": 826.182744,
        "dens_avg": 824.92860102195834,
        "temp": 22.5,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 31,
        "id_table": 2739492,
        "dt": "2019-09-16T20:45:31.543",
        "fuel_type": 107000024,
        "tank": "21 ",
        "fill_percent": 100.0,
        "level": 268980.0,
        "volume": 72575.0,
        "mass": 59993.08,
        "dens": 826.901151,
        "dens_avg": 826.63561832586981,
        "temp": 22.5,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 32,
        "id_table": 2738991,
        "dt": "2019-09-16T20:45:32.553",
        "fuel_type": 107000024,
        "tank": "22 ",
        "fill_percent": 29.144686733053117,
        "level": 93068.0,
        "volume": 20663.0,
        "mass": 17010.08,
        "dens": 823.227505,
        "dens_avg": 823.21444127183861,
        "temp": 22.1,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 33,
        "id_table": 2739995,
        "dt": "2019-09-16T20:45:31.607",
        "fuel_type": 107000024,
        "tank": "23 ",
        "fill_percent": 11.699561248818476,
        "level": 50436.0,
        "volume": 8293.0,
        "mass": 6886.08,
        "dens": 829.642431,
        "dens_avg": 830.34848667550943,
        "temp": 20.8,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 34,
        "id_table": 2740001,
        "dt": "2019-09-16T20:45:31.667",
        "fuel_type": 107000024,
        "tank": "24 ",
        "fill_percent": 12.060386269714092,
        "level": 49784.0,
        "volume": 8580.0,
        "mass": 7110.08,
        "dens": 828.748048,
        "dens_avg": 828.68065268065277,
        "temp": 20.6,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 35,
        "id_table": 2737336,
        "dt": "2019-09-16T20:45:31.113",
        "fuel_type": 107000024,
        "tank": "25 ",
        "fill_percent": 12.383252593223416,
        "level": 50489.0,
        "volume": 8870.0,
        "mass": 7360.08,
        "dens": 829.91545,
        "dens_avg": 829.77226606538886,
        "temp": 20.4,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 36,
        "id_table": 2696215,
        "dt": "2019-09-16T20:45:33.68",
        "fuel_type": 107000024,
        "tank": "26 ",
        "fill_percent": 13.283067522493484,
        "level": 53981.0,
        "volume": 9478.0,
        "mass": 7842.08,
        "dens": 828.991238,
        "dens_avg": 827.39818527115426,
        "temp": 20.2,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 37,
        "id_table": 2647273,
        "dt": "2019-09-16T20:45:33.2",
        "fuel_type": 107000024,
        "tank": "27 ",
        "fill_percent": 12.254448647891271,
        "level": 50098.0,
        "volume": 8746.0,
        "mass": 7275.08,
        "dens": 831.354948,
        "dens_avg": 831.81797393093984,
        "temp": 21.8,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 38,
        "id_table": 2647280,
        "dt": "2019-09-16T20:45:32.31",
        "fuel_type": 107000024,
        "tank": "28 ",
        "fill_percent": 11.194040300785572,
        "level": 46743.0,
        "volume": 7994.0,
        "mass": 6625.08,
        "dens": 829.003312,
        "dens_avg": 828.75656742556919,
        "temp": 20.6,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 39,
        "id_table": 2647400,
        "dt": "2019-09-16T20:45:32.613",
        "fuel_type": 107000024,
        "tank": "29 ",
        "fill_percent": 11.222503815511278,
        "level": 48207.0,
        "volume": 8015.0,
        "mass": 6687.08,
        "dens": 833.266877,
        "dens_avg": 834.32064878353083,
        "temp": 20.7,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 40,
        "id_table": 2647280,
        "dt": "2019-09-16T20:45:31.06",
        "fuel_type": 107000024,
        "tank": "30 ",
        "fill_percent": 13.093711693179097,
        "level": 54089.0,
        "volume": 9293.0,
        "mass": 7751.08,
        "dens": 833.667458,
        "dens_avg": 834.07726245561173,
        "temp": 20.1,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 41,
        "id_table": 2707601,
        "dt": "2019-09-16T20:45:34.97",
        "fuel_type": 107000024,
        "tank": "31 ",
        "fill_percent": 12.906348649596632,
        "level": 53073.0,
        "volume": 9199.0,
        "mass": 7605.08,
        "dens": 825.80595,
        "dens_avg": 826.72899228176982,
        "temp": 20.1,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 42,
        "id_table": 2707596,
        "dt": "2019-09-16T20:45:32.283",
        "fuel_type": 107000024,
        "tank": "32 ",
        "fill_percent": 12.003023854854966,
        "level": 49181.0,
        "volume": 8574.0,
        "mass": 7111.08,
        "dens": 827.768373,
        "dens_avg": 829.37718684394679,
        "temp": 20.4,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 43,
        "id_table": 2731668,
        "dt": "2019-09-16T20:45:32.677",
        "fuel_type": 107000027,
        "tank": "33 ",
        "fill_percent": 8.144985769295161,
        "level": 37452.0,
        "volume": 5838.0,
        "mass": 4239.07,
        "dens": 720.520942,
        "dens_avg": 726.116820829051,
        "temp": 23.2,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 44,
        "id_table": 2639082,
        "dt": "2019-09-16T20:45:32.073",
        "fuel_type": 107000027,
        "tank": "38 ",
        "fill_percent": 8.3050324174127823,
        "level": 39454.0,
        "volume": 5918.0,
        "mass": 4314.07,
        "dens": 726.541573,
        "dens_avg": 728.97431564717806,
        "temp": 23.3,
        "water_leve": null,
        "water_volume": 0.0
    },
    {
        "id": 45,
        "id_table": 2639031,
        "dt": "2019-09-16T20:45:32.373",
        "fuel_type": 107000027,
        "tank": "39 ",
        "fill_percent": 13.897906638307399,
        "level": 55603.0,
        "volume": 9932.0,
        "mass": 7919.07,
        "dens": 793.950708,
        "dens_avg": 797.32883608538054,
        "temp": 20.0,
        "water_leve": null,
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
var StringToDate = function (datestring) {
    //yyyy-mm-ddThh:mm:ss
    //0123456789012345678
    if (datestring) {
        var strDate = datestring;
        var year = strDate.substr(0, 4);
        var mont = strDate.substr(5, 2);
        var day = strDate.substr(8, 2);
        var hour = strDate.substr(11, 2);
        var min = strDate.substr(14, 2);
        var sec = strDate.substr(17, 2);
        var date = new Date(year, Number(mont)-1, day, hour, min, sec);
        return date;
    }
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
        url: '/api/azs/report/tanks_status/current',
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

// Суточный репорт (новый)
var getAsyncViewDailyAccountingReportOfDateTime = function (start, stop, callback) {
    $.ajax({
        type: 'GET',
        url: '/api/dar/report/daily_accounting/start/' + toISOStringTZ(start).substring(0, 19) + '/stop/' + toISOStringTZ(stop).substring(0, 19),
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