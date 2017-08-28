import { Component, OnInit } from '@angular/core';
import { leadService} from './workbench.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-workbench',
  templateUrl: './workbench.component.html',
  styleUrls: ['./workbench.component.scss'],
  providers:[leadService]
})
export class WorkbenchComponent implements OnInit {
  resempdata=[];
  lead:any={};
  shornameinlead="";
  constructor(private _leadService:leadService,private router:Router) { }
   getlead(){
    this._leadService.leadMethod().subscribe((response) => { 
               this.resempdata=response;
               
           console.log(this.resempdata);   
       });
}
 logout(){
         this.router.navigateByUrl('/login');
       }
  ngOnInit() {
    this.getlead();
    this.shornameinlead=localStorage.getItem('shortname');
  }

}

