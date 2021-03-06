USE [ASU_AZSoperations]
GO
/****** Object:  StoredProcedure [dbo].[GET_VALUE_GUNS_OF_PERIOD]    Script Date: 20.10.2019 16:17:51 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================

-- =============================================
CREATE PROCEDURE [dbo].[GET_VALUE_GUNS_OF_PERIOD]
	@start sysname, 
	@stop sysname
AS
begin
DECLARE @SQLString nvarchar(max);
DECLARE @ParmDefinition nvarchar(max);

		set @SQLString = 
		[dbo].[GET_VALUE_GUN](N'ТРК1 П:1', N'1-1', N'107000024', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК1 П:2', N'1-2', N'107000024', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК2 П:3', N'2-1', N'107000024', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК2 П:4', N'2-2', N'107000024', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК3 П:5', N'3-1', N'107000024', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК3 П:6', N'3-2', N'107000024', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК4 П:7', N'4-1', N'107000024', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК4 П:8', N'4-2', N'107000024', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК5 П:9', N'5-1', N'107000022', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК5 П:10', N'5-2', N'107000022', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК6 П:11', N'6-1', N'107000022', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК6 П:12', N'6-2', N'107000022', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК7 П:13', N'7-1', N'107000022', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК7 П:14', N'7-2', N'107000022', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК7 П:15', N'7-3', N'107000023', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК7 П:16', N'7-4', N'107000023', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК7 П:17', N'7-5', N'107000022', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК7 П:18', N'7-6', N'107000022', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК7 П:19', N'7-7', N'107000023', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN] (N'ТРК7 П:20', N'7-8', N'107000023', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК8 П:21', N'8-1', N'107000023', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК8 П:22', N'8-2', N'107000023', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК8 П:23', N'8-3', N'107000022', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК8 П:24', N'8-4', N'107000022', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК8 П:25', N'8-5', N'107000023', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК8 П:26', N'8-6', N'107000023', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК8 П:27', N'8-7', N'107000022', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК8 П:28', N'8-8', N'107000022', @start, @stop) +
		'union' +
		[dbo].[GET_VALUE_GUN](N'ТРК9 П:29', N'9-1', N'107000024', @start, @stop) +
		'union' +
        [dbo].[GET_VALUE_AS] (N'АС-1', N'10', N'1', @start, @stop ) +
		'union' +
        [dbo].[GET_VALUE_AS] (N'АС-2', N'11', N'1', @start, @stop ) +
		'union' +
        [dbo].[GET_VALUE_AS] (N'АС-3', N'12', N'1', @start, @stop )

EXECUTE sp_executesql
		@SQLString
		,@ParmDefinition
end




GO
