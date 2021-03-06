USE [ASU_AZSoperations]
GO
/****** Object:  StoredProcedure [dbo].[ADD_RemainsTanks]    Script Date: 20.10.2019 16:17:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO






-- =============================================

-- =============================================
CREATE PROCEDURE [dbo].[ADD_RemainsTanks]
AS
begin

declare @start_report datetime
declare @stop_report datetime
declare @date_start datetime
declare @date_stop datetime
-- Проверим наличие таблицы [dbo].[RemainsTanks] если нет создадим
if OBJECT_ID(N'[ASU_AZSoperations].[dbo].[RemainsTanks]',N'U') is null
begin
CREATE TABLE [dbo].[RemainsTanks](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[dt] [datetime] NULL,
	[dt_actual] [datetime] NULL,
	[fuel_type] [int] NULL,
	[tank] [nvarchar](11) NULL,
	[level] [float] NULL,
	[volume] [float] NULL,
	[dens] [float] NULL,
	[dens_avg] [float] NULL,
	[mass] [float] NULL,
	[temp] [float] NULL,
	[relation] [float] NULL,
	[ratio_vd] [float] NULL,
	[ratio_tv] [float] NULL,
	[dens15] [float] NULL,
	[volume15] [float] NULL,
	[mass15] [float] NULL,
 CONSTRAINT [PK_RemainsTanks] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
end;
-- Получим время начала запроса и конца
set @start_report = (select top(1) [dt] from [ASU_AZSoperations].[dbo].[RemainsTanks] order by [dt] desc)
Set @stop_report = CONVERT(DATETIME, CONVERT(char(11), getdate() ,20) + '00:00:00', 102)
--select @start_report, @stop_report;
-- Проверим в таблице есть данные
if (@start_report is null) begin 
	-- данных нет начнем с начала месяца
	--set @start_report = CONVERT(DATETIME, CONVERT(char(8), getdate(),20) + '01 00:00:00', 102)
	--set @start_report = CONVERT(datetime, '2019-07-01 00:00:00', 102)
	set @start_report = CONVERT(DATETIME, CONVERT(char(11), DATEADD(MONTH,-3,GETDATE()) ,20) + '00:00:00', 102)
	end else begin
	set @start_report = DATEADD(DAY,+1,@start_report)
	end;
-- Проверим диапазон запроса
--select @start_report, @stop_report;
if (@start_report<=@stop_report)
begin
 
 set @date_start = @start_report;
 declare @row int
 set @row =0;
 WHILE @date_start <= @stop_report
    BEGIN
		
		INSERT INTO [ASU_AZSoperations].[dbo].[RemainsTanks]
           (
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
           ,[mass15])
		select @date_start
			,[dt]
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
			,[mass15] from get_tanks_value_remains_calc15(@date_start)
		set @date_start = DATEADD(DAY,+1,@date_start);
		set @row = @row+1;
    END;
	return @row;
end;

end
GO
