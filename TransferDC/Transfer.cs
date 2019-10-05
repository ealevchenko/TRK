using EFAZS.Abstract;
using EFAZS.Concrete;
using EFAZS.Entities;
using EFFC.Concrete;
using EFFC.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TransferDC
{
    public class Transfer
    {
        public Transfer()
        {

        }
        /// <summary>
        /// Метод переносит выдачи из локальной базы АЗС в ЦОД
        /// </summary>
        /// <returns></returns>
        public int DeliveryTanksToDC()
        {
            try
            {
                EFDeliveryTanks ef_dt_azs = new EFDeliveryTanks();
                EFDeliveryTanks_AZS ef_dt_dc = new EFDeliveryTanks_AZS();

                DeliveryTanks_AZS dt_dc_end = ef_dt_dc.Get().OrderByDescending(d => d.dt).FirstOrDefault();
                DeliveryTanks dt_start_azs = ef_dt_azs.Get().OrderBy(d => d.dt).FirstOrDefault();

                // Получим последнюю запись в ЦОД
                DateTime? dt_end_dc = dt_dc_end != null ? (DateTime?)dt_dc_end.dt : null;
                // Проверим если данных нет определим первую запись на азс иначе возьмем вроемя на 1 минуту больше
                if (dt_end_dc == null)
                {
                    dt_end_dc = dt_start_azs != null ? (DateTime?)dt_start_azs.dt : null;
                }
                else
                {
                    // следующая минута 
                    dt_end_dc = ((DateTime)dt_end_dc).AddMinutes(1);
                }
                // Начало переноса не установленно, Ошибка
                if (dt_end_dc == null) return -2; // Ошибка дата начала переноса не установленна
                // Определим список для переноса
                List<DeliveryTanks> list_azs = ef_dt_azs.Get().Where(d => d.dt >= dt_end_dc).OrderBy(c => c.id).ToList();
                // Список пуст?
                if (list_azs == null) return 0; // Данных для переноса нет
                // Определим новый список
                List<DeliveryTanks_AZS> list_dc = new List<DeliveryTanks_AZS>();
                foreach (DeliveryTanks dt in list_azs)
                {
                    DeliveryTanks_AZS dt_dc = new DeliveryTanks_AZS()
                    {
                        id = 0,
                        dt = dt.dt,
                        id_table = dt.id_table,
                        trk_num = dt.trk_num,
                        side = dt.side,
                        num = dt.num,
                        name_trk = dt.name_trk,
                        name_gas_station = dt.name_gas_station,
                        serial_number_flowmeter = dt.serial_number_flowmeter,
                        identification_number_flowmeter = dt.identification_number_flowmeter,
                        fuel_type = dt.fuel_type,
                        ukt_zed = dt.ukt_zed,
                        fuel_name = dt.fuel_name,
                        tank_num = dt.tank_num,
                        dose = dt.dose,
                        passage = dt.passage,
                        volume = dt.volume,
                        mass = dt.mass,
                        start_datetime = dt.start_datetime,
                        start_volume = dt.start_volume,
                        start_dens_avg = dt.start_dens_avg,
                        start_mass = dt.start_mass,
                        start_temp = dt.start_temp,
                        start_counter = dt.start_counter,
                        stop_datetime = dt.stop_datetime,
                        stop_volume = dt.stop_volume,
                        stop_dens_avg = dt.stop_dens_avg,
                        stop_mass = dt.stop_mass,
                        stop_temp = dt.stop_temp,
                        stop_counter = dt.stop_counter,
                        dens_avg_delivery = dt.dens_avg_delivery,
                        volume_delivery = dt.volume_delivery,
                        mass_delivery = dt.mass_delivery,
                        temp_delivery = dt.temp_delivery,
                        relation = dt.relation,
                        ratio_vd = dt.ratio_vd,
                        ratio_tv = dt.ratio_tv,
                        dens15 = dt.dens15,
                        volume15 = dt.volume15,
                        mass15 = dt.mass15
                    };
                    list_dc.Add(dt_dc);
                }
                // Перенесем и сохраним
                ef_dt_dc.Add(list_dc);
                return ef_dt_dc.Save();
            }
            catch (Exception e)
            {
                return -1;
            }
        }
        /// <summary>
        /// Метод переносит остатки из локальной базы АЗС в ЦОД
        /// </summary>
        /// <returns></returns>
        public int RemainsTanksToDC()
        {
            try
            {
                EFRemainsTanks ef_rt_azs = new EFRemainsTanks();
                EFRemainsTanks_AZS ef_rt_dc = new EFRemainsTanks_AZS();

                RemainsTanks_AZS dt_dc_end = ef_rt_dc.Get().OrderByDescending(d => d.dt).FirstOrDefault();
                RemainsTanks dt_start_azs = ef_rt_azs.Get().OrderBy(d => d.dt).FirstOrDefault();

                // Получим последнюю запись в ЦОД
                DateTime? dt_end_dc = dt_dc_end != null ? (DateTime?)dt_dc_end.dt : null;
                // Проверим если данных нет определим первую запись на азс иначе возьмем вроемя на 1 минуту больше
                if (dt_end_dc == null)
                {
                    dt_end_dc = dt_start_azs != null ? (DateTime?)dt_start_azs.dt : null;
                }
                else
                {
                    // следующая минута 
                    dt_end_dc = ((DateTime)dt_end_dc).AddMinutes(1);
                }
                // Начало переноса не установленно, Ошибка
                if (dt_end_dc == null) return -2; // Ошибка дата начала переноса не установленна
                // Определим список для переноса
                List<RemainsTanks> list_azs = ef_rt_azs.Get().Where(d => d.dt >= dt_end_dc).OrderBy(c => c.id).ToList();
                // Список пуст?
                if (list_azs == null) return 0; // Данных для переноса нет
                // Определим новый список
                List<RemainsTanks_AZS> list_dc = new List<RemainsTanks_AZS>();
                foreach (RemainsTanks dt in list_azs)
                {
                    RemainsTanks_AZS rt_dc = new RemainsTanks_AZS()
                    {
                        id = 0,
                        dt = dt.dt,
                        dt_actual = dt.dt_actual,
                        fuel_type = dt.fuel_type,
                        tank = dt.tank,
                        level = dt.level,
                        volume = dt.volume,
                        dens = dt.dens,
                        dens_avg = dt.dens_avg,
                        mass = dt.mass,
                        temp = dt.temp,
                        relation = dt.relation,
                        ratio_vd = dt.ratio_vd,
                        ratio_tv = dt.ratio_tv,
                        dens15 = dt.dens15,
                        volume15 = dt.volume15,
                        mass15 = dt.mass15

                    };
                    list_dc.Add(rt_dc);
                }
                // Перенесем и сохраним
                ef_rt_dc.Add(list_dc);
                return ef_rt_dc.Save();
            }
            catch (Exception e)
            {
                return -1;
            }
        }
        /// <summary>
        /// Метод переносит приема из локальной базы АЗС в ЦОД
        /// </summary>
        /// <returns></returns>
        public int ReceivingTanksToDC()
        {
            try
            {
                EFReceivingTanks ef_rt_azs = new EFReceivingTanks();
                EFReceivingTanks_AZS ef_rt_dc = new EFReceivingTanks_AZS();

                ReceivingTanks_AZS dt_dc_end = ef_rt_dc.Get().OrderByDescending(d => d.dt).FirstOrDefault();
                ReceivingTanks dt_start_azs = ef_rt_azs.Get().OrderBy(d => d.dt).FirstOrDefault();

                // Получим последнюю запись в ЦОД
                DateTime? dt_end_dc = dt_dc_end != null ? (DateTime?)dt_dc_end.dt : null;
                // Проверим если данных нет определим первую запись на азс иначе возьмем вроемя на 1 минуту больше
                if (dt_end_dc == null)
                {
                    dt_end_dc = dt_start_azs != null ? (DateTime?)dt_start_azs.dt : null;
                }
                else
                {
                    // следующая минута 
                    dt_end_dc = ((DateTime)dt_end_dc).AddMinutes(1);
                }
                // Начало переноса не установленно, Ошибка
                if (dt_end_dc == null) return -2; // Ошибка дата начала переноса не установленна
                // Определим список для переноса
                List<ReceivingTanks> list_azs = ef_rt_azs.Get().Where(d => d.dt >= dt_end_dc).OrderBy(c => c.id).ToList();
                // Список пуст?
                if (list_azs == null) return 0; // Данных для переноса нет
                // Определим новый список
                List<ReceivingTanks_AZS> list_dc = new List<ReceivingTanks_AZS>();
                foreach (ReceivingTanks dt in list_azs)
                {
                    ReceivingTanks_AZS rt_dc = new ReceivingTanks_AZS()
                    {
                        id = 0,
                        dt = dt.dt,
                        id_table = dt.id_table,
                        id_receiving_fuel = dt.id_receiving_fuel,
                        num = dt.num,
                        fuel = dt.fuel,
                        start_datetime = dt.start_datetime,
                        start_level = dt.start_level,
                        start_volume = dt.start_volume,
                        start_density = dt.start_density,
                        start_density_avg = dt.start_density_avg,
                        start_mass = dt.start_mass,
                        start_temp = dt.start_temp,
                        start_water_level = dt.start_water_level,
                        stop_datetime = dt.stop_datetime,
                        stop_level = dt.stop_level,
                        stop_volume = dt.stop_volume,
                        stop_density = dt.stop_density,
                        stop_density_avg = dt.stop_density_avg,
                        stop_mass = dt.stop_mass,
                        stop_temp = dt.stop_temp,
                        stop_water_level = dt.stop_water_level,
                        volume_received = dt.volume_received,
                        dens_received = dt.dens_received,
                        mass_received = dt.mass_received,
                        temp_received = dt.temp_received,
                        relation = dt.relation,
                        ratio_vd = dt.ratio_vd,
                        ratio_tv = dt.ratio_tv,
                        dens15 = dt.dens15,
                        volume15 = dt.volume15,
                        mass15 = dt.mass15
                    };
                    list_dc.Add(rt_dc);
                }
                // Перенесем и сохраним
                ef_rt_dc.Add(list_dc);
                return ef_rt_dc.Save();
            }
            catch (Exception e)
            {
                return -1;
            }
        }

        /// <summary>
        /// Метод переносит детальный суточный отчет из локальной базы АЗС в ЦОД
        /// </summary>
        /// <returns></returns>
        public int Daily_Accounting_Detali_ReportToDC()
        {
            try
            {
                EFDaily_Accounting_Detali_Report ef_rt_azs = new EFDaily_Accounting_Detali_Report();
                EFDaily_Accounting_Detali_Report_AZS ef_rt_dc = new EFDaily_Accounting_Detali_Report_AZS();

                Daily_Accounting_Detali_Report_AZS dt_dc_end = ef_rt_dc.Get().OrderByDescending(d => d.dt_start).FirstOrDefault();
                Daily_Accounting_Detali_Report dt_start_azs = ef_rt_azs.Get().OrderBy(d => d.dt_start).FirstOrDefault();

                // Получим последнюю запись в ЦОД
                DateTime? dt_end_dc = dt_dc_end != null ? (DateTime?)dt_dc_end.dt_start : null;
                // Проверим если данных нет определим первую запись на азс иначе возьмем вроемя на 1 минуту больше
                if (dt_end_dc == null)
                {
                    dt_end_dc = dt_start_azs != null ? (DateTime?)dt_start_azs.dt_start : null;
                }
                else
                {
                    // следующая минута 
                    dt_end_dc = ((DateTime)dt_end_dc).AddMinutes(1);
                }
                // Начало переноса не установленно, Ошибка
                if (dt_end_dc == null) return -2; // Ошибка дата начала переноса не установленна
                // Определим список для переноса
                List<Daily_Accounting_Detali_Report> list_azs = ef_rt_azs.Get().Where(d => d.dt_start >= dt_end_dc).OrderBy(c => c.id).ToList();
                // Список пуст?
                if (list_azs == null) return 0; // Данных для переноса нет
                // Определим новый список
                List<Daily_Accounting_Detali_Report_AZS> list_dc = new List<Daily_Accounting_Detali_Report_AZS>();
                foreach (Daily_Accounting_Detali_Report dt in list_azs)
                {
                    Daily_Accounting_Detali_Report_AZS rt_dc = new Daily_Accounting_Detali_Report_AZS()
                    {
                        id = 0,
                        dt_start = dt.dt_start,
                        dt_stop = dt.dt_stop,
                        fuel_type = dt.fuel_type,
                        ukt_zed = dt.ukt_zed,
                        tank = dt.tank,
                        serial_number = dt.serial_number,
                        unified_tank_number = dt.unified_tank_number,
                        type_name = dt.type_name,
                        level_meters_model = dt.level_meters_model,
                        level_meters_serial_number = dt.level_meters_serial_number,
                        dt_actual_remains_start = dt.dt_actual_remains_start,
                        level_remains_start = dt.level_remains_start,
                        volume_remains_start = dt.volume_remains_start,
                        dens_remains_start = dt.dens_remains_start,
                        dens_avg_remains_start = dt.dens_avg_remains_start,
                        mass_remains_start = dt.mass_remains_start,
                        temp_remains_start = dt.temp_remains_start,
                        relation_remains_start = dt.relation_remains_start,
                        ratio_vd_remains_start = dt.ratio_vd_remains_start,
                        ratio_tv_remains_start = dt.ratio_tv_remains_start,
                        dens15_remains_start = dt.dens15_remains_start,
                        volume15_remains_start = dt.volume15_remains_start,
                        mass15_remains_start = dt.mass15_remains_start,
                        volume_received = dt.volume_received,
                        mass_received = dt.mass_received,
                        dens_received = dt.dens_received,
                        temp_received = dt.temp_received,
                        volume15_received = dt.volume15_received,
                        mass15_received = dt.mass15_received,
                        dens15_received = dt.dens15_received,
                        count_tanks_delivery = dt.count_tanks_delivery,
                        volume_delivery = dt.volume_delivery,
                        mass_delivery = dt.mass_delivery,
                        dens_delivery = dt.dens_delivery,
                        temp_delivery = dt.temp_delivery,
                        volume15_delivery = dt.volume15_delivery,
                        mass15_delivery = dt.mass15_delivery,
                        dens15_delivery = dt.dens15_delivery,
                        dt_actual_remains_stop = dt.dt_actual_remains_stop,
                        level_remains_stop = dt.level_remains_stop,
                        volume_remains_stop = dt.volume_remains_stop,
                        dens_remains_stop = dt.dens_remains_stop,
                        dens_avg_remains_stop = dt.dens_avg_remains_stop,
                        mass_remains_stop = dt.mass_remains_stop,
                        temp_remains_stop = dt.temp_remains_stop,
                        relation_remains_stop = dt.relation_remains_stop,
                        ratio_vd_remains_stop = dt.ratio_vd_remains_stop,
                        ratio_tv_remains_stop = dt.ratio_tv_remains_stop,
                        dens15_remains_stop = dt.dens15_remains_stop,
                        volume15_remains_stop = dt.volume15_remains_stop,
                        mass15_remains_stop = dt.mass15_remains_stop,
                        permissible_volume15_error = dt.permissible_volume15_error,
                        permissible_mass15_error = dt.permissible_mass15_error
                    };
                    list_dc.Add(rt_dc);
                }
                // Перенесем и сохраним
                ef_rt_dc.Add(list_dc);
                return ef_rt_dc.Save();
            }
            catch (Exception e)
            {
                return -1;
            }
        }
        /// <summary>
        /// Метод переносит детальный суточный отчет из локальной базы АЗС в ЦОД
        /// </summary>
        /// <returns></returns>
        public int Daily_Accounting_ReportToDC()
        {
            try
            {
                EFDaily_Accounting_Report ef_rt_azs = new EFDaily_Accounting_Report();
                EFDaily_Accounting_Report_AZS ef_rt_dc = new EFDaily_Accounting_Report_AZS();

                Daily_Accounting_Report_AZS dt_dc_end = ef_rt_dc.Get().OrderByDescending(d => d.date_start).FirstOrDefault();
                Daily_Accounting_Report dt_start_azs = ef_rt_azs.Get().OrderBy(d => d.date_start).FirstOrDefault();

                // Получим последнюю запись в ЦОД
                DateTime? dt_end_dc = dt_dc_end != null ? (DateTime?)dt_dc_end.date_start : null;
                // Проверим если данных нет определим первую запись на азс иначе возьмем вроемя на 1 минуту больше
                if (dt_end_dc == null)
                {
                    dt_end_dc = dt_start_azs != null ? (DateTime?)dt_start_azs.date_start : null;
                }
                else
                {
                    // следующая минута 
                    dt_end_dc = ((DateTime)dt_end_dc).AddMinutes(1);
                }
                // Начало переноса не установленно, Ошибка
                if (dt_end_dc == null) return -2; // Ошибка дата начала переноса не установленна
                // Определим список для переноса
                List<Daily_Accounting_Report> list_azs = ef_rt_azs.Get().Where(d => d.date_start >= dt_end_dc).OrderBy(c => c.id).ToList();
                // Список пуст?
                if (list_azs == null) return 0; // Данных для переноса нет
                // Определим новый список
                List<Daily_Accounting_Report_AZS> list_dc = new List<Daily_Accounting_Report_AZS>();
                foreach (Daily_Accounting_Report dt in list_azs)
                {
                    Daily_Accounting_Report_AZS rt_dc = new Daily_Accounting_Report_AZS()
                    {
                        id = 0,
                        type = dt.type,
                        ukt_zed = dt.ukt_zed,
                        fuel_name = dt.fuel_name,
                        date_start = dt.date_start,
                        date_stop = dt.date_stop,
                        volume_start = dt.volume_start,
                        mass_start = dt.mass_start,
                        dens_start = dt.dens_start,
                        temp_start = dt.temp_start,
                        volume15_start = dt.volume15_start,
                        mass15_start = dt.mass15_start,
                        dens15_start = dt.dens15_start,
                        volume_received = dt.volume_received,
                        mass_received = dt.mass_received,
                        dens_received = dt.dens_received,
                        temp_received = dt.temp_received,
                        volume15_received = dt.volume15_received,
                        mass15_received = dt.mass15_received,
                        dens15_received = dt.dens15_received,
                        volume_delivery = dt.volume_delivery,
                        mass_delivery = dt.mass_delivery,
                        dens_delivery = dt.dens_delivery,
                        temp_delivery = dt.temp_delivery,
                        volume15_delivery = dt.volume15_delivery,
                        mass15_delivery = dt.mass15_delivery,
                        dens15_delivery = dt.dens15_delivery,
                        volume_stop = dt.volume_stop,
                        mass_stop = dt.mass_stop,
                        dens_stop = dt.dens_stop,
                        temp_stop = dt.temp_stop,
                        volume15_stop = dt.volume15_stop,
                        mass15_stop = dt.mass15_stop,
                        dens15_stop = dt.dens15_stop,
                        permissible_volume15_error = dt.permissible_volume15_error,
                        permissible_mass15_error = dt.permissible_mass15_error

                    };
                    list_dc.Add(rt_dc);
                }
                // Перенесем и сохраним
                ef_rt_dc.Add(list_dc);
                return ef_rt_dc.Save();
            }
            catch (Exception e)
            {
                return -1;
            }
        }

    }
}
