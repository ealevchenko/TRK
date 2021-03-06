USE [ASU_AZSoperations]
GO
/****** Object:  Table [dbo].[TRKLogs]    Script Date: 20.10.2019 16:18:32 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TRKLogs](
	[ID] [bigint] IDENTITY(1,1) NOT NULL,
	[DateTime] [datetime] NOT NULL,
	[UserName] [nvarchar](100) NULL,
	[Level] [int] NULL,
	[Log] [nvarchar](max) NULL,
 CONSTRAINT [PK_TRKLogs] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
