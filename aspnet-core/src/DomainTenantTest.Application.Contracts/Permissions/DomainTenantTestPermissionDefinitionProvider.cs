using DomainTenantTest.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace DomainTenantTest.Permissions
{
    public class DomainTenantTestPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(DomainTenantTestPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(DomainTenantTestPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<DomainTenantTestResource>(name);
        }
    }
}
