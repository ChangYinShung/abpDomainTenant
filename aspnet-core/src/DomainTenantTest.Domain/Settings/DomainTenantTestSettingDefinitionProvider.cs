using Volo.Abp.Settings;

namespace DomainTenantTest.Settings
{
    public class DomainTenantTestSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(DomainTenantTestSettings.MySetting1));
        }
    }
}
