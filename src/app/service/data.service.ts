import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  Get(uri, searchData) {
    let searchString = '?';
    for (const i in searchData) {
      if (searchString) {
        searchString += '&' + i + '=' + searchData[i];
      }
    }
    return this.http
      .get(environment.api + uri + searchString)
      .map(res => { console.log(res); return res; })
      .toPromise()
      .catch(this.handleError);
  }

  Post(uri, data) {
    return this.http.post(environment.api + uri, data)
    .map(res => { console.log(res); return res; })
    .toPromise()
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
