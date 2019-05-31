
    // таблица
    var table_log = {
        obj: null,
        // Инициализировать таблицу
        init: function () {
            this.obj = $('table#table-trk-logs').DataTable({
                //"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
                //"paging": false,
                //"ordering": true,
                //"info": false,
                //"select": false,
                "autoWidth": false,
                //"filter": true,
                //"scrollY": "600px",
                //"scrollX": true,
                //language: language_table(langs),
                jQueryUI: true,
                //"createdRow": function (row, data, index) {
                //    $(row).attr('id', data.id);
                //},
                columns: [
                    { data: "DateTime", title: 'Дата и время', width: "150px", orderable: false, searchable: false },
                    { data: "UserName", title: 'Пользователь', width: "150px", orderable: false, searchable: true },
                    { data: "Log", title: 'Сообщение', width: "500px", orderable: false, searchable: true },
                ]
            });
        },
        // Показать таблицу с данными
        viewTable: function (data_refresh) {
            getAsyncTRKLogsLastLines(
                100, function (data_logs) {
                    table_log.loadDataTable(data_logs);
                    table_log.obj.order([0, 'desc']);
                    table_log.obj.draw();
                });
        },
        // Загрузить данные
        loadDataTable: function (data) {
            table_log.obj.clear();
            for (i = 0; i < data.length; i++) {
                table_log.obj.row.add({
                    "ID": data[i].ID,
                    "DateTime": data[i].DateTime,
                    "UserName": data[i].UserName,
                    "Level": data[i].Level,
                    "Log": data[i].Log,
                });
            }
        },
    };

    var showLogs = function () {

        table_log.viewTable();
    };

//=========== ЗАГРУЗКА СТРАНИЦЫ СТАРТ ПРОЕКТА ====================================================
$(function () {
    // Загрузка документа
    $(document).ready(function () {
        table_log.init();
        showLogs();
        setInterval('showLogs()', 2000);
    });
});