import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
=======
import {Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import { NG_VALIDATORS,Validator,Validators,AbstractControl,ValidatorFn } from '@angular/forms';
import { RegisterService} from './register.service'
>>>>>>> 6f5ff6c87901f97a0d84af98f4da90da762fc39f
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[RegisterService]
})
export class RegisterComponent implements OnInit {
<<<<<<< HEAD
  // register={};
   register: any = {};
=======
  register:any ={};
>>>>>>> 6f5ff6c87901f97a0d84af98f4da90da762fc39f
  token;
  resempdata=[];
 data={
    "UEmail":localStorage.getItem('mail'),
    "UPassword":"hell2e13",
    "CustomerId" : 123,
    "CustName" : "dell",
    "UserID" : localStorage.getItem('UserId'),
    "UFirstName" : "john",
    "ULastName" : "cena",
    "Role" : localStorage.getItem('Role')
 }

  disableValue=true;
  disablefname=false;
   disablelname=false;
   disablepassword=false;
   disableconfirmpsw=false;
   passwordNotMatch=false;
  submitRegister(){
<<<<<<< HEAD
       
      if(this.register.name==undefined || this.register.lname==undefined || this.register.password==undefined || this.register.confirm==undefined){
   
     this.router.navigateByUrl('/register');
    
      console.log(this.register);
     }
     else{
     this.router.navigateByUrl('/login');
     }
=======
       this._registerService.registerService(this.data).subscribe((response) => { 
               this.resempdata=response;
               console.log(this.resempdata);
               if(this.register.name==undefined || this.register.lname==undefined || this.register.password==undefined || this.register.confirm==undefined ||this.register.name=="" || this.register.lname=="" || this.register.password=="" || this.register.confirm==""){
     this.disableValue=false;
     this.router.navigateByUrl('/register');
     if(this.register.name==undefined || this.register.name==""){
         this.disablefname=true;
     }
     else{
          this.disablefname=false;
     }
      if(this.register.lname==undefined || this.register.lname==""){
         this.disablelname=true;
     }
     else{
          this.disablelname=false;
     }
      if(this.register.password==undefined || this.register.password==""){
         this.disablepassword=true;
     }
     else{
          this.disablepassword=false;
     }
      if(this.register.confirm==undefined || this.register.confirm==""){
         this.disableconfirmpsw=true;
     }
     else{
          this.disableconfirmpsw=false;
     }
     }
     else{
       this.disableValue=true;
     this.router.navigateByUrl('/lead');
    }
     });
      
    
>>>>>>> 6f5ff6c87901f97a0d84af98f4da90da762fc39f
  }
reqfirstName(){
    this.disablefname=false;
}
reqlName(){
    this.disablelname=false;
}
reqpassword(){
    this.disablepassword=false;
}
reqconfirm(){
    this.disableconfirmpsw=false;
    console.log("password"+this.register.password);
     console.log("password"+this.register.confirm);
    if(this.register.password!=this.register.confirm){
       this.passwordNotMatch=true;
        console.log("password not matched");
    }
    else{
         this.passwordNotMatch=false;
         console.log("password matched");
    }
}
  
<<<<<<< HEAD
    constructor(private router: Router) { 
=======
    constructor(private router:Router,private _registerService:RegisterService) { 

>>>>>>> 6f5ff6c87901f97a0d84af98f4da90da762fc39f
    }

  ngOnInit() {
   console.log(this.data);
    var currentUser = localStorage.getItem('mail');
    var currentUser = localStorage.getItem('Role');
    var currentUser = localStorage.getItem('UserId');

    
  }

}

