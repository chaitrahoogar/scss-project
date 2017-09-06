import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService} from './login.service'

@Component({
  selector: 'app-log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AppService]
})
export class LogInComponent implements OnInit {
   login: any ={};
   token="";
   message="";
   disableValue=true;
   disablename=false;
   disableemail=false;
   resempdata=[];
   errorMessage = "";
   edited=false;
   errormessage="";
     submit(){

      // if(this.login.UEmail==undefined ||this.login.UPassword==undefined || this.login.UEmail=="" ||this.login.UPassword=="")
      //     {
      //       this.router.navigateByUrl('/login');
      //        this.disableValue=false;
      //        if(this.login.UEmail==undefined ||this.login.UEmail==""){
      //        this.disablename=true;
      //       }
      //       else{
      //         this.disablename=false;
      //       }
      //        if(this.login.UPassword==undefined ||this.login.UPassword==""){
      //        this.disableemail=true;
      //       }
      //       else{
      //         this.disableemail=false;
      //       }
      //     }
      //     else{
      //       this.router.navigateByUrl('/lead');
     // http://localhost:4200/home?mail=anshumanpanda@gmail.com&role=Sales_Rep
      //     }
           this._appservice.serviceMethod(this.login).subscribe((response) => { 
               this.resempdata=response;
              localStorage.setItem('shortname',response.ShortName);

              localStorage.setItem('Role',response.Role);
               localStorage.setItem('token',response.token);
               if(response.status=="fail"){
                    this.router.navigateByUrl('/login');
               }
               else if(response.status=="success"){
                      this.router.navigateByUrl('/workbench');
                      console.log(response);
               }
               this.edited=false;
              
       },
       e=>{this.errorMessage = e;
         this.errormessage=e.message;
         this.edited=true;
        });
     }
     addGears(){
       this.disablename=false;
     }
     addGears1(){
       this.disableemail=false;
     }

     //time stamp

  constructor(private router:Router,private _appservice:AppService) { }
  ngOnInit() {
  var thehours = new Date().getHours();
	var themessage;
	var morning = ('Good morning');
	var afternoon = ('Good afternoon');
	var evening = ('Good evening');

	if (thehours >= 0 && thehours < 12) {
		themessage = morning; 

	} else if (thehours >= 12 && thehours < 17) {
		themessage = afternoon;

	} else if (thehours >= 17 && thehours < 24) {
		themessage = evening;
	}
   this.message=themessage;
    localStorage.setItem('currentUser', JSON.stringify({ token: this.token }));
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser.token; // your token
  }

}
