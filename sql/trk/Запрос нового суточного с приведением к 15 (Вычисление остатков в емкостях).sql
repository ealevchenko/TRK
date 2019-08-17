
use [ASU_AZSlogs]

declare @date datetime = CONVERT(DATETIME, '2019-08-16 00:00:00', 102);

--*************************************************************
--> Объем, масса, плотность по трубопроводам
declare @pipeline_volume_107000022 int  = 4577;
declare @pipeline_volume_107000023 int = 3904;
declare @pipeline_volume_107000024 int = 6771;
declare @pipeline_volume_107000027 int = 2674;
declare @pipeline_mass_107000022 float = 3364.938;
declare @pipeline_mass_107000023 float = 2919.728;
declare @pipeline_mass_107000024 float = 5616.311;
declare @pipeline_mass_107000027 float = 2125.923;
declare @pipeline_dens_107000022 float = (@pipeline_mass_107000022/@pipeline_volume_107000022*1000);
declare @pipeline_dens_107000023 float = (@pipeline_mass_107000023/@pipeline_volume_107000023*1000);
declare @pipeline_dens_107000024 float = (@pipeline_mass_107000024/@pipeline_volume_107000024*1000);
declare @pipeline_dens_107000027 float = (@pipeline_mass_107000027/@pipeline_volume_107000027*1000);

--*************************************************************
--> Пересоздание временной таблицы текущих значений емкости на начало суток

if OBJECT_ID(N'TempDB.dbo.##REMAINS_CURRENT',N'U') is not null
begin
	drop table ##REMAINS_CURRENT
end
--> Создаем
CREATE TABLE ##REMAINS_CURRENT (
	[id] [int] IDENTITY(1,1) NOT NULL,
	[type] [nvarchar](10) NOT NULL,
	[tank] [nchar](20) NOT NULL,
	[level] [int] NULL,
	[volume] [int] NULL,
	[dens] [float] NULL,
	[mass] [float] NULL,
	[temp] [float] NULL,
 CONSTRAINT [PK_REMAINS_CURRENT] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
--*************************************************************
--> Пересоздадим временную таблицу для промежуточных вычислений (определение температуры в трубопроводе)

if OBJECT_ID(N'TempDB..##REMAINS_CURRENT_CALC',N'U') is not null
begin
	drop table ##REMAINS_CURRENT_CALC
end
CREATE TABLE  ##REMAINS_CURRENT_CALC (
	[id] [int] IDENTITY(1,1) NOT NULL,
	[type] [nvarchar](10) NOT NULL,
	[tank] [nchar](20) NOT NULL,
	[level] [int] NULL,
	[volume] [int] NULL,
	[dens] [float] NULL,
	[dens_calc] [float] NULL,
	[mass] [float] NULL,
	[temp] [float] NULL,
	[relation_pipeline] [float] NULL,
	[ratio_vd] [float] NULL,
	[relation] [float] NULL,
	[ratio_tv] [float] NULL,
 CONSTRAINT [PK_REMAINS_CURRENT_CALC] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

--*************************************************************
--> Выбераем значения и переносим в временную таблицу
	INSERT INTO ##REMAINS_CURRENT ([type]
      ,[tank]
      ,[level]
      ,[volume]
      ,[dens]
      ,[mass]
	  ,[temp])
	EXEC [ASU_AZSlogs].[dbo].[GET_REMAINS_TANKS_DATE] @date
--*************************************************************
--> Определим сумму по обему по всем емкостям
declare @sum_volume_107000022 float  = (select sum([volume]) from ##REMAINS_CURRENT where([type] = 107000022));
declare @sum_volume_107000023 float = (select sum([volume]) from ##REMAINS_CURRENT where([type] = 107000023));
declare @sum_volume_107000024 float = (select sum([volume]) from ##REMAINS_CURRENT where([type] = 107000024));
declare @sum_volume_107000027 float = (select sum([volume]) from ##REMAINS_CURRENT where([type] = 107000027));
--> Определим сумму по обему по всем емкостям + трубопровод
declare @sum_all_volume_107000022 float  = (@sum_volume_107000022+@pipeline_volume_107000022);
declare @sum_all_volume_107000023 float = (@sum_volume_107000023+@pipeline_volume_107000023);
declare @sum_all_volume_107000024 float = (@sum_volume_107000024+@pipeline_volume_107000024);
declare @sum_all_volume_107000027 float = (@sum_volume_107000027+@pipeline_volume_107000027);
--> Определим сумму по обему по всем емкостям
declare @sum_mass_107000022 float  = (select sum([mass]) from ##REMAINS_CURRENT where([type] = 107000022));
declare @sum_mass_107000023 float = (select sum([mass]) from ##REMAINS_CURRENT where([type] = 107000023));
declare @sum_mass_107000024 float = (select sum([mass]) from ##REMAINS_CURRENT where([type] = 107000024));
declare @sum_mass_107000027 float = (select sum([mass]) from ##REMAINS_CURRENT where([type] = 107000027));
--> Определим сумму по обему по всем емкостям + трубопровод
declare @sum_all_mass_107000022 float  = (@sum_mass_107000022+@pipeline_mass_107000022);
declare @sum_all_mass_107000023 float = (@sum_mass_107000023+@pipeline_mass_107000023);
declare @sum_all_mass_107000024 float = (@sum_mass_107000024+@pipeline_mass_107000024);
declare @sum_all_mass_107000027 float = (@sum_mass_107000027+@pipeline_mass_107000027);
--select @sum_volume_107000022, @sum_volume_107000023, @sum_volume_107000024, @sum_volume_107000027
--select @sum_all_volume_107000022, @sum_all_volume_107000023, @sum_all_volume_107000024, @sum_all_volume_107000027
--select @sum_mass_107000022, @sum_mass_107000023, @sum_mass_107000024, @sum_mass_107000027
--select @sum_all_mass_107000022, @sum_all_mass_107000023, @sum_all_mass_107000024, @sum_all_mass_107000027
--*************************************************************
--> Расчитаем отношения и соотношения и переносим в временную таблицу #REMAINS_START_CALC
INSERT INTO ##REMAINS_CURRENT_CALC
           ([type]
           ,[tank]
           ,[level]
           ,[volume]
           ,[dens]
           ,[dens_calc]
           ,[mass]
           ,[temp]
           ,[relation_pipeline]
           ,[ratio_vd]
           ,[relation]
           ,[ratio_tv])
	SELECT
	   [type]
      ,[tank]
      ,[level]
      ,[volume]
      ,[dens]
	  ,[dens_calc] = [mass]/[volume]*1000
      ,[mass]
	  ,[temp]
	  -- Нужно только для проверки
	  ,[relation_pipeline] = CASE [type]  
         WHEN 107000022 THEN [volume]/@sum_all_volume_107000022  
         WHEN 107000023 THEN [volume]/@sum_all_volume_107000023  
         WHEN 107000024 THEN [volume]/@sum_all_volume_107000024 
         WHEN 107000027 THEN [volume]/@sum_all_volume_107000027 
         ELSE 0 
      END
	  -- Нужно только для проверки
	  ,[ratio_vd] = ([mass]/[volume]*1000)*(CASE [type]  
         WHEN 107000022 THEN [volume]/@sum_all_volume_107000022  
         WHEN 107000023 THEN [volume]/@sum_all_volume_107000023  
         WHEN 107000024 THEN [volume]/@sum_all_volume_107000024 
         WHEN 107000027 THEN [volume]/@sum_all_volume_107000027 
         ELSE 0 
      END)
	  -- Нужно для вычисления температуры трубопровода
	  ,[relation] = CASE [type]  
         WHEN 107000022 THEN [volume]/@sum_volume_107000022  
         WHEN 107000023 THEN [volume]/@sum_volume_107000023  
         WHEN 107000024 THEN [volume]/@sum_volume_107000024 
         WHEN 107000027 THEN [volume]/@sum_volume_107000027 
         ELSE 0 
      END
		-- Нужно для вычисления температуры трубопровода
	 ,[ratio_tv] = [temp]*(CASE [type]  
         WHEN 107000022 THEN [volume]/@sum_volume_107000022  
         WHEN 107000023 THEN [volume]/@sum_volume_107000023  
         WHEN 107000024 THEN [volume]/@sum_volume_107000024 
         WHEN 107000027 THEN [volume]/@sum_volume_107000027 
         ELSE 0 
      END)
  FROM ##REMAINS_CURRENT
  --*************************************************************
	--> Определим температуру по всем трубопроводам
declare @pipeline_temp_107000022 float  = (select sum([ratio_tv]) from ##REMAINS_CURRENT_CALC where([type] = 107000022));
declare @pipeline_temp_107000023 float = (select sum([ratio_tv]) from ##REMAINS_CURRENT_CALC where([type] = 107000023));
declare @pipeline_temp_107000024 float = (select sum([ratio_tv]) from ##REMAINS_CURRENT_CALC where([type] = 107000024));
declare @pipeline_temp_107000027 float = (select sum([ratio_tv]) from ##REMAINS_CURRENT_CALC where([type] = 107000027));
--select @pipeline_temp_107000022,@pipeline_temp_107000023,@pipeline_temp_107000024,@pipeline_temp_107000027
--> Вернем результат
if OBJECT_ID(N'TempDB..##REMAINS_CURRENT_CALC15',N'U') is not null
begin
	drop table ##REMAINS_CURRENT_CALC15
end

CREATE TABLE ##REMAINS_CURRENT_CALC15 (
	[id] [int] IDENTITY(1,1) NOT NULL,
	[datetime] [datetime] NULL,
	[type] [nvarchar](10) NOT NULL,
	[tank] [nvarchar](20) NOT NULL,
	[level] [int] NULL,
	[volume] [int] NULL,
	[dens] [float] NULL,
	[dens_calc] [float] NULL,
	[mass] [float] NULL,
	[temp] [float] NULL,
	[relation_pipeline] [float] NULL,
	[ratio_vd] [float] NULL,
	[relation] [float] NULL,
	[ratio_tv] [float] NULL,
	[dens15] [float] NULL,
	[volume15] [float] NULL,
	[mass15] [float] NULL,
	[deviation] [float] NULL,
 CONSTRAINT [PK_REMAINS_CURRENT_CALC15] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]


INSERT INTO ##REMAINS_CURRENT_CALC15
           ([datetime]
           ,[type]
           ,[tank]
           ,[level]
           ,[volume]
           ,[dens]
           ,[dens_calc]
           ,[mass]
           ,[temp]
           ,[relation_pipeline]
           ,[ratio_vd]
           ,[relation]
           ,[ratio_tv]
           ,[dens15]
           ,[volume15]
           ,[mass15]
           ,[deviation])
SELECT
	   [datetime] = @date
	  ,[type]
      ,[tank]
      ,[level]
      ,[volume]
      ,[dens]
      ,[dens_calc]
      ,[mass]
      ,[temp]
      ,[relation_pipeline]
      ,[ratio_vd]
      ,[relation]
      ,[ratio_tv]
	  ,[dens15] = [ASU_AZSlogs].[dbo].[GET_DENS15]([type], [dens_calc], [temp])
	  ,[volume15] = [ASU_AZSlogs].[dbo].[GET_VOLUME15]([type], [dens_calc], [temp], [volume])
	  ,[mass15] = ([ASU_AZSlogs].[dbo].[GET_DENS15]([type], [dens_calc], [temp]))*([ASU_AZSlogs].[dbo].[GET_VOLUME15]([type], [dens_calc], [temp], [volume]))/1000
	  ,[deviation] = CASE WHEN [mass] > 0 THEN (((([ASU_AZSlogs].[dbo].[GET_DENS15]([type], [dens_calc], [temp]))*([ASU_AZSlogs].[dbo].[GET_VOLUME15]([type], [dens_calc], [temp], [volume]))/1000)-[mass])/[mass]*100) ELSE 0 END
--	  (((([ASU_AZSlogs].[dbo].[GET_DENS15]([type], [dens_calc], [temp]))*([ASU_AZSlogs].[dbo].[GET_VOLUME15]([type], [dens_calc], [temp], [volume]))/1000)-[mass])/[mass]*100)
  FROM ##REMAINS_CURRENT_CALC
  union
  SELECT
	   [datetime] = @date
	  ,[type]=N'107000022'
      ,[tank]=N'PL107000022'
      ,[level] = null
      ,[volume] = @pipeline_volume_107000022
      ,[dens] = null
      ,[dens_calc] = @pipeline_dens_107000022
      ,[mass] = @pipeline_mass_107000022
      ,[temp] = @pipeline_temp_107000022
      ,[relation_pipeline] = @pipeline_volume_107000022/@sum_all_volume_107000022
      ,[ratio_vd] = @pipeline_dens_107000022*(@pipeline_volume_107000022/@sum_all_volume_107000022)
      ,[relation] = null
      ,[ratio_tv] = null
	  ,[dens15] = [ASU_AZSlogs].[dbo].[GET_DENS15](N'107000022', @pipeline_dens_107000022, @pipeline_temp_107000022)
	  ,[volume15] = [ASU_AZSlogs].[dbo].[GET_VOLUME15](N'107000022', @pipeline_dens_107000022, @pipeline_temp_107000022, @pipeline_volume_107000022)
	  ,[mass15] = ([ASU_AZSlogs].[dbo].[GET_DENS15](N'107000022', @pipeline_dens_107000022, @pipeline_temp_107000022))*([ASU_AZSlogs].[dbo].[GET_VOLUME15](N'107000022', @pipeline_dens_107000022, @pipeline_temp_107000022, @pipeline_volume_107000022))/1000
	  ,[eror] = (((([ASU_AZSlogs].[dbo].[GET_DENS15](N'107000022', @pipeline_dens_107000022, @pipeline_temp_107000022))*([ASU_AZSlogs].[dbo].[GET_VOLUME15](N'107000022', @pipeline_dens_107000022, @pipeline_temp_107000022, @pipeline_volume_107000022))/1000)-@pipeline_mass_107000022)/@pipeline_mass_107000022*100)
  union
  SELECT 
  	   [datetime] = @date
      ,[type]=N'107000023'
      ,[tank]=N'PL107000023'
      ,[level] = null
      ,[volume] = @pipeline_volume_107000023
      ,[dens] = null
      ,[dens_calc] = @pipeline_dens_107000023
      ,[mass] = @pipeline_mass_107000023
      ,[temp] = @pipeline_temp_107000023
      ,[relation_pipeline] = @pipeline_volume_107000023/@sum_all_volume_107000023
      ,[ratio_vd] = @pipeline_dens_107000023*(@pipeline_volume_107000023/@sum_all_volume_107000023)
      ,[relation] = null
      ,[ratio_tv] = null
	  ,[dens15] = [ASU_AZSlogs].[dbo].[GET_DENS15](N'107000023', @pipeline_dens_107000023, @pipeline_temp_107000023)
	  ,[volume15] = [ASU_AZSlogs].[dbo].[GET_VOLUME15](N'107000023', @pipeline_dens_107000023, @pipeline_temp_107000023, @pipeline_volume_107000023)
	  ,[mass15] = ([ASU_AZSlogs].[dbo].[GET_DENS15](N'107000023', @pipeline_dens_107000023, @pipeline_temp_107000023))*([ASU_AZSlogs].[dbo].[GET_VOLUME15](N'107000023', @pipeline_dens_107000023, @pipeline_temp_107000023, @pipeline_volume_107000023))/1000
	  ,[eror] = (((([ASU_AZSlogs].[dbo].[GET_DENS15](N'107000023', @pipeline_dens_107000023, @pipeline_temp_107000023))*([ASU_AZSlogs].[dbo].[GET_VOLUME15](N'107000023', @pipeline_dens_107000023, @pipeline_temp_107000023, @pipeline_volume_107000023))/1000)-@pipeline_mass_107000023)/@pipeline_mass_107000023*100)
  union
  SELECT 
  	   [datetime] = @date
      ,[type]=N'107000024'
      ,[tank]=N'PL107000024'
      ,[level] = null
      ,[volume] = @pipeline_volume_107000024
      ,[dens] = null
      ,[dens_calc] = @pipeline_dens_107000024
      ,[mass] = @pipeline_mass_107000024
      ,[temp] = @pipeline_temp_107000024
      ,[relation_pipeline] = @pipeline_volume_107000024/@sum_all_volume_107000024
      ,[ratio_vd] = @pipeline_dens_107000024*(@pipeline_volume_107000024/@sum_all_volume_107000024)
      ,[relation] = null
      ,[ratio_tv] = null
	  ,[dens15] = [ASU_AZSlogs].[dbo].[GET_DENS15](N'107000024', @pipeline_dens_107000024, @pipeline_temp_107000024)
	  ,[volume15] = [ASU_AZSlogs].[dbo].[GET_VOLUME15](N'107000024', @pipeline_dens_107000024, @pipeline_temp_107000024, @pipeline_volume_107000024)
	  ,[mass15] = ([ASU_AZSlogs].[dbo].[GET_DENS15](N'107000024', @pipeline_dens_107000024, @pipeline_temp_107000024))*([ASU_AZSlogs].[dbo].[GET_VOLUME15](N'107000024', @pipeline_dens_107000024, @pipeline_temp_107000024, @pipeline_volume_107000024))/1000
	  ,[eror] = (((([ASU_AZSlogs].[dbo].[GET_DENS15](N'107000024', @pipeline_dens_107000024, @pipeline_temp_107000024))*([ASU_AZSlogs].[dbo].[GET_VOLUME15](N'107000024', @pipeline_dens_107000024, @pipeline_temp_107000024, @pipeline_volume_107000024))/1000)-@pipeline_mass_107000024)/@pipeline_mass_107000024*100)
  union
  SELECT 
  	   [datetime] = @date
      ,[type]=N'107000027'
      ,[tank]=N'PL107000027'
      ,[level] = null
      ,[volume] = @pipeline_volume_107000027
      ,[dens] = null
      ,[dens_calc] = @pipeline_dens_107000027
      ,[mass] = @pipeline_mass_107000027
      ,[temp] = @pipeline_temp_107000027
      ,[relation_pipeline] = @pipeline_volume_107000027/@sum_all_volume_107000027
      ,[ratio_vd] = @pipeline_dens_107000027*(@pipeline_volume_107000027/@sum_all_volume_107000027)
      ,[relation] = null
      ,[ratio_tv] = null
	  ,[dens15] = [ASU_AZSlogs].[dbo].[GET_DENS15](N'107000027', @pipeline_dens_107000027, @pipeline_temp_107000027)
	  ,[volume15] = [ASU_AZSlogs].[dbo].[GET_VOLUME15](N'107000027', @pipeline_dens_107000027, @pipeline_temp_107000027, @pipeline_volume_107000027)
	  ,[mass15] = ([ASU_AZSlogs].[dbo].[GET_DENS15](N'107000027', @pipeline_dens_107000027, @pipeline_temp_107000027))*([ASU_AZSlogs].[dbo].[GET_VOLUME15](N'107000027', @pipeline_dens_107000027, @pipeline_temp_107000027, @pipeline_volume_107000027))/1000
	  ,[eror] = (((([ASU_AZSlogs].[dbo].[GET_DENS15](N'107000027', @pipeline_dens_107000027, @pipeline_temp_107000027))*([ASU_AZSlogs].[dbo].[GET_VOLUME15](N'107000027', @pipeline_dens_107000027, @pipeline_temp_107000027, @pipeline_volume_107000027))/1000)-@pipeline_mass_107000027)/@pipeline_mass_107000027*100)
	  order by [type]

	  select 
	  [datetime]
           ,[type]
           ,[tank]
           ,[level]
           ,[volume]
           ,[dens]
           ,[dens_calc]
           ,[mass]
           ,[temp]
           ,[relation_pipeline]
           ,[ratio_vd]
           ,[relation]
           ,[ratio_tv]
           ,[dens15]
           ,[volume15]
           ,[mass15]
           ,[deviation]
	  from ##REMAINS_CURRENT_CALC15

