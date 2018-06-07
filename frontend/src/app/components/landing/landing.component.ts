import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing-sass/landing.component.scss']
})
export class LandingComponent implements OnInit {
  name: string = "Lorenzo White"

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
