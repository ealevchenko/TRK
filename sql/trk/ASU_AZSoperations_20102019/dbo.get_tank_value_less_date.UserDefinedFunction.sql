USE [ASU_AZSoperations]
GO
/****** Object:  UserDefinedFunction [dbo].[get_tank_value_less_date]    Script Date: 20.10.2019 16:17:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--use [ASU_AZSoperations]

CREATE FUNCTION [dbo].[get_tank_value_less_date]
 (
         @date datetime,
		 @tank char(3)
 )
RETURNS 
@tank_value TABLE  (
	[id] int NOT NULL PRIMARY KEY,
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
	--************** КОНФИСКАТ *************************************
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='B13') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tankB13_mass_TIMESTAMP]
		   ,[fuel_type] = 0
		   ,[tank] = 'B13'
		   ,[fill_percent] = [OWN_tankB13_fill_percent_VALUE]
		   ,[level] = [OWN_tankB13_level_VALUE]
		   ,[volume] = [OWN_tankB13_volume_VALUE]
		   ,[mass] = [OWN_tankB13_mass_VALUE]
		   ,[dens] = [OWN_tankB13_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tankB13_volume_VALUE] > 0 THEN ([OWN_tankB13_mass_VALUE]/[OWN_tankB13_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tankB13_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tankB13_water_level_VALUE]
		   ,[water_volume] = [OWN_tankB13_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[BT13]
	  where [OWN_tankB13_mass_TIMESTAMP]<= @date
	  order by [OWN_tankB13_mass_TIMESTAMP] desc
  end
  	--************** А92 *************************************
	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='B2') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tankB2_mass_TIMESTAMP]
		   ,[fuel_type] = 107000022
		   ,[tank] = 'B2'
		   ,[fill_percent] = [OWN_tankB2_fill_percent_VALUE]
		   ,[level] = [OWN_tankB2_level_VALUE]
		   ,[volume] = [OWN_tankB2_volume_VALUE]
		   ,[mass] = [OWN_tankB2_mass_VALUE]
		   ,[dens] = [OWN_tankB2_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tankB2_volume_VALUE] > 0 THEN ([OWN_tankB2_mass_VALUE]/[OWN_tankB2_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tankB2_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tankB2_water_level_VALUE]
		   ,[water_volume] = [OWN_tankB2_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[BT2]
	  where [OWN_tankB2_mass_TIMESTAMP]<= @date
	  order by [OWN_tankB2_mass_TIMESTAMP] desc
  end

  	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='B3') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tankB3_mass_TIMESTAMP]
		   ,[fuel_type] = 107000022
		   ,[tank] = 'B3'
		   ,[fill_percent] = [OWN_tankB3_fill_percent_VALUE]
		   ,[level] = [OWN_tankB3_level_VALUE]
		   ,[volume] = [OWN_tankB3_volume_VALUE]
		   ,[mass] = [OWN_tankB3_mass_VALUE]
		   ,[dens] = [OWN_tankB3_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tankB3_volume_VALUE] > 0 THEN ([OWN_tankB3_mass_VALUE]/[OWN_tankB3_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tankB3_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tankB3_water_level_VALUE]
		   ,[water_volume] = [OWN_tankB3_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[BT3]
	  where [OWN_tankB3_mass_TIMESTAMP]<= @date
	  order by [OWN_tankB3_mass_TIMESTAMP] desc
  end

  	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='B9') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tankB9_mass_TIMESTAMP]
		   ,[fuel_type] = 107000022
		   ,[tank] = 'B9'
		   ,[fill_percent] = [OWN_tankB9_fill_percent_VALUE]
		   ,[level] = [OWN_tankB9_level_VALUE]
		   ,[volume] = [OWN_tankB9_volume_VALUE]
		   ,[mass] = [OWN_tankB9_mass_VALUE]
		   ,[dens] = [OWN_tankB9_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tankB9_volume_VALUE] > 0 THEN ([OWN_tankB9_mass_VALUE]/[OWN_tankB9_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tankB9_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tankB9_water_level_VALUE]
		   ,[water_volume] = [OWN_tankB9_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[BT9]
	  where [OWN_tankB9_mass_TIMESTAMP]<= @date
	  order by [OWN_tankB9_mass_TIMESTAMP] desc
  end

  	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='B11') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tankB11_mass_TIMESTAMP]
		   ,[fuel_type] = 107000022
		   ,[tank] = 'B11'
		   ,[fill_percent] = [OWN_tankB11_fill_percent_VALUE]
		   ,[level] = [OWN_tankB11_level_VALUE]
		   ,[volume] = [OWN_tankB11_volume_VALUE]
		   ,[mass] = [OWN_tankB11_mass_VALUE]
		   ,[dens] = [OWN_tankB11_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tankB11_volume_VALUE] > 0 THEN ([OWN_tankB11_mass_VALUE]/[OWN_tankB11_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tankB11_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tankB11_water_level_VALUE]
		   ,[water_volume] = [OWN_tankB11_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[BT11]
	  where [OWN_tankB11_mass_TIMESTAMP]<= @date
	  order by [OWN_tankB11_mass_TIMESTAMP] desc
  end
  	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='B16') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tankB16_mass_TIMESTAMP]
		   ,[fuel_type] = 107000022
		   ,[tank] = 'B16'
		   ,[fill_percent] = [OWN_tankB16_fill_percent_VALUE]
		   ,[level] = [OWN_tankB16_level_VALUE]
		   ,[volume] = [OWN_tankB16_volume_VALUE]
		   ,[mass] = [OWN_tankB16_mass_VALUE]
		   ,[dens] = [OWN_tankB16_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tankB16_volume_VALUE] > 0 THEN ([OWN_tankB16_mass_VALUE]/[OWN_tankB16_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tankB16_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tankB16_water_level_VALUE]
		   ,[water_volume] = [OWN_tankB16_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[BT16]
	  where [OWN_tankB16_mass_TIMESTAMP]<= @date
	  order by [OWN_tankB16_mass_TIMESTAMP] desc
  end
  	--************** А95 *************************************
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='B17') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tankB17_mass_TIMESTAMP]
		   ,[fuel_type] = 107000023
		   ,[tank] = 'B17'
		   ,[fill_percent] = [OWN_tankB17_fill_percent_VALUE]
		   ,[level] = [OWN_tankB17_level_VALUE]
		   ,[volume] = [OWN_tankB17_volume_VALUE]
		   ,[mass] = [OWN_tankB17_mass_VALUE]
		   ,[dens] = [OWN_tankB17_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tankB17_volume_VALUE] > 0 THEN ([OWN_tankB17_mass_VALUE]/[OWN_tankB17_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tankB17_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tankB17_water_level_VALUE]
		   ,[water_volume] = [OWN_tankB17_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[BT17]
	  where [OWN_tankB17_mass_TIMESTAMP]<= @date
	  order by [OWN_tankB17_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='B18') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tankB18_mass_TIMESTAMP]
		   ,[fuel_type] = 107000023
		   ,[tank] = 'B18'
		   ,[fill_percent] = [OWN_tankB18_fill_percent_VALUE]
		   ,[level] = [OWN_tankB18_level_VALUE]
		   ,[volume] = [OWN_tankB18_volume_VALUE]
		   ,[mass] = [OWN_tankB18_mass_VALUE]
		   ,[dens] = [OWN_tankB18_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tankB18_volume_VALUE] > 0 THEN ([OWN_tankB18_mass_VALUE]/[OWN_tankB18_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tankB18_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tankB18_water_level_VALUE]
		   ,[water_volume] = [OWN_tankB18_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[BT18]
	  where [OWN_tankB18_mass_TIMESTAMP]<= @date
	  order by [OWN_tankB18_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='B19') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tankB19_mass_TIMESTAMP]
		   ,[fuel_type] = 107000023
		   ,[tank] = 'B19'
		   ,[fill_percent] = [OWN_tankB19_fill_percent_VALUE]
		   ,[level] = [OWN_tankB19_level_VALUE]
		   ,[volume] = [OWN_tankB19_volume_VALUE]
		   ,[mass] = [OWN_tankB19_mass_VALUE]
		   ,[dens] = [OWN_tankB19_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tankB19_volume_VALUE] > 0 THEN ([OWN_tankB19_mass_VALUE]/[OWN_tankB19_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tankB19_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tankB19_water_level_VALUE]
		   ,[water_volume] = [OWN_tankB19_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[BT19]
	  where [OWN_tankB19_mass_TIMESTAMP]<= @date
	  order by [OWN_tankB19_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='B20') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tankB20_mass_TIMESTAMP]
		   ,[fuel_type] = 107000023
		   ,[tank] = 'B20'
		   ,[fill_percent] = [OWN_tankB20_fill_percent_VALUE]
		   ,[level] = [OWN_tankB20_level_VALUE]
		   ,[volume] = [OWN_tankB20_volume_VALUE]
		   ,[mass] = [OWN_tankB20_mass_VALUE]
		   ,[dens] = [OWN_tankB20_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tankB20_volume_VALUE] > 0 THEN ([OWN_tankB20_mass_VALUE]/[OWN_tankB20_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tankB20_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tankB20_water_level_VALUE]
		   ,[water_volume] = [OWN_tankB20_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[BT20]
	  where [OWN_tankB20_mass_TIMESTAMP]<= @date
	  order by [OWN_tankB20_mass_TIMESTAMP] desc
  end
    --************** ДТ *************************************
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='01') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank01_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '01'
		   ,[fill_percent] = [OWN_tank01_fill_percent_VALUE]
		   ,[level] = [OWN_tank01_level_VALUE]
		   ,[volume] = [OWN_tank01_volume_VALUE]
		   ,[mass] = [OWN_tank01_mass_VALUE]
		   ,[dens] = [OWN_tank01_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank01_volume_VALUE] > 0 THEN ([OWN_tank01_mass_VALUE]/[OWN_tank01_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank01_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank01_water_level_VALUE]
		   ,[water_volume] = [OWN_tank01_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT01]
	  where [OWN_tank01_mass_TIMESTAMP]<= @date
	  order by [OWN_tank01_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='02') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank02_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '02'
		   ,[fill_percent] = [OWN_tank02_fill_percent_VALUE]
		   ,[level] = [OWN_tank02_level_VALUE]
		   ,[volume] = [OWN_tank02_volume_VALUE]
		   ,[mass] = [OWN_tank02_mass_VALUE]
		   ,[dens] = [OWN_tank02_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank02_volume_VALUE] > 0 THEN ([OWN_tank02_mass_VALUE]/[OWN_tank02_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank02_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank02_water_level_VALUE]
		   ,[water_volume] = [OWN_tank02_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT02]
	  where [OWN_tank02_mass_TIMESTAMP]<= @date
	  order by [OWN_tank02_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='03') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank03_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '03'
		   ,[fill_percent] = [OWN_tank03_fill_percent_VALUE]
		   ,[level] = [OWN_tank03_level_VALUE]
		   ,[volume] = [OWN_tank03_volume_VALUE]
		   ,[mass] = [OWN_tank03_mass_VALUE]
		   ,[dens] = [OWN_tank03_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank03_volume_VALUE] > 0 THEN ([OWN_tank03_mass_VALUE]/[OWN_tank03_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank03_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank03_water_level_VALUE]
		   ,[water_volume] = [OWN_tank03_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT03]
	  where [OWN_tank03_mass_TIMESTAMP]<= @date
	  order by [OWN_tank03_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='04') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank04_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '04'
		   ,[fill_percent] = [OWN_tank04_fill_percent_VALUE]
		   ,[level] = [OWN_tank04_level_VALUE]
		   ,[volume] = [OWN_tank04_volume_VALUE]
		   ,[mass] = [OWN_tank04_mass_VALUE]
		   ,[dens] = [OWN_tank04_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank04_volume_VALUE] > 0 THEN ([OWN_tank04_mass_VALUE]/[OWN_tank04_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank04_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank04_water_level_VALUE]
		   ,[water_volume] = [OWN_tank04_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT04]
	  where [OWN_tank04_mass_TIMESTAMP]<= @date
	  order by [OWN_tank04_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='05') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank05_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '05'
		   ,[fill_percent] = [OWN_tank05_fill_percent_VALUE]
		   ,[level] = [OWN_tank05_level_VALUE]
		   ,[volume] = [OWN_tank05_volume_VALUE]
		   ,[mass] = [OWN_tank05_mass_VALUE]
		   ,[dens] = [OWN_tank05_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank05_volume_VALUE] > 0 THEN ([OWN_tank05_mass_VALUE]/[OWN_tank05_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank05_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank05_water_level_VALUE]
		   ,[water_volume] = [OWN_tank05_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT05]
	  where [OWN_tank05_mass_TIMESTAMP]<= @date
	  order by [OWN_tank05_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='06') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank06_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '06'
		   ,[fill_percent] = [OWN_tank06_fill_percent_VALUE]
		   ,[level] = [OWN_tank06_level_VALUE]
		   ,[volume] = [OWN_tank06_volume_VALUE]
		   ,[mass] = [OWN_tank06_mass_VALUE]
		   ,[dens] = [OWN_tank06_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank06_volume_VALUE] > 0 THEN ([OWN_tank06_mass_VALUE]/[OWN_tank06_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank06_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank06_water_level_VALUE]
		   ,[water_volume] = [OWN_tank06_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT06]
	  where [OWN_tank06_mass_TIMESTAMP]<= @date
	  order by [OWN_tank06_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='07') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank07_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '07'
		   ,[fill_percent] = [OWN_tank07_fill_percent_VALUE]
		   ,[level] = [OWN_tank07_level_VALUE]
		   ,[volume] = [OWN_tank07_volume_VALUE]
		   ,[mass] = [OWN_tank07_mass_VALUE]
		   ,[dens] = [OWN_tank07_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank07_volume_VALUE] > 0 THEN ([OWN_tank07_mass_VALUE]/[OWN_tank07_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank07_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank07_water_level_VALUE]
		   ,[water_volume] = [OWN_tank07_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT07]
	  where [OWN_tank07_mass_TIMESTAMP]<= @date
	  order by [OWN_tank07_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='08') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank08_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '08'
		   ,[fill_percent] = [OWN_tank08_fill_percent_VALUE]
		   ,[level] = [OWN_tank08_level_VALUE]
		   ,[volume] = [OWN_tank08_volume_VALUE]
		   ,[mass] = [OWN_tank08_mass_VALUE]
		   ,[dens] = [OWN_tank08_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank08_volume_VALUE] > 0 THEN ([OWN_tank08_mass_VALUE]/[OWN_tank08_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank08_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank08_water_level_VALUE]
		   ,[water_volume] = [OWN_tank08_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT08]
	  where [OWN_tank08_mass_TIMESTAMP]<= @date
	  order by [OWN_tank08_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='09') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank09_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '09'
		   ,[fill_percent] = [OWN_tank09_fill_percent_VALUE]
		   ,[level] = [OWN_tank09_level_VALUE]
		   ,[volume] = [OWN_tank09_volume_VALUE]
		   ,[mass] = [OWN_tank09_mass_VALUE]
		   ,[dens] = [OWN_tank09_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank09_volume_VALUE] > 0 THEN ([OWN_tank09_mass_VALUE]/[OWN_tank09_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank09_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank09_water_level_VALUE]
		   ,[water_volume] = [OWN_tank09_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT09]
	  where [OWN_tank09_mass_TIMESTAMP]<= @date
	  order by [OWN_tank09_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='10') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank10_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '10'
		   ,[fill_percent] = [OWN_tank10_fill_percent_VALUE]
		   ,[level] = [OWN_tank10_level_VALUE]
		   ,[volume] = [OWN_tank10_volume_VALUE]
		   ,[mass] = [OWN_tank10_mass_VALUE]
		   ,[dens] = [OWN_tank10_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank10_volume_VALUE] > 0 THEN ([OWN_tank10_mass_VALUE]/[OWN_tank10_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank10_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank10_water_level_VALUE]
		   ,[water_volume] = [OWN_tank10_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT10]
	  where [OWN_tank10_mass_TIMESTAMP]<= @date
	  order by [OWN_tank10_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='11') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank11_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '11'
		   ,[fill_percent] = [OWN_tank11_fill_percent_VALUE]
		   ,[level] = [OWN_tank11_level_VALUE]
		   ,[volume] = [OWN_tank11_volume_VALUE]
		   ,[mass] = [OWN_tank11_mass_VALUE]
		   ,[dens] = [OWN_tank11_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank11_volume_VALUE] > 0 THEN ([OWN_tank11_mass_VALUE]/[OWN_tank11_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank11_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank11_water_level_VALUE]
		   ,[water_volume] = [OWN_tank11_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT11]
	  where [OWN_tank11_mass_TIMESTAMP]<= @date
	  order by [OWN_tank11_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='12') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank12_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '12'
		   ,[fill_percent] = [OWN_tank12_fill_percent_VALUE]
		   ,[level] = [OWN_tank12_level_VALUE]
		   ,[volume] = [OWN_tank12_volume_VALUE]
		   ,[mass] = [OWN_tank12_mass_VALUE]
		   ,[dens] = [OWN_tank12_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank12_volume_VALUE] > 0 THEN ([OWN_tank12_mass_VALUE]/[OWN_tank12_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank12_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank12_water_level_VALUE]
		   ,[water_volume] = [OWN_tank12_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT12]
	  where [OWN_tank12_mass_TIMESTAMP]<= @date
	  order by [OWN_tank12_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='13') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank13_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '13'
		   ,[fill_percent] = [OWN_tank13_fill_percent_VALUE]
		   ,[level] = [OWN_tank13_level_VALUE]
		   ,[volume] = [OWN_tank13_volume_VALUE]
		   ,[mass] = [OWN_tank13_mass_VALUE]
		   ,[dens] = [OWN_tank13_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank13_volume_VALUE] > 0 THEN ([OWN_tank13_mass_VALUE]/[OWN_tank13_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank13_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank13_water_level_VALUE]
		   ,[water_volume] = [OWN_tank13_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT13]
	  where [OWN_tank13_mass_TIMESTAMP]<= @date
	  order by [OWN_tank13_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='14') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank14_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '14'
		   ,[fill_percent] = [OWN_tank14_fill_percent_VALUE]
		   ,[level] = [OWN_tank14_level_VALUE]
		   ,[volume] = [OWN_tank14_volume_VALUE]
		   ,[mass] = [OWN_tank14_mass_VALUE]
		   ,[dens] = [OWN_tank14_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank14_volume_VALUE] > 0 THEN ([OWN_tank14_mass_VALUE]/[OWN_tank14_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank14_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank14_water_level_VALUE]
		   ,[water_volume] = [OWN_tank14_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT14]
	  where [OWN_tank14_mass_TIMESTAMP]<= @date
	  order by [OWN_tank14_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='15') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank15_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '15'
		   ,[fill_percent] = [OWN_tank15_fill_percent_VALUE]
		   ,[level] = [OWN_tank15_level_VALUE]
		   ,[volume] = [OWN_tank15_volume_VALUE]
		   ,[mass] = [OWN_tank15_mass_VALUE]
		   ,[dens] = [OWN_tank15_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank15_volume_VALUE] > 0 THEN ([OWN_tank15_mass_VALUE]/[OWN_tank15_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank15_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank15_water_level_VALUE]
		   ,[water_volume] = [OWN_tank15_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT15]
	  where [OWN_tank15_mass_TIMESTAMP]<= @date
	  order by [OWN_tank15_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='16') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank16_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '16'
		   ,[fill_percent] = [OWN_tank16_fill_percent_VALUE]
		   ,[level] = [OWN_tank16_level_VALUE]
		   ,[volume] = [OWN_tank16_volume_VALUE]
		   ,[mass] = [OWN_tank16_mass_VALUE]
		   ,[dens] = [OWN_tank16_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank16_volume_VALUE] > 0 THEN ([OWN_tank16_mass_VALUE]/[OWN_tank16_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank16_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank16_water_level_VALUE]
		   ,[water_volume] = [OWN_tank16_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT16]
	  where [OWN_tank16_mass_TIMESTAMP]<= @date
	  order by [OWN_tank16_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='17') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank17_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '17'
		   ,[fill_percent] = [OWN_tank17_fill_percent_VALUE]
		   ,[level] = [OWN_tank17_level_VALUE]
		   ,[volume] = [OWN_tank17_volume_VALUE]
		   ,[mass] = [OWN_tank17_mass_VALUE]
		   ,[dens] = [OWN_tank17_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank17_volume_VALUE] > 0 THEN ([OWN_tank17_mass_VALUE]/[OWN_tank17_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank17_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank17_water_level_VALUE]
		   ,[water_volume] = [OWN_tank17_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT17]
	  where [OWN_tank17_mass_TIMESTAMP]<= @date
	  order by [OWN_tank17_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='18') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank18_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '18'
		   ,[fill_percent] = [OWN_tank18_fill_percent_VALUE]
		   ,[level] = [OWN_tank18_level_VALUE]
		   ,[volume] = [OWN_tank18_volume_VALUE]
		   ,[mass] = [OWN_tank18_mass_VALUE]
		   ,[dens] = [OWN_tank18_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank18_volume_VALUE] > 0 THEN ([OWN_tank18_mass_VALUE]/[OWN_tank18_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank18_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank18_water_level_VALUE]
		   ,[water_volume] = [OWN_tank18_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT18]
	  where [OWN_tank18_mass_TIMESTAMP]<= @date
	  order by [OWN_tank18_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='19') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank19_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '19'
		   ,[fill_percent] = [OWN_tank19_fill_percent_VALUE]
		   ,[level] = [OWN_tank19_level_VALUE]
		   ,[volume] = [OWN_tank19_volume_VALUE]
		   ,[mass] = [OWN_tank19_mass_VALUE]
		   ,[dens] = [OWN_tank19_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank19_volume_VALUE] > 0 THEN ([OWN_tank19_mass_VALUE]/[OWN_tank19_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank19_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank19_water_level_VALUE]
		   ,[water_volume] = [OWN_tank19_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT19]
	  where [OWN_tank19_mass_TIMESTAMP]<= @date
	  order by [OWN_tank19_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='20') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank20_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '20'
		   ,[fill_percent] = [OWN_tank20_fill_percent_VALUE]
		   ,[level] = [OWN_tank20_level_VALUE]
		   ,[volume] = [OWN_tank20_volume_VALUE]
		   ,[mass] = [OWN_tank20_mass_VALUE]
		   ,[dens] = [OWN_tank20_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank20_volume_VALUE] > 0 THEN ([OWN_tank20_mass_VALUE]/[OWN_tank20_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank20_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank20_water_level_VALUE]
		   ,[water_volume] = [OWN_tank20_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT20]
	  where [OWN_tank20_mass_TIMESTAMP]<= @date
	  order by [OWN_tank20_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='21') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank21_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '21'
		   ,[fill_percent] = [OWN_tank21_fill_percent_VALUE]
		   ,[level] = [OWN_tank21_level_VALUE]
		   ,[volume] = [OWN_tank21_volume_VALUE]
		   ,[mass] = [OWN_tank21_mass_VALUE]
		   ,[dens] = [OWN_tank21_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank21_volume_VALUE] > 0 THEN ([OWN_tank21_mass_VALUE]/[OWN_tank21_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank21_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank21_water_level_VALUE]
		   ,[water_volume] = [OWN_tank21_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT21]
	  where [OWN_tank21_mass_TIMESTAMP]<= @date
	  order by [OWN_tank21_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='22') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank22_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '22'
		   ,[fill_percent] = [OWN_tank22_fill_percent_VALUE]
		   ,[level] = [OWN_tank22_level_VALUE]
		   ,[volume] = [OWN_tank22_volume_VALUE]
		   ,[mass] = [OWN_tank22_mass_VALUE]
		   ,[dens] = [OWN_tank22_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank22_volume_VALUE] > 0 THEN ([OWN_tank22_mass_VALUE]/[OWN_tank22_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank22_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank22_water_level_VALUE]
		   ,[water_volume] = [OWN_tank22_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT22]
	  where [OWN_tank22_mass_TIMESTAMP]<= @date
	  order by [OWN_tank22_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='23') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank23_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '23'
		   ,[fill_percent] = [OWN_tank23_fill_percent_VALUE]
		   ,[level] = [OWN_tank23_level_VALUE]
		   ,[volume] = [OWN_tank23_volume_VALUE]
		   ,[mass] = [OWN_tank23_mass_VALUE]
		   ,[dens] = [OWN_tank23_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank23_volume_VALUE] > 0 THEN ([OWN_tank23_mass_VALUE]/[OWN_tank23_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank23_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank23_water_level_VALUE]
		   ,[water_volume] = [OWN_tank23_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT23]
	  where [OWN_tank23_mass_TIMESTAMP]<= @date
	  order by [OWN_tank23_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='24') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank24_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '24'
		   ,[fill_percent] = [OWN_tank24_fill_percent_VALUE]
		   ,[level] = [OWN_tank24_level_VALUE]
		   ,[volume] = [OWN_tank24_volume_VALUE]
		   ,[mass] = [OWN_tank24_mass_VALUE]
		   ,[dens] = [OWN_tank24_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank24_volume_VALUE] > 0 THEN ([OWN_tank24_mass_VALUE]/[OWN_tank24_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank24_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank24_water_level_VALUE]
		   ,[water_volume] = [OWN_tank24_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT24]
	  where [OWN_tank24_mass_TIMESTAMP]<= @date
	  order by [OWN_tank24_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='25') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank25_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '25'
		   ,[fill_percent] = [OWN_tank25_fill_percent_VALUE]
		   ,[level] = [OWN_tank25_level_VALUE]
		   ,[volume] = [OWN_tank25_volume_VALUE]
		   ,[mass] = [OWN_tank25_mass_VALUE]
		   ,[dens] = [OWN_tank25_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank25_volume_VALUE] > 0 THEN ([OWN_tank25_mass_VALUE]/[OWN_tank25_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank25_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank25_water_level_VALUE]
		   ,[water_volume] = [OWN_tank25_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT25]
	  where [OWN_tank25_mass_TIMESTAMP]<= @date
	  order by [OWN_tank25_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='26') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank26_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '26'
		   ,[fill_percent] = [OWN_tank26_fill_percent_VALUE]
		   ,[level] = [OWN_tank26_level_VALUE]
		   ,[volume] = [OWN_tank26_volume_VALUE]
		   ,[mass] = [OWN_tank26_mass_VALUE]
		   ,[dens] = [OWN_tank26_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank26_volume_VALUE] > 0 THEN ([OWN_tank26_mass_VALUE]/[OWN_tank26_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank26_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank26_water_level_VALUE]
		   ,[water_volume] = [OWN_tank26_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT26]
	  where [OWN_tank26_mass_TIMESTAMP]<= @date
	  order by [OWN_tank26_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='27') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank27_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '27'
		   ,[fill_percent] = [OWN_tank27_fill_percent_VALUE]
		   ,[level] = [OWN_tank27_level_VALUE]
		   ,[volume] = [OWN_tank27_volume_VALUE]
		   ,[mass] = [OWN_tank27_mass_VALUE]
		   ,[dens] = [OWN_tank27_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank27_volume_VALUE] > 0 THEN ([OWN_tank27_mass_VALUE]/[OWN_tank27_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank27_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank27_water_level_VALUE]
		   ,[water_volume] = [OWN_tank27_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT27]
	  where [OWN_tank27_mass_TIMESTAMP]<= @date
	  order by [OWN_tank27_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='28') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank28_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '28'
		   ,[fill_percent] = [OWN_tank28_fill_percent_VALUE]
		   ,[level] = [OWN_tank28_level_VALUE]
		   ,[volume] = [OWN_tank28_volume_VALUE]
		   ,[mass] = [OWN_tank28_mass_VALUE]
		   ,[dens] = [OWN_tank28_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank28_volume_VALUE] > 0 THEN ([OWN_tank28_mass_VALUE]/[OWN_tank28_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank28_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank28_water_level_VALUE]
		   ,[water_volume] = [OWN_tank28_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT28]
	  where [OWN_tank28_mass_TIMESTAMP]<= @date
	  order by [OWN_tank28_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='29') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank29_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '29'
		   ,[fill_percent] = [OWN_tank29_fill_percent_VALUE]
		   ,[level] = [OWN_tank29_level_VALUE]
		   ,[volume] = [OWN_tank29_volume_VALUE]
		   ,[mass] = [OWN_tank29_mass_VALUE]
		   ,[dens] = [OWN_tank29_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank29_volume_VALUE] > 0 THEN ([OWN_tank29_mass_VALUE]/[OWN_tank29_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank29_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank29_water_level_VALUE]
		   ,[water_volume] = [OWN_tank29_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT29]
	  where [OWN_tank29_mass_TIMESTAMP]<= @date
	  order by [OWN_tank29_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='30') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank30_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '30'
		   ,[fill_percent] = [OWN_tank30_fill_percent_VALUE]
		   ,[level] = [OWN_tank30_level_VALUE]
		   ,[volume] = [OWN_tank30_volume_VALUE]
		   ,[mass] = [OWN_tank30_mass_VALUE]
		   ,[dens] = [OWN_tank30_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank30_volume_VALUE] > 0 THEN ([OWN_tank30_mass_VALUE]/[OWN_tank30_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank30_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank30_water_level_VALUE]
		   ,[water_volume] = [OWN_tank30_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT30]
	  where [OWN_tank30_mass_TIMESTAMP]<= @date
	  order by [OWN_tank30_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='31') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank31_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '31'
		   ,[fill_percent] = [OWN_tank31_fill_percent_VALUE]
		   ,[level] = [OWN_tank31_level_VALUE]
		   ,[volume] = [OWN_tank31_volume_VALUE]
		   ,[mass] = [OWN_tank31_mass_VALUE]
		   ,[dens] = [OWN_tank31_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank31_volume_VALUE] > 0 THEN ([OWN_tank31_mass_VALUE]/[OWN_tank31_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank31_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank31_water_level_VALUE]
		   ,[water_volume] = [OWN_tank31_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT31]
	  where [OWN_tank31_mass_TIMESTAMP]<= @date
	  order by [OWN_tank31_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='32') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank32_mass_TIMESTAMP]
		   ,[fuel_type] = 107000024
		   ,[tank] = '32'
		   ,[fill_percent] = [OWN_tank32_fill_percent_VALUE]
		   ,[level] = [OWN_tank32_level_VALUE]
		   ,[volume] = [OWN_tank32_volume_VALUE]
		   ,[mass] = [OWN_tank32_mass_VALUE]
		   ,[dens] = [OWN_tank32_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank32_volume_VALUE] > 0 THEN ([OWN_tank32_mass_VALUE]/[OWN_tank32_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank32_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank32_water_level_VALUE]
		   ,[water_volume] = [OWN_tank32_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT32]
	  where [OWN_tank32_mass_TIMESTAMP]<= @date
	  order by [OWN_tank32_mass_TIMESTAMP] desc
  end
    --************** КЕРОСИН *************************************
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='33') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank33_mass_TIMESTAMP]
		   ,[fuel_type] = 107000027
		   ,[tank] = '33'
		   ,[fill_percent] = [OWN_tank33_fill_percent_VALUE]
		   ,[level] = [OWN_tank33_level_VALUE]
		   ,[volume] = [OWN_tank33_volume_VALUE]
		   ,[mass] = [OWN_tank33_mass_VALUE]
		   ,[dens] = [OWN_tank33_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank33_volume_VALUE] > 0 THEN ([OWN_tank33_mass_VALUE]/[OWN_tank33_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank33_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank33_water_level_VALUE]
		   ,[water_volume] = [OWN_tank33_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT33]
	  where [OWN_tank33_mass_TIMESTAMP]<= @date
	  order by [OWN_tank33_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='38') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank38_mass_TIMESTAMP]
		   ,[fuel_type] = 107000027
		   ,[tank] = '38'
		   ,[fill_percent] = [OWN_tank38_fill_percent_VALUE]
		   ,[level] = [OWN_tank38_level_VALUE]
		   ,[volume] = [OWN_tank38_volume_VALUE]
		   ,[mass] = [OWN_tank38_mass_VALUE]
		   ,[dens] = [OWN_tank38_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank38_volume_VALUE] > 0 THEN ([OWN_tank38_mass_VALUE]/[OWN_tank38_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank38_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank38_water_level_VALUE]
		   ,[water_volume] = [OWN_tank38_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT38]
	  where [OWN_tank38_mass_TIMESTAMP]<= @date
	  order by [OWN_tank38_mass_TIMESTAMP] desc
  end
   	----------------------------------------------------------------------------------------------------------------------------------------------
	if (@tank='39') begin
		insert @tank_value
		SELECT TOP (1) 
		   [id]
		   ,[dt] = [OWN_tank39_mass_TIMESTAMP]
		   ,[fuel_type] = 107000027
		   ,[tank] = '39'
		   ,[fill_percent] = [OWN_tank39_fill_percent_VALUE]
		   ,[level] = [OWN_tank39_level_VALUE]
		   ,[volume] = [OWN_tank39_volume_VALUE]
		   ,[mass] = [OWN_tank39_mass_VALUE]
		   ,[dens] = [OWN_tank39_dens_VALUE]
		   ,[dens_avg] = CASE WHEN [OWN_tank39_volume_VALUE] > 0 THEN ([OWN_tank39_mass_VALUE]/[OWN_tank39_volume_VALUE]*1000.0) ELSE 0 END  
		   ,[temp] = [OWN_tank39_temp_VALUE]/10.0
		   ,[water_level] = [OWN_tank39_water_level_VALUE]
		   ,[water_volume] = [OWN_tank39_water_volume_VALUE]
	  FROM [ASU_AZSlogs].[dbo].[DT39]
	  where [OWN_tank39_mass_TIMESTAMP]<= @date
	  order by [OWN_tank39_mass_TIMESTAMP] desc
  end

  RETURN
 END
GO
