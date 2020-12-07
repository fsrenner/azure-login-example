
export class UserConfig {

  public static readonly restEndpoints = {
    LOGIN: 'login',
    USER: 'v1/users'
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
    return 'http://localhost:9000';
  }

}

