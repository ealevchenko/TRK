USE [ASU_AZSoperations]
GO
/****** Object:  UserDefinedFunction [dbo].[get_dt_tank_value_less_date]    Script Date: 20.10.2019 16:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO




--use [ASU_AZSoperations]

CREATE FUNCTION [dbo].[get_dt_tank_value_less_date]
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
	insert @tank_value select * from get_tank_value_less_date(@date, '01')
	insert @tank_value select * from get_tank_value_less_date(@date, '02')
	insert @tank_value select * from get_tank_value_less_date(@date, '03')
	insert @tank_value select * from get_tank_value_less_date(@date, '04')
	insert @tank_value select * from get_tank_value_less_date(@date, '05')
	insert @tank_value select * from get_tank_value_less_date(@date, '06')
	insert @tank_value select * from get_tank_value_less_date(@date, '07')
	insert @tank_value select * from get_tank_value_less_date(@date, '08')
	insert @tank_value select * from get_tank_value_less_date(@date, '09')
	insert @tank_value select * from get_tank_value_less_date(@date, '10')
	insert @tank_value select * from get_tank_value_less_date(@date, '11')
	insert @tank_value select * from get_tank_value_less_date(@date, '12')
	insert @tank_value select * from get_tank_value_less_date(@date, '13')
	insert @tank_value select * from get_tank_value_less_date(@date, '14')
	insert @tank_value select * from get_tank_value_less_date(@date, '15')
	insert @tank_value select * from get_tank_value_less_date(@date, '16')
	insert @tank_value select * from get_tank_value_less_date(@date, '17')
	insert @tank_value select * from get_tank_value_less_date(@date, '18')
	insert @tank_value select * from get_tank_value_less_date(@date, '19')
	insert @tank_value select * from get_tank_value_less_date(@date, '20')
	insert @tank_value select * from get_tank_value_less_date(@date, '21')
	insert @tank_value select * from get_tank_value_less_date(@date, '22')
	insert @tank_value select * from get_tank_value_less_date(@date, '23')
	insert @tank_value select * from get_tank_value_less_date(@date, '24')
	insert @tank_value select * from get_tank_value_less_date(@date, '25')
	insert @tank_value select * from get_tank_value_less_date(@date, '26')
	insert @tank_value select * from get_tank_value_less_date(@date, '27')
	insert @tank_value select * from get_tank_value_less_date(@date, '28')
	insert @tank_value select * from get_tank_value_less_date(@date, '29')
	insert @tank_value select * from get_tank_value_less_date(@date, '30')
	insert @tank_value select * from get_tank_value_less_date(@date, '31')
	insert @tank_value select * from get_tank_value_less_date(@date, '32')
  RETURN
 END
GO
