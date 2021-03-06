/****** Script for SelectTopNRows command from SSMS  ******/
SELECT [ID]
      ,[TimeStamp]
      ,[Operator]
      ,[SmenaID]
      ,[1-1]
      ,[1-2]
      ,[2-1]
      ,[2-2]
      ,[3-1]
      ,[3-2]
      ,[4-1]
      ,[4-2]
      ,[5-1]
      ,[5-2]
      ,[6-1]
      ,[6-2]
      ,[7-1]
      ,[7-2]
      ,[7-3]
      ,[7-4]
      ,[7-5]
      ,[7-6]
      ,[7-7]
      ,[7-8]
      ,[8-1]
      ,[8-2]
      ,[8-3]
      ,[8-4]
      ,[8-5]
      ,[8-6]
      ,[8-7]
      ,[8-8]
      ,[9-1]
  FROM [ASU_AZSoperations].[dbo].[GunsCnts] order by 1 desc

		declare @1_1 int
		declare @1_2 int
		declare @2_1 int
		declare @2_2 int
		declare @3_1 int
		declare @3_2 int
		declare @4_1 int
		declare @4_2 int
		declare @5_1 int
		declare @5_2 int
		declare @6_1 int
		declare @6_2 int
		declare @7_1 int
		declare @7_2 int
		declare @7_3 int
		declare @7_4 int
		declare @7_5 int
		declare @7_6 int
		declare @7_7 int
		declare @7_8 int
		declare @8_1 int
		declare @8_2 int
		declare @8_3 int
		declare @8_4 int
		declare @8_5 int
		declare @8_6 int
		declare @8_7 int
		declare @8_8 int
		declare @9_1 int

		set @1_1 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=1 order by [stop_datetime] desc)
		set @1_2 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=2 order by [stop_datetime] desc)
		set @2_1 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=3 order by [stop_datetime] desc)
		set @2_2 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=4 order by [stop_datetime] desc)
		set @3_1 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=5 order by [stop_datetime] desc)
		set @3_2 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=6 order by [stop_datetime] desc)
		set @4_1 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=7 order by [stop_datetime] desc)
		set @4_2 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=8 order by [stop_datetime] desc)
		set @5_1 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=9 order by [stop_datetime] desc)
		set @5_2 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=10 order by [stop_datetime] desc)
		set @6_1 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=11 order by [stop_datetime] desc)
		set @6_2 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=12 order by [stop_datetime] desc)
		set @7_1 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=13 order by [stop_datetime] desc)
		set @7_2 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=14 order by [stop_datetime] desc)
		set @7_3 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=15 order by [stop_datetime] desc)
		set @7_4 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=16 order by [stop_datetime] desc)
		set @7_5 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=17 order by [stop_datetime] desc)
		set @7_6 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=18 order by [stop_datetime] desc)
		set @7_7 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=19 order by [stop_datetime] desc)
		set @7_8 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=20 order by [stop_datetime] desc)
		set @8_1 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=21 order by [stop_datetime] desc)
		set @8_2 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=22 order by [stop_datetime] desc)
		set @8_3 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=23 order by [stop_datetime] desc)
		set @8_4 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=24 order by [stop_datetime] desc)
		set @8_5 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=25 order by [stop_datetime] desc)
		set @8_6 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=26 order by [stop_datetime] desc)
		set @8_7 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=27 order by [stop_datetime] desc)
		set @8_8 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=26 order by [stop_datetime] desc)
		set @9_1 = (SELECT TOP (1) [stop_counter] FROM [ASU_AZSoperations].[dbo].[FuelSale] where [stop_datetime] is not null and [trk_num]<10 and num=29 order by [stop_datetime] desc)
  
  select
	[TimeStamp] = getdate()
	,[Operator] = (SELECT TOP (1) [UserName] FROM [ASU_AZSoperations].[dbo].[UsersActions] order by [TimeStmp] desc)
	,[SmenaID] = (SELECT TOP (1) [SessionID] FROM [ASU_AZSoperations].[dbo].[UsersActions]  order by [TimeStmp] desc)
	,[1-1] = (CASE WHEN @1_1 is not null THEN @1_1 ELSE 0 END)
      ,[1-2] = (CASE WHEN @1_2 is not null THEN @1_2 ELSE 0 END)
      ,[2-1] = (CASE WHEN @2_1 is not null THEN @2_1 ELSE 0 END)
      ,[2-2] = (CASE WHEN @2_2 is not null THEN @2_2 ELSE 0 END)
      ,[3-1] = (CASE WHEN @3_1 is not null THEN @3_1 ELSE 0 END)
      ,[3-2] = (CASE WHEN @3_2 is not null THEN @3_2 ELSE 0 END)
      ,[4-1] = (CASE WHEN @4_1 is not null THEN @4_1 ELSE 101527816 END)
      ,[4-2] = (CASE WHEN @4_2 is not null THEN @4_2 ELSE 0 END)
      ,[5-1] = (CASE WHEN @5_1 is not null THEN @5_1 ELSE 151631220 END)
      ,[5-2] = (CASE WHEN @5_2 is not null THEN @5_2 ELSE 0 END)
      ,[6-1] = (CASE WHEN @6_1 is not null THEN @6_1 ELSE 0 END)
      ,[6-2] = (CASE WHEN @6_2 is not null THEN @6_2 ELSE 0 END)
      ,[7-1] = (CASE WHEN @7_1 is not null THEN @7_1 ELSE 3276204 END)
      ,[7-2] = (CASE WHEN @7_2 is not null THEN @7_2 ELSE 17325638 END)
      ,[7-3] = (CASE WHEN @7_3 is not null THEN @7_3 ELSE 0 END)
      ,[7-4] = (CASE WHEN @7_4 is not null THEN @7_4 ELSE 3318102 END)
      ,[7-5] = (CASE WHEN @7_5 is not null THEN @7_5 ELSE 0 END)
      ,[7-6] = (CASE WHEN @7_6 is not null THEN @7_6 ELSE 3943574 END)
      ,[7-7] = (CASE WHEN @7_7 is not null THEN @7_7 ELSE 0 END)
      ,[7-8] = (CASE WHEN @7_8 is not null THEN @7_8 ELSE 14890736 END)
      ,[8-1] = (CASE WHEN @8_1 is not null THEN @8_1 ELSE 13105449 END)
      ,[8-2] = (CASE WHEN @8_2 is not null THEN @8_2 ELSE 0 END)
      ,[8-3] = (CASE WHEN @8_3 is not null THEN @8_3 ELSE 0 END)
      ,[8-4] = (CASE WHEN @8_4 is not null THEN @8_4 ELSE 0 END)
      ,[8-5] = (CASE WHEN @8_5 is not null THEN @8_5 ELSE 102730028 END)
      ,[8-6] = (CASE WHEN @8_6 is not null THEN @8_6 ELSE 25327545 END)
      ,[8-7] = (CASE WHEN @8_7 is not null THEN @8_7 ELSE 6803223 END)
      ,[8-8] = (CASE WHEN @8_8 is not null THEN @8_8 ELSE 7232763 END)
      ,[9-1] = (CASE WHEN @9_1 is not null THEN @9_1 ELSE 0 END)