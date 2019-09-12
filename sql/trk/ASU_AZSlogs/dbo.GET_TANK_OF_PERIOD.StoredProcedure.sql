USE [ASU_AZSlogs]
GO
/****** Object:  StoredProcedure [dbo].[GET_TANK_OF_PERIOD]    Script Date: 12.09.2019 21:51:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


-- =============================================

-- =============================================
CREATE PROCEDURE [dbo].[GET_TANK_OF_PERIOD]
	@table sysname, 
	@tank sysname,
	@start sysname, 
	@stop sysname
AS
begin
DECLARE @SQLString nvarchar(max);
DECLARE @ParmDefinition nvarchar(max);

		set @SQLString = N''+
		[dbo].[GET_TANK](@table, @tank, @start, @stop) + '';
		print @SQLString
EXECUTE sp_executesql
		@SQLString
		,@ParmDefinition
end


GO
