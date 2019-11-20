import { Component } from '@angular/core';
import { Facade } from './shared/services/facade/facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private facade: Facade) {
    this.facade.loadPosts();

  }
}
