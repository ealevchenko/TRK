USE [ASU_AZSoperations]
GO

delete from [dbo].[Daily_Accounting_Report]
delete from [dbo].[Daily_Accounting_Detali_Report]
delete from [dbo].[DeliveryTanks]
delete from [dbo].[ReceivingTanks]
delete from [dbo].[RemainsTanks]

DECLARE	@return_value int

EXEC	@return_value = [dbo].[ADD_DailyAccountingReport]

EXEC	@return_value = [dbo].[ADD_DailyAccountingDetaliReport]

SELECT	'Return Value' = @return_value

GO
