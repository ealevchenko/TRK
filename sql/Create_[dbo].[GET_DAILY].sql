USE [ASU_AZSlogs]
GO

/****** Object:  StoredProcedure [dbo].[GET_DAILY]    Script Date: 24.06.2019 17:30:40 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


-- =============================================
-- Суточный (за период)
-- =============================================
CREATE PROCEDURE [dbo].[GET_DAILY]
	@start sysname, 
	@stop sysname
AS
begin
if OBJECT_ID(N'TempDB..#REMAINS_start',N'U') is not null
begin
	drop table #REMAINS_start
end

CREATE TABLE #REMAINS_start (
	--[id] [int] IDENTITY(1,1) NOT NULL,
	[type] [nvarchar](10) NOT NULL,
	[tank] [nchar](20) NOT NULL,
	[level] [int] NULL,
	[volume] [int] NULL,
	[dens] [float] NULL,
	[mass] [float] NULL) ON [PRIMARY]
-- Проверим и создадим состояние в конце
if OBJECT_ID(N'TempDB..#REMAINS_stop',N'U') is not null
begin
	drop table #REMAINS_stop
end

CREATE TABLE #REMAINS_stop (
	--[id] [int] IDENTITY(1,1) NOT NULL,
	[type] [nvarchar](10) NOT NULL,
	[tank] [nchar](20) NOT NULL,
	[level] [int] NULL,
	[volume] [int] NULL,
	[dens] [float] NULL,
	[mass] [float] NULL) ON [PRIMARY]

insert into #REMAINS_start
EXEC [dbo].[GET_REMAINS_OF_DATE] @start

insert into #REMAINS_stop
EXEC [dbo].[GET_REMAINS_OF_DATE] @stop


insert into [dbo].[REMAINS_PERIOD]
select 
type = '107000022',
date_start = @start,
date_stop = @stop,
volume_start = (SELECT SUM(volume) AS volume_start FROM #REMAINS_start where type = N'107000022' GROUP BY type),
mass_start = (SELECT  SUM(mass) AS mass_start FROM #REMAINS_start where type = N'107000022' GROUP BY type),
dens_start = (SELECT  SUM(mass) AS mass_start FROM #REMAINS_start where type = N'107000022' GROUP BY type)/(SELECT  SUM(volume) AS volume_start FROM #REMAINS_start where type = N'107000022' GROUP BY type),
volume_consumption = (SELECT  SUM(volume) AS volume_consumption FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=N'107000022' and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type),
volume_coming = (SELECT SUM(stop_volume - start_volume) AS volume_coming FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=N'107000022' and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel),
mass_consumption =(SELECT SUM(mass) AS mass_consumption FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=N'107000022' and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type),
mass_coming = (SELECT SUM(stop_mass - start_mass) AS vmass_coming FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=N'107000022' and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel),
volume_stop = (SELECT  SUM(volume) AS volume_stop FROM #REMAINS_stop where type = N'107000022' GROUP BY type),
mass_stop = (SELECT  SUM(mass) AS mass_stop FROM #REMAINS_stop where type = N'107000022' GROUP BY type),
dens_stop = (SELECT  SUM(mass) AS mass_stop FROM #REMAINS_stop where type = N'107000022' GROUP BY type)/(SELECT  SUM(volume) AS volume_stop FROM #REMAINS_stop where type = N'107000022' GROUP BY type)
--union
insert into [dbo].[REMAINS_PERIOD]
select 
type = '107000023',
date_start = @start,
date_stop = @stop,
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
--union
insert into [dbo].[REMAINS_PERIOD]
select 
type = '107000024',
date_start = @start,
date_stop = @stop,
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
--union
insert into [dbo].[REMAINS_PERIOD]
select 
type = '107000027',
date_start = @start,
date_stop = @stop,
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
end

GO


