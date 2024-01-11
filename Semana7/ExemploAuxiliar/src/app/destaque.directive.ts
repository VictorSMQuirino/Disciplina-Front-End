import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDestaque]'
})
export class DestaqueDirective implements OnInit{
  constructor(private elemento: ElementRef) {

  }

  ngOnInit(): void {
    this.elemento.nativeElement.style.backgroundColor = 'pink';
    this.elemento.nativeElement.style.color = 'green';
  }
}
