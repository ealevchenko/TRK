use [ASU_AZSlogs]

declare @date datetime

set @date = DATEADD(MONTH,-3,GETDATE())

DELETE FROM [dbo].[BT11]
      WHERE [OWN_tankB11_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[BT13]
      WHERE [OWN_tankB13_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[BT16]
      WHERE [OWN_tankB16_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[BT17]
      WHERE [OWN_tankB17_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[BT18]
      WHERE [OWN_tankB18_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[BT19]
      WHERE [OWN_tankB19_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[BT20]
      WHERE [OWN_tankB20_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[BT2]
      WHERE [OWN_tankB2_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[BT3]
      WHERE [OWN_tankB3_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[BT9]
      WHERE [OWN_tankB9_dens_TIMESTAMP]<@date
      DELETE FROM [dbo].[DT01]
      WHERE [OWN_tank01_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT02]
      WHERE [OWN_tank02_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT03]
      WHERE [OWN_tank03_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT04]
      WHERE [OWN_tank04_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT05]
      WHERE [OWN_tank05_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT06]
      WHERE [OWN_tank06_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT07]
      WHERE [OWN_tank07_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT08]
      WHERE [OWN_tank08_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT09]
      WHERE [OWN_tank09_dens_TIMESTAMP]<@date
	DELETE FROM [dbo].[DT10]
      WHERE [OWN_tank10_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT11]
      WHERE [OWN_tank11_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT12]
      WHERE [OWN_tank12_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT13]
      WHERE [OWN_tank13_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT14]
      WHERE [OWN_tank14_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT15]
      WHERE [OWN_tank15_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT16]
      WHERE [OWN_tank16_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT17]
      WHERE [OWN_tank17_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT18]
      WHERE [OWN_tank18_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT19]
      WHERE [OWN_tank19_dens_TIMESTAMP]<@date
	DELETE FROM [dbo].[DT20]
      WHERE [OWN_tank20_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT21]
      WHERE [OWN_tank21_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT22]
      WHERE [OWN_tank22_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT23]
      WHERE [OWN_tank23_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT24]
      WHERE [OWN_tank24_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT25]
      WHERE [OWN_tank25_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT26]
      WHERE [OWN_tank26_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT27]
      WHERE [OWN_tank27_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT28]
      WHERE [OWN_tank28_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT29]
      WHERE [OWN_tank29_dens_TIMESTAMP]<@date
	DELETE FROM [dbo].[DT30]
      WHERE [OWN_tank30_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT31]
      WHERE [OWN_tank31_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT32]
      WHERE [OWN_tank32_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT33]
      WHERE [OWN_tank33_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT38]
      WHERE [OWN_tank38_dens_TIMESTAMP]<@date
	  DELETE FROM [dbo].[DT39]
      WHERE [OWN_tank39_dens_TIMESTAMP]<@date
GO