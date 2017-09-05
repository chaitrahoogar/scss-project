import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

 export class ClientService{
     private _url:string='http://localhost:8081/';
     private _url2:string='http://localhost:8082/';
     private _url3:string='http://localhost:8083/';
     
     contentHeader:any

     constructor(private _http:Http){

     }

    getManagers(){
        let contentHeader = new Headers({
        "Content-Type": "application/json",
        // 'Allow-Control-Allow-Origin' : '*',
         'token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTliZDMxMzdmNGVmZDkyOGZjYTA1NzIiLCJVRW1haWwiOiIxMjNANDU2LmNvbSIsIlJvbGUiOiJNYW5hZ2VyIiwiVUZpcnN0TmFtZSI6IkpvaG5uIiwiVUxhc3ROYW1lIjoiRG9lIiwiaWF0IjoxNTA0NTkyNzY0LCJleHAiOjE1MDQ2NzkxNjR9.j1PEv5Tq4gHeb7LFok2IJBqonkLcIzzFsWFK7_Z_Knc"
        });
        console.log("headers",contentHeader);
        return this._http.get(this._url+'users/getManagers',{ headers: contentHeader }).map((response:Response) =>response.json());
       }

    getUsers(){
        let contentHeader = new Headers({
            "Content-Type": "application/json",
            // 'Allow-Control-Allow-Origin' : '*',
             'token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTliZDMxMzdmNGVmZDkyOGZjYTA1NzIiLCJVRW1haWwiOiIxMjNANDU2LmNvbSIsIlJvbGUiOiJNYW5hZ2VyIiwiVUZpcnN0TmFtZSI6IkpvaG5uIiwiVUxhc3ROYW1lIjoiRG9lIiwiaWF0IjoxNTA0NTkyNzY0LCJleHAiOjE1MDQ2NzkxNjR9.j1PEv5Tq4gHeb7LFok2IJBqonkLcIzzFsWFK7_Z_Knc"
            });
        return this._http.get(this._url+'users/getUsers',{headers: contentHeader }).map(res =>
        res.json());
           }

    getClients(){
        let contentHeader = new Headers({
            "Content-Type": "application/json",
            // 'Allow-Control-Allow-Origin' : '*',
             'token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTliZDMxMzdmNGVmZDkyOGZjYTA1NzIiLCJVRW1haWwiOiIxMjNANDU2LmNvbSIsIlJvbGUiOiJNYW5hZ2VyIiwiVUZpcnN0TmFtZSI6IkpvaG5uIiwiVUxhc3ROYW1lIjoiRG9lIiwiaWF0IjoxNTA0NTkyNzY0LCJleHAiOjE1MDQ2NzkxNjR9.j1PEv5Tq4gHeb7LFok2IJBqonkLcIzzFsWFK7_Z_Knc"
            });
        console.log("headers",contentHeader);
        return this._http.get(this._url3+'clients/getClients',{ headers: contentHeader }).map((res:Response) =>res.json());
           }        
           
    getClientContacts(clientid){
        let contentHeader = new Headers({
            "Content-Type": "application/json",
            // 'Allow-Control-Allow-Origin' : '*',
             'token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTliZDMxMzdmNGVmZDkyOGZjYTA1NzIiLCJVRW1haWwiOiIxMjNANDU2LmNvbSIsIlJvbGUiOiJNYW5hZ2VyIiwiVUZpcnN0TmFtZSI6IkpvaG5uIiwiVUxhc3ROYW1lIjoiRG9lIiwiaWF0IjoxNTA0NTkyNzY0LCJleHAiOjE1MDQ2NzkxNjR9.j1PEv5Tq4gHeb7LFok2IJBqonkLcIzzFsWFK7_Z_Knc"
            });
        let idvalue: any = '{'+
        '"_id": "'+ clientid +'"'+
        '}';
        return this._http.post(this._url3+'clients/getClientContact',idvalue,{ headers: contentHeader }).map(res =>res.json());
        } 

    addClient(addclientdata){
        console.log(addclientdata);
        let contentHeader = new Headers({
            "Content-Type": "application/json",
            // 'Allow-Control-Allow-Origin' : '*',
             'token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTliZDMxMzdmNGVmZDkyOGZjYTA1NzIiLCJVRW1haWwiOiIxMjNANDU2LmNvbSIsIlJvbGUiOiJNYW5hZ2VyIiwiVUZpcnN0TmFtZSI6IkpvaG5uIiwiVUxhc3ROYW1lIjoiRG9lIiwiaWF0IjoxNTA0NTkyNzY0LCJleHAiOjE1MDQ2NzkxNjR9.j1PEv5Tq4gHeb7LFok2IJBqonkLcIzzFsWFK7_Z_Knc"
            });
        return this._http.post(this._url3+'clients/createClient', JSON.stringify(addclientdata),{ headers: contentHeader }).map((response:Response) =>response.json());
       }
       
    addContact(addcontactdata){
        console.log(addcontactdata);
        let contentHeader = new Headers({
            "Content-Type": "application/json",
            // 'Allow-Control-Allow-Origin' : '*',
             'token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTliZDMxMzdmNGVmZDkyOGZjYTA1NzIiLCJVRW1haWwiOiIxMjNANDU2LmNvbSIsIlJvbGUiOiJNYW5hZ2VyIiwiVUZpcnN0TmFtZSI6IkpvaG5uIiwiVUxhc3ROYW1lIjoiRG9lIiwiaWF0IjoxNTA0NTkyNzY0LCJleHAiOjE1MDQ2NzkxNjR9.j1PEv5Tq4gHeb7LFok2IJBqonkLcIzzFsWFK7_Z_Knc"
            });
        return this._http.post(this._url3+'clients/addClientContact', JSON.stringify(addcontactdata),{ headers: contentHeader }).map((response:Response) =>response.json());
       }

    addLead(addlead){
        let contentHeader = new Headers({
            "Content-Type": "application/json",
            // 'Allow-Control-Allow-Origin' : '*',
             'token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTliZDMxMzdmNGVmZDkyOGZjYTA1NzIiLCJVRW1haWwiOiIxMjNANDU2LmNvbSIsIlJvbGUiOiJNYW5hZ2VyIiwiVUZpcnN0TmFtZSI6IkpvaG5uIiwiVUxhc3ROYW1lIjoiRG9lIiwiaWF0IjoxNTA0NTkyNzY0LCJleHAiOjE1MDQ2NzkxNjR9.j1PEv5Tq4gHeb7LFok2IJBqonkLcIzzFsWFK7_Z_Knc"
            });
        return this._http.post(this._url2+'lead/createLead', JSON.stringify(addlead),{ headers: contentHeader }).map((response:Response) =>response.json());
      }
    
    getSalesRepList(){
        let contentHeader = new Headers({
            "Content-Type": "application/json",
            // 'Allow-Control-Allow-Origin' : '*',
             'token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTliZDMxMzdmNGVmZDkyOGZjYTA1NzIiLCJVRW1haWwiOiIxMjNANDU2LmNvbSIsIlJvbGUiOiJNYW5hZ2VyIiwiVUZpcnN0TmFtZSI6IkpvaG5uIiwiVUxhc3ROYW1lIjoiRG9lIiwiaWF0IjoxNTA0NTkyNzY0LCJleHAiOjE1MDQ2NzkxNjR9.j1PEv5Tq4gHeb7LFok2IJBqonkLcIzzFsWFK7_Z_Knc"
            });
        console.log("headers",contentHeader);
        return this._http.get(this._url+'/users/getSalesRep',{ headers: contentHeader }).map((response:Response) =>response.json());
       }  
     
       invitePeopleService(addcontactdata){
        console.log(addcontactdata);
        let contentHeader = new Headers({
            "Content-Type": "application/json",
            // 'Allow-Control-Allow-Origin' : '*',
             'token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTliZDMxMzdmNGVmZDkyOGZjYTA1NzIiLCJVRW1haWwiOiIxMjNANDU2LmNvbSIsIlJvbGUiOiJNYW5hZ2VyIiwiVUZpcnN0TmFtZSI6IkpvaG5uIiwiVUxhc3ROYW1lIjoiRG9lIiwiaWF0IjoxNTA0NTkyNzY0LCJleHAiOjE1MDQ2NzkxNjR9.j1PEv5Tq4gHeb7LFok2IJBqonkLcIzzFsWFK7_Z_Knc"
            });
        return this._http.post(this._url2+'lead/addSubscribedUsers', JSON.stringify(addcontactdata),{ headers: contentHeader }).map((response:Response) =>response.json());
       }   

 }

 