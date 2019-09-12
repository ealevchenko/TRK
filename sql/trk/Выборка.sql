use [ASU_AZSoperations]

        
		declare @fuel_type int = 107000024
		declare @string nvarchar(4000) = N'30,31'
        declare @delimiter char(1) = ','
		declare @start_date datetime = convert(datetime,'2019-09-06 20:11:50.830',120)

declare @result_fuel TABLE 
 (
	dt datetime,
	fuel_type int,
	tank nvarchar(3),
	volume float,
	dens float,
	mass float,
	temp float
 )

	DECLARE @a SMALLINT
	DECLARE @b SMALLINT
	declare @num sysname
	DECLARE @SQLString nvarchar(max);
	DECLARE @ParmDefinition nvarchar(max);

	SET @a = charindex(@delimiter, @string)
	SET @num = substring(@string, 1, @a-1)
	----------------------------------------------------------------------------------------
	set @SQLString = 'SELECT top(1)
       [OWN_tank'+@num+'_mass_TIMESTAMP] as dt
	   ,[fuel_type] = '+CAST(@fuel_type as sysname)+'
	   ,[tank] = '''+@num+'''
      ,[OWN_tank'+@num+'_volume_VALUE] as volume
      ,[OWN_tank'+@num+'_dens_VALUE] as dens
      ,[OWN_tank'+@num+'_mass_VALUE] as mass
      ,[OWN_tank'+@num+'_temp_VALUE]/10.0 as temp
	FROM [ASU_AZSlogs].[dbo].[DT'+@num+'] 
	where [OWN_tank'+@num+'_mass_TIMESTAMP] <= '''+ CAST(@start_date as nvarchar(23)) + '''
	order by [OWN_tank'+@num+'_mass_TIMESTAMP] desc'

	insert @result_fuel
	EXEC sp_executesql
		@SQLString
		,@ParmDefinition
	------------------------------------------------------------------------------------------
	WHILE @a <> 0
		BEGIN
			SET @b = charindex(@delimiter, @string, @a+1)
			IF @b <> 0
				begin
				SET @num = substring(@string, @a+1, @b-@a-1)
					----------------------------------------------------------------------------------------
					set @SQLString = 'SELECT top(1)
					   [OWN_tank'+@num+'_mass_TIMESTAMP] as dt
					   ,[fuel_type] = '+CAST(@fuel_type as sysname)+'
					   ,[tank] = '''+@num+'''
					  ,[OWN_tank'+@num+'_volume_VALUE] as volume
					  ,[OWN_tank'+@num+'_dens_VALUE] as dens
					  ,[OWN_tank'+@num+'_mass_VALUE] as mass
					  ,[OWN_tank'+@num+'_temp_VALUE]/10.0 as temp
					FROM [ASU_AZSlogs].[dbo].[DT'+@num+'] 
					where [OWN_tank'+@num+'_mass_TIMESTAMP] <= '''+ CAST(@start_date as nvarchar(23)) + '''
					order by [OWN_tank'+@num+'_mass_TIMESTAMP] desc'

					insert @result_fuel
					EXEC sp_executesql
						@SQLString
						,@ParmDefinition
					------------------------------------------------------------------------------------------
				end

            ELSE
				begin
				SET @num = substring(@string, @a+1, len(@string)-@a)
					----------------------------------------------------------------------------------------
					set @SQLString = 'SELECT top(1)
					   [OWN_tank'+@num+'_mass_TIMESTAMP] as dt
					   ,[fuel_type] = '+CAST(@fuel_type as sysname)+'
					   ,[tank] = '''+@num+'''
					  ,[OWN_tank'+@num+'_volume_VALUE] as volume
					  ,[OWN_tank'+@num+'_dens_VALUE] as dens
					  ,[OWN_tank'+@num+'_mass_VALUE] as mass
					  ,[OWN_tank'+@num+'_temp_VALUE]/10.0 as temp
					FROM [ASU_AZSlogs].[dbo].[DT'+@num+'] 
					where [OWN_tank'+@num+'_mass_TIMESTAMP] <= '''+ CAST(@start_date as nvarchar(23)) + '''
					order by [OWN_tank'+@num+'_mass_TIMESTAMP] desc'

					insert @result_fuel
					EXEC sp_executesql
						@SQLString
						,@ParmDefinition
					------------------------------------------------------------------------------------------
				end

			SET @a = @b
         END

select * from @result_fuel 