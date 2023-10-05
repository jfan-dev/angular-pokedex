import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar-item',
  templateUrl: './menu-bar-item.component.html',
  styleUrls: ['./menu-bar-item.component.css']
})
export class MenuBarItemComponent {
  
  @Input()
  menuBarIcon:string=""

  @Input()
  menuBarLinkName:string=""

}
