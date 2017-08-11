import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register={};
  token;
  submitRegister(){
      console.log(this.register);
  }
  
    constructor() { }

  ngOnInit() {
   
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser.token; // your token
    // alert( this.token);
  }

}

