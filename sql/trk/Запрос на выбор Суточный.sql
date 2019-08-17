USE [ASU_AZSlogs]
GO

DECLARE	@return_value int
declare @start datetime;
declare @stop datetime;
set @start = CONVERT(datetime,'2019-06-04 00:00:00',120)
set @stop = CONVERT(datetime,'2019-06-04 23:59:59',120)
--set @start = CONVERT(datetime,'2019-06-23 00:00:00',120)
--set @stop = CONVERT(datetime,'2019-06-23 23:59:59',120)
-- ѕроверим и создадим состо€ние в начале
if OBJECT_ID(N'TempDB..#REMAINS_start',N'U') is not null
begin
	drop table #REMAINS_start
end

CREATE TABLE #REMAINS_start (
	[id] [int] IDENTITY(1,1) NOT NULL,
	[type] [nvarchar](10) NOT NULL,
	[tank] [nchar](20) NOT NULL,
	[level] [int] NULL,
	[volume] [int] NULL,
	[dens] [float] NULL,
	[mass] [float] NULL,
 CONSTRAINT [PK_REMAINS_start] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
-- ѕроверим и создадим состо€ние в конце
if OBJECT_ID(N'TempDB..#REMAINS_stop',N'U') is not null
begin
	drop table #REMAINS_stop
end

CREATE TABLE #REMAINS_stop (
	[id] [int] IDENTITY(1,1) NOT NULL,
	[type] [nvarchar](10) NOT NULL,
	[tank] [nchar](20) NOT NULL,
	[level] [int] NULL,
	[volume] [int] NULL,
	[dens] [float] NULL,
	[mass] [float] NULL,
 CONSTRAINT [PK_REMAINS_stop] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]


insert into #REMAINS_start
EXEC [dbo].[GET_REMAINS_OF_DATE] @start

insert into #REMAINS_stop
EXEC [dbo].[GET_REMAINS_OF_DATE] @stop

SELECT  type, SUM(volume) AS volume_start, SUM(mass) AS mass_start
FROM #REMAINS_start
GROUP BY type

SELECT  type, SUM(volume) AS volume_stop, SUM(mass) AS mass_stop
FROM #REMAINS_stop
GROUP BY type

SELECT fuel_type, SUM(volume) AS Expr1, SUM(mass) AS Expr2
FROM [ASU_AZSoperations].dbo.FuelSale
where stop_datetime >= @start and stop_datetime<=@stop
GROUP BY fuel_type

SELECT fuel, SUM(stop_volume - start_volume) AS volume_coming, SUM(stop_mass - start_mass) AS mass_coming
FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks
where start_datetime >= @start and start_datetime<=@stop
GROUP BY fuel

select 
type = '107000022',
date = @start,
volume_start = (SELECT  SUM(volume) AS volume_start FROM #REMAINS_start where type = N'107000022' GROUP BY type),
mass_start = (SELECT  SUM(mass) AS mass_start FROM #REMAINS_start where type = N'107000022' GROUP BY type),
dens_start = (SELECT  SUM(mass) AS mass_start FROM #REMAINS_start where type = N'107000022' GROUP BY type)/(SELECT  SUM(volume) AS volume_start FROM #REMAINS_start where type = N'107000022' GROUP BY type),
volume_consumption = (SELECT  SUM(volume) AS volume_consumption FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=N'107000022' and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type),
volume_coming = (SELECT SUM(stop_volume - start_volume) AS volume_coming FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=N'107000022' and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel),
mass_consumption =(SELECT SUM(mass) AS mass_consumption FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=N'107000022' and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type),
mass_coming = (SELECT SUM(stop_mass - start_mass) AS vmass_coming FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=N'107000022' and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel),
volume_stop = (SELECT  SUM(volume) AS volume_stop FROM #REMAINS_stop where type = N'107000022' GROUP BY type),
mass_stop = (SELECT  SUM(mass) AS mass_stop FROM #REMAINS_stop where type = N'107000022' GROUP BY type),
dens_stop = (SELECT  SUM(mass) AS mass_stop FROM #REMAINS_stop where type = N'107000022' GROUP BY type)/(SELECT  SUM(volume) AS volume_stop FROM #REMAINS_stop where type = N'107000022' GROUP BY type)
union
select 
type = '107000023',
date = @start,
volume_start = (SELECT  SUM(volume) AS volume_start FROM #REMAINS_start where type = N'107000023' GROUP BY type),
mass_start = (SELECT  SUM(mass) AS mass_start FROM #REMAINS_start where type = N'107000023' GROUP BY type),
dens_start = (SELECT  SUM(mass) AS mass_start FROM #REMAINS_start where type = N'107000023' GROUP BY type)/(SELECT  SUM(volume) AS volume_start FROM #REMAINS_start where type = N'107000023' GROUP BY type),
volume_consumption = (SELECT  SUM(volume) AS volume_consumption FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=N'107000023' and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type),
volume_coming = (SELECT SUM(stop_volume - start_volume) AS volume_coming FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=N'107000023' and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel),
mass_consumption =(SELECT SUM(mass) AS mass_consumption FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=N'107000023' and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type),
mass_coming = (SELECT SUM(stop_mass - start_mass) AS vmass_coming FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=N'107000023' and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel),
volume_stop = (SELECT  SUM(volume) AS volume_stop FROM #REMAINS_stop where type = N'107000023' GROUP BY type),
mass_stop = (SELECT  SUM(mass) AS mass_stop FROM #REMAINS_stop where type = N'107000023' GROUP BY type),
dens_stop = (SELECT  SUM(mass) AS mass_stop FROM #REMAINS_stop where type = N'107000023' GROUP BY type)/(SELECT  SUM(volume) AS volume_stop FROM #REMAINS_stop where type = N'107000023' GROUP BY type)
union
select 
type = '107000024',
date = @start,
volume_start = (SELECT  SUM(volume) AS volume_start FROM #REMAINS_start where type = N'107000024' GROUP BY type),
mass_start = (SELECT  SUM(mass) AS mass_start FROM #REMAINS_start where type = N'107000024' GROUP BY type),
dens_start = (SELECT  SUM(mass) AS mass_start FROM #REMAINS_start where type = N'107000024' GROUP BY type)/(SELECT  SUM(volume) AS volume_start FROM #REMAINS_start where type = N'107000024' GROUP BY type),
volume_consumption = (SELECT  SUM(volume) AS volume_consumption FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=N'107000024' and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type),
volume_coming = (SELECT SUM(stop_volume - start_volume) AS volume_coming FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=N'107000024' and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel),
mass_consumption =(SELECT SUM(mass) AS mass_consumption FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=N'107000024' and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type),
mass_coming = (SELECT SUM(stop_mass - start_mass) AS vmass_coming FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=N'107000024' and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel),
volume_stop = (SELECT  SUM(volume) AS volume_stop FROM #REMAINS_stop where type = N'107000024' GROUP BY type),
mass_stop = (SELECT  SUM(mass) AS mass_stop FROM #REMAINS_stop where type = N'107000024' GROUP BY type),
dens_stop = (SELECT  SUM(mass) AS mass_stop FROM #REMAINS_stop where type = N'107000024' GROUP BY type)/(SELECT  SUM(volume) AS volume_stop FROM #REMAINS_stop where type = N'107000024' GROUP BY type)
union
select 
type = '107000027',
date = @start,
volume_start = (SELECT  SUM(volume) AS volume_start FROM #REMAINS_start where type = N'107000027' GROUP BY type),
mass_start = (SELECT  SUM(mass) AS mass_start FROM #REMAINS_start where type = N'107000027' GROUP BY type),
dens_start = (SELECT  SUM(mass) AS mass_start FROM #REMAINS_start where type = N'107000027' GROUP BY type)/(SELECT  SUM(volume) AS volume_start FROM #REMAINS_start where type = N'107000027' GROUP BY type),
volume_consumption = (SELECT  SUM(volume) AS volume_consumption FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=N'107000027' and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type),
volume_coming = (SELECT SUM(stop_volume - start_volume) AS volume_coming FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=N'107000027' and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel),
mass_consumption =(SELECT SUM(mass) AS mass_consumption FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=N'107000027' and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type),
mass_coming = (SELECT SUM(stop_mass - start_mass) AS vmass_coming FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=N'107000027' and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel),
volume_stop = (SELECT  SUM(volume) AS volume_stop FROM #REMAINS_stop where type = N'107000027' GROUP BY type),
mass_stop = (SELECT  SUM(mass) AS mass_stop FROM #REMAINS_stop where type = N'107000027' GROUP BY type),
dens_stop = (SELECT  SUM(mass) AS mass_stop FROM #REMAINS_stop where type = N'107000027' GROUP BY type)/(SELECT  SUM(volume) AS volume_stop FROM #REMAINS_stop where type = N'107000027' GROUP BY type)

