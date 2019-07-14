USE [ASU_AZSlogs]
GO

DECLARE	@return_value int

EXEC	@return_value = [dbo].[GET_REMAINS_OF_Date_15] N'2019-06-01 00:00:00.000'


SELECT	'Return Value' = @return_value

GO