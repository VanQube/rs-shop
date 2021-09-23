import { Component } from '@angular/core';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss'],
})
export class InfoBlockComponent {
  public showContacts: boolean = false;

  constructor() {}

  toggleContacts(): void {
    this.showContacts = !this.showContacts;
  }
}
