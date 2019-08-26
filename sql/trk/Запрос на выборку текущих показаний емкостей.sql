
--*************************************************************
--> Пересоздание временной таблицы текущих значений емкости на начало суток

if OBJECT_ID(N'TempDB.dbo.##CURRENT_TANKS_VALUE',N'U') is not null
begin
	drop table ##CURRENT_TANKS_VALUE
end
--> Создаем
CREATE TABLE ##CURRENT_TANKS_VALUE (
	[id] [int] IDENTITY(1,1) NOT NULL,
	[typefuel] [int] NOT NULL,
	[tank] [nvarchar](3) NOT NULL,
	[timestamp] [datetime] NULL,
	[fill_percent] [float] NULL,
	[level] [float] NULL,
	[volume] [float] NULL,
	[dens] [float] NULL,
	[mass] [float] NULL,
	[temp] [float] NULL,
	[water_leve] [float] NULL,
	[water_volume] [float] NULL,
 CONSTRAINT [PK_current_tanks] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
--************************************************************
-- Добавим A92
--> b02
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1) [typefuel] = 107000022
				  ,[tank] = N'b02'
				  ,[timestamp] = [OWN_tankB2_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tankB2_fill_percent_VALUE]
				  ,[level] = [OWN_tankB2_level_VALUE]	 
				  ,[volume] = [OWN_tankB2_volume_VALUE]	  
				  ,[dens] = [OWN_tankB2_dens_VALUE]
				  ,[mass] = [OWN_tankB2_mass_VALUE]
				  ,[temp] = [OWN_tankB2_temp_VALUE]
				  ,[water_leve] = [OWN_tankB2_water_level_VALUE]
				  ,[water_volume] = [OWN_tankB2_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[BT2] 
			  order by  [id] desc
--> b03
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1) [typefuel] = 107000022
				  ,[tank] = N'b03'
				  ,[timestamp] = [OWN_tankB3_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tankB3_fill_percent_VALUE]
				  ,[level] = [OWN_tankB3_level_VALUE]	 
				  ,[volume] = [OWN_tankB3_volume_VALUE]	  
				  ,[dens] = [OWN_tankB3_dens_VALUE]
				  ,[mass] = [OWN_tankB3_mass_VALUE]
				  ,[temp] = [OWN_tankB3_temp_VALUE]
				  ,[water_leve] = [OWN_tankB3_water_level_VALUE]
				  ,[water_volume] = [OWN_tankB3_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[BT3] 
			  order by [id] desc
--> b09
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1) [typefuel] = 107000022
				  ,[tank] = N'b09'
				  ,[timestamp] = [OWN_tankB9_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tankB9_fill_percent_VALUE]
				  ,[level] = [OWN_tankB9_level_VALUE]	 
				  ,[volume] = [OWN_tankB9_volume_VALUE]	  
				  ,[dens] = [OWN_tankB9_dens_VALUE]
				  ,[mass] = [OWN_tankB9_mass_VALUE]
				  ,[temp] = [OWN_tankB9_temp_VALUE]
				  ,[water_leve] = [OWN_tankB9_water_level_VALUE]
				  ,[water_volume] = [OWN_tankB9_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[BT9] 
			  order by [id] desc
--> b11
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1) [typefuel] = 107000022
				  ,[tank] = N'b11'
				  ,[timestamp] = [OWN_tankB11_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tankB11_fill_percent_VALUE]
				  ,[level] = [OWN_tankB11_level_VALUE]	 
				  ,[volume] = [OWN_tankB11_volume_VALUE]	  
				  ,[dens] = [OWN_tankB11_dens_VALUE]
				  ,[mass] = [OWN_tankB11_mass_VALUE]
				  ,[temp] = [OWN_tankB11_temp_VALUE]
				  ,[water_leve] = [OWN_tankB11_water_level_VALUE]
				  ,[water_volume] = [OWN_tankB11_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[BT11] 
			  order by [id] desc
--> b16
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000022
				  ,[tank] = N'b16'
				  ,[timestamp] = [OWN_tankB16_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tankB16_fill_percent_VALUE]
				  ,[level] = [OWN_tankB16_level_VALUE]	 
				  ,[volume] = [OWN_tankB16_volume_VALUE]	  
				  ,[dens] = [OWN_tankB16_dens_VALUE]
				  ,[mass] = [OWN_tankB16_mass_VALUE]
				  ,[temp] = [OWN_tankB16_temp_VALUE]
				  ,[water_leve] = [OWN_tankB16_water_level_VALUE]
				  ,[water_volume] = [OWN_tankB16_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[BT16] 
			  order by [id] desc
--************************************************************
-- Добавим A92
--> b17
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000023
				  ,[tank] = N'B17'
				  ,[timestamp] = [OWN_tankB17_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tankB17_fill_percent_VALUE]
				  ,[level] = [OWN_tankB17_level_VALUE]	 
				  ,[volume] = [OWN_tankB17_volume_VALUE]	  
				  ,[dens] = [OWN_tankB17_dens_VALUE]
				  ,[mass] = [OWN_tankB17_mass_VALUE]
				  ,[temp] = [OWN_tankB17_temp_VALUE]
				  ,[water_leve] = [OWN_tankB17_water_level_VALUE]
				  ,[water_volume] = [OWN_tankB17_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[BT17] 
			  order by [id] desc
--> B18
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000023
				  ,[tank] = N'B18'
				  ,[timestamp] = [OWN_tankB18_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tankB18_fill_percent_VALUE]
				  ,[level] = [OWN_tankB18_level_VALUE]	 
				  ,[volume] = [OWN_tankB18_volume_VALUE]	  
				  ,[dens] = [OWN_tankB18_dens_VALUE]
				  ,[mass] = [OWN_tankB18_mass_VALUE]
				  ,[temp] = [OWN_tankB18_temp_VALUE]
				  ,[water_leve] = [OWN_tankB18_water_level_VALUE]
				  ,[water_volume] = [OWN_tankB18_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[BT18] 
			  order by [id] desc
--> B19
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000023
				  ,[tank] = N'B19'
				  ,[timestamp] = [OWN_tankB19_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tankB19_fill_percent_VALUE]
				  ,[level] = [OWN_tankB19_level_VALUE]	 
				  ,[volume] = [OWN_tankB19_volume_VALUE]	  
				  ,[dens] = [OWN_tankB19_dens_VALUE]
				  ,[mass] = [OWN_tankB19_mass_VALUE]
				  ,[temp] = [OWN_tankB19_temp_VALUE]
				  ,[water_leve] = [OWN_tankB19_water_level_VALUE]
				  ,[water_volume] = [OWN_tankB19_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[BT19] 
			  order by [id] desc
--> B20
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000023
				  ,[tank] = N'B20'
				  ,[timestamp] = [OWN_tankB20_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tankB20_fill_percent_VALUE]
				  ,[level] = [OWN_tankB20_level_VALUE]	 
				  ,[volume] = [OWN_tankB20_volume_VALUE]	  
				  ,[dens] = [OWN_tankB20_dens_VALUE]
				  ,[mass] = [OWN_tankB20_mass_VALUE]
				  ,[temp] = [OWN_tankB20_temp_VALUE]
				  ,[water_leve] = [OWN_tankB20_water_level_VALUE]
				  ,[water_volume] = [OWN_tankB20_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[BT20] 
			  order by [id] desc
--************************************************************
-- Добавим Конфискат
--> B13
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000022
				  ,[tank] = N'B13'
				  ,[timestamp] = [OWN_tankB13_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tankB13_fill_percent_VALUE]
				  ,[level] = [OWN_tankB13_level_VALUE]	 
				  ,[volume] = [OWN_tankB13_volume_VALUE]	  
				  ,[dens] = [OWN_tankB13_dens_VALUE]
				  ,[mass] = [OWN_tankB13_mass_VALUE]
				  ,[temp] = [OWN_tankB13_temp_VALUE]
				  ,[water_leve] = [OWN_tankB13_water_level_VALUE]
				  ,[water_volume] = [OWN_tankB13_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[BT13] 
			  order by [id] desc
--************************************************************
-- Добавим ДТ
--> 01
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'01'
				  ,[timestamp] = [OWN_tank01_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank01_fill_percent_VALUE]
				  ,[level] = [OWN_tank01_level_VALUE]	 
				  ,[volume] = [OWN_tank01_volume_VALUE]	  
				  ,[dens] = [OWN_tank01_dens_VALUE]
				  ,[mass] = [OWN_tank01_mass_VALUE]
				  ,[temp] = [OWN_tank01_temp_VALUE]
				  ,[water_leve] = [OWN_tank01_water_level_VALUE]
				  ,[water_volume] = [OWN_tank01_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT01] 
			  order by [id] desc
--> 02
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'02'
				  ,[timestamp] = [OWN_tank02_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank02_fill_percent_VALUE]
				  ,[level] = [OWN_tank02_level_VALUE]	 
				  ,[volume] = [OWN_tank02_volume_VALUE]	  
				  ,[dens] = [OWN_tank02_dens_VALUE]
				  ,[mass] = [OWN_tank02_mass_VALUE]
				  ,[temp] = [OWN_tank02_temp_VALUE]
				  ,[water_leve] = [OWN_tank02_water_level_VALUE]
				  ,[water_volume] = [OWN_tank02_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT02] 
			  order by [id] desc
--> 03
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'03'
				  ,[timestamp] = [OWN_tank03_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank03_fill_percent_VALUE]
				  ,[level] = [OWN_tank03_level_VALUE]	 
				  ,[volume] = [OWN_tank03_volume_VALUE]	  
				  ,[dens] = [OWN_tank03_dens_VALUE]
				  ,[mass] = [OWN_tank03_mass_VALUE]
				  ,[temp] = [OWN_tank03_temp_VALUE]
				  ,[water_leve] = [OWN_tank03_water_level_VALUE]
				  ,[water_volume] = [OWN_tank03_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT03] 
			  order by [id] desc
--> 04
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'04'
				  ,[timestamp] = [OWN_tank04_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank04_fill_percent_VALUE]
				  ,[level] = [OWN_tank04_level_VALUE]	 
				  ,[volume] = [OWN_tank04_volume_VALUE]	  
				  ,[dens] = [OWN_tank04_dens_VALUE]
				  ,[mass] = [OWN_tank04_mass_VALUE]
				  ,[temp] = [OWN_tank04_temp_VALUE]
				  ,[water_leve] = [OWN_tank04_water_level_VALUE]
				  ,[water_volume] = [OWN_tank04_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT04] 
			  order by [id] desc
--> 05
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'05'
				  ,[timestamp] = [OWN_tank05_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank05_fill_percent_VALUE]
				  ,[level] = [OWN_tank05_level_VALUE]	 
				  ,[volume] = [OWN_tank05_volume_VALUE]	  
				  ,[dens] = [OWN_tank05_dens_VALUE]
				  ,[mass] = [OWN_tank05_mass_VALUE]
				  ,[temp] = [OWN_tank05_temp_VALUE]
				  ,[water_leve] = [OWN_tank05_water_level_VALUE]
				  ,[water_volume] = [OWN_tank05_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT05] 
			  order by [id] desc
--> 06
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'06'
				  ,[timestamp] = [OWN_tank06_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank06_fill_percent_VALUE]
				  ,[level] = [OWN_tank06_level_VALUE]	 
				  ,[volume] = [OWN_tank06_volume_VALUE]	  
				  ,[dens] = [OWN_tank06_dens_VALUE]
				  ,[mass] = [OWN_tank06_mass_VALUE]
				  ,[temp] = [OWN_tank06_temp_VALUE]
				  ,[water_leve] = [OWN_tank06_water_level_VALUE]
				  ,[water_volume] = [OWN_tank06_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT06] 
			  order by [id] desc
--> 07
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'07'
				  ,[timestamp] = [OWN_tank07_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank07_fill_percent_VALUE]
				  ,[level] = [OWN_tank07_level_VALUE]	 
				  ,[volume] = [OWN_tank07_volume_VALUE]	  
				  ,[dens] = [OWN_tank07_dens_VALUE]
				  ,[mass] = [OWN_tank07_mass_VALUE]
				  ,[temp] = [OWN_tank07_temp_VALUE]
				  ,[water_leve] = [OWN_tank07_water_level_VALUE]
				  ,[water_volume] = [OWN_tank07_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT07] 
			  order by [id] desc
--> 08
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'08'
				  ,[timestamp] = [OWN_tank08_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank08_fill_percent_VALUE]
				  ,[level] = [OWN_tank08_level_VALUE]	 
				  ,[volume] = [OWN_tank08_volume_VALUE]	  
				  ,[dens] = [OWN_tank08_dens_VALUE]
				  ,[mass] = [OWN_tank08_mass_VALUE]
				  ,[temp] = [OWN_tank08_temp_VALUE]
				  ,[water_leve] = [OWN_tank08_water_level_VALUE]
				  ,[water_volume] = [OWN_tank08_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT08] 
			  order by [id] desc
--> 09
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'09'
				  ,[timestamp] = [OWN_tank09_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank09_fill_percent_VALUE]
				  ,[level] = [OWN_tank09_level_VALUE]	 
				  ,[volume] = [OWN_tank09_volume_VALUE]	  
				  ,[dens] = [OWN_tank09_dens_VALUE]
				  ,[mass] = [OWN_tank09_mass_VALUE]
				  ,[temp] = [OWN_tank09_temp_VALUE]
				  ,[water_leve] = [OWN_tank09_water_level_VALUE]
				  ,[water_volume] = [OWN_tank09_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT09] 
			  order by [id] desc
--> 10
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'10'
				  ,[timestamp] = [OWN_tank10_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank10_fill_percent_VALUE]
				  ,[level] = [OWN_tank10_level_VALUE]	 
				  ,[volume] = [OWN_tank10_volume_VALUE]	  
				  ,[dens] = [OWN_tank10_dens_VALUE]
				  ,[mass] = [OWN_tank10_mass_VALUE]
				  ,[temp] = [OWN_tank10_temp_VALUE]
				  ,[water_leve] = [OWN_tank10_water_level_VALUE]
				  ,[water_volume] = [OWN_tank10_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT10] 
			  order by [id] desc
--> 11
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 117000024
				  ,[tank] = N'11'
				  ,[timestamp] = [OWN_tank11_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank11_fill_percent_VALUE]
				  ,[level] = [OWN_tank11_level_VALUE]	 
				  ,[volume] = [OWN_tank11_volume_VALUE]	  
				  ,[dens] = [OWN_tank11_dens_VALUE]
				  ,[mass] = [OWN_tank11_mass_VALUE]
				  ,[temp] = [OWN_tank11_temp_VALUE]
				  ,[water_leve] = [OWN_tank11_water_level_VALUE]
				  ,[water_volume] = [OWN_tank11_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT11] 
			  order by [id] desc
--> 12
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'12'
				  ,[timestamp] = [OWN_tank12_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank12_fill_percent_VALUE]
				  ,[level] = [OWN_tank12_level_VALUE]	 
				  ,[volume] = [OWN_tank12_volume_VALUE]	  
				  ,[dens] = [OWN_tank12_dens_VALUE]
				  ,[mass] = [OWN_tank12_mass_VALUE]
				  ,[temp] = [OWN_tank12_temp_VALUE]
				  ,[water_leve] = [OWN_tank12_water_level_VALUE]
				  ,[water_volume] = [OWN_tank12_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT12] 
			  order by [id] desc
--> 13
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'13'
				  ,[timestamp] = [OWN_tank13_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank13_fill_percent_VALUE]
				  ,[level] = [OWN_tank13_level_VALUE]	 
				  ,[volume] = [OWN_tank13_volume_VALUE]	  
				  ,[dens] = [OWN_tank13_dens_VALUE]
				  ,[mass] = [OWN_tank13_mass_VALUE]
				  ,[temp] = [OWN_tank13_temp_VALUE]
				  ,[water_leve] = [OWN_tank13_water_level_VALUE]
				  ,[water_volume] = [OWN_tank13_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT13] 
			  order by [id] desc
--> 14
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'14'
				  ,[timestamp] = [OWN_tank14_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank14_fill_percent_VALUE]
				  ,[level] = [OWN_tank14_level_VALUE]	 
				  ,[volume] = [OWN_tank14_volume_VALUE]	  
				  ,[dens] = [OWN_tank14_dens_VALUE]
				  ,[mass] = [OWN_tank14_mass_VALUE]
				  ,[temp] = [OWN_tank14_temp_VALUE]
				  ,[water_leve] = [OWN_tank14_water_level_VALUE]
				  ,[water_volume] = [OWN_tank14_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT14] 
			  order by [id] desc
--> 15
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'15'
				  ,[timestamp] = [OWN_tank15_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank15_fill_percent_VALUE]
				  ,[level] = [OWN_tank15_level_VALUE]	 
				  ,[volume] = [OWN_tank15_volume_VALUE]	  
				  ,[dens] = [OWN_tank15_dens_VALUE]
				  ,[mass] = [OWN_tank15_mass_VALUE]
				  ,[temp] = [OWN_tank15_temp_VALUE]
				  ,[water_leve] = [OWN_tank15_water_level_VALUE]
				  ,[water_volume] = [OWN_tank15_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT15] 
			  order by [id] desc
--> 16
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'16'
				  ,[timestamp] = [OWN_tank16_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank16_fill_percent_VALUE]
				  ,[level] = [OWN_tank16_level_VALUE]	 
				  ,[volume] = [OWN_tank16_volume_VALUE]	  
				  ,[dens] = [OWN_tank16_dens_VALUE]
				  ,[mass] = [OWN_tank16_mass_VALUE]
				  ,[temp] = [OWN_tank16_temp_VALUE]
				  ,[water_leve] = [OWN_tank16_water_level_VALUE]
				  ,[water_volume] = [OWN_tank16_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT16] 
			  order by [id] desc
--> 17
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'17'
				  ,[timestamp] = [OWN_tank17_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank17_fill_percent_VALUE]
				  ,[level] = [OWN_tank17_level_VALUE]	 
				  ,[volume] = [OWN_tank17_volume_VALUE]	  
				  ,[dens] = [OWN_tank17_dens_VALUE]
				  ,[mass] = [OWN_tank17_mass_VALUE]
				  ,[temp] = [OWN_tank17_temp_VALUE]
				  ,[water_leve] = [OWN_tank17_water_level_VALUE]
				  ,[water_volume] = [OWN_tank17_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT17] 
			  order by [id] desc
--> 18
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'18'
				  ,[timestamp] = [OWN_tank18_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank18_fill_percent_VALUE]
				  ,[level] = [OWN_tank18_level_VALUE]	 
				  ,[volume] = [OWN_tank18_volume_VALUE]	  
				  ,[dens] = [OWN_tank18_dens_VALUE]
				  ,[mass] = [OWN_tank18_mass_VALUE]
				  ,[temp] = [OWN_tank18_temp_VALUE]
				  ,[water_leve] = [OWN_tank18_water_level_VALUE]
				  ,[water_volume] = [OWN_tank18_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT18] 
			  order by [id] desc
--> 19
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'19'
				  ,[timestamp] = [OWN_tank19_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank19_fill_percent_VALUE]
				  ,[level] = [OWN_tank19_level_VALUE]	 
				  ,[volume] = [OWN_tank19_volume_VALUE]	  
				  ,[dens] = [OWN_tank19_dens_VALUE]
				  ,[mass] = [OWN_tank19_mass_VALUE]
				  ,[temp] = [OWN_tank19_temp_VALUE]
				  ,[water_leve] = [OWN_tank19_water_level_VALUE]
				  ,[water_volume] = [OWN_tank19_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT19] 
			  order by [id] desc
--> 20
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'20'
				  ,[timestamp] = [OWN_tank20_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank20_fill_percent_VALUE]
				  ,[level] = [OWN_tank20_level_VALUE]	 
				  ,[volume] = [OWN_tank20_volume_VALUE]	  
				  ,[dens] = [OWN_tank20_dens_VALUE]
				  ,[mass] = [OWN_tank20_mass_VALUE]
				  ,[temp] = [OWN_tank20_temp_VALUE]
				  ,[water_leve] = [OWN_tank20_water_level_VALUE]
				  ,[water_volume] = [OWN_tank20_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT20] 
			  order by [id] desc
--> 21
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'21'
				  ,[timestamp] = [OWN_tank21_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank21_fill_percent_VALUE]
				  ,[level] = [OWN_tank21_level_VALUE]	 
				  ,[volume] = [OWN_tank21_volume_VALUE]	  
				  ,[dens] = [OWN_tank21_dens_VALUE]
				  ,[mass] = [OWN_tank21_mass_VALUE]
				  ,[temp] = [OWN_tank21_temp_VALUE]
				  ,[water_leve] = [OWN_tank21_water_level_VALUE]
				  ,[water_volume] = [OWN_tank21_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT21] 
			  order by [id] desc
--> 22
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'22'
				  ,[timestamp] = [OWN_tank22_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank22_fill_percent_VALUE]
				  ,[level] = [OWN_tank22_level_VALUE]	 
				  ,[volume] = [OWN_tank22_volume_VALUE]	  
				  ,[dens] = [OWN_tank22_dens_VALUE]
				  ,[mass] = [OWN_tank22_mass_VALUE]
				  ,[temp] = [OWN_tank22_temp_VALUE]
				  ,[water_leve] = [OWN_tank22_water_level_VALUE]
				  ,[water_volume] = [OWN_tank22_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT22] 
			  order by [id] desc
--> 23
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'23'
				  ,[timestamp] = [OWN_tank23_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank23_fill_percent_VALUE]
				  ,[level] = [OWN_tank23_level_VALUE]	 
				  ,[volume] = [OWN_tank23_volume_VALUE]	  
				  ,[dens] = [OWN_tank23_dens_VALUE]
				  ,[mass] = [OWN_tank23_mass_VALUE]
				  ,[temp] = [OWN_tank23_temp_VALUE]
				  ,[water_leve] = [OWN_tank23_water_level_VALUE]
				  ,[water_volume] = [OWN_tank23_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT23] 
			  order by [id] desc
--> 24
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'24'
				  ,[timestamp] = [OWN_tank24_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank24_fill_percent_VALUE]
				  ,[level] = [OWN_tank24_level_VALUE]	 
				  ,[volume] = [OWN_tank24_volume_VALUE]	  
				  ,[dens] = [OWN_tank24_dens_VALUE]
				  ,[mass] = [OWN_tank24_mass_VALUE]
				  ,[temp] = [OWN_tank24_temp_VALUE]
				  ,[water_leve] = [OWN_tank24_water_level_VALUE]
				  ,[water_volume] = [OWN_tank24_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT24] 
			  order by [id] desc
--> 25
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'25'
				  ,[timestamp] = [OWN_tank25_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank25_fill_percent_VALUE]
				  ,[level] = [OWN_tank25_level_VALUE]	 
				  ,[volume] = [OWN_tank25_volume_VALUE]	  
				  ,[dens] = [OWN_tank25_dens_VALUE]
				  ,[mass] = [OWN_tank25_mass_VALUE]
				  ,[temp] = [OWN_tank25_temp_VALUE]
				  ,[water_leve] = [OWN_tank25_water_level_VALUE]
				  ,[water_volume] = [OWN_tank25_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT25] 
			  order by [id] desc
--> 26
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'26'
				  ,[timestamp] = [OWN_tank26_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank26_fill_percent_VALUE]
				  ,[level] = [OWN_tank26_level_VALUE]	 
				  ,[volume] = [OWN_tank26_volume_VALUE]	  
				  ,[dens] = [OWN_tank26_dens_VALUE]
				  ,[mass] = [OWN_tank26_mass_VALUE]
				  ,[temp] = [OWN_tank26_temp_VALUE]
				  ,[water_leve] = [OWN_tank26_water_level_VALUE]
				  ,[water_volume] = [OWN_tank26_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT26] 
			  order by [id] desc
--> 27
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'27'
				  ,[timestamp] = [OWN_tank27_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank27_fill_percent_VALUE]
				  ,[level] = [OWN_tank27_level_VALUE]	 
				  ,[volume] = [OWN_tank27_volume_VALUE]	  
				  ,[dens] = [OWN_tank27_dens_VALUE]
				  ,[mass] = [OWN_tank27_mass_VALUE]
				  ,[temp] = [OWN_tank27_temp_VALUE]
				  ,[water_leve] = [OWN_tank27_water_level_VALUE]
				  ,[water_volume] = [OWN_tank27_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT27] 
			  order by [id] desc
--> 28
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'28'
				  ,[timestamp] = [OWN_tank28_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank28_fill_percent_VALUE]
				  ,[level] = [OWN_tank28_level_VALUE]	 
				  ,[volume] = [OWN_tank28_volume_VALUE]	  
				  ,[dens] = [OWN_tank28_dens_VALUE]
				  ,[mass] = [OWN_tank28_mass_VALUE]
				  ,[temp] = [OWN_tank28_temp_VALUE]
				  ,[water_leve] = [OWN_tank28_water_level_VALUE]
				  ,[water_volume] = [OWN_tank28_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT28] 
			  order by [id] desc
--> 29
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'29'
				  ,[timestamp] = [OWN_tank29_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank29_fill_percent_VALUE]
				  ,[level] = [OWN_tank29_level_VALUE]	 
				  ,[volume] = [OWN_tank29_volume_VALUE]	  
				  ,[dens] = [OWN_tank29_dens_VALUE]
				  ,[mass] = [OWN_tank29_mass_VALUE]
				  ,[temp] = [OWN_tank29_temp_VALUE]
				  ,[water_leve] = [OWN_tank29_water_level_VALUE]
				  ,[water_volume] = [OWN_tank29_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT29] 
			  order by [id] desc
--> 30
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'30'
				  ,[timestamp] = [OWN_tank30_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank30_fill_percent_VALUE]
				  ,[level] = [OWN_tank30_level_VALUE]	 
				  ,[volume] = [OWN_tank30_volume_VALUE]	  
				  ,[dens] = [OWN_tank30_dens_VALUE]
				  ,[mass] = [OWN_tank30_mass_VALUE]
				  ,[temp] = [OWN_tank30_temp_VALUE]
				  ,[water_leve] = [OWN_tank30_water_level_VALUE]
				  ,[water_volume] = [OWN_tank30_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT30] 
			  order by [id] desc
--> 31
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'31'
				  ,[timestamp] = [OWN_tank31_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank31_fill_percent_VALUE]
				  ,[level] = [OWN_tank31_level_VALUE]	 
				  ,[volume] = [OWN_tank31_volume_VALUE]	  
				  ,[dens] = [OWN_tank31_dens_VALUE]
				  ,[mass] = [OWN_tank31_mass_VALUE]
				  ,[temp] = [OWN_tank31_temp_VALUE]
				  ,[water_leve] = [OWN_tank31_water_level_VALUE]
				  ,[water_volume] = [OWN_tank31_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT31] 
			  order by [id] desc
--> 32
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000024
				  ,[tank] = N'32'
				  ,[timestamp] = [OWN_tank32_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank32_fill_percent_VALUE]
				  ,[level] = [OWN_tank32_level_VALUE]	 
				  ,[volume] = [OWN_tank32_volume_VALUE]	  
				  ,[dens] = [OWN_tank32_dens_VALUE]
				  ,[mass] = [OWN_tank32_mass_VALUE]
				  ,[temp] = [OWN_tank32_temp_VALUE]
				  ,[water_leve] = [OWN_tank32_water_level_VALUE]
				  ,[water_volume] = [OWN_tank32_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT32] 
			  order by [id] desc
--************************************************************
-- Добавим Керосин
--> 33
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000027
				  ,[tank] = N'33'
				  ,[timestamp] = [OWN_tank33_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank33_fill_percent_VALUE]
				  ,[level] = [OWN_tank33_level_VALUE]	 
				  ,[volume] = [OWN_tank33_volume_VALUE]	  
				  ,[dens] = [OWN_tank33_dens_VALUE]
				  ,[mass] = [OWN_tank33_mass_VALUE]
				  ,[temp] = [OWN_tank33_temp_VALUE]
				  ,[water_leve] = [OWN_tank33_water_level_VALUE]
				  ,[water_volume] = [OWN_tank33_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT33] 
			  order by [id] desc
--> 38
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000027
				  ,[tank] = N'38'
				  ,[timestamp] = [OWN_tank38_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank38_fill_percent_VALUE]
				  ,[level] = [OWN_tank38_level_VALUE]	 
				  ,[volume] = [OWN_tank38_volume_VALUE]	  
				  ,[dens] = [OWN_tank38_dens_VALUE]
				  ,[mass] = [OWN_tank38_mass_VALUE]
				  ,[temp] = [OWN_tank38_temp_VALUE]
				  ,[water_leve] = [OWN_tank38_water_level_VALUE]
				  ,[water_volume] = [OWN_tank38_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT38] 
			  order by [id] desc
--> 39
INSERT INTO ##CURRENT_TANKS_VALUE
           ([typefuel]
           ,[tank]
           ,[timestamp]
           ,[fill_percent]
           ,[level]
           ,[volume]
           ,[dens]
           ,[mass]
           ,[temp]
           ,[water_leve]
           ,[water_volume])
			SELECT TOP (1)  [typefuel] = 107000027
				  ,[tank] = N'39'
				  ,[timestamp] = [OWN_tank39_dens_TIMESTAMP]  
				  ,[fill_percent] = [OWN_tank39_fill_percent_VALUE]
				  ,[level] = [OWN_tank39_level_VALUE]	 
				  ,[volume] = [OWN_tank39_volume_VALUE]	  
				  ,[dens] = [OWN_tank39_dens_VALUE]
				  ,[mass] = [OWN_tank39_mass_VALUE]
				  ,[temp] = [OWN_tank39_temp_VALUE]
				  ,[water_leve] = [OWN_tank39_water_level_VALUE]
				  ,[water_volume] = [OWN_tank39_water_volume_VALUE]
			  FROM [ASU_AZSlogs].[dbo].[DT39] 
			  order by [id] desc

select * from ##CURRENT_TANKS_VALUE