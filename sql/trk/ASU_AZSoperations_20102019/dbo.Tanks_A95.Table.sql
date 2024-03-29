USE [ASU_AZSoperations]
GO
/****** Object:  Table [dbo].[Tanks_A95]    Script Date: 20.10.2019 16:17:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
GO
SET IDENTITY_INSERT [dbo].[Tanks_A95] ON 

INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (1, CAST(N'2019-02-01T16:08:31.217' AS DateTime), N'User_1', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (2, CAST(N'2019-02-04T09:19:00.440' AS DateTime), N'User_1', 1, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (3, CAST(N'2019-02-11T10:09:04.123' AS DateTime), N'User_1', 1, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (4, CAST(N'2019-02-11T10:26:05.267' AS DateTime), N'User_1', 1, 1, 1, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (5, CAST(N'2019-02-11T11:08:39.010' AS DateTime), N'User_1', 1, 1, 1, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (6, CAST(N'2019-02-11T11:09:22.257' AS DateTime), N'User_1', 1, 1, 1, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (7, CAST(N'2019-02-19T13:44:53.333' AS DateTime), N'User_1', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (8, CAST(N'2019-02-19T14:20:31.320' AS DateTime), N'User_1', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (9, CAST(N'2019-02-19T15:03:25.833' AS DateTime), N'User_1', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (10, CAST(N'2019-02-21T10:04:36.207' AS DateTime), N'User_1', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (11, CAST(N'2019-03-03T20:35:55.467' AS DateTime), N'User_1', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (12, CAST(N'2019-03-04T16:42:23.687' AS DateTime), N'User_1', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (13, CAST(N'2019-03-04T16:42:58.557' AS DateTime), N'User_1', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (14, CAST(N'2019-03-12T13:28:33.713' AS DateTime), N'User_1', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (15, CAST(N'2019-03-13T08:36:04.023' AS DateTime), N'User_1', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (16, CAST(N'2019-03-15T09:33:10.267' AS DateTime), N'PonomarenkoNV', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (17, CAST(N'2019-03-15T14:28:58.760' AS DateTime), N'PonomarenkoNV', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (18, CAST(N'2019-03-15T14:49:05.823' AS DateTime), N'PonomarenkoNV', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (19, CAST(N'2019-03-18T09:11:42.513' AS DateTime), N'ShalaevaVI', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (20, CAST(N'2019-03-18T09:11:49.913' AS DateTime), N'ShalaevaVI', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (21, CAST(N'2019-03-22T14:28:38.193' AS DateTime), N'ShalaevaVI', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (22, CAST(N'2019-03-22T14:28:47.147' AS DateTime), N'ShalaevaVI', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (23, CAST(N'2019-03-22T14:28:52.560' AS DateTime), N'ShalaevaVI', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (24, CAST(N'2019-03-22T15:15:50.507' AS DateTime), N'ShalaevaVI', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (25, CAST(N'2019-03-25T07:10:50.747' AS DateTime), N'GilukVN', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (26, CAST(N'2019-03-27T13:39:20.393' AS DateTime), N'PonomarenkoNV', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (27, CAST(N'2019-03-28T08:36:33.583' AS DateTime), N'OdnovolAA', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (28, CAST(N'2019-03-29T11:35:29.953' AS DateTime), N'GilukVN', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (29, CAST(N'2019-04-01T08:04:12.853' AS DateTime), N'KuriloII', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (30, CAST(N'2019-04-01T11:43:08.203' AS DateTime), N'KuriloII', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (31, CAST(N'2019-04-01T14:02:59.983' AS DateTime), N'KuriloII', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (32, CAST(N'2019-04-01T14:03:10.677' AS DateTime), N'KuriloII', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (33, CAST(N'2019-04-01T14:03:18.677' AS DateTime), N'KuriloII', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (34, CAST(N'2019-04-02T10:07:28.987' AS DateTime), N'GilukVN', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (35, CAST(N'2019-04-02T12:21:33.200' AS DateTime), N'GilukVN', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (36, CAST(N'2019-04-04T15:22:10.653' AS DateTime), N'PonomarenkoNV', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (37, CAST(N'2019-04-05T07:00:33.187' AS DateTime), N'OdnovolAA', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (38, CAST(N'2019-04-09T13:52:03.447' AS DateTime), N'OdnovolAA', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (39, CAST(N'2019-04-10T09:31:22.463' AS DateTime), N'GilukVN', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (40, CAST(N'2019-04-10T11:13:50.583' AS DateTime), N'GilukVN', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (41, CAST(N'2019-04-12T13:34:56.673' AS DateTime), N'PonomarenkoNV', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (42, CAST(N'2019-04-13T09:12:41.600' AS DateTime), N'OdnovolAA', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (43, CAST(N'2019-04-15T04:41:07.257' AS DateTime), N'ShalaevaVI', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (44, CAST(N'2019-04-17T11:29:04.587' AS DateTime), N'OdnovolAA', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (45, CAST(N'2019-04-19T14:13:44.517' AS DateTime), N'ShalaevaVI', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (46, CAST(N'2019-04-22T08:19:51.957' AS DateTime), N'GilukVN', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (47, CAST(N'2019-04-22T08:29:43.237' AS DateTime), N'GilukVN', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (48, CAST(N'2019-04-25T11:25:38.163' AS DateTime), N'OdnovolAA', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (49, CAST(N'2019-04-26T06:49:04.370' AS DateTime), N'GilukVN', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (50, CAST(N'2019-04-26T12:30:49.013' AS DateTime), N'GilukVN', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (51, CAST(N'2019-04-27T05:22:50.513' AS DateTime), N'ShalaevaVI', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (52, CAST(N'2019-04-29T07:17:23.213' AS DateTime), N'OdnovolAA', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (53, CAST(N'2019-04-30T19:20:34.150' AS DateTime), N'OdnovolAA', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (54, CAST(N'2019-05-02T13:57:01.763' AS DateTime), N'KuriloII', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (55, CAST(N'2019-05-03T12:28:48.363' AS DateTime), N'OdnovolAA', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (56, CAST(N'2019-05-07T06:58:26.893' AS DateTime), N'OdnovolAA', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (57, CAST(N'2019-05-07T11:37:45.583' AS DateTime), N'OdnovolAA', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (58, CAST(N'2019-05-08T08:26:28.487' AS DateTime), N'GilukVN', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (59, CAST(N'2019-05-08T20:59:14.483' AS DateTime), N'OdnovolAA', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (60, CAST(N'2019-05-08T21:00:07.980' AS DateTime), N'OdnovolAA', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (61, CAST(N'2019-05-09T00:15:53.157' AS DateTime), N'ShalaevaVI', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (62, CAST(N'2019-05-11T08:34:36.637' AS DateTime), N'OdnovolAA', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (63, CAST(N'2019-05-13T17:46:13.707' AS DateTime), N'ShalaevaVI', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (64, CAST(N'2019-05-13T17:46:25.977' AS DateTime), N'ShalaevaVI', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (65, CAST(N'2019-05-15T10:11:20.157' AS DateTime), N'OdnovolAA', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (66, CAST(N'2019-05-16T08:53:42.870' AS DateTime), N'GilukVN', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (67, CAST(N'2019-05-16T14:27:58.967' AS DateTime), N'GilukVN', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (68, CAST(N'2019-05-17T00:02:28.587' AS DateTime), N'ShalaevaVI', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (69, CAST(N'2019-05-22T08:41:47.887' AS DateTime), N'PonomarenkoNV', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (70, CAST(N'2019-05-22T08:41:52.450' AS DateTime), N'PonomarenkoNV', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (71, CAST(N'2019-05-22T11:45:24.957' AS DateTime), N'PonomarenkoNV', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (72, CAST(N'2019-05-24T07:30:28.377' AS DateTime), N'KuriloII', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (73, CAST(N'2019-05-25T06:24:19.157' AS DateTime), N'ShalaevaVI', 1, 0, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (74, CAST(N'2019-05-27T14:02:45.270' AS DateTime), N'OdnovolAA', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (75, CAST(N'2019-05-27T14:03:02.533' AS DateTime), N'OdnovolAA', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (76, CAST(N'2019-05-27T14:02:05.160' AS DateTime), N'OdnovolAA', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (77, CAST(N'2019-05-29T08:11:23.193' AS DateTime), N'ShalaevaVI', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (78, CAST(N'2019-05-29T11:25:56.497' AS DateTime), N'ShalaevaVI', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (79, CAST(N'2019-05-30T07:56:19.340' AS DateTime), N'PonomarenkoNV', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (80, CAST(N'2019-05-30T09:37:01.433' AS DateTime), N'PonomarenkoNV', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (81, CAST(N'2019-05-31T11:53:21.337' AS DateTime), N'OdnovolAA', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (82, CAST(N'2019-05-31T11:52:06.940' AS DateTime), N'OdnovolAA', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (83, CAST(N'2019-06-01T20:22:43.067' AS DateTime), N'OdnovolAA', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (84, CAST(N'2019-06-03T08:19:55.633' AS DateTime), N'PonomarenkoNV', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (85, CAST(N'2019-06-04T14:39:53.100' AS DateTime), N'OdnovolAA', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (86, CAST(N'2019-06-04T15:14:16.453' AS DateTime), N'OdnovolAA', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (87, CAST(N'2019-06-05T21:05:27.707' AS DateTime), N'OdnovolAA', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (88, CAST(N'2019-06-09T23:36:52.403' AS DateTime), N'OdnovolAA', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (89, CAST(N'2019-06-10T14:31:52.883' AS DateTime), N'ShalaevaVI', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (90, CAST(N'2019-06-10T14:36:35.747' AS DateTime), N'ShalaevaVI', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (91, CAST(N'2019-06-10T14:38:10.530' AS DateTime), N'ShalaevaVI', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (92, CAST(N'2019-06-14T13:44:25.973' AS DateTime), N'ShalaevaVI', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (93, CAST(N'2019-06-19T14:50:38.180' AS DateTime), N'PonomarenkoNV', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (94, CAST(N'2019-06-20T08:53:53.840' AS DateTime), N'OdnovolAA', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (95, CAST(N'2019-06-20T08:54:00.910' AS DateTime), N'OdnovolAA', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (96, CAST(N'2019-06-21T10:12:14.227' AS DateTime), N'KuriloII', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (97, CAST(N'2019-06-26T00:36:53.340' AS DateTime), N'OdnovolAA', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (98, CAST(N'2019-06-27T08:54:40.880' AS DateTime), N'PonomarenkoNV', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (99, CAST(N'2019-06-30T06:42:29.613' AS DateTime), N'OdnovolAA', 0, 1, 0, 0)
GO
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (100, CAST(N'2019-07-02T09:21:42.227' AS DateTime), N'OdnovolAA', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (101, CAST(N'2019-07-02T14:26:33.523' AS DateTime), N'OdnovolAA', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (102, CAST(N'2019-07-04T05:29:52.820' AS DateTime), N'OdnovolAA', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (103, CAST(N'2019-07-07T23:49:09.053' AS DateTime), N'OdnovolAA', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (104, CAST(N'2019-07-08T09:35:28.503' AS DateTime), N'ShalaevaVI', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (105, CAST(N'2019-07-08T13:13:42.550' AS DateTime), N'ShalaevaVI', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (106, CAST(N'2019-07-08T13:13:53.550' AS DateTime), N'ShalaevaVI', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (107, CAST(N'2019-07-08T13:25:24.033' AS DateTime), N'ShalaevaVI', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (108, CAST(N'2019-07-12T05:02:52.397' AS DateTime), N'OdnovolAA', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (109, CAST(N'2019-07-12T14:19:50.620' AS DateTime), N'ShalaevaVI', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (110, CAST(N'2019-07-12T14:20:27.293' AS DateTime), N'ShalaevaVI', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (111, CAST(N'2019-07-14T10:00:04.213' AS DateTime), N'OdnovolAA', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (112, CAST(N'2019-07-17T08:49:35.633' AS DateTime), N'PonomarenkoNV', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (113, CAST(N'2019-07-18T14:05:29.567' AS DateTime), N'OdnovolAA', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (114, CAST(N'2019-07-18T14:10:11.870' AS DateTime), N'OdnovolAA', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (115, CAST(N'2019-07-24T08:28:49.067' AS DateTime), N'ShalaevaVI', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (116, CAST(N'2019-07-29T15:05:39.253' AS DateTime), N'PonomarenkoNV', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (117, CAST(N'2019-07-29T15:05:54.757' AS DateTime), N'PonomarenkoNV', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (118, CAST(N'2019-08-02T15:56:55.667' AS DateTime), N'PonomarenkoNV', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (119, CAST(N'2019-08-02T15:57:18.700' AS DateTime), N'PonomarenkoNV', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (120, CAST(N'2019-08-06T08:37:05.447' AS DateTime), N'PonomarenkoNV', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (121, CAST(N'2019-08-07T09:52:49.483' AS DateTime), N'OdnovolAA', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (122, CAST(N'2019-08-07T09:53:52.757' AS DateTime), N'OdnovolAA', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (123, CAST(N'2019-08-08T08:59:03.487' AS DateTime), N'GilukVN', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (124, CAST(N'2019-08-08T13:32:20.157' AS DateTime), N'GilukVN', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (125, CAST(N'2019-08-09T06:45:56.957' AS DateTime), N'OdnovolAA', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (126, CAST(N'2019-08-14T07:59:23.160' AS DateTime), N'PonomarenkoNV', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (127, CAST(N'2019-08-14T09:30:13.390' AS DateTime), N'PonomarenkoNV', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (128, CAST(N'2019-08-14T10:30:56.023' AS DateTime), N'PonomarenkoNV', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (129, CAST(N'2019-08-19T15:38:03.697' AS DateTime), N'OdnovolAA', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (130, CAST(N'2019-08-19T15:38:20.297' AS DateTime), N'OdnovolAA', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (131, CAST(N'2019-08-20T23:31:26.540' AS DateTime), N'OdnovolAA', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (132, CAST(N'2019-08-22T15:03:31.253' AS DateTime), N'PonomarenkoNV', 1, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (133, CAST(N'2019-08-22T15:04:18.780' AS DateTime), N'PonomarenkoNV', 1, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (134, CAST(N'2019-08-22T15:58:01.697' AS DateTime), N'PonomarenkoNV', 1, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (135, CAST(N'2019-08-23T07:25:29.387' AS DateTime), N'OdnovolAA', 1, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (136, CAST(N'2019-08-23T07:29:33.467' AS DateTime), N'OdnovolAA', 1, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (137, CAST(N'2019-08-23T07:29:43.567' AS DateTime), N'OdnovolAA', 1, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (138, CAST(N'2019-08-23T07:39:40.593' AS DateTime), N'OdnovolAA', 1, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (139, CAST(N'2019-08-23T07:39:58.073' AS DateTime), N'OdnovolAA', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (140, CAST(N'2019-08-23T07:40:08.513' AS DateTime), N'OdnovolAA', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (141, CAST(N'2019-08-23T13:52:23.213' AS DateTime), N'OdnovolAA', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (142, CAST(N'2019-08-23T13:52:46.927' AS DateTime), N'OdnovolAA', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (143, CAST(N'2019-08-23T13:53:04.847' AS DateTime), N'OdnovolAA', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (144, CAST(N'2019-08-23T14:00:18.133' AS DateTime), N'OdnovolAA', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (145, CAST(N'2019-08-23T14:03:47.800' AS DateTime), N'OdnovolAA', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (146, CAST(N'2019-08-23T15:01:51.480' AS DateTime), N'OdnovolAA', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (147, CAST(N'2019-08-27T10:44:47.107' AS DateTime), N'OdnovolAA', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (148, CAST(N'2019-08-29T08:28:12.497' AS DateTime), N'ShalaevaVI', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (149, CAST(N'2019-08-29T14:42:53.327' AS DateTime), N'ShalaevaVI', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (150, CAST(N'2019-08-29T14:43:13.630' AS DateTime), N'ShalaevaVI', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (151, CAST(N'2019-08-29T14:53:55.300' AS DateTime), N'ShalaevaVI', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (152, CAST(N'2019-08-29T14:55:18.637' AS DateTime), N'ShalaevaVI', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (153, CAST(N'2019-08-29T15:04:34.587' AS DateTime), N'ShalaevaVI', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (154, CAST(N'2019-08-30T09:06:49.667' AS DateTime), N'PonomarenkoNV', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (155, CAST(N'2019-08-31T10:24:09.160' AS DateTime), N'OdnovolAA', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (156, CAST(N'2019-08-31T12:07:51.823' AS DateTime), N'OdnovolAA', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (157, CAST(N'2019-08-31T18:31:15.900' AS DateTime), N'OdnovolAA', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (158, CAST(N'2019-09-03T08:25:20.007' AS DateTime), N'PonomarenkoNV', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (159, CAST(N'2019-09-03T08:27:10.693' AS DateTime), N'PonomarenkoNV', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (160, CAST(N'2019-09-03T08:31:17.397' AS DateTime), N'PonomarenkoNV', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (161, CAST(N'2019-09-03T08:45:07.990' AS DateTime), N'PonomarenkoNV', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (162, CAST(N'2019-09-03T08:45:18.537' AS DateTime), N'PonomarenkoNV', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (163, CAST(N'2019-09-03T16:34:56.077' AS DateTime), N'PonomarenkoNV', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (164, CAST(N'2019-09-03T19:32:08.403' AS DateTime), N'ShalaevaVI', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (165, CAST(N'2019-09-04T09:48:36.827' AS DateTime), N'OdnovolAA', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (166, CAST(N'2019-09-04T11:27:32.203' AS DateTime), N'OdnovolAA', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (167, CAST(N'2019-09-04T13:19:32.107' AS DateTime), N'OdnovolAA', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (168, CAST(N'2019-09-04T19:01:16.043' AS DateTime), N'PonomarenkoNV', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (169, CAST(N'2019-09-05T19:43:25.663' AS DateTime), N'KuriloII', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (170, CAST(N'2019-09-05T19:46:01.437' AS DateTime), N'KuriloII', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (171, CAST(N'2019-09-06T12:57:55.240' AS DateTime), N'ShalaevaVI', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (172, CAST(N'2019-09-08T07:05:30.147' AS DateTime), N'OdnovolAA', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (173, CAST(N'2019-09-09T09:57:37.120' AS DateTime), N'GilukVN', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (174, CAST(N'2019-09-09T09:58:22.170' AS DateTime), N'GilukVN', 0, 1, 0, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (175, CAST(N'2019-09-09T10:28:04.327' AS DateTime), N'GilukVN', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (176, CAST(N'2019-09-10T10:09:13.693' AS DateTime), N'ShalaevaVI', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (177, CAST(N'2019-09-10T14:58:48.527' AS DateTime), N'ShalaevaVI', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (178, CAST(N'2019-09-11T09:49:59.370' AS DateTime), N'PonomarenkoNV', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (179, CAST(N'2019-09-11T10:09:30.500' AS DateTime), N'PonomarenkoNV', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (180, CAST(N'2019-09-11T14:24:53.493' AS DateTime), N'PonomarenkoNV', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (181, CAST(N'2019-09-11T14:36:36.047' AS DateTime), N'PonomarenkoNV', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (182, CAST(N'2019-09-12T07:17:26.797' AS DateTime), N'OdnovolAA', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (183, CAST(N'2019-09-12T07:19:02.210' AS DateTime), N'OdnovolAA', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (184, CAST(N'2019-09-12T07:19:11.460' AS DateTime), N'OdnovolAA', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (185, CAST(N'2019-09-12T08:34:57.460' AS DateTime), N'OdnovolAA', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (186, CAST(N'2019-09-12T16:32:29.577' AS DateTime), N'OdnovolAA', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (187, CAST(N'2019-09-13T14:03:11.413' AS DateTime), N'GilukVN', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (188, CAST(N'2019-09-13T15:17:11.110' AS DateTime), N'GilukVN', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (189, CAST(N'2019-09-13T21:16:59.143' AS DateTime), N'OdnovolAA', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (190, CAST(N'2019-09-14T05:43:22.090' AS DateTime), N'OdnovolAA', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (191, CAST(N'2019-09-17T15:03:09.280' AS DateTime), N'GilukVN', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (192, CAST(N'2019-09-17T18:57:19.333' AS DateTime), N'OdnovolAA', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (193, CAST(N'2019-09-20T17:28:14.477' AS DateTime), N'OdnovolAA', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (194, CAST(N'2019-09-22T06:33:39.750' AS DateTime), N'OdnovolAA', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (195, CAST(N'2019-09-23T08:28:00.427' AS DateTime), N'PonomarenkoNV', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (196, CAST(N'2019-09-23T15:18:10.110' AS DateTime), N'PonomarenkoNV', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (197, CAST(N'2019-09-23T21:19:35.923' AS DateTime), N'ShalaevaVI', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (198, CAST(N'2019-09-25T14:54:41.240' AS DateTime), N'GilukVN', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (199, CAST(N'2019-09-25T15:15:36.343' AS DateTime), N'GilukVN', 0, 0, 0, 1)
GO
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (200, CAST(N'2019-09-26T07:46:14.577' AS DateTime), N'ShalaevaVI', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (201, CAST(N'2019-09-26T08:54:04.123' AS DateTime), N'ShalaevaVI', 0, 0, 0, 1)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (202, CAST(N'2019-09-26T10:04:04.737' AS DateTime), N'ShalaevaVI', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (203, CAST(N'2019-09-26T10:15:34.233' AS DateTime), N'ShalaevaVI', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (204, CAST(N'2019-09-26T11:40:41.800' AS DateTime), N'ShalaevaVI', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (205, CAST(N'2019-09-26T13:09:01.023' AS DateTime), N'ShalaevaVI', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (206, CAST(N'2019-09-27T08:57:31.597' AS DateTime), N'PonomarenkoNV', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (207, CAST(N'2019-09-27T10:06:08.787' AS DateTime), N'PonomarenkoNV', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (208, CAST(N'2019-09-27T11:26:00.950' AS DateTime), N'PonomarenkoNV', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (209, CAST(N'2019-09-27T12:53:17.070' AS DateTime), N'PonomarenkoNV', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (210, CAST(N'2019-09-27T13:05:51.413' AS DateTime), N'PonomarenkoNV', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (211, CAST(N'2019-09-27T14:04:54.713' AS DateTime), N'PonomarenkoNV', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (212, CAST(N'2019-09-29T20:11:51.463' AS DateTime), N'OdnovolAA', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (213, CAST(N'2019-09-30T08:27:58.927' AS DateTime), N'ShalaevaVI', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (214, CAST(N'2019-09-30T15:21:13.677' AS DateTime), N'ShalaevaVI', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (215, CAST(N'2019-09-30T15:21:22.717' AS DateTime), N'ShalaevaVI', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (216, CAST(N'2019-10-02T10:41:37.560' AS DateTime), N'OdnovolAA', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (217, CAST(N'2019-10-03T22:39:29.683' AS DateTime), N'OdnovolAA', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (218, CAST(N'2019-10-04T15:26:34.610' AS DateTime), N'ShalaevaVI', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (219, CAST(N'2019-10-06T10:14:23.217' AS DateTime), N'OdnovolAA', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (220, CAST(N'2019-10-09T09:05:33.010' AS DateTime), N'PonomarenkoNV', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (221, CAST(N'2019-10-09T10:48:53.627' AS DateTime), N'PonomarenkoNV', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (222, CAST(N'2019-10-10T14:38:03.690' AS DateTime), N'OdnovolAA', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (223, CAST(N'2019-10-11T05:48:45.867' AS DateTime), N'PonomarenkoNV', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (224, CAST(N'2019-10-11T18:59:05.730' AS DateTime), N'OdnovolAA', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (225, CAST(N'2019-10-14T06:57:33.860' AS DateTime), N'OdnovolAA', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (226, CAST(N'2019-10-16T09:07:39.873' AS DateTime), N'ShalaevaVI', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (227, CAST(N'2019-10-17T07:29:17.690' AS DateTime), N'PonomarenkoNV', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (228, CAST(N'2019-10-17T07:29:40.537' AS DateTime), N'PonomarenkoNV', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (229, CAST(N'2019-10-18T10:29:17.060' AS DateTime), N'OdnovolAA', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (230, CAST(N'2019-10-18T10:30:03.737' AS DateTime), N'OdnovolAA', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (231, CAST(N'2019-10-18T10:55:13.080' AS DateTime), N'OdnovolAA', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (232, CAST(N'2019-10-18T15:44:19.493' AS DateTime), N'OdnovolAA', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (233, CAST(N'2019-10-18T15:44:27.710' AS DateTime), N'OdnovolAA', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (234, CAST(N'2019-10-19T12:35:10.750' AS DateTime), N'GilukVN', 0, 0, 1, 0)
INSERT [dbo].[Tanks_A95] ([id], [changed], [user], [B17], [B18], [B19], [B20]) VALUES (1234, CAST(N'2019-10-19T19:04:58.027' AS DateTime), N'OdnovolAA', 0, 0, 1, 0)
SET IDENTITY_INSERT [dbo].[Tanks_A95] OFF
