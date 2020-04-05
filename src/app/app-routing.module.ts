import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [

    // { path: '', redirectTo: 'home', pathMatch: 'full' }, 
{path : 'form', component: FormComponent },
{ path: 'home',  component: HomeComponent},
/* {path : '' ,  component: HomeComponent} */

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
