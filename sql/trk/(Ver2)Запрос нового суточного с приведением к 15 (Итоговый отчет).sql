USE [ASU_AZSoperations]



declare @date_start datetime = CONVERT(DATETIME, '2019-09-09 00:00:00', 102);
--> Производить после выполнения ХП 
--[dbo].[ADD_DeliveryTanks] - выдачи
--[dbo].[ADD_ReceivingTanks] - Прием
--[dbo].[ADD_RemainsTanks] - остатки
--

declare @Daily_Accounting_Report TABLE (
	[id] int IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[type] [int] NULL,
	[date_start] [datetime] NULL,
	[date_stop] [datetime] NULL,
	[volume_start] [float] NULL,
	[mass_start] [float] NULL,
	[dens_start] [float] NULL,
	[temp_start] [float] NULL,
	[volume15_start] [float] NULL,
	[mass15_start] [float] NULL,
	[dens15_start] [float] NULL,
	[volume_received] [int] NULL,
	[mass_received] [float] NULL,
	[dens_received] [float] NULL,
	[temp_received] [float] NULL,
	[volume15_received] [float] NULL,
	[mass15_received] [float] NULL,
	[dens15_received] [float] NULL,
	[volume_delivery] [int] NULL,
	[mass_delivery] [float] NULL,
	[dens_delivery] [float] NULL,
	[temp_delivery] [float] NULL,
	[volume15_delivery] [float] NULL,
	[mass15_delivery] [float] NULL,
	[dens15_delivery] [float] NULL,
	[volume_stop] [float] NULL,
	[mass_stop] [float] NULL,
	[dens_stop] [float] NULL,
	[temp_stop] [float] NULL,
	[volume15_stop] [float] NULL,
	[mass15_stop] [float] NULL,
	[dens15_stop] [float] NULL,
	[permissible_error] [float] NULL
)

--> Определим последнее время
declare @date_stop datetime = CONVERT(DATETIME, CONVERT(char(11), @date_start ,20) + '23:59:59', 102)
--> Переменые
declare @fuel_type int
declare @volume_received int
declare @mass_received float
declare @dens_received float
declare @temp_received float
declare @volume15_received float
declare @mass15_received float
declare @dens15_received float

declare @volume_delivery int
declare @mass_delivery float
declare @dens_delivery float
declare @temp_delivery float
declare @volume15_delivery float
declare @mass15_delivery float
declare @dens15_delivery float
-----------------------------------------------------------------------------------------------------------------------------------
-->Просчитаем по 107000022
set @fuel_type = 107000022
set @volume_received = (select sum([volume_received]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type)
set @mass_received = (select sum([mass_received]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type)
set @dens_received = (select sum([ratio_vd]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type)
set @temp_received = (select sum([ratio_tv]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type)
set @volume15_received = (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type)
set @mass15_received = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type)
set @dens15_received = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type) / (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type) *1000

set @volume_delivery = (select sum([volume_delivery]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
set @mass_delivery = (select sum([mass_delivery]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) 
set @dens_delivery =  (select sum([ratio_vd]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
set @temp_delivery =  (select sum([ratio_tv]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) 
set @volume15_delivery = (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) 
set @mass15_delivery = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) 
set @dens15_delivery = 	(select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) / (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)*1000
--> Добавим строку
	insert @Daily_Accounting_Report
	select 
		[type] = @fuel_type
		,date_start = @date_start
		,date_stop = @date_stop
		,volume_start = (select sum([volume]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
	    ,mass_start = (select sum([mass]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
		,dens_start = (select sum([ratio_vd]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
        ,temp_start = (select sum([ratio_tv]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
		,volume15_start = (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
		,mass15_start = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) 
		,dens15_start = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) / (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) *1000

		,volume_received = CASE WHEN @volume_received is not null THEN @volume_received ELSE 0 END
		,mass_received = CASE WHEN @mass_received is not null THEN @mass_received ELSE 0 END
		,dens_received = CASE WHEN @dens_received is not null THEN @dens_received ELSE 0 END
		,temp_received = CASE WHEN @temp_received is not null THEN @temp_received ELSE 0 END
		,volume15_received = CASE WHEN @volume15_received is not null THEN @volume15_received ELSE 0 END
		,mass15_received = CASE WHEN @mass15_received is not null THEN @mass15_received ELSE 0 END
		,dens15_received = CASE WHEN @dens15_received is not null THEN @dens15_received ELSE 0 END

		,volume_delivery = CASE WHEN @volume_delivery is not null THEN @volume_delivery ELSE 0 END
		,mass_delivery = CASE WHEN @mass_delivery is not null THEN @mass_delivery ELSE 0 END
		,dens_delivery = CASE WHEN @dens_delivery is not null THEN @dens_delivery ELSE 0 END
		,temp_delivery = CASE WHEN @temp_delivery is not null THEN @temp_delivery ELSE 0 END
		,volume15_delivery = CASE WHEN @volume15_delivery is not null THEN @volume15_delivery ELSE 0 END
		,mass15_delivery = CASE WHEN @mass15_delivery is not null THEN @mass15_delivery ELSE 0 END
		,dens15_delivery = CASE WHEN @dens15_delivery is not null THEN @dens15_delivery ELSE 0 END

		,volume_stop = (select sum([volume]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type)
	    ,mass_stop = (select sum([mass]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type)
		,dens_stop = (select sum([ratio_vd]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type)
        ,temp_stop = (select sum([ratio_tv]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type)
		,volume15_stop = (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type)
		,mass15_stop = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type) 
		,dens15_stop = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type) / (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) *1000
		,permissible_error = (((select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)-(CASE WHEN @volume15_delivery is not null THEN @volume15_delivery ELSE 0 END)+(CASE WHEN @volume15_received is not null THEN @volume15_received ELSE 0 END)-(select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start) and [fuel_type]=@fuel_type))/(select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type))*100.0
-----------------------------------------------------------------------------------------------------------------------------------
-->Просчитаем по 107000023
set @fuel_type = 107000023
set @volume_received = (select sum([volume_received]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type)
set @mass_received = (select sum([mass_received]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type)
set @dens_received = (select sum([ratio_vd]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type)
set @temp_received = (select sum([ratio_tv]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type)
set @volume15_received = (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type)
set @mass15_received = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type)
set @dens15_received = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type) / (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type) *1000

set @volume_delivery = (select sum([volume_delivery]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
set @mass_delivery = (select sum([mass_delivery]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) 
set @dens_delivery =  (select sum([ratio_vd]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
set @temp_delivery =  (select sum([ratio_tv]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) 
set @volume15_delivery = (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) 
set @mass15_delivery = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) 
set @dens15_delivery = 	(select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) / (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)*1000
--> Добавим строку
	insert @Daily_Accounting_Report
	select 
		[type] = @fuel_type
		,date_start = @date_start
		,date_stop = @date_stop
		,volume_start = (select sum([volume]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
	    ,mass_start = (select sum([mass]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
		,dens_start = (select sum([ratio_vd]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
        ,temp_start = (select sum([ratio_tv]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
		,volume15_start = (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
		,mass15_start = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) 
		,dens15_start = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) / (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) *1000

		,volume_received = CASE WHEN @volume_received is not null THEN @volume_received ELSE 0 END
		,mass_received = CASE WHEN @mass_received is not null THEN @mass_received ELSE 0 END
		,dens_received = CASE WHEN @dens_received is not null THEN @dens_received ELSE 0 END
		,temp_received = CASE WHEN @temp_received is not null THEN @temp_received ELSE 0 END
		,volume15_received = CASE WHEN @volume15_received is not null THEN @volume15_received ELSE 0 END
		,mass15_received = CASE WHEN @mass15_received is not null THEN @mass15_received ELSE 0 END
		,dens15_received = CASE WHEN @dens15_received is not null THEN @dens15_received ELSE 0 END

		,volume_delivery = CASE WHEN @volume_delivery is not null THEN @volume_delivery ELSE 0 END
		,mass_delivery = CASE WHEN @mass_delivery is not null THEN @mass_delivery ELSE 0 END
		,dens_delivery = CASE WHEN @dens_delivery is not null THEN @dens_delivery ELSE 0 END
		,temp_delivery = CASE WHEN @temp_delivery is not null THEN @temp_delivery ELSE 0 END
		,volume15_delivery = CASE WHEN @volume15_delivery is not null THEN @volume15_delivery ELSE 0 END
		,mass15_delivery = CASE WHEN @mass15_delivery is not null THEN @mass15_delivery ELSE 0 END
		,dens15_delivery = CASE WHEN @dens15_delivery is not null THEN @dens15_delivery ELSE 0 END

		,volume_stop = (select sum([volume]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type)
	    ,mass_stop = (select sum([mass]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type)
		,dens_stop = (select sum([ratio_vd]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type)
        ,temp_stop = (select sum([ratio_tv]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type)
		,volume15_stop = (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type)
		,mass15_stop = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type) 
		,dens15_stop = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type) / (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) *1000
		,permissible_error = (((select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)-(CASE WHEN @volume15_delivery is not null THEN @volume15_delivery ELSE 0 END)+(CASE WHEN @volume15_received is not null THEN @volume15_received ELSE 0 END)-(select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start) and [fuel_type]=@fuel_type))/(select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type))*100.0
-----------------------------------------------------------------------------------------------------------------------------------
-->Просчитаем по 107000024
set @fuel_type = 107000024
set @volume_received = (select sum([volume_received]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type)
set @mass_received = (select sum([mass_received]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type)
set @dens_received = (select sum([ratio_vd]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type)
set @temp_received = (select sum([ratio_tv]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type)
set @volume15_received = (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type)
set @mass15_received = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type)
set @dens15_received = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type) / (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type) *1000

set @volume_delivery = (select sum([volume_delivery]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
set @mass_delivery = (select sum([mass_delivery]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) 
set @dens_delivery =  (select sum([ratio_vd]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
set @temp_delivery =  (select sum([ratio_tv]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) 
set @volume15_delivery = (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) 
set @mass15_delivery = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) 
set @dens15_delivery = 	(select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) / (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)*1000
--> Добавим строку
	insert @Daily_Accounting_Report
	select 
		[type] = @fuel_type
		,date_start = @date_start
		,date_stop = @date_stop
		,volume_start = (select sum([volume]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
	    ,mass_start = (select sum([mass]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
		,dens_start = (select sum([ratio_vd]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
        ,temp_start = (select sum([ratio_tv]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
		,volume15_start = (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
		,mass15_start = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) 
		,dens15_start = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) / (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) *1000

		,volume_received = CASE WHEN @volume_received is not null THEN @volume_received ELSE 0 END
		,mass_received = CASE WHEN @mass_received is not null THEN @mass_received ELSE 0 END
		,dens_received = CASE WHEN @dens_received is not null THEN @dens_received ELSE 0 END
		,temp_received = CASE WHEN @temp_received is not null THEN @temp_received ELSE 0 END
		,volume15_received = CASE WHEN @volume15_received is not null THEN @volume15_received ELSE 0 END
		,mass15_received = CASE WHEN @mass15_received is not null THEN @mass15_received ELSE 0 END
		,dens15_received = CASE WHEN @dens15_received is not null THEN @dens15_received ELSE 0 END

		,volume_delivery = CASE WHEN @volume_delivery is not null THEN @volume_delivery ELSE 0 END
		,mass_delivery = CASE WHEN @mass_delivery is not null THEN @mass_delivery ELSE 0 END
		,dens_delivery = CASE WHEN @dens_delivery is not null THEN @dens_delivery ELSE 0 END
		,temp_delivery = CASE WHEN @temp_delivery is not null THEN @temp_delivery ELSE 0 END
		,volume15_delivery = CASE WHEN @volume15_delivery is not null THEN @volume15_delivery ELSE 0 END
		,mass15_delivery = CASE WHEN @mass15_delivery is not null THEN @mass15_delivery ELSE 0 END
		,dens15_delivery = CASE WHEN @dens15_delivery is not null THEN @dens15_delivery ELSE 0 END

		,volume_stop = (select sum([volume]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type)
	    ,mass_stop = (select sum([mass]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type)
		,dens_stop = (select sum([ratio_vd]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type)
        ,temp_stop = (select sum([ratio_tv]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type)
		,volume15_stop = (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type)
		,mass15_stop = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type) 
		,dens15_stop = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type) / (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) *1000
		,permissible_error = (((select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)-(CASE WHEN @volume15_delivery is not null THEN @volume15_delivery ELSE 0 END)+(CASE WHEN @volume15_received is not null THEN @volume15_received ELSE 0 END)-(select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start) and [fuel_type]=@fuel_type))/(select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type))*100.0
-----------------------------------------------------------------------------------------------------------------------------------
-->Просчитаем по 107000027
set @fuel_type = 107000027
set @volume_received = (select sum([volume_received]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type)
set @mass_received = (select sum([mass_received]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type)
set @dens_received = (select sum([ratio_vd]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type)
set @temp_received = (select sum([ratio_tv]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type)
set @volume15_received = (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type)
set @mass15_received = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type)
set @dens15_received = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type) / (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[ReceivingTanks] where [dt] = @date_start and [fuel]=@fuel_type) *1000

set @volume_delivery = (select sum([volume_delivery]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
set @mass_delivery = (select sum([mass_delivery]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) 
set @dens_delivery =  (select sum([ratio_vd]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
set @temp_delivery =  (select sum([ratio_tv]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) 
set @volume15_delivery = (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) 
set @mass15_delivery = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) 
set @dens15_delivery = 	(select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) / (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[DeliveryTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)*1000
--> Добавим строку
	insert @Daily_Accounting_Report
	select 
		[type] = @fuel_type
		,date_start = @date_start
		,date_stop = @date_stop
		,volume_start = (select sum([volume]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
	    ,mass_start = (select sum([mass]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
		,dens_start = (select sum([ratio_vd]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
        ,temp_start = (select sum([ratio_tv]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
		,volume15_start = (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)
		,mass15_start = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) 
		,dens15_start = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) / (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) *1000

		,volume_received = CASE WHEN @volume_received is not null THEN @volume_received ELSE 0 END
		,mass_received = CASE WHEN @mass_received is not null THEN @mass_received ELSE 0 END
		,dens_received = CASE WHEN @dens_received is not null THEN @dens_received ELSE 0 END
		,temp_received = CASE WHEN @temp_received is not null THEN @temp_received ELSE 0 END
		,volume15_received = CASE WHEN @volume15_received is not null THEN @volume15_received ELSE 0 END
		,mass15_received = CASE WHEN @mass15_received is not null THEN @mass15_received ELSE 0 END
		,dens15_received = CASE WHEN @dens15_received is not null THEN @dens15_received ELSE 0 END

		,volume_delivery = CASE WHEN @volume_delivery is not null THEN @volume_delivery ELSE 0 END
		,mass_delivery = CASE WHEN @mass_delivery is not null THEN @mass_delivery ELSE 0 END
		,dens_delivery = CASE WHEN @dens_delivery is not null THEN @dens_delivery ELSE 0 END
		,temp_delivery = CASE WHEN @temp_delivery is not null THEN @temp_delivery ELSE 0 END
		,volume15_delivery = CASE WHEN @volume15_delivery is not null THEN @volume15_delivery ELSE 0 END
		,mass15_delivery = CASE WHEN @mass15_delivery is not null THEN @mass15_delivery ELSE 0 END
		,dens15_delivery = CASE WHEN @dens15_delivery is not null THEN @dens15_delivery ELSE 0 END

		,volume_stop = (select sum([volume]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type)
	    ,mass_stop = (select sum([mass]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type)
		,dens_stop = (select sum([ratio_vd]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type)
        ,temp_stop = (select sum([ratio_tv]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type)
		,volume15_stop = (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type)
		,mass15_stop = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type) 
		,dens15_stop = (select sum([mass15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start)	 and [fuel_type]=@fuel_type) / (select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type) *1000
		,permissible_error = (((select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type)-(CASE WHEN @volume15_delivery is not null THEN @volume15_delivery ELSE 0 END)+(CASE WHEN @volume15_received is not null THEN @volume15_received ELSE 0 END)-(select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = DATEADD(day,+1,@date_start) and [fuel_type]=@fuel_type))/(select sum([volume15]) FROM [ASU_AZSoperations].[dbo].[RemainsTanks] where [dt] = @date_start and [fuel_type]=@fuel_type))*100.0
		
		
select * from @Daily_Accounting_Report