import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.scss']
})
export class LeadComponent implements OnInit {
 lead:any={};
files = [];
attfileTest="Attach file";
filesToUpload=[];
formData: any = new FormData();
FileList=[];
files1=[];
  constructor(private _http:Http) { }
   token="";
     submit(){
        console.log(this.lead);
        this.token="anushya";
        localStorage.setItem('currentUser', JSON.stringify({ token: this.token }));
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser.token; // your token
        alert(currentUser.token);
     }

    //  fileChange(event) {
    // let fileList: FileList = event.target.files;
    // if(fileList.length > 0) {
    //     let file: File = fileList[0];
    //     let formData:FormData = new FormData();
    //     formData.append('uploadFile', file, file.name);
    //     let headers = new Headers();
    //     /** No need to include Content-Type in Angular 4 */
    //     headers.append('Content-Type', 'multipart/form-data');
    //     headers.append('Accept', 'application/json');
    //     let options = new RequestOptions({ headers: headers });
    //     this._http.post('user',formData, options)
    //         .map(res => res.json())
    //         .catch(error => Observable.throw(error))
    //         .subscribe(
    //             data => console.log('success'),
    //             error => console.log(error)
    //         )
    // }
//}

upload() {
    
    // formData.append("uploads[]", files[0], files[0]['name']);
        for(let i =0; i < this.files1.length; i++){
        this.formData.append(this.files1[i]['name'],this.files1[i]);
      
        }
    
        this._http.post('http://localhost:3003/upload', this.formData)
        .map(files => files.json())
        .subscribe(files => console.log('files', files))
}


  ngOnInit() {
    this.attfileTest="Attach file";
     for(var i = 0; i < this.arr.length; i++) {
    if(this.arr[i].id == 92) {
        this.arr.splice(i, 1);
        break;
    }
    console.log(this.arr);
}
  }
fileChange(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.product.photo = fileInput.target.files[0]['name'];
    this.FileList= <Array<File>>this.filesToUpload;
    
     this.files1= Array.from(this.FileList);
     //let fileArray = Array.from(this.FileList);
    console.log(this.files1);
for(let i =0; i < this.files1.length; i++){
        //this.formData.append(this.files1[i]['name'],this.files1[i]);
        this.files.push(this.files1[i]['name']);
        }
    
    console.log(this.FileList);
    this.attfileTest=this.files1.length+" files attached"
    // console.log('form data variable :   '+ this.formData.toString());
    
}
deleteFile(filename){
console.log(filename);
//  let nameof=[this.FileList]
//  console.log();
   
  for(var i = 0; i < this.files1.length; i++) {
   
     if (this.files1[i]['name'] == filename) {
         this.files1.splice(i, 1);
    console.log(this.files1);
      
      
      } 
      console.log(this.files1.length);
   
    
  //  delete this.FileList[i][filename];
}
this.files=[];
for(let i =0; i < this.files1.length; i++){
        //this.formData.append(this.files1[i]['name'],this.files1[i]);
        this.files.push(this.files1[i]['name']);
      }
      this.attfileTest=this.files1.length+" files attached"
    console.log(this.files1);
} arr = [{id:84}, {id:92}, {id:123}, {id:2353}]

}


// upload() {
//     const formData: any = new FormData();
//     const files: Array<File> = this.filesToUpload;
//     console.log(files);

//     for(let i =0; i < files.length; i++){
//         formData.append("uploads[]", files[i], files[i]['name']);
//     }
//     console.log('form data variable :   '+ formData.toString());
//     // formData.append("uploads[]", files[0], files[0]['name']);
//     this.address.documents = files.toString();

//         this.http.post('http://localhost:3003/upload', formData)
//         .map(files => files.json())
//         .subscribe(files => console.log('files', files))
// }

