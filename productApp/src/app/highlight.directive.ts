import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.el.nativeElement.style.fontSize = '30px';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highLightColor('blue', '50px')

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highLightColor('red', '20px')
  }

  highLightColor(color: string, size: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.fontSize = size;
  }

}
