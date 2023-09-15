import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() childName: string='';
  @Output() giveParent = new EventEmitter<string>();

  updateName() {
    this.childName = 'Dog';
    this.giveParent.emit(this.childName);
  }
}
