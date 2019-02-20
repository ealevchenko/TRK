[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(WebUI.App_Start.NinjectWebCommon), "Start")]
[assembly: WebActivatorEx.ApplicationShutdownMethodAttribute(typeof(WebUI.App_Start.NinjectWebCommon), "Stop")]

namespace WebUI.App_Start
{
    using System;
    using System.Web;

    using Microsoft.Web.Infrastructure.DynamicModuleHelper;

    using Ninject;
    using Ninject.Web.Common;
    using Ninject.Web.Common.WebHost;
    using Ninject.Web.WebApi;
    using System.Web.Http;
    using EFFC.Abstract;
    using EFFC.Entities;
    using EFFC.Concrete;
    using EFAZS.Abstract;
    using EFAZS.Concrete;
    using EFAZS.Entities;

    public static class NinjectWebCommon 
    {
        private static readonly Bootstrapper bootstrapper = new Bootstrapper();

        /// <summary>
        /// Starts the application
        /// </summary>
        public static void Start() 
        {
            DynamicModuleUtility.RegisterModule(typeof(OnePerRequestHttpModule));
            DynamicModuleUtility.RegisterModule(typeof(NinjectHttpModule));
            bootstrapper.Initialize(CreateKernel);
        }
        
        /// <summary>
        /// Stops the application.
        /// </summary>
        public static void Stop()
        {
            bootstrapper.ShutDown();
        }

        /// <summary>
        /// Creates the kernel that will manage your application.
        /// </summary>
        /// <returns>The created kernel.</returns>
        private static IKernel CreateKernel()
        {
            var kernel = new StandardKernel();
            try
            {
                kernel.Bind<Func<IKernel>>().ToMethod(ctx => () => new Bootstrapper().Kernel);
                kernel.Bind<IHttpModule>().To<HttpApplicationInitializationHttpModule>();
                RegisterServices(kernel);
                GlobalConfiguration.Configuration.DependencyResolver = new NinjectDependencyResolver(kernel);
                return kernel;

            }
            catch
            {
                kernel.Dispose();
                throw;
            }
        }

        /// <summary>
        /// Load your modules or register your services here!
        /// </summary>
        /// <param name="kernel">The kernel.</param>
        private static void RegisterServices(IKernel kernel)
        {
            kernel.Bind<EFFC.Abstract.IRepository<azsCards>>().To<EFazsCards>();
            kernel.Bind<ICat_OZM>().To<EFCat_OZM>();
            kernel.Bind<ICat_OZM_GSM>().To<EFCat_OZM_GSM>();
            kernel.Bind<ICat_Depots>().To<EFCat_Depots>();
            kernel.Bind<IOPC_RFID>().To<EFOPC_RFID>();
            kernel.Bind<ICat_Werks>().To<EFCat_Werks>();
            kernel.Bind<EFAZS.Abstract.IRepository<SAP_Buffer>>().To<EFSAP_Buffer>();
            kernel.Bind<EFAZS.Abstract.IRepository<EFAZS.Entities.FuelSale>>().To<EFAZS.Concrete.EFFuelSale>();
            kernel.Bind<IUsersActions>().To<EFUsersActions>();
            kernel.Bind<EFAZS.Abstract.IRepository<EFAZS.Entities.Tanks_A92>>().To<EFAZS.Concrete.EFTanks_A92>();
            kernel.Bind<EFAZS.Abstract.IRepository<EFAZS.Entities.Tanks_A95>>().To<EFAZS.Concrete.EFTanks_A95>();
            kernel.Bind<EFAZS.Abstract.IRepository<EFAZS.Entities.Tanks_dt>>().To<EFAZS.Concrete.EFTanks_dt>();
            kernel.Bind<EFAZS.Abstract.IRepository<EFAZS.Entities.Tanks_kerosene>>().To<EFAZS.Concrete.EFTanks_kerosene>();
            kernel.Bind<EFAZS.Abstract.IRepository<EFAZS.Entities.ReceivingFuel>>().To<EFAZS.Concrete.EFReceivingFuel>();
            kernel.Bind<EFAZS.Abstract.IRepository<EFAZS.Entities.ReceivingFuelTanks>>().To<EFAZS.Concrete.EFReceivingFuelTanks>();
        }
    }
}