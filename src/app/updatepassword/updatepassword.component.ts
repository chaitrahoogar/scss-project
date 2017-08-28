import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { updatepswService} from './updatePassword.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.scss'],
  providers:[updatepswService]
})
export class UpdatepasswordComponent implements OnInit {
upadatepassword:any ={
  _id:this.route.snapshot.queryParams['_id'],
  UEmail:this.route.snapshot.queryParams['UEmail']
};
reserpassword:any={};
private userEmail: string;
private userId: string;
resempdata=[];
errorMessage="";
updatePassword(){
  console.log(this.upadatepassword);
   this._updateService.updatepassword(this.upadatepassword).subscribe((response) => { 
               this.resempdata=response;
             
               if(response.status=="fail"){
                    this.router.navigateByUrl('/updatepassword');
               }
               else if(response.status=="success"){
                      this.router.navigateByUrl('/login');
               }
   },
       e=>{this.errorMessage = e;
        
         alert(e.message)
        });
}
  constructor(private route:  ActivatedRoute,private _updateService:updatepswService,private router:Router) { }

  ngOnInit() {
     this.route.queryParams.forEach((params: Params) => {
        this.userEmail = params['_id'];
        this.userId = params['UEmail'];
    });

  }

}
