import {Component, signal} from '@angular/core';
import {CommonModule, NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-control-flow',
  imports: [CommonModule,NgClass,NgStyle],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.scss',
})
export class ControlFlow {
  isLoggedIn = signal<boolean>(false);

  toggleLogin(){
    this.isLoggedIn.update(x=> !x);
  }

  cities = signal(['Surat', 'Ahmedabad', 'Vadodara']);
  newCity = signal<string>('');

  addCity() {
    const newCity = this.newCity().trim();

    if(!newCity){return; }

    this.cities.update(old => [...old, newCity]);
    this.newCity.set('');
  }


  role = signal<'admin' | 'user' | 'guest'>('guest');

  setRole(value: 'admin' | 'user' | 'guest') {
    this.role.set(value);
  }

  fontColor = signal<string>("Yellow");
}
