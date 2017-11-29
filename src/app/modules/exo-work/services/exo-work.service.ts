import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Person } from '../modules/person';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class ExoWorkService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  private ExtractData(response: Response) {
    return response.json();
  }

  private HandleError(error: any): Promise<any> {
    return Promise.reject(error);
  }

  GetPersonList(): Observable<Person[]> {
    const urlQueryGet = 'http://demopeople.exolever.com/api/consultants';

    return this.http.get(urlQueryGet)
      .map(this.ExtractData)
      .catch(this.HandleError);
  }

}
