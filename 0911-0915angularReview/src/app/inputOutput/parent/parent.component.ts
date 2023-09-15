import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})

export class ParentComponent {
  name = 'Carl';

  conShowName(result: any) {
    this.name = result;
    console.log(this.name);
  }
}
