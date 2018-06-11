import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticlesModule } from 'angular-particle';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollEventModule } from 'ngx-scroll-event';

//import components for router, may move to separate module if routing becomes too much
const appRoutes: Routes = [
  {path: 'home', component: LandingComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ParticlesModule,
    ScrollEventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
