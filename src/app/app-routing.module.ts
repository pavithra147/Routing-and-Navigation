import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [              //each route in this array is javascript object that contains two properties  
    {path:'Home',title:'Home',component:HomeComponent,
    // children:  [
    //   {
    //     path:'sign-in ',component:SignInComponent,},
      
    // ],
  },
    { path:'sign-in',title:'Home',component:SignInComponent},
    {path:'About',title:'About',component: AboutComponent}, 
    // {path:'',redirectTo:'/Home',pathMatch:'full'},//"pathMatch tell the router how to match the URL"  //redirect to 'Home' "path:'' means to use the initial relative url"                 //Here we define each route
    {path:'**',component: PageNotFoundComponent},//wildcard route for 404 page //last route with ** is wildcard route.Router selects this route if the requested url doesn't match any of the paths earlier in list

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
