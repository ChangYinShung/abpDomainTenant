using System.Threading.Tasks;

namespace DomainTenantTest.Data
{
    public interface IDomainTenantTestDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
