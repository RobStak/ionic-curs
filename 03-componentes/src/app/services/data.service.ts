import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums')
  }

  getMenu() {
    return this.http.get<Componente[]>('/assets/data/menu-opts.json')
  }
}
