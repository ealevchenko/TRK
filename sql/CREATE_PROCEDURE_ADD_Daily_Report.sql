USE [ASU_AZSoperations]
GO

/****** Object:  StoredProcedure [dbo].[ADD_Daily_Report]    Script Date: 25.06.2019 11:46:36 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO



-- =============================================

-- =============================================
CREATE PROCEDURE [dbo].[ADD_Daily_Report]
AS
begin

declare @start_report datetime
declare @stop_report datetime
declare @start datetime
declare @stop datetime

-- Проверим наличие таблицы [dbo].[Daily_Report] если нет создадим
if OBJECT_ID(N'[ASU_AZSoperations].[dbo].[Daily_Report]',N'U') is null
begin
	CREATE TABLE [ASU_AZSoperations].[dbo].[Daily_Report](
		[id] [int] IDENTITY(1,1) NOT NULL,
		[type] [nvarchar](10) NULL,
		[date_start] [datetime] NULL,
		[date_stop] [datetime] NULL,
		[volume_start] [int] NULL,
		[mass_start] [float] NULL,
		[dens_start] [float] NULL,
		[volume_consumption] [int] NULL,
		[volume_coming] [int] NULL,
		[mass_consumption] [float] NULL,
		[mass_coming] [float] NULL,
		[volume_stop] [int] NULL,
		[mass_stop] [float] NULL,
		[dens_stop] [float] NULL,
		[send] [datetime] NULL,
	 CONSTRAINT [PK_Daily_Report] PRIMARY KEY CLUSTERED 
	(
		[id] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]	
end
-- Получим время начала запроса и конца
set @start_report = (select top(1) [date_start] from [ASU_AZSoperations].[dbo].[Daily_Report] order by [date_start] desc)
Set @stop_report = CONVERT(DATETIME, CONVERT(char(11), getdate() ,20) + '00:00:00', 102)
-- Проверим в таблице есть данные
if (@start_report is null) begin 
	-- данных нет начнем с начала месяца
	--set @start_report = CONVERT(DATETIME, CONVERT(char(8), getdate(),20) + '01 00:00:00', 102)
	set @start_report = CONVERT(datetime, '2019-05-01 00:00:00', 102)
	end else begin
	set @start_report = DATEADD(DAY,+1,@start_report)
	end;
-- Проверим диапазон запроса
if (@start_report<@stop_report)
begin
 --select @start_report, @stop_report;
 set @start = @start_report;
 declare @row int
 set @row =0;
 WHILE @start < @stop_report
    BEGIN
		set @stop = DATEADD(DAY,+1,@start)
		--select @start, @stop;
		--** НАЧАЛО ВЫБОРКИ СУТОЧНОГО РАПОРТА *********************************
				if OBJECT_ID(N'TempDB..#REMAINS_start',N'U') is not null
				begin
					drop table #REMAINS_start
				end

				CREATE TABLE #REMAINS_start (
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
					[type] [nvarchar](10) NOT NULL,
					[tank] [nchar](20) NOT NULL,
					[level] [int] NULL,
					[volume] [int] NULL,
					[dens] [float] NULL,
					[mass] [float] NULL) ON [PRIMARY]

				insert into #REMAINS_start
				EXEC [ASU_AZSlogs].[dbo].[GET_REMAINS_OF_DATE] @start

				insert into #REMAINS_stop
				EXEC [ASU_AZSlogs].[dbo].[GET_REMAINS_OF_DATE] @stop


				insert into [ASU_AZSoperations].[dbo].[Daily_Report]
				select 
				type = '107000022',
				date_start = @start,
				date_stop = @stop,
				volume_start = (SELECT SUM(volume) AS volume_start FROM #REMAINS_start where type = N'107000022' GROUP BY type),
				mass_start = (SELECT  SUM(mass) AS mass_start FROM #REMAINS_start where type = N'107000022' GROUP BY type),
				dens_start = (SELECT  SUM(mass) AS mass_start FROM #REMAINS_start where type = N'107000022' GROUP BY type)/(SELECT  SUM(volume) AS volume_start FROM #REMAINS_start where type = N'107000022' GROUP BY type),
				volume_consumption = (SELECT  SUM(volume) AS volume_consumption FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=N'107000022' and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type),
				volume_coming = (SELECT SUM(stop_volume - start_volume)*10 AS volume_coming FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=N'107000022' and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel),
				mass_consumption =(SELECT SUM(mass) AS mass_consumption FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=N'107000022' and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type),
				mass_coming = (SELECT SUM(stop_mass - start_mass) AS vmass_coming FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=N'107000022' and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel),
				volume_stop = (SELECT  SUM(volume) AS volume_stop FROM #REMAINS_stop where type = N'107000022' GROUP BY type),
				mass_stop = (SELECT  SUM(mass) AS mass_stop FROM #REMAINS_stop where type = N'107000022' GROUP BY type),
				dens_stop = (SELECT  SUM(mass) AS mass_stop FROM #REMAINS_stop where type = N'107000022' GROUP BY type)/(SELECT  SUM(volume) AS volume_stop FROM #REMAINS_stop where type = N'107000022' GROUP BY type),
				send = null

				insert into [ASU_AZSoperations].[dbo].[Daily_Report]
				select 
				type = '107000023',
				date_start = @start,
				date_stop = @stop,
				volume_start = (SELECT  SUM(volume) AS volume_start FROM #REMAINS_start where type = N'107000023' GROUP BY type),
				mass_start = (SELECT  SUM(mass) AS mass_start FROM #REMAINS_start where type = N'107000023' GROUP BY type),
				dens_start = (SELECT  SUM(mass) AS mass_start FROM #REMAINS_start where type = N'107000023' GROUP BY type)/(SELECT  SUM(volume) AS volume_start FROM #REMAINS_start where type = N'107000023' GROUP BY type),
				volume_consumption = (SELECT  SUM(volume) AS volume_consumption FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=N'107000023' and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type),
				volume_coming = (SELECT SUM(stop_volume - start_volume)*10 AS volume_coming FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=N'107000023' and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel),
				mass_consumption =(SELECT SUM(mass) AS mass_consumption FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=N'107000023' and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type),
				mass_coming = (SELECT SUM(stop_mass - start_mass) AS vmass_coming FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=N'107000023' and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel),
				volume_stop = (SELECT  SUM(volume) AS volume_stop FROM #REMAINS_stop where type = N'107000023' GROUP BY type),
				mass_stop = (SELECT  SUM(mass) AS mass_stop FROM #REMAINS_stop where type = N'107000023' GROUP BY type),
				dens_stop = (SELECT  SUM(mass) AS mass_stop FROM #REMAINS_stop where type = N'107000023' GROUP BY type)/(SELECT  SUM(volume) AS volume_stop FROM #REMAINS_stop where type = N'107000023' GROUP BY type),
				send = null

				insert into [ASU_AZSoperations].[dbo].[Daily_Report]
				select 
				type = '107000024',
				date_start = @start,
				date_stop = @stop,
				volume_start = (SELECT  SUM(volume) AS volume_start FROM #REMAINS_start where type = N'107000024' GROUP BY type),
				mass_start = (SELECT  SUM(mass) AS mass_start FROM #REMAINS_start where type = N'107000024' GROUP BY type),
				dens_start = (SELECT  SUM(mass) AS mass_start FROM #REMAINS_start where type = N'107000024' GROUP BY type)/(SELECT  SUM(volume) AS volume_start FROM #REMAINS_start where type = N'107000024' GROUP BY type),
				volume_consumption = (SELECT  SUM(volume) AS volume_consumption FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=N'107000024' and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type),
				volume_coming = (SELECT SUM(stop_volume - start_volume)*10 AS volume_coming FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=N'107000024' and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel),
				mass_consumption =(SELECT SUM(mass) AS mass_consumption FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=N'107000024' and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type),
				mass_coming = (SELECT SUM(stop_mass - start_mass) AS vmass_coming FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=N'107000024' and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel),
				volume_stop = (SELECT  SUM(volume) AS volume_stop FROM #REMAINS_stop where type = N'107000024' GROUP BY type),
				mass_stop = (SELECT  SUM(mass) AS mass_stop FROM #REMAINS_stop where type = N'107000024' GROUP BY type),
				dens_stop = (SELECT  SUM(mass) AS mass_stop FROM #REMAINS_stop where type = N'107000024' GROUP BY type)/(SELECT  SUM(volume) AS volume_stop FROM #REMAINS_stop where type = N'107000024' GROUP BY type),
				send = null

				insert into [ASU_AZSoperations].[dbo].[Daily_Report]
				select 
				type = '107000027',
				date_start = @start,
				date_stop = @stop,
				volume_start = (SELECT  SUM(volume) AS volume_start FROM #REMAINS_start where type = N'107000027' GROUP BY type),
				mass_start = (SELECT  SUM(mass) AS mass_start FROM #REMAINS_start where type = N'107000027' GROUP BY type),
				dens_start = (SELECT  SUM(mass) AS mass_start FROM #REMAINS_start where type = N'107000027' GROUP BY type)/(SELECT  SUM(volume) AS volume_start FROM #REMAINS_start where type = N'107000027' GROUP BY type),
				volume_consumption = (SELECT  SUM(volume) AS volume_consumption FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=N'107000027' and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type),
				volume_coming = (SELECT SUM(stop_volume - start_volume)*10 AS volume_coming FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=N'107000027' and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel),
				mass_consumption =(SELECT SUM(mass) AS mass_consumption FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=N'107000027' and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type),
				mass_coming = (SELECT SUM(stop_mass - start_mass) AS vmass_coming FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=N'107000027' and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel),
				volume_stop = (SELECT  SUM(volume) AS volume_stop FROM #REMAINS_stop where type = N'107000027' GROUP BY type),
				mass_stop = (SELECT  SUM(mass) AS mass_stop FROM #REMAINS_stop where type = N'107000027' GROUP BY type),
				dens_stop = (SELECT  SUM(mass) AS mass_stop FROM #REMAINS_stop where type = N'107000027' GROUP BY type)/(SELECT  SUM(volume) AS volume_stop FROM #REMAINS_stop where type = N'107000027' GROUP BY type),
				send = null

				set @row = @row+1;
		--** КОНЕЦ ВЫБОРКИ СУТОЧНОГО РАПОРТА *********************************
		set @start = DATEADD(DAY,+1,@start);
    END;
	return @row;
end;

end




GO


