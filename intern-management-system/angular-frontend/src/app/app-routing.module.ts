import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StagiaireListComponent } from './stagiaire-list/stagiaire-list.component';
import { AddStagiaireComponent } from './add-stagiaire/add-stagiaire.component';
import { UpdateStagiaireComponent } from './update-stagiaire/update-stagiaire.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  { path: "show-all-stagiaires", component: StagiaireListComponent },
  { path: "add-stagiaire", component: AddStagiaireComponent },
  { path: '', redirectTo: "login", pathMatch: "full" },
  { path: 'updating-by-id/:id', component: UpdateStagiaireComponent },
  { path: 'details-of-stagiaire/:id', component: ShowDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: AdminLoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
