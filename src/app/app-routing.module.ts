import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllReclamationComponent } from './component/get-all-reclamation/get-all-reclamation.component';
import { GetAllSuggestionComponent } from './component/get-all-suggestion/get-all-suggestion.component';
import { GetReclamationDetailsComponent } from './component/get-reclamation-details/get-reclamation-details.component';
import { CreateReclamationComponent } from './component/create-reclamation/create-reclamation.component';
import { GetSuggestionDetailsComponent } from './component/get-suggestion-details/get-suggestion-details.component';
import { CreateSuggestionComponent } from './component/create-suggestion/create-suggestion.component';
import { UpdateReclamationComponent } from './component/update-reclamation/update-reclamation.component';
import { DeleteReclamationComponent } from './component/delete-reclamation/delete-reclamation.component';
import { UpdateSuggestionComponent } from './component/update-suggestion/update-suggestion.component';
import { DeleteSuggestionComponent } from './component/delete-suggestion/delete-suggestion.component';

const routes: Routes = [
  { path: 'suggestions/update/:numero', component: UpdateSuggestionComponent},
  { path: 'reclamations/delete/:numero', component: DeleteReclamationComponent},
  { path: 'reclamations/update/:numero', component: UpdateReclamationComponent},
  { path: 'suggestions', component:GetAllSuggestionComponent},
  { path: 'reclamations', component:GetAllReclamationComponent},
  { path: 'suggestions/create', component: CreateSuggestionComponent },
  { path: 'reclamations/create', component: CreateReclamationComponent },
  { path: 'reclamations/details/:numero', component: GetReclamationDetailsComponent },
  { path: 'suggestions/details/:numero', component:GetSuggestionDetailsComponent},
  { path: 'suggestions/delete/:numero', component: DeleteSuggestionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
