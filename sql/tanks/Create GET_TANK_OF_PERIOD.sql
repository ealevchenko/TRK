USE [ASU_AZSlogs]
GO

/****** Object:  UserDefinedFunction [dbo].[GET_TANK]    Script Date: 28.05.2019 16:35:53 ******/
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


/****** Object:  StoredProcedure [dbo].[GET_TANK_OF_PERIOD]    Script Date: 28.05.2019 16:36:06 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================

-- =============================================
CREATE PROCEDURE [dbo].[GET_TANK_OF_PERIOD]
	@table sysname, 
	@tank sysname,
	@start sysname, 
	@stop sysname
AS
begin
DECLARE @SQLString nvarchar(max);
DECLARE @ParmDefinition nvarchar(max);

		set @SQLString = N''+
		[dbo].[GET_TANK](@table, @tank, @start, @stop) + '';
		print @SQLString
EXECUTE sp_executesql
		@SQLString
		,@ParmDefinition
end


GO