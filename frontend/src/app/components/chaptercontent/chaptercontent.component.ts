import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chaptercontent',
  templateUrl: './chaptercontent.component.html',
  styleUrls: ['./chaptercontent.component.css']
})
export class ChaptercontentComponent {

  public form={
    title:null,
    content:null
  }

  book_id = this.router.url.split('/')[3];


  constructor(private router:Router, private http:HttpClient){}

  addChapter(data:any){
    this.router.navigateByUrl('/stories');
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );
    const body=JSON.stringify(data);
    const params = new HttpParams()
      .append('data', data);

    this.http.post<any>('http://127.0.0.1:8000/api/chapters/'+data, this.form,
      {
        headers: headers,
        params: params,
      }
      )
      .subscribe((res) => console.log(res));
  }
}
