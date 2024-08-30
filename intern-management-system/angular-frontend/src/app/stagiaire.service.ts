import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stagiaire } from './stagiaire';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  private baseURL = "http://localhost:8080/api/v1/stagiaires";

  constructor(private httpClient: HttpClient) { }

  getStagiairesList(): Observable<Stagiaire[]> {
    return this.httpClient.get<Stagiaire[]>(`${this.baseURL}`);
  }

  addStagiaire(stagiaireData: Stagiaire): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, stagiaireData);
  }

  getStagiaireById(id: number): Observable<Stagiaire> {
    return this.httpClient.get<Stagiaire>(`${this.baseURL}/${id}`);
  }

  updateStagiaire(id: number, stagiaireData: Stagiaire): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, stagiaireData);
  }

  deleteStagiaire(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  // Update this method to return the photo as a Base64 string
  getStagiairePhoto(id: number): Observable<string> {
    return this.httpClient.get(`${this.baseURL}/${id}/photo`, { responseType: 'text' });
  }
}
