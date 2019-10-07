USE [ASU_AZSoperations]



declare @date_start datetime = CONVERT(DATETIME, '2019-08-13 00:00:00', 102);
--> Производить после выполнения ХП 
--[dbo].[ADD_DeliveryTanks] - выдачи
--[dbo].[ADD_ReceivingTanks] - Прием
--[dbo].[ADD_RemainsTanks] - остатки

--select * from get_tanks_value_detali_daily_accounting_report(@date_start)



--> Определим последнее время
declare @date_stop datetime = CONVERT(DATETIME, CONVERT(char(11), @date_start ,20) + '23:59:59', 102)




declare @temp_report table(
	[id] [int] IDENTITY(1,1) NOT NULL primary key,
	[dt_start] [datetime] NULL,
	[dt_stop] [datetime] NULL,
	[fuel_type] [int] NULL,
	[tank] [nvarchar](11) NULL,
	[dt_actual_remains_start] [datetime] NULL,
	[level_remains_start] [float] NULL,
	[volume_remains_start] [float] NULL,
	[dens_remains_start] [float] NULL,
	[dens_avg_remains_start] [float] NULL,
	[mass_remains_start] [float] NULL,
	[temp_remains_start] [float] NULL,
	[relation_remains_start] [float] NULL,
	[ratio_vd_remains_start] [float] NULL,
	[ratio_tv_remains_start] [float] NULL,
	[dens15_remains_start] [float] NULL,
	[volume15_remains_start] [float] NULL,
	[mass15_remains_start] [float] NULL,
	[volume_received] [float] NULL,
	[mass_received] [float] NULL,
	[dens_received] [float] NULL,
	[temp_received] [float] NULL,
	[volume15_received] [float] NULL,
	[mass15_received] [float] NULL,
	[dens15_received] [float] NULL,
	[count_tanks_delivery] [int] NULL,
	[volume_delivery] [float] NULL,
	[mass_delivery] [float] NULL,
	[dens_delivery] [float] NULL,
	[temp_delivery] [float] NULL,
	[volume15_delivery] [float] NULL,
	[mass15_delivery] [float] NULL,
	[dens15_delivery] [float] NULL,
	[dt_actual_remains_stop] [datetime] NULL,
	[level_remains_stop] [float] NULL,
	[volume_remains_stop] [float] NULL,
	[dens_remains_stop] [float] NULL,
	[dens_avg_remains_stop] [float] NULL,
	[mass_remains_stop] [float] NULL,
	[temp_remains_stop] [float] NULL,
	[relation_remains_stop] [float] NULL,
	[ratio_vd_remains_stop] [float] NULL,
	[ratio_tv_remains_stop] [float] NULL,
	[dens15_remains_stop] [float] NULL,
	[volume15_remains_stop] [float] NULL,
	[mass15_remains_stop] [float] NULL)

	declare @daily_accounting_detali table(
	[id] [int] IDENTITY(1,1) NOT NULL primary key,
	[dt_start] [datetime] NULL,
	[dt_stop] [datetime] NULL,
	[fuel_type] [int] NULL,
	[ukt_zed] [nvarchar](10) NULL,
	[tank] [nvarchar](11) NULL,
	[serial_number] [nvarchar](10) NULL,
	[unified_tank_number] [nvarchar](21) NULL,
	[type_name] [nvarchar](100) NULL,
	[level_meters_model] [nvarchar](50) NULL,
	[level_meters_serial_number] [nvarchar](10) NULL,
	[dt_actual_remains_start] [datetime] NULL,
	[level_remains_start] [float] NULL,
	[volume_remains_start] [float] NULL,
	[dens_remains_start] [float] NULL,
	[dens_avg_remains_start] [float] NULL,
	[mass_remains_start] [float] NULL,
	[temp_remains_start] [float] NULL,
	[relation_remains_start] [float] NULL,
	[ratio_vd_remains_start] [float] NULL,
	[ratio_tv_remains_start] [float] NULL,
	[dens15_remains_start] [float] NULL,
	[volume15_remains_start] [float] NULL,
	[mass15_remains_start] [float] NULL,
	[volume_received] [float] NULL,
	[mass_received] [float] NULL,
	[dens_received] [float] NULL,
	[temp_received] [float] NULL,
	[volume15_received] [float] NULL,
	[mass15_received] [float] NULL,
	[dens15_received] [float] NULL,
	[count_tanks_delivery] [int] NULL,
	[volume_delivery] [float] NULL,
	[mass_delivery] [float] NULL,
	[dens_delivery] [float] NULL,
	[temp_delivery] [float] NULL,
	[volume15_delivery] [float] NULL,
	[mass15_delivery] [float] NULL,
	[dens15_delivery] [float] NULL,
	[dt_actual_remains_stop] [datetime] NULL,
	[level_remains_stop] [float] NULL,
	[volume_remains_stop] [float] NULL,
	[dens_remains_stop] [float] NULL,
	[dens_avg_remains_stop] [float] NULL,
	[mass_remains_stop] [float] NULL,
	[temp_remains_stop] [float] NULL,
	[relation_remains_stop] [float] NULL,
	[ratio_vd_remains_stop] [float] NULL,
	[ratio_tv_remains_stop] [float] NULL,
	[dens15_remains_stop] [float] NULL,
	[volume15_remains_stop] [float] NULL,
	[mass15_remains_stop] [float] NULL,
	[permissible_volume15_error] [float] NULL,
	[permissible_mass15_error] [float] NULL)

  insert @temp_report
   ([dt_start]
           ,[dt_stop]
           ,[fuel_type]
           ,[tank]
           ,[dt_actual_remains_start]
           ,[level_remains_start]
           ,[volume_remains_start]
           ,[dens_remains_start]
           ,[dens_avg_remains_start]
           ,[mass_remains_start]
           ,[temp_remains_start]
           ,[relation_remains_start]
           ,[ratio_vd_remains_start]
           ,[ratio_tv_remains_start]
           ,[dens15_remains_start]
           ,[volume15_remains_start]
           ,[mass15_remains_start]
           ,[volume_received]
           ,[mass_received]
           ,[dens_received]
           ,[temp_received]
           ,[volume15_received]
           ,[mass15_received]
           ,[dens15_received]
           ,[count_tanks_delivery]
           ,[volume_delivery]
           ,[mass_delivery]
           ,[dens_delivery]
           ,[temp_delivery]
           ,[volume15_delivery]
           ,[mass15_delivery]
           ,[dens15_delivery]
           ,[dt_actual_remains_stop]
           ,[level_remains_stop]
           ,[volume_remains_stop]
           ,[dens_remains_stop]
           ,[dens_avg_remains_stop]
           ,[mass_remains_stop]
           ,[temp_remains_stop]
           ,[relation_remains_stop]
           ,[ratio_vd_remains_stop]
           ,[ratio_tv_remains_stop]
           ,[dens15_remains_stop]
           ,[volume15_remains_stop]
           ,[mass15_remains_stop])
SELECT   [dt_start] = @date_start
		,[dt_stop] = @date_stop
		,rt.[fuel_type]
		,rt.[tank]
		,[dt_actual_remains_start]= rt.[dt_actual]
		,[level_remains_start]=rt.[level]
		  ,[volume_remains_start]=rt.[volume]
		  ,[dens_remains_start]=rt.[dens]
		  ,[dens_avg_remains_start]=rt.[dens_avg]
		  ,[mass_remains_start]=rt.[mass]
		  ,[temp_remains_start]=rt.[temp]
		  ,[relation_remains_start]=rt.[relation]
		  ,[ratio_vd_remains_start]=rt.[ratio_vd]
		  ,[ratio_tv_remains_start]=rt.[ratio_tv]
		  ,[dens15_remains_start]=rt.[dens15]
		  ,[volume15_remains_start]=rt.[volume15]
		  ,[mass15_remains_start]=rt.[mass15]

			,volume_received = CASE WHEN (select sum([volume_received]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt]=@date_start and [fuel]=rt.[fuel_type] and [num]=rt.[tank]) is not null THEN (select sum([volume_received]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt]=@date_start and [fuel]=rt.[fuel_type] and [num]=rt.[tank]) ELSE 0 END
			,mass_received = CASE WHEN (select sum(mass_received) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt]=@date_start and [fuel]=rt.[fuel_type] and [num]=rt.[tank]) is not null THEN (select sum(mass_received) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt]=@date_start and [fuel]=rt.[fuel_type] and [num]=rt.[tank]) ELSE 0 END
			,dens_received = CASE WHEN (select sum(dens_received) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt]=@date_start and [fuel]=rt.[fuel_type] and [num]=rt.[tank]) is not null THEN (select sum(dens_received) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt]=@date_start and [fuel]=rt.[fuel_type] and [num]=rt.[tank]) ELSE 0 END
			,temp_received = CASE WHEN (select sum(temp_received) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt]=@date_start and [fuel]=rt.[fuel_type] and [num]=rt.[tank]) is not null THEN (select sum(temp_received) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt]=@date_start and [fuel]=rt.[fuel_type] and [num]=rt.[tank]) ELSE 0 END
			,volume15_received = CASE WHEN (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt]=@date_start and [fuel]=rt.[fuel_type] and [num]=rt.[tank]) is not null THEN (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt]=@date_start and [fuel]=rt.[fuel_type] and [num]=rt.[tank]) ELSE 0 END
			,mass15_received = CASE WHEN (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt]=@date_start and [fuel]=rt.[fuel_type] and [num]=rt.[tank]) is not null THEN (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt]=@date_start and [fuel]=rt.[fuel_type] and [num]=rt.[tank]) ELSE 0 END
			,dens15_received = CASE WHEN ((select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt]=@date_start and [fuel]=rt.[fuel_type] and [num]=rt.[tank])/(select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt]=@date_start and [fuel]=rt.[fuel_type] and [num]=rt.[tank])*1000) is not null THEN ((select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt]=@date_start and [fuel]=rt.[fuel_type] and [num]=rt.[tank])/(select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt]=@date_start and [fuel]=rt.[fuel_type] and [num]=rt.[tank])*1000) ELSE 0 END

			,count_tanks_delivery = CASE WHEN (SELECT min(len([tank_num]) - len(replace([tank_num], ',', ''))+1) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt]=@date_start and [fuel_type]=rt.[fuel_type]  and [tank_num] like(N'%'+RTRIM(rt.[tank])+'%')) is not null THEN (SELECT min(len([tank_num]) - len(replace([tank_num], ',', ''))+1) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt]=@date_start and [fuel_type]=rt.[fuel_type]  and [tank_num] like(N'%'+RTRIM(rt.[tank])+'%')) ELSE 0 END
			,volume_delivery = CASE WHEN (SELECT SUM([volume_delivery]/(len([tank_num]) - len(replace([tank_num], ',', ''))+1)) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt]=@date_start and [fuel_type]=rt.[fuel_type]  and [tank_num] like(N'%'+RTRIM(rt.[tank])+'%')) is not null THEN (SELECT SUM([volume_delivery]/(len([tank_num]) - len(replace([tank_num], ',', ''))+1)) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt]=@date_start and [fuel_type]=rt.[fuel_type]  and [tank_num] like(N'%'+RTRIM(rt.[tank])+'%')) ELSE 0 END
			,mass_delivery = CASE WHEN (SELECT SUM([mass_delivery]/(len([tank_num]) - len(replace([tank_num], ',', ''))+1)) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt]=@date_start and [fuel_type]=rt.[fuel_type]  and [tank_num] like(N'%'+RTRIM(rt.[tank])+'%')) is not null THEN (SELECT SUM([mass_delivery]/(len([tank_num]) - len(replace([tank_num], ',', ''))+1)) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt]=@date_start and [fuel_type]=rt.[fuel_type]  and [tank_num] like(N'%'+RTRIM(rt.[tank])+'%')) ELSE 0 END
			,dens_delivery = CASE WHEN ((SELECT SUM([mass_delivery]/(len([tank_num]) - len(replace([tank_num], ',', ''))+1)) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt]=@date_start and [fuel_type]=rt.[fuel_type]  and [tank_num] like(N'%'+RTRIM(rt.[tank])+'%'))/(SELECT SUM([volume_delivery]/(len([tank_num]) - len(replace([tank_num], ',', ''))+1)) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt]=@date_start and [fuel_type]=rt.[fuel_type]  and [tank_num] like(N'%'+RTRIM(rt.[tank])+'%'))*1000.0) is not null THEN ((SELECT SUM([mass_delivery]/(len([tank_num]) - len(replace([tank_num], ',', ''))+1)) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt]=@date_start and [fuel_type]=rt.[fuel_type]  and [tank_num] like(N'%'+RTRIM(rt.[tank])+'%'))/(SELECT SUM([volume_delivery]/(len([tank_num]) - len(replace([tank_num], ',', ''))+1)) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt]=@date_start and [fuel_type]=rt.[fuel_type]  and [tank_num] like(N'%'+RTRIM(rt.[tank])+'%'))*1000.0) ELSE 0 END
			,temp_delivery = CASE WHEN (select [ASU_AZSoperations].[dbo].[get_temp_delivery](@date_start,rt.[fuel_type],rt.[tank])) is not null THEN (select [ASU_AZSoperations].[dbo].[get_temp_delivery](@date_start,rt.[fuel_type],rt.[tank])) ELSE 0 END
			,volume15_delivery = CASE WHEN (SELECT SUM([volume15]/(len([tank_num]) - len(replace([tank_num], ',', ''))+1)) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt]=@date_start and [fuel_type]=rt.[fuel_type]  and [tank_num] like(N'%'+RTRIM(rt.[tank])+'%')) is not null THEN (SELECT SUM([volume15]/(len([tank_num]) - len(replace([tank_num], ',', ''))+1)) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt]=@date_start and [fuel_type]=rt.[fuel_type]  and [tank_num] like(N'%'+RTRIM(rt.[tank])+'%')) ELSE 0 END
			,mass15_delivery = CASE WHEN (SELECT SUM([mass15]/(len([tank_num]) - len(replace([tank_num], ',', ''))+1)) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt]=@date_start and [fuel_type]=rt.[fuel_type]  and [tank_num] like(N'%'+RTRIM(rt.[tank])+'%')) is not null THEN (SELECT SUM([mass15]/(len([tank_num]) - len(replace([tank_num], ',', ''))+1)) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt]=@date_start and [fuel_type]=rt.[fuel_type]  and [tank_num] like(N'%'+RTRIM(rt.[tank])+'%')) ELSE 0 END
			,dens15_delivery = CASE WHEN ((SELECT SUM([mass15]/(len([tank_num]) - len(replace([tank_num], ',', ''))+1)) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt]=@date_start and [fuel_type]=rt.[fuel_type]  and [tank_num] like(N'%'+RTRIM(rt.[tank])+'%')) / (SELECT SUM([volume15]/(len([tank_num]) - len(replace([tank_num], ',', ''))+1)) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt]=@date_start and [fuel_type]=rt.[fuel_type]  and [tank_num] like(N'%'+RTRIM(rt.[tank])+'%'))*1000.0) is not null THEN ((SELECT SUM([mass15]/(len([tank_num]) - len(replace([tank_num], ',', ''))+1)) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt]=@date_start and [fuel_type]=rt.[fuel_type]  and [tank_num] like(N'%'+RTRIM(rt.[tank])+'%')) / (SELECT SUM([volume15]/(len([tank_num]) - len(replace([tank_num], ',', ''))+1)) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt]=@date_start and [fuel_type]=rt.[fuel_type]  and [tank_num] like(N'%'+RTRIM(rt.[tank])+'%'))*1000.0) ELSE 0 END

		  ,[dt_actual_remains_stop] = (select rts.[dt_actual] FROM [ASU_AZSoperations].[dbo].[RemainsTanks] as rts where rts.[dt]=DATEADD(day,+1,@date_start) and rts.[fuel_type]=rt.[fuel_type] and rts.[tank]=rt.[tank])
		  ,[level_remains_stop]=(select rts.[level] FROM [ASU_AZSoperations].[dbo].[RemainsTanks] as rts where rts.[dt]=DATEADD(day,+1,@date_start) and rts.[fuel_type]=rt.[fuel_type] and rts.[tank]=rt.[tank])
		  ,[volume_remains_stop]= (select rts.[volume] FROM [ASU_AZSoperations].[dbo].[RemainsTanks] as rts where rts.[dt]=DATEADD(day,+1,@date_start) and rts.[fuel_type]=rt.[fuel_type] and rts.[tank]=rt.[tank])
		  ,[dens_remains_stop]= (select rts.[dens] FROM [ASU_AZSoperations].[dbo].[RemainsTanks] as rts where rts.[dt]=DATEADD(day,+1,@date_start) and rts.[fuel_type]=rt.[fuel_type] and rts.[tank]=rt.[tank])
		  ,[dens_avg_remains_stop]= (select rts.[dens_avg] FROM [ASU_AZSoperations].[dbo].[RemainsTanks] as rts where rts.[dt]=DATEADD(day,+1,@date_start) and rts.[fuel_type]=rt.[fuel_type] and rts.[tank]=rt.[tank])
		  ,[mass_remains_stop]= (select rts.[mass] FROM [ASU_AZSoperations].[dbo].[RemainsTanks] as rts where rts.[dt]=DATEADD(day,+1,@date_start) and rts.[fuel_type]=rt.[fuel_type] and rts.[tank]=rt.[tank])
		  ,[temp_remains_stop]= (select rts.[temp] FROM [ASU_AZSoperations].[dbo].[RemainsTanks] as rts where rts.[dt]=DATEADD(day,+1,@date_start) and rts.[fuel_type]=rt.[fuel_type] and rts.[tank]=rt.[tank])
		  ,[relation_remains_stop]= (select rts.[relation] FROM [ASU_AZSoperations].[dbo].[RemainsTanks] as rts where rts.[dt]=DATEADD(day,+1,@date_start) and rts.[fuel_type]=rt.[fuel_type] and rts.[tank]=rt.[tank])
		  ,[ratio_vd_remains_stop]= (select rts.[ratio_vd] FROM [ASU_AZSoperations].[dbo].[RemainsTanks] as rts where rts.[dt]=DATEADD(day,+1,@date_start) and rts.[fuel_type]=rt.[fuel_type] and rts.[tank]=rt.[tank])
		  ,[ratio_tv_remains_stop]= (select rts.[ratio_tv] FROM [ASU_AZSoperations].[dbo].[RemainsTanks] as rts where rts.[dt]=DATEADD(day,+1,@date_start) and rts.[fuel_type]=rt.[fuel_type] and rts.[tank]=rt.[tank])
		  ,[dens15_remains_stop]= (select rts.[dens15] FROM [ASU_AZSoperations].[dbo].[RemainsTanks] as rts where rts.[dt]=DATEADD(day,+1,@date_start) and rts.[fuel_type]=rt.[fuel_type] and rts.[tank]=rt.[tank])
		  ,[volume15_remains_stop]= (select rts.[volume15] FROM [ASU_AZSoperations].[dbo].[RemainsTanks] as rts where rts.[dt]=DATEADD(day,+1,@date_start) and rts.[fuel_type]=rt.[fuel_type] and rts.[tank]=rt.[tank])
		  ,[mass15_remains_stop]= (select rts.[mass15] FROM [ASU_AZSoperations].[dbo].[RemainsTanks] as rts where rts.[dt]=DATEADD(day,+1,@date_start) and rts.[fuel_type]=rt.[fuel_type] and rts.[tank]=rt.[tank])

  FROM [ASU_AZSoperations].[dbo].[RemainsTanks] as rt
  where rt.[dt] = @date_start
  order by rt.[fuel_type], rt.[tank]

  insert @daily_accounting_detali
    ([dt_start],
	[dt_stop],
	[fuel_type],
	[ukt_zed],
	[tank],
	[serial_number],
	[unified_tank_number],
	[type_name],
	[level_meters_model],
	[level_meters_serial_number],
	[dt_actual_remains_start],
	[level_remains_start],
	[volume_remains_start],
	[dens_remains_start],
	[dens_avg_remains_start],
	[mass_remains_start],
	[temp_remains_start],
	[relation_remains_start],
	[ratio_vd_remains_start],
	[ratio_tv_remains_start],
	[dens15_remains_start],
	[volume15_remains_start],
	[mass15_remains_start],
	[volume_received],
	[mass_received],
	[dens_received],
	[temp_received],
	[volume15_received],
	[mass15_received],
	[dens15_received],
	[count_tanks_delivery],
	[volume_delivery],
	[mass_delivery],
	[dens_delivery],
	[temp_delivery],
	[volume15_delivery],
	[mass15_delivery],
	[dens15_delivery],
	[dt_actual_remains_stop],
	[level_remains_stop],
	[volume_remains_stop],
	[dens_remains_stop],
	[dens_avg_remains_stop],
	[mass_remains_stop],
	[temp_remains_stop],
	[relation_remains_stop],
	[ratio_vd_remains_stop],
	[ratio_tv_remains_stop],
	[dens15_remains_stop],
	[volume15_remains_stop],
	[mass15_remains_stop],
	[permissible_volume15_error],
	[permissible_mass15_error])
  select 
	[dt_start]
           ,[dt_stop]
           ,[fuel_type]
		   ,[ukt_zed] = (select [ukt_zed] FROM [ASU_AZSoperations].[dbo].[Cat_Fuel] where [type_fuel]=[fuel_type])
           ,[tank]
		   ,[serial_number] = (select [serial_number] FROM [ASU_AZSoperations].[dbo].[Cat_Tanks] where [id] = [tank])
		   ,[unified_tank_number] = (select [uniform_umber_tank] + '/' + [unified_number] FROM [ASU_AZSoperations].[dbo].[Cat_Tanks] where [id] = [tank])
           ,[type_name] = (select [type_name] FROM [ASU_AZSoperations].[dbo].[Cat_Tanks] where [id] = [tank])
		   ,[level_meters_model] = (select [level_meters_model] FROM [ASU_AZSoperations].[dbo].[Cat_Tanks] where [id] = [tank])
		   ,[level_meters_serial_number] = (select [level_meters_serial_number] FROM [ASU_AZSoperations].[dbo].[Cat_Tanks] where [id] = [tank])
		   ,[dt_actual_remains_start]
           ,[level_remains_start]
           ,[volume_remains_start]
           ,[dens_remains_start]
           ,[dens_avg_remains_start]
           ,[mass_remains_start]
           ,[temp_remains_start]
           ,[relation_remains_start]
           ,[ratio_vd_remains_start]
           ,[ratio_tv_remains_start]
           ,[dens15_remains_start]
           ,[volume15_remains_start]
           ,[mass15_remains_start]
           ,[volume_received]
           ,[mass_received]
           ,[dens_received]
           ,[temp_received]
           ,[volume15_received]
           ,[mass15_received]
           ,[dens15_received]
           ,[count_tanks_delivery]
           ,[volume_delivery]
           ,[mass_delivery]
           ,[dens_delivery]
           ,[temp_delivery]
           ,[volume15_delivery]
           ,[mass15_delivery]
           ,[dens15_delivery]
           ,[dt_actual_remains_stop]
           ,[level_remains_stop]
           ,[volume_remains_stop]
           ,[dens_remains_stop]
           ,[dens_avg_remains_stop]
           ,[mass_remains_stop]
           ,[temp_remains_stop]
           ,[relation_remains_stop]
           ,[ratio_vd_remains_stop]
           ,[ratio_tv_remains_stop]
           ,[dens15_remains_stop]
           ,[volume15_remains_stop]
           ,[mass15_remains_stop]
		   ,permissible_volume15_error = (CASE WHEN ([tank]=N'PL107000022' OR [tank]=N'PL107000023' OR [tank]=N'PL107000024' OR [tank]=N'PL107000027') THEN 0 ELSE (CASE WHEN [volume15_remains_start] <>0 THEN (([volume15_remains_start] - [volume15_delivery]+[volume15_received]-[volume15_remains_stop])/[volume15_remains_start])*100 ELSE 0 END) END)
		   ,permissible_mass15_error = (CASE WHEN ([tank]=N'PL107000022' OR [tank]=N'PL107000023' OR [tank]=N'PL107000024' OR [tank]=N'PL107000027') THEN 0 ELSE (CASE WHEN [mass15_remains_start] <>0 THEN (([mass15_remains_start] - [mass15_delivery]+[mass15_received]-[mass15_remains_stop])/[mass15_remains_start])*100 ELSE 0 END) END)

		   ,permissible_volume15_error_ = CASE WHEN [volume15_remains_start] <>0 THEN (([volume15_remains_start] - [volume15_delivery]+[volume15_received]-[volume15_remains_stop])/[volume15_remains_start])*100 ELSE 0 END
		   ,permissible_mass15_error_ = CASE WHEN [mass15_remains_start] <>0 THEN (([mass15_remains_start] - [mass15_delivery]+[mass15_received]-[mass15_remains_stop])/[mass15_remains_start])*100 ELSE 0 END
  --into daily_accounting_detali
  from @temp_report as tr

  select *from  @daily_accounting_detali