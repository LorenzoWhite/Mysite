import { Component, OnInit } from '@angular/core';
import { ScrollEvent } from 'ngx-scroll-event';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing-sass/landing.component.scss']
})
export class LandingComponent implements OnInit {
  //Setup for skill description
  name: string = "Lorenzo White";
  // TODO: turn skills into a class to bind descriptions to titles
  skills: string[] = ["Web Developer", "Filmmaker", "Designer"];

  //setup for scroll events
  hasScrolled: boolean;

  public handleScroll(event: ScrollEvent) {
    //console.log('scroll occurred', event.originalEvent);
    if (event.isReachingBottom) {
      console.log(`the user is reaching the bottom`);
      //hasScrolled = true;
    }
    if (event.isReachingTop) {
      console.log(`the user is reaching the top`);
    }
  }

  //setup for particle effects
  myStyle: object = {};
  myParams: object = {};

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
