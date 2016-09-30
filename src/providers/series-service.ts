import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SeriesService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SeriesService {

  static get parameters() {
    return [[Http]];
  }

  constructor(public http: Http) {
    console.log('Hello SeriesService Provider');
  }

  getTimeline() {
    console.log('Get TV Series timeline');
    var url = '/api/series/timeline';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

}
