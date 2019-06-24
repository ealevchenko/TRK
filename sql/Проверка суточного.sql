USE [ASU_AZSlogs]
GO


declare @start datetime;
declare @stop datetime;
set @start = CONVERT(datetime,'2019-06-04 00:00:00',120)
set @stop = CONVERT(datetime,'2019-06-05 00:00:00',120)

EXEC [dbo].[GET_DAILY]
		@start = @start,
		@stop = @stop
