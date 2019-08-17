use [ASU_AZSlogs]
SELECT top (1)  
OWN_tankB11_dens_TIMESTAMP as datetime, 
OWN_tankB11_dens_VALUE as dens, 
OWN_tankB11_fill_percent_VALUE as fill_percent, 
OWN_tankB11_level_VALUE as level, 
OWN_tankB11_mass_VALUE as mass, 
OWN_tankB11_temp_VALUE as temp, 
OWN_tankB11_volume_VALUE as volume, 
OWN_tankB11_water_level_VALUE as water_level, 
OWN_tankB11_water_volume_VALUE as water_volume
FROM dbo.BT11 
where OWN_tankB11_dens_TIMESTAMP >= CONVERT(datetime,'2019-05-17 00:00:00',120) and OWN_tankB11_dens_TIMESTAMP <= CONVERT(datetime,'2019-05-17 19:00:00',120)
order by OWN_tankB11_dens_TIMESTAMP  


de


select 
[type] = 100000,
[tank] = N'B11',
[mass_start] = (SELECT top (1) OWN_tankB11_mass_VALUE FROM dbo.BT11 where OWN_tankB11_dens_TIMESTAMP >= CONVERT(datetime,'2019-05-17 00:00:00',120) and OWN_tankB11_dens_TIMESTAMP <= CONVERT(datetime,'2019-05-17 19:00:00',120) order by OWN_tankB11_dens_TIMESTAMP),
[mass_start] = (SELECT top (1) OWN_tankB11_mass_VALUE FROM dbo.BT11 where OWN_tankB11_dens_TIMESTAMP >= CONVERT(datetime,'2019-05-17 00:00:00',120) and OWN_tankB11_dens_TIMESTAMP <= CONVERT(datetime,'2019-05-17 19:00:00',120) order by OWN_tankB11_dens_TIMESTAMP desc)
union
select
[type] = 100000,
[tank] = N'B13',
[mass_start] = (SELECT top (1) OWN_tankB13_mass_VALUE FROM dbo.BT13 where OWN_tankB13_dens_TIMESTAMP >= CONVERT(datetime,'2019-05-17 00:00:00',120) and OWN_tankB13_dens_TIMESTAMP <= CONVERT(datetime,'2019-05-17 19:00:00',120) order by OWN_tankB13_dens_TIMESTAMP),
[mass_start] = (SELECT top (1) OWN_tankB13_mass_VALUE FROM dbo.BT13 where OWN_tankB13_dens_TIMESTAMP >= CONVERT(datetime,'2019-05-17 00:00:00',120) and OWN_tankB13_dens_TIMESTAMP <= CONVERT(datetime,'2019-05-17 19:00:00',120) order by OWN_tankB13_dens_TIMESTAMP desc)
