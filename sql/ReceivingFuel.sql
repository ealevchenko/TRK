USE [ASU_AZSoperations]
GO

/****** Object:  Table [dbo].[ReceivingFuel]    Script Date: 07.05.2019 16:00:24 ******/
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
	[railway_type_capacity] [nvarchar](10) NULL,
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


