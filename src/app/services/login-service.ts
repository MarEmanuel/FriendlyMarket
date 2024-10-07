import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    // > URL de la API.
    API_url = 'https://dummyjson.com/';

    constructor(private http: HttpClient) {}
    
    login(username: string, password: string): Observable<any> {
        return this.http.post(`${this.API_url}auth/login`, { username, password });
    }
}
