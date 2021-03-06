USE [ASU_AZSoperations]
GO
/****** Object:  Table [dbo].[Cat_Werks]    Script Date: 20.10.2019 16:17:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cat_Werks](
	[id] [nvarchar](4) NOT NULL,
	[name] [nvarchar](4) NOT NULL,
 CONSTRAINT [PK_Cat_Werks] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'0010', N'0010')
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'0020', N'0020')
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'0310', N'0310')
INSERT [dbo].[Cat_Werks] ([id], [name]) VALUES (N'0410', N'0410')
