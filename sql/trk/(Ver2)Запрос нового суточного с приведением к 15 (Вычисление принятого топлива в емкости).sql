
USE [ASU_AZSoperations]



declare @date_start datetime = CONVERT(DATETIME, '2019-10-18 00:00:00', 102);

--select * from get_tanks_value_receiving_calc15(@date_start)


declare @date_stop datetime = CONVERT(DATETIME, CONVERT(char(11), @date_start ,20) + '23:59:59', 102)

--select @date_start, @date_stop


declare @ReceivingTanks Table (
	[id_table] [int] NOT NULL PRIMARY KEY,
	[id_receiving_fuel] [int] NOT NULL,
	[num] [nvarchar](5) NOT NULL,
	[fuel] [int] NOT NULL,
	[start_datetime] [datetime] NOT NULL,
	[start_level] float NOT NULL,
	[start_volume] float NULL,
	[start_density] float NOT NULL,
	[start_density_avg] float NULL,
	[start_mass] float NOT NULL,
	[start_temp] float NOT NULL,
	[start_water_level] float NOT NULL,
	[stop_datetime] [datetime] NULL,
	[stop_level] float NULL,
	[stop_volume] float NULL,
	[stop_density] float NULL,
	[stop_density_avg] float NULL,
	[stop_mass] float NULL,
	[stop_temp] float NULL,
	[stop_water_level] float NULL,
	[volume_received] float NULL,
	[dens_received] float NULL,
	[mass_received] float NULL,
	[temp_received] float NULL)

--declare @sum_volume_107000022 float  = (select sum(([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0) FROM [ASU_AZSoperations].[dbo].[ReceivingFuelTanks] 
--  where [stop_datetime] is not null AND [start_datetime] >= @date_start AND [start_datetime] <= @date_stop AND [fuel] = 107000022);
--declare @sum_volume_107000023 float  = (select sum(([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0) FROM [ASU_AZSoperations].[dbo].[ReceivingFuelTanks] 
--  where [stop_datetime] is not null AND [start_datetime] >= @date_start AND [start_datetime] <= @date_stop AND [fuel] = 107000023);
--declare @sum_volume_107000024 float  = (select sum(([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0) FROM [ASU_AZSoperations].[dbo].[ReceivingFuelTanks] 
--  where [stop_datetime] is not null AND [start_datetime] >= @date_start AND [start_datetime] <= @date_stop AND [fuel] = 107000024);  
--declare @sum_volume_107000027 float  = (select sum(([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0) FROM [ASU_AZSoperations].[dbo].[ReceivingFuelTanks] 
--  where [stop_datetime] is not null AND [start_datetime] >= @date_start AND [start_datetime] <= @date_stop AND [fuel] = 107000027);  
--  --!!! Проверка
--  select @sum_volume_107000022, @sum_volume_107000023, @sum_volume_107000024, @sum_volume_107000027

--> Получим текущие значения приема топлива за сутки (делаем корекцию объема * 10 - (тупанул при чтении с OPC делю на 10))

insert @ReceivingTanks
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
	  ,[volume_received] = (case when [stop_volume] > [start_volume] then ([stop_volume]*10)-([start_volume]*10) else 0 end)   
	  ,[dens_received] = (case when [stop_volume] > [start_volume] then (([stop_mass]-[start_mass])  / (([stop_volume]*10)-([start_volume]*10)))*1000.0 else 0 end)    
	  ,[mass_received] = (case when [stop_mass]>[start_mass] then [stop_mass]-[start_mass] else 0 end) 
	  ,[temp_received] = [stop_temp]
  FROM [ASU_AZSoperations].[dbo].[ReceivingFuelTanks] 
  where [stop_datetime] is not null AND [start_datetime] >= @date_start AND [start_datetime] <= @date_stop

declare @sum_volume_107000022 float  = (select sum([volume_received]) FROM @ReceivingTanks 
  where [fuel] = 107000022 and [volume_received] > 30 and [mass_received]>30); 
declare @sum_volume_107000023 float  = (select sum([volume_received]) FROM @ReceivingTanks 
  where [fuel] = 107000023 and [volume_received] > 30 and [mass_received]>30); 
declare @sum_volume_107000024 float  = (select sum([volume_received]) FROM @ReceivingTanks 
  where [fuel] = 107000024 and [volume_received] > 30 and [mass_received]>30); 
declare @sum_volume_107000027 float  = (select sum([volume_received]) FROM @ReceivingTanks 
  where [fuel] = 107000027 and [volume_received] > 30 and [mass_received]>30);  

  --!!! Проверка
  --select @sum_volume_107000022, @sum_volume_107000023, @sum_volume_107000024, @sum_volume_107000027



  select 
	[id_table]
	,[id_receiving_fuel]
	,[num]
	,[fuel]
	,[start_datetime]
	,[start_level]
	,[start_volume]
	,[start_density]
	,[start_density_avg]
	,[start_mass]
	,[start_temp]
	,[start_water_level]
	,[stop_datetime]
	,[stop_level]
	,[stop_volume]
	,[stop_density]
	,[stop_density_avg]
	,[stop_mass]
	,[stop_temp]
	,[stop_water_level]
	,[volume_received]
	,[dens_received]
	,[mass_received]
	,[temp_received]
	  	------ Нужно только для проверки
	,[relation] = CASE [fuel]  
					 WHEN 107000022 THEN [volume_received]/@sum_volume_107000022  
					 WHEN 107000023 THEN [volume_received]/@sum_volume_107000023  
					 WHEN 107000024 THEN [volume_received]/@sum_volume_107000024 
					 WHEN 107000027 THEN [volume_received]/@sum_volume_107000027 
					 ELSE 0 
				  END
	---- Вычислим соотношение объёма-плотности с трубопроводом (средняя плотность) кг/м3
	,[ratio_vd] =  CASE WHEN [volume_received] > 0 THEN [dens_received] *(CASE [fuel]  
					 WHEN 107000022 THEN [volume_received]/@sum_volume_107000022  
					 WHEN 107000023 THEN [volume_received]/@sum_volume_107000023  
					 WHEN 107000024 THEN [volume_received]/@sum_volume_107000024 
					 WHEN 107000027 THEN [volume_received]/@sum_volume_107000027 
					 ELSE 0 
				  END) ELSE 0 END
	--				-- Вычислим соотношение температура-объём с трубопроводом (средняя температура град. С°)
	,[ratio_tv] = [temp_received]*(CASE [fuel]  
					 WHEN 107000022 THEN [volume_received]/@sum_volume_107000022  
					 WHEN 107000023 THEN [volume_received]/@sum_volume_107000023  
					 WHEN 107000024 THEN [volume_received]/@sum_volume_107000024 
					 WHEN 107000027 THEN [volume_received]/@sum_volume_107000027 
					 ELSE 0 
				  END)
	,[dens15] = [ASU_AZSlogs].[dbo].[GET_DENS15]([fuel], [dens_received], [temp_received])
	,[volume15] = [mass_received]/[ASU_AZSlogs].[dbo].[GET_DENS15]([fuel], [dens_received], [temp_received])*1000
	,[mass15] =  [mass_received]
  	------ Нужно только для проверки
	--,[relation] = CASE [fuel]  
	--				 WHEN 107000022 THEN (([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0)/@sum_volume_107000022  
	--				 WHEN 107000023 THEN (([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0)/@sum_volume_107000023  
	--				 WHEN 107000024 THEN (([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0)/@sum_volume_107000024 
	--				 WHEN 107000027 THEN (([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0)/@sum_volume_107000027 
	--				 ELSE 0 
	--			  END
	---- Вычислим соотношение объёма-плотности с трубопроводом (средняя плотность) кг/м3
	--,[ratio_vd] =  CASE WHEN [stop_volume] > 0 THEN (([stop_mass]/([stop_volume]*10))*1000.0)*(CASE [fuel]  
	--				 WHEN 107000022 THEN (([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0)/@sum_volume_107000022  
	--				 WHEN 107000023 THEN (([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0)/@sum_volume_107000023  
	--				 WHEN 107000024 THEN (([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0)/@sum_volume_107000024 
	--				 WHEN 107000027 THEN (([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0)/@sum_volume_107000027 
	--				 ELSE 0 
	--			  END) ELSE 0 END
	--				-- Вычислим соотношение температура-объём с трубопроводом (средняя температура град. С°)
	--,[ratio_tv] = [stop_temp]*(CASE [fuel]  
	--				 WHEN 107000022 THEN (([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0)/@sum_volume_107000022  
	--				 WHEN 107000023 THEN (([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0)/@sum_volume_107000023  
	--				 WHEN 107000024 THEN (([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0)/@sum_volume_107000024 
	--				 WHEN 107000027 THEN (([stop_mass]-[start_mass])/(([stop_mass]/([stop_volume]*10))*1000.0)*1000.0)/@sum_volume_107000027 
	--				 ELSE 0 
	--			  END)
	--,[dens15] = [ASU_AZSlogs].[dbo].[GET_DENS15]([fuel], ([stop_mass]/([stop_volume]*10))*1000.0, [stop_temp])
	--,[volume15] = CASE WHEN [stop_volume] > 0 THEN (([stop_mass]-[start_mass])/[ASU_AZSlogs].[dbo].[GET_DENS15]([fuel], ([stop_mass]/([stop_volume]*10))*1000.0, [stop_temp])*1000) ELSE 0 END
	--,[mass15] =  (case when [stop_mass]>[start_mass] then [stop_mass]-[start_mass] else 0 end)
  from @ReceivingTanks
  where [volume_received] > 30 and [mass_received]>30