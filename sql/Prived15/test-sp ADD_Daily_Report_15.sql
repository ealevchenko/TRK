USE [ASU_AZSoperations]
GO

drop table [dbo].[Daily_Report_15]

DECLARE	@return_value int

EXEC	@return_value = [dbo].[ADD_Daily_Report_15]

SELECT	'Return Value' = @return_value

GO

select * from [dbo].[Daily_Report_15]