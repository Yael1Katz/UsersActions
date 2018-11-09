import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  endpoint: string = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) { }

  getAllData(): Observable<any> {
    return this.httpClient.get(this.endpoint);
  }

  insertNewData(body: any) {
    return this.httpClient.post(this.endpoint, body);
  }
}
