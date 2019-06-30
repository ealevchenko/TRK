

declare @dens float
declare @temp float
declare @volume float


set @dens = 743.56735;
set @temp = 20.80;
set @volume = 9024;


declare @K0 float
declare @K1 float
declare @K2 float
-- Бензин
set @K0	= 346.4228;
set @K1	= 0.43884;
set @K2	= 0.0;
-----------------------------------------------
-- Коэффициент 1 приближение
declare @Kf1 float
declare @p15_1 float

set @Kf1=((@K0+@K1* @dens)/(@dens*@dens))
set @p15_1=(@dens*EXP(-@Kf1*(15-@temp)*(1+0.8*@Kf1*(15-@temp))))/1

select @Kf1, @p15_1;
-----------------------------------------------
-- Коэффициент 2 приближение
declare @Kf2 float
declare @p15_2 float

set @Kf2=((@K0+@K1* @p15_1)/(@p15_1*@p15_1))
set @p15_2=(@dens*EXP(-@Kf2*(15-@temp)*(1+0.8*@Kf2*(15-@temp))))/1

select @Kf2, @p15_2, @p15_2-@p15_1
-----------------------------------------------
-- Коэффициент 3 приближение
declare @Kf3 float
declare @p15_3 float

set @Kf3=((@K0+@K1* @p15_2)/(@p15_2*@p15_2))
set @p15_3=(@dens*EXP(-@Kf3*(15-@temp)*(1+0.8*@Kf3*(15-@temp))))/1

select @Kf3, @p15_3, @p15_3-@p15_2

-----------------------------------------------
-- Объем 15 приближение
declare @V15 float
set @V15 = @volume*EXP(-@Kf3*(15-@temp)*(1+0.8*@Kf3*(15-@temp)))

select @volume, @V15