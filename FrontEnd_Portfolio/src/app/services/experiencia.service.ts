import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ExperienciaService {
  constructor(private http: HttpClient) {
    this.getExperience;
  }
  getExperience() {
    return this.http.get('http://localhost:8080/experiencia/findAll');
  }
}
