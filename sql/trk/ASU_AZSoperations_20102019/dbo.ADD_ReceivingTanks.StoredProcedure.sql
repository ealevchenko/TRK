USE [ASU_AZSoperations]
GO
/****** Object:  StoredProcedure [dbo].[ADD_ReceivingTanks]    Script Date: 20.10.2019 16:17:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO







-- =============================================

-- =============================================
CREATE PROCEDURE [dbo].[ADD_ReceivingTanks]
AS
begin

declare @start_report datetime
declare @stop_report datetime
declare @date_start datetime
declare @date_stop datetime
-- Проверим наличие таблицы [dbo].[ReceivingTanks] если нет создадим
if OBJECT_ID(N'[ASU_AZSoperations].[dbo].[ReceivingTanks]',N'U') is null
begin
CREATE TABLE [dbo].[ReceivingTanks](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[dt] [datetime] NULL,
	[id_table] [int] NOT NULL,
	[id_receiving_fuel] [int] NOT NULL,
	[num] [nvarchar](5) NOT NULL,
	[fuel] [int] NOT NULL,
	[start_datetime] [datetime] NOT NULL,
	[start_level] [float] NOT NULL,
	[start_volume] [float] NULL,
	[start_density] [float] NOT NULL,
	[start_density_avg] [float] NULL,
	[start_mass] [float] NOT NULL,
	[start_temp] [float] NOT NULL,
	[start_water_level] [float] NOT NULL,
	[stop_datetime] [datetime] NULL,
	[stop_level] [float] NULL,
	[stop_volume] [float] NULL,
	[stop_density] [float] NULL,
	[stop_density_avg] [float] NULL,
	[stop_mass] [float] NULL,
	[stop_temp] [float] NULL,
	[stop_water_level] [float] NULL,
	[volume_received] [float] NULL,
	[dens_received] [float] NULL,
	[mass_received] [float] NULL,
	[temp_received] [float] NULL,
	[relation] [float] NULL,
	[ratio_vd] [float] NULL,
	[ratio_tv] [float] NULL,
	[dens15] [float] NULL,
	[volume15] [float] NULL,
	[mass15] [float] NULL,
 CONSTRAINT [PK_ReceivingTanks] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
end;
-- Получим время начала запроса и конца
set @start_report = (select top(1) [dt] from [ASU_AZSoperations].[dbo].[ReceivingTanks] order by [dt] desc)
Set @stop_report = CONVERT(DATETIME, CONVERT(char(11), getdate() ,20) + '00:00:00', 102)
--select @start_report, @stop_report;
-- Проверим в таблице есть данные
if (@start_report is null) begin 
	-- данных нет начнем с начала месяца
	--set @start_report = CONVERT(DATETIME, CONVERT(char(8), getdate(),20) + '01 00:00:00', 102)
	set @start_report = CONVERT(datetime, '2019-06-01 00:00:00', 102)
	end else begin
	set @start_report = DATEADD(DAY,+1,@start_report)
	end;
-- Проверим диапазон запроса
--select @start_report, @stop_report;
if (@start_report<@stop_report)
begin
 
 set @date_start = @start_report;
 declare @row int
 set @row =0;
 WHILE @date_start < @stop_report
    BEGIN
		
		INSERT INTO [ASU_AZSoperations].[dbo].[ReceivingTanks]
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
		select @date_start
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
           ,[mass15] from get_tanks_value_receiving_calc15(@date_start)
		set @date_start = DATEADD(DAY,+1,@date_start);
		set @row = @row+1;
    END;
	return @row;
end;

end
GO
