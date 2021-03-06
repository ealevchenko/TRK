USE [ASU_AZSoperations]
GO
/****** Object:  StoredProcedure [dbo].[ADD_DeliveryTanks]    Script Date: 20.10.2019 16:17:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO








-- =============================================

-- =============================================
CREATE PROCEDURE [dbo].[ADD_DeliveryTanks]
AS
begin

declare @start_report datetime
declare @stop_report datetime
declare @date_start datetime
declare @date_stop datetime
-- Проверим наличие таблицы [dbo].[DeliveryTanks] если нет создадим
if OBJECT_ID(N'[ASU_AZSoperations].[dbo].[DeliveryTanks]',N'U') is null
begin
CREATE TABLE [dbo].[DeliveryTanks](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[dt] [datetime] NOT NULL,
	[id_table] [int] NOT NULL,
	[trk_num] [int] NOT NULL,
	[side] [bit] NOT NULL,
	[num] [int] NOT NULL,
	[name_trk] [nvarchar](20) NULL,
	[name_gas_station] [nvarchar](50) NULL,
	[serial_number_flowmeter] [nvarchar](10) NULL,
	[identification_number_flowmeter] [nvarchar](10) NULL,
	[fuel_type] [int] NOT NULL,
	[ukt_zed] [nvarchar](10) NULL,
	[fuel_name] [nvarchar](30) NULL,
	[tank_num] [nvarchar](200) NOT NULL,
	[dose] [float] NULL,
	[passage] [char](1) NOT NULL,
	[volume] [float] NULL,
	[mass] [float] NULL,
	[start_datetime] [datetime] NOT NULL,
	[start_volume] [float] NULL,
	[start_dens_avg] [float] NULL,
	[start_mass] [float] NULL,
	[start_temp] [float] NOT NULL,
	[start_counter] [int] NOT NULL,
	[stop_datetime] [datetime] NULL,
	[stop_volume] [float] NULL,
	[stop_dens_avg] [float] NULL,
	[stop_mass] [float] NULL,
	[stop_temp] [float] NULL,
	[stop_counter] [int] NULL,
	[dens_avg_delivery] [float] NULL,
	[volume_delivery] [float] NULL,
	[mass_delivery] [float] NULL,
	[temp_delivery] [float] NULL,
	[relation] [float] NULL,
	[ratio_vd] [float] NULL,
	[ratio_tv] [float] NULL,
	[dens15] [float] NULL,
	[volume15] [float] NULL,
	[mass15] [float] NULL
 CONSTRAINT [PK_DeliveryTanks] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

end;
-- Получим время начала запроса и конца
set @start_report = (select top(1) [dt] from [ASU_AZSoperations].[dbo].[DeliveryTanks] order by [dt] desc)
Set @stop_report = CONVERT(DATETIME, CONVERT(char(11), getdate() ,20) + '00:00:00', 102)
--select @start_report, @stop_report;
-- Проверим в таблице есть данные
if (@start_report is null) begin 
	-- данных нет начнем с начала месяца
	--set @start_report = CONVERT(DATETIME, CONVERT(char(8), getdate(),20) + '01 00:00:00', 102)
	--set @start_report = CONVERT(datetime, '2019-06-01 00:00:00', 102)
	set @start_report = CONVERT(DATETIME, CONVERT(char(11), DATEADD(MONTH,-3,GETDATE()) ,20) + '00:00:00', 102)
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
	 --print(@date_start)	
		INSERT INTO [ASU_AZSoperations].[dbo].[DeliveryTanks]
           ([dt]
			  ,[id_table]
      ,[trk_num]
      ,[side]
      ,[num]
      ,[name_trk]
      ,[name_gas_station]
      ,[serial_number_flowmeter]
      ,[identification_number_flowmeter]
      ,[fuel_type]
      ,[ukt_zed]
      ,[fuel_name]
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
		select @date_start
			  ,[id_table]
      ,[trk_num]
      ,[side]
      ,[num]
      ,[name_trk]
      ,[name_gas_station]
      ,[serial_number_flowmeter]
      ,[identification_number_flowmeter]
      ,[fuel_type]
      ,[ukt_zed]
      ,[fuel_name]
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
		   from get_tanks_value_delivery_calc15(@date_start)
		set @date_start = DATEADD(DAY,+1,@date_start);
		set @row = @row+1;
    END;
	return @row;
end;

end
GO
