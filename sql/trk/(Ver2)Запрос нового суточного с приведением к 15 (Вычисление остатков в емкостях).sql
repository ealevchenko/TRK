
USE [ASU_AZSoperations]



declare @date_start datetime = CONVERT(DATETIME, '2019-09-15 00:00:00', 102);
--> проверка через функцию
select * from get_tanks_value_remains_calc15(@date_start)

		--*************************************************************
		--> Определим параметры трубопровода
		--print( @date_start);
		--> Объем константа
		declare @pipeline_volume_107000022 int  = 4577;
		declare @pipeline_volume_107000023 int = 3904;
		declare @pipeline_volume_107000024 int = 6771;
		declare @pipeline_volume_107000027 int = 2674;
		--> Определим переменную таблица для значений емкостей по которым были последние выдачи через трубопровод
		declare  @value_pipeline TABLE 
		 (
			fuel_type int
			,dt datetime 
			,volume float
			,mass float
			,dens_avg float
			,temp float
		 )
		--> Заполним таблицу значений емкостей по которым были последние выдачи через трубопровод
		insert @value_pipeline
		select 107000022, dt,volume,mass,dens_avg,temp  from  get_value_pipeline_of_date(@date_start, 107000022)		
		insert @value_pipeline		
		select 107000023, dt,volume,mass,dens_avg,temp  from  get_value_pipeline_of_date(@date_start, 107000023)
		insert @value_pipeline		
		select 107000024, dt,volume,mass,dens_avg,temp  from  get_value_pipeline_of_date(@date_start, 107000024)
		insert @value_pipeline		
		select 107000027, dt,volume,mass,dens_avg,temp  from  get_value_pipeline_of_date(@date_start, 107000027)
		--> ПРОВЕРКА!
		select * from @value_pipeline

	--	3. По трубам сделать статическую массу и плотность везде (при текущей температуре и при 15 С):
	--- А-92 - m=3447,4 кг,  p=753,2 кг/м3;
	--- А-95 - m=2975.47 кг,  p=762.16 кг/м3;
	--- Дизель - m=5704,3 кг,  p=842,46 кг/м3;
	--- Керосин - m=2149,9 кг,  p=804 кг/м3;

		--> Получим плотность по каждому трубопроводу из плотности резервуараиз которого была выдача
		declare @pipeline_dens_107000022 float = 753.2;--(select dens_avg from @value_pipeline where fuel_type = 107000022)
		declare @pipeline_dens_107000023 float = 762.16;--(select dens_avg from @value_pipeline where fuel_type = 107000023)
		declare @pipeline_dens_107000024 float = 842.46;--(select dens_avg from @value_pipeline where fuel_type = 107000024)
		declare @pipeline_dens_107000027 float = 804.0;--(select dens_avg from @value_pipeline where fuel_type = 107000027)
		--> Получим массу в трубопроводе через плотность и объем v*pl*0,001
		declare @pipeline_mass_107000022 float =  3447.4;--@pipeline_volume_107000022 * @pipeline_dens_107000022 * 0.001;
		declare @pipeline_mass_107000023 float = 2975.47;--@pipeline_volume_107000023 * @pipeline_dens_107000023 * 0.001;
		declare @pipeline_mass_107000024 float = 5704.3;-- @pipeline_volume_107000024 * @pipeline_dens_107000024 * 0.001;
		declare @pipeline_mass_107000027 float = 2149.9;-- @pipeline_volume_107000027 * @pipeline_dens_107000027 * 0.001;
		--> Определим температуру по всем трубопроводам из температуры резервуара из которого была выдача
		declare @pipeline_temp_107000022 float  = (select temp from @value_pipeline where fuel_type = 107000022);
		declare @pipeline_temp_107000023 float  = (select temp from @value_pipeline where fuel_type = 107000023);
		declare @pipeline_temp_107000024 float  = (select temp from @value_pipeline where fuel_type = 107000024);
		declare @pipeline_temp_107000027 float  = (select temp from @value_pipeline where fuel_type = 107000027);
		--> Определим дату по всем трубопроводам из даты закрытия выдачи из резервуара
		declare @pipeline_dt_107000022 datetime  = (select dt from @value_pipeline where fuel_type = 107000022);
		declare @pipeline_dt_107000023 datetime  = (select dt from @value_pipeline where fuel_type = 107000023);
		declare @pipeline_dt_107000024 datetime  = (select dt from @value_pipeline where fuel_type = 107000024);
		declare @pipeline_dt_107000027 datetime  = (select dt from @value_pipeline where fuel_type = 107000027);
		--> ПРОВЕРКА!
		--select @pipeline_mass_107000022,@pipeline_mass_107000023,@pipeline_mass_107000024,@pipeline_mass_107000027

		--*************************************************************
		--> Объявим переменую типа таблица (текущих значений емкости и трубопровода на начало суток)
		declare @REMAINS_CURRENT TABLE  (
			[id] int IDENTITY(1,1) NOT NULL PRIMARY KEY,
			[id_table] int NULL ,
			[dt] datetime NULL,
			[fuel_type] int NULL,
			[tank] nvarchar(11) NULL,
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

		--*************************************************************
		--> Объявим переменую типа таблица (текущих значений емкости и трубопровода на начало суток + вычисления средней плотности и температуры + приведение к 15 град)
		declare @REMAINS_CURRENT_CALC TABLE (
			[id] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
			[dt] datetime,
			[fuel_type] int NOT NULL,
			[tank] [nvarchar](11) NOT NULL,
			[level] [int] NULL,
			[volume] [int] NULL,
			[dens] [float] NULL,
			[dens_avg] [float] NULL,
			[mass] [float] NULL,
			[temp] [float] NULL,
			[relation] [float] NULL,
			[ratio_vd] [float] NULL,
			[ratio_tv] [float] NULL,
			[dens15] [float] NULL,
			[volume15] [float] NULL,
			[mass15] [float] NULL)
		--*************************************************************
		--> Выбераем текущие значения по резервуарам и трубопроводам и заполним переменную таблица с текущими значениями
			INSERT @REMAINS_CURRENT
			select [id_table],[dt],[fuel_type],[tank],[fill_percent],[level],[volume],[mass],[dens],[dens_avg],[temp],[water_level],[water_volume] 
			from  get_all_tank_value_less_date(@date_start)
			INSERT @REMAINS_CURRENT
			values(null,@pipeline_dt_107000022,107000022,N'PL107000022',100.0,null,@pipeline_volume_107000022,@pipeline_mass_107000022,@pipeline_dens_107000022,@pipeline_dens_107000022,@pipeline_temp_107000022,null,null)
			INSERT @REMAINS_CURRENT
			values(null,@pipeline_dt_107000023,107000023,N'PL107000023',100.0,null,@pipeline_volume_107000023,@pipeline_mass_107000023,@pipeline_dens_107000023,@pipeline_dens_107000023,@pipeline_temp_107000023,null,null)
			INSERT @REMAINS_CURRENT
			values(null,@pipeline_dt_107000024,107000024,N'PL107000024',100.0,null,@pipeline_volume_107000024,@pipeline_mass_107000024,@pipeline_dens_107000024,@pipeline_dens_107000024,@pipeline_temp_107000024,null,null)
			INSERT @REMAINS_CURRENT
			values(null,@pipeline_dt_107000027,107000027,N'PL107000027',100.0,null,@pipeline_volume_107000027,@pipeline_mass_107000027,@pipeline_dens_107000027,@pipeline_dens_107000027,@pipeline_temp_107000027,null,null)
			--*************************************************************
			--> Определим сумму по обему по всем емкостям и трубопроводам
			declare @sum_volume_107000022 float  = (select sum([volume]) from @REMAINS_CURRENT where([fuel_type] = 107000022));
			declare @sum_volume_107000023 float = (select sum([volume]) from @REMAINS_CURRENT where([fuel_type] = 107000023));
			declare @sum_volume_107000024 float = (select sum([volume]) from @REMAINS_CURRENT where([fuel_type] = 107000024));
			declare @sum_volume_107000027 float = (select sum([volume]) from @REMAINS_CURRENT where([fuel_type] = 107000027));
			--> Определим сумму по массе по всем емкостям и трубопроводам
			declare @sum_mass_107000022 float  = (select sum([mass]) from @REMAINS_CURRENT where([fuel_type] = 107000022));
			declare @sum_mass_107000023 float = (select sum([mass]) from @REMAINS_CURRENT where([fuel_type] = 107000023));
			declare @sum_mass_107000024 float = (select sum([mass]) from @REMAINS_CURRENT where([fuel_type] = 107000024));
			declare @sum_mass_107000027 float = (select sum([mass]) from @REMAINS_CURRENT where([fuel_type] = 107000027));
			--> ПРОВЕРКА!
			--select @sum_volume_107000022, @sum_volume_107000023, @sum_volume_107000024, @sum_volume_107000027
			--select @sum_all_volume_107000022, @sum_all_volume_107000023, @sum_all_volume_107000024, @sum_all_volume_107000027
			--select @sum_mass_107000022, @sum_mass_107000023, @sum_mass_107000024, @sum_mass_107000027
			--select @sum_all_mass_107000022, @sum_all_mass_107000023, @sum_all_mass_107000024, @sum_all_mass_107000027
			--*************************************************************
			--> ПРОВЕРКА!			
			--select * from @REMAINS_CURRENT order by fuel_type, tank
			--> Расчитаем отношения и соотношения и приведем к 15 градусам
			--INSERT @REMAINS_CURRENT_CALC
			--		   ([dt]
			--		   ,[fuel_type]
			--		   ,[tank]
			--		   ,[level]
			--		   ,[volume]
			--		   ,[dens]
			--		   ,[dens_avg]
			--		   ,[mass]
			--		   ,[temp]
			--		   ,[relation]
			--		   ,[ratio_vd]
			--		   ,[ratio_tv]
			--		   ,[dens15]
			--		   ,[volume15]
			--		   ,[mass15])
				SELECT
				   [dt]
				  ,[fuel_type]
				  ,[tank]
				  ,[level]
				  ,[volume]
				  ,[dens]
				  ,[dens_avg]
				  ,[mass]
				  ,[temp]
				  -- Нужно только для проверки
				  ,[relation] = CASE [fuel_type]  
					 WHEN 107000022 THEN [volume]/@sum_volume_107000022  
					 WHEN 107000023 THEN [volume]/@sum_volume_107000023  
					 WHEN 107000024 THEN [volume]/@sum_volume_107000024 
					 WHEN 107000027 THEN [volume]/@sum_volume_107000027 
					 ELSE 0 
				  END
				  -- Вычислим соотношение объёма-плотности с трубопроводом (средняя плотность) кг/м3
				  ,[ratio_vd] =  CASE WHEN [volume] > 0 THEN ([mass]/[volume]*1000)*(CASE [fuel_type]  
					 WHEN 107000022 THEN [volume]/@sum_volume_107000022  
					 WHEN 107000023 THEN [volume]/@sum_volume_107000023  
					 WHEN 107000024 THEN [volume]/@sum_volume_107000024 
					 WHEN 107000027 THEN [volume]/@sum_volume_107000027 
					 ELSE 0 
				  END) ELSE 0 END
					-- Вычислим соотношение температура-объём с трубопроводом (средняя температура град. С°)
				 ,[ratio_tv] = [temp]*(CASE [fuel_type]  
					 WHEN 107000022 THEN [volume]/@sum_volume_107000022  
					 WHEN 107000023 THEN [volume]/@sum_volume_107000023  
					 WHEN 107000024 THEN [volume]/@sum_volume_107000024 
					 WHEN 107000027 THEN [volume]/@sum_volume_107000027 
					 ELSE 0 
				  END)
				  ,[dens15] = (CASE WHEN ([tank]=N'PL107000022' OR [tank]=N'PL107000023' OR [tank]=N'PL107000024' OR [tank]=N'PL107000027') THEN [dens_avg] ELSE [ASU_AZSlogs].[dbo].[GET_DENS15]([fuel_type], [dens_avg], [temp]) END)
				  ,[volume15] = (CASE WHEN ([tank]=N'PL107000022' OR [tank]=N'PL107000023' OR [tank]=N'PL107000024' OR [tank]=N'PL107000027') THEN [volume] ELSE (CASE WHEN [dens_avg] > 0 THEN ([mass]/[ASU_AZSlogs].[dbo].[GET_DENS15]([fuel_type], [dens_avg], [temp])*1000) ELSE 0 END) END)
				  ,[mass15] = [mass]		  
				  --,[volume15_] = CASE WHEN [dens_avg] > 0 THEN ([mass]/[ASU_AZSlogs].[dbo].[GET_DENS15]([fuel_type], [dens_avg], [temp])*1000) ELSE 0 END
				  --,[mass15_] = [mass]

			  FROM @REMAINS_CURRENT
			  --*************************************************************
			--> ПРОВЕРКА!	
			--select * from @REMAINS_CURRENT_CALC  order by fuel_type, tank





