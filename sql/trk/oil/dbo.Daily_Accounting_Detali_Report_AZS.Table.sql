USE [KRR-PA-CNT-Oil]
GO
/****** Object:  Table [dbo].[Daily_Accounting_Detali_Report_AZS]    Script Date: 07.10.2019 23:29:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Daily_Accounting_Detali_Report_AZS](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[dt_start] [datetime] NULL,
	[dt_stop] [datetime] NULL,
	[fuel_type] [int] NULL,
	[ukt_zed] [nvarchar](10) NULL,
	[tank] [nvarchar](11) NULL,
	[serial_number] [nvarchar](10) NULL,
	[unified_tank_number] [nvarchar](21) NULL,
	[type_name] [nvarchar](100) NULL,
	[level_meters_model] [nvarchar](50) NULL,
	[level_meters_serial_number] [nvarchar](10) NULL,
	[dt_actual_remains_start] [datetime] NULL,
	[level_remains_start] [float] NULL,
	[volume_remains_start] [float] NULL,
	[dens_remains_start] [float] NULL,
	[dens_avg_remains_start] [float] NULL,
	[mass_remains_start] [float] NULL,
	[temp_remains_start] [float] NULL,
	[relation_remains_start] [float] NULL,
	[ratio_vd_remains_start] [float] NULL,
	[ratio_tv_remains_start] [float] NULL,
	[dens15_remains_start] [float] NULL,
	[volume15_remains_start] [float] NULL,
	[mass15_remains_start] [float] NULL,
	[volume_received] [float] NULL,
	[mass_received] [float] NULL,
	[dens_received] [float] NULL,
	[temp_received] [float] NULL,
	[volume15_received] [float] NULL,
	[mass15_received] [float] NULL,
	[dens15_received] [float] NULL,
	[count_tanks_delivery] [int] NULL,
	[volume_delivery] [float] NULL,
	[mass_delivery] [float] NULL,
	[dens_delivery] [float] NULL,
	[temp_delivery] [float] NULL,
	[volume15_delivery] [float] NULL,
	[mass15_delivery] [float] NULL,
	[dens15_delivery] [float] NULL,
	[dt_actual_remains_stop] [datetime] NULL,
	[level_remains_stop] [float] NULL,
	[volume_remains_stop] [float] NULL,
	[dens_remains_stop] [float] NULL,
	[dens_avg_remains_stop] [float] NULL,
	[mass_remains_stop] [float] NULL,
	[temp_remains_stop] [float] NULL,
	[relation_remains_stop] [float] NULL,
	[ratio_vd_remains_stop] [float] NULL,
	[ratio_tv_remains_stop] [float] NULL,
	[dens15_remains_stop] [float] NULL,
	[volume15_remains_stop] [float] NULL,
	[mass15_remains_stop] [float] NULL,
	[permissible_volume15_error] [float] NULL,
	[permissible_mass15_error] [float] NULL,
 CONSTRAINT [PK_Daily_Accounting_Detali_Report_AZS] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
