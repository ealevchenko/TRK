$(function () {

    var tab_type_reports = {
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

            }
        },
        // Таблица 
        table_report = {
            html_table: $('#table-report'),
            obj: null,
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
                    "scrollX": true,
                    jQueryUI: true,
                    "createdRow": function (row, data, index) {

                    },
                    columns: [
                        {
                            className: 'details-control',
                            orderable: false,
                            data: null,
                            defaultContent: '',
                            searchable: false, width: "30px"
                        },
                        { data: "date_start", title: "Дата", width: "50px", orderable: true, searchable: true },
                        { data: "type", title: "ОЗМ", width: "50px", orderable: true, searchable: true },
                        { data: "volume_start", title: "Остаток, объем на начало суток (л)", width: "50px", orderable: true, searchable: true },
                        { data: "mass_start", title: "Остаток, масса на начало суток (кг)", width: "50px", orderable: true, searchable: true },
                        { data: "dens_start", title: "Остаток, плотность на начало суток (кг/м3)", width: "50px", orderable: true, searchable: true },
                        { data: "temp_start", title: "Остаток, температура на начало суток (град. С°)", width: "50px", orderable: true, searchable: true },
                        //{ data: "volume15_start", title: "Остаток на начало суток привед. к 15 град. (л)", width: "50px", orderable: true, searchable: true },
                        //{ data: "mass15_start", title: "Остаток на начало суток привед. к 15 град. (кг)", width: "50px", orderable: true, searchable: true },
                        //{ data: "dens15_start", title: "Плотность на начало суток привед. к 15 град.", width: "50px", orderable: true, searchable: true },

                        { data: "volume_received", title: "Приход, объем (л)", width: "50px", orderable: true, searchable: true },
                        { data: "mass_received", title: "Приход, масса (кг)", width: "50px", orderable: true, searchable: true },
                        { data: "dens_received", title: "Приход, плотность (кг/м3)", width: "50px", orderable: true, searchable: true },
                        { data: "temp_received", title: "Приход, температура (град. С°)", width: "50px", orderable: true, searchable: true },
                        //{ data: "volume15_received", title: "Приход привед. к 15 град. (л)", width: "50px", orderable: true, searchable: true },
                        //{ data: "mass15_received", title: "Приход привед. к 15 град. (кг)", width: "50px", orderable: true, searchable: true },
                        //{ data: "dens15_received", title: "Приход плотность привед. к 15 град. (кг)", width: "50px", orderable: true, searchable: true },

                        { data: "volume_delivery", title: "Расход, объем (л)", width: "50px", orderable: true, searchable: true },
                        { data: "mass_delivery", title: "Расход, масса (кг)", width: "50px", orderable: true, searchable: true },
                        { data: "dens_delivery", title: "Расход, плотность (кг/м3)", width: "50px", orderable: true, searchable: true },
                        { data: "temp_delivery", title: "Расход, температура (град. С°)", width: "50px", orderable: true, searchable: true },
                        //{ data: "volume15_delivery", title: "Расход привед. к 15 град. (л)", width: "50px", orderable: true, searchable: true },
                        //{ data: "mass15_delivery", title: "Расход привед. к 15 град. (кг)", width: "50px", orderable: true, searchable: true },
                        //{ data: "dens15_delivery", title: "Расход плотность привед. к 15 град. (кг)", width: "50px", orderable: true, searchable: true },

                        { data: "volume_stop", title: "Остаток, объем на конец суток (л)", width: "50px", orderable: true, searchable: true },
                        { data: "mass_stop", title: "Остаток, масса на конец суток (кг)", width: "50px", orderable: true, searchable: true },
                        { data: "dens_stop", title: "Остаток, плотность на конец суток (кг/м3)", width: "50px", orderable: true, searchable: true },
                        { data: "temp_stop", title: "Остаток, температура на конец суток (град. С°)", width: "50px", orderable: true, searchable: true },
                        //{ data: "volume15_stop", title: "Остаток на конец суток привед. к 15 град.(л)", width: "50px", orderable: true, searchable: true },
                        //{ data: "mass15_stop", title: "Остаток на конец суток привед. к 15 град. (кг)", width: "50px", orderable: true, searchable: true },
                        //{ data: "dens15_stop", title: "Плотность на конец суток привед. к 15 град.", width: "50px", orderable: true, searchable: true },
                        //{ data: "permissible_error", title: "Допустимая ошибка, 0,65%", width: "50px", orderable: true, searchable: true },
                        { data: "difference_mass", title: "Разница масс (Мн-Мв+Мп) – Мк (кг.)", width: "50px", orderable: true, searchable: true },
                        { data: "pers_difference_mass", title: "% отклонения между массами (Мн-Мв+Мп) и Мк (%)", width: "50px", orderable: true, searchable: true },
                    ],
                    dom: 'Blftipr',
                    //dom: 'Bftripl',
                    buttons: [
                        'copyHtml5',
                        //'excelHtml5',
                        {
                            extend: 'excelHtml5',
                            //title: 'Заголовок_title',
                            message: 'Заголовок_message',
                            //text: 'Save as Excel',

                            //exportOptions: {
                            //    modifier: {
                            //        page: 'all'
                            //    },
                            //    format: {
                            //        header: function (data, columnIdx) {
                            //            if (columnIdx == 1) {
                            //                return 'column_1_header';
                            //            }
                            //            else {
                            //                return data;
                            //            }
                            //        }
                            //    }
                            //}

                            customize: function (xlsx) {
                                //var sheet = xlsx.xl.worksheets['sheet1.xml'];
                                //sheet = 'sheet2.xml';
                                //$('cellXfs', sheet).append('<xf ... />');
                                //$('row:first c', sheet).append($('<div>rrrrrrrrrrrrrrr</div>'));
                            }

                        }
                    ]
                });
                this.initEventSelectChild();
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
                    var deff_mass = (data[i].mass_start + data[i].mass_received - data[i].mass_delivery) - data[i].mass_stop;
                    var pers_deff_mass = data[i].mass_stop !== 0 ? pers_deff_mass = deff_mass * 100 / data[i].mass_stop : (deff_mass !== 0 ? 100.00 : 0.00);
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
                        "difference_mass": deff_mass !== 0 ? Number(deff_mass).toFixed(2) : 0.00,
                        "pers_difference_mass": pers_deff_mass !== 0 ? Number(pers_deff_mass).toFixed(2) : 0.00,

                    });
                }
                LockScreenOff();
            },
            // Показать детали
            initEventSelectChild: function () {
                this.html_table.find('tbody')
                    .on('click', 'td.details-control', function () {
                        var tr = $(this).closest('tr');
                        var row = table_report.obj.row(tr);
                        if (row.child.isShown()) {
                            // This row is already open - close it
                            row.child.hide();
                            tr.removeClass('shown');
                        }
                        else {
                            row.child($('<tr id="detali-transfer"><td colspan="32"><div id="detali' + row.data().id + '" class="detali-operation"> ' +
                                '<table class= "display compact" id="table-detali-' + row.data().id + '" style = "width:100%" cellpadding = "0" ></table>' +
                                '</div></td></tr> ')).show();
                            table_report.viewTableDetali(row.data());
                            tr.addClass('shown');
                        }
                    });
            },
            //
            viewTableDetali: function (data) {

                var table_detali = $('table#table-detali-' + data.id).DataTable({
                    "paging": false,
                    "ordering": true,
                    "info": false,
                    "select": true,
                    "autoWidth": false,
                    "scrollX": true,
                    jQueryUI: true,
                    "createdRow": function (row, data, index) {
                        if (data.count_tanks_delivery > 1)
                            $(row).addClass("total-issue");
                    },
                    columns: [
                        { data: "date_start", title: 'Дата', width: "50px", orderable: true, searchable: true },
                        { data: "fuel_type", title: 'ОЗМ', width: "50px", orderable: true, searchable: true },
                        { data: "tank", title: 'Емкость', width: "50px", orderable: true, searchable: true },
                        //{ data: "serial_number", title: 'Серийный (идентификационный) номер резервуара', width: "50px", orderable: true, searchable: true },
                        //{ data: "unified_tank_number", title: 'Унифицированный номер резервуара', width: "50px", orderable: true, searchable: true },
                        //{ data: "type_name", title: 'Тип (название) резервуара', width: "50px", orderable: true, searchable: true },
                        //{ data: "level_meters_model", title: 'Название (модель) уровнемера', width: "50px", orderable: true, searchable: true },
                        //{ data: "level_meters_serial_number", title: 'Серийный (идентификационный) номер уровнемера', width: "50px", orderable: true, searchable: true },



                        { data: "volume_start", title: 'Остаток, объем на начало суток (л)', width: "50px", orderable: true, searchable: true },
                        { data: "mass_start", title: 'Остаток, масса на начало суток (кг)', width: "50px", orderable: true, searchable: true },
                        { data: "dens_start", title: 'Остаток, плотность на начало суток (кг/м3)', width: "50px", orderable: true, searchable: true },
                        { data: "temp_start", title: 'Остаток, температура на начало суток (град. С°)', width: "50px", orderable: true, searchable: true },
                        //{ data: "volume15_start", title: 'Остаток, объем на начало суток пересчитанный к 15 град. С° (л)', width: "50px", orderable: true, searchable: true },
                        //{ data: "mass15_start", title: 'Остаток, масса на начало суток пересчитанная к 15 град. С° (кг)', width: "50px", orderable: true, searchable: true },
                        //{ data: "dens15_start", title: 'Остаток, плотность на начало суток пересчитанная к 15 град. С° (кг/м3)', width: "50px", orderable: true, searchable: true },

                        { data: "volume_received", title: 'Приход, объем (л)', width: "50px", orderable: true, searchable: true },
                        { data: "mass_received", title: 'Приход, масса (кг)', width: "50px", orderable: true, searchable: true },
                        { data: "dens_received", title: 'Приход, плотность (кг/м3)', width: "50px", orderable: true, searchable: true },
                        { data: "temp_received", title: 'Приход, температура (град. С°)', width: "50px", orderable: true, searchable: true },
                        //{ data: "volume15_received", title: 'Приход, объем пересчитанный к 15 град. С° (л)', width: "50px", orderable: true, searchable: true },
                        //{ data: "mass15_received", title: 'Приход, масса пересчитанная к 15 град. С° (кг)', width: "50px", orderable: true, searchable: true },
                        //{ data: "dens15_received", title: 'Приход, плотность пересчитанная к 15 град. С° (кг/м3)', width: "50px", orderable: true, searchable: true },

                        { data: "volume_delivery", title: 'Расход, объем (л)', width: "50px", orderable: true, searchable: true },
                        { data: "mass_delivery", title: 'Расход, масса (кг)', width: "50px", orderable: true, searchable: true },
                        { data: "dens_delivery", title: 'Расход, плотность (кг/м3)', width: "50px", orderable: true, searchable: true },
                        { data: "temp_delivery", title: 'Расход, температура (град. С°)', width: "50px", orderable: true, searchable: true },
                        //{ data: "volume15_delivery", title: 'Расход, объем пересчитанный к 15 град. С° (л)', width: "50px", orderable: true, searchable: true },
                        //{ data: "mass15_delivery", title: 'Расход, масса пересчитанная к 15 град. С° (кг)', width: "50px", orderable: true, searchable: true },
                        //{ data: "dens15_delivery", title: 'Расход, плотность пересчитанная к 15 град. С°(кг/м3)', width: "50px", orderable: true, searchable: true },

                        { data: "volume_stop", title: 'Остаток, объем на конец суток (л)', width: "50px", orderable: true, searchable: true },
                        { data: "mass_stop", title: 'Остаток, масса на конец суток (кг)', width: "50px", orderable: true, searchable: true },
                        { data: "dens_stop", title: 'Остаток, плотность на конец суток (кг/м3)', width: "50px", orderable: true, searchable: true },
                        { data: "temp_stop", title: 'Остаток, температура на конец суток (град. С°)', width: "50px", orderable: true, searchable: true },
                        //{ data: "volume15_stop", title: 'Остаток, объем на конец суток пересчитанный к 15 град. С° (л)', width: "50px", orderable: true, searchable: true },
                        //{ data: "mass15_stop", title: 'Остаток, масса на конец суток пересчитанная к 15 град. С° (кг)', width: "50px", orderable: true, searchable: true },
                        //{ data: "dens15_stop", title: 'Остаток, плотность на конец суток пересчитанная к 15 град. С° (кг/м3).', width: "50px", orderable: true, searchable: true },

                        //{ data: "permissible_volume15_error", title: 'Допустимая погрешность литров при 15 °С, 0,65%', width: "50px", orderable: true, searchable: true },
                        //{ data: "permissible_mass15_error", title: 'Допустимая погрешность фактических КГ, 0,65%', width: "50px", orderable: true, searchable: true }
                        { data: "difference_mass", title: "Разница масс (Мн-Мв+Мп) – Мк (кг.)", width: "50px", orderable: true, searchable: true },
                        { data: "pers_difference_mass", title: "% отклонения между массами (Мн-Мв+Мп) и Мк (%)", width: "50px", orderable: true, searchable: true },



                    ],
                    dom: 'Blftipr',
                    buttons: [
                        'copyHtml5',
                        'excelHtml5',
                    ]
                });

                LockScreen('Мы обрабатываем ваш запрос...');
                getAsyncViewDailyAccountingDetaliReportOfDateTime(
                    moment(data.date_start)._d,
                    data.type,
                    function (result) {
                        table_detali.clear();
                        for (i = 0; i < result.length; i++) {
                            var deff_mass = (result[i].mass_remains_start + result[i].mass_received - result[i].mass_delivery) - result[i].mass_remains_stop;
                            var pers_deff_mass = result[i].mass_remains_stop !== 0 ? pers_deff_mass = deff_mass * 100 / result[i].mass_remains_stop : (deff_mass !== 0 ? 100.00 : 0.00);

                            table_detali.row.add({
                                "id": result[i].id,
                                "fuel_type": result[i].fuel_type,
                                "date_start": result[i].dt_start,
                                "date_stop": result[i].dt_stop,
                                "ukt_zed": result[i].ukt_zed,
                                "tank": result[i].tank,
                                "serial_number": result[i].serial_number !== null ? result[i].serial_number : result[i].tank,
                                "unified_tank_number": result[i].unified_tank_number,
                                "type_name": result[i].type_name,
                                "level_meters_model": result[i].level_meters_model,
                                "level_meters_serial_number": result[i].level_meters_serial_number,

                                "dt_actual_remains_start": result[i].dt_actual_remains_start,
                                "level_remains_start": result[i].level_remains_start !== null ? Number(result[i].level_remains_start).toFixed(2) : null,
                                "volume_start": result[i].volume_remains_start,
                                "mass_start": result[i].mass_remains_start !== null ? Number(result[i].mass_remains_start).toFixed(2) : 0.00,
                                "dens_start": result[i].dens_avg_remains_start !== null ? Number(result[i].dens_avg_remains_start).toFixed(5) : 0.00000,
                                "temp_start": result[i].temp_remains_start !== null ? Number(result[i].temp_remains_start).toFixed(2) : 0.00,
                                "volume15_start": result[i].volume15_remains_start,
                                "mass15_start": result[i].mass15_remains_start !== null ? Number(result[i].mass15_remains_start).toFixed(2) : 0.00,
                                "dens15_start": result[i].dens15_remains_start !== null ? Number(result[i].dens15_remains_start).toFixed(5) : 0.00000,

                                "volume_received": result[i].volume_received !== null ? result[i].volume_received : 0,
                                "mass_received": result[i].mass_received !== null ? Number(result[i].mass_received).toFixed(2) : 0.00,
                                "dens_received": result[i].dens_received !== null ? Number(result[i].dens_received).toFixed(5) : 0.00000,
                                "temp_received": result[i].temp_received !== null ? Number(result[i].temp_received).toFixed(2) : 0.00,
                                "volume15_received": result[i].volume15_received !== null ? result[i].volume15_received : 0,
                                "mass15_received": result[i].mass15_received !== null ? Number(result[i].mass15_received).toFixed(2) : 0.00,
                                "dens15_received": result[i].dens15_received !== null ? Number(result[i].dens15_received).toFixed(5) : 0.00000,

                                "count_tanks_delivery": result[i].count_tanks_delivery,
                                "volume_delivery": result[i].volume_delivery !== null ? result[i].volume_delivery : 0,
                                "mass_delivery": result[i].mass_delivery !== null ? Number(result[i].mass_delivery).toFixed(2) : 0.00,
                                "dens_delivery": result[i].dens_delivery !== null ? Number(result[i].dens_delivery).toFixed(5) : 0.00000,
                                "temp_delivery": result[i].temp_delivery !== null ? Number(result[i].temp_delivery).toFixed(2) : 0.00,
                                "volume15_delivery": result[i].volume15_delivery !== null ? result[i].volume15_delivery : 0,
                                "mass15_delivery": result[i].mass15_delivery !== null ? Number(result[i].mass15_delivery).toFixed(2) : 0.00,
                                "dens15_delivery": result[i].dens15_delivery !== null ? Number(result[i].dens15_delivery).toFixed(5) : 0.00000,

                                "dt_actual_remains_stop": result[i].dt_actual_remains_stop,
                                "level_remains_stop": result[i].level_remains_stop !== null ? Number(result[i].level_remains_stop).toFixed(2) : null,
                                "volume_stop": result[i].volume_remains_stop,
                                "mass_stop": result[i].mass_remains_stop !== null ? Number(result[i].mass_remains_stop).toFixed(2) : 0.00,
                                "dens_stop": result[i].dens_avg_remains_stop !== null ? Number(result[i].dens_avg_remains_stop).toFixed(5) : 0.00000,
                                "temp_stop": result[i].temp_remains_stop !== null ? Number(result[i].temp_remains_stop).toFixed(2) : 0.00,
                                "volume15_stop": result[i].volume15_remains_stop,
                                "mass15_stop": result[i].mass15_remains_stop !== null ? Number(result[i].mass15_remains_stop).toFixed(2) : 0.00,
                                "dens15_stop": result[i].dens15_remains_stop !== null ? Number(result[i].dens15_remains_stop).toFixed(5) : 0.00000,

                                "permissible_volume15_error": result[i].permissible_volume15_error !== null ? Number(result[i].permissible_volume15_error).toFixed(3) : 0.000,
                                "permissible_mass15_error": result[i].permissible_mass15_error !== null ? Number(result[i].permissible_mass15_error).toFixed(3) : 0.000,

                                "difference_mass": deff_mass !== 0 ? Number(deff_mass).toFixed(2) : 0.00,
                                "pers_difference_mass": pers_deff_mass !== 0 ? Number(pers_deff_mass).toFixed(2) : 0.00,
                            });
                        }
                        LockScreenOff();
                        table_detali.draw();
                    }
                );
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

    table_report.initObject();
    tab_type_reports.activeTable(tab_type_reports.active, true);


});