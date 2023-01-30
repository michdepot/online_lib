import { HttpClient } from '@angular/common/http';
import { BackendService } from 'src/app/services/backend.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent {
  
  BookArray : any[] = [];

  title: string = "";
  description: string = "";

  constructor (private backend:BackendService, private http:HttpClient){
    this.getLibraryBooks();
  }

  getLibraryBooks(){
    this.http.get('http://127.0.0.1:8000/api/user_book').subscribe((data:any)=>{
      console.log(data);
      this.BookArray = data;
    })
  }

  delete(){
    // this.BookArray.
  }
}
