import { Component } from '@angular/core';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  value: string = 'Input Name';

  constructor() {}
}