USE [KRR-PA-REP-SBF]
GO

INSERT INTO [dbo].[OPC_RFID]
           ([datetime]
           ,[num_trk]
           ,[side]
           ,[id_card]
           ,[id_hi]
           ,[id_lo])
     VALUES
           (getdate()
           ,6
           ,1
           ,909
           ,37
           ,50907)
GO


