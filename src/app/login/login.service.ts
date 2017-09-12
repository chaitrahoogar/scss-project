// import {Injectable} from '@angular/core';
// import {Http,Response} from '@angular/http';
// import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

 export class AppService{
     private _url:string='http://139.59.43.188:8081/';
     constructor(private _http:Http){
     }
       serviceMethod(login){
           console.log(login);
        let contentHeader = new Headers({
        "Content-Type": "application/json"
        });
           return this._http.post(this._url+'users/Login', JSON.stringify(login),{ headers: contentHeader }).map((response:Response) =>response.json()).catch(handleError);
       }
       
       
 }

 function handleError(error:any){
    let errorMessage = error.json();
    return Observable.throw(errorMessage);
 }