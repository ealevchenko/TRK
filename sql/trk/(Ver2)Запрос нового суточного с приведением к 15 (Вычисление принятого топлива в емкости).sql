
USE [ASU_AZSoperations]



declare @date_start datetime = CONVERT(DATETIME, '2019-09-09 00:00:00', 102);

--select * from get_tanks_value_receiving_calc15(@date_start)


declare @date_stop datetime = CONVERT(DATETIME, CONVERT(char(11), @date_start ,20) + '23:59:59', 102)

--select @date_start, @date_stop


declare @sum_volume_107000022 float  = (select sum(([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0) FROM [ASU_AZSoperations].[dbo].[ReceivingFuelTanks] 
  where [stop_datetime] is not null AND [start_datetime] >= @date_start AND [start_datetime] <= @date_stop AND [fuel] = 107000022);
declare @sum_volume_107000023 float  = (select sum(([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0) FROM [ASU_AZSoperations].[dbo].[ReceivingFuelTanks] 
  where [stop_datetime] is not null AND [start_datetime] >= @date_start AND [start_datetime] <= @date_stop AND [fuel] = 107000023);
declare @sum_volume_107000024 float  = (select sum(([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0) FROM [ASU_AZSoperations].[dbo].[ReceivingFuelTanks] 
  where [stop_datetime] is not null AND [start_datetime] >= @date_start AND [start_datetime] <= @date_stop AND [fuel] = 107000024);  
declare @sum_volume_107000027 float  = (select sum(([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0) FROM [ASU_AZSoperations].[dbo].[ReceivingFuelTanks] 
  where [stop_datetime] is not null AND [start_datetime] >= @date_start AND [start_datetime] <= @date_stop AND [fuel] = 107000027);  
  --!!! Проверка
  --select @sum_volume_107000022, @sum_volume_107000023, @sum_volume_107000024, @sum_volume_107000027

--> Получим текущие значения приема топлива за сутки (делаем корекцию объема * 10 - (тупанул при чтении с OPC делю на 10))
SELECT 
	   [id] as id_table
      ,[id_receiving_fuel]
      ,[num]
      ,[fuel]
      ,[start_datetime]
      ,[start_level]
      ,[start_volume] = [start_volume]*10
      ,[start_density]
      ,[start_density_avg] = ([start_mass]/([start_volume]*10))*1000.0
      ,[start_mass]
      ,[start_temp]
      ,[start_water_level]
      ,[stop_datetime]
      ,[stop_level]
      ,[stop_volume] = [stop_volume]*10
      ,[stop_density]
      ,[stop_density_avg] = ([stop_mass]/([stop_volume]*10))*1000.0
      ,[stop_mass]
      ,[stop_temp]
      ,[stop_water_level]
	  ,[volume_received] = (([stop_volume]*10)-([start_volume]*10))
	  ,[dens_received] = (([stop_mass]-[start_mass])  / (([stop_volume]*10)-([start_volume]*10)))*1000.0
	  ,[mass_received] = [stop_mass]-[start_mass]
	  ,[temp_received] = [stop_temp]
	-- Нужно только для проверки
	,[relation] = CASE [fuel]  
					 WHEN 107000022 THEN (([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0)/@sum_volume_107000022  
					 WHEN 107000023 THEN (([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0)/@sum_volume_107000023  
					 WHEN 107000024 THEN (([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0)/@sum_volume_107000024 
					 WHEN 107000027 THEN (([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0)/@sum_volume_107000027 
					 ELSE 0 
				  END
	-- Вычислим соотношение объёма-плотности с трубопроводом (средняя плотность) кг/м3
	,[ratio_vd] =  CASE WHEN [stop_volume] > 0 THEN (([stop_mass]/([stop_volume]*10))*1000.0)*(CASE [fuel]  
					 WHEN 107000022 THEN (([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0)/@sum_volume_107000022  
					 WHEN 107000023 THEN (([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0)/@sum_volume_107000023  
					 WHEN 107000024 THEN (([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0)/@sum_volume_107000024 
					 WHEN 107000027 THEN (([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0)/@sum_volume_107000027 
					 ELSE 0 
				  END) ELSE 0 END
					-- Вычислим соотношение температура-объём с трубопроводом (средняя температура град. С°)
	,[ratio_tv] = [stop_temp]*(CASE [fuel]  
					 WHEN 107000022 THEN (([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0)/@sum_volume_107000022  
					 WHEN 107000023 THEN (([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0)/@sum_volume_107000023  
					 WHEN 107000024 THEN (([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0)/@sum_volume_107000024 
					 WHEN 107000027 THEN (([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0)/@sum_volume_107000027 
					 ELSE 0 
				  END)
	,[dens15] = [ASU_AZSlogs].[dbo].[GET_DENS15]([fuel], ([stop_mass]/([stop_volume]*10))*1000.0, [stop_temp])
	,[volume15] = CASE WHEN [stop_volume] > 0 THEN (([stop_mass]-[start_mass])/[ASU_AZSlogs].[dbo].[GET_DENS15]([fuel], ([stop_mass]/([stop_volume]*10))*1000.0, [stop_temp])*1000) ELSE 0 END
	,[mass15] = [stop_mass]-[start_mass]
  FROM [ASU_AZSoperations].[dbo].[ReceivingFuelTanks] 
  where [stop_datetime] is not null AND [start_datetime] >= @date_start AND [start_datetime] <= @date_stop