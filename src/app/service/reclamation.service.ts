import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reclamation } from '../models/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private httpClient: HttpClient) { }

  getAllReclamations(): Observable<Reclamation[]> {
    return this.httpClient.get<Reclamation[]>('http://localhost:4000/reclamations');
  }
  getReclamationByNumero(numero: number): Observable<Reclamation> {
    return this.httpClient.get<Reclamation>(`http://localhost:4000/reclamations/numero/${numero}`);
  }
  createReclamation(reclamationData: Reclamation): Observable<any> {
    return this.httpClient.post<any>('http://localhost:4000/reclamations', reclamationData);
  }
  updateReclamation(numero: number, reclamationData: Reclamation): Observable<any> {
    return this.httpClient.put<any>(`http://localhost:4000/reclamations/${numero}`, reclamationData);
  }
  
  deleteReclamation(numero: number): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:4000/reclamations/${numero}`);
  }
  
}
