import { BackendService } from 'src/app/services/backend.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent {

  constructor(private backend:BackendService, private router:Router){}

    public form={
      title:null,
      description:null
    }

    public error:any = [];

    submitPublish(){
      this.router.navigateByUrl('/stories');
      return this.backend.addBook(this.form).subscribe(
        data=>console.log(data),
        error=>this.handleError(error)
      );
    }

    handleError(error:any){
      this.error = error.error.error;

    }
}
