import { Component, OnInit, HostListener } from '@angular/core';
import { NgsRevealConfig } from 'ng-scrollreveal';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing-sass/landing.component.scss']
})
export class LandingComponent implements OnInit {
  constructor(config: NgsRevealConfig) {
    config.duration = 1000;
    config.viewFactor = 0.3;
    config.easing = "ease";
  }
  //contactsCollection = db.collection('Contacts');
  //itemsCollection = db.collection('items');

  //Setup for skill description
  name: string = "Lorenzo White";

  // TODO: turn skills into a class to bind descriptions to titles
  skills: string[] = ["Web Developer", "Filmmaker", "Designer"];

  //setup for particle effects
  myStyle: object = {};
  myParams: object = {};

  //toggle isViewable
  isViewable = false;
  toggleView(){
    this.isViewable = !this.isViewable;
  }

  ngOnInit() {
    this.myParams = {
      particles: {
        number: {
          value: 40,
          },
        color: {
          value: 'FF7C1E'
              },
        shape: {
          type: 'circle'
              },
        move: {
          speed: 1
        },
        size: {
          value: 5
        },
        opacity: {
          value: 1
        },
        line_linked: {
          color: "#2D2D2D"
        }
      }
  };
  }
}
