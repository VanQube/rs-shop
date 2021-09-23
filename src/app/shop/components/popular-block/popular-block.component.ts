import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-block',
  templateUrl: './popular-block.component.html',
  styleUrls: ['./popular-block.component.scss'],
})
export class PopularBlockComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor() {}
}
