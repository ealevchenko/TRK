$(function () {

    var
        // Типы отчетов
        tab_type_reports = {
            html_div: $("#tabs-reports"),
            active: 0,
            initObject: function () {
                $('#link-tabs-report-1').text("Бензин");
                $('#link-tabs-report-2').text("ДТ");
                $('#link-tabs-report-3').text("Керосин");
                this.html_div.tabs({
                    collapsible: true,
                    activate: function (event, ui) {
                        tab_type_reports.active = tab_type_reports.html_div.tabs("option", "active");
                        //panel_select_report.viewTable();
                    }
                });
                //this.activeTable(this.active, true);
            },
            activeTable: function (active, data_refresh) {
                if (active === 0) {
                    //table_report.viewTable(data_refresh);
                }
                if (active === 1) {
                    //table_report_fft.viewTable(data_refresh);
                }
                if (active === 2) {
                    //table_report_fft.viewTable(data_refresh);
                }
            }

        };

    //-----------------------------------------------------------------------------------------
    // Функции
    //-----------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------
    // Инициализация объектов
    //-----------------------------------------------------------------------------------------
    //panel_select_report.initObject();
    tab_type_reports.initObject();
    //// Загрузка библиотек
    //loadReference(function (result) {
    //table_report.initObject();
    //table_report_fft.initObject();
    //panel_select_report.viewTable();
    //});

    $('#pb-b02-cover').css('bottom', '50%');  // the cover controls the bar height
    $('#pb-b02-value').css('backgroundColor', '#0f0'); // value contains the bar color
    $('#pb-b03-cover').css('bottom', '20%');  // the cover controls the bar height
    $('#pb-b03-value').css('backgroundColor', '#0f0'); // value contains the bar color
    //$(function () {
    //    var bkcolor;
    //    $('#slider').slider({
    //        max: 100,
    //        value: 0,
    //        slide: function (event, ui) {
    //            //bkcolor = (ui.value < 25) ? '#0f0' : '#ff0';
    //            //if (ui.value > 75) { bkcolor = '#f00'; }
    //            //bkcolor = '#f00';
    //            //$('.progressbar-cover').css('/*b*/ottom', ui.value + '%');  // the cover controls the bar height
    //            $('.progressbar-cover').css('bottom', '50%');  // the cover controls the bar height
    //            $('.progressbar-value').css('backgroundColor', bkcolor); // value contains the bar color
    //        }
    //    });
    //});

});