import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  apiUrl:string = 'https://pokeapi.co/api/v2/pokemon/?offset=1&limit=40';
  info:any;
  
  constructor(
    private httpClient:HttpClient
  ) { }

  getPokemonList(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }
}
