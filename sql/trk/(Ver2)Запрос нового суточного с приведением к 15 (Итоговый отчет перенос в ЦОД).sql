
declare @start_report datetime
declare @stop_report datetime
declare @date_start datetime
declare @date_stop datetime

--*********************************************************************************************************************************************
--> Переносим общие данные
--*********************************************************************************************************************************************
-- Получим время начала запроса и конца
set @start_report = (select top(1) [date_start] from [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Report_AZS] order by [date_start] desc)
Set @stop_report = CONVERT(DATETIME, CONVERT(char(11), getdate() ,20) + '00:00:00', 102)
-- Проверим в таблице есть данные
if (@start_report is null) begin 
	--> В ЦОДЕ нет данных берем дату первой строки текущей базы
		set @start_report = (SELECT top(1) [date_start] FROM [ASU_AZSoperations].[dbo].[Daily_Accounting_Report] order by [date_start])
	end else begin
		set @start_report = DATEADD(SECOND,+1,@start_report)
	end;

	--select @start_report, @stop_report

INSERT INTO [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Report_AZS]
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
           ,[volume_received]
           ,[mass_received]
           ,[dens_received]
           ,[temp_received]
           ,[volume15_received]
           ,[mass15_received]
           ,[dens15_received]
           ,[volume_delivery]
           ,[mass_delivery]
           ,[dens_delivery]
           ,[temp_delivery]
           ,[volume15_delivery]
           ,[mass15_delivery]
           ,[dens15_delivery]
           ,[volume_stop]
           ,[mass_stop]
           ,[dens_stop]
           ,[temp_stop]
           ,[volume15_stop]
           ,[mass15_stop]
           ,[dens15_stop]
           ,[permissible_error])
			SELECT
			  [type]
			  ,[date_start]
			  ,[date_stop]
			  ,[volume_start]
			  ,[mass_start]
			  ,[dens_start]
			  ,[temp_start]
			  ,[volume15_start]
			  ,[mass15_start]
			  ,[dens15_start]
			  ,[volume_received]
			  ,[mass_received]
			  ,[dens_received]
			  ,[temp_received]
			  ,[volume15_received]
			  ,[mass15_received]
			  ,[dens15_received]
			  ,[volume_delivery]
			  ,[mass_delivery]
			  ,[dens_delivery]
			  ,[temp_delivery]
			  ,[volume15_delivery]
			  ,[mass15_delivery]
			  ,[dens15_delivery]
			  ,[volume_stop]
			  ,[mass_stop]
			  ,[dens_stop]
			  ,[temp_stop]
			  ,[volume15_stop]
			  ,[mass15_stop]
			  ,[dens15_stop]
			  ,[permissible_error]
			  from [ASU_AZSoperations].[dbo].[Daily_Accounting_Report]
			  where [date_start] >= @start_report and [date_start] <=  @stop_report

--*********************************************************************************************************************************************
--> Переносим детальные данные
--*********************************************************************************************************************************************
-- Получим время начала запроса и конца
set @start_report = (select top(1) [dt_start] from [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Detali_Report_AZS] order by [dt_start] desc)
Set @stop_report = CONVERT(DATETIME, CONVERT(char(11), getdate() ,20) + '00:00:00', 102)
-- Проверим в таблице есть данные
if (@start_report is null) begin 
	--> В ЦОДЕ нет данных берем дату первой строки текущей базы
		set @start_report = (SELECT top(1) [dt_start] FROM [ASU_AZSoperations].[dbo].[Daily_Accounting_Detali_Report] order by [dt_start])
	end else begin
		set @start_report = DATEADD(SECOND,+1,@start_report)
	end;

	--select @start_report, @stop_report

INSERT INTO [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Detali_Report_AZS]
           ([dt_start]
           ,[dt_stop]
           ,[fuel_type]
           ,[tank]
           ,[dt_actual_remains_start]
           ,[level_remains_start]
           ,[volume_remains_start]
           ,[dens_remains_start]
           ,[dens_avg_remains_start]
           ,[mass_remains_start]
           ,[temp_remains_start]
           ,[relation_remains_start]
           ,[ratio_vd_remains_start]
           ,[ratio_tv_remains_start]
           ,[dens15_remains_start]
           ,[volume15_remains_start]
           ,[mass15_remains_start]
           ,[volume_received]
           ,[mass_received]
           ,[dens_received]
           ,[temp_received]
           ,[volume15_received]
           ,[mass15_received]
           ,[dens15_received]
           ,[count_tanks_delivery]
           ,[volume_delivery]
           ,[mass_delivery]
           ,[dens_delivery]
           ,[temp_delivery]
           ,[volume15_delivery]
           ,[mass15_delivery]
           ,[dens15_delivery]
           ,[dt_actual_remains_stop]
           ,[level_remains_stop]
           ,[volume_remains_stop]
           ,[dens_remains_stop]
           ,[dens_avg_remains_stop]
           ,[mass_remains_stop]
           ,[temp_remains_stop]
           ,[relation_remains_stop]
           ,[ratio_vd_remains_stop]
           ,[ratio_tv_remains_stop]
           ,[dens15_remains_stop]
           ,[volume15_remains_stop]
           ,[mass15_remains_stop]
           ,[permissible_error])
			SELECT
			  [dt_start]
           ,[dt_stop]
           ,[fuel_type]
           ,[tank]
           ,[dt_actual_remains_start]
           ,[level_remains_start]
           ,[volume_remains_start]
           ,[dens_remains_start]
           ,[dens_avg_remains_start]
           ,[mass_remains_start]
           ,[temp_remains_start]
           ,[relation_remains_start]
           ,[ratio_vd_remains_start]
           ,[ratio_tv_remains_start]
           ,[dens15_remains_start]
           ,[volume15_remains_start]
           ,[mass15_remains_start]
           ,[volume_received]
           ,[mass_received]
           ,[dens_received]
           ,[temp_received]
           ,[volume15_received]
           ,[mass15_received]
           ,[dens15_received]
           ,[count_tanks_delivery]
           ,[volume_delivery]
           ,[mass_delivery]
           ,[dens_delivery]
           ,[temp_delivery]
           ,[volume15_delivery]
           ,[mass15_delivery]
           ,[dens15_delivery]
           ,[dt_actual_remains_stop]
           ,[level_remains_stop]
           ,[volume_remains_stop]
           ,[dens_remains_stop]
           ,[dens_avg_remains_stop]
           ,[mass_remains_stop]
           ,[temp_remains_stop]
           ,[relation_remains_stop]
           ,[ratio_vd_remains_stop]
           ,[ratio_tv_remains_stop]
           ,[dens15_remains_stop]
           ,[volume15_remains_stop]
           ,[mass15_remains_stop]
           ,[permissible_error]
			  from [ASU_AZSoperations].[dbo].[Daily_Accounting_Detali_Report]
			  where [dt_start] >= @start_report and [dt_start] <=  @stop_report

--*********************************************************************************************************************************************
--> Переносим Остатки
--*********************************************************************************************************************************************
-- Получим время начала запроса и конца
set @start_report = (select top(1) [dt] from [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[RemainsTanks_AZS] order by [dt] desc)
Set @stop_report = CONVERT(DATETIME, CONVERT(char(11), getdate() ,20) + '00:00:00', 102)
-- Проверим в таблице есть данные
if (@start_report is null) begin 
	--> В ЦОДЕ нет данных берем дату первой строки текущей базы
		set @start_report = (SELECT top(1) [dt] FROM [ASU_AZSoperations].[dbo].[RemainsTanks] order by [dt])
	end else begin
		set @start_report = DATEADD(SECOND,+1,@start_report)
	end;

	--select @start_report, @stop_report
	INSERT INTO [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[RemainsTanks_AZS]
           ([dt]
           ,[dt_actual]
           ,[fuel_type]
           ,[tank]
           ,[level]
           ,[volume]
           ,[dens]
           ,[dens_avg]
           ,[mass]
           ,[temp]
           ,[relation]
           ,[ratio_vd]
           ,[ratio_tv]
           ,[dens15]
           ,[volume15]
           ,[mass15])
		   select 
			[dt]
           ,[dt_actual]
           ,[fuel_type]
           ,[tank]
           ,[level]
           ,[volume]
           ,[dens]
           ,[dens_avg]
           ,[mass]
           ,[temp]
           ,[relation]
           ,[ratio_vd]
           ,[ratio_tv]
           ,[dens15]
           ,[volume15]
           ,[mass15]
		   from [ASU_AZSoperations].[dbo].[RemainsTanks]
			where [dt] >= @start_report and [dt] <=  @stop_report 

--*********************************************************************************************************************************************
--> Переносим Прием
--*********************************************************************************************************************************************
-- Получим время начала запроса и конца
set @start_report = (select top(1) [dt] from [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[ReceivingTanks_AZS] order by [dt] desc)
Set @stop_report = CONVERT(DATETIME, CONVERT(char(11), getdate() ,20) + '00:00:00', 102)
-- Проверим в таблице есть данные
if (@start_report is null) begin 
	--> В ЦОДЕ нет данных берем дату первой строки текущей базы
		set @start_report = (SELECT top(1) [dt] FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] order by [dt])
	end else begin
		set @start_report = DATEADD(SECOND,+1,@start_report)
	end;
INSERT INTO [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[ReceivingTanks_AZS]
           ([dt]
           ,[id_table]
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
           ,[relation]
           ,[ratio_vd]
           ,[ratio_tv]
           ,[dens15]
           ,[volume15]
           ,[mass15])
		   SELECT
		   [dt]
           ,[id_table]
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
           ,[relation]
           ,[ratio_vd]
           ,[ratio_tv]
           ,[dens15]
           ,[volume15]
           ,[mass15]
		   from [ASU_AZSoperations].[dbo].[ReceivingTanks]
			where [dt] >= @start_report and [dt] <=  @stop_report 

--*********************************************************************************************************************************************
--> Переносим Выдачу
--*********************************************************************************************************************************************
-- Получим время начала запроса и конца
set @start_report = (select top(1) [dt] from [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[DeliveryTanks_AZS] order by [dt] desc)
Set @stop_report = CONVERT(DATETIME, CONVERT(char(11), getdate() ,20) + '00:00:00', 102)
-- Проверим в таблице есть данные
if (@start_report is null) begin 
	--> В ЦОДЕ нет данных берем дату первой строки текущей базы
		set @start_report = (SELECT top(1) [dt] FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] order by [dt])
	end else begin
		set @start_report = DATEADD(SECOND,+1,@start_report)
	end;
	INSERT INTO [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[DeliveryTanks_AZS]
           ([dt]
           ,[id_table]
           ,[trk_num]
           ,[side]
           ,[num]
           ,[fuel_type]
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
           ,[relation]
           ,[ratio_vd]
           ,[ratio_tv]
           ,[dens15]
           ,[volume15]
           ,[mass15])
		  SELECT
		  [dt]
           ,[id_table]
           ,[trk_num]
           ,[side]
           ,[num]
           ,[fuel_type]
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
           ,[relation]
           ,[ratio_vd]
           ,[ratio_tv]
           ,[dens15]
           ,[volume15]
           ,[mass15]
			from [ASU_AZSoperations].[dbo].[DeliveryTanks]
			where [dt] >= @start_report and [dt] <=  @stop_report 