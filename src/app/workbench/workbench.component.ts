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
 skills=[];
  shornameinlead="";
   model={};
  show=false;
  role="";
  token="";
tags={};
  //code
   searchValue:string = '';
  reqStatus='Active';
  changeStatus(val){
    this.reqStatus=val;
  }
  reqRevenue='JP';
  changeRevenue(val){
    this.reqRevenue=val;
  }
  reqBusiness='Staffing';
  changeBusiness(val){
    this.reqBusiness=val;
  }
  reqFeel='Warm';
  changeFeel(val){
    this.reqFeel=val;
  }
  reqCOnversation='Conversation Type';
  changeConversation(val){
    this.reqCOnversation=val;
  }
  clearSearch() {
    this.searchValue= " ";
  }

  togglefunction(){
    this.show=!this.show
  }

  //code ends
  constructor(private _leadService:leadService,private router:Router) { }
   getlead(){
    this._leadService.leadMethod().subscribe((response) => { 
               this.resempdata=response;
               
           console.log(this.resempdata); 
             
       });
}
logout(){
         this.router.navigateByUrl('/login');
        //  localStorage.removeItem('Role');
}
viewLead(leadId){
  console.log(leadId);
      this._leadService.leadViewMethod(leadId).subscribe((response) => { 
               this.viewleaddata=response.lead;
               
           console.log(this.viewleaddata);
          //  this.reqStatus= response.lead.
          // console.log(response.lead.Tags)
          // this.tags=response.lead.Tags;
       });
}
requirement(id){
    console.log(this.model);
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
    this.role=localStorage.getItem('Role');
    this.token=localStorage.getItem('token');
  //  console.log(this.token);
  }

}

