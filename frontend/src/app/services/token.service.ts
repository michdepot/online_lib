import { BackendService } from 'src/app/services/backend.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http:HttpClient, private backend:BackendService) { }

  handle(token:any){
    this.set(token);
    console.log(this.isValid())
  }

  set(token:any){
    return localStorage.setItem('token', token);
  }

  get(){
    return localStorage.getItem('token');
  }

  remove(){
    return localStorage.removeItem('token');
  }


  //check if token is valid

  isValid(){
    const token = this.get();

    if(token){
      return true;
    }else{
      return false;
    }
  }

  loggedIn(){
    return this.isValid();
  }


}
