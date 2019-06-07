$(function () {

    var date_curent = new Date(),
        date_start = null,
        total_tank_dt_volume = 0,
        total_tank_a92_volume = 0,
        total_tank_a95_volume = 0,
        total_tank_kerosin_volume = 0,
        total_tank_konfiskat_volume = 0,

        total_tank_dt_mass = 0,
        total_tank_a92_mass = 0,
        total_tank_a95_mass = 0,
        total_tank_kerosin_mass = 0,
        total_tank_konfiskat_mass = 0,

        total_tank_dt_dens = 0,
        total_tank_a92_dens = 0,
        total_tank_a95_dens = 0,
        total_tank_kerosin_dens = 0,
        total_tank_konfiskat_dens = 0,

        //date_stop = null,
        //// Типы отчетов
        tab_type_reports = {
            html_div: $("#tabs-reports"),
            active: 0,
            initObject: function () {
                $('#link-tabs-report-1').text("Остатки");
                //$('#link-tabs-report-2').text("");
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
                    [{ value: 1, text: "По стоянию на 07:00" }, { value: 2, text: "По состоянию на 19:00" }],
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
                        language: 'ru',
                        format: 'DD.MM.YYYY HH:mm',
                        autoClose: false,
                        singleDate: true,
                        showShortcuts: false,
                        singleMonth: true,
                        time: {
                            enabled: true
                        }
                    }).
                    bind('datepicker-change', function (evt, obj) {
                        date_curent = obj.date1;
                    })
                    .bind('datepicker-closed', function () {
                        //panel_select_report.viewReport();
                        date_start = date_curent;
                        tab_type_reports.activeTable(tab_type_reports.active, true);
                    });
                // Выставим текущую дату
                var date_curent_set = date_curent.getDate() + '.' + (date_curent.getMonth() + 1) + '.' + date_curent.getFullYear() + ' 00:00';
                //this.obj_date.data('dateRangePicker').setDateRange(date_curent_set, date_curent_set, true);
                this.obj_date.data('dateRangePicker').setDateRange(date_curent, date_curent, true);
            },
            viewReport: function () {
                if (panel_select_report.select_sm.val() === "2") {
                    date_start = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 19, 0, 0);
                    //date_stop = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate() + 1, 6, 59, 59);

                }
                if (panel_select_report.select_sm.val() === "1") {
                    date_start = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 7, 0, 0);
                    //date_stop = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 18, 59, 59);
                }
                this.obj_date.data('dateRangePicker').setDateRange(date_start, date_start, true);
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
            groupColumn: 0,
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
                    "footerCallback": function (row, data, start, end, display) {
                        var api = this.api(), data;
                        // Remove the formatting to get integer data for summation
                        var intVal = function (i) {
                            return typeof i === 'string' ?
                                i.replace(/[\$,]/g, '') * 1 :
                                typeof i === 'number' ?
                                i : 0;
                        };

                        // Total volume start
                        total_tank_dt_volume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "ДТ - 107000024") {
                                    return intVal(a) + intVal(b.volume);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_a92_volume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "А92 - 107000022") {
                                    return intVal(a) + intVal(b.volume);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_a95_volume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "А95 - 107000023") {
                                    return intVal(a) + intVal(b.volume);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_kerosin_volume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "Керосин - 107000027") {
                                    return intVal(a) + intVal(b.volume);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_konfiskat_volume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "Конфискат") {
                                    return intVal(a) + intVal(b.volume);
                                } else { return intVal(a); }
                            }, 0);

                        // Total mass
                        total_tank_dt_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "ДТ - 107000024") {
                                    return intVal(a) + intVal(b.mass);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_a92_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "А92 - 107000022") {
                                    return intVal(a) + intVal(b.mass);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_a95_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "А95 - 107000023") {
                                    return intVal(a) + intVal(b.mass);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_kerosin_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "Керосин - 107000027") {
                                    return intVal(a) + intVal(b.mass);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_konfiskat_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "Конфискат") {
                                    return intVal(a) + intVal(b.mass);
                                } else { return intVal(a); }
                            }, 0);

                        $('td#total-volume-tank').text((total_tank_dt_volume + total_tank_a92_volume + total_tank_a95_volume + total_tank_kerosin_volume + total_tank_konfiskat_volume).toFixed(2));
                        $('td#total-mass-tank').text((total_tank_dt_mass + total_tank_a92_mass + total_tank_a95_mass + total_tank_kerosin_mass + total_tank_konfiskat_mass).toFixed(2));
                    },
                    columns: [
                        { data: "type", title: "Тип ГСМ", width: "50px", orderable: true, searchable: false },
                        { data: "tank", title: "Резервуар", width: "50px", orderable: true, searchable: false },
                        { data: "level", title: "Уровень (см)", width: "100px", orderable: false, searchable: false },
                        { data: "volume", title: "Объем (л)", width: "100px", orderable: false, searchable: false },
                        { data: "dens", title: "Плотность (кг/м3)", width: "100px", orderable: false, searchable: false },
                        { data: "mass", title: "Масса (кг)", width: "100px", orderable: false, searchable: false },
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
                                var valume;
                                var mass;
                                switch (group) {
                                    case "ДТ - 107000024":
                                        valume = total_tank_dt_volume;
                                        mass = total_tank_dt_mass;
                                        break;
                                    case "А92 - 107000022":
                                        valume = total_tank_a92_volume;
                                        mass = total_tank_a92_mass;
                                        break;
                                    case "А95 - 107000023":
                                        valume = total_tank_a95_volume;
                                        mass = total_tank_a95_mass;
                                        break;
                                    case "Керосин - 107000027":
                                        valume = total_tank_kerosin_volume;
                                        mass = total_tank_kerosin_mass;
                                        break;
                                    case "Конфискат":
                                        valume = total_tank_konfiskat_volume;
                                        mass = total_tank_konfiskat_mass;
                                        break;
                                }

                                $(rows).eq(i).before(
                                    '<tr class="group"><td colspan="1">' + group + '</td><td></td><td>' + valume.toFixed(2) + '</td><td></td><td>' + mass.toFixed(2) + '</td></tr>'
                                );
                                last = group;
                            }
                        });
                    },
                    dom: 'Bfrtip',
                    buttons: [
                        'copyHtml5',
                        'excelHtml5',
                         {
                             extend: 'pdfHtml5',
                             text: 'PDF',
                             customize: function (doc) {
                                 doc.content[0].text = 'Остатки в емкостях АЗС на ' + toISOStringTZ(date_start);
                             }
                         }
                    ]
                });
                table_report.groupTable();
            },
            // Показать таблицу с данными
            viewTable: function (data_refresh) {
                LockScreen('Мы обрабатываем ваш запрос...');
                if (this.list === null | data_refresh === true) {
                    // Обновим данные
                    getAsyncViewReportTROfDateTime(
                        date_start,
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
                        "type": data[i].type !== 0 ? outFuelType(data[i].type) + ' - ' + data[i].type : outFuelType(data[i].type),
                        "tank": data[i].tank,
                        "level": (data[i].level !== null ? data[i].level : null),
                        "volume": (data[i].volume !== null ? data[i].volume : null),
                        "dens": (data[i].dens !== null ? data[i].dens.toFixed(5) : null),
                        "mass": (data[i].mass !== null ? data[i].mass.toFixed(2) : null)
                    });
                }
                LockScreenOff();
            },
            //
            groupTable: function () {
                $('#table-report').on('click', 'tr.group', function () {
                    var currentOrder = table_report.obj.order()[0];
                    if (currentOrder[0] === table_report.groupColumn && currentOrder[1] === 'asc') {
                        table_report.obj.order([table_report.groupColumn, 'desc']).draw();
                    }
                    else {
                        table_report.obj.order([table_report.groupColumn, 'asc']).draw();
                    }
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
    panel_select_report.viewReport();
    //});

});