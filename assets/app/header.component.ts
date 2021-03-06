import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="row">
      <nav class="col-md-8 col-md-offset-2">
      <h1 class="display-1 text-center header">MESSAGE BOARD APP</h1>
        <ul class="nav nav-pills">
          <li routerLinkActive="active">
            <a [routerLink]="['/messages']">Messanger</a>
          </li>
          <li routerLinkActive="active">
            <a [routerLink]="['/auth']">Authentication</a>
          </li>
        </ul>
      </nav>
    </header>
  `
})
export class HeaderComponent {

}
