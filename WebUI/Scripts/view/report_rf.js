$(function () {

    var date_curent = new Date(),
        date_start = null,
        date_stop = null,
        naks = [],
        tankers = [],
        // Типы отчетов
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
                    panel_select_report.viewReport();
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
                        panel_select_report.viewReport();
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
            obj: null,
            select: null,
            select_id: null,
            list: [],
            groupColumn: 0,
            table_html: "",
            table_foot_html: "",
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
                        naks = [];
                        tankers = [];
                        var total_nakl = 0;
                        var total_manual = 0;
                        var total_change = 0;
                        data.forEach(function (row, i) {
                            // Сумма по наклодным
                            var nak = getObjects(naks, 'num', row.railway_num_nak);
                            if (nak === null || nak.length === 0) {
                                naks.push({ 'num': row.railway_num_nak, 'sum': row.change_mass !== null ? Number(row.change_mass) : 0, 'count': 1 });
                            } else {
                                naks.forEach(function (row_nak, i) {
                                    if (row_nak.num === row.railway_num_nak) {
                                        naks[i].sum += row.change_mass !== null ? Number(row.change_mass) : 0;
                                        naks[i].count += 1;
                                    }
                                });
                            }
                            // Сумма по цистернам
                            var tanker = getObjects(tankers, 'num', row.railway_num_tanker);
                            if (tanker === null || tanker.length === 0) {
                                total_nakl += row.railway_nak_mass;
                                total_manual += row.railway_manual_mass;
                                tankers.push({ 'num': row.railway_num_tanker, 'sum': row.change_mass !== null ? Number(row.change_mass) : 0, 'count': 1 });
                            } else {
                                tankers.forEach(function (row_tank, i) {
                                    if (row_tank.num === row.railway_num_tanker) {
                                        tankers[i].sum += row.change_mass !== null ? Number(row.change_mass) : 0;
                                        tankers[i].count += 1;
                                    }
                                });
                            }
                        });


                        tankers.forEach(function (row_sum_tanks, i) {
                            total_change += row_sum_tanks.sum;
                        });

                        table_report.table_foot_html = "<tfoot>" +
                            "<tr>" +
                            "<td class='total-footr numbe'>" + total_nakl + "</td>" +
                            "<td colspan='3'></td>" +
                            "<td class='total-foot numbe'>" + total_manual + "</td>" +
                            "<td colspan='5'></td>" +
                            "<td class='total-foot numbe'>" + total_change + "</td>" +
                            "<td class='total-foot numbe'>" + total_change + "</td>" +
                            "<td class='total-foot numbe'>" + (total_change !== 0 ? Number(((total_manual - total_change) / total_change) * 100.0).toFixed(3) : 0) + "</td>" +
                            "<td class='total-foot numbe'>" + (total_change !== 0 ? Number(((total_nakl - total_change) / total_change) * 100.0).toFixed(3) : 0) + "</td>" +
                            "<td class='total-foot numbe'>" + (total_nakl !== 0 ? Number(((total_manual - total_nakl) / total_nakl) * 100.0).toFixed(3) : 0) + "</td>" +
                            "</tr>" +
                            "</tfoot>";

                        $('td#total-nakl').text(total_nakl);
                        $('td#total-manual').text(total_manual);
                        $('td#total-change').text(total_change);
                        $('td#total-change-all').text(total_change);
                        $('td#total-deviation-manual-sys').text(total_change !== 0 ? Number(((total_manual - total_change) / total_change) * 100.0).toFixed(3) : 0);
                        $('td#total-deviation-nakl-sys').text(total_change !== 0 ? Number(((total_nakl - total_change) / total_change) * 100.0).toFixed(3) : 0);
                        $('td#total-deviation-manual-nakl').text(total_nakl !== 0 ? Number(((total_manual - total_nakl) / total_nakl) * 100.0).toFixed(3) : 0);
                    },
                    columns: [
                        { data: "group", title: "Группа", width: "50px", orderable: true, searchable: false },
                        { data: "fuel", title: "ГСМ", width: "50px", orderable: true, searchable: false, visible: false },
                        { data: "railway_num_nak", title: "Ж.д. накладная", width: "50px", orderable: false, searchable: true, visible: false },
                        { data: "railway_num_tanker", title: "№ цистерны", width: "50px", orderable: false, searchable: true, visible: false },
                        //{ data: "railway_provider", title: "Поставщик", width: "150px", orderable: false, searchable: false, visible:false  },
                        { data: "railway_nak_mass", title: "Масса по накл (кг.)", width: "50px", orderable: false, searchable: false },
                        { data: "railway_manual_level", title: "Уровень р.з.", width: "50px", orderable: false, searchable: false },
                        { data: "railway_manual_volume", title: "Объем р.з.", width: "50px", orderable: false, searchable: false },
                        { data: "railway_manual_dens", title: "Плотность р.з.", width: "50px", orderable: false, searchable: false },
                        { data: "railway_manual_mass", title: "Масса р.з.", width: "50px", orderable: false, searchable: false },
                        { data: "num", title: "Резервуар", width: "50px", orderable: false, searchable: false },
                        { data: "start_tank", title: "Начало", width: "150px", orderable: false, searchable: false },
                        { data: "start_mass", title: "Масса в начале (кг.)", width: "50px", orderable: false, searchable: false },
                        { data: "stop_tank", title: "Конец", width: "150px", orderable: false, searchable: false },
                        { data: "stop_mass", title: "Масса в конце (кг.)", width: "50px", orderable: false, searchable: false },
                        { data: "change_mass", title: "Приняли (кг.)", width: "50px", orderable: false, searchable: false },
                        { data: "change_mass_all", title: "Приняли итого (кг.)", width: "50px", orderable: false, searchable: false },
                        { data: "deviation_manual_sys", title: "Погрешности массы ручного замера и системы (%)", width: "50px", orderable: false, searchable: false },
                        { data: "deviation_nakl_sys", title: "Погрешности массы по накладной и системы (%)", width: "50px", orderable: false, searchable: false },
                        { data: "deviation_manual_nakl", title: "Погрешности массы ручной замер и накладная (%)", width: "50px", orderable: false, searchable: false },

                    ],
                    "columnDefs": [
                        { "visible": false, "targets": table_report.groupColumn }
                    ],
                    "order": [[table_report.groupColumn, 'asc']],
                    "drawCallback": function (settings) {
                        var api = this.api();
                        var rows = api.rows({ page: 'current' }).nodes();
                        var last = null;
                        var last_nak = null;
                        table_report.table_html = "";
                        api.column([table_report.groupColumn], { page: 'current' }).data().each(function (group, i) {

                            var type_fuel = api.column(1).data()[i];
                            var num_nak = api.column(2).data()[i];
                            var nak_mass = api.column(4).data()[i];
                            var manual_level = api.column(5).data()[i];
                            var manual_volume = api.column(6).data()[i];
                            var manual_dens = api.column(7).data()[i];
                            var manual_mass = api.column(8).data()[i];

                            var num = api.column(9).data()[i];
                            var start_tank = api.column(10).data()[i];
                            var start_mass = api.column(11).data()[i];
                            var stop_tank = api.column(12).data()[i];
                            var stop_mass = api.column(13).data()[i];
                            var change_mass = api.column(14).data()[i];

                            if (last_nak !== num_nak) {
                                var nak = getObjects(naks, 'num', num_nak);

                                $(rows).eq(i).before(
                                    '<tr class="nakladnaya"><td colspan="10" class="left">Тип ГСМ - ' + type_fuel + ' Накладная №' + num_nak + '</td><td>' + nak[0].sum + '</td><td></td><td></td><td></td><td></td></tr>'
                                );
                                table_report.table_html += '<tr class="nakladnaya"><td colspan="10" class="left">Тип ГСМ - ' + type_fuel + ' Накладная №' + num_nak + '</td><td class="number">' + nak[0].sum + '</td><td></td><td></td><td></td><td></td></tr>';

                                last_nak = num_nak;
                            }

                            if (last !== group) {
                                var num_tanker = api.column(3).data()[i];
                                var tanker = getObjects(tankers, 'num', num_tanker);
                                $(rows).eq(i).before(
                                    //'<tr class="group"><td colspan="10"> Цистерна №' + num_tanker + '</td><td>' + tanker[0].sum + '</td><td></td><td></td><td></td><td></td></tr>'
                                    '<tr class="group"><td colspan="15" class="left"> Цистерна №' + num_tanker + '</td></tr>'
                                );
                                table_report.table_html += '<tr class="group"><td colspan="15" class="left"> Цистерна №' + num_tanker + '</td></tr>';
                                var raz_treb = Number(tanker[0].sum - Number(nak_mass));
                                var raz_manual = Number(tanker[0].sum - Number(manual_mass));
                                $(rows).eq(i).before(
                                    //'<tr class=""><td rowspan="' + nak[0].count + '">' + nak_mass + '</td><td rowspan="' + nak[0].count + '">' + manual_level + '</td><td rowspan="' + nak[0].count + '">' + manual_volume + '</td><td rowspan="' + nak[0].count + '">' + manual_dens + '</td><td rowspan="' + nak[0].count +'">' + manual_mass + '</td><td colspan="5" class="razniza-txt">Расхождения накладная (ручные замеры) :</td><td class="razniza">' + raz_treb + '(' + raz_manual + ')' + '</td></tr>'
                                    '<tr class=""><td rowspan="' + tanker[0].count + '">' + nak_mass + '</td><td rowspan="' + tanker[0].count + '">' + manual_level + '</td><td rowspan="' + tanker[0].count + '">' + manual_volume + '</td><td rowspan="' + tanker[0].count + '">' + manual_dens + '</td><td rowspan="' + tanker[0].count + '">' + manual_mass + '</td><td>' + num + '</td><td>' + start_tank + '</td><td>' + start_mass + '</td><td>' + stop_tank + '</td><td>' + stop_mass + '</td><td>' + change_mass + '</td><td rowspan="' + tanker[0].count + '">' + tanker[0].sum + '</td>' +
                                    '<td rowspan="' + tanker[0].count + '">' + Number(((manual_mass - tanker[0].sum) / tanker[0].sum) * 100.0).toFixed(3) + '</td>' +
                                    '<td rowspan="' + tanker[0].count + '">' + Number(((nak_mass - tanker[0].sum) / tanker[0].sum) * 100.0).toFixed(3) + '</td>' +
                                    '<td rowspan="' + tanker[0].count + '">' + Number(((manual_mass - nak_mass) / nak_mass) * 100.0).toFixed(3) + '</td></tr>'
                                );
                                table_report.table_html += '<tr class=""><td rowspan="' + tanker[0].count + '" class="number">' + nak_mass + '</td><td rowspan="' + tanker[0].count + '" class="number">' + manual_level + '</td><td rowspan="' + tanker[0].count + '" class="number">' + manual_volume + '</td><td rowspan="' + tanker[0].count + '" class="number">' + manual_dens + '</td><td rowspan="' + tanker[0].count + '" class="number">' + manual_mass + '</td><td>' + num + '</td><td>' + start_tank + '</td><td class="number">' + start_mass + '</td><td>' + stop_tank + '</td><td class="number">' + stop_mass + '</td><td class="number">' + change_mass + '</td><td rowspan="' + tanker[0].count + '" class="number">' + tanker[0].sum + '</td>' +
                                    '<td rowspan="' + tanker[0].count + '" class="number">' + Number(((manual_mass - tanker[0].sum) / tanker[0].sum) * 100.0).toFixed(3) + '</td>' +
                                    '<td rowspan="' + tanker[0].count + '" class="number">' + Number(((nak_mass - tanker[0].sum) / tanker[0].sum) * 100.0).toFixed(3) + '</td>' +
                                    '<td rowspan="' + tanker[0].count + '" class="number">' + Number(((manual_mass - nak_mass) / nak_mass) * 100.0).toFixed(3) + '</td></tr>'
                                last = group;
                            } else {
                                $(rows).eq(i).before(
                                    //'<tr class=""><td colspan="5"></td><td>' + num + '</td><td>' + start_tank + '</td><td>' + start_mass + '</td><td>' + stop_tank + '</td><td>' + stop_mass + '</td><td>' + change_mass + '</td></tr>'
                                    '<tr class=""><td>' + num + '</td><td>' + start_tank + '</td><td>' + start_mass + '</td><td>' + stop_tank + '</td><td>' + stop_mass + '</td><td>' + change_mass + '</td></tr>'
                                );
                                table_report.table_html += '<tr class=""><td>' + num + '</td><td>' + start_tank + '</td><td class="number">' + start_mass + '</td><td>' + stop_tank + '</td><td class="number">' + stop_mass + '</td><td class="number">' + change_mass + '</td></tr>';
                            }

                            $(rows).eq(i).detach();
                        });

                    },
                    dom: 'Bfrtip',
                    buttons: [
                        'copyHtml5',
                        //'excelHtml5',
                        {

                            text: 'Excel',

                            action: function (e, dt, node, conf) {

                                table_report.exportTable();

                            }

                        }
                    ]
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
                        "start_tank": toCorrectDateTime(data[i].start_tank),
                        "start_mass": data[i].start_mass !== null ? data[i].start_mass.toFixed(2) : null,
                        "stop_tank": toCorrectDateTime(data[i].stop_tank),
                        "stop_mass": data[i].stop_mass !== null ? data[i].stop_mass.toFixed(2) : null,
                        "change_mass": data[i].start_mass !== null && data[i].stop_mass !== null ? (data[i].stop_mass - data[i].start_mass).toFixed(2) : 'Прием ГСМ',
                        "change_mass_all": null,
                        "deviation_manual_sys": null,
                        "deviation_nakl_sys": null,
                        "deviation_manual_nakl": null
                    });
                }
                LockScreenOff();
            },
            // Экспорт в excel
            exportTable: function () {
                var css = "table {border-collapse: collapse;border: 1px solid black; font-size:14px;}" +
                    "table caption {font-weight:bold; font-size:14px;}" +
                    "tr { height: auto }" +
                    "th { border: 1px solid black;}" +
                    "td { border: 1px solid black;}" +
                    "table td {text-align: right;border: 1px solid black;}" +
                    "table td.left, .table-shift-report th.title-foot {text-align: left;}" +
                    "table th.title-foot, .table-shift-report td.total-foot {color:#0b23a7;font-weight: bold;}" +
                    "table td.number {mso-displayed-decimal-separator:'\,'; mso-number-format: '0.000';}";

                var tab = "<table>" +
                    "<caption>" + "Сменный отчёт приёма топлива в резервуары с " + toISOStringTZ(date_start).substring(0, 19) + " по " + toISOStringTZ(date_stop).substring(0, 19) + "</caption>"+
                    "<thead>" +
                    "<tr>" +
                    "<th>Масса по накл (кг.)</th>" +
                    "<th>Уровень р.з.</th>" +
                    "<th>Объем р.з.</th>" +
                    "<th>Плотность р.з.</th>" +
                    "<th>Масса р.з.</th>" +
                    "<th>Резервуар</th>" +
                    "<th>Начало</th>" +
                    "<th>Масса в начале (кг.)</th>" +
                    "<th>Конец</th>" +
                    "<th>Масса в конце (кг.)</th>" +
                    "<th>Приняли (кг.)</th>" +
                    "<th>Приняли итого (кг.)</th>" +
                    "<th>Погрешности массы ручного замера и системы (%)</th>" +
                    "<th>Погрешности массы по накладной и системы (%)</th>" +
                    "<th>Погрешности массы ручной замер и накладная (%)</th>" +
                    "</tr>" +
                    "</thead>" +
                    "<tbody>" + table_report.table_html + "</tbody>" + table_report.table_foot_html + "</table>";
                fnExcelReport1("Отчет", tab, css, "Сменный отчёт приёма топлива в резервуары с " + toISOStringTZ(date_start).substring(0, 19) + " по "+toISOStringTZ(date_stop).substring(0, 19)); //
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
    panel_select_report.viewReport();

});