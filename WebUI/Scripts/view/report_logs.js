$(function () {
    var date_curent = new Date(),
        date_start = null,
        date_stop = null,
        tab_type_reports = {
            html_div: $("#tabs-reports"),
            active: 0,
            initObject: function () {
                $('#link-tabs-report-1').text("Логи");
                //$('#link-tabs-report-2').text("Автоцистерны");
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
                    .append(this.select_sm);
                    //.append(this.bt_refresh);
                //this.bt_left.attr('title',(langView('bt_left_title', langs)));
                this.label.text("Выберите дату");
                //this.bt_right.attr('title',langView('bt_right_title', langs));
                //this.bt_refresh.attr('title', "Обновить отчет");
                //this.bt_refresh.text("Показать отчет");

                //this.bt_refresh.on('click', function () {
                //    panel_select_report.viewReport();
                //});

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
                        panel_select_report.viewReport();
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
                        panel_select_report.viewReport();
                    });
                // Выставим текущую дату
                var date_curent_set = date_curent.getDate() + '.' + (date_curent.getMonth() + 1) + '.' + date_curent.getFullYear() + ' 00:00';
                this.obj_date.data('dateRangePicker').setDateRange(date_curent_set, date_curent_set, true);
            },
            viewReport: function () {
                if (panel_select_report.select_sm.val() === "2") {
                    date_start = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 19, 0, 0);
                    date_stop = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate() + 1, 6, 59, 59);
                }
                if (panel_select_report.select_sm.val() === "1") {
                    date_start = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 7, 0, 0);
                    date_stop = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 18, 59, 59);
                }
                tab_type_reports.activeTable(tab_type_reports.active, true);
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
                    "lengthMenu": [[25, 50, 100, -1], [25, 50, 100, "Все"]],
                    "paging": true,
                    "ordering": true,
                    "info": true,
                    "select": false,
                    "autoWidth": false,
                    //"filter": true,
                    //"scrollY": "600px",
                    //"scrollX": true,
                    //language: language_table(langs),
                    jQueryUI: true,
                    "createdRow": function (row, data, index) {
                        //$(row).attr('id', data.id);
                    },
                    columns: [
                        { data: "DateTime", title: "Дата и время", width: "150px", orderable: true, searchable: false },
                        { data: "UserName", title: "Пользователь", width: "100px", orderable: true, searchable: true },
                        { data: "Level", title: "Уровень сообщения", width: "100px", orderable: true, searchable: true },
                        { data: "Log", title: "Сообщение", width: "500px", orderable: false, searchable: true }
                    ]
                });
            },
            // Показать таблицу с данными
            viewTable: function (data_refresh) {
                LockScreen('Мы обрабатываем ваш запрос...');
                if (this.list === null | data_refresh === true) {
                    // Обновим данные
                    getAsyncViewReportLogsOfDateTime(
                        date_start, date_stop,
                        function (result) {
                            table_report.list = result;
                            table_report.loadDataTable(result);
                            table_report.initComplete();
                            table_report.obj.draw();
                        }
                    );
                } else {
                    table_report.loadDataTable(this.list);
                    table_report.initComplete();
                    table_report.obj.draw();
                };
            },
            // Загрузить данные
            loadDataTable: function (data) {
                this.list = data;
                this.obj.clear();
                for (i = 0; i < data.length; i++) {
                    this.obj.row.add({
                        "ID": data[i].ID,
                        "DateTime": data[i].DateTime,
                        "UserName": data[i].UserName,
                        "Level": outLevelLog(data[i].Level),
                        "Log": data[i].Log
                    });
                }
                LockScreenOff();
            },
            // Выподающие списки
            initComplete: function () {
                table_report.obj.columns([1, 2]).every(function () {
                    var column = this;
                    var name = $(column.header()).attr('title');
                    var select = $('<select><option value="">Все</option></select>')
                        .appendTo($(column.header()).empty().append(name))
                        .on('change', function () {
                            var val = $.fn.dataTable.util.escapeRegex(
                                $(this).val()
                            );
                            column
                                .search(val ? '^' + val + '$' : '', true, false)
                                .draw();
                        });
                    column.data().unique().sort().each(function (d, j) {
                        select.append('<option value="' + d + '">' + d + '</option>')
                    });
                });
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