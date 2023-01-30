import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public error = null;

  constructor(
    private backend:BackendService,
    private token:TokenService,
    private router:Router,
    private auth:AuthService
  ){}

  public form={
    email:null,
    password:null
  }

  public loggedIn:boolean=false;

  ngOnInit():void{
    this.auth.authStatus.subscribe(
      value=>{
        this.loggedIn = value;
      }
    );
  }

  submitLogin(){
    console.log(this.form);
    return this.backend.login(this.form).subscribe(
      data=>this.handleResponse(data),
      // error=>this.handleError(error)
    )
  }

  handleError(error:any){
    this.error = error.error.error;

  }

  handleResponse(data:any){
    console.log(data.access_token);
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }
}
