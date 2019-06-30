USE [ASU_AZSlogs]
GO

/****** Object:  StoredProcedure [dbo].[GET_REMAINS_OF_DATE_15]    Script Date: 30.06.2019 16:45:11 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO




-- =============================================

-- =============================================
CREATE PROCEDURE [dbo].[GET_REMAINS_OF_DATE_15]
	@date sysname
AS
begin

declare @pipeline_volume_107000022 int
declare @pipeline_volume_107000023 int
declare @pipeline_volume_107000024 int
declare @pipeline_volume_107000027 int
set @pipeline_volume_107000022 = 4577;
set @pipeline_volume_107000023 = 3904;
set @pipeline_volume_107000024 = 6771;
set @pipeline_volume_107000027 = 2674;
declare @pipeline_mass_107000022 float
declare @pipeline_mass_107000023 float
declare @pipeline_mass_107000024 float
declare @pipeline_mass_107000027 float
set @pipeline_mass_107000022 = 3364.938;
set @pipeline_mass_107000023 = 2919.728;
set @pipeline_mass_107000024 = 5616.311;
set @pipeline_mass_107000027 = 2125.923;

DECLARE @SQLString nvarchar(max);
DECLARE @ParmDefinition nvarchar(max);

		set @SQLString = N''+
		[dbo].[GET_REMAINS_TANK15](N'BT2', N'107000022', N'B2', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'BT3', N'107000022', N'B3', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'BT9', N'107000022', N'B9', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'BT11', N'107000022', N'B11', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'BT16', N'107000022', N'B16', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'BT17', N'107000023', N'B17', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'BT18', N'107000023', N'B18', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'BT19', N'107000023', N'B19', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'BT20', N'107000023', N'B20', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT01', N'107000024', N'01', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT02', N'107000024', N'02', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT03', N'107000024', N'03', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT04', N'107000024', N'04', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT05', N'107000024', N'05', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT06', N'107000024', N'06', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT07', N'107000024', N'07', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT08', N'107000024', N'08', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT09', N'107000024', N'09', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT10', N'107000024', N'10', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT11', N'107000024', N'11', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT12', N'107000024', N'12', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT13', N'107000024', N'13', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT14', N'107000024', N'14', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT15', N'107000024', N'15', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT16', N'107000024', N'16', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT17', N'107000024', N'17', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT18', N'107000024', N'18', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT19', N'107000024', N'19', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT20', N'107000024', N'20', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT21', N'107000024', N'21', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT22', N'107000024', N'22', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT23', N'107000024', N'23', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT24', N'107000024', N'24', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT25', N'107000024', N'25', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT26', N'107000024', N'26', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT27', N'107000024', N'27', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT28', N'107000024', N'28', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT29', N'107000024', N'29', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT30', N'107000024', N'30', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT31', N'107000024', N'31', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT32', N'107000024', N'32', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT33', N'107000027', N'33', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT38', N'107000027', N'38', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'DT39', N'107000027', N'39', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK15](N'BT13', N'0', N'B13', @date) + 
		'union select [type] = ''107000022'', [tank] = N''Трубопровод'', level= null, volume='+CAST(@pipeline_volume_107000022 AS nvarchar(10))+', dens='+CAST([dbo].[GET_TANK_AVG_DENS](N'107000022', @date) AS nvarchar(20))+', mass= '+CAST(@pipeline_mass_107000022 AS nvarchar(10))+' , temp='+CAST([dbo].[GET_TANK_AVG_TEMP](N'107000022', @date) AS nvarchar(10))+', volume15 = '+CAST([ASU_AZSlogs].[dbo].[GET_VOLUME15](N'107000022',[dbo].[GET_TANK_AVG_DENS](N'107000022', @date),[dbo].[GET_TANK_AVG_TEMP](N'107000022', @date), @pipeline_volume_107000022) AS nvarchar(20))+ '  , dens15 = '+CAST([ASU_AZSlogs].[dbo].[GET_DENS15](N'107000022',[dbo].[GET_TANK_AVG_DENS](N'107000022', @date),[dbo].[GET_TANK_AVG_TEMP](N'107000022', @date)) AS nvarchar(20))+', mass15 ='+CAST([ASU_AZSlogs].[dbo].[GET_VOLUME15](N'107000022',[dbo].[GET_TANK_AVG_DENS](N'107000022', @date),[dbo].[GET_TANK_AVG_TEMP](N'107000022', @date), @pipeline_volume_107000022) * [ASU_AZSlogs].[dbo].[GET_DENS15](N'107000022',[dbo].[GET_TANK_AVG_DENS](N'107000022', @date),[dbo].[GET_TANK_AVG_TEMP](N'107000022', @date)) * 0.001 AS nvarchar(20))+' ' +
		'union select [type] = ''107000023'', [tank] = N''Трубопровод'', level= null, volume='+CAST(@pipeline_volume_107000023 AS nvarchar(10))+', dens='+CAST([dbo].[GET_TANK_AVG_DENS](N'107000023', @date) AS nvarchar(20))+', mass= '+CAST(@pipeline_mass_107000023 AS nvarchar(10))+' , temp='+CAST([dbo].[GET_TANK_AVG_TEMP](N'107000023', @date) AS nvarchar(10))+', volume15 = '+CAST([ASU_AZSlogs].[dbo].[GET_VOLUME15](N'107000023',[dbo].[GET_TANK_AVG_DENS](N'107000023', @date),[dbo].[GET_TANK_AVG_TEMP](N'107000023', @date), @pipeline_volume_107000023) AS nvarchar(20))+ '  , dens15 = '+CAST([ASU_AZSlogs].[dbo].[GET_DENS15](N'107000023',[dbo].[GET_TANK_AVG_DENS](N'107000023', @date),[dbo].[GET_TANK_AVG_TEMP](N'107000023', @date)) AS nvarchar(20))+', mass15 ='+CAST([ASU_AZSlogs].[dbo].[GET_VOLUME15](N'107000023',[dbo].[GET_TANK_AVG_DENS](N'107000023', @date),[dbo].[GET_TANK_AVG_TEMP](N'107000023', @date), @pipeline_volume_107000023) * [ASU_AZSlogs].[dbo].[GET_DENS15](N'107000023',[dbo].[GET_TANK_AVG_DENS](N'107000023', @date),[dbo].[GET_TANK_AVG_TEMP](N'107000023', @date)) * 0.001 AS nvarchar(20))+' ' +
		'union select [type] = ''107000024'', [tank] = N''Трубопровод'', level= null, volume='+CAST(@pipeline_volume_107000024 AS nvarchar(10))+', dens='+CAST([dbo].[GET_TANK_AVG_DENS](N'107000024', @date) AS nvarchar(20))+', mass= '+CAST(@pipeline_mass_107000024 AS nvarchar(10))+' , temp='+CAST([dbo].[GET_TANK_AVG_TEMP](N'107000024', @date) AS nvarchar(10))+', volume15 = '+CAST([ASU_AZSlogs].[dbo].[GET_VOLUME15](N'107000024',[dbo].[GET_TANK_AVG_DENS](N'107000024', @date),[dbo].[GET_TANK_AVG_TEMP](N'107000024', @date), @pipeline_volume_107000024) AS nvarchar(20))+ '  , dens15 = '+CAST([ASU_AZSlogs].[dbo].[GET_DENS15](N'107000024',[dbo].[GET_TANK_AVG_DENS](N'107000024', @date),[dbo].[GET_TANK_AVG_TEMP](N'107000024', @date)) AS nvarchar(20))+', mass15 ='+CAST([ASU_AZSlogs].[dbo].[GET_VOLUME15](N'107000024',[dbo].[GET_TANK_AVG_DENS](N'107000024', @date),[dbo].[GET_TANK_AVG_TEMP](N'107000024', @date), @pipeline_volume_107000024) * [ASU_AZSlogs].[dbo].[GET_DENS15](N'107000024',[dbo].[GET_TANK_AVG_DENS](N'107000024', @date),[dbo].[GET_TANK_AVG_TEMP](N'107000024', @date)) * 0.001 AS nvarchar(20))+' ' +
		'union select [type] = ''107000027'', [tank] = N''Трубопровод'', level= null, volume='+CAST(@pipeline_volume_107000027 AS nvarchar(10))+', dens='+CAST([dbo].[GET_TANK_AVG_DENS](N'107000027', @date) AS nvarchar(20))+', mass= '+CAST(@pipeline_mass_107000027 AS nvarchar(10))+' , temp='+CAST([dbo].[GET_TANK_AVG_TEMP](N'107000027', @date) AS nvarchar(10))+', volume15 = '+CAST([ASU_AZSlogs].[dbo].[GET_VOLUME15](N'107000027',[dbo].[GET_TANK_AVG_DENS](N'107000027', @date),[dbo].[GET_TANK_AVG_TEMP](N'107000027', @date), @pipeline_volume_107000027) AS nvarchar(20))+ '  , dens15 = '+CAST([ASU_AZSlogs].[dbo].[GET_DENS15](N'107000027',[dbo].[GET_TANK_AVG_DENS](N'107000027', @date),[dbo].[GET_TANK_AVG_TEMP](N'107000027', @date)) AS nvarchar(20))+', mass15 ='+CAST([ASU_AZSlogs].[dbo].[GET_VOLUME15](N'107000027',[dbo].[GET_TANK_AVG_DENS](N'107000027', @date),[dbo].[GET_TANK_AVG_TEMP](N'107000027', @date), @pipeline_volume_107000027) * [ASU_AZSlogs].[dbo].[GET_DENS15](N'107000027',[dbo].[GET_TANK_AVG_DENS](N'107000027', @date),[dbo].[GET_TANK_AVG_TEMP](N'107000027', @date)) * 0.001 AS nvarchar(20))+' ' 
		--print @SQLString
EXECUTE sp_executesql
		@SQLString
		,@ParmDefinition
end




GO


