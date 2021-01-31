import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment.prod';
import { ResponseTopHeadlines } from '../models/news';

const headers = new HttpHeaders({
  'X-Api-key': env.apiKey
})

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  public headlinesPage: number;

  public cateroyPage: number;
  public currentCategory: string;

  constructor(private http: HttpClient) {
    this.headlinesPage = 0;
    this.cateroyPage=0;
   }

  getTopHedlines(): Observable<ResponseTopHeadlines>{
    this.headlinesPage++;
    return this.http.get<ResponseTopHeadlines>(`${env.apiUrl}/top-headlines?country=us&page=${this.headlinesPage}`, {headers})
  }
  getTopHedlinesCategory(category: string): Observable<ResponseTopHeadlines>{
    if (this.currentCategory != category){
      this.currentCategory = category;
      this.cateroyPage = 0;
    }
    this.cateroyPage++;
    return this.http.get<ResponseTopHeadlines>(`${env.apiUrl}/top-headlines?country=us&category=${category}&page=${this.cateroyPage}`,{headers})
  }
}
