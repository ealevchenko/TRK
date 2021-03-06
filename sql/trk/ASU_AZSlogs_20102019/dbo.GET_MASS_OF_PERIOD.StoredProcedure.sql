USE [ASU_AZSlogs]
GO
/****** Object:  StoredProcedure [dbo].[GET_MASS_OF_PERIOD]    Script Date: 20.10.2019 16:20:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================

-- =============================================
CREATE PROCEDURE [dbo].[GET_MASS_OF_PERIOD]
	@start sysname, 
	@stop sysname
AS
begin
DECLARE @SQLString nvarchar(max);
DECLARE @ParmDefinition nvarchar(max);

		set @SQLString = 
		[dbo].[GET_MASS_TANK](N'B02', N'BT2', N'107000022', N'B2', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'B03', N'BT3', N'107000022', N'B3', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'B09',N'BT9', N'107000022', N'B9', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'B11',N'BT11', N'107000022', N'B11', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'B16',N'BT16', N'107000022', N'B16', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'B17',N'BT17', N'107000023', N'B17', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'B18',N'BT18', N'107000023', N'B18', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'B19',N'BT19', N'107000023', N'B19', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'B20',N'BT20', N'107000023', N'B20', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'01', N'DT01', N'107000024', N'01', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'02',N'DT02', N'107000024', N'02', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'03',N'DT03', N'107000024', N'03', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'04',N'DT04', N'107000024', N'04', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'05',N'DT05', N'107000024', N'05', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'06',N'DT06', N'107000024', N'06', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'07',N'DT07', N'107000024', N'07', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'08',N'DT08', N'107000024', N'08', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'09',N'DT09', N'107000024', N'09', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'10',N'DT10', N'107000024', N'10', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'11',N'DT11', N'107000024', N'11', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'12',N'DT12', N'107000024', N'12', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'13', N'DT13', N'107000024', N'13', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'14',N'DT14', N'107000024', N'14', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'15',N'DT15', N'107000024', N'15', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'16',N'DT16', N'107000024', N'16', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'17',N'DT17', N'107000024', N'17', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK]( N'18',N'DT18', N'107000024', N'18', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'19',N'DT19', N'107000024', N'19', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'20', N'DT20', N'107000024', N'20', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'21',N'DT21', N'107000024', N'21', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'22',N'DT22', N'107000024', N'22', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'23',N'DT23', N'107000024', N'23', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'24',N'DT24', N'107000024', N'24', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'25',N'DT25', N'107000024', N'25', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'26',N'DT26', N'107000024', N'26', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'27',N'DT27', N'107000024', N'27', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'28',N'DT28', N'107000024', N'28', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'29',N'DT29', N'107000024', N'29', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'30',N'DT30', N'107000024', N'30', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'31',N'DT31', N'107000024', N'31', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'32',N'DT32', N'107000024', N'32', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'33',N'DT33', N'107000027', N'33', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'38',N'DT38', N'107000027', N'38', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'39',N'DT39', N'107000027', N'39', @start, @stop) +
		'union' +
		[dbo].[GET_MASS_TANK](N'B13',N'BT13', N'0', N'B13', @start, @stop)
EXECUTE sp_executesql
		@SQLString
		,@ParmDefinition
end


GO
