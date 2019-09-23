import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEvent } from './query/event';
import { fromEventPattern, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryEventService {

  _url = 'http://localhost:5000/events';
  constructor(private _http: HttpClient) { }

  
  queryEvent() {
    return this._http.get<any>(this._url, { responseType: 'json'});
  }

}
