using DomainTenantTest.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace DomainTenantTest
{
    [DependsOn(
        typeof(DomainTenantTestEntityFrameworkCoreTestModule)
        )]
    public class DomainTenantTestDomainTestModule : AbpModule
    {

    }
}