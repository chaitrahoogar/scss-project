import { Injectable , OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

 export class ClientService implements OnInit{
    //  private _url2:string='http://172.16.0.38:8082/';
    
     private _url4:string='http://139.59.43.188:8083/';
     private _url1:string='http://139.59.43.188:8082/';
     private _url5:string='http://139.59.43.188:8081/';
     token="";
     
     contentHeader:any

     constructor(private _http:Http){

     }

    getManagers(){
        let contentHeader = new Headers({
            "Content-Type": "application/json",
            // 'Allow-Control-Allow-Origin' : '*',
             'token':localStorage.getItem('token')
            });
        console.log("headers",contentHeader);
        return this._http.get(this._url5+'users/getManagers',{ headers: contentHeader }).map((response:Response) =>response.json());
       }

    getUsers(){
        let contentHeader = new Headers({
            "Content-Type": "application/json",
            // 'Allow-Control-Allow-Origin' : '*',
             'token':localStorage.getItem('token')
            });
        return this._http.get(this._url5+'users/getUsers',{headers: contentHeader }).map(res =>
        res.json());
           }

    getClients(){
        let contentHeader = new Headers({
            "Content-Type": "application/json",
            // 'Allow-Control-Allow-Origin' : '*',
             'token':localStorage.getItem('token')
            });
        console.log("headers",contentHeader);
        return this._http.get(this._url4+'clients/getClients',{ headers: contentHeader }).map((res:Response) =>res.json());
           }        
           
    getClientContacts(clientid){
        let contentHeader = new Headers({
            "Content-Type": "application/json",
            // 'Allow-Control-Allow-Origin' : '*',
             'token':localStorage.getItem('token')
            });
        let idvalue: any = '{'+
        '"_id": "'+ clientid +'"'+
        '}';
        return this._http.post(this._url4+'clients/getClientContact',idvalue,{ headers: contentHeader }).map(res =>res.json());
        } 

    addClient(addclientdata){
        console.log(addclientdata);
        let contentHeader = new Headers({
            "Content-Type": "application/json",
            // 'Allow-Control-Allow-Origin' : '*',
             'token':localStorage.getItem('token')
            });
        return this._http.post(this._url4+'clients/createClient', JSON.stringify(addclientdata),{ headers: contentHeader }).map((response:Response) =>response.json()).catch(handleError);
       }
       
    addContact(addcontactdata){
        console.log(addcontactdata);
        let contentHeader = new Headers({
            "Content-Type": "application/json",
            // 'Allow-Control-Allow-Origin' : '*',
             'token':localStorage.getItem('token')
            });
        return this._http.post(this._url4+'clients/addClientContact', JSON.stringify(addcontactdata),{ headers: contentHeader }).map((response:Response) =>response.json()).catch(handleError);
       }

    addLead(formData){
        let contentHeader = new Headers({
            // "Content-Type": "undefined",
            // 'Allow-Control-Allow-Origin' : '*',
             'token':localStorage.getItem('token')
            });
        return this._http.post(this._url1+'lead/createLead',formData,{ headers: contentHeader }).map((response:Response) =>response.json()).catch(handleError);
      }
    
    getSalesRepList(){
        let contentHeader = new Headers({
            // "Content-Type": "undefined",
            // 'Allow-Control-Allow-Origin' : '*',
             'token':localStorage.getItem('token')
            });
            
        console.log("headers",contentHeader);
        return this._http.get(this._url5+'users/getSalesRep',{ headers: contentHeader }).map((response:Response) =>response.json());
       }  
     
       invitePeopleService(addcontactdata){
        console.log(addcontactdata);
        let contentHeader = new Headers({
            "Content-Type": "application/json",
            // 'Allow-Control-Allow-Origin' : '*',
             'token':localStorage.getItem('token')
            });
        return this._http.post(this._url5+'lead/addSubscribedUsers', JSON.stringify(addcontactdata),{ headers: contentHeader }).map((response:Response) =>response.json());
       }   
       ngOnInit() {
        this.token=localStorage.getItem('token');
        console.log(this.token);
    }

 }

 function handleError(error:any){
    let errorMessage = error.json();
    return Observable.throw(errorMessage);
 }

 