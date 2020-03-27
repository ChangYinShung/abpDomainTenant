using Volo.Abp.Modularity;

namespace DomainTenantTest
{
    [DependsOn(
        typeof(DomainTenantTestApplicationModule),
        typeof(DomainTenantTestDomainTestModule)
        )]
    public class DomainTenantTestApplicationTestModule : AbpModule
    {

    }
}