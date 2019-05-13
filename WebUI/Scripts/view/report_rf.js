$(function () {

    //// Список общесистемных слов 
    //$.Text_View =
    //    {
    //        'default':  //default language: ru
    //        {
    //            'text_link_tabs_report_1': 'Ведомость',
    //            'text_link_tabs_report_2': '',
    //            'field_FuelType': 'Тип топлива',
    //            'field_DateTime': 'Дата и время',
    //            'field_Waybill': 'RFID-Карта',
    //            'field_AutoNumber': 'Номер транспортного средства',
    //            'field_AutoModel': 'Модель трансп. средства',
    //            'field_TankNo': '№ Емкости',
    //            'field_UsageVolume': 'Объем (л)',
    //            'field_UsageMass': 'Масса (кг)',
    //            'field_Density': 'Плотность (кг/м3)',
    //            'bt_left_title': 'Предыдущая дата',
    //            'bt_right_title': 'Следующая дата',
    //            'bt_refresh_title': 'Обновить отчет',
    //            'bt_refresh_text': 'Показать ведомость',
    //            'label_select_date': 'Выберите дату',
    //            'select_text_sm1': 'Смена Д (07:00-18:59)',
    //            'select_text_sm2': 'Смена Н (19:00-06:59)',
    //        },
    //        'en':  //default language: English
    //        {
    //            'text_link_tabs_report_1': 'Statement',
    //            'text_link_tabs_report_2': '',
    //            'field_FuelType': 'Fuel type',
    //            'field_DateTime': 'Date and time',
    //            'field_Waybill': 'RFID Card',
    //            'field_AutoNumber': 'Vehicle Number',
    //            'field_AutoModel': 'Model trans. facilities',
    //            'field_TankNo': 'Capacity No.',
    //            'field_UsageVolume': 'Volume (l)',
    //            'field_UsageMass': 'Mass (kg)',
    //            'field_Density': 'Density (kg/m3)',
    //            'bt_left_title': 'Previous Date',
    //            'bt_right_title': 'Next Date',
    //            'bt_refresh_title': 'Refresh Report',
    //            'bt_refresh_text': 'Show statement',
    //            'label_select_date': 'Select a date',
    //            'select_text_sm1': 'Shift Day (07:00-18:59)',
    //            'select_text_sm2': 'Shift Night (19:00-06:59)',
    //        }
    //    };

    var lang = $.cookie('lang'),
        date_curent = new Date(),
        date_start = null,
        date_stop = null,
        //langs = $.extend(true, $.extend(true, getLanguages($.Text_View, lang), getLanguages($.Text_Common, lang)), getLanguages($.Text_Table, lang)),
        // Загрузка библиотек
        //loadReference = function (callback) {
        //    LockScreen("Загрузка справочников...");
        //    var count = 1;
        //    // Загрузка списка карточек (common.js)
        //    getReference_azsCards(function (result) {
        //        reference_cards = result;
        //        count -= 1;
        //        if (count <= 0) {
        //            if (typeof callback === 'function') {
        //                LockScreenOff();
        //                callback();
        //            }
        //        }
        //    })
        //},
        // список карточек
        //reference_cards = null,
        //// Типы отчетов
        tab_type_reports = {
            html_div: $("#tabs-reports"),
            active: 0,
            initObject: function () {
                $('#link-tabs-report-1').text("Ж.д. цистерны");
                $('#link-tabs-report-2').text("Автоцистерны");
                this.html_div.tabs({
                    collapsible: true,
                    activate: function (event, ui) {
                        tab_type_reports.active = tab_type_reports.html_div.tabs("option", "active");
                        //tab_type_reports.activeTable(tab_type_cards.active, false);
                    }
                });
                //this.activeTable(this.active, true);
            },
            activeTable: function (active, data_refresh) {
                if (active === 0) {
                    table_report.viewTable(data_refresh);
                }
                //if (active == 1) {
                //    table_report.viewTable(data_refresh);
                //}

            }

        },
        // Панель таблицы
        panel_select_report = {
            html_div_panel: $('#table-panel'),
            obj: null,
            obj_date: null,
            bt_left: $('<button class="ui-button ui-widget ui-corner-all ui-button-icon-only" ><span class="ui-icon ui-icon-circle-triangle-w"></span>text</button>'),
            bt_right: $('<button class="ui-button ui-widget ui-corner-all ui-button-icon-only" ><span class="ui-icon ui-icon-circle-triangle-e"></span>text</button>'),
            bt_refresh: $('<button class="ui-button ui-widget ui-corner-all" ><span class="ui-icon ui-icon-refresh"></span>text</button>'),
            label: $('<label for="date" ></label>'),
            span: $('<span id="select-range"></span>'),
            input_date: $('<input id="date" name="date" size="20">'),
            select_sm: $('<select class="ui-widget-content ui-corner-all"></select>'),
            initObject: function () {
                this.span.append(this.input_date);
                obj = this.html_div_panel;
                obj
                    //.append(this.bt_left)
                    .append(this.label)
                    .append(this.span)
                    //.append(this.bt_right)
                    .append(this.select_sm)
                    .append(this.bt_refresh);
                //this.bt_left.attr('title',(langView('bt_left_title', langs)));
                this.label.text("Выберите дату");
                //this.bt_right.attr('title',langView('bt_right_title', langs));
                this.bt_refresh.attr('title', "Обновить отчет");
                this.bt_refresh.text("Показать отчет");

                this.bt_refresh.on('click', function () {
                    if (panel_select_report.select_sm.val() === "2") {
                        date_start = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 19, 0, 0);
                        date_stop = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate() + 1, 6, 59, 59);
                    }
                    if (panel_select_report.select_sm.val() === "1") {
                        date_start = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 7, 0, 0);
                        date_stop = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 18, 59, 59);
                    }

                    tab_type_reports.activeTable(tab_type_reports.active, true);
                });

                // Настроим выбор времени
                initSelect(
                    this.select_sm,
                    { width: 200 },
                    [{ value: 1, text: "Смена Д (07:00-18:59)" }, { value: 2, text: "Смена Н (19:00-06:59)" }],
                    null,
                    1,
                    function (event, ui) {
                        event.preventDefault();
                        // Обработать выбор смены
                    },
                    null);
                // настроим компонент выбора времени
                this.obj_date = this.input_date.dateRangePicker(
                    {
                        startOfWeek: 'monday',
                        //separator: lang == 'en' ? 'to' : 'по',
                        language: 'ru',
                        format: 'DD.MM.YYYY',
                        autoClose: true,
                        singleDate: true,
                        showShortcuts: false
                    }).
                    bind('datepicker-change', function (evt, obj) {
                        date_curent = obj.date1;
                    })
                    .bind('datepicker-closed', function () {

                    });
                // Выставим текущую дату
                var date_curent_set = date_curent.getDate() + '.' + (date_curent.getMonth() + 1) + '.' + date_curent.getFullYear() + ' 00:00';
                this.obj_date.data('dateRangePicker').setDateRange(date_curent_set, date_curent_set, true);
            }
        },
        // Таблица 
        table_report = {
            html_table: $('#table-report'),
            obj_table: null,
            select: null,
            select_id: null,
            list: [],
            groupColumn:0,
            // Инициализировать таблицу
            initObject: function () {
                this.obj = this.html_table.DataTable({
                    //"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
                    "paging": false,
                    "ordering": true,
                    "info": false,
                    "select": false,
                    "autoWidth": false,
                    //"filter": true,
                    //"scrollY": "600px",
                    "scrollX": true,
                    //language: language_table(langs),
                    jQueryUI: true,
                    "createdRow": function (row, data, index) {
                        //$(row).attr('id', data.id);
                    },
                    columns: [
                        { data: "group", title: "Группа", width: "50px", orderable: true, searchable: false },
                        //{ data: "fuel", title: "ГСМ", width: "50px", orderable: true, searchable: false },
                        //{ data: "railway_num_nak", title: "Ж.д. накладная", width: "50px", orderable: false, searchable: true },
                        //{ data: "railway_num_tanker", title: "№ цистерны", width: "50px", orderable: false, searchable: true },
                        //{ data: "railway_provider", title: "Поставщик", width: "150px", orderable: false, searchable: false },
                        { data: "railway_nak_mass", title: "Масса по накл (кг.)", width: "50px", orderable: false, searchable: false },
                        { data: "railway_manual_level", title: "Уровень р.з.", width: "50px", orderable: false, searchable: false },
                        { data: "railway_manual_volume", title: "Объем р.з.", width: "50px", orderable: false, searchable: false },
                        { data: "railway_manual_dens", title: "Плотность р.з.", width: "50px", orderable: false, searchable: false },
                        { data: "railway_manual_mass", title: "Масса р.з.", width: "50px", orderable: false, searchable: false },
                        { data: "num", title: "Резервуар", width: "50px", orderable: true, searchable: false },
                        { data: "start_tank", title: "Начало", width: "150px", orderable: false, searchable: false },
                        { data: "start_mass", title: "Масса в начале (кг.)", width: "50px", orderable: false, searchable: false },
                        { data: "stop_tank", title: "Конец", width: "150px", orderable: false, searchable: false },
                        { data: "stop_mass", title: "Масса в конце (кг.)", width: "50px", orderable: false, searchable: false },
                        { data: "change_mass", title: "Приняли (кг.)", width: "50px", orderable: false, searchable: false },
                    ],
                    "columnDefs": [
                        { "visible": false, "targets": table_report.groupColumn }
                    ],
                    "order": [[table_report.groupColumn, 'asc']],
                    "drawCallback": function (settings) {
                        var api = this.api();
                        var rows = api.rows({ page: 'current' }).nodes();
                        var last = null;
                        api.column(table_report.groupColumn, { page: 'current' }).data().each(function (group, i) {
                            if (last !== group) {
                                $(rows).eq(i).before(
                                    '<tr class="group"><td colspan="12">' + group + '</td></tr>'
                                );
                                last = group;
                            }
                        });
                    }
                });
            },
            // Показать таблицу с данными
            viewTable: function (data_refresh) {
                LockScreen('Мы обрабатываем ваш запрос...');
                if (this.list === null | data_refresh === true) {
                    // Обновим данные
                    getAsyncViewReportRFOfDateTime(
                        1, date_start, date_stop,
                        function (result) {
                            table_report.list = result;
                            table_report.loadDataTable(result);
                            table_report.obj.draw();
                        }
                    );
                } else {
                    table_report.loadDataTable(this.list);
                    table_report.obj.draw();
                };
            },
            // Загрузить данные
            loadDataTable: function (data) {
                this.list = data;
                this.obj.clear();
                for (i = 0; i < data.length; i++) {
                    this.obj.row.add({
                        "group": 'ГСМ - ' + outFuelType(data[i].fuel) + ', ж.д. накладная №' + data[i].railway_num_nak + ', цистерна №' + data[i].railway_num_tanker,
                        "fuel": outFuelType(data[i].fuel),
                        "railway_num_nak": data[i].railway_num_nak,
                        "railway_num_tanker": data[i].railway_num_tanker,
                        //"railway_provider": data[i].railway_provider,
                        "railway_nak_mass": data[i].railway_nak_mass,
                        "railway_manual_level": data[i].railway_manual_level,
                        "railway_manual_volume": data[i].railway_manual_volume,
                        "railway_manual_dens": data[i].railway_manual_dens,
                        "railway_manual_mass": data[i].railway_manual_mass,
                        "num": data[i].num,
                        "start_tank": data[i].start_tank,
                        "start_mass": data[i].start_mass.toFixed(2),
                        "stop_tank": data[i].stop_tank,
                        "stop_mass": data[i].stop_mass.toFixed(2),
                        "change_mass": (data[i].stop_mass - data[i].start_mass).toFixed(2)

                        //toISOStringTZ(start)
                        //"LokomotiveId": data[i].LokomotiveId,
                        //"Name": data[i].Name,
                        //"UsageVolume": data[i].UsageVolume,
                        //"UsageMass": data[i].UsageMass,
                        //"UsageDensity": data[i].UsageDensity,
                        //"TankNo": data[i].TankNo,
                        //"FuelLevel": data[i].FuelLevel,
                        //"FuelVolume": data[i].FuelVolume,
                        //"Density": data[i].Density,
                        //"Mass": data[i].Mass,
                        //"Temperature": data[i].Temperature,
                        //"WaterLevel": data[i].WaterLevel,
                        //"TechnicalSale": data[i].TechnicalSale,
                        //"OperatorName": data[i].OperatorName,
                        //"DateStartWork": data[i].DateStartWork,
                        //"TimeStartWork": data[i].TimeStartWork,
                        //"DateStart": data[i].DateStart,
                        //"TimeStart": data[i].TimeStart,
                        //"DateStop": data[i].DateStop,
                        //"TimeStop": data[i].TimeStop,
                        //"CardId": data[i].CardId,
                        //"StartLevel": data[i].StartLevel,
                        //"StartVolume": data[i].StartVolume,
                        //"StartDensity": data[i].StartDensity,
                        //"StartMass": data[i].StartMass,
                        //"StartTemperature": data[i].StartTemperature,
                        //"StartWaterLevel": data[i].StartWaterLevel,
                        //"StopLevel": data[i].StopLevel,
                        //"StopVolume": data[i].StopVolume,
                        //"StopDensity": data[i].StopDensity,
                        //"StopMass": data[i].StopMass,
                        //"StopTemperature": data[i].StopTemperature,
                        //"StopWaterLevel": data[i].StopWaterLevel,
                        //"DateTime": data[i].DateStart.substring(0, 10) + ' ' + data[i].TimeStart.substring(0, 12),
                        //"Waybill": cards != null ? cards.Number : data[i].CardId,
                        //"AutoNumber": cards != null ? cards.AutoNumber : data[i].CardId,
                        //"AutoModel": cards != null ? cards.AutoModel : data[i].CardId,
                    });
                }
                LockScreenOff();
            }
        };

    //-----------------------------------------------------------------------------------------
    // Функции
    //-----------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------
    // Инициализация объектов
    //-----------------------------------------------------------------------------------------
    panel_select_report.initObject();
    tab_type_reports.initObject();
    //// Загрузка библиотек
    //loadReference(function (result) {
    table_report.initObject();
    //});

});