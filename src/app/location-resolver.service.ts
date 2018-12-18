import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationResolverService implements Resolve<any> {

  constructor(private http: HttpClient) { }

  resolve() {
    return this.http.get('https://ipapi.co/json/');
    // https://ipapi.co/
  }
}
