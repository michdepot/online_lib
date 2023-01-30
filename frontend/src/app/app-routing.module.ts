import { HomeComponent } from './components/home/home.component';
import { ChaptercontentComponent } from './components/chaptercontent/chaptercontent.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { StoriesComponent } from './components/stories/stories.component';
import { LibraryComponent } from './components/library/library.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { WriteComponent } from './components/write/write.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component : LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'signup',
    component : SignupComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'profile',
    component : ProfileComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'write',
    component : WriteComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'library',
    component: LibraryComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'stories',
    component: StoriesComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'stories/book/:id',
    component: ChapterComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'stories/book/:id/chaptercontent',
    component: ChaptercontentComponent,
    canActivate: [AfterLoginService]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
