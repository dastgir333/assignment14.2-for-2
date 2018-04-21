import { Injectable } from '@angular/core';
import { Http,RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class ListService {

  private url: string = "http://localhost:3000/api/"

  constructor(private http: Http) { }

  /** Add list in the array List. */
  addList(arrayListDetail: any) {
     const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.url}addUserDetail`, arrayListDetail,options)
      .map((res) => res.json())
  }

  /**Get the list list from the array. */
  getList(): Observable<any[]> {
    //return this.Arraylist;
    return
  }

}
