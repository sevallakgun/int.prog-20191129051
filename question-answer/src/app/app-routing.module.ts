import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { SectionsComponent } from './sections/sections.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sections', component: SectionsComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '',   redirectTo: localStorage.getItem("user") === null ?  'signin' : 'home', pathMatch: 'full' }, 
  { path: '**', component: NotFound404Component }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
