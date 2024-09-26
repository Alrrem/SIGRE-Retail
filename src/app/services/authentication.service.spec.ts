import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    // Reemplaza 'tu_api_endpoint/login' con tu URL real de API
    return this.http.post('tu_api_endpoint/login', { email, password });
  }

  register(data: any): Observable<any> {
    // Reemplaza 'tu_api_endpoint/register' con tu URL real de API
    return this.http.post('tu_api_endpoint/register', data);
  }
}
