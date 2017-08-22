import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
private Title: string;
private Link: string;
private userId: string;
  constructor(private route:  ActivatedRoute) { }

  ngOnInit() {
   
    this.route.queryParams.forEach((params: Params) => {
        this.Title = params['mail'];
        this.Link = params['role'];
        this.userId=params['UserID'];

    });

    console.log(this.route.snapshot.queryParams['mail'])
    console.log(this.route.snapshot.queryParams['role'])
    console.log(this.route.snapshot.queryParams['UserID'])

    localStorage.setItem('mail', this.route.snapshot.queryParams['mail']);
    localStorage.setItem('Role', this.route.snapshot.queryParams['role']);
    localStorage.setItem('UserId', this.route.snapshot.queryParams['UserID']);
  }

}
