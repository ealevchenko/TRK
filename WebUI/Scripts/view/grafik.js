$(function () {

    var date_curent = new Date(),
        date_start = null,
        date_stop = null,
        tab_type_reports = {
            html_div: $("#tabs-reports"),
            active: 0,
            initObject: function () {
                $('#link-tabs-report-1').text("Тренды");
                $('#link-tabs-report-2').text("Данные");
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
                    // Вызвать тренды
                    //table_report.viewTable(data_refresh);
                    trend_tank.view();
                }
                if (active === 1) {
                    trend_tank.view();
                    // Вызвать данные
                    //table_report.viewTable(data_refresh);
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
            label: $('<label for="date">Выберите дату:</label>'),
            label_type: $('<label>Тип ГСМ:</label>'),
            label_tanks: $('<label>Емкость:</label>'),
            span: $('<span id="select-range"></span>'),
            input_date: $('<input id="date" name="date" size="20">'),
            select_sm: $('<select class="ui-widget-content ui-corner-all"></select>'),
            select_type: $('<select id="type-fuel" class="ui-widget-content ui-corner-all"></select>'),
            select_tanks: $('<select id="tanks" class="ui-widget-content ui-corner-all"></select>'),
            initObject: function () {
                this.span.append(this.input_date);
                obj = this.html_div_panel;
                obj
                    //.append(this.bt_left)
                    .append(this.label)
                    .append(this.span)
                    //.append(this.bt_right)
                    .append(this.select_sm)
                    .append(this.label_type)
                    .append(this.select_type)
                    .append(this.label_tanks)
                    .append(this.select_tanks)
                    .append(this.bt_refresh);
                //this.bt_left.attr('title',(langView('bt_left_title', langs)));
                this.label;
                //this.bt_right.attr('title',langView('bt_right_title', langs));
                this.bt_refresh.attr('title', "Обновить...");
                this.bt_refresh.text("Обновить...");

                this.bt_refresh.on('click', function () {
                    if (panel_select_report.select_sm.val() === "Н") {
                        date_start = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 19, 0, 0);
                        date_stop = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate() + 1, 6, 59, 59);
                    }
                    if (panel_select_report.select_sm.val() === "Д") {
                        date_start = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 7, 0, 0);
                        date_stop = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), 18, 59, 59);
                    }
                    if (panel_select_report.select_sm.val() >= 0 && panel_select_report.select_sm.val() <= 19) {
                        date_start = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), panel_select_report.select_sm.val(), 0, 0);
                        date_stop = new Date(date_curent.getFullYear(), date_curent.getMonth(), date_curent.getDate(), panel_select_report.select_sm.val(), 59, 59);
                    }

                    tab_type_reports.activeTable(tab_type_reports.active, true);
                });

                // Настроим выбор времени
                initSelect(
                    this.select_sm,
                    { width: 200 },
                    [
                        { value: "Д", text: "Смена Д (07:00-18:59)" },
                        { value: "Н", text: "Смена Н (19:00-06:59)" },
                        { value: 0, text: "00:00 - 00:59" },
                        { value: 1, text: "01:00 - 01:59" },
                        { value: 2, text: "02:00 - 02:59" },
                        { value: 3, text: "03:00 - 03:59" },
                        { value: 4, text: "04:00 - 04:59" },
                        { value: 5, text: "05:00 - 05:59" },
                        { value: 6, text: "06:00 - 06:59" },
                        { value: 7, text: "07:00 - 07:59" },
                        { value: 8, text: "08:00 - 08:59" },
                        { value: 9, text: "09:00 - 09:59" },
                        { value: 10, text: "10:00 - 10:59" },
                        { value: 11, text: "11:00 - 11:59" },
                        { value: 12, text: "12:00 - 12:59" },
                        { value: 13, text: "13:00 - 13:59" },
                        { value: 14, text: "14:00 - 14:59" },
                        { value: 15, text: "15:00 - 15:59" },
                        { value: 16, text: "16:00 - 16:59" },
                        { value: 17, text: "17:00 - 17:59" },
                        { value: 18, text: "18:00 - 17:59" },
                        { value: 19, text: "19:00 - 19:59" },
                        { value: 20, text: "20:00 - 20:59" },
                        { value: 21, text: "21:00 - 21:59" },
                        { value: 22, text: "22:00 - 22:59" },
                        { value: 23, text: "23:00 - 23:59" }
                    ],
                    null,
                    "Д",
                    function (event, ui) {
                        event.preventDefault();
                        // Обработать выбор смены
                    },
                    null);
                // Настроим выбор типа ГСМ
                initSelect(
                    this.select_type,
                    { width: 120 },
                    [{ value: '107000022', text: 'А92' }, { value: '107000023', text: 'А95' }, { value: '107000024', text: 'ДТ' }, { value: '107000027', text: 'Керосин' }],
                    null,
                    -1,
                    function (event, ui) {
                        event.preventDefault();

                        if (ui.item.value !== '-1') {
                            updateOptionSelect(panel_select_report.select_tanks, ozm_bak.getTanks(panel_select_report.select_type.val()), null, -1, null);
                        }
                    },
                    null);
                // Настроим выбор емкости
                initSelect(
                    this.select_tanks,
                    { width: 120 },
                    [],
                    null,
                    -1,
                    function (event, ui) {
                        event.preventDefault();

                        if (ui.item.value !== '-1') {
                            //
                        }
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

                    });
                // Выставим текущую дату
                var date_curent_set = date_curent.getDate() + '.' + (date_curent.getMonth() + 1) + '.' + date_curent.getFullYear() + ' 00:00';
                this.obj_date.data('dateRangePicker').setDateRange(date_curent_set, date_curent_set, true);
            }
        },
        // График
        trend_tank = {
            chart: null,
            table: null,
            list: null,
            type_fuel: null,
            num: null,
            start: null,
            stop: null,
            // Инициализация графика
            initTrend: function () {
                am4core.ready(function () {

                    // Themes begin
                    am4core.useTheme(am4themes_animated);
                    // Themes end

                    // Create chart instance
                    trend_tank.chart = am4core.create("chartdiv", am4charts.XYChart);

                    // Increase contrast by taking evey second color
                    //trend_tank.chart.colors.step = 2;

                    trend_tank.chart.colors.list = [
                        am4core.color("#0026ff"),
                        am4core.color("#ff6a00"),
                        am4core.color("#ff0000"),
                        am4core.color("#b200ff"),
                        am4core.color("#000000"),
                        am4core.color("#0c7a1a"),
                    ];


                    // Add data
                    //this.chart.data = trend_tank.generateChartData();
                    //this.chart.data = [];
                    // Create axes
                    var dateAxis = trend_tank.chart.xAxes.push(new am4charts.DateAxis());
                    dateAxis.renderer.minGridDistance = 50;

                    // Create series
                    function createAxisAndSeries(field, name, opposite, bullet) {
                        var valueAxis = trend_tank.chart.yAxes.push(new am4charts.ValueAxis());
                        switch(field){
                            case "level":
                                valueAxis.min = 0;
                                valueAxis.max = 3000;
                                break;
                            case "volume":
                                valueAxis.min = 0;
                                valueAxis.max = 80000;
                                break;
                            case "dens":
                                valueAxis.min = 700;
                                valueAxis.max = 900;
                                break;
                            case "mass":
                                valueAxis.min = 0;
                                valueAxis.max = 70000;
                                break;
                            case "temp":
                                valueAxis.min = -20;
                                valueAxis.max = 50;
                                break;
                            case "water_level":
                                valueAxis.min = 0;
                                break;
                        }
                        if (field === "water_level" || field === "volume") valueAxis.min = 0;

                        var series = trend_tank.chart.series.push(new am4charts.LineSeries());
                        series.dataFields.valueY = field;
                        series.dataFields.dateX = "date";
                        series.strokeWidth = 1;
                        series.yAxis = valueAxis;
                        series.name = name;
                        series.tooltipText = "{name}: [bold]{valueY}[/]";
                        series.tensionX = 0.8;
                        //series.legendSettings.valueText = "{valueY.close}";
                        series.legendSettings.itemValueText = "[bold]{valueY}[/bold]";

                        var interfaceColors = new am4core.InterfaceColorSet();

                        //switch (bullet) {
                        //    case "triangle":
                        //        var bullet = series.bullets.push(new am4charts.Bullet());
                        //        bullet.width = 5;
                        //        bullet.height = 5;
                        //        bullet.horizontalCenter = "middle";
                        //        bullet.verticalCenter = "middle";

                        //        var triangle = bullet.createChild(am4core.Triangle);
                        //        triangle.stroke = interfaceColors.getFor("background");
                        //        triangle.strokeWidth = 1;
                        //        triangle.direction = "top";
                        //        triangle.width = 5;
                        //        triangle.height = 5;
                        //        break;
                        //    case "rectangle":
                        //        var bullet = series.bullets.push(new am4charts.Bullet());
                        //        bullet.width = 5;
                        //        bullet.height = 5;
                        //        bullet.horizontalCenter = "middle";
                        //        bullet.verticalCenter = "middle";

                        //        var rectangle = bullet.createChild(am4core.Rectangle);
                        //        rectangle.stroke = interfaceColors.getFor("background");
                        //        rectangle.strokeWidth = 1;
                        //        rectangle.width = 5;
                        //        rectangle.height = 5;
                        //        break;
                        //    default:
                        //        var bullet = series.bullets.push(new am4charts.CircleBullet());
                        //        bullet.circle.stroke = interfaceColors.getFor("background");
                        //        bullet.circle.strokeWidth = 1;
                        //        break;
                        //}

                        valueAxis.renderer.line.strokeOpacity = 1;
                        valueAxis.renderer.line.strokeWidth = 1;
                        valueAxis.renderer.line.stroke = series.stroke;
                        valueAxis.renderer.labels.template.fill = series.stroke;
                        valueAxis.renderer.opposite = opposite;
                        valueAxis.renderer.grid.template.disabled = true;
                    }

                    createAxisAndSeries("level", "Уровень (мм)", false, "circle");
                    createAxisAndSeries("volume", "Объем (л)", false, "triangle");
                    createAxisAndSeries("dens", "Плотность (кг/м3)", true, "rectangle");
                    createAxisAndSeries("mass", "Масса (кг)", false, "rectangle");
                    createAxisAndSeries("temp", "Температура (град. С)", true, "rectangle");
                    createAxisAndSeries("water_level", "Уровень подт. вод. (мм)", true, "rectangle");

                    // Add legend
                    //trend_tank.chart.legend = new am4charts.Legend();

                    trend_tank.chart.legend = new am4charts.Legend();
                    trend_tank.chart.legend.useDefaultMarker = true;
                    var marker = trend_tank.chart.legend.markers.template.children.getIndex(0);
                    marker.cornerRadius(12, 12, 12, 12);
                    marker.strokeWidth = 2;
                    marker.strokeOpacity = 1;
                    marker.stroke = am4core.color("#ccc");

                    // Add cursor
                    trend_tank.chart.cursor = new am4charts.XYCursor();

                    // generate some random data, quite different range


                }); // end am4core.ready()
            },

            initTable: function () {
                trend_tank.table = $('#table-report').DataTable({
                    //"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
                    "paging": false,
                    "ordering": true,
                    "info": false,
                    "select": true,
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
                        { data: "dt", title: "Дата и время", width: "150px", orderable: true, searchable: false },
                        { data: "level", title: "Уровень (мм)", width: "50px", orderable: true, searchable: false },
                        { data: "volume", title: "Объем (л)", width: "50px", orderable: true, searchable: false },
                        { data: "dens", title: "Плотность (кг\\м3)", width: "50px", orderable: true, searchable: false },
                        { data: "mass", title: "Масса (кг)", width: "50px", orderable: true, searchable: false },
                        { data: "temp", title: "Температура (град. С)", width: "50px", orderable: true, searchable: false },
                        { data: "water_level", title: "Уровень подт. вод (мм)", width: "50px", orderable: true, searchable: false }
                    ],
                    dom: 'Bfrtip',
                    buttons: [
                        'copyHtml5',
                        'excelHtml5',
                        //{
                        //    extend: 'pdfHtml5',
                        //    text: 'PDF',
                        //    pageSize: 'LEGAL',
                        //    //orientation: 'landscape',
                        //    customize: function (doc) {
                        //        //doc.content[0].text = 'Прием ГСМ (' + toISOStringTZ(date_start) + ' - ' + toISOStringTZ(date_stop) + ').';
                        //        //var tblBody = doc.content[1].table.body;
                        //        //tblBody[0][2].text = 'Тип ГСМ';
                        //        //tblBody[0][8].text = 'Тип Выдачи';
                        //    }
                        //}
                    ]
                });

            },
            // Инициализация общая
            init: function () {
                trend_tank.initTrend();
                trend_tank.initTable();
            },
            // Показать данные
            view: function () {
                var num = panel_select_report.select_tanks.val();

                if (num === "-1") return;

                if (trend_tank.list === null || num !== trend_tank.num || Date.parse(date_start) !== Date.parse(trend_tank.start) || Date.parse(date_stop) !== Date.parse(trend_tank.stop)) {
                    LockScreen('Мы формируем ваш график...');
                    getAsyncViewReportTGOfDateTime(
                        panel_select_report.select_tanks.val(),
                        date_start,
                        date_stop,
                        function (data) {
                            trend_tank.list = [];
                            for (i = 0; i < data.length; i++) {
                                trend_tank.list.push({
                                    date: Date.parse(data[i].dt),
                                    level: data[i].level / 100,
                                    volume: data[i].volume,
                                    dens: data[i].dens,
                                    mass: data[i].mass,
                                    temp: data[i].temp / 10,
                                    water_level: data[i].water_level
                                });
                            }
                            trend_tank.start = date_start;
                            trend_tank.stop = date_stop;
                            trend_tank.num = num;
                            // Обновим график
                            trend_tank.chart.data = trend_tank.list;


                            trend_tank.table.clear();
                            for (it = 0; it < trend_tank.list.length; it++) {
                                trend_tank.table.row.add({
                                    //"date": toISOStringTZ(trend_tank.list[i].date),
                                    "dt": toISOStringTZ(new Date(trend_tank.list[it].date)),
                                    //"dt": toISOStringTZ(trend_tank.list[it].date),
                                    "level": trend_tank.list[it].level,
                                    "volume": trend_tank.list[it].volume,
                                    "dens": trend_tank.list[it].dens,
                                    "mass": trend_tank.list[it].mass,
                                    "temp": trend_tank.list[it].temp,
                                    "water_level": trend_tank.list[it].water_level

                                });
                            }
                            trend_tank.table.draw(true);
                            LockScreenOff();

                        });
                } else {
                    //trend_tank.viewTrend();
                }
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
    //table_report.initObject();
    //});

    trend_tank.init();

});