import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { leadService} from './workbench.service';
import { Router } from '@angular/router';
import { ClientService} from './lead.service';
import { Http, Response } from '@angular/http';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'toastr-ng2';

@Component({
  selector: 'app-workbench',
  templateUrl: './workbench.component.html',
  styleUrls: ['./workbench.component.scss'],
  providers:[leadService,ClientService]
})
export class WorkbenchComponent implements OnInit {
  
    dumyValue="";
    resempdata=[];
    resempdataLead=[];
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
    userinfo=[];
    subscibe=[];
    Assigned=[];
    AssignedShortName="";
    owner=[];
    updateTagResponse=[];
    userList=[];
    usertestList=[];
    SalesRepList=[];
    SalesReptestList=[];
    reqDetail=[];
    clientid="";
    getContactListUpdate="";
    ownervalue=[];
    files1=[];
    files2 = [];
    attfileTest3="Attach file";
    filesToUpload3=[];
    formData3: any = new FormData();
    FileList3=[];
    files3=[];
    getUpload=[];
    download=[];
    searchValue:string = '';
    reqStatus='';
    conversartionResponse=[];
    viewerrormessage=false;
    OwnerShortName="";
    SendMessage="";
  
    changeStatus(val,id){
      var leadFeelchange={
          "_id":id,
          "LeadCurrentStatus":val
      }
       this._leadService.assignto(leadFeelchange).subscribe((response) => {
                 this.toastrService.success(response.message);
                 this.viewleaddata=response.lead;
                 this.reqFeel=response.lead.LeadFeel;
                 this.reqStatus=response.lead.LeadCurrentStatus;
                 this.reqBusinessdata=response.lead.EngagementType;
                 this.reqRevenue=response.lead.LeadRevenue;
                 this.userinfo=response.lead.UsersInfo;
                 this.reqDetail=response.lead.ReqDetails;
                 this.clientid=response.lead.ClientID;
             this.subscibe=[];
             this.Assigned=[];
             this.AssignedShortName="";
             this.owner=[];
             this.OwnerShortName="";
             for(var i=0;i< this.userinfo.length;i++){
                     if(this.userinfo[i].Action=="Subscribed"){
                         this.subscibe.push(this.userinfo[i]);
                     }
                     else if(this.userinfo[i].Action=="Assigned"){
                            this.Assigned.push(this.userinfo[i])
                            this.AssignedShortName=this.userinfo[i].ShortName;
                     }
                     else if(this.userinfo[i].Action=="Owner"){
                           this.owner.push(this.userinfo[i]);
                           this.OwnerShortName=this.userinfo[i].ShortName;
                     }
             }

             this.getlead()
              
         },
         e=>{
          this.toastrService.error(e.message);
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
                this.toastrService.success(response.message);
                 this.viewleaddata=response.lead;
                 this.reqFeel=response.lead.LeadFeel; 
                 this.reqStatus=response.lead.LeadCurrentStatus;
                 this.reqBusinessdata=response.lead.EngagementType;
                 this.reqRevenue=response.lead.LeadRevenue;
                 this.userinfo=response.lead.UsersInfo;
                 this.reqDetail=response.lead.ReqDetails;
                 this.clientid=response.lead.ClientID;
             this.subscibe=[];
             this.Assigned=[];
             this.AssignedShortName="";
             this.owner=[];
             this.OwnerShortName="";
             for(var i=0;i< this.userinfo.length;i++){
                     if(this.userinfo[i].Action=="Subscribed"){
                         this.subscibe.push(this.userinfo[i]);
                     }
                     else if(this.userinfo[i].Action=="Assigned"){
                            this.Assigned.push(this.userinfo[i]);
                            this.AssignedShortName=this.userinfo[i].ShortName;
                     }
                     else if(this.userinfo[i].Action=="Owner"){
                           this.owner.push(this.userinfo[i]);
                           this.OwnerShortName=this.userinfo[i].ShortName;
                     }
             }  
         },
         e=>{
          this.toastrService.error(e.message);
         });
    }

    reqBusinessdata='Staffing';
    changeBusinessdata(val){
      this.reqBusinessdata=val;
    }
    reqFeel='';
    changeFeel(val,id){
      var leadFeelchange={
         "_id":id,
         "LeadFeel":val
     }
      this._leadService.assignto(leadFeelchange).subscribe((response) => {
                this.toastrService.success(response.message);   
                this.viewleaddata=response.lead;
                this.reqFeel=response.lead.LeadFeel;
                this.reqStatus=response.lead.LeadCurrentStatus;
                this.reqBusinessdata=response.lead.EngagementType;
                this.reqRevenue=response.lead.LeadRevenue
                this.userinfo=response.lead.UsersInfo;
                this.reqDetail=response.lead.ReqDetails;
                this.clientid=response.lead.ClientID;
            this.subscibe=[];
            this.Assigned=[];
            this.owner=[];
            this.OwnerShortName="";
            this.AssignedShortName="";
            for(var i=0;i< this.userinfo.length;i++){
                    if(this.userinfo[i].Action=="Subscribed"){
                        this.subscibe.push(this.userinfo[i]);
                    }
                    else if(this.userinfo[i].Action=="Assigned"){
                           this.Assigned.push(this.userinfo[i]);
                           this.AssignedShortName=this.userinfo[i].ShortName;
                    }
                    else if(this.userinfo[i].Action=="Owner"){
                          this.owner.push(this.userinfo[i]);
                          this.OwnerShortName=this.userinfo[i].ShortName;
                    }
            }
            this.getlead();
             
        },e=>{
          this.toastrService.error(e.message);
         });
   }
    reqCOnversation='Conversation Type';
    changeConversation(val){
      this.reqCOnversation=val;
    }
  
  
    togglefunction(){
      this.show=!this.show
    }
   
    constructor(private _leadService:leadService,private router:Router,private _clientservice:ClientService,private _http:Http,private toastrService: ToastrService) { }
     getlead(){
      this._leadService.leadMethod().subscribe((response) => { 
                 this.resempdata=response;
                
             console.log(this.resempdata); 
             this.resempdataLead=response.lead;
               
         });
  }
  logout(){
           this.router.navigateByUrl('/login');
          //  localStorage.removeItem('Role');
          localStorage.removeItem('token');
  }
  viewLead(leadId){

    console.log(leadId);
        this._leadService.leadViewMethod(leadId).subscribe((response) => { 
                 this.reqCOnversation="Conversation Type";
                 this.viewleaddata=response.lead;
                  this.reqFeel=response.lead.LeadFeel; 
                 this.reqStatus=response.lead.LeadCurrentStatus;
                 this.reqBusinessdata=response.lead.EngagementType;
                 this.reqRevenue=response.lead.LeadRevenue;
                 this.userinfo=response.lead.UsersInfo;
                 this.reqDetail=response.lead.ReqDetails;
                 this.clientid=response.lead.ClientID
             
             this.subscibe=[];
             this.Assigned=[];
             this.AssignedShortName="";
             this.owner=[];
             this.OwnerShortName="";
             for(var i=0;i< this.userinfo.length;i++){
                     if(this.userinfo[i].Action=="Subscribed"){
                         this.subscibe.push(this.userinfo[i]);
                     }
                     else if(this.userinfo[i].Action=="Assigned"){
                            this.Assigned.push(this.userinfo[i]);
                            this.AssignedShortName=this.userinfo[i].ShortName;
                     }
                     else if(this.userinfo[i].Action=="Owner"){
                           this.owner.push(this.userinfo[i]);
                           this.OwnerShortName=this.userinfo[i].ShortName;
                     }
             }
           console.log(this.Assigned);
            this.getClientContactsdata();
            this.getconversation(leadId);
         });
          
  }
  requirement(id,f:NgForm){
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
                 this.toastrService.success(response.message);
                 this.viewleaddata=response.lead;
                 this.reqFeel=response.lead.LeadFeel; 
                 this.reqStatus=response.lead.LeadCurrentStatus;
                 this.reqBusinessdata=response.lead.EngagementType;
                 this.reqRevenue=response.lead.LeadRevenue;
                 this.userinfo=response.lead.UsersInfo;
                 this.reqDetail=response.lead.ReqDetails;
                 this.clientid=response.lead.ClientID;
             console.log(this.viewleaddata);
             this.subscibe=[];
             this.Assigned=[];
             this.owner=[];
             this.AssignedShortName="";
             this.OwnerShortName="";
             for(var i=0;i< this.userinfo.length;i++){
                     if(this.userinfo[i].Action=="Subscribed"){
                         this.subscibe.push(this.userinfo[i]);
                     }
                     else if(this.userinfo[i].Action=="Assigned"){
                            this.Assigned.push(this.userinfo[i]);
                            this.AssignedShortName=this.userinfo[i].ShortName;
                     }
                     else if(this.userinfo[i].Action=="Owner"){
                           this.owner.push(this.userinfo[i]);
                           this.OwnerShortName=this.userinfo[i].ShortName;
                     }
             }
             f.reset();    
         },
         e=>{
          this.toastrService.error(e.message);
         });
  }
  
  mouseEnter(){
     this.overlayToggle=true;
  }
  
  mouseLeave(){
     this.overlayToggle=false;
  }
  
  schedule(Scheduledate,ScheduleTime,ScheduleLocation,id){
    var data=new Date(Scheduledate);
    
    var day = data.getDate();
    var monthIndex = data.getMonth();
    var year = data.getFullYear();
    monthIndex=monthIndex+1;
    var d = new Date(ScheduleTime +year+'-'+monthIndex+'-'+day)
    var currentOffset = d.getTimezoneOffset();
    debugger;
    
    var ISTOffset = 330;   // IST offset UTC +5:30 
    
    var ISTTime = new Date(d.getTime() + (ISTOffset + currentOffset)*60000);
    
    // ISTTime now represents the time in IST coordinates
    
  
  console.log(d);


      var scheduleData= {
      "_id": id,
      "Meeting": {
         "MeetingVenue": ScheduleLocation,
          "ScheduleDate": d.toString(),
          "ScheduleTime":ScheduleTime,
          }
     }
     console.log(Scheduledate);
    this._leadService.ScheduleMeetingService(scheduleData).subscribe((response) => { 
                 console.log(response)
                 this.getconversation(id)
         });
  }

  dateAdd(date, interval, units) {
  var ret = new Date(date); //don't change original date
  var checkRollover = function() { if(ret.getDate() != date.getDate()) ret.setDate(0);};
  switch(interval.toLowerCase()) {
    case 'year'   :  ret.setFullYear(ret.getFullYear() + units); checkRollover();  break;
    case 'quarter':  ret.setMonth(ret.getMonth() + 3*units); checkRollover();  break;
    case 'month'  :  ret.setMonth(ret.getMonth() + units); checkRollover();  break;
    case 'week'   :  ret.setDate(ret.getDate() + 7*units);  break;
    case 'day'    :  ret.setDate(ret.getDate() + units);  break;
    case 'hour'   :  ret.setTime(ret.getTime() + units*3600000);  break;
    case 'minute' :  ret.setTime(ret.getTime() + units*60000);  break;
    case 'second' :  ret.setTime(ret.getTime() + units*1000);  break;
    default       :  ret = undefined;  break;
  }
  return ret;
}
  
  deletetag(leadId,tagId){
      var deletedata={
      "_id":leadId,
      "TagId":tagId
     }
     this._leadService.updateLeadTagCcRev(deletedata).subscribe((response) => {
                 this.toastrService.success(response.message);   
                 this.viewleaddata=response.lead;
                 this.reqFeel=response.lead.LeadFeel; 
                 this.reqStatus=response.lead.LeadCurrentStatus;
                 this.reqBusinessdata=response.lead.EngagementType;
                 this.reqRevenue=response.lead.LeadRevenue
                 this.userinfo=response.lead.UsersInfo;
                 this.reqDetail=response.lead.ReqDetails;
                 this.clientid=response.lead.ClientID;
             this.subscibe=[];
             this.Assigned=[];
             this.AssignedShortName="";
             this.owner=[];
             this.OwnerShortName="";
             for(var i=0;i< this.userinfo.length;i++){
                     if(this.userinfo[i].Action=="Subscribed"){
                         this.subscibe.push(this.userinfo[i]);
                     }
                     else if(this.userinfo[i].Action=="Assigned"){
                            this.Assigned.push(this.userinfo[i]);
                            this.AssignedShortName=this.userinfo[i].ShortName;
                     }
                     else if(this.userinfo[i].Action=="Owner"){
                           this.owner.push(this.userinfo[i]);
                           this.OwnerShortName=this.userinfo[i].ShortName;
                     }
             }
         },
         e=>{
          this.toastrService.error(e.message);
         });
  
  }
  
  deleteclient(leadId,clientId){
      var deletedata={
      "_id":leadId,
      "ClientContactId":clientId
     }
     this._leadService.updateLeadTagCcRev(deletedata).subscribe((response) => { 
                  this.toastrService.success(response.message);
                  this.viewleaddata=response.lead;
                  this.reqFeel=response.lead.LeadFeel; 
                  this.reqStatus=response.lead.LeadCurrentStatus;
                  this.reqBusinessdata=response.lead.EngagementType;
                  this.reqRevenue=response.lead.LeadRevenue
                  this.userinfo=response.lead.UsersInfo;
                  this.reqDetail=response.lead.ReqDetails;
                  this.clientid=response.lead.ClientID;
             this.subscibe=[];
             this.Assigned=[];
             this.AssignedShortName="";
             this.owner=[];
             this.OwnerShortName="";
             for(var i=0;i< this.userinfo.length;i++){
                     if(this.userinfo[i].Action=="Subscribed"){
                         this.subscibe.push(this.userinfo[i]);
                     }
                     else if(this.userinfo[i].Action=="Assigned"){
                            this.Assigned.push(this.userinfo[i]);
                            this.AssignedShortName=this.userinfo[i].ShortName;
                     }
                     else if(this.userinfo[i].Action=="Owner"){
                           this.owner.push(this.userinfo[i]);
                           this.OwnerShortName=this.userinfo[i].ShortName;
                     }
             }
            
         },
         e=>{
          this.toastrService.error(e.message);
         });
  
  }
  addTagUpade(tag,id){
    this.addtagtitle="";
       var addTagUpadedata={
      "_id":id,
       "Tags":{
                  "TagName": tag,
                  "TagCategory": "Budget"
              }
      }
     this._leadService.addTagCcRev(addTagUpadedata).subscribe((response) => {
                 this.toastrService.success(response.message);
                 this.viewleaddata=response.lead;
                 this.reqFeel=response.lead.LeadFeel; 
                 this.reqStatus=response.lead.LeadCurrentStatus;
                 this.reqBusinessdata=response.lead.EngagementType;
                 this.reqRevenue=response.lead.LeadRevenue
                 this.userinfo=response.lead.UsersInfo;
                 this.reqDetail=response.lead.ReqDetails;
                 this.clientid=response.lead.ClientID;
             this.subscibe=[];
             this.Assigned=[];
             this.AssignedShortName="";
             this.owner=[];
             this.OwnerShortName="";
             for(var i=0;i< this.userinfo.length;i++){
                     if(this.userinfo[i].Action=="Subscribed"){
                         this.subscibe.push(this.userinfo[i]);
                     }
                     else if(this.userinfo[i].Action=="Assigned"){
                            this.Assigned.push(this.userinfo[i]);
                            this.AssignedShortName=this.userinfo[i].ShortName;
                     }
                     else if(this.userinfo[i].Action=="Owner"){
                           this.owner.push(this.userinfo[i]);
                           this.OwnerShortName=this.userinfo[i].ShortName;
                     }
             }
         },
         e=>{
          this.toastrService.error(e.message);
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
  
  peopleSearchValue(searchValue1){
    if(searchValue1.length>0){
      this.userList=this.usertestList.filter(val=>{    
      return val.UFirstName.toLowerCase().includes(searchValue1);
    })
  }
  else{
     this.userList=this.usertestList;
  }
  }
  searchAssignTO(assignSearch){
      if(assignSearch.length>0){
      this.SalesRepList=this.SalesReptestList.filter(val=>{    
      return val.UFirstName.toLowerCase().includes(assignSearch);
    })
  }
  else{
     this.SalesRepList=this.SalesReptestList;
  }
  }
  invitesearchData(name,value,id){
        // console.log(value);
        value.Action="Subscribed";
        var subscribeData={
                  "_id" : id,
            "UserInfo":value
        }
        this._leadService.userSubscibed(subscribeData).subscribe((response) => { 
                 this.toastrService.success(response.message);
                 this.viewleaddata=response.lead;
                 this.reqFeel=response.lead.LeadFeel; 
                 this.reqStatus=response.lead.LeadCurrentStatus;
                 this.reqBusinessdata=response.lead.EngagementType;
                 this.reqRevenue=response.lead.LeadRevenue
                 this.userinfo=response.lead.UsersInfo;
                 this.reqDetail=response.lead.ReqDetails;
                 this.clientid=response.lead.ClientID;
             this.subscibe=[];
             this.Assigned=[];
             this.AssignedShortName="";
             this.owner=[];
             this.OwnerShortName="";
             for(var i=0;i< this.userinfo.length;i++){
                     if(this.userinfo[i].Action=="Subscribed"){
                         this.subscibe.push(this.userinfo[i]);
                     }
                     else if(this.userinfo[i].Action=="Assigned"){
                            this.Assigned.push(this.userinfo[i]);
                            this.AssignedShortName=this.userinfo[i].ShortName;
                            
                     }
                     else if(this.userinfo[i].Action=="Owner"){
                           this.owner.push(this.userinfo[i]);
                           this.OwnerShortName=this.userinfo[i].ShortName;
                     }
             }
            
         },
         e=>{
          this.toastrService.error(e.message);
         });
  }
  Assignto(name,value,id){
      value.Action="Assigned";
        var assigneddata={
                  "_id" : id,
            "UserInfo":value
        }
         this._leadService.assignto(assigneddata).subscribe((response) => {
                 this.toastrService.success(response.message);    
                 this.viewleaddata=response.lead;
                 this.reqFeel=response.lead.LeadFeel; 
                 this.reqStatus=response.lead.LeadCurrentStatus;
                 this.reqBusinessdata=response.lead.EngagementType;
                 this.reqRevenue=response.lead.LeadRevenue
                 this.userinfo=response.lead.UsersInfo;
                 this.reqDetail=response.lead.ReqDetails;
                 this.clientid=response.lead.ClientID;
             this.subscibe=[];
             this.Assigned=[];
             this.AssignedShortName="";
             this.owner=[];
             this.OwnerShortName="";
             for(var i=0;i< this.userinfo.length;i++){
                     if(this.userinfo[i].Action=="Subscribed"){
                         this.subscibe.push(this.userinfo[i]);
                     }
                     else if(this.userinfo[i].Action=="Assigned"){
                            this.Assigned.push(this.userinfo[i]);
                            this.AssignedShortName=this.userinfo[i].ShortName;
                     }
                     else if(this.userinfo[i].Action=="Owner"){
                           this.owner.push(this.userinfo[i]);
                           this.OwnerShortName=this.userinfo[i].ShortName;
                     }
             }
   
         },
         e=>{
          this.toastrService.error(e.message);
         } );
    }

    getconversation(lead){
      this._leadService.getconversation(lead).subscribe((response) => {
      
            this.conversartionResponse=response.Convo;
         
            console.log(this.conversartionResponse.length);
           
         });
     }

     sendData(data,id,conversationType){
       if(conversationType=="Conversation Type"){
        conversationType="";
       }
      console.log(conversationType);
      this.SendMessage="";
      console.log(conversationType);
       var newdata={
         "_id":id,
              "Conversation": {
             "content": data,
              "ConversationType": conversationType
              }
       }
       this._leadService.sendData(newdata).subscribe((response) => {
        this. getUpload=response;  
        this.getconversation(id);
         
      });
  }
  
    getClientContactsdata(){
      console.log(this.clientid);
      var data={
          "_id" :this.clientid
      }
     
     this._leadService.getClientContactsdata(data).subscribe((response) => { 
        this.updatecontactlistarray=response.ClientContact;
        this.updatecontactdisplay=this.updatecontactlistarray         
        });
    }

  //   FileDownload(id,data){
      
  //     var download={
  //       _id:id,
  //       file:
  //         data 
  //     }
      
  //  this._leadService.FileDownload(download).subscribe((response) => {
  //    this.download=response;
    
  //    });
  // }

  FileDownload(event,id,data){
          event.stopPropagation();

         let v='http://172.16.0.4:8082/lead/downloadDoc?_id='+id+'&fileId='+data.fileId
    
         if (typeof window !== 'undefined') {
               window.open(v);
         }
     }

  fileChange1(fileInput: any) {
    this.filesToUpload3 = <Array<File>>fileInput.target.files;
    this.FileList3= <Array<File>>this.filesToUpload3;
    for(let i =0; i < this.FileList3.length; i++){
        this.files3.push(this.FileList3[i]);
    }
     this.files2=[];
    for(let i =0; i < this.files3.length; i++){
         this.files2.push(this.files3[i]['name']);
    }
    this.attfileTest3=this.files3.length+" files"
 }

 deleteFile1(filename){
  for(var i = 0; i < this.files3.length; i++) {
     if (this.files3[i]['name'] == filename) {
         this.files3.splice(i, 1);
      }
 }
 this.files2=[];
 for(let i =0; i < this.files3.length; i++){
        this.files2.push(this.files3[i]['name']);
      }
      this.attfileTest3=this.files3.length+" files"
 }

    createClientContactInupdate(id,form:NgForm)
    {
      console.log(this.clientid);
      let addcontact:any=
      {
        "ClientID":this.clientid,
        "LeadID":id,
        "ClientContact":[
            {      
                "FirstName":this.addcontactdata.FirstName,
                "LastName":this.addcontactdata.LastName,
                "Designation":this.addcontactdata.Designation,
                "Email":this.addcontactdata.Email,
                "Phone":this.addcontactdata.Phone,
                "OfficeAddress":[
                this.officeaddress
        ]
       }]
      }
  
      this._clientservice.addContact(addcontact).subscribe((response) => {
        this.addcontactarray=response;  
        this.getClientContactsdata();
        document.getElementById('addClientContactClose').click();
         addcontact={};
         form.reset();
           });
    }

    updateContactSearch(searchvalue)
    {
      if(this.searchValue.length>0){
        this.updatecontactdisplay=this.updatecontactlistarray.filter(val=>{
        return val.FirstName.toLowerCase().includes(this.searchValue);
        })
      }
    else{
      this.updatecontactdisplay=this.updatecontactlistarray;
    }
}
    

    contactsearchInupdate(name,value,id){
        var assigneddata={
                  "_id" : id,
            "ClientContact":value
        }
         this._leadService.updateLeadTagCcRev(assigneddata).subscribe((response) => { 
                 this.toastrService.success(response.message);
                 this.viewleaddata=response.lead;
                 this.reqFeel=response.lead.LeadFeel; 
                 this.reqStatus=response.lead.LeadCurrentStatus;
                 this.reqBusinessdata=response.lead.EngagementType;
                 this.reqRevenue=response.lead.LeadRevenue
                 this.userinfo=response.lead.UsersInfo;
                 this.reqDetail=response.lead.ReqDetails;
                 this.clientid=response.lead.ClientID;
             this.subscibe=[];
             this.Assigned=[];
             this.AssignedShortName="";
             this.owner=[];
             this.OwnerShortName="";
             for(var i=0;i< this.userinfo.length;i++){
                     if(this.userinfo[i].Action=="Subscribed"){
                         this.subscibe.push(this.userinfo[i]);
                     }
                     else if(this.userinfo[i].Action=="Assigned"){
                            this.Assigned.push(this.userinfo[i]);
                            this.AssignedShortName=this.userinfo[i].ShortName;
                     }
                     else if(this.userinfo[i].Action=="Owner"){
                           this.owner.push(this.userinfo[i]);
                           this.OwnerShortName=this.userinfo[i].ShortName;
                     }
             }
               
         },
         e=>{
          this.toastrService.error(e.message);
         });
    }

  //Add Lead
  clientname="";
  industryType="";
  businessType="";
  firstname="";
  lastname="";
  designation="";
  email="";
  phone="";
  address="";
  country="";
  state="";
  street="";
  area="";
  zipcode:"";
  checked=false;
  managerarray=[];
  userarray=[];
  clientlistarray=[];
  clientItems: any[] = [];
  addclientarray=[];
  addcontactarray=[];
  createleadarray=[];
  contactlistarray=[];
  updatecontactlistarray=[];
  contactItems: any[] = []; 
  displayList:any[];
  contactdisplay:any[];
  updatecontactdisplay:any[];
  ownerdisplay:any[];
  searchText:string;
  getClientList="";
  getContactList="";
  peopleName="";
  managerlist="";
  persondisplay:any[];
  namearray=[];
  contactclientid="";
  tagtitle="";
  tagarray=[];
  verificationstatus="N";
  ClientIdValue="";
  ClientNameValue="";
  SalerepArray=[];
  salesdisplay:any[];
  saleslist="";
  files = [];
  attfileTest="Attach file";
  filesToUpload=[];
  formData: any = new FormData();
  FileList=[];
  engagementtype="";
  conversationtype="";
  conversation="";
  temparray=[];
  tagcontactarray=[];
  contactlistvalues=[];
  newclientarray=[];
  addtagtitle="";
  nextLibAvailable=true;
  titlename="";
  addcontactdata={
    "FirstName":'',
    "LastName":'',
    "Designation":'',
    "Email":'',
    "Phone":''
  }  

  reqBusiness='Business Stream';
  changeBusiness(val,business){
 
    this.reqBusiness=val;
   this.engagementtype=business.option;
  }

  reqConversation='Conversation Type';
  changeconversation(value,business)
  {
    this.reqConversation=value;
    this.conversationtype=business.option; 
  }

  addclientdata:any={
    "ClientName":this.clientname,
    "IndustryType":this.industryType,
    "BusinessType":this.businessType
  };
 
  officeaddress:any={
    "Address":this.address,
    "City":"",
    "Country":this.country,
    "State":this.state,
    "Street":this.street,
    "Area":this.area,
    "ZipCode":this.zipcode,
  }
  
  contactdetails:any={
    "FirstName":this.firstname,
    "LastName":this.lastname,
    "Designation":this.designation,
    "Email":this.email,
    "Phone":this.phone,
  }

   Business = {
    "BusinessStreams":[
      {
        "option": "SOW",
        "_id": "000"
      },
      {
        "option": "Staffing",
        "_id": "001"
      },
      {
        "option": "Little Brahma",
        "_id": "002"
      }
    ],
    "ConversationType" : [
     {
       "option": "Telephonic",
       "_id": "100",
     },
    {
      "option": "Face to Face",
      "_id": "102"
    },
    {
      "option": "Email",
      "_id": "103"
    }
    ]
}

  createleadcontact:any={
    "ContactName":"",
    "PersonRole":"",
    "ContactPhone":"",
    "ContactEmail":"",
  }

  leadstatushistory:any={
    "Status":"Active"
  }  

    changecolor()
    {
	       this.checked=(!this.checked);
           if(this.checked===true)
           {
           this.verificationstatus='Y';
            }
          else{
           this.verificationstatus='N';   
           }  
    }

    getManagers()
    {
      this._clientservice.getManagers().subscribe((response) => { 
        this.managerarray=response.managerList;  
        this.ownerdisplay=this.managerarray;
           }); 
    }

    getUsers()
    {
      this._clientservice.getUsers().subscribe((response) => { 
        this.userarray=response.userList; 
        this.persondisplay=this.userarray ;
    }); 
    }
    
    createClient(f:NgForm){

      this._clientservice.addClient(this.addclientdata).subscribe((response) => {
          this.toastrService.success(response.message);    
          this.addclientarray=response;
          this.getAllClients();
          document.getElementById('createClientCloseEvent').click();
          this.addclientdata={};
          f.reset();
          },
          e=>{
            this.toastrService.error(e.message);
           });
    }

    getAllClients()
    {
      this._clientservice.getClients().subscribe((response) => { 
      this.clientlistarray=response.client;
      this.displayList=this.clientlistarray;
      
      });   
    }

    getAllClientContact()
    {
      this._clientservice.getClientContacts(this.ClientIdValue).subscribe((response) => { 
        this.contactlistarray=response.ClientContact;
        this.contactdisplay=this.contactlistarray         
        });   
    }

    createClientContact(f:NgForm)
    {

      
      console.log(this.ClientIdValue);
      console.log("this.officeaddress",this.officeaddress);
      let addcontact:any=
      {
        "ClientID":this.ClientIdValue,
        "ClientContact":[
            {      
                "FirstName":this.addcontactdata.FirstName,
                "LastName":this.addcontactdata.LastName,
                "Designation":this.addcontactdata.Designation,
                "Email":this.addcontactdata.Email,
                "Phone":this.addcontactdata.Phone,
                "OfficeAddress":[
                this.officeaddress
        ]
       }]
      }   
      this._clientservice.addContact(addcontact).subscribe((response) => { 
            this.toastrService.success(response.message);  
            this.addcontactarray=response;  
            this.getAllClientContact();  
            document.getElementById('addClientContactClose').click();
            addcontact={};
            f.reset();
           },
           e=>{
            this.toastrService.error(e.message);
           }); 
    }
    
    addLeads(f:NgForm)
    {
      // if(this.ownervalue!=null){
        this.temparray.push(this.ownervalue);
      //   }
        console.log(this.temparray);
    let leadconversation:any={
        "ConversationType":this.conversationtype,
        "content":this.conversation,
        } 

        let addlead:any={
          "Verified":this.verificationstatus,
          "Title":this.titlename,
          "ClientID": this.ClientIdValue,
          "ClientName":this.ClientNameValue,
          "ClientContact":
          this.contactlistvalues,
          "UsersInfo":
           this.temparray,
          "EngagementType":this.engagementtype, 
          "Tags":
          
            this.tagarray
          ,
          "Events":
          {
          "Conversation":[
          leadconversation
          ],
          "LeadStatusHistory":[
          this.leadstatushistory  
          ]
          },
          "LeadCurrentStatus":"Active"
        }
        console.log("this.files1.length",this.files1.length);
       // this.files1.push(addlead);
       for(let i =0; i < this.files1.length; i++){
       this.formData.append('file',this.files1[i]);
       }
      //  console.log(addlead);  
      //  console.log(addlead);
       this.formData.append("file1",JSON.stringify(addlead));
          this._clientservice.addLead(this.formData).subscribe((response) => {
          this.toastrService.success(response.message);       
          this.createleadarray=response; 
          this.getlead();
          document.getElementById('addLeadClose').click();
          this.checked=false;
          this.titlename="";
          this.ClientIdValue="";
          this.ClientNameValue="";
          this.contactlistvalues=[];
          this.temparray=[];
          this.engagementtype="";
          this.tagarray=[];
          leadconversation=[];
          this.leadstatushistory=[];
          this.tagcontactarray=[];
          this.persondisplay=[];
          this.ownerdisplay=[];
          this.salesdisplay=[];
          this.contactdisplay=[];
          this.namearray=[];
          this.displayList=[];
          this.managerlist="Request Owner"
          this.saleslist="Assigned To"
          this.attfileTest="Attach file";
          this.reqBusiness='Business Stream';
          this.reqConversation='Conversation Type';
          this.getClientList="Add";
          this.nextLibAvailable=true;
          this.formData={};
          f.reset();
        },
        e=>{
          this.toastrService.error(e.message);
         });   
    }

    getSalesRepList()
    {
      this._clientservice.getSalesRepList().subscribe((response) => { 
          this.SalerepArray=response.salesRepList;  
         this.salesdisplay=this.SalerepArray;
           }); 
    }
    
    clearSearch() {
      this.searchValue= " ";
    }
  
   searchChange(searchValue){
    console.log(searchValue);
    searchValue=searchValue.toLowerCase();
    if(searchValue.length>0){
      this.displayList=this.clientlistarray.filter(val=>{
           
      return val.ClientName.toLowerCase().includes(searchValue);
    })
  }
  else{
    this.displayList=this.clientlistarray;
  }

} 

clientContactSearch(searchValue){
  if(searchValue.length>0){
    this.contactdisplay=this.contactlistarray.filter(val=>{
    return val.FirstName.toLowerCase().includes(searchValue);
  })
}
else{
  this.contactdisplay=this.contactlistarray;
}
} 

peopleSearch(searchValue1){
  if(searchValue1.length>0){
    this.persondisplay=this.userarray.filter(val=>{     
    return val.UFirstName.toLowerCase().includes(searchValue1);
  })
}
else{
  this.persondisplay=this.userarray;
}
} 

ownersearch(searchValue2){
  if(searchValue2.length>0){
    this.ownerdisplay=this.managerarray.filter(val1=>{
    return val1.UFirstName.toLowerCase().includes(searchValue2);
  })
}
else{
  this.ownerdisplay=this.managerarray;
}
} 

salesrepsearch(searchValue3)
{
  if(searchValue3.length>0){
    this.salesdisplay=this.SalerepArray.filter(val1=>{
    return val1.UFirstName.toLowerCase().includes(searchValue3);
  })
}
  else{
    this.salesdisplay=this.SalerepArray;
  } 
}

  putValue(serachData,value){
    this.tagcontactarray=[];
    this.nextLibAvailable=false;
    this.ClientIdValue=value.ClientID;
    this.ClientNameValue=value.ClientName;
    this.getClientList=serachData;
    this.getAllClientContact();
  }

  contactsearch(serachData,value){
    this.tagcontactarray.push(value);
    let contactdetailslist:any={
       "ContactId":value._id,
      "FirstName":value.FirstName,
      "LastName":value.LastName,
      "Designation":value.Designation,
      "Email":value.Email,
      "Phone":value.Phone,
    }
    this.contactlistvalues.push(contactdetailslist);
    console.log("this.contactlistvalues",this.contactlistvalues);
  }

  invitesearch(serachData1,value1){
    this.peopleName=serachData1;
    // var index = lead.Events.Meeting.findIndex(x => x._id.toString() === req.body.Meeting._id);
  console.log("value1",value1);
    let peoplelist:any =
    {
      "Userid":value1.Userid,
      "UFirstName":value1.UFirstName,
      "ULastName":value1.ULastName,
      "UEmail":value1.UEmail,
      "Role":value1.Role,
      "Action" :"Subscribed"
    }
 
    var index = this.temparray.findIndex(x => x.Userid === peoplelist.Userid);
    console.log("this.ownervalue",this.ownervalue);
     if(this.ownervalue!=null){
         var data=this.ownervalue;
         console.log("data",data);
         var indexdata =(peoplelist.Userid === data['Userid']);
        // console.log(indexdata);
     }
    if(index>-1 || indexdata){
      this.temparray=this.temparray;
      this.namearray=this.namearray;
      this.toastrService.error('You have selected Assigned/Owner');
  } else {
    this.temparray.push(peoplelist);
    console.log("this.temparray",this.temparray);
    this.namearray.push(value1);
    console.log("this.namearray",this.namearray);
  }
  
  }

  managersearch(serachData2,value2){
   
    let managerlist:any =
    {
      "Userid":value2.Userid,
      "UFirstName":value2.UFirstName,
      "ULastName":value2.ULastName,
      "UEmail":value2.UEmail,
      "Role":value2.Role,
      "Action" :"Owner"
    }
    var index1 = this.temparray.findIndex(x => x.Userid === managerlist.Userid);
    if(index1>-1){
        this.toastrService.error('You have selected Subscribed user');
   }
   else{
       this.ownervalue=managerlist;
       console.log("request ownervalue",this.ownervalue);
      this.managerlist=serachData2;
      console.log("this.managerlist",this.managerlist);
   }
  }

  salessearch(serachData3,value3){
   
    let saleslist:any =
    {
      "Userid":value3.Userid,
      "UFirstName":value3.UFirstName,
      "ULastName":value3.ULastName,
      "UEmail":value3.UEmail,
      "Role":value3.Role,
      "Action" :"Assigned"
    }
    var index1 = this.temparray.findIndex(x => x.Userid === saleslist.Userid);
    if(index1>-1){
        this.toastrService.error('You have selected Subscribed user');
    }
    else{
       this.ownervalue=saleslist;
       console.log("assigned ownervalue",this.ownervalue);
       this.saleslist=serachData3;
       console.log("this.saleslist",this.saleslist);
    }
  }

  addTag(tagvalue)
  {
    this.tagtitle="";
    var testdata={
      "TagName":tagvalue,
      "TagCategory":"Budget"
    }
    this.tagarray.push(testdata);
    console.log(this.tagarray);
  }
  
  //Attach files
  upload(id) {
    for(let i =0; i < this.files3.length; i++){
      this.formData3.append("file",this.files3[i]);
    }
    var data={
      _id:id
    }
    this.formData3.append("_id",id);
    
    this._leadService.uploadFile(this.formData3).subscribe((response) => {
    this.toastrService.success(response.message);  
    this. getUpload=response;
    this.getconversation(id);
    this.attfileTest3="Attach file";
    this.files3=[];
    this.formData3 = new FormData();
    this.files2=[];
  },
  e=>{
    this.toastrService.error(e.message);
   });
}

   fileChange(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.FileList= <Array<File>>this.filesToUpload;
    // this.files1= Array.from(this.FileList);
    for(let i =0; i < this.FileList.length; i++){
        this.files1.push(this.FileList[i]);
    }
     this.files=[];
    console.log(this.files1);
    for(let i =0; i < this.files1.length; i++){
         this.files.push(this.files1[i]['name']);
    }
    this.attfileTest=this.files1.length+" files"
 }

 deleteFile(filename){
 console.log(filename);
  for(var i = 0; i < this.files1.length; i++) {
     if (this.files1[i]['name'] == filename) {
         this.files1.splice(i, 1);
      }
      console.log(this.files1.length);
 }
 this.files=[];
 for(let i =0; i < this.files1.length; i++){
        this.files.push(this.files1[i]['name']);
      }
      this.attfileTest=this.files1.length+" files"
    console.log(this.files1);
 }

 deleteaddedtag(tagName){
  for(var i = 0; i < this.tagarray.length; i++) {
    if (this.tagarray[i]['TagName'] == tagName) {
      this.tagarray.splice(i, 1);
     }
     console.log(this.tagarray.length);
    }
 }
 deleteContact(Contact){
  for(var i = 0; i < this.tagcontactarray.length; i++) {
    if (this.tagcontactarray[i]['FirstName'] == Contact) {
      this.tagcontactarray.splice(i, 1);
     }
     console.log(this.tagcontactarray.length);
    }
 }

 dat(){
  if(localStorage.getItem('token')==undefined){
        this.router.navigateByUrl('/login');
  }
  else{
       this.router.navigateByUrl('/workbench');
  }
}


selectTime = {
  "selectTimeData":[
    {
      "time": "12:00 AM"
    },
    {
      "time": "12:30 AM"
    },
    {
      "time": "1:00 AM"
    },
    {
      "time": "1:30 AM"
    },
    {
      "time": "2:00 AM"
    },
    {
      "time": "2:30 AM"
    },
    {
      "time": "3:00 AM"
    },
    {
      "time": "3:30 AM"
    },
    {
      "time": "4:00 AM"
    },
    {
      "time": "4:30 AM"
    },
    {
      "time": "5:00 AM"
    },
    {
      "time": "5:30 AM"
    },
    {
      "time": "6:00 AM"
    },
    {
      "time": "6:30 AM"
    },
    {
      "time": "7:00 AM"
    },
    {
      "time": "7:30 AM"
    },
    {
      "time": "8:00 AM"
    },
    {
      "time": "8:30 AM"
    },
    {
      "time": "9:00 AM"
    },
    {
      "time": "9:30 AM"
    },
    {
      "time": "10:00 AM"
    },
    {
      "time": "10:30 AM"
    },
    {
      "time": "11:00 AM"
    },
    {
      "time": "11:30 AM"
    },
    {
      "time": "12:30 PM"
    },
    {
      "time": "12:30 PM"
    },
    {
      "time": "1:00 PM"
    },
    {
      "time": "2:00 PM"
    },
    {
      "time": "2:30 PM"
    },
    {
      "time": "3:00 PM"
    },
    {
      "time": "3:30 PM"
    },
    {
      "time": "4:00 PM"
    },
    {
      "time": "4:30 PM"
    },
    {
      "time": "5:00 PM"
    },
    {
      "time": "5:30 PM"
    },
    {
      "time": "6:00 PM"
    },
    {
      "time": "6:30 PM"
    },
    {
      "time": "7:00 PM"
    },
    {
      "time": "7:30 PM"
    },
    {
      "time": "8:00 PM"
    },
    {
      "time": "8:30 PM"
    },
    {
      "time": "9:00 PM"
    },{
      "time": "9:30 PM"
    },
    {
      "time": "10:00 PM"
    },
    {
      "time": "10:30 PM"
    },
    {
      "time": "11:00 PM"
    },
    {
      "time": "11:30 PM"
    }
  ]
}
  ngOnInit() {
   
    
    this.dat();
    this.getlead();
    this.getSalesrep()
    this.shornameinlead=localStorage.getItem('shortname');
    this.role=localStorage.getItem('Role');
    this.token=localStorage.getItem('token');
    this.getUserData();
    this.dumyValue="A";
    //Add Lead function call
    this.attfileTest="Attach file"; 
    this.getClientList="Add"
    this.getContactList="Add"
    this.peopleName="Invite People"
    this.managerlist="Request Owner"
    this.saleslist="Assigned To"
    this.getManagers();
    this.getUsers();
    this.getAllClients();
    this.getClientContactsdata();
    this.getSalesRepList();
  }

  
  
}

