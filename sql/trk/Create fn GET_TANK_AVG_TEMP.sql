USE [ASU_AZSlogs]
GO

/****** Object:  UserDefinedFunction [dbo].[GET_TANK_AVG_TEMP]    Script Date: 30.06.2019 15:56:48 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE FUNCTION [dbo].[GET_TANK_AVG_TEMP](@type sysname, @date datetime) 
	RETURNS float
	AS
	BEGIN 

declare @res float

	if (@type = N'107000022')
	begin
		set @res = (SELECT top (1) CAST(OWN_tankB2_temp_VALUE as float)/10 FROM dbo.BT2 where OWN_tankB2_mass_TIMESTAMP <= @date order by OWN_tankB2_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tankB3_temp_VALUE as float)/10 FROM dbo.BT3 where OWN_tankB3_mass_TIMESTAMP <= @date order by OWN_tankB3_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tankB9_temp_VALUE as float)/10 FROM dbo.BT9 where OWN_tankB9_mass_TIMESTAMP <= @date order by OWN_tankB9_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tankB11_temp_VALUE as float)/10 FROM dbo.BT11 where OWN_tankB11_mass_TIMESTAMP <= @date order by OWN_tankB11_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tankB16_temp_VALUE as float)/10 FROM dbo.BT16 where OWN_tankB16_mass_TIMESTAMP <= @date order by OWN_tankB16_mass_TIMESTAMP desc)
		set @res = @res/5
	end

	if (@type = N'107000023')
	begin
		set @res = (SELECT top (1) CAST(OWN_tankB17_temp_VALUE as float)/10 FROM dbo.BT17 where OWN_tankB17_mass_TIMESTAMP <= @date order by OWN_tankB17_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tankB18_temp_VALUE as float)/10 FROM dbo.BT18 where OWN_tankB18_mass_TIMESTAMP <= @date order by OWN_tankB18_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tankB19_temp_VALUE as float)/10 FROM dbo.BT19 where OWN_tankB19_mass_TIMESTAMP <= @date order by OWN_tankB19_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tankB20_temp_VALUE as float)/10 FROM dbo.BT20 where OWN_tankB20_mass_TIMESTAMP <= @date order by OWN_tankB20_mass_TIMESTAMP desc)
		set @res = @res/4
	end

	if (@type = N'107000024')
	begin
		set @res = (SELECT top (1) CAST(OWN_tank01_temp_VALUE as float)/10 FROM dbo.DT01 where OWN_tank01_mass_TIMESTAMP <= @date order by OWN_tank01_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank02_temp_VALUE as float)/10 FROM dbo.DT02 where OWN_tank02_mass_TIMESTAMP <= @date order by OWN_tank02_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank03_temp_VALUE as float)/10 FROM dbo.DT03 where OWN_tank03_mass_TIMESTAMP <= @date order by OWN_tank03_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank04_temp_VALUE as float)/10 FROM dbo.DT04 where OWN_tank04_mass_TIMESTAMP <= @date order by OWN_tank04_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank05_temp_VALUE as float)/10 FROM dbo.DT05 where OWN_tank05_mass_TIMESTAMP <= @date order by OWN_tank05_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank06_temp_VALUE as float)/10 FROM dbo.DT06 where OWN_tank06_mass_TIMESTAMP <= @date order by OWN_tank06_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank07_temp_VALUE as float)/10 FROM dbo.DT07 where OWN_tank07_mass_TIMESTAMP <= @date order by OWN_tank07_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank08_temp_VALUE as float)/10 FROM dbo.DT08 where OWN_tank08_mass_TIMESTAMP <= @date order by OWN_tank08_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank09_temp_VALUE as float)/10 FROM dbo.DT09 where OWN_tank09_mass_TIMESTAMP <= @date order by OWN_tank09_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank10_temp_VALUE as float)/10 FROM dbo.DT10 where OWN_tank10_mass_TIMESTAMP <= @date order by OWN_tank10_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank11_temp_VALUE as float)/10 FROM dbo.DT11 where OWN_tank11_mass_TIMESTAMP <= @date order by OWN_tank11_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank12_temp_VALUE as float)/10 FROM dbo.DT12 where OWN_tank12_mass_TIMESTAMP <= @date order by OWN_tank12_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank13_temp_VALUE as float)/10 FROM dbo.DT13 where OWN_tank13_mass_TIMESTAMP <= @date order by OWN_tank13_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank14_temp_VALUE as float)/10 FROM dbo.DT14 where OWN_tank14_mass_TIMESTAMP <= @date order by OWN_tank14_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank15_temp_VALUE as float)/10 FROM dbo.DT15 where OWN_tank15_mass_TIMESTAMP <= @date order by OWN_tank15_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank16_temp_VALUE as float)/10 FROM dbo.DT16 where OWN_tank16_mass_TIMESTAMP <= @date order by OWN_tank16_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank17_temp_VALUE as float)/10 FROM dbo.DT17 where OWN_tank17_mass_TIMESTAMP <= @date order by OWN_tank17_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank18_temp_VALUE as float)/10 FROM dbo.DT18 where OWN_tank18_mass_TIMESTAMP <= @date order by OWN_tank18_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank19_temp_VALUE as float)/10 FROM dbo.DT19 where OWN_tank19_mass_TIMESTAMP <= @date order by OWN_tank19_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank20_temp_VALUE as float)/10 FROM dbo.DT20 where OWN_tank20_mass_TIMESTAMP <= @date order by OWN_tank20_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank21_temp_VALUE as float)/10 FROM dbo.DT21 where OWN_tank21_mass_TIMESTAMP <= @date order by OWN_tank21_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank22_temp_VALUE as float)/10 FROM dbo.DT22 where OWN_tank22_mass_TIMESTAMP <= @date order by OWN_tank22_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank23_temp_VALUE as float)/10 FROM dbo.DT23 where OWN_tank23_mass_TIMESTAMP <= @date order by OWN_tank23_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank24_temp_VALUE as float)/10 FROM dbo.DT24 where OWN_tank24_mass_TIMESTAMP <= @date order by OWN_tank24_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank25_temp_VALUE as float)/10 FROM dbo.DT25 where OWN_tank25_mass_TIMESTAMP <= @date order by OWN_tank25_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank26_temp_VALUE as float)/10 FROM dbo.DT26 where OWN_tank26_mass_TIMESTAMP <= @date order by OWN_tank26_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank27_temp_VALUE as float)/10 FROM dbo.DT27 where OWN_tank27_mass_TIMESTAMP <= @date order by OWN_tank27_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank28_temp_VALUE as float)/10 FROM dbo.DT28 where OWN_tank28_mass_TIMESTAMP <= @date order by OWN_tank28_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank29_temp_VALUE as float)/10 FROM dbo.DT29 where OWN_tank29_mass_TIMESTAMP <= @date order by OWN_tank29_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank30_temp_VALUE as float)/10 FROM dbo.DT30 where OWN_tank30_mass_TIMESTAMP <= @date order by OWN_tank30_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank31_temp_VALUE as float)/10 FROM dbo.DT31 where OWN_tank31_mass_TIMESTAMP <= @date order by OWN_tank31_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank32_temp_VALUE as float)/10 FROM dbo.DT32 where OWN_tank32_mass_TIMESTAMP <= @date order by OWN_tank32_mass_TIMESTAMP desc)
		set @res = @res/32
	end

	if (@type = N'107000027')
	begin
		set @res = (SELECT top (1) CAST(OWN_tank33_temp_VALUE as float)/10 FROM dbo.DT33 where OWN_tank33_mass_TIMESTAMP <= @date order by OWN_tank33_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank38_temp_VALUE as float)/10 FROM dbo.DT38 where OWN_tank38_mass_TIMESTAMP <= @date order by OWN_tank38_mass_TIMESTAMP desc)
		+(SELECT top (1) CAST(OWN_tank39_temp_VALUE as float)/10 FROM dbo.DT39 where OWN_tank39_mass_TIMESTAMP <= @date order by OWN_tank39_mass_TIMESTAMP desc)
		set @res = @res/3	

	end

	return @res
	
	END

GO


