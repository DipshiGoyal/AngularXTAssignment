import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character';
import { environment } 
        from './../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  // private testUrl = 'assets/data.json';


  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    //FIXME: implement get api for products
  return this.http.get<Character[]>(`${environment.apiEndPoint}/results`)
}

searchProducts(q: string): Observable<Character[]> {
  console.log(q);
  return this.http.get<Character[]>(`${environment.apiEndPoint}/results?q=${q}`);
}

}
