USE [ASU_AZSlogs]
GO
/****** Object:  Table [dbo].[DT31]    Script Date: 20.10.2019 16:20:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DT31](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[OWN_tank31_dens_NUMERICID] [int] NULL,
	[OWN_tank31_dens_VALUE] [float] NULL,
	[OWN_tank31_dens_TIMESTAMP] [datetime] NULL,
	[OWN_tank31_dens_QUALITY] [smallint] NULL,
	[OWN_tank31_fill_percent_NUMERICID] [int] NULL,
	[OWN_tank31_fill_percent_VALUE] [float] NULL,
	[OWN_tank31_fill_percent_TIMESTAMP] [datetime] NULL,
	[OWN_tank31_fill_percent_QUALITY] [smallint] NULL,
	[OWN_tank31_level_NUMERICID] [int] NULL,
	[OWN_tank31_level_VALUE] [int] NULL,
	[OWN_tank31_level_TIMESTAMP] [datetime] NULL,
	[OWN_tank31_level_QUALITY] [smallint] NULL,
	[OWN_tank31_mass_NUMERICID] [int] NULL,
	[OWN_tank31_mass_VALUE] [float] NULL,
	[OWN_tank31_mass_TIMESTAMP] [datetime] NULL,
	[OWN_tank31_mass_QUALITY] [smallint] NULL,
	[OWN_tank31_temp_NUMERICID] [int] NULL,
	[OWN_tank31_temp_VALUE] [int] NULL,
	[OWN_tank31_temp_TIMESTAMP] [datetime] NULL,
	[OWN_tank31_temp_QUALITY] [smallint] NULL,
	[OWN_tank31_volume_NUMERICID] [int] NULL,
	[OWN_tank31_volume_VALUE] [int] NULL,
	[OWN_tank31_volume_TIMESTAMP] [datetime] NULL,
	[OWN_tank31_volume_QUALITY] [smallint] NULL,
	[OWN_tank31_water_level_NUMERICID] [int] NULL,
	[OWN_tank31_water_level_VALUE] [int] NULL,
	[OWN_tank31_water_level_TIMESTAMP] [datetime] NULL,
	[OWN_tank31_water_level_QUALITY] [smallint] NULL,
	[OWN_tank31_water_volume_NUMERICID] [int] NULL,
	[OWN_tank31_water_volume_VALUE] [int] NULL,
	[OWN_tank31_water_volume_TIMESTAMP] [datetime] NULL,
	[OWN_tank31_water_volume_QUALITY] [smallint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]
GO
