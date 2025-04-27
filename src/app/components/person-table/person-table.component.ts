import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  name = 'Vaggelis';

  person = {
    givenName: 'Vaggelis',
    surName: 'Zour',
    age:36,
    email:'vagos@alekos.gr'
  }
}
