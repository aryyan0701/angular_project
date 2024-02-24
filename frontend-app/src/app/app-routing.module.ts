import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import {HomeComponent} from './components/home/home.component'
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent},
  { path: 'signup', component: SignupPageComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard]  },
  { path: '', redirectTo: '/', pathMatch:"full" },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
