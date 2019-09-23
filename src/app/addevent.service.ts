import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { calendarEvent } from './calendarEvent';

@Injectable({
  providedIn: 'root'
})
export class AddEventService {

  _url = 'http://127.0.0.1:5000/events';
  constructor(private _http: HttpClient) { }

  sendEvent(event: calendarEvent) {
    return this._http.post<any>(this._url, event, { responseType: 'json'});
  }
}
