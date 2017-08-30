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
   viewleaddata=[];
  lead:any={};
  overlayToggle=false;
  
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
viewLead(leadId){
  console.log(leadId);
      this._leadService.leadViewMethod(leadId).subscribe((response) => { 
               this.viewleaddata=response.lead;
               
           console.log(this.viewleaddata);   
       });
}

mouseEnter(){
   this.overlayToggle=true;
}

mouseLeave(){
   this.overlayToggle=false;
}

  ngOnInit() {
    this.getlead();
    this.shornameinlead=localStorage.getItem('shortname');
  }

}

