import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AzureConfig } from '../azure.config';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(private http: HttpClient) { }

  getAADUserProfile(): Observable<any> {
    return this.http.get(AzureConfig.graphUrl);
  }
}
