import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  name: string = "Lorenzo White";

  //TODO add elements that define my skillset so they're not hardcoded into HTML

  constructor() { }

  ngOnInit() {
  }

}
