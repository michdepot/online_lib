import { Component  } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent{


  ChapterArray: any[] = [];

  constructor(private http:HttpClient, private router:Router) {
    var id = this.router.url.split('/').pop();
    this.getAllChapters(id);
  }


  getAllChapters(data:any){

    let params = new HttpParams().append('id', data);

    return this.http.get<any>('http://127.0.0.1:8000/api/chapters/'+data,{params:params}).subscribe((data:any)=>{
      console.log(data);
      this.ChapterArray = data;
    })
  }

  delete(){
    
  }
}
