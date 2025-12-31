import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin implements OnInit{
    name :string = 'admin';
    age :number = 1;
    isAdult :boolean = true;

    constructor( ) {
      console.log('Admin Constructor Called.');
    }
    ngOnInit() {
      this.name = 'admin';
    }
}
