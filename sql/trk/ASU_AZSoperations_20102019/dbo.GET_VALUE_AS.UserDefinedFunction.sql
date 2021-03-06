USE [ASU_AZSoperations]
GO
/****** Object:  UserDefinedFunction [dbo].[GET_VALUE_AS]    Script Date: 20.10.2019 16:17:39 ******/
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
  [start_valume] = (SELECT top (1) [stop_counter] FROM  [dbo].[FuelSale] where [trk_num] ='+@trk+' and [stop_datetime] <= CONVERT(datetime,'''+@start+''',120) order by [stop_datetime] desc),
  [stop_valume] = (SELECT top (1) [stop_counter] FROM [dbo].[FuelSale] where [trk_num] ='+@trk+' and [stop_datetime] <= CONVERT(datetime,'''+@stop+''',120) order by [stop_datetime] desc)'
RETURN @SQLString
	END



GO
