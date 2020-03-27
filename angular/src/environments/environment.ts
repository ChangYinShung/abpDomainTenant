export const environment = {
  production: false,
  application: {
    name: 'DomainTenantTest',
    logoUrl: ''
  },
  oAuthConfig: {
    issuer: 'https://localhost:44361',
    clientId: 'DomainTenantTest_App',
    dummyClientSecret: '1q2w3e*',
    scope: 'DomainTenantTest',
    showDebugInformation: true,
    oidc: false,
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44361'
    }
  },
  localization: {
    defaultResourceName: 'DomainTenantTest'
  }
};
