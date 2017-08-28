import { Component, OnInit } from '@angular/core';
import { PasswordResetService} from './passwordreset.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.scss'],
  providers:[PasswordResetService]
})
export class PasswordresetComponent implements OnInit {
 pwdreset={};
 resempdata={};
 errorMessage="";
  constructor(private _passwordReset:PasswordResetService,private router:Router) { }
ResetPassword(){
  console.log(this.pwdreset);
   this._passwordReset.passwordResetService(this.pwdreset).subscribe((response) => { 
               this.resempdata=response;   
               this.router.navigateByUrl('/resetMessage');
       },
       e=>{this.errorMessage = e;
         alert(e.message)
        });
  
}
  ngOnInit() {
     
  }

}
