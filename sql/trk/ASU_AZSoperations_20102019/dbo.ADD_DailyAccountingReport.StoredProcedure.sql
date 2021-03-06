USE [ASU_AZSoperations]
GO
/****** Object:  StoredProcedure [dbo].[ADD_DailyAccountingReport]    Script Date: 20.10.2019 16:17:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO





-- =============================================

-- =============================================
CREATE PROCEDURE [dbo].[ADD_DailyAccountingReport]
AS
begin

declare @start_report datetime
declare @stop_report datetime
declare @date_start datetime
declare @date_stop datetime
--> Выполним расчет и перенос по каждой емкости
--> Остатки
EXEC [ASU_AZSoperations].[dbo].[ADD_RemainsTanks]
--> Поступления
EXEC [ASU_AZSoperations].[dbo].[ADD_ReceivingTanks]
--> Выдачи
EXEC [ASU_AZSoperations].[dbo].[ADD_DeliveryTanks]

-- Проверим наличие таблицы [dbo].[Daily_Accounting_Report] если нет создадим
if OBJECT_ID(N'[ASU_AZSoperations].[dbo].[Daily_Accounting_Report]',N'U') is null
begin
CREATE TABLE [dbo].[Daily_Accounting_Report](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[type] [int] NULL,
	[ukt_zed] [nvarchar](10) NULL,
	[fuel_name] [nvarchar](30) NULL,
	[date_start] [datetime] NULL,
	[date_stop] [datetime] NULL,
	[volume_start] [float] NULL,
	[mass_start] [float] NULL,
	[dens_start] [float] NULL,
	[temp_start] [float] NULL,
	[volume15_start] [float] NULL,
	[mass15_start] [float] NULL,
	[dens15_start] [float] NULL,
	[volume_received] [int] NULL,
	[mass_received] [float] NULL,
	[dens_received] [float] NULL,
	[temp_received] [float] NULL,
	[volume15_received] [float] NULL,
	[mass15_received] [float] NULL,
	[dens15_received] [float] NULL,
	[volume_delivery] [int] NULL,
	[mass_delivery] [float] NULL,
	[dens_delivery] [float] NULL,
	[temp_delivery] [float] NULL,
	[volume15_delivery] [float] NULL,
	[mass15_delivery] [float] NULL,
	[dens15_delivery] [float] NULL,
	[volume_stop] [float] NULL,
	[mass_stop] [float] NULL,
	[dens_stop] [float] NULL,
	[temp_stop] [float] NULL,
	[volume15_stop] [float] NULL,
	[mass15_stop] [float] NULL,
	[dens15_stop] [float] NULL,
	[permissible_volume15_error] [float] NULL,
	[permissible_mass15_error] [float] NULL
 CONSTRAINT [PK_Daily_Accounting_Report] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

end
-- Получим время начала запроса и конца
set @start_report = (select top(1) [date_start] from [ASU_AZSoperations].[dbo].[Daily_Accounting_Report] order by [date_start] desc)
Set @stop_report = CONVERT(DATETIME, CONVERT(char(11), getdate() ,20) + '00:00:00', 102)
-- Проверим в таблице есть данные
if (@start_report is null) begin 
	-- данных нет начнем с начала месяца
	--set @start_report = CONVERT(DATETIME, CONVERT(char(8), getdate(),20) + '01 00:00:00', 102)
	set @start_report = (SELECT top(1) [dt] FROM [ASU_AZSoperations].[dbo].[RemainsTanks] order by [dt])
	end else begin
	set @start_report = DATEADD(DAY,+1,@start_report)
	end;
	--select @start_report, @stop_report;
 --Проверим диапазон запроса
if (@start_report<@stop_report)
begin
 --select @start_report, @stop_report;
 set @date_start = @start_report;
 declare @row int
 set @row =0;
 WHILE @date_start < @stop_report
    BEGIN
		--** НАЧАЛО ВЫБОРКИ СУТОЧНОГО РАПОРТА ********************************
		-->
			--print(@date_start);
			INSERT INTO [ASU_AZSoperations].[dbo].[Daily_Accounting_Report]
			SELECT
			  [type]
			  	,[ukt_zed]
				,[fuel_name]
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
			  ,[permissible_volume15_error]
			  ,[permissible_mass15_error] 
		  from get_tanks_value_daily_accounting_report(@date_start)
				set @row = @row+1;
		--** КОНЕЦ ВЫБОРКИ СУТОЧНОГО РАПОРТА *********************************
		set @date_start = DATEADD(DAY,+1,@date_start);
    END;
	return @row;
end;

end

GO
