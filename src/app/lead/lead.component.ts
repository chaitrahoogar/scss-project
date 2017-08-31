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

        this._http.post('http://localhost:3003/upload', this.formData)
        .map(files => files.json())
        .subscribe(files => console.log('files', files))
}


  ngOnInit() {
    this.attfileTest="Attach file";
  }
fileChange(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.product.photo = fileInput.target.files[0]['name'];
    this.FileList= <Array<File>>this.filesToUpload;
    
     this.files1= this.FileList;
    console.log(this.files1);

    for(let i =0; i < this.files1.length; i++){
        this.formData.append(this.files1[i]['name'],this.files1[i]);
        this.files.push(this.files1[i]['name']);
    }
    console.log(this.files);
    this.attfileTest=this.files.length+" files attached"
    // console.log('form data variable :   '+ this.formData.toString());
    
}
deleteFile(filename){
console.log(filename);
  for(var i = 0; i < this.FileList.length; i++) {
     if (this.FileList[i]['name'] == filename) {
       
      } 
  //  delete this.FileList[i][filename];
}
console.log(this.FileList);
}
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

