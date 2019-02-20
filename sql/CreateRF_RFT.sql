USE [KRR-PA-REP-SBF]
GO

drop table [dbo].[ReceivingFuelTanks]
go
drop table [dbo].[ReceivingFuel]
go

/****** Object:  Table [dbo].[ReceivingFuel]    Script Date: 19.02.2019 23:16:05 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ReceivingFuel](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[operator_name] [nvarchar](50) NOT NULL,
	[smena_num] [int] NOT NULL,
	[smena_datetime] [datetime] NOT NULL,
	[type] [int] NOT NULL,
	[fuel] [int] NOT NULL,
	[truck_num_nak] [int] NULL,
	[truck_weight] [numeric](18, 2) NULL,
	[truck_provider] [nvarchar](200) NULL,
	[railway_num_nak] [int] NULL,
	[railway_num_tanker] [int] NULL,
	[railway_provider] [nvarchar](200) NULL,
	[railway_nak_volume] [numeric](10, 2) NULL,
	[railway_nak_dens] [numeric](9, 5) NULL,
	[railway_nak_mass] [numeric](10, 2) NULL,
	[railway_manual_level] [numeric](10, 2) NULL,
	[railway_manual_volume] [numeric](10, 2) NULL,
	[railway_manual_dens] [numeric](9, 5) NULL,
	[railway_manual_mass] [numeric](10, 2) NULL,
	[start_datetime] [datetime] NOT NULL,
	[stop_datetime] [datetime] NULL,
	[close] [datetime] NULL,
	[sending] [datetime] NULL,
 CONSTRAINT [PK_ReceivingFuel] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

/****** Object:  Table [dbo].[ReceivingFuelTanks]    Script Date: 19.02.2019 23:16:18 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ReceivingFuelTanks](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_receiving_fuel] [int] NOT NULL,
	[num] [nvarchar](5) NOT NULL,
	[fuel] [int] NOT NULL,
	[start_datetime] [datetime] NOT NULL,
	[start_level] [numeric](8, 2) NOT NULL,
	[start_volume] [numeric](10, 2) NOT NULL,
	[start_density] [numeric](9, 5) NOT NULL,
	[start_mass] [numeric](10, 2) NOT NULL,
	[start_temp] [numeric](4, 2) NOT NULL,
	[start_water_level] [numeric](7, 2) NOT NULL,
	[stop_datetime] [datetime] NULL,
	[stop_level] [numeric](8, 2) NULL,
	[stop_volume] [numeric](10, 2) NULL,
	[stop_density] [numeric](9, 5) NULL,
	[stop_mass] [numeric](10, 2) NULL,
	[stop_temp] [numeric](4, 2) NULL,
	[stop_water_level] [numeric](7, 2) NULL,
	[close] [datetime] NULL,
 CONSTRAINT [PK_ReceivingFuelTanks] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE [dbo].[ReceivingFuelTanks]  WITH CHECK ADD  CONSTRAINT [FK_ReceivingFuelTanks_ReceivingFuel] FOREIGN KEY([id_receiving_fuel])
REFERENCES [dbo].[ReceivingFuel] ([id])
GO

ALTER TABLE [dbo].[ReceivingFuelTanks] CHECK CONSTRAINT [FK_ReceivingFuelTanks_ReceivingFuel]
GO
