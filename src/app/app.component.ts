import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chatRoom';
  chatRoom = 'Fun with Taxes';

  constructor() {
  }

  ngOnInit(): void {
    const source = interval(1000);
    source.subscribe(()=>console.log("Works"));
  }
}
