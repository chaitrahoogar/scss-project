import { Component, OnInit } from '@angular/core';
import { leadService} from './workbench.service';
import { Router } from '@angular/router';
import { ClientService} from './lead.service';
import { Http, Response } from '@angular/http';
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
  
    changeStatus(val,id){
      var leadFeelchange={
          "_id":id,
          "LeadCurrentStatus":val
      }
       this._leadService.assignto(leadFeelchange).subscribe((response) => {
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
             for(var i=0;i< this.userinfo.length;i++){
                     if(this.userinfo[i].Action=="Subscribed"){
                         this.subscibe.push(this.userinfo[i]);
                     }
                     else if(this.userinfo[i].Action=="Assigned"){
                            this.Assigned.push(this.userinfo[i])
                            this.AssignedShortName=this.userinfo[i].ShortName;
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
                 this.reqBusinessdata=response.lead.EngagementType;
                 this.reqRevenue=response.lead.LeadRevenue;
                 this.userinfo=response.lead.UsersInfo;
                 this.reqDetail=response.lead.ReqDetails;
                 this.clientid=response.lead.ClientID;
             this.subscibe=[];
             this.Assigned=[];
             this.AssignedShortName="";
             this.owner=[];
             for(var i=0;i< this.userinfo.length;i++){
                     if(this.userinfo[i].Action=="Subscribed"){
                         this.subscibe.push(this.userinfo[i]);
                     }
                     else if(this.userinfo[i].Action=="Assigned"){
                            this.Assigned.push(this.userinfo[i]);
                            this.AssignedShortName=this.userinfo[i].ShortName;
                     }
                     else if(this.userinfo[i].Action=="Owner"){
                           this.owner.push(this.userinfo[i])
                     }
             }  
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
            for(var i=0;i< this.userinfo.length;i++){
                    if(this.userinfo[i].Action=="Subscribed"){
                        this.subscibe.push(this.userinfo[i]);
                    }
                    else if(this.userinfo[i].Action=="Assigned"){
                           this.Assigned.push(this.userinfo[i]);
                           this.AssignedShortName=this.userinfo[i].ShortName;
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
  
  
    togglefunction(){
      this.show=!this.show
    }
   
    constructor(private _leadService:leadService,private router:Router,private _clientservice:ClientService,private _http:Http) { }
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
             for(var i=0;i< this.userinfo.length;i++){
                     if(this.userinfo[i].Action=="Subscribed"){
                         this.subscibe.push(this.userinfo[i]);
                     }
                     else if(this.userinfo[i].Action=="Assigned"){
                            this.Assigned.push(this.userinfo[i]);
                            this.AssignedShortName=this.userinfo[i].ShortName;
                     }
                     else if(this.userinfo[i].Action=="Owner"){
                           this.owner.push(this.userinfo[i])
                     }
             }
           console.log(this.Assigned);
            this.getClientContactsdata();
            this.getconversation(leadId);
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
             for(var i=0;i< this.userinfo.length;i++){
                     if(this.userinfo[i].Action=="Subscribed"){
                         this.subscibe.push(this.userinfo[i]);
                     }
                     else if(this.userinfo[i].Action=="Assigned"){
                            this.Assigned.push(this.userinfo[i]);
                            this.AssignedShortName=this.userinfo[i].ShortName;
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
  
  schedule(Scheduledate,ScheduleTime,ScheduleLocation,id){
    var data=new Date(Scheduledate);
    
    var day = data.getDate();
    var monthIndex = data.getMonth();
    var year = data.getFullYear();
    monthIndex=monthIndex+1;
    var d = new Date(ScheduleTime +year+'-'+monthIndex+'-'+day)
  
  console.log(d);


      var scheduleData= {
      "_id": id,
      "Meeting": {
         "MeetingVenue": ScheduleLocation,
          "ScheduleDate": d,
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
             for(var i=0;i< this.userinfo.length;i++){
                     if(this.userinfo[i].Action=="Subscribed"){
                         this.subscibe.push(this.userinfo[i]);
                     }
                     else if(this.userinfo[i].Action=="Assigned"){
                            this.Assigned.push(this.userinfo[i]);
                            this.AssignedShortName=this.userinfo[i].ShortName;
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
                 this.reqBusinessdata=response.lead.EngagementType;
                 this.reqRevenue=response.lead.LeadRevenue
                this.userinfo=response.lead.UsersInfo;
                 this.reqDetail=response.lead.ReqDetails;
                 this.clientid=response.lead.ClientID;
             this.subscibe=[];
             this.Assigned=[];
             this.AssignedShortName="";
             this.owner=[];
             for(var i=0;i< this.userinfo.length;i++){
                     if(this.userinfo[i].Action=="Subscribed"){
                         this.subscibe.push(this.userinfo[i]);
                     }
                     else if(this.userinfo[i].Action=="Assigned"){
                            this.Assigned.push(this.userinfo[i]);
                            this.AssignedShortName=this.userinfo[i].ShortName;
                     }
                     else if(this.userinfo[i].Action=="Owner"){
                           this.owner.push(this.userinfo[i])
                     }
             }
            
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
             for(var i=0;i< this.userinfo.length;i++){
                     if(this.userinfo[i].Action=="Subscribed"){
                         this.subscibe.push(this.userinfo[i]);
                     }
                     else if(this.userinfo[i].Action=="Assigned"){
                            this.Assigned.push(this.userinfo[i]);
                            this.AssignedShortName=this.userinfo[i].ShortName;
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
             for(var i=0;i< this.userinfo.length;i++){
                     if(this.userinfo[i].Action=="Subscribed"){
                         this.subscibe.push(this.userinfo[i]);
                     }
                     else if(this.userinfo[i].Action=="Assigned"){
                            this.Assigned.push(this.userinfo[i]);
                            this.AssignedShortName=this.userinfo[i].ShortName;
                            
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
                 this.reqBusinessdata=response.lead.EngagementType;
                 this.reqRevenue=response.lead.LeadRevenue
                 this.userinfo=response.lead.UsersInfo;
                 this.reqDetail=response.lead.ReqDetails;
                 this.clientid=response.lead.ClientID;
             this.subscibe=[];
             this.Assigned=[];
             this.AssignedShortName="";
             this.owner=[];
             for(var i=0;i< this.userinfo.length;i++){
                     if(this.userinfo[i].Action=="Subscribed"){
                         this.subscibe.push(this.userinfo[i]);
                     }
                     else if(this.userinfo[i].Action=="Assigned"){
                            this.Assigned.push(this.userinfo[i]);
                            this.AssignedShortName=this.userinfo[i].ShortName;
                     }
                     else if(this.userinfo[i].Action=="Owner"){
                           this.owner.push(this.userinfo[i])
                     }
             }
   
         } );
    }

    getconversation(lead){
      this._leadService.getconversation(lead).subscribe((response) => {
            this.conversartionResponse=response.Convo;
            console.log(this.conversartionResponse.length);
           
         });
     }

    sendData(data,id){
      var newdata={
        "_id":id,
             "Conversation": {
            "content": data
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

    FileDownload(id,data){
      
      var download={
        _id:id,
        file:
          data 
      }
      
   this._leadService.FileDownload(download).subscribe((response) => {
     this.download=response;
    
     });
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
    this.attfileTest3=this.files3.length+" files attached"
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
      this.attfileTest3=this.files3.length+" files attached"
 }

    createClientContactInupdate(id)
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
             for(var i=0;i< this.userinfo.length;i++){
                     if(this.userinfo[i].Action=="Subscribed"){
                         this.subscibe.push(this.userinfo[i]);
                     }
                     else if(this.userinfo[i].Action=="Assigned"){
                            this.Assigned.push(this.userinfo[i]);
                            this.AssignedShortName=this.userinfo[i].ShortName;
                     }
                     else if(this.userinfo[i].Action=="Owner"){
                           this.owner.push(this.userinfo[i])
                     }
             }
               
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
  errorMessage="";
  errormessage="";
  edited=false;
  clienterrormessage=false;
  clientsuccesmessage=true;
  contacterrormessage=false;
  successmessage=false;
  leadsuccessmessage=true;
  contactsuccessmessage=true;
  nextLibAvailable=true;
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
    "BusinessVertical":this.businessType
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
    
    createClient(){
      this._clientservice.addClient(this.addclientdata).subscribe((response) => { 
      this.addclientarray=response; 
      if(response.status=="success")
        {
          this.successmessage=response.message;
          this.clientsuccesmessage=false;
          this.getAllClients();
          document.getElementById('createClientCloseEvent').click();
          this.addclientdata={};
        }
        this.clientsuccesmessage=false;
          },
          e=>{this.errorMessage = e;
            console.log("e.message",e.message);
            this.errormessage=e.message;
            console.log("this.errormessage",this.errormessage);
            this.clienterrormessage=true;  
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

    createClientContact()
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
        this.addcontactarray=response;  
        if(response.status=="success")
          {
            this.successmessage=response.message;
            this.contactsuccessmessage=false;
            this.getAllClientContact();  
        document.getElementById('addClientContactClose').click();
          }
           },
           e=>{this.errorMessage = e;
            console.log("e.message",e.message);
            this.errormessage=e.message;
            console.log("this.errormessage",this.errormessage);
            this.contacterrormessage=true;  
           }); 
    }
    
    addLeads()
    {
      if(this.ownervalue!=null){
        this.temparray.push(this.ownervalue);
        }
    let leadconversation:any={
        "ConversationType":this.conversationtype,
        "content":this.conversation,
        } 

        let addlead:any={
          "Verified":this.verificationstatus,
          "Title":this.title,
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
        //  JSON.stringify(addlead);
          this._clientservice.addLead(this.formData).subscribe((response) => { 
          this.createleadarray=response; 
          this.successmessage = response.message;
          this.leadsuccessmessage=false;
          this.getlead();
          document.getElementById('addLeadClose').click();
        },
        e=>{this.errorMessage = e;
          this.errormessage=e.message;
          this.edited=true;  
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
    
    let peoplelist:any =
    {
      "Userid":value1.Userid,
      "UFirstName":value1.UFirstName,
      "ULastName":value1.ULastName,
      "UEmail":value1.UEmail,
      "Role":value1.Role,
      "Action" :"Subscribed"
    }
console.log(this.temparray);
console.log(peoplelist);
console.log(value1);
    var index = this.temparray.findIndex(x => x.Userid === peoplelist.Userid);
    console.log(index);
    if(index>-1){
      this.temparray=this.temparray;
      this.namearray=this.namearray;
  } else {
    
    this.temparray.push(peoplelist);
    this.namearray.push(value1);
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
        
   }
   else{
       this.ownervalue=managerlist;
      this.managerlist=serachData2;
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
         
    }
    else{
        this.ownervalue=saleslist;
       this.saleslist=serachData3;
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
    this. getUpload=response;
    this.getconversation(id);
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
    this.attfileTest=this.files1.length+" files attached"
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
      this.attfileTest=this.files1.length+" files attached"
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

  ngOnInit() {
    this.dat();
    this.getlead();
    this.getSalesrep()
    this.shornameinlead=localStorage.getItem('shortname');
    this.role=localStorage.getItem('Role');
    console.log(this.role);
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
    console.log(this.role);
  }

  
  
}

