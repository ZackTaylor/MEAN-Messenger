import { Component, OnInit } from "@angular/core";
import { ErrorService } from "./error.service";

import { Error } from "./error.model"

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent implements OnInit{
  error: Error;
  display = 'none';

  constructor(private ErrorService: ErrorService) {}

  onErrorHandled() {
    this.display = 'none';
  }

  ngOnInit(){
    this.ErrorService.errorOccurred
      .subscribe(
        (error: Error) => {
          this.error = error;
          this.display = 'block';
        }
      );
  }
}
