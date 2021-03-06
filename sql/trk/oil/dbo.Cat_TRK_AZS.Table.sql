USE [KRR-PA-CNT-Oil]
GO
/****** Object:  Table [dbo].[Cat_TRK_AZS]    Script Date: 15.02.2020 13:48:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cat_TRK_AZS](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](20) NOT NULL,
	[trk] [int] NOT NULL,
	[side] [bit] NULL,
	[num] [int] NOT NULL,
	[name_gas_station] [nvarchar](50) NOT NULL,
	[type_fuel] [int] NOT NULL,
	[serial_number_flowmeter] [nvarchar](10) NULL,
	[identification_number_flowmeter] [nvarchar](10) NULL,
	[active] [bit] NOT NULL,
	[description] [nvarchar](100) NULL,
 CONSTRAINT [PK_Cat_TRK_AZS] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Cat_TRK_AZS] ON 

INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (1, N'№1', 1, 0, 1, N'Шельф100"2КЕД-50-0,25-1-2', 107000024, N'4758', N'0806Z283', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (2, N'№1', 1, 1, 2, N'Шельф100"2КЕД-50-0,25-1-2', 107000024, N'4758', N'0806E388', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (3, N'№2', 2, 0, 3, N'Шельф100"2КЕД-50-0,25-1-2', 107000024, N'4757', N'0808E092', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (4, N'№2', 2, 1, 4, N'Шельф100"2КЕД-50-0,25-1-2', 107000024, N'4757', N'0807E188', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (5, N'№3', 3, 0, 5, N'Шельф100"2КЕД-50-0,25-1-2', 107000024, N'4756', N'0807E224', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (6, N'№3', 3, 1, 6, N'Шельф100"2КЕД-50-0,25-1-2', 107000024, N'4756', N'16110411V', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (7, N'№4', 4, 0, 7, N'Шельф100"2КЕД-50-0,25-1-2', 107000024, N'4760', N'0807E208', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (8, N'№4', 4, 1, 8, N'Шельф100"2КЕД-50-0,25-1-2', 107000024, N'4760', N'0807E457', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (9, N'№5', 5, 0, 9, N'Шельф100"2КЕД-50-0,25-1-2', 107000022, N'4761', N'0807Z302', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (10, N'№5', 5, 1, 10, N'Шельф100"2КЕД-50-0,25-1-2', 107000022, N'4761', N'0807Е301', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (11, N'№6', 6, 0, 11, N'Шельф100"2КЕД-50-0,25-1-2', 107000022, N'4759', N'0807E406', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (12, N'№6', 6, 1, 12, N'Шельф100"2КЕД-50-0,25-1-2', 107000022, N'4759', N'0806Z253', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (13, N'№7', 7, 0, 13, N'Шельф200"2КЕД-50-0,25-1-4', 107000022, N'5455', N'0810V263', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (14, N'№7', 7, 0, 14, N'Шельф200"2КЕД-50-0,25-1-4', 107000022, N'5455', N'0809V044', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (15, N'№7', 7, 0, 15, N'Шельф200"2КЕД-50-0,25-1-4', 107000025, N'5455', N'0809V016', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (16, N'№7', 7, 0, 16, N'Шельф200"2КЕД-50-0,25-1-4', 107000025, N'5455', N'0809E025', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (17, N'№7', 7, 1, 17, N'Шельф200"2КЕД-50-0,25-1-4', 107000022, N'5455', N'0810V489', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (18, N'№7', 7, 1, 18, N'Шельф200"2КЕД-50-0,25-1-4', 107000022, N'5455', N'0809V234', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (19, N'№7', 7, 1, 19, N'Шельф200"2КЕД-50-0,25-1-4', 107000025, N'5455', N'0812T421', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (20, N'№7', 7, 1, 20, N'Шельф200"2КЕД-50-0,25-1-4', 107000025, N'5455', N'0810V292', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (21, N'№8', 8, 0, 21, N'Шельф200"2КЕД-50-0,25-1-4', 107000025, N'5456', N'0810V288', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (22, N'№8', 8, 0, 22, N'Шельф200"2КЕД-50-0,25-1-4', 107000025, N'5456', N'0809Z084', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (23, N'№8', 8, 0, 23, N'Шельф200"2КЕД-50-0,25-1-4', 107000022, N'5456', N'0809E004', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (24, N'№8', 8, 0, 24, N'Шельф200"2КЕД-50-0,25-1-4', 107000022, N'5456', N'0809V246', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (25, N'№8', 8, 1, 25, N'Шельф200"2КЕД-50-0,25-1-4', 107000025, N'5456', N'0812V254', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (26, N'№8', 8, 1, 26, N'Шельф200"2КЕД-50-0,25-1-4', 107000025, N'5456', N'0808E310', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (27, N'№8', 8, 1, 27, N'Шельф200"2КЕД-50-0,25-1-4', 107000022, N'5456', N'0806Z037', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (28, N'№8', 8, 1, 28, N'Шельф200"2КЕД-50-0,25-1-4', 107000022, N'5456', N'0810V233', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (29, N'№9', 9, 0, 29, N'Шельф1001КЕД 90-0,25-1-1ВК', 107000024, N'12008', N'17080138', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (30, N'Правый стояк ', 10, 0, 1, N'ППВ-100-1,6СУ', 107000024, N'428', N'', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (31, N'Правый стояк ', 10, 0, 1, N'ППВ-100-1,6СУ', 107000024, N'456', N'', 0, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (32, N'Средний стояк', 11, 0, 2, N'ППВ-100-1,6СУ', 107000027, N'777', N'', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (33, N'Средний стояк', 11, 0, 2, N'ППВ-100-1,6СУ', 107000027, N'1101', N'', 0, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (34, N'Левый стояк', 12, 0, 3, N'ППВ-100-1,6СУ', 107000022, N'274', N'', 1, NULL)
INSERT [dbo].[Cat_TRK_AZS] ([id], [name], [trk], [side], [num], [name_gas_station], [type_fuel], [serial_number_flowmeter], [identification_number_flowmeter], [active], [description]) VALUES (35, N'Левый стояк', 12, 0, 3, N'ППВ-100-1,6СУ', 107000022, N'735', N'', 0, NULL)
SET IDENTITY_INSERT [dbo].[Cat_TRK_AZS] OFF
