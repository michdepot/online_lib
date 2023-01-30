import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private backend:BackendService, private router:Router){}

  public form={
    firstName:null,
    lastName:null,
    email:null,
    password:null,
    cpassword:null
  }

  public error:any = [];

  submitRegister(){
    this.router.navigateByUrl('/login');
    return this.backend.signup(this.form).subscribe(
      data=>console.log(data),
      error=>this.handleError(error)
    );
  }

  handleError(error:any){
    this.error = error.error.error;

  }
}
