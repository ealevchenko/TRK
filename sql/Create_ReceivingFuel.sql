USE [ASU_AZSoperations]
GO
/****** Object:  Table [dbo].[ReceivingFuelTanks]    Script Date: 07.05.2019 21:04:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ReceivingFuelTanks](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_receiving_fuel] [int] NOT NULL,
	[num] [nvarchar](5) NOT NULL,
	[fuel] [int] NOT NULL,
	[start_datetime] [datetime] NOT NULL,
	[start_level] [numeric](8, 2) NOT NULL,
	[start_volume] [numeric](10, 2) NOT NULL,
	[start_density] [numeric](9, 5) NOT NULL,
	[start_mass] [numeric](10, 2) NOT NULL,
	[start_temp] [numeric](4, 2) NOT NULL,
	[start_water_level] [numeric](7, 2) NOT NULL,
	[stop_datetime] [datetime] NULL,
	[stop_level] [numeric](8, 2) NULL,
	[stop_volume] [numeric](10, 2) NULL,
	[stop_density] [numeric](9, 5) NULL,
	[stop_mass] [numeric](10, 2) NULL,
	[stop_temp] [numeric](4, 2) NULL,
	[stop_water_level] [numeric](7, 2) NULL,
	[close] [datetime] NULL,
 CONSTRAINT [PK_ReceivingFuelTanks] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[ReceivingFuelTanks] ON 

INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (1, 1, N'B9', 107000022, CAST(N'2019-02-24T22:28:54.827' AS DateTime), CAST(565.92 AS Numeric(8, 2)), CAST(1051.10 AS Numeric(10, 2)), CAST(754.85540 AS Numeric(9, 5)), CAST(7936.07 AS Numeric(10, 2)), CAST(-3.80 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-02-24T22:29:04.147' AS DateTime), CAST(565.91 AS Numeric(8, 2)), CAST(1051.10 AS Numeric(10, 2)), CAST(754.89797 AS Numeric(9, 5)), CAST(7936.07 AS Numeric(10, 2)), CAST(-3.80 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-02-24T22:29:04.147' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (2, 1, N'B16', 107000022, CAST(N'2019-02-24T22:28:54.827' AS DateTime), CAST(2596.19 AS Numeric(8, 2)), CAST(7102.70 AS Numeric(10, 2)), CAST(760.10318 AS Numeric(9, 5)), CAST(53991.07 AS Numeric(10, 2)), CAST(-1.90 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-02-24T22:29:06.357' AS DateTime), CAST(2596.23 AS Numeric(8, 2)), CAST(7102.80 AS Numeric(10, 2)), CAST(760.13468 AS Numeric(9, 5)), CAST(53992.07 AS Numeric(10, 2)), CAST(-1.90 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-02-24T22:29:06.357' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (3, 1, N'B2', 107000022, CAST(N'2019-02-24T22:28:54.823' AS DateTime), CAST(532.77 AS Numeric(8, 2)), CAST(936.70 AS Numeric(10, 2)), CAST(757.71139 AS Numeric(9, 5)), CAST(7096.07 AS Numeric(10, 2)), CAST(-3.50 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-02-24T22:29:08.327' AS DateTime), CAST(532.76 AS Numeric(8, 2)), CAST(936.70 AS Numeric(10, 2)), CAST(757.71581 AS Numeric(9, 5)), CAST(7096.07 AS Numeric(10, 2)), CAST(-3.50 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-02-24T22:29:08.327' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (4, 1, N'B11', 107000022, CAST(N'2019-02-24T22:28:54.827' AS DateTime), CAST(2076.38 AS Numeric(8, 2)), CAST(5691.30 AS Numeric(10, 2)), CAST(750.97347 AS Numeric(9, 5)), CAST(42566.07 AS Numeric(10, 2)), CAST(-2.50 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-02-24T22:29:08.327' AS DateTime), CAST(2076.37 AS Numeric(8, 2)), CAST(5691.30 AS Numeric(10, 2)), CAST(750.97348 AS Numeric(9, 5)), CAST(42565.07 AS Numeric(10, 2)), CAST(-2.50 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-02-24T22:29:08.327' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (5, 2, N'02', 107000024, CAST(N'2019-02-24T22:30:46.350' AS DateTime), CAST(524.28 AS Numeric(8, 2)), CAST(916.50 AS Numeric(10, 2)), CAST(845.63982 AS Numeric(9, 5)), CAST(7735.08 AS Numeric(10, 2)), CAST(-3.40 AS Numeric(4, 2)), CAST(0.30 AS Numeric(7, 2)), CAST(N'2019-02-24T22:31:05.873' AS DateTime), CAST(524.28 AS Numeric(8, 2)), CAST(916.50 AS Numeric(10, 2)), CAST(845.63982 AS Numeric(9, 5)), CAST(7735.08 AS Numeric(10, 2)), CAST(-3.40 AS Numeric(4, 2)), CAST(0.30 AS Numeric(7, 2)), CAST(N'2019-02-24T22:31:05.873' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (6, 2, N'08', 107000024, CAST(N'2019-02-24T22:30:46.353' AS DateTime), CAST(517.21 AS Numeric(8, 2)), CAST(922.10 AS Numeric(10, 2)), CAST(845.44756 AS Numeric(9, 5)), CAST(7792.08 AS Numeric(10, 2)), CAST(-3.30 AS Numeric(4, 2)), CAST(0.40 AS Numeric(7, 2)), CAST(N'2019-02-24T22:31:00.870' AS DateTime), CAST(517.21 AS Numeric(8, 2)), CAST(922.10 AS Numeric(10, 2)), CAST(845.44757 AS Numeric(9, 5)), CAST(7792.08 AS Numeric(10, 2)), CAST(-3.30 AS Numeric(4, 2)), CAST(0.40 AS Numeric(7, 2)), CAST(N'2019-02-24T22:31:00.870' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (7, 2, N'06', 107000024, CAST(N'2019-02-24T22:30:46.353' AS DateTime), CAST(519.21 AS Numeric(8, 2)), CAST(947.30 AS Numeric(10, 2)), CAST(846.49311 AS Numeric(9, 5)), CAST(8020.08 AS Numeric(10, 2)), CAST(-3.20 AS Numeric(4, 2)), CAST(0.20 AS Numeric(7, 2)), CAST(N'2019-02-24T22:31:03.180' AS DateTime), CAST(519.21 AS Numeric(8, 2)), CAST(947.30 AS Numeric(10, 2)), CAST(846.49311 AS Numeric(9, 5)), CAST(8019.08 AS Numeric(10, 2)), CAST(-3.20 AS Numeric(4, 2)), CAST(0.20 AS Numeric(7, 2)), CAST(N'2019-02-24T22:31:03.180' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (8, 2, N'03', 107000024, CAST(N'2019-02-24T22:30:46.350' AS DateTime), CAST(506.01 AS Numeric(8, 2)), CAST(939.80 AS Numeric(10, 2)), CAST(846.93636 AS Numeric(9, 5)), CAST(7949.08 AS Numeric(10, 2)), CAST(-3.40 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-02-24T22:31:05.883' AS DateTime), CAST(506.01 AS Numeric(8, 2)), CAST(939.80 AS Numeric(10, 2)), CAST(846.93637 AS Numeric(9, 5)), CAST(7949.08 AS Numeric(10, 2)), CAST(-3.40 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-02-24T22:31:05.883' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (9, 2, N'09', 107000024, CAST(N'2019-02-24T22:30:46.353' AS DateTime), CAST(489.10 AS Numeric(8, 2)), CAST(810.00 AS Numeric(10, 2)), CAST(846.50031 AS Numeric(9, 5)), CAST(6859.08 AS Numeric(10, 2)), CAST(-3.30 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-02-24T22:31:04.600' AS DateTime), CAST(489.10 AS Numeric(8, 2)), CAST(810.00 AS Numeric(10, 2)), CAST(846.50031 AS Numeric(9, 5)), CAST(6859.08 AS Numeric(10, 2)), CAST(-3.30 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-02-24T22:31:04.600' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (10, 2, N'10', 107000024, CAST(N'2019-02-24T22:30:46.353' AS DateTime), CAST(526.24 AS Numeric(8, 2)), CAST(927.20 AS Numeric(10, 2)), CAST(845.84747 AS Numeric(9, 5)), CAST(7841.08 AS Numeric(10, 2)), CAST(-3.60 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-02-24T22:31:05.880' AS DateTime), CAST(526.21 AS Numeric(8, 2)), CAST(927.10 AS Numeric(10, 2)), CAST(845.83927 AS Numeric(9, 5)), CAST(7840.08 AS Numeric(10, 2)), CAST(-3.60 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-02-24T22:31:05.880' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (11, 2, N'05', 107000024, CAST(N'2019-02-24T22:30:46.357' AS DateTime), CAST(539.83 AS Numeric(8, 2)), CAST(978.80 AS Numeric(10, 2)), CAST(847.36061 AS Numeric(9, 5)), CAST(8288.08 AS Numeric(10, 2)), CAST(-3.50 AS Numeric(4, 2)), CAST(0.30 AS Numeric(7, 2)), CAST(N'2019-02-24T22:31:06.067' AS DateTime), CAST(539.83 AS Numeric(8, 2)), CAST(978.80 AS Numeric(10, 2)), CAST(847.36062 AS Numeric(9, 5)), CAST(8288.08 AS Numeric(10, 2)), CAST(-3.50 AS Numeric(4, 2)), CAST(0.30 AS Numeric(7, 2)), CAST(N'2019-02-24T22:31:06.067' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (12, 2, N'15', 107000024, CAST(N'2019-02-24T22:30:46.353' AS DateTime), CAST(2630.77 AS Numeric(8, 2)), CAST(7217.00 AS Numeric(10, 2)), CAST(847.71147 AS Numeric(9, 5)), CAST(61078.08 AS Numeric(10, 2)), CAST(-1.40 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-02-24T22:31:05.873' AS DateTime), CAST(2630.81 AS Numeric(8, 2)), CAST(7217.10 AS Numeric(10, 2)), CAST(847.73352 AS Numeric(9, 5)), CAST(61079.08 AS Numeric(10, 2)), CAST(-1.40 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-02-24T22:31:05.873' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (13, 2, N'12', 107000024, CAST(N'2019-02-24T22:30:46.353' AS DateTime), CAST(2346.91 AS Numeric(8, 2)), CAST(6507.90 AS Numeric(10, 2)), CAST(849.14434 AS Numeric(9, 5)), CAST(55164.08 AS Numeric(10, 2)), CAST(-1.90 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-02-24T22:31:05.880' AS DateTime), CAST(2346.91 AS Numeric(8, 2)), CAST(6507.90 AS Numeric(10, 2)), CAST(849.14434 AS Numeric(9, 5)), CAST(55164.08 AS Numeric(10, 2)), CAST(-1.90 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-02-24T22:31:05.880' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (14, 2, N'11', 107000024, CAST(N'2019-02-24T22:30:46.353' AS DateTime), CAST(512.41 AS Numeric(8, 2)), CAST(845.40 AS Numeric(10, 2)), CAST(845.93513 AS Numeric(9, 5)), CAST(7138.08 AS Numeric(10, 2)), CAST(-3.50 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-02-24T22:31:05.877' AS DateTime), CAST(512.45 AS Numeric(8, 2)), CAST(845.50 AS Numeric(10, 2)), CAST(845.97470 AS Numeric(9, 5)), CAST(7139.08 AS Numeric(10, 2)), CAST(-3.50 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-02-24T22:31:05.877' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (15, 2, N'07', 107000024, CAST(N'2019-02-24T22:30:46.357' AS DateTime), CAST(534.31 AS Numeric(8, 2)), CAST(971.50 AS Numeric(10, 2)), CAST(846.80348 AS Numeric(9, 5)), CAST(8222.08 AS Numeric(10, 2)), CAST(-3.40 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-02-24T22:31:06.067' AS DateTime), CAST(534.31 AS Numeric(8, 2)), CAST(971.50 AS Numeric(10, 2)), CAST(846.80348 AS Numeric(9, 5)), CAST(8222.08 AS Numeric(10, 2)), CAST(-3.40 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-02-24T22:31:06.067' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (16, 3, N'01', 107000024, CAST(N'2019-04-15T09:48:38.850' AS DateTime), CAST(714.45 AS Numeric(8, 2)), CAST(1479.20 AS Numeric(10, 2)), CAST(837.42629 AS Numeric(9, 5)), CAST(12386.08 AS Numeric(10, 2)), CAST(7.10 AS Numeric(4, 2)), CAST(0.40 AS Numeric(7, 2)), CAST(N'2019-04-15T10:38:43.257' AS DateTime), CAST(2620.31 AS Numeric(8, 2)), CAST(7164.80 AS Numeric(10, 2)), CAST(838.32508 AS Numeric(9, 5)), CAST(59937.08 AS Numeric(10, 2)), CAST(8.20 AS Numeric(4, 2)), CAST(0.30 AS Numeric(7, 2)), CAST(N'2019-04-15T10:38:43.257' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (17, 3, N'02', 107000024, CAST(N'2019-04-15T09:48:38.853' AS DateTime), CAST(493.63 AS Numeric(8, 2)), CAST(840.30 AS Numeric(10, 2)), CAST(836.31720 AS Numeric(9, 5)), CAST(7035.08 AS Numeric(10, 2)), CAST(6.60 AS Numeric(4, 2)), CAST(0.10 AS Numeric(7, 2)), CAST(N'2019-04-15T10:48:13.503' AS DateTime), CAST(950.68 AS Numeric(8, 2)), CAST(2131.40 AS Numeric(10, 2)), CAST(838.25799 AS Numeric(9, 5)), CAST(17835.08 AS Numeric(10, 2)), CAST(7.10 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-04-15T10:48:13.503' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (18, 4, N'02', 107000024, CAST(N'2019-04-15T11:05:11.750' AS DateTime), CAST(951.22 AS Numeric(8, 2)), CAST(2133.00 AS Numeric(10, 2)), CAST(838.41565 AS Numeric(9, 5)), CAST(17841.08 AS Numeric(10, 2)), CAST(7.70 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-04-15T12:40:34.683' AS DateTime), CAST(2586.33 AS Numeric(8, 2)), CAST(7070.00 AS Numeric(10, 2)), CAST(839.56295 AS Numeric(9, 5)), CAST(59360.08 AS Numeric(10, 2)), CAST(8.10 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-04-15T12:40:34.683' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (19, 4, N'03', 107000024, CAST(N'2019-04-15T11:05:11.753' AS DateTime), CAST(461.68 AS Numeric(8, 2)), CAST(829.00 AS Numeric(10, 2)), CAST(838.40099 AS Numeric(9, 5)), CAST(6954.08 AS Numeric(10, 2)), CAST(6.30 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-04-15T12:40:53.970' AS DateTime), CAST(839.08 AS Numeric(8, 2)), CAST(1871.30 AS Numeric(10, 2)), CAST(840.37132 AS Numeric(9, 5)), CAST(15717.08 AS Numeric(10, 2)), CAST(7.60 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-04-15T12:40:53.970' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (20, 5, N'03', 107000024, CAST(N'2019-04-15T13:22:15.570' AS DateTime), CAST(1648.08 AS Numeric(8, 2)), CAST(4479.00 AS Numeric(10, 2)), CAST(841.07445 AS Numeric(9, 5)), CAST(37636.08 AS Numeric(10, 2)), CAST(7.10 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-04-15T13:41:31.300' AS DateTime), CAST(2586.22 AS Numeric(8, 2)), CAST(7116.20 AS Numeric(10, 2)), CAST(841.20976 AS Numeric(9, 5)), CAST(59761.08 AS Numeric(10, 2)), CAST(7.80 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-04-15T13:41:31.300' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (21, 5, N'04', 107000024, CAST(N'2019-04-15T13:22:15.573' AS DateTime), CAST(475.37 AS Numeric(8, 2)), CAST(812.70 AS Numeric(10, 2)), CAST(836.51883 AS Numeric(9, 5)), CAST(6798.08 AS Numeric(10, 2)), CAST(6.20 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-04-15T14:01:25.217' AS DateTime), CAST(1248.55 AS Numeric(8, 2)), CAST(3118.30 AS Numeric(10, 2)), CAST(838.40769 AS Numeric(9, 5)), CAST(26045.08 AS Numeric(10, 2)), CAST(8.10 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-04-15T14:01:25.217' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (22, 6, N'09', 107000024, CAST(N'2019-05-02T12:34:26.003' AS DateTime), CAST(501.20 AS Numeric(8, 2)), CAST(839.70 AS Numeric(10, 2)), CAST(833.28993 AS Numeric(9, 5)), CAST(7000.08 AS Numeric(10, 2)), CAST(13.90 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-02T13:36:38.710' AS DateTime), CAST(1282.88 AS Numeric(8, 2)), CAST(3157.70 AS Numeric(10, 2)), CAST(832.65907 AS Numeric(9, 5)), CAST(26286.08 AS Numeric(10, 2)), CAST(15.60 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-02T13:36:38.710' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (23, 6, N'08', 107000024, CAST(N'2019-05-02T12:34:26.000' AS DateTime), CAST(821.86 AS Numeric(8, 2)), CAST(1770.80 AS Numeric(10, 2)), CAST(830.40278 AS Numeric(9, 5)), CAST(14707.08 AS Numeric(10, 2)), CAST(14.70 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-02T13:36:42.547' AS DateTime), CAST(2553.46 AS Numeric(8, 2)), CAST(7030.00 AS Numeric(10, 2)), CAST(830.99004 AS Numeric(9, 5)), CAST(58412.08 AS Numeric(10, 2)), CAST(17.20 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-02T13:36:42.547' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (24, 7, N'10', 107000024, CAST(N'2019-05-03T11:25:26.740' AS DateTime), CAST(1644.11 AS Numeric(8, 2)), CAST(4395.40 AS Numeric(10, 2)), CAST(834.92314 AS Numeric(9, 5)), CAST(36679.08 AS Numeric(10, 2)), CAST(16.80 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-03T12:22:33.700' AS DateTime), CAST(2139.66 AS Numeric(8, 2)), CAST(5943.60 AS Numeric(10, 2)), CAST(833.49247 AS Numeric(9, 5)), CAST(49518.08 AS Numeric(10, 2)), CAST(18.70 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-03T12:22:33.700' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (25, 7, N'06', 107000024, CAST(N'2019-05-03T11:25:26.740' AS DateTime), CAST(581.92 AS Numeric(8, 2)), CAST(1111.00 AS Numeric(10, 2)), CAST(837.68197 AS Numeric(9, 5)), CAST(9308.08 AS Numeric(10, 2)), CAST(14.30 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-03T12:22:33.700' AS DateTime), CAST(2556.48 AS Numeric(8, 2)), CAST(7047.70 AS Numeric(10, 2)), CAST(835.29049 AS Numeric(9, 5)), CAST(58857.08 AS Numeric(10, 2)), CAST(18.10 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-03T12:22:33.700' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (26, 8, N'10', 107000024, CAST(N'2019-05-03T12:25:42.270' AS DateTime), CAST(2142.29 AS Numeric(8, 2)), CAST(5951.30 AS Numeric(10, 2)), CAST(833.19807 AS Numeric(9, 5)), CAST(49603.08 AS Numeric(10, 2)), CAST(18.20 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-03T13:34:53.047' AS DateTime), CAST(2621.41 AS Numeric(8, 2)), CAST(7141.30 AS Numeric(10, 2)), CAST(833.81952 AS Numeric(9, 5)), CAST(59525.08 AS Numeric(10, 2)), CAST(18.40 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-03T13:34:53.047' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (27, 8, N'11', 107000024, CAST(N'2019-05-03T12:25:42.270' AS DateTime), CAST(494.66 AS Numeric(8, 2)), CAST(801.90 AS Numeric(10, 2)), CAST(833.47848 AS Numeric(9, 5)), CAST(6688.08 AS Numeric(10, 2)), CAST(14.20 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-03T13:34:53.047' AS DateTime), CAST(2544.01 AS Numeric(8, 2)), CAST(6950.80 AS Numeric(10, 2)), CAST(832.75818 AS Numeric(9, 5)), CAST(57699.08 AS Numeric(10, 2)), CAST(19.70 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-03T13:34:53.047' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (28, 9, N'32', 107000024, CAST(N'2019-05-03T13:36:47.543' AS DateTime), CAST(601.30 AS Numeric(8, 2)), CAST(1141.80 AS Numeric(10, 2)), CAST(833.37292 AS Numeric(9, 5)), CAST(9526.08 AS Numeric(10, 2)), CAST(14.60 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-06T09:51:34.883' AS DateTime), CAST(2555.12 AS Numeric(8, 2)), CAST(7025.80 AS Numeric(10, 2)), CAST(833.11511 AS Numeric(9, 5)), CAST(58386.08 AS Numeric(10, 2)), CAST(18.80 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-06T09:51:34.883' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (29, 9, N'14', 107000024, CAST(N'2019-05-03T13:36:47.543' AS DateTime), CAST(549.13 AS Numeric(8, 2)), CAST(999.30 AS Numeric(10, 2)), CAST(831.97200 AS Numeric(9, 5)), CAST(8309.08 AS Numeric(10, 2)), CAST(14.90 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-06T09:51:34.887' AS DateTime), CAST(921.58 AS Numeric(8, 2)), CAST(2064.40 AS Numeric(10, 2)), CAST(829.69493 AS Numeric(9, 5)), CAST(17170.08 AS Numeric(10, 2)), CAST(18.30 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-06T09:51:34.887' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (30, 10, N'15', 107000024, CAST(N'2019-05-06T09:56:08.273' AS DateTime), CAST(534.50 AS Numeric(8, 2)), CAST(1006.60 AS Numeric(10, 2)), CAST(831.52218 AS Numeric(9, 5)), CAST(8377.08 AS Numeric(10, 2)), CAST(16.50 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-06T11:12:22.977' AS DateTime), CAST(1170.82 AS Numeric(8, 2)), CAST(2916.60 AS Numeric(10, 2)), CAST(829.71738 AS Numeric(9, 5)), CAST(24211.08 AS Numeric(10, 2)), CAST(19.40 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-06T11:12:22.977' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (31, 10, N'14', 107000024, CAST(N'2019-05-06T09:56:08.270' AS DateTime), CAST(921.64 AS Numeric(8, 2)), CAST(2064.50 AS Numeric(10, 2)), CAST(829.72141 AS Numeric(9, 5)), CAST(17171.08 AS Numeric(10, 2)), CAST(18.30 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-06T11:12:22.977' AS DateTime), CAST(2651.78 AS Numeric(8, 2)), CAST(7182.00 AS Numeric(10, 2)), CAST(829.76552 AS Numeric(9, 5)), CAST(59652.08 AS Numeric(10, 2)), CAST(19.90 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-06T11:12:22.977' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (32, 11, N'16', 107000024, CAST(N'2019-05-06T11:13:56.097' AS DateTime), CAST(551.63 AS Numeric(8, 2)), CAST(1022.70 AS Numeric(10, 2)), CAST(831.57229 AS Numeric(9, 5)), CAST(8507.08 AS Numeric(10, 2)), CAST(16.40 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-06T12:05:59.880' AS DateTime), CAST(1636.58 AS Numeric(8, 2)), CAST(4415.10 AS Numeric(10, 2)), CAST(830.27999 AS Numeric(9, 5)), CAST(36628.08 AS Numeric(10, 2)), CAST(19.60 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-06T12:05:59.880' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (33, 11, N'15', 107000024, CAST(N'2019-05-06T11:13:56.097' AS DateTime), CAST(1173.31 AS Numeric(8, 2)), CAST(2924.70 AS Numeric(10, 2)), CAST(829.69525 AS Numeric(9, 5)), CAST(24274.08 AS Numeric(10, 2)), CAST(19.60 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-06T12:05:59.887' AS DateTime), CAST(2651.72 AS Numeric(8, 2)), CAST(7254.80 AS Numeric(10, 2)), CAST(830.94687 AS Numeric(9, 5)), CAST(60189.08 AS Numeric(10, 2)), CAST(20.10 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-06T12:05:59.887' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (34, 11, N'17', 107000024, CAST(N'2019-05-06T11:13:56.100' AS DateTime), CAST(562.00 AS Numeric(8, 2)), CAST(982.40 AS Numeric(10, 2)), CAST(831.84766 AS Numeric(9, 5)), CAST(8176.08 AS Numeric(10, 2)), CAST(16.40 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-06T12:05:59.883' AS DateTime), CAST(562.06 AS Numeric(8, 2)), CAST(982.50 AS Numeric(10, 2)), CAST(832.46668 AS Numeric(9, 5)), CAST(8176.08 AS Numeric(10, 2)), CAST(16.50 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-06T12:05:59.883' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (35, 12, N'17', 107000024, CAST(N'2019-05-06T12:07:57.577' AS DateTime), CAST(562.11 AS Numeric(8, 2)), CAST(982.60 AS Numeric(10, 2)), CAST(832.40929 AS Numeric(9, 5)), CAST(8177.08 AS Numeric(10, 2)), CAST(16.50 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-06T13:00:59.217' AS DateTime), CAST(2095.47 AS Numeric(8, 2)), CAST(5765.20 AS Numeric(10, 2)), CAST(830.37899 AS Numeric(9, 5)), CAST(47812.08 AS Numeric(10, 2)), CAST(20.50 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-06T13:00:59.217' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (36, 12, N'16', 107000024, CAST(N'2019-05-06T12:07:57.573' AS DateTime), CAST(1638.57 AS Numeric(8, 2)), CAST(4421.60 AS Numeric(10, 2)), CAST(830.04345 AS Numeric(9, 5)), CAST(36684.08 AS Numeric(10, 2)), CAST(19.50 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-06T13:00:59.217' AS DateTime), CAST(2653.43 AS Numeric(8, 2)), CAST(7237.80 AS Numeric(10, 2)), CAST(830.49096 AS Numeric(9, 5)), CAST(60045.08 AS Numeric(10, 2)), CAST(19.60 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-06T13:00:59.217' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (37, 13, N'17', 107000024, CAST(N'2019-05-06T13:09:37.480' AS DateTime), CAST(2098.87 AS Numeric(8, 2)), CAST(5775.40 AS Numeric(10, 2)), CAST(830.89647 AS Numeric(9, 5)), CAST(47900.08 AS Numeric(10, 2)), CAST(20.40 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-06T14:04:26.747' AS DateTime), CAST(2656.63 AS Numeric(8, 2)), CAST(7175.10 AS Numeric(10, 2)), CAST(832.42233 AS Numeric(9, 5)), CAST(59728.08 AS Numeric(10, 2)), CAST(20.30 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-06T14:04:26.747' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (38, 13, N'18', 107000024, CAST(N'2019-05-06T13:09:37.480' AS DateTime), CAST(542.67 AS Numeric(8, 2)), CAST(950.50 AS Numeric(10, 2)), CAST(832.37812 AS Numeric(9, 5)), CAST(7909.08 AS Numeric(10, 2)), CAST(16.60 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-06T14:04:26.747' AS DateTime), CAST(2419.36 AS Numeric(8, 2)), CAST(6672.90 AS Numeric(10, 2)), CAST(830.29381 AS Numeric(9, 5)), CAST(55336.08 AS Numeric(10, 2)), CAST(20.60 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-06T14:04:26.747' AS DateTime))
INSERT [dbo].[ReceivingFuelTanks] ([id], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_mass], [stop_temp], [stop_water_level], [close]) VALUES (39, 13, N'19', 107000024, CAST(N'2019-05-06T13:09:37.483' AS DateTime), CAST(533.43 AS Numeric(8, 2)), CAST(952.90 AS Numeric(10, 2)), CAST(832.23985 AS Numeric(9, 5)), CAST(7925.08 AS Numeric(10, 2)), CAST(16.50 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-06T14:04:26.747' AS DateTime), CAST(533.68 AS Numeric(8, 2)), CAST(953.50 AS Numeric(10, 2)), CAST(832.20642 AS Numeric(9, 5)), CAST(7932.08 AS Numeric(10, 2)), CAST(16.60 AS Numeric(4, 2)), CAST(0.00 AS Numeric(7, 2)), CAST(N'2019-05-06T14:04:26.747' AS DateTime))
SET IDENTITY_INSERT [dbo].[ReceivingFuelTanks] OFF
ALTER TABLE [dbo].[ReceivingFuelTanks]  WITH CHECK ADD  CONSTRAINT [FK_ReceivingFuelTanks_ReceivingFuel] FOREIGN KEY([id_receiving_fuel])
REFERENCES [dbo].[ReceivingFuel] ([id])
GO
ALTER TABLE [dbo].[ReceivingFuelTanks] CHECK CONSTRAINT [FK_ReceivingFuelTanks_ReceivingFuel]
GO
