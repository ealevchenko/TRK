USE [ASU_AZSoperations]
GO
/****** Object:  StoredProcedure [dbo].[ADD_Daily_Report_DC]    Script Date: 16.09.2019 00:07:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO




-- =============================================

-- =============================================
CREATE PROCEDURE [dbo].[ADD_Daily_Report_DC]
AS
begin

declare @start_report datetime
declare @stop_report datetime
declare @date_start datetime
declare @date_stop datetime

-- Получим время начала запроса и конца
set @start_report = (select top(1) [date_start] from [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[Daily_Report_AZS] order by [date_start] desc)
Set @stop_report = CONVERT(DATETIME, CONVERT(char(11), getdate() ,20) + '00:00:00', 102)
-- Проверим в таблице есть данные
if (@start_report is null) begin 
	-- данных нет начнем с начала месяца
	--set @start_report = CONVERT(DATETIME, CONVERT(char(8), getdate(),20) + '01 00:00:00', 102)
	set @start_report = CONVERT(datetime, '2019-06-01 00:00:00', 102)
	end else begin
	set @start_report = DATEADD(DAY,+1,@start_report)
	end;
-- Проверим диапазон запроса
if (@start_report<@stop_report)
begin
 --select @start_report, @stop_report;
 set @date_start = @start_report;
 declare @row int
 set @row =0;
 WHILE @date_start < @stop_report
    BEGIN
		set @date_stop = DATEADD(DAY,+1,@date_start)
		--** НАЧАЛО ВЫБОРКИ СУТОЧНОГО РАПОРТА ********************************
		-->
declare @type sysname;

declare @107000022_volume_start int;
declare @107000022_mass_start float;
declare @107000022_dens_start float;
declare @107000022_temp_start float;
declare @107000022_volume15_start int;
declare @107000022_mass15_start float;
declare @107000022_dens15_start float;

declare @107000023_volume_start int;
declare @107000023_mass_start float;
declare @107000023_dens_start float;
declare @107000023_temp_start float;
declare @107000023_volume15_start int;
declare @107000023_mass15_start float;
declare @107000023_dens15_start float;

declare @107000024_volume_start int;
declare @107000024_mass_start float;
declare @107000024_dens_start float;
declare @107000024_temp_start float;
declare @107000024_volume15_start int;
declare @107000024_mass15_start float;
declare @107000024_dens15_start float;

declare @107000027_volume_start int;
declare @107000027_mass_start float;
declare @107000027_dens_start float;
declare @107000027_temp_start float;
declare @107000027_volume15_start int;
declare @107000027_mass15_start float;
declare @107000027_dens15_start float;
-->
declare @107000022_volume_stop int;
declare @107000022_mass_stop float;
declare @107000022_dens_stop float;
declare @107000022_temp_stop float;
declare @107000022_volume15_stop int;
declare @107000022_mass15_stop float;
declare @107000022_dens15_stop float;

declare @107000023_volume_stop int;
declare @107000023_mass_stop float;
declare @107000023_dens_stop float;
declare @107000023_temp_stop float;
declare @107000023_volume15_stop int;
declare @107000023_mass15_stop float;
declare @107000023_dens15_stop float;

declare @107000024_volume_stop int;
declare @107000024_mass_stop float;
declare @107000024_dens_stop float;
declare @107000024_temp_stop float;
declare @107000024_volume15_stop int;
declare @107000024_mass15_stop float;
declare @107000024_dens15_stop float;

declare @107000027_volume_stop int;
declare @107000027_mass_stop float;
declare @107000027_dens_stop float;
declare @107000027_temp_stop float;
declare @107000027_volume15_stop int;
declare @107000027_mass15_stop float;
declare @107000027_dens15_stop float;
-->
declare @mass_coming float;
declare @volume_coming int;
declare @dens_coming float;
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

EXEC [ASU_AZSlogs].[dbo].[GET_CALC15_REMAINS_TANKS_DATE] @date_start

if OBJECT_ID(N'TempDB..##REMAINS_CURRENT_CALC15',N'U') is not null
begin
	set @107000022_volume_start = (SELECT sum([volume]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000022);
	set @107000022_mass_start = (SELECT sum([mass]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000022);
	set @107000022_dens_start = (@107000022_mass_start/@107000022_volume_start)*1000;
	set @107000022_temp_start = (SELECT [temp] FROM ##REMAINS_CURRENT_CALC15 where [tank] = N'PL107000022');
	set @107000022_volume15_start = (SELECT sum([volume15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000022);
	set @107000022_mass15_start = (SELECT sum([mass15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000022);
	set @107000022_dens15_start = (@107000022_mass15_start/@107000022_volume15_start)*1000;
	--select @107000022_volume_start,@107000022_mass_start,@107000022_dens_start,@107000022_temp_start,@107000022_volume15_start,@107000022_mass15_start,@107000022_dens15_start
	set @107000023_volume_start = (SELECT sum([volume]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000023);
	set @107000023_mass_start = (SELECT sum([mass]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000023);
	set @107000023_dens_start = (@107000023_mass_start/@107000023_volume_start)*1000;
	set @107000023_temp_start = (SELECT [temp] FROM ##REMAINS_CURRENT_CALC15 where [tank] = N'PL107000023');
	set @107000023_volume15_start = (SELECT sum([volume15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000023);
	set @107000023_mass15_start = (SELECT sum([mass15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000023);
	set @107000023_dens15_start = (@107000023_mass15_start/@107000023_volume15_start)*1000;
	--select @107000023_volume_start,@107000023_mass_start,@107000023_dens_start,@107000023_temp_start,@107000023_volume15_start,@107000023_mass15_start,@107000023_dens15_start
	set @107000024_volume_start = (SELECT sum([volume]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000024);
	set @107000024_mass_start = (SELECT sum([mass]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000024);
	set @107000024_dens_start = (@107000024_mass_start/@107000024_volume_start)*1000;
	set @107000024_temp_start = (SELECT [temp] FROM ##REMAINS_CURRENT_CALC15 where [tank] = N'PL107000024');
	set @107000024_volume15_start = (SELECT sum([volume15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000024);
	set @107000024_mass15_start = (SELECT sum([mass15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000024);
	set @107000024_dens15_start = (@107000024_mass15_start/@107000024_volume15_start)*1000;
	--select @107000024_volume_start,@107000024_mass_start,@107000024_dens_start,@107000024_temp_start,@107000024_volume15_start,@107000024_mass15_start,@107000024_dens15_start
	set @107000027_volume_start = (SELECT sum([volume]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000027);
	set @107000027_mass_start = (SELECT sum([mass]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000027);
	set @107000027_dens_start = (@107000027_mass_start/@107000027_volume_start)*1000;
	set @107000027_temp_start = (SELECT [temp] FROM ##REMAINS_CURRENT_CALC15 where [tank] = N'PL107000027');
	set @107000027_volume15_start = (SELECT sum([volume15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000027);
	set @107000027_mass15_start = (SELECT sum([mass15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000027);
	set @107000027_dens15_start = (@107000027_mass15_start/@107000027_volume15_start)*1000;
	--select @107000027_volume_start,@107000027_mass_start,@107000027_dens_start,@107000027_temp_start,@107000027_volume15_start,@107000027_mass15_start,@107000027_dens15_start
end

EXEC [ASU_AZSlogs].[dbo].[GET_CALC15_REMAINS_TANKS_DATE] @date_stop
if OBJECT_ID(N'TempDB..##REMAINS_CURRENT_CALC15',N'U') is not null
begin
	set @107000022_volume_stop = (SELECT sum([volume]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000022);
	set @107000022_mass_stop = (SELECT sum([mass]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000022);
	set @107000022_dens_stop = (@107000022_mass_stop/@107000022_volume_stop)*1000;
	set @107000022_temp_stop = (SELECT [temp] FROM ##REMAINS_CURRENT_CALC15 where [tank] = N'PL107000022');
	set @107000022_volume15_stop = (SELECT sum([volume15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000022);
	set @107000022_mass15_stop = (SELECT sum([mass15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000022);
	set @107000022_dens15_stop = (@107000022_mass15_stop/@107000022_volume15_stop)*1000;
	--select @107000022_volume_stop,@107000022_mass_stop,@107000022_dens_stop,@107000022_temp_stop,@107000022_volume15_stop,@107000022_mass15_stop,@107000022_dens15_stop
	set @107000023_volume_stop = (SELECT sum([volume]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000023);
	set @107000023_mass_stop = (SELECT sum([mass]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000023);
	set @107000023_dens_stop = (@107000023_mass_stop/@107000023_volume_stop)*1000;
	set @107000023_temp_stop = (SELECT [temp] FROM ##REMAINS_CURRENT_CALC15 where [tank] = N'PL107000023');
	set @107000023_volume15_stop = (SELECT sum([volume15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000023);
	set @107000023_mass15_stop = (SELECT sum([mass15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000023);
	set @107000023_dens15_stop = (@107000023_mass15_stop/@107000023_volume15_stop)*1000;
	--select @107000023_volume_stop,@107000023_mass_stop,@107000023_dens_stop,@107000023_temp_stop,@107000023_volume15_stop,@107000023_mass15_stop,@107000023_dens15_stop
	set @107000024_volume_stop = (SELECT sum([volume]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000024);
	set @107000024_mass_stop = (SELECT sum([mass]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000024);
	set @107000024_dens_stop = (@107000024_mass_stop/@107000024_volume_stop)*1000;
	set @107000024_temp_stop = (SELECT [temp] FROM ##REMAINS_CURRENT_CALC15 where [tank] = N'PL107000024');
	set @107000024_volume15_stop = (SELECT sum([volume15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000024);
	set @107000024_mass15_stop = (SELECT sum([mass15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000024);
	set @107000024_dens15_stop = (@107000024_mass15_stop/@107000024_volume15_stop)*1000;
	--select @107000024_volume_stop,@107000024_mass_stop,@107000024_dens_stop,@107000024_temp_stop,@107000024_volume15_stop,@107000024_mass15_stop,@107000024_dens15_stop
	set @107000027_volume_stop = (SELECT sum([volume]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000027);
	set @107000027_mass_stop = (SELECT sum([mass]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000027);
	set @107000027_dens_stop = (@107000027_mass_stop/@107000027_volume_stop)*1000;
	set @107000027_temp_stop = (SELECT [temp] FROM ##REMAINS_CURRENT_CALC15 where [tank] = N'PL107000027');
	set @107000027_volume15_stop = (SELECT sum([volume15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000027);
	set @107000027_mass15_stop = (SELECT sum([mass15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000027);
	set @107000027_dens15_stop = (@107000027_mass15_stop/@107000027_volume15_stop)*1000;
	--select @107000027_volume_stop,@107000027_mass_stop,@107000027_dens_stop,@107000027_temp_stop,@107000027_volume15_stop,@107000027_mass15_stop,@107000027_dens15_stop

end
--***************************************************************************************
	set @type = N'107000022';
	-->
	set @mass_coming = (SELECT SUM(stop_mass - start_mass) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @date_start and start_datetime<=@date_stop GROUP BY fuel);
	if (@mass_coming is null) set @mass_coming = 0;
	set @volume_coming = (SELECT SUM(stop_volume - start_volume)*10 FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @date_start and start_datetime<=@date_stop GROUP BY fuel);
	if (@volume_coming is null) set @volume_coming = 0;				
	set @temp_coming = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @date_start and start_datetime<=@date_stop GROUP BY fuel);
	if (@temp_coming is null) set @temp_coming = 0;					
	if (@volume_coming <> 0 and @volume_coming is not null) begin 
		set @dens_coming = (@mass_coming/@volume_coming) * 1000;
		set @dens15_coming = [ASU_AZSlogs].[dbo].[GET_DENS15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming);
		set @volume15_coming = [ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming, @volume_coming);
		set @mass15_coming = @volume15_coming*@dens15_coming*0.001;
	end else begin
		set @dens_coming = 0;
		set @dens15_coming = 0;
		set @volume15_coming = 0;
		set @mass15_coming = 0;
	end;
	-->
	set @volume_consumption = (SELECT  SUM(volume) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop GROUP BY fuel_type);
	if (@volume_consumption is null) set @volume_consumption = 0;
	set @mass_consumption =(SELECT SUM(mass) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop GROUP BY fuel_type);
	if (@mass_consumption is null) set @mass_consumption = 0;				
	set @temp_consumption = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop GROUP BY fuel_type);;
	if (@temp_consumption is null) set @temp_consumption = 0;					
	if (@volume_consumption <> 0 and @volume_consumption is not null) begin 
		set @dens_consumption = (@mass_consumption/@volume_consumption)*1000;
		set @volume15_consumption = (SELECT  SUM([ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2, volume)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop and volume>0  GROUP BY fuel_type);
		set @dens15_consumption =  (SELECT  AVG([ASU_AZSlogs].[dbo].[GET_DENS15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop and volume>0  GROUP BY fuel_type);
		set @mass15_consumption = @volume15_consumption*@dens15_consumption*0.001;
	end else begin
		set @dens_consumption = 0;
		set @dens15_consumption = 0;
		set @volume15_consumption = 0;
		set @mass15_consumption = 0;
	end;
	-->
	insert into [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[Daily_Report_AZS]
	           ([type]
           ,[date_start]
           ,[date_stop]
           ,[volume_start]
           ,[mass_start]
           ,[dens_start]
           ,[temp_start]
           ,[volume15_start]
           ,[mass15_start]
           ,[dens15_start]
           ,[volume_coming]
           ,[mass_coming]
           ,[dens_coming]
           ,[temp_coming]
           ,[volume15_coming]
           ,[mass15_coming]
           ,[dens15_coming]
           ,[volume_consumption]
           ,[mass_consumption]
           ,[dens_consumption]
           ,[temp_consumption]
           ,[volume15_consumption]
           ,[mass15_consumption]
           ,[dens15_consumption]
           ,[volume_stop]
           ,[mass_stop]
           ,[dens_stop]
           ,[temp_stop]
           ,[volume15_stop]
           ,[mass15_stop]
           ,[dens15_stop]
           ,[send])
	select 
		[type] = @type,
		date_start = @date_start,
		date_stop = @date_stop,
		volume_start = @107000022_volume_start,
		mass_start = @107000022_mass_start,
		dens_start = @107000022_dens_start,
		temp_start = @107000022_temp_start,
		volume15_start = @107000022_volume15_start,
		mass15_start = @107000022_mass15_start,
		dens15_start = @107000022_dens15_start,

		volume_coming = @volume_coming,
		mass_coming = @mass_coming,
		dens_coming = @dens_coming,
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
			
		volume_stop = @107000022_volume_stop,
		mass_stop = @107000022_mass_stop,
		dens_stop = @107000022_dens_stop,
		temp_stop = @107000022_temp_stop,
		volume15_stop = @107000022_volume15_stop,
		mass15_stop = @107000022_mass15_stop,
		dens15_stop= @107000022_dens15_stop,				
				
		send = null
--***************************************************************************************
	set @type = N'107000023';
	-->
	set @mass_coming = (SELECT SUM(stop_mass - start_mass) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @date_start and start_datetime<=@date_stop GROUP BY fuel);
	if (@mass_coming is null) set @mass_coming = 0;
	set @volume_coming = (SELECT SUM(stop_volume - start_volume)*10 FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @date_start and start_datetime<=@date_stop GROUP BY fuel);
	if (@volume_coming is null) set @volume_coming = 0;				
	set @temp_coming = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @date_start and start_datetime<=@date_stop GROUP BY fuel);
	if (@temp_coming is null) set @temp_coming = 0;					
	if (@volume_coming <> 0 and @volume_coming is not null) begin 
		set @dens_coming = (@mass_coming/@volume_coming) * 1000;
		set @dens15_coming = [ASU_AZSlogs].[dbo].[GET_DENS15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming);
		set @volume15_coming = [ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming, @volume_coming);
		set @mass15_coming = @volume15_coming*@dens15_coming*0.001;
	end else begin
		set @dens_coming = 0;
		set @dens15_coming = 0;
		set @volume15_coming = 0;
		set @mass15_coming = 0;
	end;
	-->
	set @volume_consumption = (SELECT  SUM(volume) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop GROUP BY fuel_type);
	if (@volume_consumption is null) set @volume_consumption = 0;
	set @mass_consumption =(SELECT SUM(mass) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop GROUP BY fuel_type);
	if (@mass_consumption is null) set @mass_consumption = 0;				
	set @temp_consumption = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop GROUP BY fuel_type);;
	if (@temp_consumption is null) set @temp_consumption = 0;					
	if (@volume_consumption <> 0 and @volume_consumption is not null) begin 
		set @dens_consumption = (@mass_consumption/@volume_consumption)*1000;
		set @volume15_consumption = (SELECT  SUM([ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2, volume)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop and volume>0  GROUP BY fuel_type);
		set @dens15_consumption =  (SELECT  AVG([ASU_AZSlogs].[dbo].[GET_DENS15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop and volume>0  GROUP BY fuel_type);
		set @mass15_consumption = @volume15_consumption*@dens15_consumption*0.001;
	end else begin
		set @dens_consumption = 0;
		set @dens15_consumption = 0;
		set @volume15_consumption = 0;
		set @mass15_consumption = 0;
	end;
	-->
	insert into [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[Daily_Report_AZS]
	           ([type]
           ,[date_start]
           ,[date_stop]
           ,[volume_start]
           ,[mass_start]
           ,[dens_start]
           ,[temp_start]
           ,[volume15_start]
           ,[mass15_start]
           ,[dens15_start]
           ,[volume_coming]
           ,[mass_coming]
           ,[dens_coming]
           ,[temp_coming]
           ,[volume15_coming]
           ,[mass15_coming]
           ,[dens15_coming]
           ,[volume_consumption]
           ,[mass_consumption]
           ,[dens_consumption]
           ,[temp_consumption]
           ,[volume15_consumption]
           ,[mass15_consumption]
           ,[dens15_consumption]
           ,[volume_stop]
           ,[mass_stop]
           ,[dens_stop]
           ,[temp_stop]
           ,[volume15_stop]
           ,[mass15_stop]
           ,[dens15_stop]
           ,[send])
	select 
		[type] = @type,
		date_start = @date_start,
		date_stop = @date_stop,
		volume_start = @107000023_volume_start,
		mass_start = @107000023_mass_start,
		dens_start = @107000023_dens_start,
		temp_start = @107000023_temp_start,
		volume15_start = @107000023_volume15_start,
		mass15_start = @107000023_mass15_start,
		dens15_start = @107000023_dens15_start,

		volume_coming = @volume_coming,
		mass_coming = @mass_coming,
		dens_coming = @dens_coming,
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
			
		volume_stop = @107000023_volume_stop,
		mass_stop = @107000023_mass_stop,
		dens_stop = @107000023_dens_stop,
		temp_stop = @107000023_temp_stop,
		volume15_stop = @107000023_volume15_stop,
		mass15_stop = @107000023_mass15_stop,
		dens15_stop= @107000023_dens15_stop,				
				
		send = null
--***************************************************************************************
	set @type = N'107000024';
	-->
	set @mass_coming = (SELECT SUM(stop_mass - start_mass) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @date_start and start_datetime<=@date_stop GROUP BY fuel);
	if (@mass_coming is null) set @mass_coming = 0;
	set @volume_coming = (SELECT SUM(stop_volume - start_volume)*10 FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @date_start and start_datetime<=@date_stop GROUP BY fuel);
	if (@volume_coming is null) set @volume_coming = 0;				
	set @temp_coming = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @date_start and start_datetime<=@date_stop GROUP BY fuel);
	if (@temp_coming is null) set @temp_coming = 0;					
	if (@volume_coming <> 0 and @volume_coming is not null) begin 
		set @dens_coming = (@mass_coming/@volume_coming) * 1000;
		set @dens15_coming = [ASU_AZSlogs].[dbo].[GET_DENS15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming);
		set @volume15_coming = [ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming, @volume_coming);
		set @mass15_coming = @volume15_coming*@dens15_coming*0.001;
	end else begin
		set @dens_coming = 0;
		set @dens15_coming = 0;
		set @volume15_coming = 0;
		set @mass15_coming = 0;
	end;
	-->
	set @volume_consumption = (SELECT  SUM(volume) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop GROUP BY fuel_type);
	if (@volume_consumption is null) set @volume_consumption = 0;
	set @mass_consumption =(SELECT SUM(mass) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop GROUP BY fuel_type);
	if (@mass_consumption is null) set @mass_consumption = 0;				
	set @temp_consumption = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop GROUP BY fuel_type);;
	if (@temp_consumption is null) set @temp_consumption = 0;					
	if (@volume_consumption <> 0 and @volume_consumption is not null) begin 
		set @dens_consumption = (@mass_consumption/@volume_consumption)*1000;
		set @volume15_consumption = (SELECT  SUM([ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2, volume)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop and volume>0  GROUP BY fuel_type);
		set @dens15_consumption =  (SELECT  AVG([ASU_AZSlogs].[dbo].[GET_DENS15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop and volume>0  GROUP BY fuel_type);
		set @mass15_consumption = @volume15_consumption*@dens15_consumption*0.001;
	end else begin
		set @dens_consumption = 0;
		set @dens15_consumption = 0;
		set @volume15_consumption = 0;
		set @mass15_consumption = 0;
	end;
	-->
		insert into [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[Daily_Report_AZS]
	           ([type]
           ,[date_start]
           ,[date_stop]
           ,[volume_start]
           ,[mass_start]
           ,[dens_start]
           ,[temp_start]
           ,[volume15_start]
           ,[mass15_start]
           ,[dens15_start]
           ,[volume_coming]
           ,[mass_coming]
           ,[dens_coming]
           ,[temp_coming]
           ,[volume15_coming]
           ,[mass15_coming]
           ,[dens15_coming]
           ,[volume_consumption]
           ,[mass_consumption]
           ,[dens_consumption]
           ,[temp_consumption]
           ,[volume15_consumption]
           ,[mass15_consumption]
           ,[dens15_consumption]
           ,[volume_stop]
           ,[mass_stop]
           ,[dens_stop]
           ,[temp_stop]
           ,[volume15_stop]
           ,[mass15_stop]
           ,[dens15_stop]
           ,[send])
	select 
		[type] = @type,
		date_start = @date_start,
		date_stop = @date_stop,
		volume_start = @107000024_volume_start,
		mass_start = @107000024_mass_start,
		dens_start = @107000024_dens_start,
		temp_start = @107000024_temp_start,
		volume15_start = @107000024_volume15_start,
		mass15_start = @107000024_mass15_start,
		dens15_start = @107000024_dens15_start,

		volume_coming = @volume_coming,
		mass_coming = @mass_coming,
		dens_coming = @dens_coming,
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
			
		volume_stop = @107000024_volume_stop,
		mass_stop = @107000024_mass_stop,
		dens_stop = @107000024_dens_stop,
		temp_stop = @107000024_temp_stop,
		volume15_stop = @107000024_volume15_stop,
		mass15_stop = @107000024_mass15_stop,
		dens15_stop= @107000024_dens15_stop,				
				
		send = null
--***************************************************************************************
	set @type = N'107000027';
	-->
	set @mass_coming = (SELECT SUM(stop_mass - start_mass) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @date_start and start_datetime<=@date_stop GROUP BY fuel);
	if (@mass_coming is null) set @mass_coming = 0;
	set @volume_coming = (SELECT SUM(stop_volume - start_volume)*10 FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @date_start and start_datetime<=@date_stop GROUP BY fuel);
	if (@volume_coming is null) set @volume_coming = 0;				
	set @temp_coming = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @date_start and start_datetime<=@date_stop GROUP BY fuel);
	if (@temp_coming is null) set @temp_coming = 0;					
	if (@volume_coming <> 0 and @volume_coming is not null) begin 
		set @dens_coming = (@mass_coming/@volume_coming) * 1000;
		set @dens15_coming = [ASU_AZSlogs].[dbo].[GET_DENS15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming);
		set @volume15_coming = [ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming, @volume_coming);
		set @mass15_coming = @volume15_coming*@dens15_coming*0.001;
	end else begin
		set @dens_coming = 0;
		set @dens15_coming = 0;
		set @volume15_coming = 0;
		set @mass15_coming = 0;
	end;
	-->
	set @volume_consumption = (SELECT  SUM(volume) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop GROUP BY fuel_type);
	if (@volume_consumption is null) set @volume_consumption = 0;
	set @mass_consumption =(SELECT SUM(mass) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop GROUP BY fuel_type);
	if (@mass_consumption is null) set @mass_consumption = 0;				
	set @temp_consumption = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop GROUP BY fuel_type);;
	if (@temp_consumption is null) set @temp_consumption = 0;					
	if (@volume_consumption <> 0 and @volume_consumption is not null) begin 
		set @dens_consumption = (@mass_consumption/@volume_consumption)*1000;
		set @volume15_consumption = (SELECT  SUM([ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2, volume)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop and volume>0  GROUP BY fuel_type);
		set @dens15_consumption =  (SELECT  AVG([ASU_AZSlogs].[dbo].[GET_DENS15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop and volume>0  GROUP BY fuel_type);
		set @mass15_consumption = @volume15_consumption*@dens15_consumption*0.001;
	end else begin
		set @dens_consumption = 0;
		set @dens15_consumption = 0;
		set @volume15_consumption = 0;
		set @mass15_consumption = 0;
	end;
	-->
		insert into [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[Daily_Report_AZS]
	           ([type]
           ,[date_start]
           ,[date_stop]
           ,[volume_start]
           ,[mass_start]
           ,[dens_start]
           ,[temp_start]
           ,[volume15_start]
           ,[mass15_start]
           ,[dens15_start]
           ,[volume_coming]
           ,[mass_coming]
           ,[dens_coming]
           ,[temp_coming]
           ,[volume15_coming]
           ,[mass15_coming]
           ,[dens15_coming]
           ,[volume_consumption]
           ,[mass_consumption]
           ,[dens_consumption]
           ,[temp_consumption]
           ,[volume15_consumption]
           ,[mass15_consumption]
           ,[dens15_consumption]
           ,[volume_stop]
           ,[mass_stop]
           ,[dens_stop]
           ,[temp_stop]
           ,[volume15_stop]
           ,[mass15_stop]
           ,[dens15_stop]
           ,[send])
	select 
		[type] = @type,
		date_start = @date_start,
		date_stop = @date_stop,
		volume_start = @107000027_volume_start,
		mass_start = @107000027_mass_start,
		dens_start = @107000027_dens_start,
		temp_start = @107000027_temp_start,
		volume15_start = @107000027_volume15_start,
		mass15_start = @107000027_mass15_start,
		dens15_start = @107000027_dens15_start,

		volume_coming = @volume_coming,
		mass_coming = @mass_coming,
		dens_coming = @dens_coming,
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
			
		volume_stop = @107000027_volume_stop,
		mass_stop = @107000027_mass_stop,
		dens_stop = @107000027_dens_stop,
		temp_stop = @107000027_temp_stop,
		volume15_stop = @107000027_volume15_stop,
		mass15_stop = @107000027_mass15_stop,
		dens15_stop= @107000027_dens15_stop,				
				
		send = null
				set @row = @row+1;
		--** КОНЕЦ ВЫБОРКИ СУТОЧНОГО РАПОРТА *********************************
		set @date_start = DATEADD(DAY,+1,@date_start);
    END;
	return @row;
end;






--if (@start_report<@stop_report)
--begin
-- --select @start_report, @stop_report;
-- set @start = @start_report;
-- declare @row int
-- set @row =0;
-- WHILE @start < @stop_report
--    BEGIN
--		set @stop = DATEADD(DAY,+1,@start)
--		--select @start, @stop;
--		--** НАЧАЛО ВЫБОРКИ СУТОЧНОГО РАПОРТА *********************************
--				if OBJECT_ID(N'TempDB..#REMAINS_start',N'U') is not null
--				begin
--					drop table #REMAINS_start
--				end

--				CREATE TABLE #REMAINS_start (
--					[type] [nvarchar](10) NOT NULL,
--					[tank] [nchar](20) NOT NULL,
--					[level] [int] NULL,
--					[volume] [int] NULL,
--					[dens] [float] NULL,
--					[mass] [float] NULL,
--					[temp] [float] NULL,					
--					[volume15] [int] NULL,
--					[dens15] [float] NULL,
--					[mass15] [float] NULL					
--					) ON [PRIMARY]
--				-- Проверим и создадим состояние в конце
--				if OBJECT_ID(N'TempDB..#REMAINS_stop',N'U') is not null
--				begin
--					drop table #REMAINS_stop
--				end

--				CREATE TABLE #REMAINS_stop (
--					[type] [nvarchar](10) NOT NULL,
--					[tank] [nchar](20) NOT NULL,
--					[level] [int] NULL,
--					[volume] [int] NULL,
--					[dens] [float] NULL,
--					[mass] [float] NULL,
--					[temp] [float] NULL,					
--					[volume15] [int] NULL,
--					[dens15] [float] NULL,
--					[mass15] [float] NULL				
--					) ON [PRIMARY]

--				insert into #REMAINS_start
--				EXEC [ASU_AZSlogs].[dbo].[GET_REMAINS_OF_DATE_15] @start

--				insert into #REMAINS_stop
--				EXEC [ASU_AZSlogs].[dbo].[GET_REMAINS_OF_DATE_15] @stop
--				-->
--				declare @type sysname;
--				declare @volume_start int;
--				declare @mass_start float;
--				declare @dens_start float;
--				declare @temp_start float;
--				declare @volume15_start int;
--				declare @mass15_start float;
--				declare @dens15_start float;

--				declare @volume_stop int;
--				declare @mass_stop float;
--				declare @dens_stop float;
--				declare @temp_stop float;
--				declare @volume15_stop int;
--				declare @mass15_stop float;
--				declare @dens15_stop float;
				
--				declare @mass_coming float;
--				declare @volume_coming int;
--				declare @dens_coming float;
--				declare @temp_coming float;
--				declare @volume15_coming int;
--				declare @mass15_coming float;
--				declare @dens15_coming float;

--				declare @volume_consumption int;
--				declare @mass_consumption float; 
--				declare @dens_consumption float;
--				declare @temp_consumption float;
--				declare @volume15_consumption int
--				declare @mass15_consumption float;
--				declare @dens15_consumption float;

--				set @type = N'107000022';
--				-->
--				set @volume_start = (SELECT SUM(volume) FROM #REMAINS_start where type = @type GROUP BY type);
--				set @mass_start = (SELECT  SUM(mass) FROM #REMAINS_start where type = @type GROUP BY type);
--				set @dens_start = (@mass_start/@volume_start) * 1000;
--				set @temp_start = ([ASU_AZSlogs].[dbo].[GET_TANK_AVG_TEMP](@type, @start));
--				set @volume15_start = (SELECT SUM(volume15) FROM #REMAINS_start where type = @type GROUP BY type);
--				set @mass15_start = (SELECT SUM(mass15) FROM #REMAINS_start where type = @type GROUP BY type);
--				set @dens15_start = (SELECT AVG(dens15) FROM #REMAINS_start where type = @type GROUP BY type);
--				-->
--				set @volume_stop = (SELECT  SUM(volume) FROM #REMAINS_stop where type = @type GROUP BY type);
--				set @mass_stop = (SELECT  SUM(mass) FROM #REMAINS_stop where type = @type GROUP BY type);
--				set @dens_stop = (@mass_stop/@volume_stop)*1000;
--				set @temp_stop = [ASU_AZSlogs].[dbo].[GET_TANK_AVG_TEMP](@type, @stop);
--				set @volume15_stop = (SELECT SUM(volume15) FROM #REMAINS_stop where type = @type GROUP BY type);
--				set @mass15_stop = (SELECT SUM(mass15) FROM #REMAINS_stop where type = @type GROUP BY type);
--				set @dens15_stop= (SELECT  AVG(dens15) FROM #REMAINS_stop where type = @type GROUP BY type);	
--				-->
--				set @mass_coming = (SELECT SUM(stop_mass - start_mass) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel);
--				if (@mass_coming is null) set @mass_coming = 0;
--				set @volume_coming = (SELECT SUM(stop_volume - start_volume)*10 FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel);
--				if (@volume_coming is null) set @volume_coming = 0;				
--				set @temp_coming = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel);
--				if (@temp_coming is null) set @temp_coming = 0;					
--				if (@volume_coming <> 0 and @volume_coming is not null) begin 
--					set @dens_coming = (@mass_coming/@volume_coming) * 1000;
--					set @dens15_coming = [ASU_AZSlogs].[dbo].[GET_DENS15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming);
--					set @volume15_coming = [ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming, @volume_coming);
--					set @mass15_coming = @volume15_coming*@dens15_coming*0.001;
--				end else begin
--					set @dens_coming = 0;
--					set @dens15_coming = 0;
--					set @volume15_coming = 0;
--					set @mass15_coming = 0;
--				end;
--				-->
--				set @volume_consumption = (SELECT  SUM(volume) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
--				if (@volume_consumption is null) set @volume_consumption = 0;
--				set @mass_consumption =(SELECT SUM(mass) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
--				if (@mass_consumption is null) set @mass_consumption = 0;				
--				set @temp_consumption = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);;
--				if (@temp_consumption is null) set @temp_consumption = 0;					
--				if (@volume_consumption <> 0 and @volume_consumption is not null) begin 
--					set @dens_consumption = (@mass_consumption/@volume_consumption)*1000;
--					set @volume15_consumption = (SELECT  SUM([ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2, volume)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop and volume>0 GROUP BY fuel_type);
--					set @dens15_consumption =  (SELECT  AVG([ASU_AZSlogs].[dbo].[GET_DENS15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop and volume>0 GROUP BY fuel_type);
--					set @mass15_consumption = @volume15_consumption*@dens15_consumption*0.001;
--				end else begin
--					set @dens_consumption = 0;
--					set @dens15_consumption = 0;
--					set @volume15_consumption = 0;
--					set @mass15_consumption = 0;
--				end;
				
				
--				-->
--				insert into [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[Daily_Report_AZS]
--				           ([type]
--           ,[date_start]
--           ,[date_stop]
--           ,[volume_start]
--           ,[mass_start]
--           ,[dens_start]
--           ,[temp_start]
--           ,[volume15_start]
--           ,[mass15_start]
--           ,[dens15_start]
--           ,[volume_coming]
--           ,[mass_coming]
--           ,[dens_coming]
--           ,[temp_coming]
--           ,[volume15_coming]
--           ,[mass15_coming]
--           ,[dens15_coming]
--           ,[volume_consumption]
--           ,[mass_consumption]
--           ,[dens_consumption]
--           ,[temp_consumption]
--           ,[volume15_consumption]
--           ,[mass15_consumption]
--           ,[dens15_consumption]
--           ,[volume_stop]
--           ,[mass_stop]
--           ,[dens_stop]
--           ,[temp_stop]
--           ,[volume15_stop]
--           ,[mass15_stop]
--           ,[dens15_stop]
--           ,[send])
--				select 
--				type = @type,
--				date_start = @start,
--				date_stop = @stop,
--				volume_start = @volume_start,
--				mass_start = @mass_start,
--				dens_start = @dens_start,
--				temp_start = @temp_start,
--				volume15_start = @volume15_start,
--				mass15_start = @mass15_start,
--				dens15_start = @dens15_start,

--				volume_coming = @volume_coming,
--				mass_coming = @mass_coming,
--				dens_coming = @dens_coming,
--				temp_coming = @temp_coming,
--				volume15_coming = @volume15_coming,
--				mass15_coming = @mass15_coming,
--				dens15_coming = @dens15_coming,

--				volume_consumption = @volume_consumption,
--				mass_consumption = @mass_consumption,
--				dens_consumption = @dens_consumption,
--				temp_consumption = @temp_consumption,
--				volume15_consumption = @volume15_consumption,
--				mass15_consumption = @mass15_consumption,
--				dens15_consumption = @dens15_consumption,				
			
--				volume_stop = @volume_stop,
--				mass_stop = @mass_stop,
--				dens_stop = @dens_stop,
--				temp_stop = @temp_stop,
--				volume15_stop = @volume15_stop,
--				mass15_stop = @mass15_stop,
--				dens15_stop= @dens15_stop,				
				
--				send = null
--				----------------------------------------------------------------------------------------------------
--				set @type = N'107000023';
--				-->
--				set @volume_start = (SELECT SUM(volume) FROM #REMAINS_start where type = @type GROUP BY type);
--				set @mass_start = (SELECT  SUM(mass) FROM #REMAINS_start where type = @type GROUP BY type);
--				set @dens_start = (@mass_start/@volume_start) * 1000;
--				set @temp_start = ([ASU_AZSlogs].[dbo].[GET_TANK_AVG_TEMP](@type, @start));
--				set @volume15_start = (SELECT SUM(volume15) FROM #REMAINS_start where type = @type GROUP BY type);
--				set @mass15_start = (SELECT SUM(mass15) FROM #REMAINS_start where type = @type GROUP BY type);
--				set @dens15_start = (SELECT AVG(dens15) FROM #REMAINS_start where type = @type GROUP BY type);
--				-->
--				set @volume_stop = (SELECT  SUM(volume) FROM #REMAINS_stop where type = @type GROUP BY type);
--				set @mass_stop = (SELECT  SUM(mass) FROM #REMAINS_stop where type = @type GROUP BY type);
--				set @dens_stop = (@mass_stop/@volume_stop)*1000;
--				set @temp_stop = [ASU_AZSlogs].[dbo].[GET_TANK_AVG_TEMP](@type, @stop);
--				set @volume15_stop = (SELECT SUM(volume15) FROM #REMAINS_stop where type = @type GROUP BY type);
--				set @mass15_stop = (SELECT SUM(mass15) FROM #REMAINS_stop where type = @type GROUP BY type);
--				set @dens15_stop= (SELECT  AVG(dens15) FROM #REMAINS_stop where type = @type GROUP BY type);	
--				-->
--				set @mass_coming = (SELECT SUM(stop_mass - start_mass) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel);
--				if (@mass_coming is null) set @mass_coming = 0;
--				set @volume_coming = (SELECT SUM(stop_volume - start_volume)*10 FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel);
--				if (@volume_coming is null) set @volume_coming = 0;				
--				set @temp_coming = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel);
--				if (@temp_coming is null) set @temp_coming = 0;					
--				if (@volume_coming <> 0 and @volume_coming is not null) begin 
--					set @dens_coming = (@mass_coming/@volume_coming) * 1000;
--					set @dens15_coming = [ASU_AZSlogs].[dbo].[GET_DENS15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming);
--					set @volume15_coming = [ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming, @volume_coming);
--					set @mass15_coming = @volume15_coming*@dens15_coming*0.001;
--				end else begin
--					set @dens_coming = 0;
--					set @dens15_coming = 0;
--					set @volume15_coming = 0;
--					set @mass15_coming = 0;
--				end;
--				-->
--				set @volume_consumption = (SELECT  SUM(volume) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
--				if (@volume_consumption is null) set @volume_consumption = 0;
--				set @mass_consumption =(SELECT SUM(mass) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
--				if (@mass_consumption is null) set @mass_consumption = 0;				
--				set @temp_consumption = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);;
--				if (@temp_consumption is null) set @temp_consumption = 0;					
--				if (@volume_consumption <> 0 and @volume_consumption is not null) begin 
--					set @dens_consumption = (@mass_consumption/@volume_consumption)*1000;
--					set @volume15_consumption = (SELECT  SUM([ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2, volume)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop and volume>0 GROUP BY fuel_type);
--					set @dens15_consumption =  (SELECT  AVG([ASU_AZSlogs].[dbo].[GET_DENS15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop and volume>0 GROUP BY fuel_type);
--					set @mass15_consumption = @volume15_consumption*@dens15_consumption*0.001;
--				end else begin
--					set @dens_consumption = 0;
--					set @dens15_consumption = 0;
--					set @volume15_consumption = 0;
--					set @mass15_consumption = 0;
--				end;
				
				
--				-->
--				insert into [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[Daily_Report_AZS]
--				           ([type]
--           ,[date_start]
--           ,[date_stop]
--           ,[volume_start]
--           ,[mass_start]
--           ,[dens_start]
--           ,[temp_start]
--           ,[volume15_start]
--           ,[mass15_start]
--           ,[dens15_start]
--           ,[volume_coming]
--           ,[mass_coming]
--           ,[dens_coming]
--           ,[temp_coming]
--           ,[volume15_coming]
--           ,[mass15_coming]
--           ,[dens15_coming]
--           ,[volume_consumption]
--           ,[mass_consumption]
--           ,[dens_consumption]
--           ,[temp_consumption]
--           ,[volume15_consumption]
--           ,[mass15_consumption]
--           ,[dens15_consumption]
--           ,[volume_stop]
--           ,[mass_stop]
--           ,[dens_stop]
--           ,[temp_stop]
--           ,[volume15_stop]
--           ,[mass15_stop]
--           ,[dens15_stop]
--           ,[send])
--				select 
--				type = @type,
--				date_start = @start,
--				date_stop = @stop,
--				volume_start = @volume_start,
--				mass_start = @mass_start,
--				dens_start = @dens_start,
--				temp_start = @temp_start,
--				volume15_start = @volume15_start,
--				mass15_start = @mass15_start,
--				dens15_start = @dens15_start,

--				volume_coming = @volume_coming,
--				mass_coming = @mass_coming,
--				dens_coming = @dens_coming,
--				temp_coming = @temp_coming,
--				volume15_coming = @volume15_coming,
--				mass15_coming = @mass15_coming,
--				dens15_coming = @dens15_coming,

--				volume_consumption = @volume_consumption,
--				mass_consumption = @mass_consumption,
--				dens_consumption = @dens_consumption,
--				temp_consumption = @temp_consumption,
--				volume15_consumption = @volume15_consumption,
--				mass15_consumption = @mass15_consumption,
--				dens15_consumption = @dens15_consumption,				
			
--				volume_stop = @volume_stop,
--				mass_stop = @mass_stop,
--				dens_stop = @dens_stop,
--				temp_stop = @temp_stop,
--				volume15_stop = @volume15_stop,
--				mass15_stop = @mass15_stop,
--				dens15_stop= @dens15_stop,				
				
--				send = null
--				----------------------------------------------------------------------------------------------------
--				set @type = N'107000024';
--				-->
--				set @volume_start = (SELECT SUM(volume) FROM #REMAINS_start where type = @type GROUP BY type);
--				set @mass_start = (SELECT  SUM(mass) FROM #REMAINS_start where type = @type GROUP BY type);
--				set @dens_start = (@mass_start/@volume_start) * 1000;
--				set @temp_start = ([ASU_AZSlogs].[dbo].[GET_TANK_AVG_TEMP](@type, @start));
--				set @volume15_start = (SELECT SUM(volume15) FROM #REMAINS_start where type = @type GROUP BY type);
--				set @mass15_start = (SELECT SUM(mass15) FROM #REMAINS_start where type = @type GROUP BY type);
--				set @dens15_start = (SELECT AVG(dens15) FROM #REMAINS_start where type = @type GROUP BY type);
--				-->
--				set @volume_stop = (SELECT  SUM(volume) FROM #REMAINS_stop where type = @type GROUP BY type);
--				set @mass_stop = (SELECT  SUM(mass) FROM #REMAINS_stop where type = @type GROUP BY type);
--				set @dens_stop = (@mass_stop/@volume_stop)*1000;
--				set @temp_stop = [ASU_AZSlogs].[dbo].[GET_TANK_AVG_TEMP](@type, @stop);
--				set @volume15_stop = (SELECT SUM(volume15) FROM #REMAINS_stop where type = @type GROUP BY type);
--				set @mass15_stop = (SELECT SUM(mass15) FROM #REMAINS_stop where type = @type GROUP BY type);
--				set @dens15_stop= (SELECT  AVG(dens15) FROM #REMAINS_stop where type = @type GROUP BY type);	
--				-->
--				set @mass_coming = (SELECT SUM(stop_mass - start_mass) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel);
--				if (@mass_coming is null) set @mass_coming = 0;
--				set @volume_coming = (SELECT SUM(stop_volume - start_volume)*10 FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel);
--				if (@volume_coming is null) set @volume_coming = 0;				
--				set @temp_coming = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel);
--				if (@temp_coming is null) set @temp_coming = 0;					
--				if (@volume_coming <> 0 and @volume_coming is not null) begin 
--					set @dens_coming = (@mass_coming/@volume_coming) * 1000;
--					set @dens15_coming = [ASU_AZSlogs].[dbo].[GET_DENS15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming);
--					set @volume15_coming = [ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming, @volume_coming);
--					set @mass15_coming = @volume15_coming*@dens15_coming*0.001;
--				end else begin
--					set @dens_coming = 0;
--					set @dens15_coming = 0;
--					set @volume15_coming = 0;
--					set @mass15_coming = 0;
--				end;
--				-->
--				set @volume_consumption = (SELECT  SUM(volume) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
--				if (@volume_consumption is null) set @volume_consumption = 0;
--				set @mass_consumption =(SELECT SUM(mass) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
--				if (@mass_consumption is null) set @mass_consumption = 0;				
--				set @temp_consumption = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);;
--				if (@temp_consumption is null) set @temp_consumption = 0;					
--				if (@volume_consumption <> 0 and @volume_consumption is not null) begin 
--					set @dens_consumption = (@mass_consumption/@volume_consumption)*1000;
--					set @volume15_consumption = (SELECT  SUM([ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2, volume)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop and volume>0 GROUP BY fuel_type);
--					set @dens15_consumption =  (SELECT  AVG([ASU_AZSlogs].[dbo].[GET_DENS15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop and volume>0 GROUP BY fuel_type);
--					set @mass15_consumption = @volume15_consumption*@dens15_consumption*0.001;
--				end else begin
--					set @dens_consumption = 0;
--					set @dens15_consumption = 0;
--					set @volume15_consumption = 0;
--					set @mass15_consumption = 0;
--				end;
				
				
--				-->
--				insert into [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[Daily_Report_AZS]
--				           ([type]
--           ,[date_start]
--           ,[date_stop]
--           ,[volume_start]
--           ,[mass_start]
--           ,[dens_start]
--           ,[temp_start]
--           ,[volume15_start]
--           ,[mass15_start]
--           ,[dens15_start]
--           ,[volume_coming]
--           ,[mass_coming]
--           ,[dens_coming]
--           ,[temp_coming]
--           ,[volume15_coming]
--           ,[mass15_coming]
--           ,[dens15_coming]
--           ,[volume_consumption]
--           ,[mass_consumption]
--           ,[dens_consumption]
--           ,[temp_consumption]
--           ,[volume15_consumption]
--           ,[mass15_consumption]
--           ,[dens15_consumption]
--           ,[volume_stop]
--           ,[mass_stop]
--           ,[dens_stop]
--           ,[temp_stop]
--           ,[volume15_stop]
--           ,[mass15_stop]
--           ,[dens15_stop]
--           ,[send])
--				select 
--				type = @type,
--				date_start = @start,
--				date_stop = @stop,
--				volume_start = @volume_start,
--				mass_start = @mass_start,
--				dens_start = @dens_start,
--				temp_start = @temp_start,
--				volume15_start = @volume15_start,
--				mass15_start = @mass15_start,
--				dens15_start = @dens15_start,

--				volume_coming = @volume_coming,
--				mass_coming = @mass_coming,
--				dens_coming = @dens_coming,
--				temp_coming = @temp_coming,
--				volume15_coming = @volume15_coming,
--				mass15_coming = @mass15_coming,
--				dens15_coming = @dens15_coming,

--				volume_consumption = @volume_consumption,
--				mass_consumption = @mass_consumption,
--				dens_consumption = @dens_consumption,
--				temp_consumption = @temp_consumption,
--				volume15_consumption = @volume15_consumption,
--				mass15_consumption = @mass15_consumption,
--				dens15_consumption = @dens15_consumption,				
			
--				volume_stop = @volume_stop,
--				mass_stop = @mass_stop,
--				dens_stop = @dens_stop,
--				temp_stop = @temp_stop,
--				volume15_stop = @volume15_stop,
--				mass15_stop = @mass15_stop,
--				dens15_stop= @dens15_stop,				
				
--				send = null
--				----------------------------------------------------------------------------------------------------
--				set @type = N'107000027';
--				-->
--				set @volume_start = (SELECT SUM(volume) FROM #REMAINS_start where type = @type GROUP BY type);
--				set @mass_start = (SELECT  SUM(mass) FROM #REMAINS_start where type = @type GROUP BY type);
--				set @dens_start = (@mass_start/@volume_start) * 1000;
--				set @temp_start = ([ASU_AZSlogs].[dbo].[GET_TANK_AVG_TEMP](@type, @start));
--				set @volume15_start = (SELECT SUM(volume15) FROM #REMAINS_start where type = @type GROUP BY type);
--				set @mass15_start = (SELECT SUM(mass15) FROM #REMAINS_start where type = @type GROUP BY type);
--				set @dens15_start = (SELECT AVG(dens15) FROM #REMAINS_start where type = @type GROUP BY type);
--				-->
--				set @volume_stop = (SELECT  SUM(volume) FROM #REMAINS_stop where type = @type GROUP BY type);
--				set @mass_stop = (SELECT  SUM(mass) FROM #REMAINS_stop where type = @type GROUP BY type);
--				set @dens_stop = (@mass_stop/@volume_stop)*1000;
--				set @temp_stop = [ASU_AZSlogs].[dbo].[GET_TANK_AVG_TEMP](@type, @stop);
--				set @volume15_stop = (SELECT SUM(volume15) FROM #REMAINS_stop where type = @type GROUP BY type);
--				set @mass15_stop = (SELECT SUM(mass15) FROM #REMAINS_stop where type = @type GROUP BY type);
--				set @dens15_stop= (SELECT  AVG(dens15) FROM #REMAINS_stop where type = @type GROUP BY type);	
--				-->
--				set @mass_coming = (SELECT SUM(stop_mass - start_mass) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel);
--				if (@mass_coming is null) set @mass_coming = 0;
--				set @volume_coming = (SELECT SUM(stop_volume - start_volume)*10 FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel);
--				if (@volume_coming is null) set @volume_coming = 0;				
--				set @temp_coming = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @start and start_datetime<=@stop GROUP BY fuel);
--				if (@temp_coming is null) set @temp_coming = 0;					
--				if (@volume_coming <> 0 and @volume_coming is not null) begin 
--					set @dens_coming = (@mass_coming/@volume_coming) * 1000;
--					set @dens15_coming = [ASU_AZSlogs].[dbo].[GET_DENS15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming);
--					set @volume15_coming = [ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming, @volume_coming);
--					set @mass15_coming = @volume15_coming*@dens15_coming*0.001;
--				end else begin
--					set @dens_coming = 0;
--					set @dens15_coming = 0;
--					set @volume15_coming = 0;
--					set @mass15_coming = 0;
--				end;
--				-->
--				set @volume_consumption = (SELECT  SUM(volume) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
--				if (@volume_consumption is null) set @volume_consumption = 0;
--				set @mass_consumption =(SELECT SUM(mass) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);
--				if (@mass_consumption is null) set @mass_consumption = 0;				
--				set @temp_consumption = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop GROUP BY fuel_type);;
--				if (@temp_consumption is null) set @temp_consumption = 0;					
--				if (@volume_consumption <> 0 and @volume_consumption is not null) begin 
--					set @dens_consumption = (@mass_consumption/@volume_consumption)*1000;
--					set @volume15_consumption = (SELECT  SUM([ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2, volume)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop and volume>0 GROUP BY fuel_type);
--					set @dens15_consumption =  (SELECT  AVG([ASU_AZSlogs].[dbo].[GET_DENS15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @start and stop_datetime<=@stop and volume>0 GROUP BY fuel_type);
--					set @mass15_consumption = @volume15_consumption*@dens15_consumption*0.001;
--				end else begin
--					set @dens_consumption = 0;
--					set @dens15_consumption = 0;
--					set @volume15_consumption = 0;
--					set @mass15_consumption = 0;
--				end;
				
				
--				-->
--				insert into [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[Daily_Report_AZS]
--				           ([type]
--           ,[date_start]
--           ,[date_stop]
--           ,[volume_start]
--           ,[mass_start]
--           ,[dens_start]
--           ,[temp_start]
--           ,[volume15_start]
--           ,[mass15_start]
--           ,[dens15_start]
--           ,[volume_coming]
--           ,[mass_coming]
--           ,[dens_coming]
--           ,[temp_coming]
--           ,[volume15_coming]
--           ,[mass15_coming]
--           ,[dens15_coming]
--           ,[volume_consumption]
--           ,[mass_consumption]
--           ,[dens_consumption]
--           ,[temp_consumption]
--           ,[volume15_consumption]
--           ,[mass15_consumption]
--           ,[dens15_consumption]
--           ,[volume_stop]
--           ,[mass_stop]
--           ,[dens_stop]
--           ,[temp_stop]
--           ,[volume15_stop]
--           ,[mass15_stop]
--           ,[dens15_stop]
--           ,[send])
--				select 
--				type = @type,
--				date_start = @start,
--				date_stop = @stop,
--				volume_start = @volume_start,
--				mass_start = @mass_start,
--				dens_start = @dens_start,
--				temp_start = @temp_start,
--				volume15_start = @volume15_start,
--				mass15_start = @mass15_start,
--				dens15_start = @dens15_start,

--				volume_coming = @volume_coming,
--				mass_coming = @mass_coming,
--				dens_coming = @dens_coming,
--				temp_coming = @temp_coming,
--				volume15_coming = @volume15_coming,
--				mass15_coming = @mass15_coming,
--				dens15_coming = @dens15_coming,

--				volume_consumption = @volume_consumption,
--				mass_consumption = @mass_consumption,
--				dens_consumption = @dens_consumption,
--				temp_consumption = @temp_consumption,
--				volume15_consumption = @volume15_consumption,
--				mass15_consumption = @mass15_consumption,
--				dens15_consumption = @dens15_consumption,				
			
--				volume_stop = @volume_stop,
--				mass_stop = @mass_stop,
--				dens_stop = @dens_stop,
--				temp_stop = @temp_stop,
--				volume15_stop = @volume15_stop,
--				mass15_stop = @mass15_stop,
--				dens15_stop= @dens15_stop,				
				
--				send = null
--				----------------------------------------------------------------------------------------------------
--				set @row = @row+1;
--		--** КОНЕЦ ВЫБОРКИ СУТОЧНОГО РАПОРТА *********************************
--		set @start = DATEADD(DAY,+1,@start);
--    END;
--	return @row;
--end;

end




GO
