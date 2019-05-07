USE [ASU_AZSoperations]
GO

/****** Object:  Table [dbo].[ReceivingFuelTanks]    Script Date: 07.05.2019 16:01:08 ******/
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


