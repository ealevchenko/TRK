$(function () {

    var lang = $.cookie('lang'),
        date_curent = new Date(),
        date_start = null,
        date_stop = null,
        tab_type_reports = {
            html_div: $("#tabs-reports"),
            active: 0,
            initObject: function () {
                $('#link-tabs-report-1').text("ведомость");
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
                // Загрузка библиотек
        loadReference = function (callback) {
            LockScreen('Загрузка справочников...');
            var count = 1;
            // Загрузка списка карточек (common.js)
            getReference_azsCards(function (result) {
                reference_cards = result;
                count -= 1;
                if (count <= 0) {
                    if (typeof callback === 'function') {
                        LockScreenOff();
                        callback();
                    }
                }
            })
        },
        // список карточек
        reference_cards = null,
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
                        // Total volume
                        total_dt_volume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.sap_ozm_bak == 107000024) {
                                    return intVal(a) + intVal(b.sap_valume);
                                } else { return intVal(a); }
                            }, 0);
                        total_a92_volume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.sap_ozm_bak == 107000022) {
                                    return intVal(a) + intVal(b.sap_valume);
                                } else { return intVal(a); }
                            }, 0);
                        total_a95_volume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.sap_ozm_bak == 107000023) {
                                    return intVal(a) + intVal(b.sap_valume);
                                } else { return intVal(a); }
                            }, 0);
                        total_kerosin_volume = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.sap_ozm_bak == 107000027) {
                                    return intVal(a) + intVal(b.sap_valume);
                                } else { return intVal(a); }
                            }, 0);
                        //total_volume = api
                        //    .column(6)
                        //    .data()
                        //    .reduce(function (a, b) {
                        //        return intVal(a) + intVal(b);
                        //    }, 0);
                        // Total mass
                        total_dt_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.sap_ozm_bak == 107000024) {
                                    return intVal(a) + intVal(b.sap_mass);
                                } else { return intVal(a); }
                            }, 0);
                        total_a92_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.sap_ozm_bak == 107000022) {
                                    return intVal(a) + intVal(b.sap_mass);
                                } else { return intVal(a); }
                            }, 0);
                        total_a95_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.sap_ozm_bak == 107000023) {
                                    return intVal(a) + intVal(b.sap_mass);
                                } else { return intVal(a); }
                            }, 0);
                        total_kerosin_mass = api
                            .data()
                            .reduce(function (a, b) {
                                if (b.sap_ozm_bak == 107000027) {
                                    return intVal(a) + intVal(b.sap_mass);
                                } else { return intVal(a); }
                            }, 0);
                        //total_mass = api
                        //    .column(7)
                        //    .data()
                        //    .reduce(function (a, b) {
                        //        return intVal(a) + intVal(b);
                        //    }, 0);


                        $('td#a92-volume').text(total_a92_volume.toFixed(2) + ' (л)');
                        $('td#a95-volume').text(total_a95_volume.toFixed(2) + ' (л)');
                        $('td#dt-volume').text(total_dt_volume.toFixed(2) + ' (л)');
                        $('td#kerosin-volume').text(total_kerosin_volume.toFixed(2) + ' (л)');
                        // Update footer mass
                        $('td#a92-mass').text(total_a92_mass.toFixed(3) + ' (кг)');
                        $('td#a95-mass').text(total_a95_mass.toFixed(3) + ' (кг)');
                        $('td#dt-mass').text(total_dt_mass.toFixed(3) + ' (кг)');
                        $('td#kerosin-mass').text(total_kerosin_mass.toFixed(3) + ' (кг)');
                    },
                    columns: [
                        { data: "start_datetime", title: "Дата и время", width: "150px", orderable: true, searchable: false },
                        { data: "sap_transp_fakt", title: "Гос.Номер ТС", width: "50px", orderable: false, searchable: true },
                        { data: "fuel_type", title: "Вид ГСМ", width: "50px", orderable: true, searchable: true },
                        { data: "sap_valume", title: "Выдано фактически (л)", width: "50px", orderable: false, searchable: false },
                        { data: "sap_mass", title: "Выдано фактически (кг)", width: "50px", orderable: false, searchable: false },
                        { data: "sap_plotnost", title: "Плотность (кг/м3)", width: "50px", orderable: false, searchable: false },
                        { data: "sap_sending", title: "Синхронизация с SAP", width: "150px", orderable: false, searchable: false },
                        { data: "dose", title: "Доза ГСМ (л)", width: "50px", orderable: false, searchable: false },
                        { data: "sap_flag_r", title: "Режим выдачи", width: "100px", orderable: true, searchable: true },
                        { data: "num", title: "№ пист\\НС", width: "50px", orderable: true, searchable: true },
                        { data: "tank_num", title: "Резервуар(ы)", width: "100px", orderable: false, searchable: true },
                        { data: "waybill", title: "Путевой лист", width: "100px", orderable: true, searchable: true },
                        { data: "operator_name", title: "Оператор", width: "100px", orderable: true, searchable: true },
                    ]
                });
            },
            // Показать таблицу с данными
            viewTable: function (data_refresh) {
                LockScreen('Мы обрабатываем ваш запрос...');
                if (this.list === null | data_refresh === true) {
                    // Обновим данные
                    getAsyncViewReportFuelListOfDateTime(
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

                    var cards = reference_cards != null ? reference_cards.getResult(data[i].id_card) : null;

                    this.obj.row.add({
                        "id_fs": data[i].id_fs,
                        "start_datetime": data[i].start_datetime,
                        "sap_transp_fakt": data[i].sap_transp_fakt,
                        "fuel_type": outFuelType(data[i].fuel_type),
                        "sap_valume": data[i].sap_valume !== null ? Number(data[i].sap_valume).toFixed(2) : null,
                        "sap_mass": data[i].sap_mass !== null ? Number(data[i].sap_mass).toFixed(3) : null,
                        "sap_plotnost": data[i].sap_plotnost !== null ? Number(data[i].sap_plotnost).toFixed(5) : null,
                        "sap_sending": data[i].sap_sending,
                        "dose": data[i].dose,
                        "sap_flag_r": outMode(data[i].sap_flag_r),
                        "num": (data[i].trk_num < 10 ? 'П-' + data[i].num : 'НС-' + data[i].num),
                        "tank_num": data[i].tank_num,
                        "waybill": cards != null ? '[КР]' + cards.Number : 'id=' + data[i].id_card,
                        "operator_name": data[i].operator_name,
                        "sap_ozm_bak": data[i].sap_ozm_bak,
                    });
                }
                LockScreenOff();
            },
            // Выподающие списки
            initComplete: function () {
                table_report.obj.columns([2,8]).every(function () {
                    var column = this;
                    var num = column[0][0];
                    //var name = $(column.header()).attr('title');
                    var name = num === 2 ? 'Вид ГСМ' : 'Режим выдачи';
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
    loadReference(function (result) {
        table_report.initObject();
        panel_select_report.viewReport();
    });

});