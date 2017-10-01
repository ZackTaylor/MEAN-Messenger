import { Component } from "@angular/core";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent {
  error: Error;
  display = 'none';

  onErrorHandled() {
    this.display = 'none';
  }
}
