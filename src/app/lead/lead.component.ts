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

fileChange(fileInput: any) {
    let  FileList= <Array<File>>fileInput.target.files;
    const formData: any = new FormData();
    const files: Array<File> = FileList;
    console.log(files);

    for(let i =0; i < files.length; i++){
        formData.append(files[i]['name'],files[i]);
        this.files.push(files[i]['name']);
    }
    console.log(this.files);
    console.log('form data variable :   '+ formData.toString());
    // formData.append("uploads[]", files[0], files[0]['name']);

        this._http.post('http://localhost:3003/upload', formData)
        .map(files => files.json())
        .subscribe(files => console.log('files', files))
}


  ngOnInit() {
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

// fileChangeEvent(fileInput: any) {
//     this.filesToUpload = <Array<File>>fileInput.target.files;
//     //this.product.photo = fileInput.target.files[0]['name'];
// }