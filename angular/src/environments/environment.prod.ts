export const environment = {
  production: true,
  application: {
    name: 'DomainTenantTest',
    logoUrl: ''
  },
  oAuthConfig: {
    issuer: '',
    clientId: 'DomainTenantTest_App',
    dummyClientSecret: '1q2w3e*',
    scope: 'DomainTenantTest',
    showDebugInformation: true,
    oidc: false,
    requireHttps: false,
    skipIssuerCheck:true
  },
  apis: {
    default: {
      url: ''
    }
  },
  localization: {
    defaultResourceName: 'DomainTenantTest'
  }
};
