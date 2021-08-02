import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    styleUrls: ['./custom.css']
  // styles: ['h1 { font-weight: bold; color: red}',
  // 'h2 { font-weight: normal; color: blue}']
})
export class AppComponent {
  colors = ["blue", "red", "green"]
}
