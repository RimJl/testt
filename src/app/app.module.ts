import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GetAllReclamationComponent } from './component/get-all-reclamation/get-all-reclamation.component';
import { GetAllSuggestionComponent } from './component/get-all-suggestion/get-all-suggestion.component';
import { GetReclamationDetailsComponent } from './component/get-reclamation-details/get-reclamation-details.component';
import { CreateReclamationComponent } from './component/create-reclamation/create-reclamation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GetSuggestionDetailsComponent } from './component/get-suggestion-details/get-suggestion-details.component';
import { CreateSuggestionComponent } from './component/create-suggestion/create-suggestion.component';
import { DeleteSuggestionComponent } from './component/delete-suggestion/delete-suggestion.component';
import { DeleteReclamationComponent } from './component/delete-reclamation/delete-reclamation.component';
import { UpdateReclamationComponent } from './component/update-reclamation/update-reclamation.component';
import { UpdateSuggestionComponent } from './component/update-suggestion/update-suggestion.component'; // Importez ReactiveFormsModule


@NgModule({
  declarations: [
    AppComponent,
    GetAllReclamationComponent,
    GetAllSuggestionComponent,
    GetReclamationDetailsComponent,
    CreateReclamationComponent,
    GetSuggestionDetailsComponent,
    CreateSuggestionComponent,
    DeleteSuggestionComponent,
    DeleteReclamationComponent,
    UpdateReclamationComponent,
    UpdateSuggestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule // Ajoutez ReactiveFormsModule à vos imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
