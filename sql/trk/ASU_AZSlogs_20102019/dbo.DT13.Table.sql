USE [ASU_AZSlogs]
GO
/****** Object:  Table [dbo].[DT13]    Script Date: 20.10.2019 16:20:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DT13](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[OWN_tank13_dens_NUMERICID] [int] NULL,
	[OWN_tank13_dens_VALUE] [float] NULL,
	[OWN_tank13_dens_TIMESTAMP] [datetime] NULL,
	[OWN_tank13_dens_QUALITY] [smallint] NULL,
	[OWN_tank13_fill_percent_NUMERICID] [int] NULL,
	[OWN_tank13_fill_percent_VALUE] [float] NULL,
	[OWN_tank13_fill_percent_TIMESTAMP] [datetime] NULL,
	[OWN_tank13_fill_percent_QUALITY] [smallint] NULL,
	[OWN_tank13_level_NUMERICID] [int] NULL,
	[OWN_tank13_level_VALUE] [int] NULL,
	[OWN_tank13_level_TIMESTAMP] [datetime] NULL,
	[OWN_tank13_level_QUALITY] [smallint] NULL,
	[OWN_tank13_mass_NUMERICID] [int] NULL,
	[OWN_tank13_mass_VALUE] [float] NULL,
	[OWN_tank13_mass_TIMESTAMP] [datetime] NULL,
	[OWN_tank13_mass_QUALITY] [smallint] NULL,
	[OWN_tank13_temp_NUMERICID] [int] NULL,
	[OWN_tank13_temp_VALUE] [int] NULL,
	[OWN_tank13_temp_TIMESTAMP] [datetime] NULL,
	[OWN_tank13_temp_QUALITY] [smallint] NULL,
	[OWN_tank13_volume_NUMERICID] [int] NULL,
	[OWN_tank13_volume_VALUE] [int] NULL,
	[OWN_tank13_volume_TIMESTAMP] [datetime] NULL,
	[OWN_tank13_volume_QUALITY] [smallint] NULL,
	[OWN_tank13_water_level_NUMERICID] [int] NULL,
	[OWN_tank13_water_level_VALUE] [int] NULL,
	[OWN_tank13_water_level_TIMESTAMP] [datetime] NULL,
	[OWN_tank13_water_level_QUALITY] [smallint] NULL,
	[OWN_tank13_water_volume_NUMERICID] [int] NULL,
	[OWN_tank13_water_volume_VALUE] [int] NULL,
	[OWN_tank13_water_volume_TIMESTAMP] [datetime] NULL,
	[OWN_tank13_water_volume_QUALITY] [smallint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]
GO
