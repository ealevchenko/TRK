USE [ASU_AZSlogs]
GO

/****** Object:  StoredProcedure [dbo].[GET_REMAINS_OF_DATE]    Script Date: 20.05.2019 23:42:12 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


-- =============================================

-- =============================================
CREATE PROCEDURE [dbo].[GET_REMAINS_OF_DATE]
	@date sysname
AS
begin
DECLARE @SQLString nvarchar(max);
DECLARE @ParmDefinition nvarchar(max);

		set @SQLString = 
		[dbo].[GET_REMAINS_TANK](N'BT2', N'107000022', N'B2', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'BT3', N'107000022', N'B3', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'BT9', N'107000022', N'B9', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'BT11', N'107000022', N'B11', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'BT16', N'107000022', N'B16', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'BT17', N'107000023', N'B17', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'BT18', N'107000023', N'B18', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'BT19', N'107000023', N'B19', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'BT20', N'107000023', N'B20', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT01', N'107000024', N'01', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT02', N'107000024', N'02', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT03', N'107000024', N'03', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT04', N'107000024', N'04', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT05', N'107000024', N'05', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT06', N'107000024', N'06', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT07', N'107000024', N'07', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT08', N'107000024', N'08', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT09', N'107000024', N'09', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT10', N'107000024', N'10', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT11', N'107000024', N'11', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT12', N'107000024', N'12', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT13', N'107000024', N'13', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT14', N'107000024', N'14', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT15', N'107000024', N'15', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT16', N'107000024', N'16', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT17', N'107000024', N'17', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT18', N'107000024', N'18', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT19', N'107000024', N'19', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT20', N'107000024', N'20', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT21', N'107000024', N'21', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT22', N'107000024', N'22', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT23', N'107000024', N'23', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT24', N'107000024', N'24', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT25', N'107000024', N'25', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT26', N'107000024', N'26', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT27', N'107000024', N'27', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT28', N'107000024', N'28', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT29', N'107000024', N'29', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT30', N'107000024', N'30', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT31', N'107000024', N'31', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT32', N'107000024', N'32', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT33', N'107000027', N'33', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT38', N'107000027', N'38', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'DT39', N'107000027', N'39', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'BT13', N'0', N'B13', @date) + 
		'union select [type] = ''107000022'', [tank] = ''Трубопровод'', level= null, volume=4577, dens=735.1842, mass= 3364.938' +
		'union select [type] = ''107000023'', [tank] = ''Трубопровод'', level= null, volume=3904, dens=747.8812, mass= 2919.728' +
		'union select [type] = ''107000024'', [tank] = ''Трубопровод'', level= null, volume=6771, dens=829.4655, mass= 5616.311' +
		'union select [type] = ''107000027'', [tank] = ''Трубопровод'', level= null, volume=2674, dens=795.0348, mass= 2125.923' 

EXECUTE sp_executesql
		@SQLString
		,@ParmDefinition
end





GO


