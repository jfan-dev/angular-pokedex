import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  loadPkmns: any;
  pkmns = [];

  loadPkmnStts: any;
  pkmnStts = [];

  constructor(public httpClient: HttpClient) { 
    
  }
  async getPkmns(offset: number, limit: number, idPkmn: number) {

  const loadPkmns$ = this.httpClient.get<any>(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  this.loadPkmns = await lastValueFrom(loadPkmns$);
  
  this.pkmns = this.loadPkmns.results;
  
  const loadPkmnStts$ = this.httpClient.get<any>(`https://pokeapi.co/api/v2/pokemon/${idPkmn}`);
  this.loadPkmnStts = await lastValueFrom(loadPkmnStts$);
  
  this.pkmnStts = this.loadPkmnStts.results;

}
}

