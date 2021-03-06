USE [ASU_AZSlogs]
GO
/****** Object:  UserDefinedFunction [dbo].[GET_MASS_TANK]    Script Date: 20.10.2019 16:20:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--B11


CREATE FUNCTION [dbo].[GET_MASS_TANK](@tank_num sysname, @table sysname, @type sysname, @tank sysname, @start sysname, @stop sysname) 
	RETURNS nvarchar(max)
	AS
	BEGIN 
	
DECLARE @SQLString nvarchar(max);

set @SQLString = N'
select 
[type] = '+@type+',
[tank] = N'''+@tank_num+''',
[mass_start] = (SELECT top (1) OWN_tank'+@tank+'_mass_VALUE FROM dbo.'+@table+' where OWN_tank'+@tank+'_mass_TIMESTAMP <= CONVERT(datetime,'''+@start+''',120)  order by OWN_tank'+@tank+'_mass_TIMESTAMP desc),
[mass_stop] = (SELECT top (1) OWN_tank'+@tank+'_mass_VALUE FROM dbo.'+@table+' where OWN_tank'+@tank+'_mass_TIMESTAMP <= CONVERT(datetime,'''+@stop+''',120)  order by OWN_tank'+@tank+'_mass_TIMESTAMP desc),
[volume_start] = (SELECT top (1) OWN_tank'+@tank+'_volume_VALUE FROM dbo.'+@table+' where OWN_tank'+@tank+'_mass_TIMESTAMP <= CONVERT(datetime,'''+@start+''',120) order by OWN_tank'+@tank+'_mass_TIMESTAMP desc),
[volume_stop] = (SELECT top (1) OWN_tank'+@tank+'_volume_VALUE FROM dbo.'+@table+' where OWN_tank'+@tank+'_mass_TIMESTAMP <= CONVERT(datetime,'''+@stop+''',120) order by OWN_tank'+@tank+'_mass_TIMESTAMP desc)
'

--set @SQLString = N'
--select 
--[type] = '+@type+',
--[tank] = N'''+@tank_num+''',
--[mass_start] = (SELECT top (1) OWN_tank'+@tank+'_mass_VALUE FROM dbo.'+@table+' where OWN_tank'+@tank+'_mass_TIMESTAMP >= CONVERT(datetime,'''+@start+''',120) and OWN_tank'+@tank+'_mass_TIMESTAMP <= CONVERT(datetime,'''+@stop+''',120) order by OWN_tank'+@tank+'_mass_TIMESTAMP),
--[mass_stop] = (SELECT top (1) OWN_tank'+@tank+'_mass_VALUE FROM dbo.'+@table+' where OWN_tank'+@tank+'_mass_TIMESTAMP >= CONVERT(datetime,'''+@start+''',120) and OWN_tank'+@tank+'_mass_TIMESTAMP <= CONVERT(datetime,'''+@stop+''',120) order by OWN_tank'+@tank+'_mass_TIMESTAMP desc),
--[volume_start] = (SELECT top (1) OWN_tank'+@tank+'_volume_VALUE FROM dbo.'+@table+' where OWN_tank'+@tank+'_mass_TIMESTAMP >= CONVERT(datetime,'''+@start+''',120) and OWN_tank'+@tank+'_mass_TIMESTAMP <= CONVERT(datetime,'''+@stop+''',120) order by OWN_tank'+@tank+'_mass_TIMESTAMP),
--[volume_stop] = (SELECT top (1) OWN_tank'+@tank+'_volume_VALUE FROM dbo.'+@table+' where OWN_tank'+@tank+'_mass_TIMESTAMP >= CONVERT(datetime,'''+@start+''',120) and OWN_tank'+@tank+'_mass_TIMESTAMP <= CONVERT(datetime,'''+@stop+''',120) order by OWN_tank'+@tank+'_mass_TIMESTAMP desc)
--'
	RETURN @SQLString
	END


GO
