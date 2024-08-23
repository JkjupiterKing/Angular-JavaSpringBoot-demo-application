import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8081/register-user';

  constructor(private http: HttpClient) { }

  login(userData: any): Observable<any> {
    console.log('Calling backend API');    
    return this.http.post<any>(`${this.baseUrl}/login`, userData);
  }

  registerUser(userData: any): Observable<any> {
    console.log("Making registerUser http call", userData);
    return this.http.post(this.baseUrl, userData);
  }





}
