using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using DomainTenantTest.Data;
using Volo.Abp.DependencyInjection;

namespace DomainTenantTest.EntityFrameworkCore
{
    public class EntityFrameworkCoreDomainTenantTestDbSchemaMigrator
        : IDomainTenantTestDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreDomainTenantTestDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the DomainTenantTestMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<DomainTenantTestMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}