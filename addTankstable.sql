USE [KRR-PA-REP-SBF]
GO


SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Tanks_A92](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[changed] [datetime] NOT NULL,
	[user] [nvarchar](50) NOT NULL,
	[B2] [bit] NOT NULL,
	[B3] [bit] NOT NULL,
	[B9] [bit] NOT NULL,
	[B11] [bit] NOT NULL,
	[B16] [bit] NOT NULL,
 CONSTRAINT [PK_Tanks_A92] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[Tanks_A95](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[changed] [datetime] NOT NULL,
	[user] [nvarchar](50) NOT NULL,
	[B17] [bit] NOT NULL,
	[B18] [bit] NOT NULL,
	[B19] [bit] NOT NULL,
	[B20] [bit] NOT NULL,
 CONSTRAINT [PK_Tanks_A95] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

go

CREATE TABLE [dbo].[Tanks_kerosene](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[changed] [datetime] NOT NULL,
	[user] [nvarchar](50) NOT NULL,
	[33] [bit] NOT NULL,
	[38] [bit] NOT NULL,
	[39] [bit] NOT NULL,
 CONSTRAINT [PK_Tanks_kerosene] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

go
CREATE TABLE [dbo].[Tanks_dt](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[changed] [datetime] NOT NULL,
	[user] [nvarchar](50) NOT NULL,
	[1] [bit] NOT NULL,
	[2] [bit] NOT NULL,
	[3] [bit] NOT NULL,
	[4] [bit] NOT NULL,
	[5] [bit] NOT NULL,
	[6] [bit] NOT NULL,
	[7] [bit] NOT NULL,
	[8] [bit] NOT NULL,
	[9] [bit] NOT NULL,
	[10] [bit] NOT NULL,
	[11] [bit] NOT NULL,
	[12] [bit] NOT NULL,
	[13] [bit] NOT NULL,
	[14] [bit] NOT NULL,
	[15] [bit] NOT NULL,
	[16] [bit] NOT NULL,
	[17] [bit] NOT NULL,
	[18] [bit] NOT NULL,
	[19] [bit] NOT NULL,
	[20] [bit] NOT NULL,
	[21] [bit] NOT NULL,
	[22] [bit] NOT NULL,
	[23] [bit] NOT NULL,
	[24] [bit] NOT NULL,
	[25] [bit] NOT NULL,
	[26] [bit] NOT NULL,
	[27] [bit] NOT NULL,
	[28] [bit] NOT NULL,
	[29] [bit] NOT NULL,
	[30] [bit] NOT NULL,
	[31] [bit] NOT NULL,
	[32] [bit] NOT NULL,
 CONSTRAINT [PK_Tanks_dt] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]