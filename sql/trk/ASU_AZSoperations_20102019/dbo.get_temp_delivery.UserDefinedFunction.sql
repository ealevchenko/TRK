USE [ASU_AZSoperations]
GO
/****** Object:  UserDefinedFunction [dbo].[get_temp_delivery]    Script Date: 20.10.2019 16:17:39 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO






CREATE FUNCTION [dbo].[get_temp_delivery](@date_start datetime, @fuel_type int, @tank NVARCHAR(3)) 
	RETURNS float
	AS
BEGIN 
	declare @tab table (
	 ratio_tv float
	)
	insert @tab
	select ((([volume_delivery]/(len([tank_num]) - len(replace([tank_num], ',', ''))+1))/(SELECT sum([volume_delivery]/(len([tank_num]) - len(replace([tank_num], ',', ''))+1)) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks]  where [dt]=@date_start and [fuel_type]=@fuel_type  and [tank_num] like(N'%'+RTRIM(@tank)+'%')))*[temp_delivery])
	FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] 
	where [dt]=@date_start and [fuel_type]=@fuel_type  and [tank_num] like(N'%'+RTRIM(@tank)+'%')

		return (select sum(ratio_tv) from @tab)
	END
GO
