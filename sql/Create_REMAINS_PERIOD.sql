USE [ASU_AZSlogs]
CREATE TABLE [dbo].[REMAINS_PERIOD](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[type] [nvarchar](10) NULL,
	[date_start] [datetime] NULL,
	[date_stop] [datetime] NULL,
	[volume_start] [float] NULL,
	[mass_start] [float] NULL,
	[dens_start] [float] NULL,
	[volume_consumption] [float] NULL,
	[volume_coming] [float] NULL,
	[mass_consumption] [float] NULL,
	[mass_coming] [float] NULL,
	[volume_stop] [float] NULL,
	[mass_stop] [float] NULL,
	[dens_stop] [float] NULL,
 CONSTRAINT [PK_REMAINS_PERIOD] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO