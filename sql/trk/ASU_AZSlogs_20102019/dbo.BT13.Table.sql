USE [ASU_AZSlogs]
GO
/****** Object:  Table [dbo].[BT13]    Script Date: 20.10.2019 16:20:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BT13](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[OWN_tankB13_dens_NUMERICID] [int] NULL,
	[OWN_tankB13_dens_VALUE] [float] NULL,
	[OWN_tankB13_dens_TIMESTAMP] [datetime] NULL,
	[OWN_tankB13_dens_QUALITY] [smallint] NULL,
	[OWN_tankB13_fill_percent_NUMERICID] [int] NULL,
	[OWN_tankB13_fill_percent_VALUE] [float] NULL,
	[OWN_tankB13_fill_percent_TIMESTAMP] [datetime] NULL,
	[OWN_tankB13_fill_percent_QUALITY] [smallint] NULL,
	[OWN_tankB13_level_NUMERICID] [int] NULL,
	[OWN_tankB13_level_VALUE] [int] NULL,
	[OWN_tankB13_level_TIMESTAMP] [datetime] NULL,
	[OWN_tankB13_level_QUALITY] [smallint] NULL,
	[OWN_tankB13_mass_NUMERICID] [int] NULL,
	[OWN_tankB13_mass_VALUE] [float] NULL,
	[OWN_tankB13_mass_TIMESTAMP] [datetime] NULL,
	[OWN_tankB13_mass_QUALITY] [smallint] NULL,
	[OWN_tankB13_status1_NUMERICID] [int] NULL,
	[OWN_tankB13_status1_VALUE] [tinyint] NULL,
	[OWN_tankB13_status1_TIMESTAMP] [datetime] NULL,
	[OWN_tankB13_status1_QUALITY] [smallint] NULL,
	[OWN_tankB13_status2_NUMERICID] [int] NULL,
	[OWN_tankB13_status2_VALUE] [tinyint] NULL,
	[OWN_tankB13_status2_TIMESTAMP] [datetime] NULL,
	[OWN_tankB13_status2_QUALITY] [smallint] NULL,
	[OWN_tankB13_tankB13_status_NUMERICID] [int] NULL,
	[OWN_tankB13_tankB13_status_VALUE] [int] NULL,
	[OWN_tankB13_tankB13_status_TIMESTAMP] [datetime] NULL,
	[OWN_tankB13_tankB13_status_QUALITY] [smallint] NULL,
	[OWN_tankB13_temp_NUMERICID] [int] NULL,
	[OWN_tankB13_temp_VALUE] [int] NULL,
	[OWN_tankB13_temp_TIMESTAMP] [datetime] NULL,
	[OWN_tankB13_temp_QUALITY] [smallint] NULL,
	[OWN_tankB13_ullage_NUMERICID] [int] NULL,
	[OWN_tankB13_ullage_VALUE] [int] NULL,
	[OWN_tankB13_ullage_TIMESTAMP] [datetime] NULL,
	[OWN_tankB13_ullage_QUALITY] [smallint] NULL,
	[OWN_tankB13_unit_NUMERICID] [int] NULL,
	[OWN_tankB13_unit_VALUE] [tinyint] NULL,
	[OWN_tankB13_unit_TIMESTAMP] [datetime] NULL,
	[OWN_tankB13_unit_QUALITY] [smallint] NULL,
	[OWN_tankB13_volume_NUMERICID] [int] NULL,
	[OWN_tankB13_volume_VALUE] [int] NULL,
	[OWN_tankB13_volume_TIMESTAMP] [datetime] NULL,
	[OWN_tankB13_volume_QUALITY] [smallint] NULL,
	[OWN_tankB13_water_level_NUMERICID] [int] NULL,
	[OWN_tankB13_water_level_VALUE] [int] NULL,
	[OWN_tankB13_water_level_TIMESTAMP] [datetime] NULL,
	[OWN_tankB13_water_level_QUALITY] [smallint] NULL,
	[OWN_tankB13_water_volume_NUMERICID] [int] NULL,
	[OWN_tankB13_water_volume_VALUE] [int] NULL,
	[OWN_tankB13_water_volume_TIMESTAMP] [datetime] NULL,
	[OWN_tankB13_water_volume_QUALITY] [smallint] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 100) ON [PRIMARY]
) ON [PRIMARY]
GO
