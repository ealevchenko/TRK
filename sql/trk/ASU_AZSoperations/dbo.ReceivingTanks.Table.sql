USE [ASU_AZSoperations]
GO
/****** Object:  Table [dbo].[ReceivingTanks]    Script Date: 10.10.2019 23:23:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ReceivingTanks](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[dt] [datetime] NULL,
	[id_table] [int] NOT NULL,
	[id_receiving_fuel] [int] NOT NULL,
	[num] [nvarchar](5) NOT NULL,
	[fuel] [int] NOT NULL,
	[start_datetime] [datetime] NOT NULL,
	[start_level] [float] NOT NULL,
	[start_volume] [float] NULL,
	[start_density] [float] NOT NULL,
	[start_density_avg] [float] NULL,
	[start_mass] [float] NOT NULL,
	[start_temp] [float] NOT NULL,
	[start_water_level] [float] NOT NULL,
	[stop_datetime] [datetime] NULL,
	[stop_level] [float] NULL,
	[stop_volume] [float] NULL,
	[stop_density] [float] NULL,
	[stop_density_avg] [float] NULL,
	[stop_mass] [float] NULL,
	[stop_temp] [float] NULL,
	[stop_water_level] [float] NULL,
	[volume_received] [float] NULL,
	[dens_received] [float] NULL,
	[mass_received] [float] NULL,
	[temp_received] [float] NULL,
	[relation] [float] NULL,
	[ratio_vd] [float] NULL,
	[ratio_tv] [float] NULL,
	[dens15] [float] NULL,
	[volume15] [float] NULL,
	[mass15] [float] NULL,
 CONSTRAINT [PK_ReceivingTanks] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[ReceivingTanks] ON 

INSERT [dbo].[ReceivingTanks] ([id], [dt], [id_table], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_density_avg], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_density_avg], [stop_mass], [stop_temp], [stop_water_level], [volume_received], [dens_received], [mass_received], [temp_received], [relation], [ratio_vd], [ratio_tv], [dens15], [volume15], [mass15]) VALUES (77, CAST(N'2019-06-04T00:00:00.000' AS DateTime), 56, 22, N'13', 107000024, CAST(N'2019-06-04T07:58:01.260' AS DateTime), 521.62, 9304, 827.23411, 828.57695614789338, 7709.08, 21.8, 0, CAST(N'2019-06-04T09:35:46.203' AS DateTime), 2651.46, 72112, 824.76332, 824.14965609052581, 59431.08, 25.8, 0, 62808, 823.49382244300091, 51722, 25.8, 0.21872331322713617, 180.26074337512463, 5.6430614812601139, 831.73687557137316, 62185.531890081053, 51722)
INSERT [dbo].[ReceivingTanks] ([id], [dt], [id_table], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_density_avg], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_density_avg], [stop_mass], [stop_temp], [stop_water_level], [volume_received], [dens_received], [mass_received], [temp_received], [relation], [ratio_vd], [ratio_tv], [dens15], [volume15], [mass15]) VALUES (78, CAST(N'2019-06-04T00:00:00.000' AS DateTime), 57, 22, N'29', 107000024, CAST(N'2019-06-04T07:58:01.260' AS DateTime), 497.43, 8392, 829.67524, 830.80076263107719, 6972.08, 21.6, 0, CAST(N'2019-06-04T09:35:46.200' AS DateTime), 2654.56, 72175, 826.55959, 827.060339452719, 59693.08, 26.7, 0, 63783, 826.56820782967247, 52721, 26.7, 0.22216328666475946, 183.74244328288768, 5.931759753949077, 835.26126445206239, 63119.17269931746, 52721)
INSERT [dbo].[ReceivingTanks] ([id], [dt], [id_table], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_density_avg], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_density_avg], [stop_mass], [stop_temp], [stop_water_level], [volume_received], [dens_received], [mass_received], [temp_received], [relation], [ratio_vd], [ratio_tv], [dens15], [volume15], [mass15]) VALUES (79, CAST(N'2019-06-04T00:00:00.000' AS DateTime), 58, 23, N'30', 107000024, CAST(N'2019-06-04T09:37:16.607' AS DateTime), 467.58, 7497, 831.64458, 830.609577164199, 6227.08, 21.8, 0, CAST(N'2019-06-04T09:51:10.380' AS DateTime), 947.5, 20815, 827.79535, 828.49291376411247, 17245.08, 24.6, 0, 13318, 827.301396606097, 11018, 24.6, 0.046348941210729466, 38.39976935355881, 1.1401839537839449, 835.23753760727641, 13191.456925611257, 11018)
INSERT [dbo].[ReceivingTanks] ([id], [dt], [id_table], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_density_avg], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_density_avg], [stop_mass], [stop_temp], [stop_water_level], [volume_received], [dens_received], [mass_received], [temp_received], [relation], [ratio_vd], [ratio_tv], [dens15], [volume15], [mass15]) VALUES (80, CAST(N'2019-06-04T00:00:00.000' AS DateTime), 59, 24, N'30', 107000024, CAST(N'2019-06-04T09:52:55.483' AS DateTime), 950.87, 20919, 827.20195, 828.48510923084268, 17331.08, 24.7, 0, CAST(N'2019-06-04T10:52:40.837' AS DateTime), 2646.77, 71431, 826.30326, 827.55498313057353, 59113.08, 26, 0, 50512, 827.1697814380741, 41782, 26, 0.17596172643497565, 145.61800355152286, 4.5750048873093672, 835.27118063062642, 50022.077822025123, 41782)
INSERT [dbo].[ReceivingTanks] ([id], [dt], [id_table], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_density_avg], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_density_avg], [stop_mass], [stop_temp], [stop_water_level], [volume_received], [dens_received], [mass_received], [temp_received], [relation], [ratio_vd], [ratio_tv], [dens15], [volume15], [mass15]) VALUES (81, CAST(N'2019-06-04T00:00:00.000' AS DateTime), 60, 24, N'31', 107000024, CAST(N'2019-06-04T09:52:55.487' AS DateTime), 570.29, 10219, 829.56519, 829.3453371171347, 8475.08, 22.1, 0, CAST(N'2019-06-04T10:52:40.833' AS DateTime), 1395.73, 35559, 825.70372, 827.30335498748548, 29418.08, 25, 0, 25340, 826.47987371744273, 20943, 25, 0.0882266836713473, 72.990231400725222, 2.2056670917836825, 834.32820740829152, 25101.632443970837, 20943)
INSERT [dbo].[ReceivingTanks] ([id], [dt], [id_table], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_density_avg], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_density_avg], [stop_mass], [stop_temp], [stop_water_level], [volume_received], [dens_received], [mass_received], [temp_received], [relation], [ratio_vd], [ratio_tv], [dens15], [volume15], [mass15]) VALUES (82, CAST(N'2019-06-04T00:00:00.000' AS DateTime), 61, 25, N'31', 107000024, CAST(N'2019-06-04T10:54:06.323' AS DateTime), 1395.8, 35561, 825.67814, 827.256826298473, 29418.08, 25.1, 0, CAST(N'2019-06-04T11:44:29.497' AS DateTime), 2648.97, 71974, 825.2944, 826.27170922833227, 59470.08, 26.4, 0, 36413, 825.30964216076666, 30052, 26.4, 0.12675828210277659, 104.73678241190834, 3.346418647513302, 834.26784090211459, 36022.004596873856, 30052)
INSERT [dbo].[ReceivingTanks] ([id], [dt], [id_table], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_density_avg], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_density_avg], [stop_mass], [stop_temp], [stop_water_level], [volume_received], [dens_received], [mass_received], [temp_received], [relation], [ratio_vd], [ratio_tv], [dens15], [volume15], [mass15]) VALUES (83, CAST(N'2019-06-04T00:00:00.000' AS DateTime), 62, 25, N'32', 107000024, CAST(N'2019-06-04T10:54:06.327' AS DateTime), 572.26, 10643, 828.38036, 828.8151836888095, 8821.08, 22.2, 0, CAST(N'2019-06-04T11:44:29.477' AS DateTime), 1687.62, 45642, 822.98118, 825.25042723807007, 37666.08, 27.2, 0, 34999, 824.16640475442159, 28845, 27.2, 0.12181776668827526, 100.5301640046867, 3.3134432539210872, 833.80155849319942, 34594.562346617706, 28845)
INSERT [dbo].[ReceivingTanks] ([id], [dt], [id_table], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_density_avg], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_density_avg], [stop_mass], [stop_temp], [stop_water_level], [volume_received], [dens_received], [mass_received], [temp_received], [relation], [ratio_vd], [ratio_tv], [dens15], [volume15], [mass15]) VALUES (84, CAST(N'2019-09-09T00:00:00.000' AS DateTime), 63, 26, N'B2', 107000022, CAST(N'2019-09-09T13:38:10.173' AS DateTime), 1131.86, 27069, 739.10063, 738.92903321142262, 20002.07, 23.1, 0, CAST(N'2019-09-09T14:41:32.613' AS DateTime), 2622.86, 71447, 734.78483, 737.44271977829715, 52688.07, 24.7, 0, 44378, 736.536121501645, 32686, 24.7, 0.63889809670346254, 471.15075009417893, 15.780782988575524, 746.070933370048, 43810.847652722965, 32686)
INSERT [dbo].[ReceivingTanks] ([id], [dt], [id_table], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_density_avg], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_density_avg], [stop_mass], [stop_temp], [stop_water_level], [volume_received], [dens_received], [mass_received], [temp_received], [relation], [ratio_vd], [ratio_tv], [dens15], [volume15], [mass15]) VALUES (85, CAST(N'2019-09-09T00:00:00.000' AS DateTime), 64, 26, N'B3', 107000022, CAST(N'2019-09-09T13:38:10.177' AS DateTime), 944.16, 21183, 738.33737, 737.85913232308917, 15630.07, 24, 0, CAST(N'2019-09-09T14:41:34.533' AS DateTime), 1714.27, 46244, 735.59387, 737.524219358187, 34106.07, 24.4, 0, 25061, 737.24113163880133, 18476, 24.4, 0.36110190329653746, 266.32139933753433, 8.8108864404355138, 745.89051229898246, 24770.391492249051, 18476)
INSERT [dbo].[ReceivingTanks] ([id], [dt], [id_table], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_density_avg], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_density_avg], [stop_mass], [stop_temp], [stop_water_level], [volume_received], [dens_received], [mass_received], [temp_received], [relation], [ratio_vd], [ratio_tv], [dens15], [volume15], [mass15]) VALUES (86, CAST(N'2019-09-09T00:00:00.000' AS DateTime), 65, 27, N'B18', 107000023, CAST(N'2019-09-09T15:06:15.117' AS DateTime), 616.3, 11962, 747.89563, 747.70690519979928, 8944.07, 21.7, 0, CAST(N'2019-09-09T17:36:28.217' AS DateTime), 2619.72, 71684, 742.9368, 742.872468054238, 53252.07, 25.1, 0, 59722, 741.90415592244062, 44308, 25.1, 0.51555302383685708, 382.99014723051141, 12.940380898305113, 751.81720430531129, 58934.538537118424, 44308)
INSERT [dbo].[ReceivingTanks] ([id], [dt], [id_table], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_density_avg], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_density_avg], [stop_mass], [stop_temp], [stop_water_level], [volume_received], [dens_received], [mass_received], [temp_received], [relation], [ratio_vd], [ratio_tv], [dens15], [volume15], [mass15]) VALUES (87, CAST(N'2019-09-09T00:00:00.000' AS DateTime), 66, 27, N'B19', 107000023, CAST(N'2019-09-09T15:06:15.117' AS DateTime), 509.77, 9117, 748.55621, 748.38982121311835, 6823.07, 21.9, 0, CAST(N'2019-09-09T17:36:29.843' AS DateTime), 2332.04, 65235, 742.54004, 742.48593546409131, 48436.07, 25.9, 0, 56118, 741.52678285042225, 41613, 25.9, 0.484446976163143, 359.69506627924153, 12.547176682625402, 752.12527974753834, 55327.218909551884, 41613)
INSERT [dbo].[ReceivingTanks] ([id], [dt], [id_table], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_density_avg], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_density_avg], [stop_mass], [stop_temp], [stop_water_level], [volume_received], [dens_received], [mass_received], [temp_received], [relation], [ratio_vd], [ratio_tv], [dens15], [volume15], [mass15]) VALUES (88, CAST(N'2019-09-20T00:00:00.000' AS DateTime), 67, 28, N'38', 107000027, CAST(N'2019-09-20T09:10:07.760' AS DateTime), 502.09, 8456, 796.58714, 793.17289498580874, 6707.07, 12.2, 0, CAST(N'2019-09-20T10:18:57.243' AS DateTime), 2652.76, 72004, 796.48058, 790.63760346647393, 56929.07, 15.6, 0, 63548, 790.30024548372876, 50222, 15.6, 0.78264827680044891, 618.79115792667244, 12.209313118087003, 791.088199056442, 63484.703804078359, 50222)
INSERT [dbo].[ReceivingTanks] ([id], [dt], [id_table], [id_receiving_fuel], [num], [fuel], [start_datetime], [start_level], [start_volume], [start_density], [start_density_avg], [start_mass], [start_temp], [start_water_level], [stop_datetime], [stop_level], [stop_volume], [stop_density], [stop_density_avg], [stop_mass], [stop_temp], [stop_water_level], [volume_received], [dens_received], [mass_received], [temp_received], [relation], [ratio_vd], [ratio_tv], [dens15], [volume15], [mass15]) VALUES (89, CAST(N'2019-09-20T00:00:00.000' AS DateTime), 68, 28, N'39', 107000027, CAST(N'2019-09-20T09:10:07.760' AS DateTime), 1027.45, 23675, 798.70895, 802.66399155227032, 19003.07, 13.9, 0, CAST(N'2019-09-20T11:01:45.800' AS DateTime), 1570.15, 41407, 799.77602, 799.57664163064214, 33108.07, 15.2, 0, 17732, 795.4545454545455, 14105, 15.2, 0.21735172319955118, 173.78936088853007, 3.3037461926331777, 799.7252922049795, 17637.306381932853, 14105)
SET IDENTITY_INSERT [dbo].[ReceivingTanks] OFF
