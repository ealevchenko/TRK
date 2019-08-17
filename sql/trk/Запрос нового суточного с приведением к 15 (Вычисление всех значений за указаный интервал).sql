use [ASU_AZSoperations]

declare @date_start datetime = CONVERT(DATETIME, '2019-08-13 00:00:00', 102);
declare @date_stop datetime = CONVERT(DATETIME, '2019-08-14 00:00:00', 102);
-->
declare @type sysname;

declare @107000022_volume_start int;
declare @107000022_mass_start float;
declare @107000022_dens_start float;
declare @107000022_temp_start float;
declare @107000022_volume15_start int;
declare @107000022_mass15_start float;
declare @107000022_dens15_start float;

declare @107000023_volume_start int;
declare @107000023_mass_start float;
declare @107000023_dens_start float;
declare @107000023_temp_start float;
declare @107000023_volume15_start int;
declare @107000023_mass15_start float;
declare @107000023_dens15_start float;

declare @107000024_volume_start int;
declare @107000024_mass_start float;
declare @107000024_dens_start float;
declare @107000024_temp_start float;
declare @107000024_volume15_start int;
declare @107000024_mass15_start float;
declare @107000024_dens15_start float;

declare @107000027_volume_start int;
declare @107000027_mass_start float;
declare @107000027_dens_start float;
declare @107000027_temp_start float;
declare @107000027_volume15_start int;
declare @107000027_mass15_start float;
declare @107000027_dens15_start float;
-->
declare @107000022_volume_stop int;
declare @107000022_mass_stop float;
declare @107000022_dens_stop float;
declare @107000022_temp_stop float;
declare @107000022_volume15_stop int;
declare @107000022_mass15_stop float;
declare @107000022_dens15_stop float;

declare @107000023_volume_stop int;
declare @107000023_mass_stop float;
declare @107000023_dens_stop float;
declare @107000023_temp_stop float;
declare @107000023_volume15_stop int;
declare @107000023_mass15_stop float;
declare @107000023_dens15_stop float;

declare @107000024_volume_stop int;
declare @107000024_mass_stop float;
declare @107000024_dens_stop float;
declare @107000024_temp_stop float;
declare @107000024_volume15_stop int;
declare @107000024_mass15_stop float;
declare @107000024_dens15_stop float;

declare @107000027_volume_stop int;
declare @107000027_mass_stop float;
declare @107000027_dens_stop float;
declare @107000027_temp_stop float;
declare @107000027_volume15_stop int;
declare @107000027_mass15_stop float;
declare @107000027_dens15_stop float;
-->
declare @mass_coming float;
declare @volume_coming int;
declare @dens_coming float;
declare @temp_coming float;
declare @volume15_coming int;
declare @mass15_coming float;
declare @dens15_coming float;

declare @volume_consumption int;
declare @mass_consumption float; 
declare @dens_consumption float;
declare @temp_consumption float;
declare @volume15_consumption int
declare @mass15_consumption float;
declare @dens15_consumption float;

EXEC [ASU_AZSlogs].[dbo].[GET_CALC15_REMAINS_TANKS_DATE] @date_start

if OBJECT_ID(N'TempDB..##REMAINS_CURRENT_CALC15',N'U') is not null
begin
	set @107000022_volume_start = (SELECT sum([volume]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000022);
	set @107000022_mass_start = (SELECT sum([mass]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000022);
	set @107000022_dens_start = (@107000022_mass_start/@107000022_volume_start)*1000;
	set @107000022_temp_start = (SELECT [temp] FROM ##REMAINS_CURRENT_CALC15 where [tank] = N'PL107000022');
	set @107000022_volume15_start = (SELECT sum([volume15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000022);
	set @107000022_mass15_start = (SELECT sum([mass15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000022);
	set @107000022_dens15_start = (@107000022_mass15_start/@107000022_volume15_start)*1000;
	--select @107000022_volume_start,@107000022_mass_start,@107000022_dens_start,@107000022_temp_start,@107000022_volume15_start,@107000022_mass15_start,@107000022_dens15_start
	set @107000023_volume_start = (SELECT sum([volume]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000023);
	set @107000023_mass_start = (SELECT sum([mass]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000023);
	set @107000023_dens_start = (@107000023_mass_start/@107000023_volume_start)*1000;
	set @107000023_temp_start = (SELECT [temp] FROM ##REMAINS_CURRENT_CALC15 where [tank] = N'PL107000023');
	set @107000023_volume15_start = (SELECT sum([volume15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000023);
	set @107000023_mass15_start = (SELECT sum([mass15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000023);
	set @107000023_dens15_start = (@107000023_mass15_start/@107000023_volume15_start)*1000;
	--select @107000023_volume_start,@107000023_mass_start,@107000023_dens_start,@107000023_temp_start,@107000023_volume15_start,@107000023_mass15_start,@107000023_dens15_start
	set @107000024_volume_start = (SELECT sum([volume]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000024);
	set @107000024_mass_start = (SELECT sum([mass]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000024);
	set @107000024_dens_start = (@107000024_mass_start/@107000024_volume_start)*1000;
	set @107000024_temp_start = (SELECT [temp] FROM ##REMAINS_CURRENT_CALC15 where [tank] = N'PL107000024');
	set @107000024_volume15_start = (SELECT sum([volume15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000024);
	set @107000024_mass15_start = (SELECT sum([mass15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000024);
	set @107000024_dens15_start = (@107000024_mass15_start/@107000024_volume15_start)*1000;
	--select @107000024_volume_start,@107000024_mass_start,@107000024_dens_start,@107000024_temp_start,@107000024_volume15_start,@107000024_mass15_start,@107000024_dens15_start
	set @107000027_volume_start = (SELECT sum([volume]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000027);
	set @107000027_mass_start = (SELECT sum([mass]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000027);
	set @107000027_dens_start = (@107000027_mass_start/@107000027_volume_start)*1000;
	set @107000027_temp_start = (SELECT [temp] FROM ##REMAINS_CURRENT_CALC15 where [tank] = N'PL107000027');
	set @107000027_volume15_start = (SELECT sum([volume15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000027);
	set @107000027_mass15_start = (SELECT sum([mass15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000027);
	set @107000027_dens15_start = (@107000027_mass15_start/@107000027_volume15_start)*1000;
	--select @107000027_volume_start,@107000027_mass_start,@107000027_dens_start,@107000027_temp_start,@107000027_volume15_start,@107000027_mass15_start,@107000027_dens15_start
end

EXEC [ASU_AZSlogs].[dbo].[GET_CALC15_REMAINS_TANKS_DATE] @date_stop
if OBJECT_ID(N'TempDB..##REMAINS_CURRENT_CALC15',N'U') is not null
begin
	set @107000022_volume_stop = (SELECT sum([volume]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000022);
	set @107000022_mass_stop = (SELECT sum([mass]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000022);
	set @107000022_dens_stop = (@107000022_mass_stop/@107000022_volume_stop)*1000;
	set @107000022_temp_stop = (SELECT [temp] FROM ##REMAINS_CURRENT_CALC15 where [tank] = N'PL107000022');
	set @107000022_volume15_stop = (SELECT sum([volume15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000022);
	set @107000022_mass15_stop = (SELECT sum([mass15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000022);
	set @107000022_dens15_stop = (@107000022_mass15_stop/@107000022_volume15_stop)*1000;
	--select @107000022_volume_stop,@107000022_mass_stop,@107000022_dens_stop,@107000022_temp_stop,@107000022_volume15_stop,@107000022_mass15_stop,@107000022_dens15_stop
	set @107000023_volume_stop = (SELECT sum([volume]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000023);
	set @107000023_mass_stop = (SELECT sum([mass]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000023);
	set @107000023_dens_stop = (@107000023_mass_stop/@107000023_volume_stop)*1000;
	set @107000023_temp_stop = (SELECT [temp] FROM ##REMAINS_CURRENT_CALC15 where [tank] = N'PL107000023');
	set @107000023_volume15_stop = (SELECT sum([volume15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000023);
	set @107000023_mass15_stop = (SELECT sum([mass15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000023);
	set @107000023_dens15_stop = (@107000023_mass15_stop/@107000023_volume15_stop)*1000;
	--select @107000023_volume_stop,@107000023_mass_stop,@107000023_dens_stop,@107000023_temp_stop,@107000023_volume15_stop,@107000023_mass15_stop,@107000023_dens15_stop
	set @107000024_volume_stop = (SELECT sum([volume]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000024);
	set @107000024_mass_stop = (SELECT sum([mass]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000024);
	set @107000024_dens_stop = (@107000024_mass_stop/@107000024_volume_stop)*1000;
	set @107000024_temp_stop = (SELECT [temp] FROM ##REMAINS_CURRENT_CALC15 where [tank] = N'PL107000024');
	set @107000024_volume15_stop = (SELECT sum([volume15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000024);
	set @107000024_mass15_stop = (SELECT sum([mass15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000024);
	set @107000024_dens15_stop = (@107000024_mass15_stop/@107000024_volume15_stop)*1000;
	--select @107000024_volume_stop,@107000024_mass_stop,@107000024_dens_stop,@107000024_temp_stop,@107000024_volume15_stop,@107000024_mass15_stop,@107000024_dens15_stop
	set @107000027_volume_stop = (SELECT sum([volume]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000027);
	set @107000027_mass_stop = (SELECT sum([mass]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000027);
	set @107000027_dens_stop = (@107000027_mass_stop/@107000027_volume_stop)*1000;
	set @107000027_temp_stop = (SELECT [temp] FROM ##REMAINS_CURRENT_CALC15 where [tank] = N'PL107000027');
	set @107000027_volume15_stop = (SELECT sum([volume15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000027);
	set @107000027_mass15_stop = (SELECT sum([mass15]) FROM ##REMAINS_CURRENT_CALC15 where [type] = 107000027);
	set @107000027_dens15_stop = (@107000027_mass15_stop/@107000027_volume15_stop)*1000;
	--select @107000027_volume_stop,@107000027_mass_stop,@107000027_dens_stop,@107000027_temp_stop,@107000027_volume15_stop,@107000027_mass15_stop,@107000027_dens15_stop

end
--***************************************************************************************
	set @type = N'107000022';
	-->
	set @mass_coming = (SELECT SUM(stop_mass - start_mass) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @date_start and start_datetime<=@date_stop GROUP BY fuel);
	if (@mass_coming is null) set @mass_coming = 0;
	set @volume_coming = (SELECT SUM(stop_volume - start_volume)*10 FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @date_start and start_datetime<=@date_stop GROUP BY fuel);
	if (@volume_coming is null) set @volume_coming = 0;				
	set @temp_coming = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @date_start and start_datetime<=@date_stop GROUP BY fuel);
	if (@temp_coming is null) set @temp_coming = 0;					
	if (@volume_coming <> 0 and @volume_coming is not null) begin 
		set @dens_coming = (@mass_coming/@volume_coming) * 1000;
		set @dens15_coming = [ASU_AZSlogs].[dbo].[GET_DENS15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming);
		set @volume15_coming = [ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming, @volume_coming);
		set @mass15_coming = @volume15_coming*@dens15_coming*0.001;
	end else begin
		set @dens_coming = 0;
		set @dens15_coming = 0;
		set @volume15_coming = 0;
		set @mass15_coming = 0;
	end;
	-->
	set @volume_consumption = (SELECT  SUM(volume) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop GROUP BY fuel_type);
	if (@volume_consumption is null) set @volume_consumption = 0;
	set @mass_consumption =(SELECT SUM(mass) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop GROUP BY fuel_type);
	if (@mass_consumption is null) set @mass_consumption = 0;				
	set @temp_consumption = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop GROUP BY fuel_type);;
	if (@temp_consumption is null) set @temp_consumption = 0;					
	if (@volume_consumption <> 0 and @volume_consumption is not null) begin 
		set @dens_consumption = (@mass_consumption/@volume_consumption)*1000;
		set @volume15_consumption = (SELECT  SUM([ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2, volume)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop and volume>0  GROUP BY fuel_type);
		set @dens15_consumption =  (SELECT  AVG([ASU_AZSlogs].[dbo].[GET_DENS15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop and volume>0  GROUP BY fuel_type);
		set @mass15_consumption = @volume15_consumption*@dens15_consumption*0.001;
	end else begin
		set @dens_consumption = 0;
		set @dens15_consumption = 0;
		set @volume15_consumption = 0;
		set @mass15_consumption = 0;
	end;
	-->
	--insert into [ASU_AZSoperations].[dbo].[Daily_Report_15]
	select 
		[type] = @type,
		date_start = @date_start,
		date_stop = @date_stop,
		volume_start = @107000022_volume_start,
		mass_start = @107000022_mass_start,
		dens_start = @107000022_dens_start,
		temp_start = @107000022_temp_start,
		volume15_start = @107000022_volume15_start,
		mass15_start = @107000022_mass15_start,
		dens15_start = @107000022_dens15_start,

		volume_coming = @volume_coming,
		mass_coming = @mass_coming,
		dens_coming = @dens_coming,
		temp_coming = @temp_coming,
		volume15_coming = @volume15_coming,
		mass15_coming = @mass15_coming,
		dens15_coming = @dens15_coming,

		volume_consumption = @volume_consumption,
		mass_consumption = @mass_consumption,
		dens_consumption = @dens_consumption,
		temp_consumption = @temp_consumption,
		volume15_consumption = @volume15_consumption,
		mass15_consumption = @mass15_consumption,
		dens15_consumption = @dens15_consumption,				
			
		volume_stop = @107000022_volume_stop,
		mass_stop = @107000022_mass_stop,
		dens_stop = @107000022_dens_stop,
		temp_stop = @107000022_temp_stop,
		volume15_stop = @107000022_volume15_stop,
		mass15_stop = @107000022_mass15_stop,
		dens15_stop= @107000022_dens15_stop,				
				
		send = null
--***************************************************************************************
	set @type = N'107000023';
	-->
	set @mass_coming = (SELECT SUM(stop_mass - start_mass) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @date_start and start_datetime<=@date_stop GROUP BY fuel);
	if (@mass_coming is null) set @mass_coming = 0;
	set @volume_coming = (SELECT SUM(stop_volume - start_volume)*10 FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @date_start and start_datetime<=@date_stop GROUP BY fuel);
	if (@volume_coming is null) set @volume_coming = 0;				
	set @temp_coming = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @date_start and start_datetime<=@date_stop GROUP BY fuel);
	if (@temp_coming is null) set @temp_coming = 0;					
	if (@volume_coming <> 0 and @volume_coming is not null) begin 
		set @dens_coming = (@mass_coming/@volume_coming) * 1000;
		set @dens15_coming = [ASU_AZSlogs].[dbo].[GET_DENS15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming);
		set @volume15_coming = [ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming, @volume_coming);
		set @mass15_coming = @volume15_coming*@dens15_coming*0.001;
	end else begin
		set @dens_coming = 0;
		set @dens15_coming = 0;
		set @volume15_coming = 0;
		set @mass15_coming = 0;
	end;
	-->
	set @volume_consumption = (SELECT  SUM(volume) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop GROUP BY fuel_type);
	if (@volume_consumption is null) set @volume_consumption = 0;
	set @mass_consumption =(SELECT SUM(mass) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop GROUP BY fuel_type);
	if (@mass_consumption is null) set @mass_consumption = 0;				
	set @temp_consumption = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop GROUP BY fuel_type);;
	if (@temp_consumption is null) set @temp_consumption = 0;					
	if (@volume_consumption <> 0 and @volume_consumption is not null) begin 
		set @dens_consumption = (@mass_consumption/@volume_consumption)*1000;
		set @volume15_consumption = (SELECT  SUM([ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2, volume)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop and volume>0  GROUP BY fuel_type);
		set @dens15_consumption =  (SELECT  AVG([ASU_AZSlogs].[dbo].[GET_DENS15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop and volume>0  GROUP BY fuel_type);
		set @mass15_consumption = @volume15_consumption*@dens15_consumption*0.001;
	end else begin
		set @dens_consumption = 0;
		set @dens15_consumption = 0;
		set @volume15_consumption = 0;
		set @mass15_consumption = 0;
	end;
	-->
	--insert into [ASU_AZSoperations].[dbo].[Daily_Report_15]
	select 
		[type] = @type,
		date_start = @date_start,
		date_stop = @date_stop,
		volume_start = @107000023_volume_start,
		mass_start = @107000023_mass_start,
		dens_start = @107000023_dens_start,
		temp_start = @107000023_temp_start,
		volume15_start = @107000023_volume15_start,
		mass15_start = @107000023_mass15_start,
		dens15_start = @107000023_dens15_start,

		volume_coming = @volume_coming,
		mass_coming = @mass_coming,
		dens_coming = @dens_coming,
		temp_coming = @temp_coming,
		volume15_coming = @volume15_coming,
		mass15_coming = @mass15_coming,
		dens15_coming = @dens15_coming,

		volume_consumption = @volume_consumption,
		mass_consumption = @mass_consumption,
		dens_consumption = @dens_consumption,
		temp_consumption = @temp_consumption,
		volume15_consumption = @volume15_consumption,
		mass15_consumption = @mass15_consumption,
		dens15_consumption = @dens15_consumption,				
			
		volume_stop = @107000023_volume_stop,
		mass_stop = @107000023_mass_stop,
		dens_stop = @107000023_dens_stop,
		temp_stop = @107000023_temp_stop,
		volume15_stop = @107000023_volume15_stop,
		mass15_stop = @107000023_mass15_stop,
		dens15_stop= @107000023_dens15_stop,				
				
		send = null
--***************************************************************************************
	set @type = N'107000024';
	-->
	set @mass_coming = (SELECT SUM(stop_mass - start_mass) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @date_start and start_datetime<=@date_stop GROUP BY fuel);
	if (@mass_coming is null) set @mass_coming = 0;
	set @volume_coming = (SELECT SUM(stop_volume - start_volume)*10 FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @date_start and start_datetime<=@date_stop GROUP BY fuel);
	if (@volume_coming is null) set @volume_coming = 0;				
	set @temp_coming = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @date_start and start_datetime<=@date_stop GROUP BY fuel);
	if (@temp_coming is null) set @temp_coming = 0;					
	if (@volume_coming <> 0 and @volume_coming is not null) begin 
		set @dens_coming = (@mass_coming/@volume_coming) * 1000;
		set @dens15_coming = [ASU_AZSlogs].[dbo].[GET_DENS15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming);
		set @volume15_coming = [ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming, @volume_coming);
		set @mass15_coming = @volume15_coming*@dens15_coming*0.001;
	end else begin
		set @dens_coming = 0;
		set @dens15_coming = 0;
		set @volume15_coming = 0;
		set @mass15_coming = 0;
	end;
	-->
	set @volume_consumption = (SELECT  SUM(volume) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop GROUP BY fuel_type);
	if (@volume_consumption is null) set @volume_consumption = 0;
	set @mass_consumption =(SELECT SUM(mass) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop GROUP BY fuel_type);
	if (@mass_consumption is null) set @mass_consumption = 0;				
	set @temp_consumption = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop GROUP BY fuel_type);;
	if (@temp_consumption is null) set @temp_consumption = 0;					
	if (@volume_consumption <> 0 and @volume_consumption is not null) begin 
		set @dens_consumption = (@mass_consumption/@volume_consumption)*1000;
		set @volume15_consumption = (SELECT  SUM([ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2, volume)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop and volume>0  GROUP BY fuel_type);
		set @dens15_consumption =  (SELECT  AVG([ASU_AZSlogs].[dbo].[GET_DENS15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop and volume>0  GROUP BY fuel_type);
		set @mass15_consumption = @volume15_consumption*@dens15_consumption*0.001;
	end else begin
		set @dens_consumption = 0;
		set @dens15_consumption = 0;
		set @volume15_consumption = 0;
		set @mass15_consumption = 0;
	end;
	-->
	--insert into [ASU_AZSoperations].[dbo].[Daily_Report_15]
	select 
		[type] = @type,
		date_start = @date_start,
		date_stop = @date_stop,
		volume_start = @107000024_volume_start,
		mass_start = @107000024_mass_start,
		dens_start = @107000024_dens_start,
		temp_start = @107000024_temp_start,
		volume15_start = @107000024_volume15_start,
		mass15_start = @107000024_mass15_start,
		dens15_start = @107000024_dens15_start,

		volume_coming = @volume_coming,
		mass_coming = @mass_coming,
		dens_coming = @dens_coming,
		temp_coming = @temp_coming,
		volume15_coming = @volume15_coming,
		mass15_coming = @mass15_coming,
		dens15_coming = @dens15_coming,

		volume_consumption = @volume_consumption,
		mass_consumption = @mass_consumption,
		dens_consumption = @dens_consumption,
		temp_consumption = @temp_consumption,
		volume15_consumption = @volume15_consumption,
		mass15_consumption = @mass15_consumption,
		dens15_consumption = @dens15_consumption,				
			
		volume_stop = @107000024_volume_stop,
		mass_stop = @107000024_mass_stop,
		dens_stop = @107000024_dens_stop,
		temp_stop = @107000024_temp_stop,
		volume15_stop = @107000024_volume15_stop,
		mass15_stop = @107000024_mass15_stop,
		dens15_stop= @107000024_dens15_stop,				
				
		send = null
--***************************************************************************************
	set @type = N'107000027';
	-->
	set @mass_coming = (SELECT SUM(stop_mass - start_mass) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @date_start and start_datetime<=@date_stop GROUP BY fuel);
	if (@mass_coming is null) set @mass_coming = 0;
	set @volume_coming = (SELECT SUM(stop_volume - start_volume)*10 FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @date_start and start_datetime<=@date_stop GROUP BY fuel);
	if (@volume_coming is null) set @volume_coming = 0;				
	set @temp_coming = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.ReceivingFuelTanks where fuel=@type and start_datetime >= @date_start and start_datetime<=@date_stop GROUP BY fuel);
	if (@temp_coming is null) set @temp_coming = 0;					
	if (@volume_coming <> 0 and @volume_coming is not null) begin 
		set @dens_coming = (@mass_coming/@volume_coming) * 1000;
		set @dens15_coming = [ASU_AZSlogs].[dbo].[GET_DENS15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming);
		set @volume15_coming = [ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (@mass_coming/@volume_coming) * 1000, @temp_coming, @volume_coming);
		set @mass15_coming = @volume15_coming*@dens15_coming*0.001;
	end else begin
		set @dens_coming = 0;
		set @dens15_coming = 0;
		set @volume15_coming = 0;
		set @mass15_coming = 0;
	end;
	-->
	set @volume_consumption = (SELECT  SUM(volume) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop GROUP BY fuel_type);
	if (@volume_consumption is null) set @volume_consumption = 0;
	set @mass_consumption =(SELECT SUM(mass) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop GROUP BY fuel_type);
	if (@mass_consumption is null) set @mass_consumption = 0;				
	set @temp_consumption = (SELECT AVG((stop_temp+start_temp)/2) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop GROUP BY fuel_type);;
	if (@temp_consumption is null) set @temp_consumption = 0;					
	if (@volume_consumption <> 0 and @volume_consumption is not null) begin 
		set @dens_consumption = (@mass_consumption/@volume_consumption)*1000;
		set @volume15_consumption = (SELECT  SUM([ASU_AZSlogs].[dbo].[GET_VOLUME15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2, volume)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop and volume>0  GROUP BY fuel_type);
		set @dens15_consumption =  (SELECT  AVG([ASU_AZSlogs].[dbo].[GET_DENS15](@type, (mass/volume) * 1000, (stop_temp+start_temp)/2)) FROM [ASU_AZSoperations].dbo.FuelSale where fuel_type=@type and stop_datetime >= @date_start and stop_datetime<=@date_stop and volume>0  GROUP BY fuel_type);
		set @mass15_consumption = @volume15_consumption*@dens15_consumption*0.001;
	end else begin
		set @dens_consumption = 0;
		set @dens15_consumption = 0;
		set @volume15_consumption = 0;
		set @mass15_consumption = 0;
	end;
	-->
	--insert into [ASU_AZSoperations].[dbo].[Daily_Report_15]
	select 
		[type] = @type,
		date_start = @date_start,
		date_stop = @date_stop,
		volume_start = @107000027_volume_start,
		mass_start = @107000027_mass_start,
		dens_start = @107000027_dens_start,
		temp_start = @107000027_temp_start,
		volume15_start = @107000027_volume15_start,
		mass15_start = @107000027_mass15_start,
		dens15_start = @107000027_dens15_start,

		volume_coming = @volume_coming,
		mass_coming = @mass_coming,
		dens_coming = @dens_coming,
		temp_coming = @temp_coming,
		volume15_coming = @volume15_coming,
		mass15_coming = @mass15_coming,
		dens15_coming = @dens15_coming,

		volume_consumption = @volume_consumption,
		mass_consumption = @mass_consumption,
		dens_consumption = @dens_consumption,
		temp_consumption = @temp_consumption,
		volume15_consumption = @volume15_consumption,
		mass15_consumption = @mass15_consumption,
		dens15_consumption = @dens15_consumption,				
			
		volume_stop = @107000027_volume_stop,
		mass_stop = @107000027_mass_stop,
		dens_stop = @107000027_dens_stop,
		temp_stop = @107000027_temp_stop,
		volume15_stop = @107000027_volume15_stop,
		mass15_stop = @107000027_mass15_stop,
		dens15_stop= @107000027_dens15_stop,				
				
		send = null
