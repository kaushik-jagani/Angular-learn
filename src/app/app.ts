import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Admin} from './Components/admin/admin';
import {User} from './Components/user/user';
import {SignaleLea} from './Components/signale-lea/signale-lea';
import {ControlFlow} from './Components/control-flow/control-flow';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Admin,User,SignaleLea,ControlFlow],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('project1');
}
