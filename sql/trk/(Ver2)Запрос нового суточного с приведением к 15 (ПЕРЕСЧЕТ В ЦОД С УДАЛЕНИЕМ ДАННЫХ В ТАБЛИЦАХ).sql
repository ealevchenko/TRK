USE [ASU_AZSoperations]
GO

delete from [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Report_AZS]
delete from [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[Daily_Accounting_Detali_Report_AZS]
delete from [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[DeliveryTanks_AZS]
delete from [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[ReceivingTanks_AZS]
delete from [10.21.4.168].[KRR-PA-CNT-Oil].[dbo].[RemainsTanks_AZS]

DECLARE	@return_value int

EXEC	@return_value = [dbo].[ADD_DailyAccountingReport_DC]

SELECT	'Return Value' = @return_value

GO
