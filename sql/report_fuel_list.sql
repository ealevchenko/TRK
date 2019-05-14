SELECT  fs.id as id_fs, fs.operator_name, fs.smena_num, fs.smena_datetime, fs.trk_num, fs.side, 
                         fs.num, fs.fuel_type, fs.tank_num, fs.id_card, fs.dose, fs.passage, fs.volume, 
                         fs.mass, fs.start_datetime, fs.start_level, fs.start_volume, fs.start_density, fs.start_mass, 
                         fs.start_temp, fs.start_water_level, fs.start_counter, fs.stop_datetime, fs.stop_level, 
                         fs.stop_volume, fs.stop_density, fs.stop_mass, fs.stop_temp, fs.stop_water_level, 
                         fs.stop_counter, fs.[close], fs.sending, sap.id AS id_sap, sap.DATE as sap_date, sap.TIME as sap_time, 
                         sap.LOGIN_R as sap_login_r, sap.N_BAK as sap_n_bak, sap.OZM_BAK as sap_ozm_bak, sap.OZM_TREB as sap_ozm_treb, sap.FLAG_R as sap_flag_r, sap.PLOTNOST as sap_plotnost, 
                         sap.VOLUME AS sap_valume, sap.MASS AS sap_mass, sap.LOGIN_EXP as sap_login_exp, sap.N_POST as sap_n_post, sap.TRANSP_FAKT as sap_transp_fakt, 
                         sap.N_DEB as sap_n_deb, sap.N_TREB as sap_n_treb, sap.N_POS as sap_n_pos, sap.LGORT as sap_lgort, sap.WERKS as sap_werks, sap.sending AS sap_sending
FROM dbo.SAP_Buffer as sap RIGHT OUTER JOIN  dbo.FuelSale as fs ON sap.id = fs.id_sap
where fs.start_datetime >= CONVERT(datetime,'2019-04-15 07:00:00',120) and 
fs.start_datetime <= CONVERT(datetime,'2019-04-15 18:59:59',120)
order by fs.start_datetime 