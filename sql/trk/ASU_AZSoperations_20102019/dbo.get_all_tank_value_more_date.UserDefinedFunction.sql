USE [ASU_AZSoperations]
GO
/****** Object:  UserDefinedFunction [dbo].[get_all_tank_value_more_date]    Script Date: 20.10.2019 16:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO





--use [ASU_AZSoperations]

CREATE FUNCTION [dbo].[get_all_tank_value_more_date]
 (
         @date datetime,
		 @PL bit
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
	insert @tank_value select [id_table],[dt],[fuel_type],[tank],[fill_percent],[level],[volume],[mass],[dens],[dens_avg],[temp],[water_level],[water_volume] from get_confiscated_tank_value_more_date(@date)
	insert @tank_value select [id_table],[dt],[fuel_type],[tank],[fill_percent],[level],[volume],[mass],[dens],[dens_avg],[temp],[water_level],[water_volume] from get_a92_tank_value_more_date(@date)
	insert @tank_value select [id_table],[dt],[fuel_type],[tank],[fill_percent],[level],[volume],[mass],[dens],[dens_avg],[temp],[water_level],[water_volume] from get_a95_tank_value_more_date(@date)
	insert @tank_value select [id_table],[dt],[fuel_type],[tank],[fill_percent],[level],[volume],[mass],[dens],[dens_avg],[temp],[water_level],[water_volume] from get_dt_tank_value_more_date(@date)
	insert @tank_value select [id_table],[dt],[fuel_type],[tank],[fill_percent],[level],[volume],[mass],[dens],[dens_avg],[temp],[water_level],[water_volume] from get_kerosene_tank_value_more_date(@date)
  	if (@PL=1) begin
		insert @tank_value select [id_table],[dt],[fuel_type],[tank],[fill_percent],[level],[volume],[mass],[dens],[dens_avg],[temp],[water_level],[water_volume] from get_pipeline_tank_value_date(@date)
	end
  RETURN
 END
GO
