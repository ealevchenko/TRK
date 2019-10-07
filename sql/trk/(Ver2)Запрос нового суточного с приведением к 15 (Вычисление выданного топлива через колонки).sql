
USE [ASU_AZSoperations]



declare @date_start datetime = CONVERT(DATETIME, '2019-08-23 00:00:00', 102);

--> Получим дату конца выдачи
declare @date_stop datetime = CONVERT(DATETIME, CONVERT(char(11), @date_start ,20) + '23:59:59', 102)
--> Переменная типа таблица для хранения значений по емкостям на момент начала и конца выдачи (иногда бывает несколько емкостей на выдаче)
  declare @tank_value TABLE  (
	[id] int IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[id_event] int NULL,
	[dt_event] [datetime] NULL,
	[event] nvarchar(5) NULL ,
	[id_table] int NULL ,
	[dt_actual] [datetime] NULL,
	[fuel_type] int NULL,
	[tank] char(3) NULL,
	[fill_percent] float NULL,
	[level] float NULL,
	[volume] float NULL,
	[mass] float NULL,
	[dens] float NULL,
	[dens_avg] float NULL,
	[temp] float NULL,
	[water_level] float NULL,
    [water_volume] float NULL
)
--> Переменная типа таблица для хранения значений по емкостям с пересчетом плотностей через сумму массы и обема емкостей во время выдачи
  declare @delivery_fuel table (
	[id] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[id_table] [int] NOT NULL,
	[trk_num] [int] NOT NULL,
	[side] [bit] NOT NULL,
	[num] [int] NOT NULL,
	[fuel_type] [int] NOT NULL,
	[tank_num] [nvarchar](200) NOT NULL,
	[dose] float NULL,
	[passage] [char](1) NOT NULL,
	[volume] float NULL,
	[mass] float NULL,
	[start_datetime] [datetime] NOT NULL,
	[start_volume] float NULL,
	[start_dens_avg] float NULL,
	[start_mass] float NULL,
	[start_temp] float NOT NULL,
	[start_counter] [int] NOT NULL,
	[stop_datetime] [datetime] NULL,
	[stop_volume] float NULL,
	[stop_dens_avg] float NULL,
	[stop_mass] float NULL,
	[stop_temp] float NULL,
	[stop_counter] [int] NULL,
	[dens_avg_delivery] float NULL,
	[volume_delivery] float NULL,
	[mass_delivery] float NULL,
	[temp_delivery] float NULL
)
--> Переменная типа таблица для хранения значений по емкостям с пересчетом к 15 градусам
  declare @delivery_fuel_calc15 table (
	[id] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[id_table] [int] NOT NULL,
	[trk_num] [int] NOT NULL,
	[side] [bit] NOT NULL,
	[num] [int] NOT NULL,
	[name_trk] [nvarchar](20) NULL,
	[name_gas_station] [nvarchar](50) NULL,
	[serial_number_flowmeter] [nvarchar](10) NULL,
	[identification_number_flowmeter] [nvarchar](10) NULL,
	[fuel_type] [int] NOT NULL,
	[ukt_zed] [nvarchar](10) NULL,
	[fuel_name] [nvarchar](30) NULL,
	[tank_num] [nvarchar](200) NOT NULL,
	[dose] [float] NULL,
	[passage] [char](1) NOT NULL,
	[volume] [float] NULL,
	[mass] [float] NULL,
	[start_datetime] [datetime] NOT NULL,
	[start_volume] [float] NULL,
	[start_dens_avg] [float] NULL,
	[start_mass] [float] NULL,
	[start_temp] [float] NOT NULL,
	[start_counter] [int] NOT NULL,
	[stop_datetime] [datetime] NULL,
	[stop_volume] [float] NULL,
	[stop_dens_avg] [float] NULL,
	[stop_mass] [float] NULL,
	[stop_temp] [float] NULL,
	[stop_counter] [int] NULL,
	[dens_avg_delivery] [float] NULL,
	[volume_delivery] [float] NULL,
	[mass_delivery] [float] NULL,
	[temp_delivery] [float] NULL,
	[relation] [float] NULL,
	[ratio_vd] [float] NULL,
	[ratio_tv] [float] NULL,
	[dens15] [float] NULL,
	[volume15] [float] NULL,
	[mass15] [float] NULL
)
--> Запустим курсор выборки значений емкостей на момент начало и конца выдачи через колонки и наливные стояки
DECLARE  @id int, @fuel_type int, @tank_num NVARCHAR(200), @start_datetime datetime, @stop_datetime datetime
--> объявим курсор
DECLARE fs_cursor CURSOR LOCAL FOR
	SELECT [id], [fuel_type], [tank_num], [start_datetime], [stop_datetime]
	FROM [ASU_AZSoperations].[dbo].[FuelSale]
	where [stop_datetime] is not null AND [start_datetime] >= @date_start AND [start_datetime] <= @date_stop
	order by [fuel_type], [tank_num], [start_datetime]

OPEN fs_cursor
FETCH NEXT FROM fs_cursor INTO @id, @fuel_type, @tank_num, @start_datetime, @stop_datetime
WHILE @@FETCH_STATUS=0
BEGIN
	--> !!! Проверка
    --SELECT  @id, @fuel_type, @tank_num, @start_datetime, @stop_datetime
	--> Вставим данные
	insert @tank_value
	select @id,@start_datetime, N'Start', [id_table],[dt],[fuel_type],[tank],[fill_percent],[level],[volume],[mass],[dens],[dens_avg],[temp],[water_level],[water_volume] from get_tanks_value_less_of_date_nums_tank(@start_datetime, @tank_num)
	insert @tank_value	
	select @id,@stop_datetime, N'Stop', [id_table],[dt],[fuel_type],[tank],[fill_percent],[level],[volume],[mass],[dens],[dens_avg],[temp],[water_level],[water_volume] from get_tanks_value_more_of_date_nums_tank(@stop_datetime, @tank_num)
    FETCH NEXT FROM fs_cursor 
      INTO @id, @fuel_type, @tank_num, @start_datetime, @stop_datetime
END
CLOSE fs_cursor
DEALLOCATE fs_cursor
	--> !!! Проверка
	--select * from @tank_value
--> Определим сумма по объему выдачи по каждому типу топлива
declare @sum_volume_107000022 float  = (select sum((fs.[stop_counter] - fs.[start_counter])/100.0) 
	FROM [ASU_AZSoperations].[dbo].[FuelSale] as fs where fs.[stop_datetime] is not null AND fs.[start_datetime] >= @date_start AND fs.[start_datetime] <= @date_stop AND [fuel_type]=107000022)
declare @sum_volume_107000023 float  = (select sum((fs.[stop_counter] - fs.[start_counter])/100.0) 
	FROM [ASU_AZSoperations].[dbo].[FuelSale] as fs where fs.[stop_datetime] is not null AND fs.[start_datetime] >= @date_start AND fs.[start_datetime] <= @date_stop AND [fuel_type]=107000023)
declare @sum_volume_107000024 float  = (select sum((fs.[stop_counter] - fs.[start_counter])/100.0) 
	FROM [ASU_AZSoperations].[dbo].[FuelSale] as fs where fs.[stop_datetime] is not null AND fs.[start_datetime] >= @date_start AND fs.[start_datetime] <= @date_stop AND [fuel_type]=107000024)
declare @sum_volume_107000027 float  = (select sum((fs.[stop_counter] - fs.[start_counter])/100.0) 
	FROM [ASU_AZSoperations].[dbo].[FuelSale] as fs where fs.[stop_datetime] is not null AND fs.[start_datetime] >= @date_start AND fs.[start_datetime] <= @date_stop AND [fuel_type]=107000027)
--> !!! Проверка
--select  @sum_volume_107000022,@sum_volume_107000023,@sum_volume_107000024,@sum_volume_107000027
--> Произведем расчет средней плотности, объема и массы выдачи
insert @delivery_fuel
SELECT fs.[id]
      ,fs.[trk_num]
      ,fs.[side]
      ,fs.[num]
      ,fs.[fuel_type]
      ,fs.[tank_num]
      ,fs.[dose]
      ,fs.[passage]
      ,fs.[volume]
      ,fs.[mass]
      ,fs.[start_datetime]
      ,[start_volume] = (select sum(tv.volume) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Start')
	  ,[start_dens_avg] = (CASE WHEN (select sum(tv.volume) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Start')<>0 THEN (select sum(tv.mass) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Start')/(select sum(tv.volume) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Start')*1000 ELSE 0 END)
      --,[start_dens_avg] = (select sum(tv.mass) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Start')/(select sum(tv.volume) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Start')*1000
      ,[start_mass] = (select sum(tv.mass) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Start')
      ,fs.[start_temp]
      ,fs.[start_counter]
      ,fs.[stop_datetime]
      ,[stop_volume] = (select sum(tv.volume) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Stop')
	  ,[stop_dens_avg] = (CASE WHEN (select sum(tv.volume) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Stop')<>0 THEN (select sum(tv.mass) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Stop')/(select sum(tv.volume) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Stop')*1000 ELSE 0 END)
      --,[stop_dens_avg] = (select sum(tv.mass) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Stop')/(select sum(tv.volume) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Stop')*1000
      ,[stop_mass] = (select sum(tv.mass) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Stop')
      ,fs.[stop_temp]
      ,fs.[stop_counter]
	  ,[dens_avg_delivery] = (CASE WHEN (select sum(tv.volume) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Start')<>0 THEN ((select sum(tv.mass) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Start')/(select sum(tv.volume) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Start')*1000+(select sum(tv.mass) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Stop')/(select sum(tv.volume) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Stop')*1000)/2 ELSE 0 END)
	  --,[dens_avg_delivery] = ((select sum(tv.mass) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Start')/(select sum(tv.volume) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Start')*1000+(select sum(tv.mass) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Stop')/(select sum(tv.volume) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Stop')*1000)/2
	  ,[volume_delivery] = (fs.[stop_counter] - fs.[start_counter])/100.0
	  ,[mass_delivery] = (CASE WHEN (select sum(tv.volume) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Start')<>0 THEN ((fs.[stop_counter] - fs.[start_counter])/100.0)*(((select sum(tv.mass) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Start')/(select sum(tv.volume) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Start')*1000+(select sum(tv.mass) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Stop')/(select sum(tv.volume) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Stop')*1000)/2)*0.001 ELSE 0 END)
	  --,[mass_delivery] = ((fs.[stop_counter] - fs.[start_counter])/100.0)*(((select sum(tv.mass) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Start')/(select sum(tv.volume) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Start')*1000+(select sum(tv.mass) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Stop')/(select sum(tv.volume) from @tank_value as tv where tv.id_event = fs.id and tv.[event]=N'Stop')*1000)/2)*0.001
	  ,[temp_delivery] = (fs.[start_temp]+fs.[stop_temp])/2
  FROM [ASU_AZSoperations].[dbo].[FuelSale] as fs
  where fs.[stop_datetime] is not null AND fs.[start_datetime] >= @date_start AND fs.[start_datetime] <= @date_stop
  order by fs.[fuel_type], fs.[tank_num], fs.[start_datetime]
  -->!Проверка
  --select * from @delivery_fuel

--> Произведем приведение к 15 градусам
  insert @delivery_fuel_calc15
  select 
  	[id_table]
	,[trk_num]
	,[side]
	,[num]
	,[name_trk] = (select top(1) [name] FROM [ASU_AZSoperations].[dbo].[Cat_TRK] where [active]=1 and [trk]=[trk_num] and [side]=[side] and [num]=[num])
	,[name_gas_station] = (select top(1) [name_gas_station] FROM [ASU_AZSoperations].[dbo].[Cat_TRK] where [active]=1 and [trk]=[trk_num] and [side]=[side] and [num]=[num])
	,[serial_number_flowmeter] = (select top(1) [serial_number_flowmeter] FROM [ASU_AZSoperations].[dbo].[Cat_TRK] where [active]=1 and [trk]=[trk_num] and [side]=[side] and [num]=[num])
	,[identification_number_flowmeter] = (select top(1) [identification_number_flowmeter] FROM [ASU_AZSoperations].[dbo].[Cat_TRK] where [active]=1 and [trk]=[trk_num] and [side]=[side] and [num]=[num])
	,[fuel_type]
	,[ukt_zed] = (select [ukt_zed] FROM [ASU_AZSoperations].[dbo].[Cat_Fuel] where [type_fuel]=[fuel_type])
	,[fuel_name] = (select [name] FROM [ASU_AZSoperations].[dbo].[Cat_Fuel] where [type_fuel]=[fuel_type])
	,[tank_num]
	,[dose]
	,[passage]
	,[volume]
	,[mass]
	,[start_datetime]
	,[start_volume]
	,[start_dens_avg]
	,[start_mass]
	,[start_temp]
	,[start_counter]
	,[stop_datetime]
	,[stop_volume]
	,[stop_dens_avg]
	,[stop_mass]
	,[stop_temp]
	,[stop_counter]
	,[dens_avg_delivery]
	,[volume_delivery]
	,[mass_delivery]
	,[temp_delivery]
		  -- Нужно только для проверки
	  ,[relation] = CASE [fuel_type]  
					 WHEN 107000022 THEN [volume_delivery]/@sum_volume_107000022  
					 WHEN 107000023 THEN [volume_delivery]/@sum_volume_107000023  
					 WHEN 107000024 THEN [volume_delivery]/@sum_volume_107000024 
					 WHEN 107000027 THEN [volume_delivery]/@sum_volume_107000027 
					 ELSE 0 
				  END
		-- Вычислим соотношение объёма-плотности с трубопроводом (средняя плотность) кг/м3
		,[ratio_vd] =  CASE WHEN [dens_avg_delivery] > 0 THEN [dens_avg_delivery]*(CASE [fuel_type] 
					 WHEN 107000022 THEN [volume_delivery]/@sum_volume_107000022  
					 WHEN 107000023 THEN [volume_delivery]/@sum_volume_107000023  
					 WHEN 107000024 THEN [volume_delivery]/@sum_volume_107000024 
					 WHEN 107000027 THEN [volume_delivery]/@sum_volume_107000027 
					 ELSE 0 
				  END) ELSE 0 END
						-- Вычислим соотношение температура-объём с трубопроводом (средняя температура град. С°)
		,[ratio_tv] = [temp_delivery]*(CASE [fuel_type]
					 WHEN 107000022 THEN [volume_delivery]/@sum_volume_107000022  
					 WHEN 107000023 THEN [volume_delivery]/@sum_volume_107000023  
					 WHEN 107000024 THEN [volume_delivery]/@sum_volume_107000024 
					 WHEN 107000027 THEN [volume_delivery]/@sum_volume_107000027 
					 ELSE 0 
				  END)
		,[dens15] = [ASU_AZSlogs].[dbo].[GET_DENS15]([fuel_type], [dens_avg_delivery], [temp_delivery])
		,[volume15] = CASE WHEN [dens_avg_delivery] > 0 THEN [mass_delivery]/[ASU_AZSlogs].[dbo].[GET_DENS15]([fuel_type], [dens_avg_delivery], [temp_delivery])*1000 ELSE 0 END
		,[mass15] = [mass_delivery]
  from @delivery_fuel

  select * from @delivery_fuel_calc15