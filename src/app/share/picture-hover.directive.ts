import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appPictureHover]'
})
export class PictureHoverDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log('in', this.element);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    console.log('out');
  }

}
