import {Component, HostListener, Input, OnInit} from '@angular/core';
import {PictureModel} from './picture.model';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
  animations: [
    trigger('hoverAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.1)',
      })),

      transition('small <=> large', animate('150ms ease-in')),
    ]),
  ]
})
export class PictureComponent implements OnInit {
  @Input() picture: PictureModel;
  visible = false;
  hoverState = 'small';

  constructor() { }

  ngOnInit() {
  }

  closePopup() {
    this.visible = false;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hoverState = 'large';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hoverState = 'small';
  }

}
