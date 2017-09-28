import { Component } from "@angular/core"
import { Message } from "./message.model"

@Component({
  selector: 'app-message-list',
  template: `
    <div className="col-md-8 col-md-offset-2">
      <app-message
        [message]="message"
        (editClicked)="message.content = $event"
        *ngFor="let message of messages"></app-message>
    </div>
  `
})
export class MessageListComponent {
  messages: Message[] = [
    new Message('Some Message', 'Zack T'),
    new Message('Da BURRS', 'Jack A'),
    new Message('GUCCI', 'Jim Jones')
  ]
}
