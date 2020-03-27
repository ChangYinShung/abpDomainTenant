using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace DomainTenantTest.Data
{
    /* This is used if database provider does't define
     * IDomainTenantTestDbSchemaMigrator implementation.
     */
    public class NullDomainTenantTestDbSchemaMigrator : IDomainTenantTestDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}