USE [ASU_AZSoperations]
GO

/****** Object:  StoredProcedure [dbo].[ADD_Daily_Report_15]    Script Date: 30.06.2019 20:22:34 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO




-- =============================================

-- =============================================
CREATE PROCEDURE [dbo].[ADD_Daily_Report_15]
AS
begin

declare @start_report datetime
declare @stop_report datetime
declare @start datetime
declare @stop datetime

-- Проверим наличие таблицы [dbo].[Daily_Report_15] если нет создадим
if OBJECT_ID(N'[ASU_AZSoperations].[dbo].[Daily_Report_15]',N'U') is null
begin
	CREATE TABLE [ASU_AZSoperations].[dbo].[Daily_Report_15](
		[id] [int] IDENTITY(1,1) NOT NULL,
		[type] [nvarchar](10) NULL,
		[date_start] [datetime] NULL,
		[date_stop] [datetime] NULL,
		[volume_start] [int] NULL,
		[mass_start] [float] NULL,
		[dens_start] [float] NULL,
		[temp_start] [float] NULL,
		[volume15_start] [int] NULL,
		[mass15_start] [float] NULL,
		[dens15_start] [float] NULL,
		[volume_coming] [int] NULL,
		[mass_coming] [float] NULL,
		[dens_coming] [float] NULL,
		[temp_coming] [float] NULL,
		[volume15_coming] [int] NULL,
		[mass15_coming] [float] NULL,
		[dens15_coming] [float] NULL,
		[volume_consumption] [int] NULL,
		[mass_consumption] [float] NULL,
		[dens_consumption] [float] NULL,
		[temp_consumption] [float] NULL,
		[volume15_consumption] [int] NULL,
		[mass15_consumption] [float] NULL,
		[dens15_consumption] [float] NULL,
		[volume_stop] [int] NULL,
		[mass_stop] [float] NULL,
		[dens_stop] [float] NULL,
		[temp_stop] [float] NULL,
		[volume15_stop] [int] NULL,
		[mass15_stop] [float] NULL,
		[dens15_stop] [float] NULL,
		[send] [datetime] NULL,
	 CONSTRAINT [PK_Daily_Report_15] PRIMARY KEY CLUSTERED 
	(
		[id] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]	
end
-- Получим время начала запроса и конца
set @start_report = (select top(1) [date_start] from [ASU_AZSoperations].[dbo].[Daily_Report_15] order by [date_start] desc)
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
					[mass] [float] NULL,
					[temp] [float] NULL,					
					[volume15] [int] NULL,
					[dens15] [float] NULL,
					[mass15] [float] NULL					
					) ON [PRIMARY]
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
					[mass] [float] NULL,
					[temp] [float] NULL,					
					[volume15] [int] NULL,
					[dens15] [float] NULL,
					[mass15] [float] NULL				
					) ON [PRIMARY]

				insert into #REMAINS_start
				EXEC [ASU_AZSlogs].[dbo].[GET_REMAINS_OF_DATE_15] @start

				insert into #REMAINS_stop
				EXEC [ASU_AZSlogs].[dbo].[GET_REMAINS_OF_DATE_15] @stop
				-->
				declare @type sysname;
				declare @volume_start int;
				declare @mass_start float;
				declare @dens_start float;
				declare @temp_start float;
				declare @volume15_start int;
				declare @mass15_start float;
				declare @dens15_start float;

				declare @volume_stop int;
				declare @mass_stop float;
				declare @dens_stop float;
				declare @temp_stop float;
				declare @volume15_stop int;
				declare @mass15_stop float;
				declare @dens15_stop float;
				
				declare @mass_coming float;
				declare @volume_coming int;
				declare @temp_coming float;
				declare @volume15_coming int;
				declare @mass15_coming float;
				declare @dens15_coming float;

				declare @volume_consumption int;
				declare @mass_consumption float; 
				declare @dens_consumption float;
				declare @temp_consumption float;
				declare @volume15_consumption int
				declare @mass15_consumption float;
				declare @dens15_consumption float;

				set @type = N'107000022';
				-->
				set @volume_start = (SELECT SUM(volume) FROM #REMAINS_start where type = @type GROUP BY type);
				set @mass_start = (SELECT  SUM(mass) FROM #REMAINS_start where type = @type GROUP BY type);
				set @dens_start = (@mass_start/@volume_start) * 1000;
				set @temp_start = ([ASU_AZSlogs].[dbo].[GET_TANK_AVG_TEMP](@type, @start));
				set @volume15_start = (SELECT SUM(volume15) FROM #REMAINS_start where type = @type GROUP BY type);
				set @mass15_start = (SELECT SUM(mass15) FROM #REMAINS_start where type = @type GROUP BY type);
				set @dens15_start = (SELECT AVG(dens15) FROM #REMAINS_start where type = @type GROUP BY type);
				-->
				set @volume_stop = (SELECT  SUM(volume) FROM #REMAINS_stop where type = @type GROUP BY type);
				set @mass_stop = (SELECT  SUM(mass) FROM #REMAINS_stop where type = @type GROUP BY type);
				set @dens_stop = (@mass_stop/@volume_stop)*1000;
				set @temp_stop = [ASU_AZSlogs].[dbo].[GET_TANK_AVG_TEMP](@type, @stop);
				set @volume15_stop = (SELECT SUM(volume15) FROM #REMAINS_stop where type = @type GROUP BY type);
				set @mass15_stop = (SELECT SUM(mass15) FROM #REMAINS_stop where type = @type GROUP BY type);
				set @dens15_stop= (SELECT  AVG(dens15) FROM #REMAINS_stop where type = @type GROUP BY type);	
				-->
				set @mass_coming = (SELECT SUM(stop_mass - start_mass) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel);
				set @volume_coming = (SELECT SUM(stop_volume - start_volume)*10 FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel);
				set @temp_coming = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel);
				if (@volume_coming <> 0 and @volume_coming is not null) begin 
					set @dens15_coming = [ASU_AZSlogs].[dbo].[GET_DENS15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming);
					set @volume15_coming = [ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming, @volume_coming);
					set @mass15_coming = @volume15_coming*@dens15_coming*0.001;
				end else begin
					set @dens15_coming = 0;
					set @volume15_coming = 0;
					set @mass15_coming = 0;
				end;
				-->
				set @volume_consumption = (SELECT  SUM(volume) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
				set @mass_consumption =(SELECT SUM(mass) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
				set @dens_consumption = (@mass_consumption/@volume_consumption)*1000;
				set @temp_consumption = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);;
				set @volume15_consumption = (SELECT  SUM([ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2, volume)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
				set @dens15_consumption =  (SELECT  AVG([ASU_AZSlogs].[dbo].[GET_DENS15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
				set @mass15_consumption = @volume15_consumption*@dens15_consumption*0.001;
				-->
				insert into [ASU_AZSoperations].[dbo].[Daily_Report_15]
				select 
				type = @type,
				date_start = @start,
				date_stop = @stop,
				volume_start = @volume_start,
				mass_start = @mass_start,
				dens_start = @dens_start,
				temp_start = @temp_start,
				volume15_start = @volume15_start,
				mass15_start = @mass15_start,
				dens15_start = @dens15_start,

				volume_coming = @volume_coming,
				mass_coming = @mass_coming,
				dens_coming = (@mass_coming/@volume_coming) * 1000,
				temp_coming = @temp_coming,
				volume15_coming = @volume15_coming,
				mass15_coming = @mass15_coming,
				dens15_coming = @dens15_coming,

				volume_consumption = @volume_consumption,
				mass_consumption = @mass_consumption,
				dens_consumption = @dens_consumption,
				temp_consumption = @temp_consumption,
				volume15_consumption = @volume15_consumption,
				mass15_consumption = @mass15_consumption,
				dens15_consumption = @dens15_consumption,				
			
				volume_stop = @volume_stop,
				mass_stop = @mass_stop,
				dens_stop = @dens_stop,
				temp_stop = @temp_stop,
				volume15_stop = @volume15_stop,
				mass15_stop = @mass15_stop,
				dens15_stop= @dens15_stop,				
				
				send = null
				----------------------------------------------------------------------------------------------------
				set @type = N'107000023';
				-->
				set @volume_start = (SELECT SUM(volume) FROM #REMAINS_start where type = @type GROUP BY type);
				set @mass_start = (SELECT  SUM(mass) FROM #REMAINS_start where type = @type GROUP BY type);
				set @dens_start = (@mass_start/@volume_start) * 1000;
				set @temp_start = ([ASU_AZSlogs].[dbo].[GET_TANK_AVG_TEMP](@type, @start));
				set @volume15_start = (SELECT SUM(volume15) FROM #REMAINS_start where type = @type GROUP BY type);
				set @mass15_start = (SELECT SUM(mass15) FROM #REMAINS_start where type = @type GROUP BY type);
				set @dens15_start = (SELECT AVG(dens15) FROM #REMAINS_start where type = @type GROUP BY type);
				-->
				set @volume_stop = (SELECT  SUM(volume) FROM #REMAINS_stop where type = @type GROUP BY type);
				set @mass_stop = (SELECT  SUM(mass) FROM #REMAINS_stop where type = @type GROUP BY type);
				set @dens_stop = (@mass_stop/@volume_stop)*1000;
				set @temp_stop = [ASU_AZSlogs].[dbo].[GET_TANK_AVG_TEMP](@type, @stop);
				set @volume15_stop = (SELECT SUM(volume15) FROM #REMAINS_stop where type = @type GROUP BY type);
				set @mass15_stop = (SELECT SUM(mass15) FROM #REMAINS_stop where type = @type GROUP BY type);
				set @dens15_stop= (SELECT  AVG(dens15) FROM #REMAINS_stop where type = @type GROUP BY type);	
				-->
				set @mass_coming = (SELECT SUM(stop_mass - start_mass) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel);
				set @volume_coming = (SELECT SUM(stop_volume - start_volume)*10 FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel);
				set @temp_coming = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel);
				if (@volume_coming <> 0 and @volume_coming is not null) begin 
					set @dens15_coming = [ASU_AZSlogs].[dbo].[GET_DENS15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming);
					set @volume15_coming = [ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming, @volume_coming);
					set @mass15_coming = @volume15_coming*@dens15_coming*0.001;
				end else begin
					set @dens15_coming = 0;
					set @volume15_coming = 0;
					set @mass15_coming = 0;
				end;
				-->
				set @volume_consumption = (SELECT  SUM(volume) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
				set @mass_consumption =(SELECT SUM(mass) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
				set @dens_consumption = (@mass_consumption/@volume_consumption)*1000;
				set @temp_consumption = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);;
				set @volume15_consumption = (SELECT  SUM([ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2, volume)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
				set @dens15_consumption =  (SELECT  AVG([ASU_AZSlogs].[dbo].[GET_DENS15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
				set @mass15_consumption = @volume15_consumption*@dens15_consumption*0.001;
				-->
				insert into [ASU_AZSoperations].[dbo].[Daily_Report_15]
				select 
				type = @type,
				date_start = @start,
				date_stop = @stop,
				volume_start = @volume_start,
				mass_start = @mass_start,
				dens_start = @dens_start,
				temp_start = @temp_start,
				volume15_start = @volume15_start,
				mass15_start = @mass15_start,
				dens15_start = @dens15_start,

				volume_coming = @volume_coming,
				mass_coming = @mass_coming,
				dens_coming = (@mass_coming/@volume_coming) * 1000,
				temp_coming = @temp_coming,
				volume15_coming = @volume15_coming,
				mass15_coming = @mass15_coming,
				dens15_coming = @dens15_coming,

				volume_consumption = @volume_consumption,
				mass_consumption = @mass_consumption,
				dens_consumption = @dens_consumption,
				temp_consumption = @temp_consumption,
				volume15_consumption = @volume15_consumption,
				mass15_consumption = @mass15_consumption,
				dens15_consumption = @dens15_consumption,				
			
				volume_stop = @volume_stop,
				mass_stop = @mass_stop,
				dens_stop = @dens_stop,
				temp_stop = @temp_stop,
				volume15_stop = @volume15_stop,
				mass15_stop = @mass15_stop,
				dens15_stop= @dens15_stop,				
				
				send = null
				------------------------------------------------------------------------------------------------------
				set @type = N'107000024';
				-->
				set @volume_start = (SELECT SUM(volume) FROM #REMAINS_start where type = @type GROUP BY type);
				set @mass_start = (SELECT  SUM(mass) FROM #REMAINS_start where type = @type GROUP BY type);
				set @dens_start = (@mass_start/@volume_start) * 1000;
				set @temp_start = ([ASU_AZSlogs].[dbo].[GET_TANK_AVG_TEMP](@type, @start));
				set @volume15_start = (SELECT SUM(volume15) FROM #REMAINS_start where type = @type GROUP BY type);
				set @mass15_start = (SELECT SUM(mass15) FROM #REMAINS_start where type = @type GROUP BY type);
				set @dens15_start = (SELECT AVG(dens15) FROM #REMAINS_start where type = @type GROUP BY type);
				-->
				set @volume_stop = (SELECT  SUM(volume) FROM #REMAINS_stop where type = @type GROUP BY type);
				set @mass_stop = (SELECT  SUM(mass) FROM #REMAINS_stop where type = @type GROUP BY type);
				set @dens_stop = (@mass_stop/@volume_stop)*1000;
				set @temp_stop = [ASU_AZSlogs].[dbo].[GET_TANK_AVG_TEMP](@type, @stop);
				set @volume15_stop = (SELECT SUM(volume15) FROM #REMAINS_stop where type = @type GROUP BY type);
				set @mass15_stop = (SELECT SUM(mass15) FROM #REMAINS_stop where type = @type GROUP BY type);
				set @dens15_stop= (SELECT  AVG(dens15) FROM #REMAINS_stop where type = @type GROUP BY type);	
				-->
				set @mass_coming = (SELECT SUM(stop_mass - start_mass) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel);
				set @volume_coming = (SELECT SUM(stop_volume - start_volume)*10 FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel);
				set @temp_coming = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel);
				if (@volume_coming <> 0 and @volume_coming is not null) begin 
					set @dens15_coming = [ASU_AZSlogs].[dbo].[GET_DENS15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming);
					set @volume15_coming = [ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming, @volume_coming);
					set @mass15_coming = @volume15_coming*@dens15_coming*0.001;
				end else begin
					set @dens15_coming = 0;
					set @volume15_coming = 0;
					set @mass15_coming = 0;
				end;
				-->
				set @volume_consumption = (SELECT  SUM(volume) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
				set @mass_consumption =(SELECT SUM(mass) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
				set @dens_consumption = (@mass_consumption/@volume_consumption)*1000;
				set @temp_consumption = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);;
				set @volume15_consumption = (SELECT  SUM([ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2, volume)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
				set @dens15_consumption =  (SELECT  AVG([ASU_AZSlogs].[dbo].[GET_DENS15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
				set @mass15_consumption = @volume15_consumption*@dens15_consumption*0.001;
				-->
				insert into [ASU_AZSoperations].[dbo].[Daily_Report_15]
				select 
				type = @type,
				date_start = @start,
				date_stop = @stop,
				volume_start = @volume_start,
				mass_start = @mass_start,
				dens_start = @dens_start,
				temp_start = @temp_start,
				volume15_start = @volume15_start,
				mass15_start = @mass15_start,
				dens15_start = @dens15_start,

				volume_coming = @volume_coming,
				mass_coming = @mass_coming,
				dens_coming = (@mass_coming/@volume_coming) * 1000,
				temp_coming = @temp_coming,
				volume15_coming = @volume15_coming,
				mass15_coming = @mass15_coming,
				dens15_coming = @dens15_coming,

				volume_consumption = @volume_consumption,
				mass_consumption = @mass_consumption,
				dens_consumption = @dens_consumption,
				temp_consumption = @temp_consumption,
				volume15_consumption = @volume15_consumption,
				mass15_consumption = @mass15_consumption,
				dens15_consumption = @dens15_consumption,				
			
				volume_stop = @volume_stop,
				mass_stop = @mass_stop,
				dens_stop = @dens_stop,
				temp_stop = @temp_stop,
				volume15_stop = @volume15_stop,
				mass15_stop = @mass15_stop,
				dens15_stop= @dens15_stop,				
				
				send = null
				-------------------------------------------------------------------------------------------
				set @type = N'107000027';
				-->
				set @volume_start = (SELECT SUM(volume) FROM #REMAINS_start where type = @type GROUP BY type);
				set @mass_start = (SELECT  SUM(mass) FROM #REMAINS_start where type = @type GROUP BY type);
				set @dens_start = (@mass_start/@volume_start) * 1000;
				set @temp_start = ([ASU_AZSlogs].[dbo].[GET_TANK_AVG_TEMP](@type, @start));
				set @volume15_start = (SELECT SUM(volume15) FROM #REMAINS_start where type = @type GROUP BY type);
				set @mass15_start = (SELECT SUM(mass15) FROM #REMAINS_start where type = @type GROUP BY type);
				set @dens15_start = (SELECT AVG(dens15) FROM #REMAINS_start where type = @type GROUP BY type);
				-->
				set @volume_stop = (SELECT  SUM(volume) FROM #REMAINS_stop where type = @type GROUP BY type);
				set @mass_stop = (SELECT  SUM(mass) FROM #REMAINS_stop where type = @type GROUP BY type);
				set @dens_stop = (@mass_stop/@volume_stop)*1000;
				set @temp_stop = [ASU_AZSlogs].[dbo].[GET_TANK_AVG_TEMP](@type, @stop);
				set @volume15_stop = (SELECT SUM(volume15) FROM #REMAINS_stop where type = @type GROUP BY type);
				set @mass15_stop = (SELECT SUM(mass15) FROM #REMAINS_stop where type = @type GROUP BY type);
				set @dens15_stop= (SELECT  AVG(dens15) FROM #REMAINS_stop where type = @type GROUP BY type);	
				-->
				set @mass_coming = (SELECT SUM(stop_mass - start_mass) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel);
				set @volume_coming = (SELECT SUM(stop_volume - start_volume)*10 FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel);
				set @temp_coming = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel);
				if (@volume_coming <> 0 and @volume_coming is not null) begin 
					set @dens15_coming = [ASU_AZSlogs].[dbo].[GET_DENS15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming);
					set @volume15_coming = [ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming, @volume_coming);
					set @mass15_coming = @volume15_coming*@dens15_coming*0.001;
				end else begin
					set @dens15_coming = 0;
					set @volume15_coming = 0;
					set @mass15_coming = 0;
				end;
				-->
				set @volume_consumption = (SELECT  SUM(volume) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
				set @mass_consumption =(SELECT SUM(mass) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
				set @dens_consumption = (@mass_consumption/@volume_consumption)*1000;
				set @temp_consumption = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);;
				set @volume15_consumption = (SELECT  SUM([ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2, volume)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
				set @dens15_consumption =  (SELECT  AVG([ASU_AZSlogs].[dbo].[GET_DENS15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
				set @mass15_consumption = @volume15_consumption*@dens15_consumption*0.001;
				-->
				insert into [ASU_AZSoperations].[dbo].[Daily_Report_15]
				select 
				type = @type,
				date_start = @start,
				date_stop = @stop,
				volume_start = @volume_start,
				mass_start = @mass_start,
				dens_start = @dens_start,
				temp_start = @temp_start,
				volume15_start = @volume15_start,
				mass15_start = @mass15_start,
				dens15_start = @dens15_start,

				volume_coming = @volume_coming,
				mass_coming = @mass_coming,
				dens_coming = (@mass_coming/@volume_coming) * 1000,
				temp_coming = @temp_coming,
				volume15_coming = @volume15_coming,
				mass15_coming = @mass15_coming,
				dens15_coming = @dens15_coming,

				volume_consumption = @volume_consumption,
				mass_consumption = @mass_consumption,
				dens_consumption = @dens_consumption,
				temp_consumption = @temp_consumption,
				volume15_consumption = @volume15_consumption,
				mass15_consumption = @mass15_consumption,
				dens15_consumption = @dens15_consumption,				
			
				volume_stop = @volume_stop,
				mass_stop = @mass_stop,
				dens_stop = @dens_stop,
				temp_stop = @temp_stop,
				volume15_stop = @volume15_stop,
				mass15_stop = @mass15_stop,
				dens15_stop= @dens15_stop,				
				
				send = null

				set @row = @row+1;
		--** КОНЕЦ ВЫБОРКИ СУТОЧНОГО РАПОРТА *********************************
		set @start = DATEADD(DAY,+1,@start);
    END;
	return @row;
end;

end




GO


