import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';


import { ajax, AjaxRequest, AjaxResponse } from 'rxjs/ajax';

 


async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}



@Injectable({
  providedIn: 'root'
})
export class EnwServerApiService {

  private heroesUrl = 'http://192.168.30.99:3000';

  constructor(private http: HttpClient) { }

  public searchWord(key: string): Observable<AjaxResponse> {
    const url = this.heroesUrl +"/getKeyWord?key=" +  key;
    let apiData = ajax(url);

    return apiData
  }

}
