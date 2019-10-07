USE [ASU_AZSoperations]
GO
/****** Object:  Table [dbo].[Outcomes]    Script Date: 07.10.2019 23:26:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Outcomes](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[OperatorName] [nvarchar](50) NULL,
	[SmenaID] [bigint] NULL,
	[SmenaSDT] [datetime] NULL,
	[RFIDid] [int] NULL,
	[FuelType] [int] NULL,
	[TaskSize] [int] NULL,
	[Tank] [nvarchar](10) NULL,
	[StartVolume] [float] NULL,
	[StartMass] [float] NULL,
	[StartDens] [float] NULL,
	[StartTemp] [float] NULL,
	[StartWater] [float] NULL,
	[EndVolume] [float] NULL,
	[EndMass] [float] NULL,
	[EndDens] [float] NULL,
	[EndTemp] [float] NULL,
	[EndWater] [float] NULL,
	[Passage] [int] NULL,
	[DateStart] [datetime] NULL,
	[DateEnd] [datetime] NULL,
	[CounterStart] [bigint] NULL,
	[CounterEnd] [bigint] NULL,
	[TransActID] [bigint] NULL,
 CONSTRAINT [PK_Outcomes] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
