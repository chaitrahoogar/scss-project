// import {Injectable} from '@angular/core';
// import {Http,Response} from '@angular/http';
// import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

 export class leadService{
     private _url:string='http://172.16.0.38:8000/';
     constructor(private _http:Http){

     }
     value={
    "_id":"599c2ad872e2104737339190"
}

       leadMethod(){
        let contentHeader = new Headers({
        "Content-Type": "application/json"
        });
           return this._http.post(this._url+'getUserLeads',this.value,{ headers: contentHeader }).map((response:Response) =>response.json());
       }
       leadViewMethod(leadId){
           let leadReqdata={
            "LeadID":leadId
            } 
        let contentHeader = new Headers({
        "Content-Type": "application/json"
        });
           return this._http.post(this._url+'getLeadDetails',leadReqdata,{ headers: contentHeader }).map((response:Response) =>response.json());
       }
      
       
 }
