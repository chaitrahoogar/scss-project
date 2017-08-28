import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
  value="";
  constructor(private router:Router) { }
   gotolead(){
           this.router.navigateByUrl('/workbench');
   }
  ngOnInit() {
    var currentUser = localStorage.getItem('Role');
    this.value=currentUser;
  }

}
