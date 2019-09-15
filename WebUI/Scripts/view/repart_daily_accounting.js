$(function () {

    var date_curent = new Date(),
        date_start = null,
        date_stop = null,
        tab_type_reports = {
            html_div: $("#tabs-reports"),
            active: 0,
            initObject: function () {
                $('#link-tabs-report-1').text("Отчет");
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
        panel_select_report = {
            html_div_panel: $('#table-panel'),
            date_start: new Date(new Date().getFullYear(), new Date().getMonth(), 1, 0, 0, 0),
            date_stop: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 23, 59, 59),
            period: null,
            obj: null,
            obj_date: null,
            bt_left: $('<button class="ui-button ui-widget ui-corner-all ui-button-icon-only" ><span class="ui-icon ui-icon-circle-triangle-w"></span>text</button>'),
            bt_right: $('<button class="ui-button ui-widget ui-corner-all ui-button-icon-only" ><span class="ui-icon ui-icon-circle-triangle-e"></span>text</button>'),
            bt_refresh: $('<button class="ui-button ui-widget ui-corner-all" ><span class="ui-icon ui-icon-refresh"></span>text</button>'),
            bt_print: $('<button class="ui-button ui-widget ui-corner-all" ><span class="ui-icon ui-icon-refresh"></span>text</button>'),
            label: $('<label for="date" ></label>'),
            span: $('<span id="select-range"></span>'),
            input_data_start: $('<input id="date-start" name="date-start" size="20">'),
            input_data_stop: $('<input id="date-stop" name="date-stop" size="20">'),
            initObject: function () {
                this.html_div_panel
                    .append(this.label.text("Выберите дату"))
                    .append(this.span.append(this.input_data_start).append(' - ').append(this.input_data_stop));
                // настроим компонент выбора времени
                this.obj_date = this.span.dateRangePicker(
                    {
                        language: 'ru',
                        format: 'DD.MM.YYYY HH:mm',
                        separator: '-',
                        autoClose: false,
                        time: {
                            enabled: false
                        },
                        setValue: function (s, s1, s2) {
                            $('input#date-start').val(s1);
                            $('input#date-stop').val(s2);
                            panel_select_report.period = s1 + '-' + s2;
                        }
                    }).
                    bind('datepicker-change', function (evt, obj) {
                        panel_select_report.date_start = obj.date1;
                        panel_select_report.date_stop = obj.date2;
                        panel_select_report.period = obj.value;
                    })
                    .bind('datepicker-closed', function () {
                        tab_type_reports.activeTable(tab_type_reports.active, true);
                    });

                this.obj_date.data('dateRangePicker').setDateRange(
                    (this.date_start.getDate() + '.' + (this.date_start.getMonth() + 1) + '.' + this.date_start.getFullYear() + ' ' + this.date_start.getHours() + ':' + this.date_start.getMinutes() + ':' + this.date_start.getSeconds()),
                    (this.date_stop.getDate() + '.' + (this.date_stop.getMonth() + 1) + '.' + this.date_stop.getFullYear() + ' ' + this.date_stop.getHours() + ':' + this.date_stop.getMinutes() + ':' + this.date_stop.getSeconds()));

            },
            //viewReport: function () {
            //    if (panel_select_report.select_sm.val() === "2") {
            //        date_start = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 19, 0, 0);
            //        date_stop = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate() + 1, 6, 59, 59);
            //    }
            //    if (panel_select_report.select_sm.val() === "1") {
            //        date_start = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 7, 0, 0);
            //        date_stop = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 18, 59, 59);
            //    }
            //    tab_type_reports.activeTable(tab_type_reports.active, true);
            //}
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
                    "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
                    "paging": true,
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

                    },
                    //"footerCallback": function (row, data, start, end, display) {
                    //    var api = this.api(), data;
                    //    // Remove the formatting to get integer data for summation
                    //    var intVal = function (i) {
                    //        return typeof i === 'string' ?
                    //            i.replace(/[\$,]/g, '') * 1 :
                    //            typeof i === 'number' ?
                    //                i : 0;
                    //    };
                    //    // Total volume
                    //    total_dt_volume = api
                    //        .data()
                    //        .reduce(function (a, b) {
                    //            if (b.sap_ozm_bak == 107000024) {
                    //                return intVal(a) + intVal(b.sap_valume);
                    //            } else { return intVal(a); }
                    //        }, 0);
                    //    total_a92_volume = api
                    //        .data()
                    //        .reduce(function (a, b) {
                    //            if (b.sap_ozm_bak == 107000022) {
                    //                return intVal(a) + intVal(b.sap_valume);
                    //            } else { return intVal(a); }
                    //        }, 0);
                    //    total_a95_volume = api
                    //        .data()
                    //        .reduce(function (a, b) {
                    //            if (b.sap_ozm_bak == 107000023) {
                    //                return intVal(a) + intVal(b.sap_valume);
                    //            } else { return intVal(a); }
                    //        }, 0);
                    //    total_kerosin_volume = api
                    //        .data()
                    //        .reduce(function (a, b) {
                    //            if (b.sap_ozm_bak == 107000027) {
                    //                return intVal(a) + intVal(b.sap_valume);
                    //            } else { return intVal(a); }
                    //        }, 0);
                    //    // Total mass
                    //    total_dt_mass = api
                    //        .data()
                    //        .reduce(function (a, b) {
                    //            if (b.sap_ozm_bak == 107000024) {
                    //                return intVal(a) + intVal(b.sap_mass);
                    //            } else { return intVal(a); }
                    //        }, 0);
                    //    total_a92_mass = api
                    //        .data()
                    //        .reduce(function (a, b) {
                    //            if (b.sap_ozm_bak == 107000022) {
                    //                return intVal(a) + intVal(b.sap_mass);
                    //            } else { return intVal(a); }
                    //        }, 0);
                    //    total_a95_mass = api
                    //        .data()
                    //        .reduce(function (a, b) {
                    //            if (b.sap_ozm_bak == 107000023) {
                    //                return intVal(a) + intVal(b.sap_mass);
                    //            } else { return intVal(a); }
                    //        }, 0);
                    //    total_kerosin_mass = api
                    //        .data()
                    //        .reduce(function (a, b) {
                    //            if (b.sap_ozm_bak == 107000027) {
                    //                return intVal(a) + intVal(b.sap_mass);
                    //            } else { return intVal(a); }
                    //        }, 0);

                    //    $('td#a92-volume').text(total_a92_volume.toFixed(2) + ' (л)');
                    //    $('td#a95-volume').text(total_a95_volume.toFixed(2) + ' (л)');
                    //    $('td#dt-volume').text(total_dt_volume.toFixed(2) + ' (л)');
                    //    $('td#kerosin-volume').text(total_kerosin_volume.toFixed(2) + ' (л)');
                    //    // Update footer mass
                    //    $('td#a92-mass').text(total_a92_mass.toFixed(3) + ' (кг)');
                    //    $('td#a95-mass').text(total_a95_mass.toFixed(3) + ' (кг)');
                    //    $('td#dt-mass').text(total_dt_mass.toFixed(3) + ' (кг)');
                    //    $('td#kerosin-mass').text(total_kerosin_mass.toFixed(3) + ' (кг)');
                    //},
                    columns: [
                        { data: "date_start", title: "Дата", width: "50px", orderable: true, searchable: true },
                        { data: "type", title: "ОЗМ", width: "50px", orderable: true, searchable: true },
                        { data: "volume_start", title: "Остаток на начало суток (л)", width: "50px", orderable: true, searchable: true },
                        { data: "mass_start", title: "Остаток на начало суток (кг)", width: "50px", orderable: true, searchable: true },
                        { data: "dens_start", title: "Плотность на начало суток", width: "50px", orderable: true, searchable: true },
                        //{ data: "temp_start", title: "Сред. температура на начало суток", width: "50px", orderable: true, searchable: true },
                        //{ data: "volume15_start", title: "Остаток на начало суток привед. к 15 град. (л)", width: "50px", orderable: true, searchable: true },
                        //{ data: "mass15_start", title: "Остаток на начало суток привед. к 15 град. (кг)", width: "50px", orderable: true, searchable: true },
                        //{ data: "dens15_start", title: "Плотность на начало суток привед. к 15 град.", width: "50px", orderable: true, searchable: true },

                        { data: "volume_received", title: "Приход (л)", width: "50px", orderable: true, searchable: true },
                        { data: "mass_received", title: "Приход (кг)", width: "50px", orderable: true, searchable: true },
                        { data: "dens_received", title: "Приход плотность (кг)", width: "50px", orderable: true, searchable: true },
                        //{ data: "temp_received", title: "Приход темп.", width: "50px", orderable: true, searchable: true },
                        //{ data: "volume15_received", title: "Приход привед. к 15 град. (л)", width: "50px", orderable: true, searchable: true },
                        //{ data: "mass15_received", title: "Приход привед. к 15 град. (кг)", width: "50px", orderable: true, searchable: true },
                        //{ data: "dens15_received", title: "Приход плотность привед. к 15 град. (кг)", width: "50px", orderable: true, searchable: true },

                        { data: "volume_delivery", title: "Расход (л)", width: "50px", orderable: true, searchable: true },
                        { data: "mass_delivery", title: "Расход  (кг)", width: "50px", orderable: true, searchable: true },
                        { data: "dens_delivery", title: "Расход плотность (кг)", width: "50px", orderable: true, searchable: true },
                        //{ data: "temp_delivery", title: "Расход темп.", width: "50px", orderable: true, searchable: true },
                        //{ data: "volume15_delivery", title: "Расход привед. к 15 град. (л)", width: "50px", orderable: true, searchable: true },
                        //{ data: "mass15_delivery", title: "Расход привед. к 15 град. (кг)", width: "50px", orderable: true, searchable: true },
                        //{ data: "dens15_delivery", title: "Расход плотность привед. к 15 град. (кг)", width: "50px", orderable: true, searchable: true },

                        { data: "volume_stop", title: "Остаток на конец суток(л)", width: "50px", orderable: true, searchable: true },
                        { data: "mass_stop", title: "Остаток на конец суток (кг)", width: "50px", orderable: true, searchable: true },
                        { data: "dens_stop", title: "Плотность на конец суток", width: "50px", orderable: true, searchable: true },
                        //{ data: "temp_stop", title: "Сред. температура на конец суток", width: "50px", orderable: true, searchable: true },
                        //{ data: "volume15_stop", title: "Остаток на конец суток привед. к 15 град.(л)", width: "50px", orderable: true, searchable: true },
                        //{ data: "mass15_stop", title: "Остаток на конец суток привед. к 15 град. (кг)", width: "50px", orderable: true, searchable: true },
                        //{ data: "dens15_stop", title: "Плотность на конец суток привед. к 15 град.", width: "50px", orderable: true, searchable: true },
                        //{ data: "permissible_error", title: "Допустимая ошибка, 0,65%", width: "50px", orderable: true, searchable: true },
                    ],
                    dom: 'Blftipr',
                    buttons: [
                        'copyHtml5',
                        'excelHtml5',
                        //{
                        //    extend: 'pdfHtml5',
                        //    text: 'PDF',
                        //    pageSize: 'LEGAL',
                        //    orientation: 'landscape',
                        //    customize: function (doc) {
                        //        doc.content[0].text = 'Заправочная ведомость (' + toISOStringTZ(date_start) + ' - ' + toISOStringTZ(date_stop) + ').';
                        //        var tblBody = doc.content[1].table.body;
                        //        tblBody[0][4].text = 'Тип ГСМ';
                        //        tblBody[0][10].text = 'Тип Выдачи';
                        //    }
                        //}
                    ]
                });
            },
            // Показать таблицу с данными
            viewTable: function (data_refresh) {
                LockScreen('Мы обрабатываем ваш запрос...');
                if (this.list === null | data_refresh === true) {
                    // Обновим данные
                    getAsyncViewDailyAccountingReportOfDateTime(
                        panel_select_report.date_start,
                        panel_select_report.date_stop,
                        function (result) {
                            table_report.list = result;
                            table_report.loadDataTable(result);
                            //table_report.initComplete();
                            table_report.obj.draw();
                        }
                    );
                } else {
                    table_report.loadDataTable(this.list);
                    //table_report.initComplete();
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
                        "type": data[i].type,
                        "date_start": data[i].date_start,
                        "date_stop": data[i].date_stop,
                        "volume_start": data[i].volume_start,
                        "mass_start": data[i].mass_start !== null ? Number(data[i].mass_start).toFixed(2) : 0.00,
                        "dens_start": data[i].dens_start !== null ? Number(data[i].dens_start).toFixed(5) : 0.00000,
                        "temp_start": data[i].temp_start !== null ? Number(data[i].temp_start).toFixed(2) : 0.00,
                        "volume15_start": data[i].volume15_start,
                        "mass15_start": data[i].mass15_start !== null ? Number(data[i].mass15_start).toFixed(2) : 0.00,
                        "dens15_start": data[i].dens15_start !== null ? Number(data[i].dens15_start).toFixed(5) : 0.00000,

                        "volume_received": data[i].volume_received !== null ? data[i].volume_received : 0,
                        "mass_received": data[i].mass_received !== null ? Number(data[i].mass_received).toFixed(2) : 0.00,
                        "dens_received": data[i].dens_received !== null ? Number(data[i].dens_received).toFixed(5) : 0.00000,
                        "temp_received": data[i].temp_received !== null ? Number(data[i].temp_received).toFixed(2) : 0.00,
                        "volume15_received": data[i].volume15_received !== null ? data[i].volume15_received : 0,
                        "mass15_received": data[i].mass15_received !== null ? Number(data[i].mass15_received).toFixed(2) : 0.00,
                        "dens15_received": data[i].dens15_received !== null ? Number(data[i].dens15_received).toFixed(5) : 0.00000,

                        "volume_delivery": data[i].volume_delivery !== null ? data[i].volume_delivery : 0,
                        "mass_delivery": data[i].mass_delivery !== null ? Number(data[i].mass_delivery).toFixed(2) : 0.00,
                        "dens_delivery": data[i].dens_delivery !== null ? Number(data[i].dens_delivery).toFixed(5) : 0.00000,
                        "temp_delivery": data[i].temp_delivery !== null ? Number(data[i].temp_delivery).toFixed(2) : 0.00,
                        "volume15_delivery": data[i].volume15_delivery !== null ? data[i].volume15_delivery : 0,
                        "mass15_delivery": data[i].mass15_delivery !== null ? Number(data[i].mass15_delivery).toFixed(2) : 0.00,
                        "dens15_delivery": data[i].dens15_delivery !== null ? Number(data[i].dens15_delivery).toFixed(5) : 0.00000,

                        "volume_stop": data[i].volume_stop !== null ? data[i].volume_stop : 0,
                        "mass_stop": data[i].mass_stop !== null ? Number(data[i].mass_stop).toFixed(2) : 0.00,
                        "dens_stop": data[i].dens_stop !== null ? Number(data[i].dens_stop).toFixed(5) : 0.00000,
                        "temp_stop": data[i].temp_stop !== null ? Number(data[i].temp_stop).toFixed(2) : 0.00,
                        "volume15_stop": data[i].volume15_stop !== null ? data[i].volume15_stop : 0,
                        "mass15_stop": data[i].mass15_stop !== null ? Number(data[i].mass15_stop).toFixed(2) : 0.00,
                        "dens15_stop": data[i].dens15_stop !== null ? Number(data[i].dens15_stop).toFixed(5) : 0.00000,
                        //"permissible_error": data[i].permissible_error !== null ? Number(data[i].permissible_error).toFixed(3) : 0.000
                    });
                }
                LockScreenOff();
            },
            // Выподающие списки
            //initComplete: function () {
            //    table_report.obj.columns([4, 10]).every(function () {
            //        var column = this;
            //        var num = column[0][0];
            //        //var name = $(column.header()).attr('title');
            //        var name = num === 4 ? 'Вид ГСМ' : 'Режим выдачи';
            //        var select = $('<select><option value="">Все</option></select>')
            //            .appendTo($(column.header()).empty().append(name))
            //            .on('change', function () {
            //                var val = $.fn.dataTable.util.escapeRegex(
            //                    $(this).val()
            //                );
            //                column
            //                    .search(val ? '^' + val + '$' : '', true, false)
            //                    .draw();
            //            });
            //        column.data().unique().sort().each(function (d, j) {
            //            select.append('<option value="' + d + '">' + d + '</option>');
            //        });
            //    });
            //},
            //
            //createTable: function (data) {
            //    var thead = '<thead>' +
            //        '<tr>' +
            //        '<th>Дата и время</th>' +
            //        '<th>Гос.Номер ТС</th>' +
            //        '<th>Вид ГСМ</th>' +
            //        '<th>Выдано фактически (л)</th>' +
            //        '<th>Выдано фактически (кг)</th>' +
            //        '<th>Плотность (кг/м3)</th>' +
            //        '<th>Синхронизация с SAP</th>' +
            //        '<th>Доза ГСМ (л)</th>' +
            //        '<th>Режим выдачи</th>' +
            //        '<th>№ пист\\НС</th>' +
            //        '<th>Резервуар(ы)</th>' +
            //        '<th>Путевой лист</th>' +
            //        '<th>Оператор</th>' +
            //        '</tr>' +
            //        '</thead>';
            //    var tbody = '<tbody>';
            //    if (data !== null) {
            //        for (i = 0; i < data.length; i++) {
            //            var cards = reference_cards !== null ? reference_cards.getResult(data[i].id_card) : null;
            //            tbody += '<tr>' +
            //                '<td class="1">' + data[i].start_datetime + '</td>' +
            //                '<td class="1">' + data[i].sap_transp_fakt + '</td>' +
            //                '<td class="1">' + outFuelType(data[i].fuel_type) + '</td>' +
            //                '<td class="1">' + (data[i].sap_valume !== null ? Number(data[i].sap_valume).toFixed(2) : null) + '</td>' +
            //                '<td class="1">' + (data[i].sap_mass !== null ? Number(data[i].sap_mass).toFixed(3) : null) + '</td>' +
            //                '<td class="1">' + (data[i].sap_plotnost !== null ? Number(data[i].sap_plotnost).toFixed(5) : null) + '</td>' +
            //                '<td class="1">' + data[i].sap_sending + '</td>' +
            //                '<td class="1">' + data[i].dose + '</td>' +
            //                '<td class="1">' + outMode(data[i].sap_flag_r) + '</td>' +
            //                '<td class="1">' + (data[i].trk_num < 10 ? 'П-' + data[i].num : 'НС-' + data[i].num) + '</td>' +
            //                '<td class="1">' + data[i].tank_num + '</td>' +
            //                '<td class="1">' + (cards ? '[КР]' + cards.Number : 'id=' + data[i].id_card) + '</td>' +
            //                '<td class="1">' + data[i].operator_name + '</td>' +
            //                '</tr>';
            //        }
            //    }
            //    tbody += '</tbody>';
            //    return '<table class="cell-border">' + thead + tbody + '</table>';
            //}
        };

    //-----------------------------------------------------------------------------------------
    // Функции
    //-----------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------
    // Инициализация объектов
    //-----------------------------------------------------------------------------------------
    panel_select_report.initObject();
    tab_type_reports.initObject();
    // Загрузка библиотек
    //loadReference(function (result) {
    table_report.initObject();
    tab_type_reports.activeTable(tab_type_reports.active, true);
    //});

});