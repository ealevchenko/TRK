USE [ASU_AZSoperations]
GO

/****** Object:  UserDefinedFunction [dbo].[GET_VALUE_AS]    Script Date: 09.08.2020 19:31:51 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO






CREATE FUNCTION [dbo].[GET_VALUE_AS](@as sysname, @trk sysname, @type sysname, @start sysname, @stop sysname) 
	RETURNS nvarchar(max)
	AS
	BEGIN 
	
DECLARE @SQLString nvarchar(max);

set @SQLString = N'
select 
[type] = '+@type+',
[num] = N'''+@as+''',
  [start_valume] = (CASE 
					WHEN ((SELECT top(1) [start_counter] FROM  [dbo].[FuelSale] where [trk_num] ='+@trk+' and [start_datetime] >= CONVERT(datetime,'''+@start+''',120) order by [start_datetime]) is not null)
					THEN (SELECT top(1) [start_counter] FROM  [dbo].[FuelSale] where [trk_num] ='+@trk+' and [start_datetime] >= CONVERT(datetime,'''+@start+''',120) order by [start_datetime]) 
					else (SELECT  top(1) [stop_counter] FROM  [dbo].[FuelSale] where [trk_num] ='+@trk+' and [stop_datetime] <= CONVERT(datetime,'''+@start+''',120) order by [stop_datetime] desc) 
					end),
  [stop_valume] = (SELECT top (1) [stop_counter] FROM [dbo].[FuelSale] where [trk_num] ='+@trk+' and [stop_datetime] <= CONVERT(datetime,'''+@stop+''',120) order by [stop_datetime] desc)'
RETURN @SQLString
	END



GO