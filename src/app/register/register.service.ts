import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

 export class RegisterService{
     private _url:string='http://139.59.43.188:8081/';
     constructor(private _http:Http){

     }
       registerService(login){
        let contentHeader = new Headers({
        "Content-Type": "application/json"
        });
           return this._http.put(this._url+'users/createProfile', JSON.stringify(login),{ headers: contentHeader }).map((response:Response) =>response.json()).catch(handleError);;
       }
       
 }
 function handleError(error:any){
    //  debugger;
    let errorMessage = error.json();
    return Observable.throw(errorMessage);
 }
