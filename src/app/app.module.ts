import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AirlinesComponent } from './airlines/airlines.component';
import { RouterModule ,Routes} from '@angular/router';
import { PassangersComponent } from './passangers/passangers.component';
import {HttpClientModule} from '@angular/common/http'

const appRoutes:Routes=[
  {
    path:"",component:AirlinesComponent
  },
  {
    path:"pass",component:PassangersComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AirlinesComponent,
    PassangersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
