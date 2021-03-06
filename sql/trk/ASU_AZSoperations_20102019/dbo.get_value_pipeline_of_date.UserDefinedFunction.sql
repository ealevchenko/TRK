USE [ASU_AZSoperations]
GO
/****** Object:  UserDefinedFunction [dbo].[get_value_pipeline_of_date]    Script Date: 20.10.2019 16:17:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

--use [ASU_AZSoperations]

CREATE FUNCTION [dbo].[get_value_pipeline_of_date] 
 (
         @date_start datetime, 
         @fuel_type int
 )
RETURNS 
 @value_pipeline TABLE 
 (
	dt datetime 
	,volume float
	,mass float
	,dens_avg float
	,temp float
 )
AS
 BEGIN
 declare @select_date datetime;
declare @tanks nvarchar(200);

SELECT top (1) @tanks = [tank_num]
	  ,@select_date = [stop_datetime]
  FROM [ASU_AZSoperations].[dbo].[FuelSale]
  where [start_datetime] <= @date_start and [stop_datetime] is not null and [fuel_type]=@fuel_type
  order by [start_datetime] desc

  --select @select_date, @tanks
  SET @select_date = @date_start --!!! Брать дату на момент формирования отчета и по емкостям по которым была выдача 

  declare @tank_value TABLE  (
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
	insert @tank_value
	select [id_table],[dt],[fuel_type],[tank],[fill_percent],[level],[volume],[mass],[dens],[dens_avg],[temp],[water_level],[water_volume]  
	from get_tanks_value_less_of_date_nums_tank(@select_date,@tanks)

	--DECLARE @a SMALLINT
	--DECLARE @b SMALLINT
	--declare @num sysname

	--SET @a = charindex(',', @tanks)
	--if (@a>0) 
	--begin
	--	SET @num = substring(@tanks, 1, @a-1)
	--	insert @tank_value
	--	select * from get_tank_value_less_date(@select_date, @num)
	--	------------------------------------------------------------------------------------------
	--	WHILE @a <> 0
	--		BEGIN
	--			SET @b = charindex(',', @tanks, @a+1)
	--			IF @b <> 0
	--				begin
	--					SET @num = substring(@tanks, @a+1, @b-@a-1)
	--					insert @tank_value
	--					select * from get_tank_value_less_date(@select_date, @num)
	--				end

	--			ELSE
	--				begin
	--					SET @num = substring(@tanks, @a+1, len(@tanks)-@a)
	--					insert @tank_value
	--					select * from get_tank_value_less_date(@select_date, @num)
	--				end

	--			SET @a = @b
	--		 END
	--end else begin 
	--	insert @tank_value
	--	select * from get_tank_value_less_date(@select_date, @tanks)
	--end
		 --select * from @tank_value
		 insert @value_pipeline
		 select dt = min(dt) , volume = sum(volume), mass = sum(mass), dens_avg = (sum(mass)/sum(volume)*1000.0),  temp = avg(temp) from @tank_value
         RETURN
 END
GO
