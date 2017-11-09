import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';


@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  // Getdata(table: string, id: string) {
  //   return this.http.get(table)
  //     .toPromise()
  //     .catch(this.handleError);
  // }

  GetApidata(searchData) {
    let searchString = '?';
    for (const i in searchData) {
      if (searchString) {
        searchString += '&' + i + '=' + searchData[i];
      }
    }
    return this.http.get(environment.api + searchString)
      .map((res) => this.addTitle(res))
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private addTitle(res) {
    let data = [];
    res['data'].forEach((val, ind) => {
      let item = new Object();
      val.forEach((itemVal, itemInd) => {
        const title = res['title'][itemInd];
        item[title] = itemVal;
      });
      data.push(item);
    });
    return data;
  }
}
