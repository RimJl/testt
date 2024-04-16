import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllReclamationComponent } from './component/get-all-reclamation/get-all-reclamation.component';
import { GetAllSuggestionComponent } from './component/get-all-suggestion/get-all-suggestion.component';
import { GetReclamationDetailsComponent } from './component/get-reclamation-details/get-reclamation-details.component';
import { CreateReclamationComponent } from './component/create-reclamation/create-reclamation.component';
import { GetSuggestionDetailsComponent } from './component/get-suggestion-details/get-suggestion-details.component';
import { CreateSuggestionComponent } from './component/create-suggestion/create-suggestion.component';

const routes: Routes = [
  { path: 'suggestions/create', component: CreateSuggestionComponent },
  { path: 'reclamations/create', component: CreateReclamationComponent },
  { path: 'reclamations', component:GetAllReclamationComponent},
  { path: 'reclamations/:numero', component: GetReclamationDetailsComponent },
  { path: 'suggestions', component:GetAllSuggestionComponent},
  { path: 'suggestions/:numero', component:GetSuggestionDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
