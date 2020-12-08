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
    return this.http.post(this.loginUrl, {}, httpOptions);
  }

  public getUsers(id?: number): Observable<any> {
    const getUrl = id
      ? UserConfig.getRestUrl(UserConfig.restEndpoints.USER, id)
      : UserConfig.getRestUrl(UserConfig.restEndpoints.USER);
    return this.http.get(getUrl, httpOptions);
  }

  public getUserIds(): Observable<any> {
    const getIdsUrl = UserConfig.getRestUrl(UserConfig.restEndpoints.USER_ID);
    return this.http.get(getIdsUrl, httpOptions);
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

  public deleteUser(id: number): Observable<any> {
    const deleteUrl = UserConfig.getRestUrl(UserConfig.restEndpoints.USER, id);
    return this.http.delete(deleteUrl, httpOptions);
  }
}
