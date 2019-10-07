USE [KRR-PA-CNT-Oil]
GO
/****** Object:  Table [dbo].[RemainsTanks_AZS]    Script Date: 07.10.2019 23:29:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RemainsTanks_AZS](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[dt] [datetime] NULL,
	[dt_actual] [datetime] NULL,
	[fuel_type] [int] NULL,
	[tank] [nvarchar](11) NULL,
	[level] [float] NULL,
	[volume] [float] NULL,
	[dens] [float] NULL,
	[dens_avg] [float] NULL,
	[mass] [float] NULL,
	[temp] [float] NULL,
	[relation] [float] NULL,
	[ratio_vd] [float] NULL,
	[ratio_tv] [float] NULL,
	[dens15] [float] NULL,
	[volume15] [float] NULL,
	[mass15] [float] NULL,
 CONSTRAINT [PK_RemainsTanks_AZS] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
