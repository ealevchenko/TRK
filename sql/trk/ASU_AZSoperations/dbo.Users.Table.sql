USE [ASU_AZSoperations]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 07.10.2019 23:26:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserName] [nchar](25) NOT NULL,
	[Password] [nchar](25) NOT NULL,
	[AccessLvl] [tinyint] NOT NULL
) ON [PRIMARY]
GO
INSERT [dbo].[Users] ([UserName], [Password], [AccessLvl]) VALUES (N'Developer                ', N'123456                   ', 0)
INSERT [dbo].[Users] ([UserName], [Password], [AccessLvl]) VALUES (N'TestUser                 ', N'1111                     ', 10)
