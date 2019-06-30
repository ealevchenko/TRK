USE [ASU_AZSlogs]
GO

/****** Object:  UserDefinedFunction [dbo].[GET_REMAINS_TANK15]    Script Date: 30.06.2019 16:46:00 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO






--B11


CREATE FUNCTION [dbo].[GET_REMAINS_TANK15](@table sysname, @type sysname, @tank sysname, @start sysname) 
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
[mass] = (SELECT top (1) OWN_tank'+@tank+'_mass_VALUE FROM dbo.'+@table+' where OWN_tank'+@tank+'_mass_TIMESTAMP <= CONVERT(datetime,'''+@start+''',120) order by OWN_tank'+@tank+'_mass_TIMESTAMP desc),
[temp] = (SELECT top (1) CAST(OWN_tank'+@tank+'_temp_VALUE as float)/10 FROM dbo.'+@table+' where OWN_tank'+@tank+'_mass_TIMESTAMP <= CONVERT(datetime,'''+@start+''',120) order by OWN_tank'+@tank+'_mass_TIMESTAMP desc),
[volume15] = [ASU_AZSlogs].[dbo].[GET_VOLUME15]('+@type+', (SELECT top (1) OWN_tank'+@tank+'_dens_VALUE FROM dbo.'+@table+' where OWN_tank'+@tank+'_mass_TIMESTAMP <= CONVERT(datetime,'''+@start+''',120) order by OWN_tank'+@tank+'_mass_TIMESTAMP desc), (SELECT top (1) CAST(OWN_tank'+@tank+'_temp_VALUE as float)/10 FROM dbo.'+@table+' where OWN_tank'+@tank+'_mass_TIMESTAMP <= CONVERT(datetime,'''+@start+''',120) order by OWN_tank'+@tank+'_mass_TIMESTAMP desc), (SELECT top (1) OWN_tank'+@tank+'_volume_VALUE FROM dbo.'+@table+' where OWN_tank'+@tank+'_mass_TIMESTAMP <= CONVERT(datetime,'''+@start+''',120) order by OWN_tank'+@tank+'_mass_TIMESTAMP desc)),
[dens15] = [ASU_AZSlogs].[dbo].[GET_DENS15]('+@type+', (SELECT top (1) OWN_tank'+@tank+'_dens_VALUE FROM dbo.'+@table+' where OWN_tank'+@tank+'_mass_TIMESTAMP <= CONVERT(datetime,'''+@start+''',120) order by OWN_tank'+@tank+'_mass_TIMESTAMP desc), (SELECT top (1) CAST(OWN_tank'+@tank+'_temp_VALUE as float)/10 FROM dbo.'+@table+' where OWN_tank'+@tank+'_mass_TIMESTAMP <= CONVERT(datetime,'''+@start+''',120) order by OWN_tank'+@tank+'_mass_TIMESTAMP desc)),
[mass15] = [ASU_AZSlogs].[dbo].[GET_VOLUME15]('+@type+', (SELECT top (1) OWN_tank'+@tank+'_dens_VALUE FROM dbo.'+@table+' where OWN_tank'+@tank+'_mass_TIMESTAMP <= CONVERT(datetime,'''+@start+''',120) order by OWN_tank'+@tank+'_mass_TIMESTAMP desc), (SELECT top (1) CAST(OWN_tank'+@tank+'_temp_VALUE as float)/10 FROM dbo.'+@table+' where OWN_tank'+@tank+'_mass_TIMESTAMP <= CONVERT(datetime,'''+@start+''',120) order by OWN_tank'+@tank+'_mass_TIMESTAMP desc), (SELECT top (1) OWN_tank'+@tank+'_volume_VALUE FROM dbo.'+@table+' where OWN_tank'+@tank+'_mass_TIMESTAMP <= CONVERT(datetime,'''+@start+''',120) order by OWN_tank'+@tank+'_mass_TIMESTAMP desc)) * [ASU_AZSlogs].[dbo].[GET_DENS15]('+@type+', (SELECT top (1) OWN_tank'+@tank+'_dens_VALUE FROM dbo.'+@table+' where OWN_tank'+@tank+'_mass_TIMESTAMP <= CONVERT(datetime,'''+@start+''',120) order by OWN_tank'+@tank+'_mass_TIMESTAMP desc), (SELECT top (1) CAST(OWN_tank'+@tank+'_temp_VALUE as float)/10 FROM dbo.'+@table+' where OWN_tank'+@tank+'_mass_TIMESTAMP <= CONVERT(datetime,'''+@start+''',120) order by OWN_tank'+@tank+'_mass_TIMESTAMP desc)) * 0.001
'
	RETURN @SQLString
	END

GO


