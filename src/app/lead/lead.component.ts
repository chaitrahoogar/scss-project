import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.scss']
})
export class LeadComponent implements OnInit {
 lead:any={};
  constructor() { }
   token="";
     submit(){
        console.log(this.lead);
        this.token="anushya";
        localStorage.setItem('currentUser', JSON.stringify({ token: this.token }));
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser.token; // your token
        alert(currentUser.token);
     }
  ngOnInit() {
  }

}
