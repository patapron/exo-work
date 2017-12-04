import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Response, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Person } from '../modules/person';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';

@Injectable()
export class ExoWorkService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private httpClient: HttpClient) { }

  // private ExtractData(response: Response) {
  //   return response.json();
  // }

  // private HandleError(error: any): Promise<any> {
  //   return Promise.reject(error);
  // }

  GetPersonList(): Observable<Person[]> {
    const urlQueryGet = 'http://demopeople.exolever.com/api/consultants';
    return this.httpClient.get<Person[]>(urlQueryGet);
  }

}
