// import {Injectable} from '@angular/core';
// import {Http,Response} from '@angular/http';
// import 'rxjs/add/operator/map';
import { Injectable , OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

 export class leadService implements OnInit{
     private _url1:string='http://172.16.0.4:8082/';
       private _url:string='http://172.16.0.38:8000/';
        private _url2:string='http://172.16.0.4:8081/';
     token="";
     constructor(private _http:Http){

     }
    //  172.16.0.4:8082/lead
     value={
    "_id":"59abb3b9d963ea3e3385f734"
}
       
       leadMethod(){
        let contentHeader = new Headers({
        "Content-Type": "application/json",
         'token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWFhZDE3ODk3NTlhMWE0YzUwYWViNWQiLCJVRW1haWwiOiJwcmFuYXlzYWhhMDA3QGdtYWlsLmNvbSIsIlJvbGUiOiJNYW5hZ2VyIiwiVUZpcnN0TmFtZSI6IkdvcGkiLCJVTGFzdE5hbWUiOiJLcmlzaG5hIiwiaWF0IjoxNTA0NTE3ODc1LCJleHAiOjE1MDQ2MDQyNzV9.PqHZK3pLv3WIWS1YPMsLZeQ5Vet7kXdaNiuOruDgSxA"
        });
        // let contentHeader = new Headers({
        //   "Content-Type": "application/json",
        // });
        
    //    var value={
    //      "_id":"599c2ad872e2104737339190"
    //  }
        // contentHeader.append('token',localStorage.getItem('token'))
        // contentHeader.append("Content-Type", "application/json")
           return this._http.get(this._url1+'lead/getAllLeads',{ headers: contentHeader }).map((response:Response) =>response.json());
       }
       leadViewMethod(leadId){
           let leadReqdata={
            "LeadID":leadId
            } 
        let contentHeader = new Headers({
        "Content-Type": "application/json",
         'token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWFhZDE3ODk3NTlhMWE0YzUwYWViNWQiLCJVRW1haWwiOiJwcmFuYXlzYWhhMDA3QGdtYWlsLmNvbSIsIlJvbGUiOiJNYW5hZ2VyIiwiVUZpcnN0TmFtZSI6IkdvcGkiLCJVTGFzdE5hbWUiOiJLcmlzaG5hIiwiaWF0IjoxNTA0NTE3ODc1LCJleHAiOjE1MDQ2MDQyNzV9.PqHZK3pLv3WIWS1YPMsLZeQ5Vet7kXdaNiuOruDgSxA"
        });
           return this._http.post(this._url1+'lead/getLeadDetails',leadReqdata,{ headers: contentHeader }).map((response:Response) =>response.json());
       }
       requirementService(leadIdvalue){
        let contentHeader = new Headers({
        "Content-Type": "application/json",
         'token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWFhZDE3ODk3NTlhMWE0YzUwYWViNWQiLCJVRW1haWwiOiJwcmFuYXlzYWhhMDA3QGdtYWlsLmNvbSIsIlJvbGUiOiJNYW5hZ2VyIiwiVUZpcnN0TmFtZSI6IkdvcGkiLCJVTGFzdE5hbWUiOiJLcmlzaG5hIiwiaWF0IjoxNTA0NTE3ODc1LCJleHAiOjE1MDQ2MDQyNzV9.PqHZK3pLv3WIWS1YPMsLZeQ5Vet7kXdaNiuOruDgSxA"
        });
           return this._http.post(this._url1+'lead/createReq',leadIdvalue,{ headers: contentHeader }).map((response:Response) =>response.json());
       }

       /// ScheduleMeetingService  
         ScheduleMeetingService(ScheduleDate){
         
        let contentHeader = new Headers({
        "Content-Type": "application/json",
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWFhNTk0Zjg2ZDMzMzRkN2Q5NDQ5N2QiLCJVRW1haWwiOiJzYWhhLnByYW5heTI1QGdtYWlsLmNvbSIsIlJvbGUiOiJNYW5hZ2VyIiwiVUZpcnN0TmFtZSI6InByYW5heSIsIlVMYXN0TmFtZSI6InNhaGEiLCJpYXQiOjE1MDQzNTc1NjUsImV4cCI6MTUwNDQ0Mzk2NX0.kB1gQU5sZxVlWyU0D8NyI0wn46Kw6RT2I0sw0UDO6X4"
        });
           return this._http.post(this._url1+'lead/scheduleMeeting',ScheduleDate,{ headers: contentHeader }).map((response:Response) =>response.json());
       }
        /// ScheduleMeetingService Ends

        //172.16.0.4:8082/lead/updateLeadTagCcRev
          updateLeadTagCcRev(id){
         
        let contentHeader = new Headers({
        "Content-Type": "application/json",
         'token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWFhZDE3ODk3NTlhMWE0YzUwYWViNWQiLCJVRW1haWwiOiJwcmFuYXlzYWhhMDA3QGdtYWlsLmNvbSIsIlJvbGUiOiJNYW5hZ2VyIiwiVUZpcnN0TmFtZSI6IkdvcGkiLCJVTGFzdE5hbWUiOiJLcmlzaG5hIiwiaWF0IjoxNTA0NTE3ODc1LCJleHAiOjE1MDQ2MDQyNzV9.PqHZK3pLv3WIWS1YPMsLZeQ5Vet7kXdaNiuOruDgSxA"
        });
           return this._http.put(this._url1+'lead/updateLeadTagCcRev',id,{ headers: contentHeader }).map((response:Response) =>response.json());
       }
        
     //172.16.0.4 localhost:8080/lead/addLeadTagCcRev
         addTagCcRev(id){
         
        let contentHeader = new Headers({
        "Content-Type": "application/json",
         'token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWFhZDE3ODk3NTlhMWE0YzUwYWViNWQiLCJVRW1haWwiOiJwcmFuYXlzYWhhMDA3QGdtYWlsLmNvbSIsIlJvbGUiOiJNYW5hZ2VyIiwiVUZpcnN0TmFtZSI6IkdvcGkiLCJVTGFzdE5hbWUiOiJLcmlzaG5hIiwiaWF0IjoxNTA0NTE3ODc1LCJleHAiOjE1MDQ2MDQyNzV9.PqHZK3pLv3WIWS1YPMsLZeQ5Vet7kXdaNiuOruDgSxA"
        });
           return this._http.post(this._url1+'lead/addLeadTagCcRev',id,{ headers: contentHeader }).map((response:Response) =>response.json());
       }

       //get user data
       getUserData(){
         
        let contentHeader = new Headers({
        "Content-Type": "application/json",
         'token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWFhZDE3ODk3NTlhMWE0YzUwYWViNWQiLCJVRW1haWwiOiJwcmFuYXlzYWhhMDA3QGdtYWlsLmNvbSIsIlJvbGUiOiJNYW5hZ2VyIiwiVUZpcnN0TmFtZSI6IkdvcGkiLCJVTGFzdE5hbWUiOiJLcmlzaG5hIiwiaWF0IjoxNTA0NTE3ODc1LCJleHAiOjE1MDQ2MDQyNzV9.PqHZK3pLv3WIWS1YPMsLZeQ5Vet7kXdaNiuOruDgSxA"
        });
           return this._http.get(this._url2+'users/getUsers',{ headers: contentHeader }).map((response:Response) =>response.json());
       }

       //get sales rep
       getSalesrep(){
         
        let contentHeader = new Headers({
        "Content-Type": "application/json",
         'token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWFhZDE3ODk3NTlhMWE0YzUwYWViNWQiLCJVRW1haWwiOiJwcmFuYXlzYWhhMDA3QGdtYWlsLmNvbSIsIlJvbGUiOiJNYW5hZ2VyIiwiVUZpcnN0TmFtZSI6IkdvcGkiLCJVTGFzdE5hbWUiOiJLcmlzaG5hIiwiaWF0IjoxNTA0NTE3ODc1LCJleHAiOjE1MDQ2MDQyNzV9.PqHZK3pLv3WIWS1YPMsLZeQ5Vet7kXdaNiuOruDgSxA"
        });
           return this._http.get(this._url2+'users/getSalesRep',{ headers: contentHeader }).map((response:Response) =>response.json());
       }

       //user subscibed
       userSubscibed(value){
           let contentHeader = new Headers({
        "Content-Type": "application/json",
         'token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWFhZDE3ODk3NTlhMWE0YzUwYWViNWQiLCJVRW1haWwiOiJwcmFuYXlzYWhhMDA3QGdtYWlsLmNvbSIsIlJvbGUiOiJNYW5hZ2VyIiwiVUZpcnN0TmFtZSI6IkdvcGkiLCJVTGFzdE5hbWUiOiJLcmlzaG5hIiwiaWF0IjoxNTA0NTE3ODc1LCJleHAiOjE1MDQ2MDQyNzV9.PqHZK3pLv3WIWS1YPMsLZeQ5Vet7kXdaNiuOruDgSxA"
        });
           return this._http.post(this._url1+'lead/addSubscribedUsers',value,{ headers: contentHeader }).map((response:Response) =>response.json());
       }

       //assigned to

        assignto(value){
           let contentHeader = new Headers({
        "Content-Type": "application/json",
         'token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWFhZDE3ODk3NTlhMWE0YzUwYWViNWQiLCJVRW1haWwiOiJwcmFuYXlzYWhhMDA3QGdtYWlsLmNvbSIsIlJvbGUiOiJNYW5hZ2VyIiwiVUZpcnN0TmFtZSI6IkdvcGkiLCJVTGFzdE5hbWUiOiJLcmlzaG5hIiwiaWF0IjoxNTA0NTE3ODc1LCJleHAiOjE1MDQ2MDQyNzV9.PqHZK3pLv3WIWS1YPMsLZeQ5Vet7kXdaNiuOruDgSxA"
        });
           return this._http.put(this._url1+'lead/updateLeadSFA',value,{ headers: contentHeader }).map((response:Response) =>response.json());
       }

       getClientContacts(clientid){
        let contentHeader = new Headers({
        "Content-Type": "application/json",
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWFhZDE3ODk3NTlhMWE0YzUwYWViNWQiLCJVRW1haWwiOiJwcmFuYXlzYWhhMDA3QGdtYWlsLmNvbSIsIlJvbGUiOiJNYW5hZ2VyIiwiVUZpcnN0TmFtZSI6IkdvcGkiLCJVTGFzdE5hbWUiOiJLcmlzaG5hIiwiaWF0IjoxNTA0NTE3ODc1LCJleHAiOjE1MDQ2MDQyNzV9.PqHZK3pLv3WIWS1YPMsLZeQ5Vet7kXdaNiuOruDgSxA"
        });
        
        var idvalue={
            "_id":clientid
        }
        return this._http.post(this._url1+'clients/getClientContact',idvalue,{ headers: contentHeader }).map(res =>res.json());
        }

        ngOnInit() {
            this.token=localStorage.getItem('token');
        }
      
       
 }

