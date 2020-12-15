
export class UserConfig {

  public static readonly restEndpoints = {
    LOGIN: 'login',
    USER: 'v1/users',
    USER_ID: 'v1/users/id'
  };

  public static readonly restHeaders = {
    'Content-Type': 'application/json'
  };

  public static getRestUrl(endpoint: string, id?: number): string {
    let url = `${this.getBaseUrl()}/${endpoint}`;
    if (id) {
      url += `/${id.toString()}`;
    }
    return url;
  }

  public static getBaseUrl(): string {
    return `${this._baseServicePath}/api`;
  }

  private static get _baseServicePath() {
    // return 'http://localhost:9000'; // My Node Test Server
    // return 'https://localhost:44308'; // AzureTest .Net Core 3.1 https://localhost:44308/api/login
    return 'https://localhost:44334'; // AzureAAD2.2Attempt .Net Core 3.1 https://localhost:44334/api/login
  }

}

