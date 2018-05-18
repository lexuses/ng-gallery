import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PictureListComponent } from './picture-list/picture-list.component';
import { PictureComponent } from './picture-list/picture/picture.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './share/api.service';
import { LoadingComponent } from './loading/loading.component';
import { PictureHoverDirective } from './share/picture-hover.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    PictureListComponent,
    PictureComponent,
    LoadingComponent,
    PictureHoverDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
