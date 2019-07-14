USE [ASU_AZSlogs]
GO

/****** Object:  UserDefinedFunction [dbo].[GET_DENS15]    Script Date: 30.06.2019 14:38:32 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE FUNCTION [dbo].[GET_DENS15](@type sysname, @dens float, @temp float) 
	RETURNS float
	AS
	BEGIN 
	
declare @K0 float
declare @K1 float
declare @K2 float

	if (@type = N'107000022' or @type = N'107000023')
	begin
		-- Бензин
		set @K0	= 346.4228;
		set @K1	= 0.43884;
		set @K2	= 0.0;
	end
	if (@type = N'107000024')
	begin
		-- ДТ
		set @K0	= 186.9696;
		set @K1	= 0.4862;
		set @K2	= 0.0;
	end
	if (@type = N'107000027')
	begin
		-- ДТ
		set @K0	= 594.5418;
		set @K1	= 0.0;
		set @K2	= 0.0;
	end
	-----------------------------------------------
-- Коэффициент 1 приближение
declare @Kf1 float
declare @p15_1 float

set @Kf1=((@K0+@K1* @dens)/(@dens*@dens))
set @p15_1=(@dens*EXP(-@Kf1*(15-@temp)*(1+0.8*@Kf1*(15-@temp))))/1

--select @Kf1, @p15_1;
-----------------------------------------------
-- Коэффициент 2 приближение
declare @Kf2 float
declare @p15_2 float

set @Kf2=((@K0+@K1* @p15_1)/(@p15_1*@p15_1))
set @p15_2=(@dens*EXP(-@Kf2*(15-@temp)*(1+0.8*@Kf2*(15-@temp))))/1

--select @Kf2, @p15_2, @p15_2-@p15_1
-----------------------------------------------
-- Коэффициент 3 приближение
declare @Kf3 float
declare @p15_3 float

set @Kf3=((@K0+@K1* @p15_2)/(@p15_2*@p15_2))
set @p15_3=(@dens*EXP(-@Kf3*(15-@temp)*(1+0.8*@Kf3*(15-@temp))))/1
return @p15_3;
--select @Kf3, @p15_3, @p15_3-@p15_2
END



GO


