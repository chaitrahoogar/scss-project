import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

 export class updatepswService{
     private _url:string='http://172.16.0.30:8080/';
     constructor(private _http:Http){

     }
       updatepassword(login){
        let contentHeader = new Headers({
        "Content-Type": "application/json"
        });
           return this._http.put(this._url+'users/updatePassword', JSON.stringify(login),{ headers: contentHeader }).map((response:Response) =>response.json()).catch(handleError);
       }
 }

 function handleError(error:any){
    //  debugger;
    let errorMessage = error.json();
    return Observable.throw(errorMessage);
 }