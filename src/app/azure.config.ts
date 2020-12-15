import { UserConfig } from './user.config';

export class AzureConfig {

  public static readonly redirectUri = 'http://localhost:4200/';
  public static readonly graphUrl = 'https://graph.microsoft.com/v1.0/me';
  public static readonly auth = {
    clientId: 'e6140f52-da3c-494e-ad77-4a9af1d6d140', // This is your client ID
    authority: 'https://login.microsoftonline.com/ocmdev.onmicrosoft.com',
    validateAuthority: true,
    redirectUri: AzureConfig.redirectUri,
    postLogoutRedirectUri: AzureConfig.redirectUri,
    navigateToLoginRequestUrl: true,
  };

  public static readonly cache = {
    storeAuthStateInCookie: false
  };

  public static readonly protectedResourceMap: [string, string[]][] = [
    [AzureConfig.graphUrl, ['user.read']],
    [UserConfig.getBaseUrl(), ['api://e6140f52-da3c-494e-ad77-4a9af1d6d140/User.Read']]
  ];

  public static readonly msalAngularConfig = {
    popUp: false,
    consentScopes: ['api://e6140f52-da3c-494e-ad77-4a9af1d6d140/User.Read'],
    protectedResourceMap: AzureConfig.protectedResourceMap
  };

  private static get _getGraphUrl(): string {
    return 'https://graph.microsoft.com/v1.0/me';
  }
}

