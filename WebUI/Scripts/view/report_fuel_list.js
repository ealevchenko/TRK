$(function () {

    var date_curent = new Date(),
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
            bt_print: $('<button class="ui-button ui-widget ui-corner-all" ><span class="ui-icon ui-icon-refresh"></span>text</button>'),
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
                //.append(this.bt_print);
                //this.bt_left.attr('title',(langView('bt_left_title', langs)));
                this.label.text("Выберите дату");
                //this.bt_right.attr('title',langView('bt_right_title', langs));
                //this.bt_print.attr('title', "Печать");
                //this.bt_print.text("Предварительный просмотр и печать");

                //this.bt_print.on('click', function () {
                //    //window.print();
                //    printTable(table_report.createTable(table_report.list),'Таблица', 900, 600);
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
                    //"scrollX": true,
                    //language: language_table(langs),
                    jQueryUI: true,
                    "createdRow": function (row, data, index) {
                        //$(row).attr('id', data.id);
                        $('td', row).eq(12).addClass('list-tanks');
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
                        {
                            data: "num_pos", title: "№", width: "50px", orderable: true, searchable: false
                        },
                        {
                            data: "start_date", title: "Дата", width: "50px", orderable: true, searchable: false
                        },
                        {
                            data: "start_time", title: "Время", width: "50px", orderable: true, searchable: false
                        },
                        { data: "sap_transp_fakt", title: "Гос.Номер ТС", width: "50px", orderable: false, searchable: true },
                        { data: "fuel_type", title: "Вид ГСМ", width: "50px", orderable: true, searchable: true },
                        { data: "sap_valume", title: "Выдано фактически (л)", width: "50px", orderable: false, searchable: false },
                        { data: "sap_mass", title: "Выдано фактически (кг)", width: "50px", orderable: false, searchable: false },
                        { data: "sap_plotnost", title: "Плотность (кг/м3)", width: "50px", orderable: false, searchable: false },
                        { data: "sap_sending", title: "Синхр. с SAP", width: "150px", orderable: false, searchable: false },
                        { data: "dose", title: "Доза ГСМ (л)", width: "50px", orderable: false, searchable: false },
                        { data: "sap_flag_r", title: "Режим выдачи", width: "100px", orderable: true, searchable: true },
                        { data: "num", title: "№ пист\\НС", width: "50px", orderable: true, searchable: true },
                        { data: "tank_num", title: "Резервуар(ы)", width: "100px", orderable: false, searchable: true },
                        { data: "waybill", title: "ID карты", width: "100px", orderable: true, searchable: true },
                        { data: "operator_name", title: "Оператор", width: "100px", orderable: true, searchable: true },
                    ],

                    dom: 'Bfrtip',
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
                    //buttons: [
                    //    {
                    //        extend: 'pdfHtml5',
                    //        text: 'PDF',
                    //        className: "btn-sm",
                    //        messageTop: 'PDF created by PDFMake with Buttons for DataTables.',
                    //        pageSize: 'LEGAL',
                    //        orientation: 'landscape',
                    //        customize: function (doc) {
                    //            //doc['content'] =[
                    //            //    {text: 'Tables', style: 'header'},
                    //            //    'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
                    //            //    {text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader'},
                    //            //    'The following table has nothing more than a body array',
                    //            //    {
                    //            //        style: 'tableExample',
                    //            //        table: {
                    //            //            body: [
                    //            //                ['Column 1', 'Column 2', 'Column 3'],
                    //            //                ['One value goes here', 'Another one here', 'OK?']
                    //            //            ]
                    //            //        }
                    //            //    }
                    //            //]
                    //            //doc['styles'] = {

                    //            //    userTable: {
                    //            //            margin: [0, 15, 0, 15]
                    //            //    },
                    //            //    tableHeader: {
                    //            //        bold:!0,
                    //            //        fontSize:11,
                    //            //        color:'black',
                    //            //        fillColor:'#F0F8FF',
                    //            //        alignment:'center'
                    //            //    }
                    //            //};
                    //            doc.content[0].text = 'Заправочная ведомость (' + toISOStringTZ(date_start)+ ' - '+ toISOStringTZ(date_stop)+').';
                    //            var tblBody = doc.content[1].table.body;
                    //            tblBody[0][2].text = 'Тип ГСМ';
                    //            tblBody[0][8].text = 'Тип Выдачи';
                    //        }
                    //    },
                    //    {
                    //        extend: 'print',
                    //        text: 'Печать',
                    //        autoPrint: false,
                    //        stripHtml: false,
                    //        customize: function (win) {
                    //            //var printContent = document.getElementById("table-report");
                    //            //var printContent = document.getElementById("table-report");
                    //            var th = $('#table-report').find('thead');
                    //            var td = $('#table-report').find('tbody');
                    //            var tf = $('#table-report').find('tfoot');
                    //            var html = '<table><thead>' + th[0].innerHTML + '</thead>' + '<tbody>' + td[0].innerHTML + '</tbody>' + '<tfoot>' + tf[0].innerHTML + '</tfoot></table>'
                    //            $(win.document.body)
                    //                //.css('font-size', '10pt')
                    //                //.css('color', '#000')
                    //                .prepend(
                    //                    '<img src="../../Images/amk_logo.png" style="position:absolute; top:0; left:0;" />'
                    //                );
                    //            $(win.document.body).find('h1')
                    //                .text("Новый текст");
                    //            $(win.document.body).find('table').empty().append(html);
                    //            //$(win.document.body).find( 'table' )
                    //            //    .addClass( 'compact' )
                    //            //    .css('font-size', 'inherit')
                    //            //.append('<tfoot><tr><th colspan="3" class="title-foot">ИТОГО A92: </th><td class="total-foot" id="a92-volume"></td><td class="total-foot" id="a92-mass"></td><th colspan="8"></th></tr><tr><th colspan="3" class="title-foot">ИТОГО A95: </th><td class="total-foot" id="a95-volume"></td><td class="total-foot" id="a95-mass"></td><th colspan="8"></th></tr><tr><th colspan="3" class="title-foot">ИТОГО ДТ: </th><td class="total-foot" id="dt-volume"></td><td class="total-foot" id="dt-mass"></td><th colspan="8"></th></tr><tr><th colspan="3" class="title-foot">ИТОГО Керосин: </th><td class="total-foot" id="kerosin-volume"></td><td class="total-foot" id="kerosin-mass"></td><th colspan="8"></th></tr></tfoot>');

                    //            //$(win.document.body).find('tr:nth-child(odd) td').each(function(index){
                    //            //    $(this).css('background-color','#D0D0D0');
                    //            //});
                    //        }
                    //    },
                    //                {
                    //                    text: 'Row selected data',
                    //                    action: function (e, dt, node, config) {
                    //                        //printPageArea("table-report", 900, 600);
                    //                        //printTable(table_report.createTable(table_report.list), "hhhhh", 1200, 900);
                    //                        var data = table_report.obj.rows().data();
                    //                        data.each(function (value, index) {
                    //                            console.log('Data in index: ' + index + ' is: ' + value);
                    //                        });

                    //                    },
                    //                    enabled: true
                    //                },
                    //    //'colvis'
                    //]
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

                    var cards = reference_cards !== null ? reference_cards.getResult(data[i].id_card) : null;

                    this.obj.row.add({
                        "num_pos": i+1,
                        "id_fs": data[i].id_fs,
                        "start_date": data[i].start_datetime.substring(0, 10),
                        "start_time": data[i].start_datetime.substring(11, 23),
                        "sap_transp_fakt": data[i].sap_transp_fakt,
                        "fuel_type": outFuelType(data[i].fuel_type),
                        "sap_valume": data[i].sap_valume !== null ? Number(data[i].sap_valume).toFixed(2) : null,
                        "sap_mass": data[i].sap_mass !== null ? Number(data[i].sap_mass).toFixed(3) : null,
                        "sap_plotnost": data[i].sap_plotnost !== null ? Number(data[i].sap_plotnost).toFixed(5) : null,
                        "sap_sending": data[i].sap_sending !== null ? "Да" : "Нет",
                        "dose": data[i].dose,
                        "sap_flag_r": outMode(data[i].sap_flag_r),
                        "num": (data[i].trk_num < 10 ? 'П-' + data[i].num : 'НС-' + data[i].num),
                        "tank_num": data[i].tank_num,
                        "waybill": cards ? '[КР]' + cards.Number : 'id=' + data[i].id_card,
                        "operator_name": data[i].operator_name,
                        "sap_ozm_bak": data[i].sap_ozm_bak
                    });
                }
                LockScreenOff();
            },
            // Выподающие списки
            initComplete: function () {
                table_report.obj.columns([4, 10]).every(function () {
                    var column = this;
                    var num = column[0][0];
                    //var name = $(column.header()).attr('title');
                    var name = num === 4 ? 'Вид ГСМ' : 'Режим выдачи';
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
                        select.append('<option value="' + d + '">' + d + '</option>');
                    });
                });
            },
            //
            createTable: function (data) {
                var thead = '<thead>' +
                    '<tr>' +
                    '<th>Дата и время</th>' +
                    '<th>Гос.Номер ТС</th>' +
                    '<th>Вид ГСМ</th>' +
                    '<th>Выдано фактически (л)</th>' +
                    '<th>Выдано фактически (кг)</th>' +
                    '<th>Плотность (кг/м3)</th>' +
                    '<th>Синхронизация с SAP</th>' +
                    '<th>Доза ГСМ (л)</th>' +
                    '<th>Режим выдачи</th>' +
                    '<th>№ пист\\НС</th>' +
                    '<th>Резервуар(ы)</th>' +
                    '<th>Путевой лист</th>' +
                    '<th>Оператор</th>' +
                    '</tr>' +
                    '</thead>';
                var tbody = '<tbody>';
                if (data !== null) {
                    for (i = 0; i < data.length; i++) {
                        var cards = reference_cards !== null ? reference_cards.getResult(data[i].id_card) : null;
                        tbody += '<tr>' +
                            '<td class="1">' + data[i].start_datetime + '</td>' +
                            '<td class="1">' + data[i].sap_transp_fakt + '</td>' +
                            '<td class="1">' + outFuelType(data[i].fuel_type) + '</td>' +
                            '<td class="1">' + (data[i].sap_valume !== null ? Number(data[i].sap_valume).toFixed(2) : null) + '</td>' +
                            '<td class="1">' + (data[i].sap_mass !== null ? Number(data[i].sap_mass).toFixed(3) : null) + '</td>' +
                            '<td class="1">' + (data[i].sap_plotnost !== null ? Number(data[i].sap_plotnost).toFixed(5) : null) + '</td>' +
                            '<td class="1">' + data[i].sap_sending + '</td>' +
                            '<td class="1">' + data[i].dose + '</td>' +
                            '<td class="1">' + outMode(data[i].sap_flag_r) + '</td>' +
                            '<td class="1">' + (data[i].trk_num < 10 ? 'П-' + data[i].num : 'НС-' + data[i].num) + '</td>' +
                            '<td class="1">' + data[i].tank_num + '</td>' +
                            '<td class="1">' + (cards ? '[КР]' + cards.Number : 'id=' + data[i].id_card) + '</td>' +
                            '<td class="1">' + data[i].operator_name + '</td>' +
                            '</tr>';
                    }
                }
                tbody += '</tbody>';
                return '<table class="cell-border">' + thead + tbody + '</table>';
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
    // Загрузка библиотек
    loadReference(function (result) {
        table_report.initObject();
        panel_select_report.viewReport();
    });

});