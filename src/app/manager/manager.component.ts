import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
  value="";
  constructor() { }

  ngOnInit() {
    var currentUser = localStorage.getItem('Role');
    this.value=currentUser;
  }

}
