import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Suggestion } from '../models/suggestion';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  constructor(private httpClient: HttpClient) { }

  getAllSuggestions(): Observable<Suggestion[]> {
    return this.httpClient.get<Suggestion[]>('http://localhost:4000/suggestions');
  }
  getSuggestionByNumero(numero: number): Observable<Suggestion> {
    return this.httpClient.get<Suggestion>(`http://localhost:4000/reclamations/numero/${numero}`);
}

createSuggestion(suggestionData: Suggestion): Observable<any> {
    return this.httpClient.post<any>('http://localhost:4000/suggestions', suggestionData); 
}

}
