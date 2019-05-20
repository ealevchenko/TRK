USE [ASU_AZSlogs]
GO

/****** Object:  UserDefinedFunction [dbo].[GET_REMAINS_TANK]    Script Date: 20.05.2019 23:40:36 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO




--B11


CREATE FUNCTION [dbo].[GET_REMAINS_TANK](@table sysname, @type sysname, @tank sysname, @start sysname) 
	RETURNS nvarchar(max)
	AS
	BEGIN 
	
DECLARE @SQLString nvarchar(max);

set @SQLString = N'
select 
[type] = '+@type+',
[tank] = N'''+@tank+''',
[level] = (SELECT top (1) OWN_tank'+@tank+'_level_VALUE FROM dbo.'+@table+' where OWN_tank'+@tank+'_mass_TIMESTAMP <= CONVERT(datetime,'''+@start+''',120) order by OWN_tank'+@tank+'_mass_TIMESTAMP desc),
[volume] = (SELECT top (1) OWN_tank'+@tank+'_volume_VALUE FROM dbo.'+@table+' where OWN_tank'+@tank+'_mass_TIMESTAMP <= CONVERT(datetime,'''+@start+''',120) order by OWN_tank'+@tank+'_mass_TIMESTAMP desc),
[dens] = (SELECT top (1) OWN_tank'+@tank+'_dens_VALUE FROM dbo.'+@table+' where OWN_tank'+@tank+'_mass_TIMESTAMP <= CONVERT(datetime,'''+@start+''',120) order by OWN_tank'+@tank+'_mass_TIMESTAMP desc),
[mass] = (SELECT top (1) OWN_tank'+@tank+'_mass_VALUE FROM dbo.'+@table+' where OWN_tank'+@tank+'_mass_TIMESTAMP <= CONVERT(datetime,'''+@start+''',120) order by OWN_tank'+@tank+'_mass_TIMESTAMP desc)
'
	RETURN @SQLString
	END




GO


