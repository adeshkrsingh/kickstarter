import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  loading = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

}
