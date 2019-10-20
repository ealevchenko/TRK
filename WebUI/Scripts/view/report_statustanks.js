var showView = function () {
    // Время
    var d = new Date();
    $('#date-value').text(toISOStringTZ(d));
    // Обновим данные
    getAsyncViewReportTSOfDateTime(
        function (result) {
            for (ir = 0, count_ir = result.length; ir < count_ir; ir++) {
                var tank = $.trim(result[ir].tank);
                var hp = result[ir].fill_percent !== null ? Number(result[ir].fill_percent).toFixed(2) : 0.00;
                var h = result[ir].level !== null ? Number(result[ir].level/1000).toFixed(2) : 0.00;
                var w = result[ir].water_level !== null ? Number(result[ir].water_level/100).toFixed(2) : 0.00;
                var v = result[ir].volume !== null ? Number(result[ir].volume).toFixed(3) : 0.000;
                var m = result[ir].mass !== null ? Number(result[ir].mass).toFixed(3) : 0.000;
                var pd = result[ir].dens !== null ? Number(result[ir].dens).toFixed(5) : 0.00000; //?????
                var ps = result[ir].dens_avg !== null ? Number(result[ir].dens_avg).toFixed(5) : 0.00000;
                var t = result[ir].temp !== null ? (Number(result[ir].temp)).toFixed(2) : 0.00;
                $('input#tank-' + tank + '-hp').val(hp);
                $('#pb-' + tank + '-cover').css('bottom', hp+'%');  // the cover controls the bar height
                $('#pb-' + tank + '-value').css('backgroundColor', (h > 47.0 ? '#0f0' : '#f00')); // value contains the bar color
                $('input#tank-' + tank + '-h').val(h);
                $('input#tank-' + tank + '-w').val(w);
                if (w > 0) {
                    $('input#tank-' + tank + '-w').addClass('water-error');
                } else {
                    $('input#tank-' + tank + '-w').removeClass('water-error');
                }
                $('input#tank-' + tank + '-v').val(v);
                $('input#tank-' + tank + '-m').val(m);
                $('input#tank-' + tank + '-pd').val(pd);
                $('input#tank-' + tank + '-ps').val(ps);
                $('input#tank-' + tank + '-t').val(t);
                if (result[ir].dt !== null) {
                    var seconds = parseInt((new Date() - StringToDate(result[ir].dt)) / 1000);
                    if (seconds > 3000) {
                        $('div#tank-' + result[ir].tank).addClass('error').attr('title', result[ir].dt);
                    } else {
                        $('div#tank-' + result[ir].tank).removeClass('error').attr('title', result[ir].dt);
                    }
                }
                

            }
        });
};

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
                //if (active === 0) {

                //}
                //if (active === 1) {

                //}
                //if (active === 2) {

                //}
            }

        };


    //-----------------------------------------------------------------------------------------
    // Функции
    //-----------------------------------------------------------------------------------------

    //-----------------------------------------------------------------------------------------
    // Инициализация объектов
    //-----------------------------------------------------------------------------------------
    $(document).ready(function () {
        tab_type_reports.initObject();
        showView();
        setInterval('showView()', 10000);
    });
});