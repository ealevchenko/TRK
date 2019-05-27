using System.Web;
using System.Web.Optimization;

namespace WebUI
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Используйте версию Modernizr для разработчиков, чтобы учиться работать. Когда вы будете готовы перейти к работе,
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/Ajax").Include(
                    "~/Scripts/jquery.unobtrusive-ajax.min.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            // Плагин таблицы
            bundles.Add(new ScriptBundle("~/bundles/DataTables").Include(
                "~/Scripts/DataTables/jquery.dataTables.min.js",
                "~/Scripts/DataTables/dataTables.buttons.min.js",
                "~/Scripts/DataTables/dataTables.select.min.js",
                "~/Scripts/DataTables/dataTables.jqueryui.min.js",
                "~/Scripts/DataTables/buttons.jqueryui.min.js",
                "~/Scripts/DataTables/buttons.html5.min.js",
                "~/Scripts/DataTables/buttons.print.min.js",
                "~/Scripts/DataTables/buttons.colVis.min.js",
                "~/Scripts/jszip.min.js",
                "~/Scripts/pdfmake/pdfmake.min.js",
                "~/Scripts/pdfmake/vfs_fonts.js"
                ));
            // Плагин таблицы
            bundles.Add(new StyleBundle("~/DataTables/css").Include(
                "~/Content/DataTables/css/jquery.dataTables.min.css",
                "~/Content/DataTables/css/buttons.dataTables.min.css",
                "~/Content/DataTables/css/select.dataTables.min.css",
                "~/Content/DataTables/css/datatables.css"));

            // Календарь
            bundles.Add(new ScriptBundle("~/bundles/DateTime").Include(
                "~/Scripts/DateTime/moment.min.js"
                , "~/Scripts/DateTime/jquery.daterangepicker.js"
                ));

            bundles.Add(new StyleBundle("~/DateTime/css").Include("~/Content/DateTime/daterangepicker.css"));

            bundles.Add(new ScriptBundle("~/bundles/jquery-ui").Include(
            "~/Scripts/jquery-ui-1.12.1.min.js"));

            bundles.Add(new StyleBundle("~/jquery-ui/css").Include(
                "~/Content/themes/base/jquery-ui.css",
                "~/Content/themes/base/jquery-ui.structure.css",
                "~/Content/themes/base/jquery-ui.theme.css"));

            // Grafic

            bundles.Add(new ScriptBundle("~/bundles/d3").Include(
            "~/Scripts/d3/d3.min.js",
            "~/Scripts/nvd3/nv.d3.js"));

            bundles.Add(new StyleBundle("~/d3/css").Include(
                "~/Content/nvd3/nv.d3.css"));

        }
    }
}
