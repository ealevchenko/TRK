USE [ASU_AZSoperations]
GO
/****** Object:  UserDefinedFunction [dbo].[get_kerosene_tank_value_more_date]    Script Date: 20.10.2019 16:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO





--use [ASU_AZSoperations]

CREATE FUNCTION [dbo].[get_kerosene_tank_value_more_date]
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
	insert @tank_value select * from get_tank_value_more_date(@date, '33')
	insert @tank_value select * from get_tank_value_more_date(@date, '38')
	insert @tank_value select * from get_tank_value_more_date(@date, '39')
  RETURN
 END
GO
