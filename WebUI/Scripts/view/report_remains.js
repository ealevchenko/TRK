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
                    [
                        { value: 0, text: "По состоянию на 00:00" },
                        { value: 1, text: "По состоянию на 01:00" },
                        { value: 2, text: "По состоянию на 02:00" },
                        { value: 3, text: "По состоянию на 03:00" },
                        { value: 4, text: "По состоянию на 04:00" },
                        { value: 5, text: "По состоянию на 05:00" },
                        { value: 6, text: "По состоянию на 06:00" },
                        { value: 7, text: "По состоянию на 07:00" },
                        { value: 8, text: "По состоянию на 08:00" },
                        { value: 9, text: "По состоянию на 09:00" },
                        { value: 10, text: "По состоянию на 10:00" },
                        { value: 11, text: "По состоянию на 11:00" },
                        { value: 12, text: "По состоянию на 12:00" },
                        { value: 13, text: "По состоянию на 13:00" },
                        { value: 14, text: "По состоянию на 14:00" },
                        { value: 15, text: "По состоянию на 15:00" },
                        { value: 16, text: "По состоянию на 16:00" },
                        { value: 17, text: "По состоянию на 17:00" },
                        { value: 18, text: "По состоянию на 18:00" },
                        { value: 19, text: "По состоянию на 19:00" },
                        { value: 20, text: "По состоянию на 20:00" },
                        { value: 21, text: "По состоянию на 21:00" },
                        { value: 22, text: "По состоянию на 22:00" },
                        { value: 23, text: "По состоянию на 23:00" }
                    ],
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
                            enabled: false
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
                //if (panel_select_report.select_sm.val() === "2") {
                //    date_start = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 19, 0, 0);
                //    //date_stop = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate() + 1, 6, 59, 59);

                //}
                //if (panel_select_report.select_sm.val() === "1") {
                //    date_start = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 7, 0, 0);
                //    //date_stop = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 18, 59, 59);
                //}

                if (panel_select_report.select_sm.val() >= 0 && panel_select_report.select_sm.val() <= 19) {
                    date_start = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), panel_select_report.select_sm.val(), 0, 0);
                    //date_stop = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), panel_select_report.select_sm.val(), 59, 59);
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
                                if (b.fuel_type === "ДТ - 107000024") {
                                    return intVal(a) + intVal(b.volume);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_a92_volume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.fuel_type === "А92 - 107000022") {
                                    return intVal(a) + intVal(b.volume);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_a95_volume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.fuel_type === "А95 - 107000023") {
                                    return intVal(a) + intVal(b.volume);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_kerosin_volume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.fuel_type === "Керосин - 107000027") {
                                    return intVal(a) + intVal(b.volume);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_konfiskat_volume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.fuel_type === "Конфискат") {
                                    return intVal(a) + intVal(b.volume);
                                } else { return intVal(a); }
                            }, 0);

                        // Total mass
                        total_tank_dt_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.fuel_type === "ДТ - 107000024") {
                                    return intVal(a) + intVal(b.mass);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_a92_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.fuel_type === "А92 - 107000022") {
                                    return intVal(a) + intVal(b.mass);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_a95_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.fuel_type === "А95 - 107000023") {
                                    return intVal(a) + intVal(b.mass);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_kerosin_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.fuel_type === "Керосин - 107000027") {
                                    return intVal(a) + intVal(b.mass);
                                } else { return intVal(a); }
                            }, 0);
                        total_tank_konfiskat_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.fuel_type === "Конфискат") {
                                    return intVal(a) + intVal(b.mass);
                                } else { return intVal(a); }
                            }, 0);

                        $('td#total-volume-tank').text((total_tank_dt_volume + total_tank_a92_volume + total_tank_a95_volume + total_tank_kerosin_volume + total_tank_konfiskat_volume).toFixed(3));
                        $('td#total-mass-tank').text((total_tank_dt_mass + total_tank_a92_mass + total_tank_a95_mass + total_tank_kerosin_mass + total_tank_konfiskat_mass).toFixed(2));
                    },
                    columns: [
                        { data: "fuel_type", title: "Тип ГСМ", width: "50px", orderable: true, searchable: false },
                        { data: "tank", title: "Резервуар", width: "50px", orderable: true, searchable: false },
                        { data: "level", title: "Уровень (см)", width: "100px", orderable: false, searchable: false },
                        { data: "volume", title: "Объем (л)", width: "100px", orderable: false, searchable: false },
                        { data: "dens_avg", title: "Плотность (кг/м3)", width: "100px", orderable: false, searchable: false },
                        { data: "mass", title: "Масса (кг)", width: "100px", orderable: false, searchable: false },
                    ],
                    "columnDefs": [
                        { "visible": false, "targets": table_report.groupColumn }
                    ],
                    "order": [[table_report.groupColumn, 'asc']],
                    "drawCallback": function (settings) {
                        var api = this.api();
                        var rows = api.rows({ page: 'current' }).nodes();
                        var type = null;
                        var last = null;
                        api.column(table_report.groupColumn, { page: 'current' }).data().each(function (group, i) {
                            var valume;
                            var mass;
                            var tr_volume;
                            var tr_mass;
                            var tr_dens;
                            //- А - 92 - m=3447, 4 кг, p = 753, 2 кг / м3;
                            //- А - 95 - m=2975.47 кг, p = 762.16 кг / м3;
                            //- Дизель - m=5704,3 кг, p = 842, 46 кг / м3;
                            //- Керосин - m=2149, 9 кг, p = 804 кг / м3;
                            //declare @pipeline_volume_107000022 int = 4577;
                            //declare @pipeline_volume_107000023 int = 3904;
                            //declare @pipeline_volume_107000024 int = 6771;
                            //declare @pipeline_volume_107000027 int = 2674;
                            switch (type) {
                                case "ДТ - 107000024":
                                    //tr_volume = 6771.0;
                                    //tr_mass = 5704.3;
                                    //tr_dens = 842.46;
                                    valume = total_tank_dt_volume;
                                    mass = total_tank_dt_mass;
                                    break;
                                case "А92 - 107000022":
                                    //tr_volume = 4577.0;
                                    //tr_mass = 3447.4;
                                    //tr_dens = 753.2;
                                    valume = total_tank_a92_volume;
                                    mass = total_tank_a92_mass;
                                    break;
                                case "А95 - 107000023":
                                    //tr_volume = 3904.0;
                                    //tr_mass = 2975.47;
                                    //tr_dens = 762.16;
                                    valume = total_tank_a95_volume;
                                    mass = total_tank_a95_mass;
                                    break;
                                case "Керосин - 107000027":
                                    //tr_volume = 2674.0;
                                    //tr_mass = 2149.9;
                                    //tr_dens = 804;
                                    valume = total_tank_kerosin_volume;
                                    mass = total_tank_kerosin_mass;
                                    break;
                                case "Конфискат":
                                    //tr_volume = 0.0;
                                    //tr_mass = 0.0;
                                    //tr_dens = 0.0;
                                    valume = total_tank_konfiskat_volum;
                                    mass = total_tank_konfiskat_mass;
                                    break;
                            }
                            if (last !== group) {
                                if (type !== null) {
                                    //$(rows).eq(i).before(
                                    //    '<tr class=""><td colspan="1">Трубопровод:</td><td></td><td>' + tr_volume.toFixed(3) + '</td><td>' + tr_dens.toFixed(5)+'</td><td>' + tr_mass.toFixed(2)+'</td></tr>'
                                    //);
                                    $(rows).eq(i).before(
                                        '<tr class="group"><td colspan="1">' + type + ' Итого:<td></td></td><td>' + valume.toFixed(3) + '</td><td></td><td>' + mass.toFixed(2) + '</td></tr>'
                                    );
                                }
                                type = group;
                                $(rows).eq(i).before(
                                    '<tr class="group1"><td colspan="1">' + group + '</td><td></td><td></td><td></td><td></td></tr>'
                                );
                                last = group;
                            }
                            if (i === (rows.length - 1)) {
                                valume = total_tank_konfiskat_volume;
                                mass = total_tank_konfiskat_mass;
                                $(rows).eq(i).after(
                                    '<tr class="group"><td colspan="1">' + type + ' Итого:<td></td></td><td>' + valume.toFixed(3) + '</td><td></td><td>' + mass.toFixed(2) + '</td></tr>'
                                );
                                //$(rows).eq(i).after(
                                //    '<tr class=""><td colspan="1">Трубопровод:</td><td></td><td></td><td></td><td></td></tr>'
                                //);
                            }
                        });
                    },
                    dom: 'Bfrtip',
                    buttons: [
                        'copyHtml5',
                        {
                            extend: 'excelHtml5',
                            sheetName: 'Остатки',
                            messageTop: function () {
                                return 'По сотоянию на ' + (date_start !== null ? toISOStringTZ(date_start).split('T').join(' ') : '');

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
                    //getAsyncViewReportTROfDateTime(
                    getAsyncViewReportTSOfDate(
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
                        "id": data[i].id,
                        "id_table": data[i].id_table,
                        "dt": data[i].dt,
                        "fuel_type": data[i].fuel_type !== 0 ? outFuelType(data[i].fuel_type) + ' - ' + data[i].fuel_type : outFuelType(data[i].fuel_type),
                        "tank": $.trim(data[i].tank) === "PL" ? "Трубопровод" : data[i].tank,
                        "fill_percent": data[i].fill_percent,
                        "level": (data[i].level !== null ? Number(data[i].level / 1000).toFixed(3) : null),
                        "volume": (data[i].volume !== null ? data[i].volume.toFixed(3) : null),
                        "mass": (data[i].mass !== null ? data[i].mass.toFixed(2) : null),
                        "dens": data[i].dens,
                        "dens_avg": (data[i].dens_avg !== null ? data[i].dens_avg.toFixed(5) : null),
                        "temp": data[i].temp,
                        "water_leve": data[i].water_leve,
                        "water_volume": data[i].water_volume,
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