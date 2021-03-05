import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { responseMDB } from '../models/movies';
import * as moment from 'moment';

const URL = environment.urlApi;
const apiKey = environment.apiKey

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getCartellera():Observable<responseMDB>{

    const today = moment();
    const nextMonthDate = moment().add(1,'M') ;

    return this.getQuery<responseMDB>(`discover/movie?primary_release_date.gte=${today.format("yyyy-MM-DD")}&primary_release_date.lte=${nextMonthDate.format("yyyy-MM-DD")}`);
  }


  private getQuery<T>(query: string){
    query = `${environment.urlApi}${query}&api_key=${environment.apiKey}&language=es&include_image_language=es`;
    return this.http.get<T>(query);

  }
}
