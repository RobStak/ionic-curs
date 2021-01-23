import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment.prod';
import { ResponseTopHeadlines } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopHedlines(): Observable<ResponseTopHeadlines>{
    return this.http.get<ResponseTopHeadlines>(`http://newsapi.org/v2/top-headlines?country=us&apiKey=${env.apiKey}`)
  }
}
