using System;
using System.Collections.Generic;
using System.Text;
using DomainTenantTest.Localization;
using Volo.Abp.Application.Services;

namespace DomainTenantTest
{
    /* Inherit your application services from this class.
     */
    public abstract class DomainTenantTestAppService : ApplicationService
    {
        protected DomainTenantTestAppService()
        {
            LocalizationResource = typeof(DomainTenantTestResource);
        }
    }
}
