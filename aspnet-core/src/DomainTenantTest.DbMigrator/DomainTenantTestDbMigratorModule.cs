using DomainTenantTest.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace DomainTenantTest.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(DomainTenantTestEntityFrameworkCoreDbMigrationsModule),
        typeof(DomainTenantTestApplicationContractsModule)
        )]
    public class DomainTenantTestDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
