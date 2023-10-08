/* import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
[x: string]: any;
pkmnStts: any ={};

constructor(public pokemonService: PokemonService){}
 

ngOnInit() {
  // You can optionally load data when the component initializes
   this.loadPokemonData(0, 15, 1);
}

loadPokemonData(offset: number, limit: number, pkmnId: number) {
  this.pokemonService.getPkmns(offset, limit, pkmnId);
}
} */


import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  offset: number = 0;
  limit: number = 15;
  idPkmn: number = 0;

  constructor(public pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadPokemonData(this.offset, this.limit, this.idPkmn);
  }

  loadPokemonData(offset: number, limit: number, idPkmn: number) {
    this.pokemonService.getPkmns(offset, limit, idPkmn);
  }

  incrementOffset() {
    this.offset += 15;
    this.idPkmn += 15;
    this.loadPokemonData(this.offset, this.limit, this.idPkmn);
  }

  decrementOffset() {
    if (this.offset >= 15) {
      this.offset -= 15;
      this.idPkmn -= 15;
      this.loadPokemonData(this.offset, this.limit, this.idPkmn);
    }
  }
}

