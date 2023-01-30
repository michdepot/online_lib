import { ApiInterceptorService } from './services/api-interceptor.service';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WriteComponent } from './components/write/write.component';
import { LibraryComponent } from './components/library/library.component';
import { StoriesComponent } from './components/stories/stories.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { ChaptercontentComponent } from './components/chaptercontent/chaptercontent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    HomeComponent,
    WriteComponent,
    LibraryComponent,
    StoriesComponent,
    ChapterComponent,
    ChaptercontentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService, multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
