import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getCartellera():Observable<any>{

    return this.http.get(`${environment.urlApi}discover/movie?primary_release_date.gte=2021-02-15&primary_release_date.lte=2021-03-15&api_key=${environment.apiKey}&language=es&include_image_language=es`)
  }

}
