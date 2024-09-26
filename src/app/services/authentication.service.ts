// src/app/services/authentication.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  // Método para iniciar sesión
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>('/api/login', { email, password });
  }

  // Método para registrar un nuevo usuario
  register(userData: any): Observable<any> {
    // Envía todo el objeto userData directamente al servidor
    return this.http.post<any>('/api/register', userData);
  }

  // Método para obtener el rol del usuario actual
  getCurrentUserRole(): Observable<any> {
    return this.http.get<any>('/api/currentUserRole');
  }

  // Método para cerrar sesión
  logout(): Observable<any> {
    return this.http.post<any>('/api/logout', {});
  }
}

