import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public categoryItem = [
    { id: 1, name: 'Lót chuột' },
    { id: 2, name: 'Bình nước' },
    { id: 3, name: 'Áo thun' },
    { id: 4, name: 'Idol' },
    { id: 5, name: 'BT21' }
  ];

  constructor() {}
  title = 'NgotV1';
}
