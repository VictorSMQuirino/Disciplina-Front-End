import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDestaque]'
})
export class DestaqueDirective implements OnInit {

  constructor(private elemeto: ElementRef) { }

  ngOnInit(): void {
      this.elemeto.nativeElement.style.backgroundColor = 'blue';
      this.elemeto.nativeElement.style.color = 'white';
  }

}
