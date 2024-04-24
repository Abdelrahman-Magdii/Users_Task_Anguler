import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from './users/services/user.service';
import { User } from './users/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Market';

}
