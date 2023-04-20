import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path:"",pathMatch:"full",redirectTo:"login"
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"home",component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
