USE [KRR-PA-CNT-Oil]
GO
/****** Object:  Table [dbo].[DeliveryTanks_AZS]    Script Date: 07.10.2019 23:29:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DeliveryTanks_AZS](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[dt] [datetime] NOT NULL,
	[id_table] [int] NOT NULL,
	[trk_num] [int] NOT NULL,
	[side] [bit] NOT NULL,
	[num] [int] NOT NULL,
	[name_trk] [nvarchar](20) NULL,
	[name_gas_station] [nvarchar](50) NULL,
	[serial_number_flowmeter] [nvarchar](10) NULL,
	[identification_number_flowmeter] [nvarchar](10) NULL,
	[fuel_type] [int] NOT NULL,
	[ukt_zed] [nvarchar](10) NULL,
	[fuel_name] [nvarchar](30) NULL,
	[tank_num] [nvarchar](200) NOT NULL,
	[dose] [float] NULL,
	[passage] [char](1) NOT NULL,
	[volume] [float] NULL,
	[mass] [float] NULL,
	[start_datetime] [datetime] NOT NULL,
	[start_volume] [float] NULL,
	[start_dens_avg] [float] NULL,
	[start_mass] [float] NULL,
	[start_temp] [float] NOT NULL,
	[start_counter] [int] NOT NULL,
	[stop_datetime] [datetime] NULL,
	[stop_volume] [float] NULL,
	[stop_dens_avg] [float] NULL,
	[stop_mass] [float] NULL,
	[stop_temp] [float] NULL,
	[stop_counter] [int] NULL,
	[dens_avg_delivery] [float] NULL,
	[volume_delivery] [float] NULL,
	[mass_delivery] [float] NULL,
	[temp_delivery] [float] NULL,
	[relation] [float] NULL,
	[ratio_vd] [float] NULL,
	[ratio_tv] [float] NULL,
	[dens15] [float] NULL,
	[volume15] [float] NULL,
	[mass15] [float] NULL,
 CONSTRAINT [PK_DeliveryTanks_AZS] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
