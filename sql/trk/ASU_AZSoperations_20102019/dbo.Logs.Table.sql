USE [ASU_AZSoperations]
GO
/****** Object:  Table [dbo].[Logs]    Script Date: 20.10.2019 16:17:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Logs](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Text] [nvarchar](50) NULL,
 CONSTRAINT [PK_Logs] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Logs] ON 

INSERT [dbo].[Logs] ([id], [Text]) VALUES (1, N'button press')
INSERT [dbo].[Logs] ([id], [Text]) VALUES (2, N'button press')
INSERT [dbo].[Logs] ([id], [Text]) VALUES (3, N'button press')
INSERT [dbo].[Logs] ([id], [Text]) VALUES (4, N'button press')
INSERT [dbo].[Logs] ([id], [Text]) VALUES (5, N'button press')
INSERT [dbo].[Logs] ([id], [Text]) VALUES (6, N'button press')
INSERT [dbo].[Logs] ([id], [Text]) VALUES (7, N'button press')
INSERT [dbo].[Logs] ([id], [Text]) VALUES (8, N'button press')
INSERT [dbo].[Logs] ([id], [Text]) VALUES (9, N'button press')
INSERT [dbo].[Logs] ([id], [Text]) VALUES (10, N'button press')
INSERT [dbo].[Logs] ([id], [Text]) VALUES (11, N'button press')
INSERT [dbo].[Logs] ([id], [Text]) VALUES (12, N'button press')
SET IDENTITY_INSERT [dbo].[Logs] OFF
