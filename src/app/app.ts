import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Admin} from './Components/admin/admin';
import {User} from './Components/user/user';
import {SignaleLea} from './Components/signale-lea/signale-lea';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Admin,User,SignaleLea],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('project1');
}
