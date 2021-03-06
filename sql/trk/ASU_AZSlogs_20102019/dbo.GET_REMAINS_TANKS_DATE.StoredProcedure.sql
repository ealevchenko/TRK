USE [ASU_AZSlogs]
GO
/****** Object:  StoredProcedure [dbo].[GET_REMAINS_TANKS_DATE]    Script Date: 20.10.2019 16:20:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO




-- =============================================

-- =============================================
CREATE PROCEDURE [dbo].[GET_REMAINS_TANKS_DATE]
	@date sysname
AS
begin
DECLARE @SQLString nvarchar(max);
DECLARE @ParmDefinition nvarchar(max);
		set @SQLString = N''+
		[dbo].[GET_REMAINS_TANK](N'B02', N'BT2', N'107000022', N'B2', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'B03', N'BT3', N'107000022', N'B3', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'B09', N'BT9', N'107000022', N'B9', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'B11', N'BT11', N'107000022', N'B11', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'B16', N'BT16', N'107000022', N'B16', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'B17', N'BT17', N'107000023', N'B17', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'B18', N'BT18', N'107000023', N'B18', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'B19', N'BT19', N'107000023', N'B19', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'B20', N'BT20', N'107000023', N'B20', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'01', N'DT01', N'107000024', N'01', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'02', N'DT02', N'107000024', N'02', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'03', N'DT03', N'107000024', N'03', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'04', N'DT04', N'107000024', N'04', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'05', N'DT05', N'107000024', N'05', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'06', N'DT06', N'107000024', N'06', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'07', N'DT07', N'107000024', N'07', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'08', N'DT08', N'107000024', N'08', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'09', N'DT09', N'107000024', N'09', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'10', N'DT10', N'107000024', N'10', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'11', N'DT11', N'107000024', N'11', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'12', N'DT12', N'107000024', N'12', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'13', N'DT13', N'107000024', N'13', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'14', N'DT14', N'107000024', N'14', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'15', N'DT15', N'107000024', N'15', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'16', N'DT16', N'107000024', N'16', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'17', N'DT17', N'107000024', N'17', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'18', N'DT18', N'107000024', N'18', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'19', N'DT19', N'107000024', N'19', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'20', N'DT20', N'107000024', N'20', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'21', N'DT21', N'107000024', N'21', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'22', N'DT22', N'107000024', N'22', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'23', N'DT23', N'107000024', N'23', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'24', N'DT24', N'107000024', N'24', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'25', N'DT25', N'107000024', N'25', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'26', N'DT26', N'107000024', N'26', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'27', N'DT27', N'107000024', N'27', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'28', N'DT28', N'107000024', N'28', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'29', N'DT29', N'107000024', N'29', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'30', N'DT30', N'107000024', N'30', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'31', N'DT31', N'107000024', N'31', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'32', N'DT32', N'107000024', N'32', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'33', N'DT33', N'107000027', N'33', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'38', N'DT38', N'107000027', N'38', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'39', N'DT39', N'107000027', N'39', @date) +
		'union' +
		[dbo].[GET_REMAINS_TANK](N'B13', N'BT13', N'0', N'B13', @date)
		--print @SQLString
EXECUTE sp_executesql
		@SQLString
		,@ParmDefinition
end




GO
