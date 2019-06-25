$(function () {

    var date_curent = new Date(),
        date_start = null,
        date_stop = null,
        total_dt_start_valume = 0,
        total_a92_start_valume = 0,
        total_a95_start_valume = 0,
        total_ns_start_valume = 0,
        total_dt_stop_valume = 0,
        total_a92_stop_valume = 0,
        total_a95_stop_valume = 0,
        total_ns_stop_valume = 0,
        total_dt_change_valume = 0,
        total_a92_change_valume = 0,
        total_a95_change_valume = 0,
        total_ns_change_valume = 0,
        // tank-volume
        total_tank_dt_start_valume = 0,
        total_tank_a92_start_valume = 0,
        total_tank_a95_start_valume = 0,
        total_tank_kerosin_start_valume = 0,
        total_tank_konfiskat_start_valume = 0,
        //
        total_tank_dt_stop_valume = 0,
        total_tank_a92_stop_valume = 0,
        total_tank_a95_stop_valume = 0,
        total_tank_kerosin_stop_valume = 0,
        total_tank_konfiskat_stop_valume = 0,
        //
        total_tank_dt_change_valume = 0,
        total_tank_a92_change_valume = 0,
        total_tank_a95_change_valume = 0,
        total_tank_kerosin_change_valume = 0,
        total_tank_konfiskat_change_valume = 0,
        // tank-mass
        total_tank_dt_start_mass = 0,
        total_tank_a92_start_mass = 0,
        total_tank_a95_start_mass = 0,
        total_tank_kerosin_start_mass = 0,
        total_tank_konfiskat_start_mass = 0,
        //
        total_tank_dt_stop_mass = 0,
        total_tank_a92_stop_mass = 0,
        total_tank_a95_stop_mass = 0,
        total_tank_kerosin_stop_mass = 0,
        total_tank_konfiskat_stop_mass = 0,
        //
        total_tank_dt_change_mass = 0,
        total_tank_a92_change_mass = 0,
        total_tank_a95_change_mass = 0,
        total_tank_kerosin_change_mass = 0,
        total_tank_konfiskat_change_mass = 0,

        // Типы отчетов
        tab_type_reports = {
            html_div: $("#tabs-reports"),
            active: 0,
            initObject: function () {
                $('#link-tabs-report-1').text("ТРК");
                $('#link-tabs-report-2').text("Емкости");
                this.html_div.tabs({
                    collapsible: true,
                    activate: function (event, ui) {
                        tab_type_reports.active = tab_type_reports.html_div.tabs("option", "active");
                        panel_select_report.viewTable();
                    }
                });
                //this.activeTable(this.active, true);
            },
            activeTable: function (active, data_refresh) {
                if (active === 0) {
                    table_report.viewTable(data_refresh);
                }
                if (active === 1) {
                    table_report_fft.viewTable(data_refresh);
                }

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
                        panel_select_report.viewTable();
                    },
                    null);
                // настроим компонент выбора времени
                this.obj_date = this.input_date.dateRangePicker(
                    {
                        language: 'ru',
                        format: 'DD.MM.YYYY',
                        autoClose: true,
                        singleDate: true,
                        singleMonth: true,
                        showShortcuts: false
                    }).
                    bind('datepicker-change', function (evt, obj) {
                        date_curent = obj.date1;
                    })
                    .bind('datepicker-closed', function () {
                        panel_select_report.viewTable();
                    });
                // Выставим текущую дату
                var date_curent_set = date_curent.getDate() + '.' + (date_curent.getMonth() + 1) + '.' + date_curent.getFullYear() + ' 00:00';
                this.obj_date.data('dateRangePicker').setDateRange(date_curent_set, date_curent_set, true);
            },
            // вывести отчет
            viewTable: function () {
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
            groupColumn: 0,
            // Инициализировать таблицу
            initObject: function () {
                this.obj = this.html_table.DataTable({
                    //"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
                    "paging": false,
                    "ordering": true,
                    "info": false,
                    "select": true,
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
                        total_dt_start_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "ДТ - 107000024") {
                                    return intVal(a) + intVal(b.start_valume);
                                } else { return intVal(a); }
                            }, 0);
                        total_a92_start_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "А92 - 107000022") {
                                    return intVal(a) + intVal(b.start_valume);
                                } else { return intVal(a); }
                            }, 0);
                        total_a95_start_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "А95 - 107000023") {
                                    return intVal(a) + intVal(b.start_valume);
                                } else { return intVal(a); }
                            }, 0);
                        total_ns_start_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "Наливные стояки") {
                                    return intVal(a) + intVal(b.start_valume);
                                } else { return intVal(a); }
                            }, 0);
                        // Total volume stop
                        total_dt_stop_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "ДТ - 107000024") {
                                    return intVal(a) + intVal(b.stop_valume);
                                } else { return intVal(a); }
                            }, 0);
                        total_a92_stop_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "А92 - 107000022") {
                                    return intVal(a) + intVal(b.stop_valume);
                                } else { return intVal(a); }
                            }, 0);
                        total_a95_stop_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "А95 - 107000023") {
                                    return intVal(a) + intVal(b.stop_valume);
                                } else { return intVal(a); }
                            }, 0);
                        total_ns_stop_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "Наливные стояки") {
                                    return intVal(a) + intVal(b.stop_valume);
                                } else { return intVal(a); }
                            }, 0);
                        // Total volume change
                        total_dt_change_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "ДТ - 107000024") {
                                    return intVal(a) + intVal(b.change_valume);
                                } else { return intVal(a); }
                            }, 0);
                        total_a92_change_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "А92 - 107000022") {
                                    return intVal(a) + intVal(b.change_valume);
                                } else { return intVal(a); }
                            }, 0);
                        total_a95_change_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "А95 - 107000023") {
                                    return intVal(a) + intVal(b.change_valume);
                                } else { return intVal(a); }
                            }, 0);
                        total_ns_change_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "Наливные стояки") {
                                    return intVal(a) + intVal(b.change_valume);
                                } else { return intVal(a); }
                            }, 0);
                        $('td#start-valum').text((total_dt_start_valume + total_a92_start_valume + total_a95_start_valume + total_ns_start_valume).toFixed(2));
                        $('td#stop-valume').text((total_dt_stop_valume + total_a92_stop_valume + total_a95_stop_valume + total_ns_stop_valume).toFixed(2));
                        $('td#change-valume').text((total_dt_change_valume + total_a92_change_valume + total_a95_change_valume + total_ns_change_valume).toFixed(2));
                    },
                    columns: [
                        { data: "type", title: "Тип ГСМ", width: "50px", orderable: false, searchable: false },
                        { data: "num", title: "ТРК-пистолет(АС)", width: "100px", orderable: false, searchable: false },
                        { data: "start_valume", title: "На начало смены (л)", width: "100px", orderable: false, searchable: false },
                        { data: "stop_valume", title: "На конец смены (л)", width: "100px", orderable: false, searchable: false },
                        { data: "change_valume", title: "Изменение (л)", width: "100px", orderable: false, searchable: false },
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
                                var start_valume;
                                var stop_valume;
                                var change_valume;
                                switch (group) {
                                    case "ДТ - 107000024":
                                        start_valume = total_dt_start_valume;
                                        stop_valume = total_dt_stop_valume;
                                        change_valume = total_dt_change_valume;
                                        break;
                                    case "А92 - 107000022":
                                        start_valume = total_a92_start_valume;
                                        stop_valume = total_a92_stop_valume
                                        change_valume = total_a92_change_valume
                                        break;
                                    case "А95 - 107000023":
                                        start_valume = total_a95_start_valume;
                                        stop_valume = total_a95_stop_valume;
                                        change_valume = total_a95_change_valume;
                                        break;
                                    case "Наливные стояки":
                                        start_valume = total_ns_start_valume;
                                        stop_valume = total_ns_stop_valume;
                                        change_valume = total_ns_change_valume;
                                        break;
                                }

                                $(rows).eq(i).before(
                                    '<tr class="group"><td colspan="1">' + group + '</td><td>' + start_valume.toFixed(2) + '</td><td>' + stop_valume.toFixed(2) + '</td><td>' + change_valume.toFixed(2) + '</td></tr>'
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
                               doc.content[0].text = 'Сменный отчет ТРК-пистолеты(АС) (' + toISOStringTZ(date_start) + ' - ' + toISOStringTZ(date_stop) + ').';
                           }
                       }
                    ]
                });
                //table_report.groupTable();
            },
            // Показать таблицу с данными
            viewTable: function (data_refresh) {
                LockScreen('Мы обрабатываем ваш запрос...');
                if (this.list === null | data_refresh === true) {
                    // Обновим данные
                    getAsyncViewReportSRLOfDateTime(
                        date_start, date_stop,
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
                        "type": data[i].type !== 1 ? outFuelType(data[i].type) + ' - ' + data[i].type : outFuelType(data[i].type),
                        "num": data[i].num,
                        "start_valume": data[i].type !== 1 ? (data[i].start_valume !== null ? (data[i].start_valume / 100).toFixed(2) : null) : data[i].start_valume !== null ? data[i].start_valume.toFixed(2) : null,
                        "stop_valume": data[i].type !== 1 ? (data[i].stop_valume !== null ? (data[i].stop_valume / 100).toFixed(2) : null) : data[i].stop_valume != null ? data[i].stop_valume.toFixed(2) : null,
                        "change_valume": data[i].type !== 1 ? (data[i].start_valume !== null || data[i].stop_valume !== null ? ((data[i].stop_valume - data[i].start_valume) / 100).toFixed(2) : null) : (data[i].start_valume !== null || data[i].stop_valume !== null ? (data[i].stop_valume - data[i].start_valume).toFixed(2) : null)
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
        },

        // Таблица емкостя
        table_report_fft = {
            html_table: $('#table-report-fft'),
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
                    "select": true,
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
                        total_tank_dt_start_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "ДТ - 107000024") {
                                    return intVal(a) + intVal(b.volume_start);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_a92_start_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "А92 - 107000022") {
                                    return intVal(a) + intVal(b.volume_start);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_a95_start_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "А95 - 107000023") {
                                    return intVal(a) + intVal(b.volume_start);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_kerosin_start_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "Керосин - 107000027") {
                                    return intVal(a) + intVal(b.volume_start);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_konfiskat_start_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "Конфискат") {
                                    return intVal(a) + intVal(b.volume_start);
                                } else { return intVal(a); }
                            }, 0);
                        // Total volume stop
                        total_tank_dt_stop_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "ДТ - 107000024") {
                                    return intVal(a) + intVal(b.volume_stop);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_a92_stop_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "А92 - 107000022") {
                                    return intVal(a) + intVal(b.volume_stop);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_a95_stop_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "А95 - 107000023") {
                                    return intVal(a) + intVal(b.volume_stop);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_kerosin_stop_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "Керосин - 107000027") {
                                    return intVal(a) + intVal(b.volume_stop);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_konfiskat_stop_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "Конфискат") {
                                    return intVal(a) + intVal(b.volume_stop);
                                } else { return intVal(a); }
                            }, 0);
                        // Total volume change
                        total_tank_dt_change_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "ДТ - 107000024") {
                                    return intVal(a) + intVal(b.change_volume);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_a92_change_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "А92 - 107000022") {
                                    return intVal(a) + intVal(b.change_volume);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_a95_change_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "А95 - 107000023") {
                                    return intVal(a) + intVal(b.change_volume);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_kerosin_change_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "Керосин - 107000027") {
                                    return intVal(a) + intVal(b.change_volume);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_konfiskat_change_valume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "Конфискат") {
                                    return intVal(a) + intVal(b.change_volume);
                                } else { return intVal(a); }
                            }, 0);


                        // Total mass start
                        total_tank_dt_start_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "ДТ - 107000024") {
                                    return intVal(a) + intVal(b.mass_start);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_a92_start_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "А92 - 107000022") {
                                    return intVal(a) + intVal(b.mass_start);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_a95_start_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "А95 - 107000023") {
                                    return intVal(a) + intVal(b.mass_start);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_kerosin_start_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "Керосин - 107000027") {
                                    return intVal(a) + intVal(b.mass_start);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_konfiskat_start_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "Конфискат") {
                                    return intVal(a) + intVal(b.mass_start);
                                } else { return intVal(a); }
                            }, 0);
                        // Total mass stop
                        total_tank_dt_stop_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "ДТ - 107000024") {
                                    return intVal(a) + intVal(b.mass_stop);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_a92_stop_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "А92 - 107000022") {
                                    return intVal(a) + intVal(b.mass_stop);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_a95_stop_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "А95 - 107000023") {
                                    return intVal(a) + intVal(b.mass_stop);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_kerosin_stop_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "Керосин - 107000027") {
                                    return intVal(a) + intVal(b.mass_stop);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_konfiskat_stop_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "Конфискат") {
                                    return intVal(a) + intVal(b.mass_stop);
                                } else { return intVal(a); }
                            }, 0);
                        // Total mass change
                        total_tank_dt_change_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "ДТ - 107000024") {
                                    return intVal(a) + intVal(b.change_mass);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_a92_change_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "А92 - 107000022") {
                                    return intVal(a) + intVal(b.change_mass);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_a95_change_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "А95 - 107000023") {
                                    return intVal(a) + intVal(b.change_mass);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_kerosin_change_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "Керосин - 107000027") {
                                    return intVal(a) + intVal(b.change_mass);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_konfiskat_change_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.type === "Конфискат") {
                                    return intVal(a) + intVal(b.change_mass);
                                } else { return intVal(a); }
                            }, 0);
                        $('td#start-mass-tank').text((total_tank_dt_start_mass + total_tank_a92_start_mass + total_tank_a95_start_mass + total_tank_kerosin_start_mass + total_tank_konfiskat_start_mass).toFixed(2));
                        $('td#start-volume-tank').text((total_tank_dt_start_valume + total_tank_a92_start_valume + total_tank_a95_start_valume + total_tank_kerosin_start_valume + total_tank_konfiskat_start_valume).toFixed(2));
                        $('td#stop-mass-tank').text((total_tank_dt_stop_mass + total_tank_a92_stop_mass + total_tank_a95_stop_mass + total_tank_kerosin_stop_mass + total_tank_konfiskat_stop_mass).toFixed(2));
                        $('td#stop-volume-tank').text((total_tank_dt_stop_valume + total_tank_a92_stop_valume + total_tank_a95_stop_valume + total_tank_kerosin_stop_valume + total_tank_konfiskat_stop_valume).toFixed(2));
                        $('td#change-mass-tank').text((total_tank_dt_change_mass + total_tank_a92_change_mass + total_tank_a95_change_mass + total_tank_kerosin_change_mass + total_tank_konfiskat_change_mass).toFixed(2));
                        $('td#change-volume-tank').text((total_tank_dt_change_valume + total_tank_a92_change_valume + total_tank_a95_change_valume + total_tank_kerosin_change_valume + total_tank_konfiskat_change_valume).toFixed(2));
                    },
                    columns: [
                        { data: "type", title: "Тип ГСМ", width: "50px", orderable: false, searchable: false },
                        { data: "tank", title: "Резервуар", width: "100px", orderable: false, searchable: false },
                        { data: "mass_start", title: "Масса в начале смены (кг.)", width: "100px", orderable: false, searchable: false },
                        { data: "volume_start", title: "Обьем в начале смены (л.)", width: "100px", orderable: false, searchable: false },
                        { data: "mass_stop", title: "Масса в конце смены (кг.)", width: "100px", orderable: false, searchable: false },
                        { data: "volume_stop", title: "Обьем в конце смены (л.)", width: "100px", orderable: false, searchable: false },
                        { data: "change_mass", title: "Разница (кг.)", width: "100px", orderable: false, searchable: false },
                        { data: "change_volume", title: "Разница (л.)", width: "100px", orderable: false, searchable: false },
                    ],
                    "columnDefs": [
                        { "visible": false, "targets": table_report_fft.groupColumn }
                    ],
                    "order": [[table_report_fft.groupColumn, 'asc']],
                    "drawCallback": function (settings) {
                        var api = this.api();
                        var rows = api.rows({ page: 'current' }).nodes();
                        var last = null;
                        api.column(table_report_fft.groupColumn, { page: 'current' }).data().each(function (group, i) {
                            if (last !== group) {

                                var start_valume;
                                var start_mass;
                                var stop_valume;
                                var stop_mass;
                                var change_valume;
                                var change_mass;
                                switch (group) {
                                    case "ДТ - 107000024":
                                        start_valume = total_tank_dt_start_valume;
                                        stop_valume = total_tank_dt_stop_valume;
                                        change_valume = total_tank_dt_change_valume;
                                        start_mass = total_tank_dt_start_mass;
                                        stop_mass = total_tank_dt_stop_mass;
                                        change_mass = total_tank_dt_change_mass;
                                        break;
                                    case "А92 - 107000022":
                                        start_valume = total_tank_a92_start_valume;
                                        stop_valume = total_tank_a92_stop_valume
                                        change_valume = total_tank_a92_change_valume
                                        start_mass = total_tank_a92_start_mass;
                                        stop_mass = total_tank_a92_stop_mass;
                                        change_mass = total_tank_a92_change_mass;
                                        break;
                                    case "А95 - 107000023":
                                        start_valume = total_tank_a95_start_valume;
                                        stop_valume = total_tank_a95_stop_valume;
                                        change_valume = total_tank_a95_change_valume;
                                        start_mass = total_tank_a95_start_mass;
                                        stop_mass = total_tank_a95_stop_mass;
                                        change_mass = total_tank_a95_change_mass;
                                        break;
                                    case "Керосин - 107000027":
                                        start_valume = total_tank_kerosin_start_valume;
                                        stop_valume = total_tank_kerosin_stop_valume;
                                        change_valume = total_tank_kerosin_change_valume;
                                        start_mass = total_tank_kerosin_start_mass;
                                        stop_mass = total_tank_kerosin_stop_mass;
                                        change_mass = total_tank_kerosin_change_mass;
                                        break;
                                    case "Конфискат":
                                        start_valume = total_tank_konfiskat_start_valume;
                                        stop_valume = total_tank_konfiskat_stop_valume;
                                        change_valume = total_tank_konfiskat_change_valume;
                                        start_mass = total_tank_konfiskat_start_mass;
                                        stop_mass = total_tank_konfiskat_stop_mass;
                                        change_mass = total_tank_konfiskat_change_mass;
                                        break;

                                }

                                $(rows).eq(i).before(
                                    '<tr class="group"><td colspan="1">' + group + '</td><td>' + start_mass.toFixed(2) + '</td><td>' + start_valume.toFixed(2) + '</td><td>' + stop_mass.toFixed(2) + '</td><td>' + stop_valume.toFixed(2) + '</td><td>' + change_mass.toFixed(2) + '</td><td>' + change_valume.toFixed(2) + '</td></tr>'
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
                                doc.content[0].text = 'Сменный отчет емкостя (' + toISOStringTZ(date_start) + ' - ' + toISOStringTZ(date_stop) + ').';
                            }
                        }
                    ]
                });
                //table_report_fft.groupTable();
            },
            // Показать таблицу с данными
            viewTable: function (data_refresh) {
                LockScreen('Мы обрабатываем ваш запрос...');
                if (this.list === null | data_refresh === true) {
                    // Обновим данные
                    getAsyncViewReportFTLOfDateTime(
                        date_start, date_stop,
                        function (result) {
                            table_report_fft.list = result;
                            table_report_fft.loadDataTable(result);
                            table_report_fft.obj.draw();
                        }
                    );
                } else {
                    table_report_fft.loadDataTable(this.list);
                    table_report_fft.obj.draw();
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
                        "mass_start": (data[i].mass_start !== null ? data[i].mass_start.toFixed(2) : null),
                        "volume_start": (data[i].volume_start !== null ? data[i].volume_start.toFixed(2) : null),
                        "mass_stop": (data[i].mass_stop !== null ? data[i].mass_stop.toFixed(2) : null),
                        "volume_stop": (data[i].volume_stop !== null ? data[i].volume_stop.toFixed(2) : null),
                        "change_mass": (data[i].mass_start !== null || data[i].mass_stop !== null ? (data[i].mass_stop - data[i].mass_start).toFixed(2) : null),
                        "change_volume": (data[i].volume_start !== null || data[i].volume_stop !== null ? (data[i].volume_stop - data[i].volume_start).toFixed(2) : null)
                    });
                }
                LockScreenOff();
            },
            //
            groupTable: function () {
                $('#table-report-fft').on('click', 'tr.group', function () {
                    var currentOrder = table_report_fft.obj.order()[0];
                    if (currentOrder[0] === table_report_fft.groupColumn && currentOrder[1] === 'asc') {
                        table_report_fft.obj.order([table_report_fft.groupColumn, 'desc']).draw();
                    }
                    else {
                        table_report_fft.obj.order([table_report_fft.groupColumn, 'asc']).draw();
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
    table_report_fft.initObject();
    panel_select_report.viewTable();
    //});

});