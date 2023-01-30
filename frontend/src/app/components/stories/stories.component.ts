import { Component } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent {


  BookArray : any[] = [];

  constructor(private backend:BackendService, private http:HttpClient) {
    this.getAllBooks();
  }

  getAllBooks(){
    this.http.get('http://127.0.0.1:8000/api/writtenBooks').subscribe((data:any)=>{
      console.log(data);
      this.BookArray = data;
    })
  }

}
