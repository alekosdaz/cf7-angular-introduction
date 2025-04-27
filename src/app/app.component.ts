import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Alekos';

  person = {
    givenName: 'Alekos',
    surName: 'Zour',
    age:36,
    email:'alekos@alekos.gr'
  }
}
