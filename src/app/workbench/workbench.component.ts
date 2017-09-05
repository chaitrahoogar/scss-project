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
                 this.reqBusinessdata=response.lead.EngagementType;
                 this.reqRevenue=response.lead.LeadRevenue;
                 this.userinfo=response.lead.UsersInfo;
                 this.reqDetail=response.lead.ReqDetails;
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
                 this.reqBusinessdata=response.lead.EngagementType;
                 this.reqRevenue=response.lead.LeadRevenue;
                 this.userinfo=response.lead.UsersInfo;
                 this.reqDetail=response.lead.ReqDetails;
                 this.clintID=response.lead.ClientID
             console.log(this.viewleaddata);
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
                 this.reqBusinessdata=response.lead.EngagementType;
                 this.reqRevenue=response.lead.LeadRevenue
                 this.userinfo=response.lead.UsersInfo;
                 this.reqDetail=response.lead.ReqDetails;
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
  contactItems: any[] = []; 
  displayList:any[];
  contactdisplay:any[];
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
  verificationstatus="";
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
  files1=[];
  engagementtype="";
  conversationtype="";
  conversation="";
  temparray=[];
  tagcontactarray=[];
  contactlistvalues=[];
  newclientarray=[];
  
  reqBusiness='Business Stream';
  changeBusiness(val,business){
    console.log("business",business);
    this.reqBusiness=val;
   this.engagementtype=business.option;
  }

  reqConversation='Conversation Type';
  changeconversation(value,business)
  {
    console.log("con===",business);
    this.reqConversation=value;
    this.conversationtype=business.option; 
    console.log("this.conversationtype",this.conversationtype);   
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
        "option": "LittleBrahma",
        "_id": "002"
      }
    ],
    "ConversationType" : [
     {
       "option": "Telephonic",
       "_id": "100",
     },
    {
      "option": "FaceToFace",
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

  leadtags:any={
    "TagName":this.tagarray,
    "TagCategory":"Budget"
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
        this.managerarray=response;  
        this.ownerdisplay=this.managerarray;
           }); 
    }

    getUsers()
    {
      this._clientservice.getUsers().subscribe((response) => { 
        this.userarray=response; 
        this.persondisplay=this.userarray 
        console.log("this.userarray",this.userarray);
    }); 
    }
    
    createClient()
    {
      console.log("addclientdata",this.addclientdata);
      this._clientservice.addClient(this.addclientdata).subscribe((response) => { 
        this.addclientarray=response; 
        console.log("this.addclientarray",this.addclientarray); 
             });
      this.getAllClients();
    }

    getAllClients()
    {
      this._clientservice.getClients().subscribe((response) => { 
      this.clientlistarray=response.client;
      console.log("addclientarray==",this.addclientarray);
      console.log("this.clientlistarray",this.clientlistarray);
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
      let addcontactdata:any=
      {
        "ClientID":this.ClientIdValue,
        "ClientContact":[
        this.contactdetails
        ],
         "OfficeAddress":[
        this.officeaddress
          ]
      }
   
      this._clientservice.addContact(addcontactdata).subscribe((response) => { 
        this.addcontactarray=response;  
           }); 
      this.getAllClientContact();  

    }
    
    addLeads()
    {
    let leadconversation:any={
        "ConversationType":this.conversationtype,
        "content":this.conversation,
        } 

     let addlead:any={
        "Title":this.title,
        "ClientID": this.ClientIdValue,
        "ClientName":this.ClientNameValue,
        "ClientContact":
        this.contactlistvalues,
        "UsersInfo":
         this.temparray,
        "EngagementType":this.engagementtype, 
        "Tags":
        [
          this.leadtags
        ],
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
      console.log("title name",this.title);
      console.log("conversation",this.conversation);
      for(let i =0; i < this.files1.length; i++){
        this.formData.append(this.files1[i]['name'],this.files1[i]);
      }
      this.formData.append(addlead);
      this._clientservice.addLead(this.formData).subscribe((response) => { 
        this.createleadarray=response;  
      });   
    }

    getSalesRepList()
    {
      this._clientservice.getSalesRepList().subscribe((response) => { 
      this.SalerepArray=response;  
      this.salesdisplay=this.SalerepArray;
           }); 
    }
    
    clearSearch() {
      this.searchValue= " ";
    }
  
   searchChange(searchValue){
    if(searchValue.length>0){
      this.displayList=this.clientlistarray.filter(val=>{
           
      return val.ClientName.includes(searchValue);
    })
  }
  else{
    this.displayList=this.clientlistarray;
  }

} 

clientContactSearch(searchValue){
  if(searchValue.length>0){
    this.contactdisplay=this.contactlistarray.filter(val=>{
         
    return val.FirstName.includes(searchValue);
  })
}
else{
  this.contactdisplay=this.contactlistarray;
}
} 

peopleSearch(searchValue1){
  if(searchValue1.length>0){
    this.persondisplay=this.userarray.filter(val=>{     
    return val.UserName.includes(searchValue1);
  })
}
else{
  this.persondisplay=this.userarray;
}
} 

ownersearch(searchValue2){
  if(searchValue2.length>0){
    this.ownerdisplay=this.managerarray.filter(val1=>{
    return val1.UserName.includes(searchValue2);
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
    return val1.UserName.includes(searchValue3);
  })
}
  else{
    this.salesdisplay=this.SalerepArray;
  } 
}

  putValue(serachData,value){
    this.ClientIdValue=value.ClientID;
    this.ClientNameValue=value.ClientName;
    this.getClientList=serachData;
    this.getAllClientContact();
  }

  contactsearch(serachData,value){
    console.log("value for contact",value);
    this.getContactList=serachData;
    this.tagcontactarray.push(value);
    let contactdetailslist:any={
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
    this.namearray.push(value1);
    let peoplelist:any =
    {
      "UFirstName":value1.UFirstName,
      "ULastName":value1.ULastName,
      "URole":value1.Role,
      "Action" :"Subscribed"
    }
    this.temparray.push(peoplelist);
    console.log("this.temparray",this.temparray);
  }

  managersearch(serachData2,value2){
    console.log(value2);
    this.managerlist=serachData2;
    let managerlist:any =
    {
      "UFirstName":value2.UFirstName,
      "ULastName":value2.ULastName,
      "URole":value2.Role,
      "Action" :"Assigned"
    }
   this.temparray.push(managerlist);
   console.log("this.temparray",this.temparray);
  }

  salessearch(serachData3,value3){
    console.log(value3);
    this.saleslist=serachData3;
    let saleslist:any =
    {
      "UFirstName":value3.UFirstName,
      "ULastName":value3.ULastName,
      "URole":value3.Role,
      "Action" :"Owner"
    }
    this.temparray.push(saleslist);
  }

  addTag(tagvalue)
  {
    this.tagarray.push(tagvalue);
  }
  
  //Attach files
  upload() {
    console.log(this.files1.length);
          for(let i =0; i < this.files1.length; i++){
            this.formData.append(this.files1[i]['name'],this.files1[i]);
          }
          this._http.post('http://localhost:3003/upload', this.formData)
          .map(files => files.json())
          .subscribe(files => console.log('files', files))
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

  ngOnInit() {
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
    this.getClientList="List"
    this.getContactList="List"
    this.peopleName="Invite People"
    this.managerlist="Request Owner"
    this.saleslist="Sales Rep"
    this.getManagers();
    this.getUsers();
    this.getAllClients();
  }

  
}

