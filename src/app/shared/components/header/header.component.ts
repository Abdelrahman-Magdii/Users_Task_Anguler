import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() searchId: EventEmitter<number> = new EventEmitter<number>();


  searchUserId(id: any ): void {
    // console.log(id.data);
    if (id !== null) {
      const userId = parseInt(id.data, 10);// Convert input to number
      // console.log(userId);
      if (!isNaN(userId)) {
        this.searchId.emit(id.data); // Emit event with the searched user ID
      }
    }
  }

}
