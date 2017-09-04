import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Directive, forwardRef, Attribute,OnChanges, SimpleChanges,Input } from '@angular/core';
import { NG_VALIDATORS,Validator,Validators,AbstractControl,ValidatorFn } from '@angular/forms';
import { RegisterService} from './register.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[RegisterService]
})
export class RegisterComponent implements OnInit {
  register:any ={
      "UEmail":localStorage.getItem('mail'),
      "Role" : localStorage.getItem('Role')
  };
  token;
  resempdata=[];
  edited=false;
  errormessage="";
//  data={
//     "UEmail":localStorage.getItem('mail'),
//     "UPassword":"hell2e13",
//     "UserID" : localStorage.getItem('UserId'),
//     "UFirstName" : "john",
//     "ULastName" : "cena",
//     "Role" : localStorage.getItem('Role')
//  }

  disableValue=true;
  disablefname=false;
   disablelname=false;
   disablepassword=false;
   disableconfirmpsw=false;
   passwordNotMatch=false;
   resetpassword={};
   errorMessage="";
  submitRegister(){
      console.log(this.register);
       this._registerService.registerService(this.register).subscribe((response) => { 
               this.resempdata=response;
                localStorage.setItem('shortname',response.ShortName);
               console.log(this.resempdata);
               if(response.status=="fail"){
                    this.router.navigateByUrl('/register');
               }
               else if(response.status=="success"){
                      this.router.navigateByUrl('/manager');
               }
               this.edited=false;
            },
           e=>{this.errorMessage = e;
         this.edited=true;
         this.errormessage=e.message;
        //  alert(e.message)
        });
    //            if(this.register.name==undefined || this.register.lname==undefined || this.register.password==undefined || this.register.confirm==undefined ||this.register.name=="" || this.register.lname=="" || this.register.password=="" || this.register.confirm==""){
    //  this.disableValue=false;
    //  this.router.navigateByUrl('/register');
    //  if(this.register.name==undefined || this.register.name==""){
    //      this.disablefname=true;
    //  }
    //  else{
    //       this.disablefname=false;
    //  }
    //   if(this.register.lname==undefined || this.register.lname==""){
    //      this.disablelname=true;
    //  }
    //  else{
    //       this.disablelname=false;
    //  }
    //   if(this.register.password==undefined || this.register.password==""){
    //      this.disablepassword=true;
    //  }
    //  else{
    //       this.disablepassword=false;
    //  }
    //   if(this.register.confirm==undefined || this.register.confirm==""){
    //      this.disableconfirmpsw=true;
    //  }
    //  else{
    //       this.disableconfirmpsw=false;
    //  }
    //  }
    //  else{
    //    this.disableValue=true;
    //  this.router.navigateByUrl('/lead');
    // }
   
      
    
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
  
    constructor(private router:Router,private _registerService:RegisterService) { 

    }

  ngOnInit() {
   console.log(this.register);
    var currentUser = localStorage.getItem('mail');
    var currentUser = localStorage.getItem('Role');

    
  }

}

