import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  loadPkmns: any;
  pkmns = [];

  constructor(public httpClient: HttpClient) { 
    this.getPkmns();
  }
 async getPkmns() {

  const loadPkmns$ = this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151');
  this.loadPkmns = await lastValueFrom(loadPkmns$);


  this.pkmns = this.loadPkmns.results;
  console.log(this.pkmns)
  }
}
