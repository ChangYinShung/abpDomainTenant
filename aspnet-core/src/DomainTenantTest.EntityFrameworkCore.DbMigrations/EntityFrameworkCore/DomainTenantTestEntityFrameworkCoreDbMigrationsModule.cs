using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace DomainTenantTest.EntityFrameworkCore
{
    [DependsOn(
        typeof(DomainTenantTestEntityFrameworkCoreModule)
        )]
    public class DomainTenantTestEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<DomainTenantTestMigrationsDbContext>();
        }
    }
}
