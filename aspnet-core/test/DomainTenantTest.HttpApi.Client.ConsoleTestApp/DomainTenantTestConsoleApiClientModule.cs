using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace DomainTenantTest.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(DomainTenantTestHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class DomainTenantTestConsoleApiClientModule : AbpModule
    {
        
    }
}
