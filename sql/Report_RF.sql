use [KRR-PA-REP-SBF]

SELECT 
rf.id as id_rf, 
rf.operator_name, 
rf.smena_num, 
rf.smena_datetime, 
--rf.type, 
--rf.truck_num_nak, 
--rf.truck_weight, 
--rf.truck_provider, 
rf.railway_num_nak, 
rf.railway_num_tanker, 
rf.railway_provider, 
rf.railway_type_capacity, 
rf.railway_nak_volume, 
rf.railway_nak_dens, 
rf.railway_nak_mass, 
rf.railway_manual_level, 
rf.railway_manual_volume, 
rf.railway_manual_dens, 
rf.railway_manual_mass, 
rf.start_datetime, 
rf.stop_datetime, 
rf.[close] as close_rf, 
rft.id AS id_rft, 
rft.num, 
rft.fuel, 
rft.start_datetime AS start_tank, 
rft.start_level, 
rft.start_volume, 
rft.start_density, 
rft.start_mass, 
rft.start_temp, 
rft.start_water_level, 
rft.stop_datetime AS stop_tank, 
rft.stop_level, 
rft.stop_volume, 
rft.stop_density, 
rft.stop_mass, 
rft.stop_temp, 
rft.stop_water_level, 
rft.[close] AS close_rft
FROM dbo.ReceivingFuel as rf INNER JOIN dbo.ReceivingFuelTanks as rft ON rf.id = rft.id_receiving_fuel
where rf.type =1 and
rf.start_datetime >= CONVERT(datetime,'2019-04-15 07:00:00',120) and 
rf.start_datetime <= CONVERT(datetime,'2019-04-15 18:59:59',120) 
order by rft.fuel, rf.start_datetime




--SELECT 
--rf.operator_name, 
--rf.smena_num, 
--rf.smena_datetime, 
--rf.start_datetime AS start_rf, 
--rf.stop_datetime AS stop_rf, 
--rft.fuel, rft.num, 
--rft.start_datetime as start_tank, 
--rft.start_mass, 
--rft.stop_datetime as stop_tank, 
--rft.stop_mass, 
--change_capacity = rft.stop_mass - rft.start_mass 
--FROM dbo.ReceivingFuel as rf INNER JOIN dbo.ReceivingFuelTanks as rft ON rf.id = rft.id_receiving_fuel 
--where rf.start_datetime >= CONVERT(datetime,'2019-04-15 07:00:00',120) and 
--rf.start_datetime <= CONVERT(datetime,'2019-04-15 18:59:59',120) 
--ORDER BY rft.fuel, start_rf, rft.num