USE [ASU_AZSlogs]
GO
/****** Object:  UserDefinedFunction [dbo].[GET_TANK]    Script Date: 20.10.2019 16:20:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO





--B11


CREATE FUNCTION [dbo].[GET_TANK](@table sysname, @tank sysname, @start sysname, @stop sysname) 
	RETURNS nvarchar(max)
	AS
	BEGIN 
	
DECLARE @SQLString nvarchar(max);

set @SQLString = N'
select 
[dt] = OWN_tank'+@tank+'_mass_TIMESTAMP,
[level] = OWN_tank'+@tank+'_level_VALUE,
[volume] = OWN_tank'+@tank+'_volume_VALUE,
[dens] = OWN_tank'+@tank+'_dens_VALUE,
[mass] = OWN_tank'+@tank+'_mass_VALUE,
[temp] = OWN_tank'+@tank+'_temp_VALUE,
[water_level] = OWN_tank'+@tank+'_water_level_VALUE
FROM dbo.'+@table+' 
WHERE OWN_tank'+@tank+'_mass_TIMESTAMP >= CONVERT(datetime,'''+@start+''',120) AND OWN_tank'+@tank+'_mass_TIMESTAMP <= CONVERT(datetime,'''+@stop+''',120)
order by [dt]
'
RETURN @SQLString
	END

GO
