import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddkpiComponent } from './addkpi/addkpi.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { OrgtreeComponent } from './orgtree/orgtree.component';

const routes: Routes = [
  {path: 'home', component: DashboardComponent},
  {path:'orgtree',component:OrgtreeComponent},
  {path:'addkpi',component:AddkpiComponent},
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
