USE [ASU_AZSoperations]
GO
/****** Object:  UserDefinedFunction [dbo].[get_tanks_value_more_of_date_nums_tank]    Script Date: 20.10.2019 16:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--use [ASU_AZSoperations]

CREATE FUNCTION [dbo].[get_tanks_value_more_of_date_nums_tank] 
 (
		@select_date datetime,
		@tanks nvarchar(200)
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
	DECLARE @a SMALLINT
	DECLARE @b SMALLINT
	declare @num sysname

	SET @a = charindex(',', @tanks)
	if (@a>0) 
	begin
		SET @num = substring(@tanks, 1, @a-1)
		insert @tank_value
		select * from get_tank_value_more_date(@select_date, @num)
		------------------------------------------------------------------------------------------
		WHILE @a <> 0
			BEGIN
				SET @b = charindex(',', @tanks, @a+1)
				IF @b <> 0
					begin
						SET @num = substring(@tanks, @a+1, @b-@a-1)
						insert @tank_value
						select * from get_tank_value_more_date(@select_date, @num)
					end

				ELSE
					begin
						SET @num = substring(@tanks, @a+1, len(@tanks)-@a)
						insert @tank_value
						select * from get_tank_value_more_date(@select_date, @num)
					end

				SET @a = @b
			 END
	end else begin 
		insert @tank_value
		select * from get_tank_value_more_date(@select_date, @tanks)
	end
	RETURN
 END
GO
