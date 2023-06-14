import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css'],
})
export class CookieComponent {
  show = true;
  disappear() {
    this.show = !this.show;
  }
}
