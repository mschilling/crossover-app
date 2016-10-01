import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SeriesService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SeriesService {

  private baseUrl: string = '/tvdb-api';
  //private baseUrl: string = 'https://api.thetvdb.com';

  static get parameters() {
    return [[Http]];
  }

  constructor(public http: Http) {
    console.log('Hello SeriesService Provider');
  }

  getTimeline() {

    //localStorage.setItem('auth_token', this.accessToken);
    let authToken = localStorage.getItem('auth_token');
    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('Authorization', 'Bearer ' + authToken);

    let options = new RequestOptions({ headers: headers });

    var url = this.baseUrl + '/series/257655/episodes';
    url = 'http://api.michaelschilling.com/series/timeline';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }


}
