import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pkmn-card',
  templateUrl: './pkmn-card.component.html',
  styleUrls: ['./pkmn-card.component.css']
})
export class PkmnCardComponent {

@Input()
  pkmn:any={};

@Input()
  pkmnNum:number = 0;

@Input()
  pkmnID: number = 0;

@Input() 
  pkmnId: number = 0;

@Input() 
  pkmnPic:string =''

@Input() 
  numeroPkmn: number = 0;

getImgPkmn(){
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/${this.numeroPkmn}.png`;
}

getPkmnNum(str:string | number, size = 4):string {
  let s = String(str);
  while (s.length < (size || 3)) {
    s = '0' +s;
  }
  return s;
}
}
