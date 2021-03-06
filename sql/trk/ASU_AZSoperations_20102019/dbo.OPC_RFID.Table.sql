USE [ASU_AZSoperations]
GO
/****** Object:  Table [dbo].[OPC_RFID]    Script Date: 20.10.2019 16:17:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OPC_RFID](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[datetime] [datetime] NOT NULL,
	[num_trk] [int] NOT NULL,
	[side] [bit] NOT NULL,
	[id_card] [int] NULL,
	[id_hi] [int] NOT NULL,
	[id_lo] [int] NOT NULL,
 CONSTRAINT [PK_OPC_RFID] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
