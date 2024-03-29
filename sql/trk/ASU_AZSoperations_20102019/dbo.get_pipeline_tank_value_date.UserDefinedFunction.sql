USE [ASU_AZSoperations]
GO
/****** Object:  UserDefinedFunction [dbo].[get_pipeline_tank_value_date]    Script Date: 20.10.2019 16:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO





--use [ASU_AZSoperations]

CREATE FUNCTION [dbo].[get_pipeline_tank_value_date]
 (
         @date datetime
 )
RETURNS 
@tank_value TABLE  (
	[id] int IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[id_table] int NULL ,
	[dt] datetime NULL,
	[fuel_type] int NULL,
	[tank] char(3) NULL,
	[fill_percent] float NULL,
	[level] float NULL,
	[volume] float NULL,
	[mass] float NULL,
	[dens] float NULL,
	[dens_avg] float NULL,
	[temp] float NULL,
	[water_level] float NULL,
    [water_volume] float NULL
)
AS
 BEGIN

		insert @tank_value
		SELECT
		   [id_table] = 107000022
		   ,[dt] = @date
		   ,[fuel_type] = 107000022
		   ,[tank] = 'PL'
		   ,[fill_percent] = null
		   ,[level] = null
		   ,[volume] = 4577.0
		   ,[mass] = 3447.4
		   ,[dens] = 753.2
		   ,[dens_avg] = 753.2 
		   ,[temp] = null
		   ,[water_level] = null
		   ,[water_volume] = null

		insert @tank_value
		SELECT
		   [id_table] = 107000023
		   ,[dt] = @date
		   ,[fuel_type] = 107000023
		   ,[tank] = 'PL'
		   ,[fill_percent] = null
		   ,[level] = null
		   ,[volume] = 3904.0
		   ,[mass] = 2975.47
		   ,[dens] = 762.16
		   ,[dens_avg] = 762.16 
		   ,[temp] = null
		   ,[water_level] = null
		   ,[water_volume] = null

		insert @tank_value
		SELECT
		   [id_table] = 107000024
		   ,[dt] = @date
		   ,[fuel_type] = 107000024
		   ,[tank] = 'PL'
		   ,[fill_percent] = null
		   ,[level] = null
		   ,[volume] = 6771.0
		   ,[mass] = 5704.3
		   ,[dens] = 842.46
		   ,[dens_avg] = 842.46 
		   ,[temp] = null
		   ,[water_level] = null
		   ,[water_volume] = null

		insert @tank_value
		SELECT
		   [id_table] = 107000027
		   ,[dt] = @date
		   ,[fuel_type] = 107000027
		   ,[tank] = 'PL'
		   ,[fill_percent] = null
		   ,[level] = null
		   ,[volume] = 2674.0
		   ,[mass] = 2149.9
		   ,[dens] = 842.46
		   ,[dens_avg] = 804 
		   ,[temp] = null
		   ,[water_level] = null
		   ,[water_volume] = null  RETURN
 END
GO
