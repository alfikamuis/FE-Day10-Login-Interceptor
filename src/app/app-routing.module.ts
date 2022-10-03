import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  {path: '', redirectTo:"/home", pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'view/:id/:nama/:kota', component: ViewComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
