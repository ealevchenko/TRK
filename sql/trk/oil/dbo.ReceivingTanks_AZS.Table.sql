USE [KRR-PA-CNT-Oil]
GO
/****** Object:  Table [dbo].[ReceivingTanks_AZS]    Script Date: 07.10.2019 23:29:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ReceivingTanks_AZS](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[dt] [datetime] NULL,
	[id_table] [int] NOT NULL,
	[id_receiving_fuel] [int] NOT NULL,
	[num] [nvarchar](5) NOT NULL,
	[fuel] [int] NOT NULL,
	[start_datetime] [datetime] NOT NULL,
	[start_level] [float] NOT NULL,
	[start_volume] [float] NULL,
	[start_density] [float] NOT NULL,
	[start_density_avg] [float] NULL,
	[start_mass] [float] NOT NULL,
	[start_temp] [float] NOT NULL,
	[start_water_level] [float] NOT NULL,
	[stop_datetime] [datetime] NULL,
	[stop_level] [float] NULL,
	[stop_volume] [float] NULL,
	[stop_density] [float] NULL,
	[stop_density_avg] [float] NULL,
	[stop_mass] [float] NULL,
	[stop_temp] [float] NULL,
	[stop_water_level] [float] NULL,
	[volume_received] [float] NULL,
	[dens_received] [float] NULL,
	[mass_received] [float] NULL,
	[temp_received] [float] NULL,
	[relation] [float] NULL,
	[ratio_vd] [float] NULL,
	[ratio_tv] [float] NULL,
	[dens15] [float] NULL,
	[volume15] [float] NULL,
	[mass15] [float] NULL,
 CONSTRAINT [PK_ReceivingTanks_AZS] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
