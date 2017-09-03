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
  SkillsRequired="";
  position="";
  Budget="";
  Estimatetime="";
  title=""
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
       });
}
requirement(id){
    // console.log(this.model);
   let value= {
    "_id":id,
    "ReqDetails":{
                 "Title": this.title,
                "Positions": this.position,
                "EstimateTime":this.Estimatetime,
                "Budget": this.position,
                "SkillsRequired": [
                    this.SkillsRequired
                ]
            }
    }
 this._leadService.requirementService(id).subscribe((response) => { 
               console.log(response)
               
       });
}

mouseEnter(){
   this.overlayToggle=true;
}

mouseLeave(){
   this.overlayToggle=false;
}

schedule(Scheduledate,ScheduleTime,ScheduleLocation){
  var data=new Date(Scheduledate);
  
  var day = data.getDate();
  var monthIndex = data.getMonth();
  var year = data.getFullYear();
  monthIndex=monthIndex+1;
   console.log(year+"/"+monthIndex+"/"+day);
   
    var scheduleData= {
    "_id": "59aa7733758a804138f2718d",
    "Meeting": {
       "MeetingVenue": ScheduleLocation,
        "ScheduleDate": data,
        "ScheduleTime":ScheduleTime,
        }
   }
  // console.log(scheduleData);
  this._leadService.ScheduleMeetingService(scheduleData).subscribe((response) => { 
               console.log(response)
               
       });
}

  ngOnInit() {
    this.getlead();
    this.shornameinlead=localStorage.getItem('shortname');
    this.role=localStorage.getItem('Role');
    this.token=localStorage.getItem('token');
  //  console.log(this.token);
  }

}

