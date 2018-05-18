import { Component, OnInit } from '@angular/core';
import {PictureModel} from './picture/picture.model';
import {ApiService} from '../share/api.service';
import {trigger, state, style, animate, transition, query, stagger, keyframes} from '@angular/animations';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('void => *', [
        query('.col3', style({ opacity: 0, transform: 'translateY(-20px)' }), {optional: true }),
        query('.col3', stagger('100ms', [
          animate('200ms ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-20px)'}),
            style({opacity: 1, transform: 'translateY(0)'}),
          ]))
        ]), {optional: true }),
      ]),
    ]),
  ]
})
export class PictureListComponent implements OnInit {
  pictures: PictureModel[] = [];
  limit = 9;
  offset = 0;
  loading = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.loadMore();
  }

  loadMore() {
    if (this.loading) {
      return;
    }

    this.loading = true;

    this.api.pictureList(this.limit, this.offset).subscribe((res: any) => {
      this.pictures.push(...res);
      this.loading = false;
      this.offset += this.limit;
    });
  }

}
