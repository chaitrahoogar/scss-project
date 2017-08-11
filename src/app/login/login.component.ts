import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LogInComponent implements OnInit {
   login={};
   token="";
     submit(){
        console.log(this.login);
        // this.token="anushya";
        localStorage.setItem('currentUser', JSON.stringify({ token: this.token }));
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser.token; // your token
        alert(currentUser.token);
     }
  constructor() { }

  ngOnInit() {
    localStorage.setItem('currentUser', JSON.stringify({ token: this.token }));
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser.token; // your token
  }

}
