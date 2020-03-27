using DomainTenantTest.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace DomainTenantTest.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class DomainTenantTestController : AbpController
    {
        protected DomainTenantTestController()
        {
            LocalizationResource = typeof(DomainTenantTestResource);
        }
    }
}