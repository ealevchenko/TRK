use [ASU_AZSoperations]

declare @date datetime
set @date = getdate();

declare @date_start datetime
declare @date_stop datetime

set @date_start = CONVERT(DATETIME, CONVERT(char(11), getdate(),20) + '00:00:00', 102)
set @date_start = CONVERT(DATETIME, '2019-08-01 00:00:00', 102);
set @date_stop = DATEADD(day,+1, @date_start)
select @date_start, @date_stop

-- A92 
declare @type_107000022 sysname = N'107000022'
declare @volume_pipe_107000022 float = 4577;
declare @mass_pipe_107000022 float = 3364.94;
declare @dens_pipe_107000022_calc float = (@mass_pipe_107000022/@volume_pipe_107000022)*1000

--select @volume_pipe_107000022, @mass_pipe_107000022, @dens_pipe_107000022_calc

--> Получим текущие значения на указаную дату
--> B2
declare @level_B2 float =(SELECT top (1) OWN_tankB2_level_VALUE FROM [ASU_AZSlogs].dbo.BT2 where OWN_tankB2_mass_TIMESTAMP <= @date_start order by OWN_tankB2_mass_TIMESTAMP desc);
declare @volume_B2 float =(SELECT top (1) OWN_tankB2_volume_VALUE FROM [ASU_AZSlogs].dbo.BT2 where OWN_tankB2_mass_TIMESTAMP <= @date_start order by OWN_tankB2_mass_TIMESTAMP desc);
declare @dens_B2 float =(SELECT top (1) OWN_tankB2_dens_VALUE FROM [ASU_AZSlogs].dbo.BT2 where OWN_tankB2_mass_TIMESTAMP <= @date_start order by OWN_tankB2_mass_TIMESTAMP desc);
declare @mass_B2 float =(SELECT top (1) OWN_tankB2_mass_VALUE FROM [ASU_AZSlogs].dbo.BT2 where OWN_tankB2_mass_TIMESTAMP <= @date_start order by OWN_tankB2_mass_TIMESTAMP desc);
declare @temp_B2 float =(SELECT top (1) CAST(OWN_tankB2_temp_VALUE as float)/10 FROM [ASU_AZSlogs].dbo.BT2 where OWN_tankB2_mass_TIMESTAMP <= @date_start order by OWN_tankB2_mass_TIMESTAMP desc);
declare @dens_B2_calc float = (CASE WHEN (@volume_B2 is not null AND @mass_B2 is not null and @volume_B2 <>0) THEN (@mass_B2/@volume_B2)*1000 ELSE 0 END);
--> B3
declare @level_B3 float =(SELECT top (1) OWN_tankB3_level_VALUE FROM [ASU_AZSlogs].dbo.BT3 where OWN_tankB3_mass_TIMESTAMP <= @date_start order by OWN_tankB3_mass_TIMESTAMP desc);
declare @volume_B3 float =(SELECT top (1) OWN_tankB3_volume_VALUE FROM [ASU_AZSlogs].dbo.BT3 where OWN_tankB3_mass_TIMESTAMP <= @date_start order by OWN_tankB3_mass_TIMESTAMP desc);
declare @dens_B3 float =(SELECT top (1) OWN_tankB3_dens_VALUE FROM [ASU_AZSlogs].dbo.BT3 where OWN_tankB3_mass_TIMESTAMP <= @date_start order by OWN_tankB3_mass_TIMESTAMP desc);
declare @mass_B3 float =(SELECT top (1) OWN_tankB3_mass_VALUE FROM [ASU_AZSlogs].dbo.BT3 where OWN_tankB3_mass_TIMESTAMP <= @date_start order by OWN_tankB3_mass_TIMESTAMP desc);
declare @temp_B3 float =(SELECT top (1) CAST(OWN_tankB3_temp_VALUE as float)/10 FROM [ASU_AZSlogs].dbo.BT3 where OWN_tankB3_mass_TIMESTAMP <= @date_start order by OWN_tankB3_mass_TIMESTAMP desc);
declare @dens_B3_calc float = (CASE WHEN (@volume_B3 is not null AND @mass_B3 is not null and @volume_B3 <>0) THEN (@mass_B3/@volume_B3)*1000 ELSE 0 END);
--> B9
declare @level_B9 float =(SELECT top (1) OWN_tankB9_level_VALUE FROM [ASU_AZSlogs].dbo.BT9 where OWN_tankB9_mass_TIMESTAMP <= @date_start order by OWN_tankB9_mass_TIMESTAMP desc);
declare @volume_B9 float =(SELECT top (1) OWN_tankB9_volume_VALUE FROM [ASU_AZSlogs].dbo.BT9 where OWN_tankB9_mass_TIMESTAMP <= @date_start order by OWN_tankB9_mass_TIMESTAMP desc);
declare @dens_B9 float =(SELECT top (1) OWN_tankB9_dens_VALUE FROM [ASU_AZSlogs].dbo.BT9 where OWN_tankB9_mass_TIMESTAMP <= @date_start order by OWN_tankB9_mass_TIMESTAMP desc);
declare @mass_B9 float =(SELECT top (1) OWN_tankB9_mass_VALUE FROM [ASU_AZSlogs].dbo.BT9 where OWN_tankB9_mass_TIMESTAMP <= @date_start order by OWN_tankB9_mass_TIMESTAMP desc);
declare @temp_B9 float =(SELECT top (1) CAST(OWN_tankB9_temp_VALUE as float)/10 FROM [ASU_AZSlogs].dbo.BT9 where OWN_tankB9_mass_TIMESTAMP <= @date_start order by OWN_tankB9_mass_TIMESTAMP desc);
declare @dens_B9_calc float = (CASE WHEN (@volume_B9 is not null AND @mass_B9 is not null and @volume_B9 <>0) THEN (@mass_B9/@volume_B9)*1000 ELSE 0 END);
--> B11
declare @level_B11 float =(SELECT top (1) OWN_tankB11_level_VALUE FROM [ASU_AZSlogs].dbo.BT11 where OWN_tankB11_mass_TIMESTAMP <= @date_start order by OWN_tankB11_mass_TIMESTAMP desc);
declare @volume_B11 float =(SELECT top (1) OWN_tankB11_volume_VALUE FROM [ASU_AZSlogs].dbo.BT11 where OWN_tankB11_mass_TIMESTAMP <= @date_start order by OWN_tankB11_mass_TIMESTAMP desc);
declare @dens_B11 float =(SELECT top (1) OWN_tankB11_dens_VALUE FROM [ASU_AZSlogs].dbo.BT11 where OWN_tankB11_mass_TIMESTAMP <= @date_start order by OWN_tankB11_mass_TIMESTAMP desc);
declare @mass_B11 float =(SELECT top (1) OWN_tankB11_mass_VALUE FROM [ASU_AZSlogs].dbo.BT11 where OWN_tankB11_mass_TIMESTAMP <= @date_start order by OWN_tankB11_mass_TIMESTAMP desc);
declare @temp_B11 float =(SELECT top (1) CAST(OWN_tankB11_temp_VALUE as float)/10 FROM [ASU_AZSlogs].dbo.BT11 where OWN_tankB11_mass_TIMESTAMP <= @date_start order by OWN_tankB11_mass_TIMESTAMP desc);
declare @dens_B11_calc float = (CASE WHEN (@volume_B11 is not null AND @mass_B11 is not null and @volume_B11 <>0) THEN (@mass_B11/@volume_B11)*1000 ELSE 0 END);
--> B16
declare @level_B16 float =(SELECT top (1) OWN_tankB16_level_VALUE FROM [ASU_AZSlogs].dbo.BT16 where OWN_tankB16_mass_TIMESTAMP <= @date_start order by OWN_tankB16_mass_TIMESTAMP desc);
declare @volume_B16 float =(SELECT top (1) OWN_tankB16_volume_VALUE FROM [ASU_AZSlogs].dbo.BT16 where OWN_tankB16_mass_TIMESTAMP <= @date_start order by OWN_tankB16_mass_TIMESTAMP desc);
declare @dens_B16 float =(SELECT top (1) OWN_tankB16_dens_VALUE FROM [ASU_AZSlogs].dbo.BT16 where OWN_tankB16_mass_TIMESTAMP <= @date_start order by OWN_tankB16_mass_TIMESTAMP desc);
declare @mass_B16 float =(SELECT top (1) OWN_tankB16_mass_VALUE FROM [ASU_AZSlogs].dbo.BT16 where OWN_tankB16_mass_TIMESTAMP <= @date_start order by OWN_tankB16_mass_TIMESTAMP desc);
declare @temp_B16 float =(SELECT top (1) CAST(OWN_tankB16_temp_VALUE as float)/10 FROM [ASU_AZSlogs].dbo.BT16 where OWN_tankB16_mass_TIMESTAMP <= @date_start order by OWN_tankB16_mass_TIMESTAMP desc);
declare @dens_B16_calc float = (CASE WHEN (@volume_B16 is not null AND @mass_B16 is not null and @volume_B16 <>0) THEN (@mass_B16/@volume_B16)*1000 ELSE 0 END);
--> 
declare @volume_107000022_sum float = (@volume_B2+@volume_B3+@volume_B9+@volume_B11+@volume_B16);
declare @volume_107000022_sum_all float = (@volume_pipe_107000022+@volume_107000022_sum);

---> Отношение объёма по резервуару к общему объёму / Отношение объёма по резервуару к общему объёму без трубопровода
declare @volume_B2_relation_all float = (@volume_B2/@volume_107000022_sum_all); declare @volume_B2_relation float = (@volume_B2/@volume_107000022_sum);
declare @volume_B3_relation_all float = (@volume_B3/@volume_107000022_sum_all); declare @volume_B3_relation float = (@volume_B3/@volume_107000022_sum);
declare @volume_B9_relation_all float = (@volume_B9/@volume_107000022_sum_all); declare @volume_B9_relation float = (@volume_B9/@volume_107000022_sum); 
declare @volume_B11_relation_all float = (@volume_B11/@volume_107000022_sum_all); declare @volume_B11_relation float = (@volume_B11/@volume_107000022_sum); 
declare @volume_B16_relation_all float = (@volume_B16/@volume_107000022_sum_all); declare @volume_B16_relation float = (@volume_B16/@volume_107000022_sum); 
declare @volume_pipe_107000022_relation_all float = (@volume_pipe_107000022/@volume_107000022_sum_all); 
--> Соотношение объёма-плотности (средняя плотность) кг/м3 / Соотношение температура-объём без трубопровода (град. С°)
declare @volume_B2_ratio_all float = (@dens_B2_calc*@volume_B2_relation_all); declare @temp_B2_ratio float = (@temp_B2 * @volume_B2_relation);
declare @volume_B3_ratio_all float = (@dens_B3_calc*@volume_B3_relation_all); declare @temp_B3_ratio float = (@temp_B3 * @volume_B3_relation);
declare @volume_B9_ratio_all float = (@dens_B9_calc*@volume_B9_relation_all); declare @temp_B9_ratio float = (@temp_B9 * @volume_B9_relation);
declare @volume_B11_ratio_all float = (@dens_B11_calc*@volume_B11_relation_all); declare @temp_B11_ratio float = (@temp_B11 * @volume_B11_relation);
declare @volume_B16_ratio_all float = (@dens_B16_calc*@volume_B16_relation_all); declare @temp_B16_ratio float = (@temp_B16 * @volume_B16_relation);
declare @volume_pipe_107000022_ratio_all float = (@dens_pipe_107000022_calc*@volume_pipe_107000022_relation_all);
--> 
declare @temp_pipe_107000022_calc float = (@temp_B2_ratio+@temp_B3_ratio+@temp_B9_ratio+@temp_B11_ratio+@temp_B16_ratio);
--> Приведение к 15
declare @dens_B2_cast15 float =([ASU_AZSlogs].[dbo].[GET_DENS15](@type_107000022, @dens_B2_calc, @temp_B2));
declare @volume_B2_cast15 float =([ASU_AZSlogs].[dbo].[GET_VOLUME15](@type_107000022, @dens_B2_calc, @temp_B2, @volume_B2));
declare @mass_B2_cast15 float = (@mass_B2/@dens_B2_cast15*1000);
declare @dens_B3_cast15 float =([ASU_AZSlogs].[dbo].[GET_DENS15](@type_107000022, @dens_B3_calc, @temp_B3));
declare @volume_B3_cast15 float =([ASU_AZSlogs].[dbo].[GET_VOLUME15](@type_107000022, @dens_B3_calc, @temp_B3, @volume_B3));
declare @mass_B3_cast15 float = (@mass_B3/@dens_B3_cast15*1000);
declare @dens_B9_cast15 float =([ASU_AZSlogs].[dbo].[GET_DENS15](@type_107000022, @dens_B9_calc, @temp_B9));
declare @volume_B9_cast15 float =([ASU_AZSlogs].[dbo].[GET_VOLUME15](@type_107000022, @dens_B9_calc, @temp_B9, @volume_B9));
declare @mass_B9_cast15 float = (@mass_B9/@dens_B9_cast15*1000);
declare @dens_B11_cast15 float =([ASU_AZSlogs].[dbo].[GET_DENS15](@type_107000022, @dens_B11_calc, @temp_B11));
declare @volume_B11_cast15 float =([ASU_AZSlogs].[dbo].[GET_VOLUME15](@type_107000022, @dens_B11_calc, @temp_B11, @volume_B11));
declare @mass_B11_cast15 float = (@mass_B11/@dens_B11_cast15*1000);
declare @dens_B16_cast15 float =([ASU_AZSlogs].[dbo].[GET_DENS15](@type_107000022, @dens_B16_calc, @temp_B16));
declare @volume_B16_cast15 float =([ASU_AZSlogs].[dbo].[GET_VOLUME15](@type_107000022, @dens_B16_calc, @temp_B16, @volume_B16));
declare @mass_B16_cast15 float = (@mass_B16/@dens_B16_cast15*1000);
declare @dens_pipe_cast15 float =([ASU_AZSlogs].[dbo].[GET_DENS15](@type_107000022, @dens_pipe_107000022_calc, @temp_pipe_107000022_calc));
declare @volume_pipe_cast15 float =([ASU_AZSlogs].[dbo].[GET_VOLUME15](@type_107000022, @dens_pipe_107000022_calc, @temp_pipe_107000022_calc, @volume_pipe_107000022));
declare @mass_pipe_cast15 float = (@mass_pipe_107000022/@dens_pipe_cast15*1000);
--> Подведем итог

				select 
				type = @type_107000022,
				date_start = @date_start,
				date_stop = @date_stop,

				--volume_start = @volume_start,
				--mass_start = @mass_start,
				--dens_start = @dens_start,
				--temp_start = @temp_start,
				--volume15_start = @volume15_start,
				--mass15_start = @mass15_start,
				--dens15_start = @dens15_start,

				--volume_coming = @volume_coming,
				--mass_coming = @mass_coming,
				--dens_coming = @dens_coming,
				--temp_coming = @temp_coming,
				--volume15_coming = @volume15_coming,
				--mass15_coming = @mass15_coming,
				--dens15_coming = @dens15_coming,

				--volume_consumption = @volume_consumption,
				--mass_consumption = @mass_consumption,
				--dens_consumption = @dens_consumption,
				--temp_consumption = @temp_consumption,
				--volume15_consumption = @volume15_consumption,
				--mass15_consumption = @mass15_consumption,
				--dens15_consumption = @dens15_consumption,				
			
				--volume_stop = @volume_stop,
				--mass_stop = @mass_stop,
				--dens_stop = @dens_stop,
				--temp_stop = @temp_stop,
				--volume15_stop = @volume15_stop,
				--mass15_stop = @mass15_stop,
				--dens15_stop= @dens15_stop,				
				
				send = null







--select @dens_B2_cast15, @volume_B2_cast15, @mass_B2_cast15



--select @level_B2, @volume_B2, @dens_B2, @dens_B2_calc, @mass_B2, @temp_B2
--select @level_B3, @volume_B3, @dens_B3, @dens_B3_calc, @mass_B3, @temp_B3
--select @level_B9, @volume_B9, @dens_B9, @dens_B9_calc, @mass_B9, @temp_B9
--select @level_B11, @volume_B11, @dens_B11, @dens_B11_calc, @mass_B11, @temp_B11
--select @level_B16, @volume_B16, @dens_B16, @dens_B16_calc, @mass_B16, @temp_B16

--select @volume_107000022_sum_all, @volume_107000022_sum
--select @volume_B2_relation
--select @volume_B3_relation
--select @volume_B9_relation
--select @volume_B11_relation
--select @volume_B16_relation
--select @volume_pipe_107000022_relation
--select @volume_B2_relation_all + @volume_B3_relation_all+@volume_B9_relation_all+@volume_B11_relation_all+@volume_B16_relation_all+@volume_pipe_107000022_relation_all as relation

--select @volume_B2_ratio;
--select @volume_B3_ratio;
--select @volume_B9_ratio;
--select @volume_B11_ratio;
--select @volume_B16_ratio;
--select @volume_pipe_107000022_ratio;
--select @volume_B2_ratio_all+@volume_B3_ratio_all+@volume_B9_ratio_all+@volume_B11_ratio_all+@volume_B16_ratio_all+@volume_pipe_107000022_ratio_all as ratio

--select @temp_pipe_107000022_calc