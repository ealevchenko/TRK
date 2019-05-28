use [KRR-PA-REP-SBF]
GO

DECLARE	@return_value int

EXEC	@return_value = [dbo].[GET_TANK_OF_PERIOD]
		@table = N'BT2',
		@tank = N'B2',
		@start = N'2019-05-28 00:00:00',
		@stop = N'2019-05-28 23:59:59'

SELECT	'Return Value' = @return_value

GO