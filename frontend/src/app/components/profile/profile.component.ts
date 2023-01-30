
import { Component } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  BookArray : any[] = [];
  id = 0;
  title: string = "";
  description: string = "";


  constructor(private backend:BackendService, private http:HttpClient) {
    this.getAllBooks();
  }

  getAllBooks(){
    this.http.get('http://127.0.0.1:8000/api/books').subscribe((data:any)=>{
      console.log(data);
      this.BookArray = data;
    })
  }

  addBook(data:number){
    // console.log(data);
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );
    const body=JSON.stringify(data);
    const params = new HttpParams()
      .append('data', data);

    this.http.post<any>('http://127.0.0.1:8000/api/user_book/'+data, body,
    {
        headers: headers,
        params: params,
      }
      )
      .subscribe((res) => console.log(res));
  }

}
