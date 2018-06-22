import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticlesModule } from 'angular-particle';
import { NgsRevealModule } from 'ng-scrollreveal';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

//firebase Setup
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';


//import components for router, may move to separate module if routing becomes too much
const appRoutes: Routes = [
  {path: 'home', component: LandingComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'contact', component: ContactComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ParticlesModule,
    NgsRevealModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
