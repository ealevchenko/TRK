USE [ASU_AZSoperations]
GO
/****** Object:  Table [dbo].[Cat_Fuel]    Script Date: 20.10.2019 16:17:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cat_Fuel](
	[type_fuel] [int] NOT NULL,
	[name] [nvarchar](30) NOT NULL,
	[ukt_zed] [nvarchar](10) NOT NULL,
	[description] [nvarchar](100) NULL,
 CONSTRAINT [PK_Cat_Fuel] PRIMARY KEY CLUSTERED 
(
	[type_fuel] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Cat_Fuel] ([type_fuel], [name], [ukt_zed], [description]) VALUES (107000022, N'Бензин А-92', N'2710124194', NULL)
INSERT [dbo].[Cat_Fuel] ([type_fuel], [name], [ukt_zed], [description]) VALUES (107000023, N'Бензин А-95', N'2710124512', NULL)
INSERT [dbo].[Cat_Fuel] ([type_fuel], [name], [ukt_zed], [description]) VALUES (107000024, N'Топливо дизельное (летнее)', N'2710194300', NULL)
INSERT [dbo].[Cat_Fuel] ([type_fuel], [name], [ukt_zed], [description]) VALUES (107000027, N'Керосин', N'2710192100', NULL)
