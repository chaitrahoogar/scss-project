import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LogInComponent implements OnInit {
   login: any ={};
   token="";
     submit(){
        // console.log(this.login);
        // // this.token="anushya";
        // localStorage.setItem('currentUser', JSON.stringify({ token: this.token }));
        // var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // this.token = currentUser.token; // your token
        // alert(currentUser.token);
        if(this.login.name==undefined ||this.login.password==undefined )
          {
            this.router.navigateByUrl('/login');
          }
          else{
            this.router.navigateByUrl('/lead');
          }
     }
  constructor(private router:Router) { }

  ngOnInit() {
    localStorage.setItem('currentUser', JSON.stringify({ token: this.token }));
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser.token; // your token
  }

}
