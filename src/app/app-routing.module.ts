import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [              //each route in this array is javascript object that contains two properties  
    {path:'Home',component:HomeComponent},
    {path:'About',component: AboutComponent}                     //Here we define each route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
