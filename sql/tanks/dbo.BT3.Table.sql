USE [ASU_AZSlogs]
GO
/****** Object:  Table [dbo].[BT3]    Script Date: 18.05.2019 20:38:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BT3](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[OWN_tankB3_dens_NUMERICID] [int] NULL,
	[OWN_tankB3_dens_VALUE] [float] NULL,
	[OWN_tankB3_dens_TIMESTAMP] [datetime] NULL,
	[OWN_tankB3_dens_QUALITY] [smallint] NULL,
	[OWN_tankB3_fill_percent_NUMERICID] [int] NULL,
	[OWN_tankB3_fill_percent_VALUE] [float] NULL,
	[OWN_tankB3_fill_percent_TIMESTAMP] [datetime] NULL,
	[OWN_tankB3_fill_percent_QUALITY] [smallint] NULL,
	[OWN_tankB3_level_NUMERICID] [int] NULL,
	[OWN_tankB3_level_VALUE] [int] NULL,
	[OWN_tankB3_level_TIMESTAMP] [datetime] NULL,
	[OWN_tankB3_level_QUALITY] [smallint] NULL,
	[OWN_tankB3_mass_NUMERICID] [int] NULL,
	[OWN_tankB3_mass_VALUE] [float] NULL,
	[OWN_tankB3_mass_TIMESTAMP] [datetime] NULL,
	[OWN_tankB3_mass_QUALITY] [smallint] NULL,
	[OWN_tankB3_temp_NUMERICID] [int] NULL,
	[OWN_tankB3_temp_VALUE] [int] NULL,
	[OWN_tankB3_temp_TIMESTAMP] [datetime] NULL,
	[OWN_tankB3_temp_QUALITY] [smallint] NULL,
	[OWN_tankB3_volume_NUMERICID] [int] NULL,
	[OWN_tankB3_volume_VALUE] [int] NULL,
	[OWN_tankB3_volume_TIMESTAMP] [datetime] NULL,
	[OWN_tankB3_volume_QUALITY] [smallint] NULL,
	[OWN_tankB3_water_level_NUMERICID] [int] NULL,
	[OWN_tankB3_water_level_VALUE] [int] NULL,
	[OWN_tankB3_water_level_TIMESTAMP] [datetime] NULL,
	[OWN_tankB3_water_level_QUALITY] [smallint] NULL,
	[OWN_tankB3_water_volume_NUMERICID] [int] NULL,
	[OWN_tankB3_water_volume_VALUE] [int] NULL,
	[OWN_tankB3_water_volume_TIMESTAMP] [datetime] NULL,
	[OWN_tankB3_water_volume_QUALITY] [smallint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]
GO
