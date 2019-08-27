USE [ASU_AZSlogs]
GO
/****** Object:  StoredProcedure [dbo].[GET_TANK_OF_PERIOD]    Script Date: 27.08.2019 14:36:44 ******/
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
