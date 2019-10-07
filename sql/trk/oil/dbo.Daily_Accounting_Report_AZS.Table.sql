USE [KRR-PA-CNT-Oil]
GO
/****** Object:  Table [dbo].[Daily_Accounting_Report_AZS]    Script Date: 07.10.2019 23:29:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Daily_Accounting_Report_AZS](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[type] [int] NULL,
	[ukt_zed] [nvarchar](10) NULL,
	[fuel_name] [nvarchar](30) NULL,
	[date_start] [datetime] NULL,
	[date_stop] [datetime] NULL,
	[volume_start] [float] NULL,
	[mass_start] [float] NULL,
	[dens_start] [float] NULL,
	[temp_start] [float] NULL,
	[volume15_start] [float] NULL,
	[mass15_start] [float] NULL,
	[dens15_start] [float] NULL,
	[volume_received] [int] NULL,
	[mass_received] [float] NULL,
	[dens_received] [float] NULL,
	[temp_received] [float] NULL,
	[volume15_received] [float] NULL,
	[mass15_received] [float] NULL,
	[dens15_received] [float] NULL,
	[volume_delivery] [int] NULL,
	[mass_delivery] [float] NULL,
	[dens_delivery] [float] NULL,
	[temp_delivery] [float] NULL,
	[volume15_delivery] [float] NULL,
	[mass15_delivery] [float] NULL,
	[dens15_delivery] [float] NULL,
	[volume_stop] [float] NULL,
	[mass_stop] [float] NULL,
	[dens_stop] [float] NULL,
	[temp_stop] [float] NULL,
	[volume15_stop] [float] NULL,
	[mass15_stop] [float] NULL,
	[dens15_stop] [float] NULL,
	[permissible_volume15_error] [float] NULL,
	[permissible_mass15_error] [float] NULL,
 CONSTRAINT [PK_Daily_Accounting_Report_AZS] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
