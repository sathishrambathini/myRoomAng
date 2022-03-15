import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path : '', redirectTo : '/login', pathMatch : 'full'
  },
  {
    path : 'login', component : LoginComponent,
  },
  {
    path : 'addForm', component : AddProductComponent,
  },
  {
  path : 'viewDetails/:id' ,component : DetailsComponent
},
{
  path : 'home', component : HomeComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
