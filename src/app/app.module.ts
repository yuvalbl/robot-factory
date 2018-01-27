import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { RobotListComponent } from './components/robot-list/robot-list.component';
import { RobotDetailComponent } from './components/robot-detail/robot-detail.component';
import { PartComponent } from './components/part/part.component';
import { PartListComponent } from './components/part-list/part-list.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    RobotListComponent,
    RobotDetailComponent,
    PartComponent,
    PartListComponent,
    HeaderNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
