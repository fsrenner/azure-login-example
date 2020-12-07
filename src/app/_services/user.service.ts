import { UserConfig } from './../user.config';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(UserConfig.restHeaders),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loginUrl = UserConfig.getRestUrl(UserConfig.restEndpoints.LOGIN);
  userUrl = UserConfig.getRestUrl(UserConfig.restEndpoints.USER);

  constructor(private http: HttpClient) { }

  public login(): Observable<any> {
    // let loginUrl = UserConfig.getRestUrl(UserConfig.restEndpoints.LOGIN);
    // loginUrl = 'https://localhost:44308/api/login';
    // console.log(loginUrl);
    return this.http.post(this.loginUrl, {}, httpOptions);
  }

  public getUsers(): Observable<any> {
    const getUrl = UserConfig.getRestUrl(UserConfig.restEndpoints.USER);
    return this.http.get(getUrl, httpOptions);
  }

  public addUser(body: {
    firstName: string,
    lastName: string,
    emailAddress: string,
    aadId: any
  }): Observable<any> {
    const postUrl = UserConfig.getRestUrl(UserConfig.restEndpoints.USER);
    return this.http.post(postUrl, body, httpOptions);
  }

  public updateUser(id: number, body: {
    firstName?: string,
    lastName?: string,
    emailAddress?: string,
    aadId?: any
  }): Observable<any> {
    const putUrl = UserConfig.getRestUrl(UserConfig.restEndpoints.USER, id);
    return this.http.put(putUrl, body, httpOptions);
  }
}
