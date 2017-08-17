import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register:any ={};
  token;
  submitRegister(){
     
      if(this.register.name==undefined || this.register.lname==undefined || this.register.password==undefined || this.register.confirm==undefined){
  
     this.router.navigateByUrl('/register');
    
     console.log(this.register);
     }
     else{
     this.router.navigateByUrl('/lead');
     }
  }

  
    constructor(private router:Router) { 

    }

  ngOnInit() {
   
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser.token; // your token
    // alert( this.token);
  }

}

