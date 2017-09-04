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
  dumyValue="";
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
  displayList=[];
  userinfo=[];
  subscibe=[];
  Assigned=[];
  owner=[];
  updateTagResponse=[];
  userList=[];
  usertestList=[];
  SalesRepList=[];
  SalesReptestList=[];
  reqDetail=[];
  clintID="";
  //code
   searchValue:string = '';
  reqStatus='';
  changeStatus(val,id){
    var leadFeelchange={
        "_id":id,
        "LeadCurrentStatus":val
    }
     this._leadService.assignto(leadFeelchange).subscribe((response) => { 
               this.viewleaddata=response.lead;
               this.reqFeel=response.lead.LeadFeel; 
               this.reqStatus=response.lead.LeadCurrentStatus;
               this.reqBusiness=response.lead.EngagementType;
               this.reqRevenue=response.lead.LeadRevenue;
               this.userinfo=response.lead.UsersInfo;
               this.reqDetail=response.lead.ReqDetails;
           this.subscibe=[];
           this.Assigned=[];
           this.owner=[];
           for(var i=0;i< this.userinfo.length;i++){
                   if(this.userinfo[i].Action=="Subscribed"){
                       this.subscibe.push(this.userinfo[i]);
                   }
                   else if(this.userinfo[i].Action=="Assigned"){
                          this.Assigned.push(this.userinfo[i])
                   }
                   else if(this.userinfo[i].Action=="Owner"){
                         this.owner.push(this.userinfo[i])
                   }
           }
             
       });
  }
  reqRevenue='JP';
  changeRevenue(val,id){
    this.reqRevenue=val;
    var updateREvenueData={
    "_id":id,
    "LeadRevenue":val
  }
   this._leadService.updateLeadTagCcRev(updateREvenueData).subscribe((response) => { 
              //  this.updateTagResponse=response;
              
            this.viewleaddata=response.lead;
                this.reqFeel=response.lead.LeadFeel; 
               this.reqStatus=response.lead.LeadCurrentStatus;
               this.reqBusiness=response.lead.EngagementType;
               this.reqRevenue=response.lead.LeadRevenue;
               this.userinfo=response.lead.UsersInfo;
               this.reqDetail=response.lead.ReqDetails;
           this.subscibe=[];
           this.Assigned=[];
           this.owner=[];
           for(var i=0;i< this.userinfo.length;i++){
                   if(this.userinfo[i].Action=="Subscribed"){
                       this.subscibe.push(this.userinfo[i]);
                   }
                   else if(this.userinfo[i].Action=="Assigned"){
                          this.Assigned.push(this.userinfo[i])
                   }
                   else if(this.userinfo[i].Action=="Owner"){
                         this.owner.push(this.userinfo[i])
                   }
           }
             
       });
  }
  reqBusiness='Staffing';
  changeBusiness(val){
    this.reqBusiness=val;
  }
  reqFeel='';
  changeFeel(val,id){
     var leadFeelchange={
        "_id":id,
        "LeadFeel":val
    }
     this._leadService.assignto(leadFeelchange).subscribe((response) => { 
               this.viewleaddata=response.lead;
               this.reqFeel=response.lead.LeadFeel; 
               this.reqStatus=response.lead.LeadCurrentStatus;
               this.reqBusiness=response.lead.EngagementType;
               this.reqRevenue=response.lead.LeadRevenue
               this.userinfo=response.lead.UsersInfo;
               this.reqDetail=response.lead.ReqDetails;
           this.subscibe=[];
           this.Assigned=[];
           this.owner=[];
           for(var i=0;i< this.userinfo.length;i++){
                   if(this.userinfo[i].Action=="Subscribed"){
                       this.subscibe.push(this.userinfo[i]);
                   }
                   else if(this.userinfo[i].Action=="Assigned"){
                          this.Assigned.push(this.userinfo[i])
                   }
                   else if(this.userinfo[i].Action=="Owner"){
                         this.owner.push(this.userinfo[i])
                   }
           }
             
       });
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
  peopleList=[{
    mail:'gk'
  },{
  mail:'rajesh'
  },
  {
  mail:'sidhu'
  }];
  list=this.peopleList;
  searchChange(searchValue){
    console.log(searchValue);
    if(searchValue.length>0){
      this.peopleList=this.list.filter(val=>{
  
      return val.mail.includes(searchValue);
    })
  }
  else{
    this.peopleList=this.list;
  }
  
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
                this.reqFeel=response.lead.LeadFeel; 
               this.reqStatus=response.lead.LeadCurrentStatus;
               this.reqBusiness=response.lead.EngagementType;
               this.reqRevenue=response.lead.LeadRevenue;
               this.userinfo=response.lead.UsersInfo;
               this.reqDetail=response.lead.ReqDetails;
               this.clintID=response.lead.ClientID
           console.log(this.viewleaddata);
           this.subscibe=[];
           this.Assigned=[];
           this.owner=[];
           for(var i=0;i< this.userinfo.length;i++){
                   if(this.userinfo[i].Action=="Subscribed"){
                       this.subscibe.push(this.userinfo[i]);
                   }
                   else if(this.userinfo[i].Action=="Assigned"){
                          this.Assigned.push(this.userinfo[i])
                   }
                   else if(this.userinfo[i].Action=="Owner"){
                         this.owner.push(this.userinfo[i])
                   }
           }
         console.log(this.Assigned);
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
 this._leadService.requirementService(value).subscribe((response) => { 
               this.viewleaddata=response.lead;
                this.reqFeel=response.lead.LeadFeel; 
               this.reqStatus=response.lead.LeadCurrentStatus;
               this.reqBusiness=response.lead.EngagementType;
               this.reqRevenue=response.lead.LeadRevenue;
               this.userinfo=response.lead.UsersInfo;
               this.reqDetail=response.lead.ReqDetails;
           console.log(this.viewleaddata);
           this.subscibe=[];
           this.Assigned=[];
           this.owner=[];
           for(var i=0;i< this.userinfo.length;i++){
                   if(this.userinfo[i].Action=="Subscribed"){
                       this.subscibe.push(this.userinfo[i]);
                   }
                   else if(this.userinfo[i].Action=="Assigned"){
                          this.Assigned.push(this.userinfo[i])
                   }
                   else if(this.userinfo[i].Action=="Owner"){
                         this.owner.push(this.userinfo[i])
                   }
           }
               
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

deletetag(leadId,tagId){
    var deletedata={
    "_id":leadId,
    "TagId":tagId
   }
   this._leadService.updateLeadTagCcRev(deletedata).subscribe((response) => { 
                this.viewleaddata=response.lead;
               this.reqFeel=response.lead.LeadFeel; 
               this.reqStatus=response.lead.LeadCurrentStatus;
               this.reqBusiness=response.lead.EngagementType;
               this.reqRevenue=response.lead.LeadRevenue
               this.userinfo=response.lead.UsersInfo;
               this.reqDetail=response.lead.ReqDetails;
           this.subscibe=[];
           this.Assigned=[];
           this.owner=[];
           for(var i=0;i< this.userinfo.length;i++){
                   if(this.userinfo[i].Action=="Subscribed"){
                       this.subscibe.push(this.userinfo[i]);
                   }
                   else if(this.userinfo[i].Action=="Assigned"){
                          this.Assigned.push(this.userinfo[i])
                   }
                   else if(this.userinfo[i].Action=="Owner"){
                         this.owner.push(this.userinfo[i])
                   }
           }
             
       });

}

deleteclient(leadId,clientId){
    var deletedata={
    "_id":leadId,
    "ClientContactId":clientId
   }
   this._leadService.updateLeadTagCcRev(deletedata).subscribe((response) => { 
                 this.viewleaddata=response.lead;
                this.reqFeel=response.lead.LeadFeel; 
               this.reqStatus=response.lead.LeadCurrentStatus;
               this.reqBusiness=response.lead.EngagementType;
               this.reqRevenue=response.lead.LeadRevenue
              this.userinfo=response.lead.UsersInfo;
               this.reqDetail=response.lead.ReqDetails;
           this.subscibe=[];
           this.Assigned=[];
           this.owner=[];
           for(var i=0;i< this.userinfo.length;i++){
                   if(this.userinfo[i].Action=="Subscribed"){
                       this.subscibe.push(this.userinfo[i]);
                   }
                   else if(this.userinfo[i].Action=="Assigned"){
                          this.Assigned.push(this.userinfo[i])
                   }
                   else if(this.userinfo[i].Action=="Owner"){
                         this.owner.push(this.userinfo[i])
                   }
           }
             
       });

}
addTagUpade(tag,id){
     var addTagUpadedata={
    "_id":id,
     "Tags":{
                "TagName": tag,
                "TagCategory": "Budget"
            }
    }
   this._leadService.addTagCcRev(addTagUpadedata).subscribe((response) => { 
               this.viewleaddata=response.lead;
               this.reqFeel=response.lead.LeadFeel; 
               this.reqStatus=response.lead.LeadCurrentStatus;
               this.reqBusiness=response.lead.EngagementType;
               this.reqRevenue=response.lead.LeadRevenue
               this.userinfo=response.lead.UsersInfo;
               this.reqDetail=response.lead.ReqDetails;
           this.subscibe=[];
           this.Assigned=[];
           this.owner=[];
           for(var i=0;i< this.userinfo.length;i++){
                   if(this.userinfo[i].Action=="Subscribed"){
                       this.subscibe.push(this.userinfo[i]);
                   }
                   else if(this.userinfo[i].Action=="Assigned"){
                          this.Assigned.push(this.userinfo[i])
                   }
                   else if(this.userinfo[i].Action=="Owner"){
                         this.owner.push(this.userinfo[i])
                   }
           }
             
       });
}

getUserData(){
     this._leadService.getUserData().subscribe((response) => { 
                    this.userList=response.userList;
                    this.usertestList=this.userList;
                    
       });
}
getSalesrep(){
     this._leadService.getSalesrep().subscribe((response) => { 
                    this.SalesRepList=response.salesRepList;
                    this.SalesReptestList=this.SalesRepList;
                    console.log(this.SalesRepList);
                    
       });
}

peopleSearch(searchValue1){
  if(searchValue1.length>0){
    this.userList=this.usertestList.filter(val=>{    
    return val.UFirstName.includes(searchValue1);
  })
}
else{
   this.userList=this.usertestList;
}
}
searchAssignTO(assignSearch){
    if(assignSearch.length>0){
    this.SalesRepList=this.SalesReptestList.filter(val=>{    
    return val.UFirstName.includes(assignSearch);
  })
}
else{
   this.SalesRepList=this.SalesReptestList;
}
}
invitesearch(name,value,id){
      // console.log(value);
      value.Action="Subscribed";
      var subscribeData={
                "_id" : id,
          "UserInfo":value
      }
      this._leadService.userSubscibed(subscribeData).subscribe((response) => { 
               this.viewleaddata=response.lead;
               this.reqFeel=response.lead.LeadFeel; 
               this.reqStatus=response.lead.LeadCurrentStatus;
               this.reqBusiness=response.lead.EngagementType;
               this.reqRevenue=response.lead.LeadRevenue
              this.userinfo=response.lead.UsersInfo;
               this.reqDetail=response.lead.ReqDetails;
           this.subscibe=[];
           this.Assigned=[];
           this.owner=[];
           for(var i=0;i< this.userinfo.length;i++){
                   if(this.userinfo[i].Action=="Subscribed"){
                       this.subscibe.push(this.userinfo[i]);
                   }
                   else if(this.userinfo[i].Action=="Assigned"){
                          this.Assigned.push(this.userinfo[i])
                   }
                   else if(this.userinfo[i].Action=="Owner"){
                         this.owner.push(this.userinfo[i])
                   }
           }
             
       });
}
Assignto(name,value,id){
    value.Action="Assigned";
      var assigneddata={
                "_id" : id,
          "UserInfo":value
      }
       this._leadService.assignto(assigneddata).subscribe((response) => { 
               this.viewleaddata=response.lead;
               this.reqFeel=response.lead.LeadFeel; 
               this.reqStatus=response.lead.LeadCurrentStatus;
               this.reqBusiness=response.lead.EngagementType;
               this.reqRevenue=response.lead.LeadRevenue
               this.userinfo=response.lead.UsersInfo;
               this.reqDetail=response.lead.ReqDetails;
           this.subscibe=[];
           this.Assigned=[];
           this.owner=[];
           for(var i=0;i< this.userinfo.length;i++){
                   if(this.userinfo[i].Action=="Subscribed"){
                       this.subscibe.push(this.userinfo[i]);
                   }
                   else if(this.userinfo[i].Action=="Assigned"){
                          this.Assigned.push(this.userinfo[i])
                   }
                   else if(this.userinfo[i].Action=="Owner"){
                         this.owner.push(this.userinfo[i])
                   }
           }
             
       });
  }
  ngOnInit() {
    this.getlead();
    this.getSalesrep()
    this.shornameinlead=localStorage.getItem('shortname');
    this.role=localStorage.getItem('Role');
    console.log(this.role);
    this.token=localStorage.getItem('token');
    this.getUserData();
    this.dumyValue="A";
  //  console.log(this.token);
  }

  
}

