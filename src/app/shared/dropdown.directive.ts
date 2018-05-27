import {OnInit, Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit{
  @HostBinding('class.open') isOpen: boolean;

  constructor(){}

  ngOnInit(){

  }

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }
}
