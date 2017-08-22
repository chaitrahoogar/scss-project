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

 export class AppService{
     private _url:string='http://172.16.0.42:8080/';
     constructor(private _http:Http){

     }
       serviceMethod(login){
           console.log(login);
        let contentHeader = new Headers({
        "Content-Type": "application/json"
        });
           return this._http.post(this._url+'users/login', JSON.stringify(login),{ headers: contentHeader }).map((response:Response) =>response.json());
       }
       
 }