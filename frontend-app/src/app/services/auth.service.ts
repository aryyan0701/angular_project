import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../components/environments/environment'
import { User } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private baseUrl = environment.apiUrl; 

  constructor(private http: HttpClient) { }

  registerUser(userDetails: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/users`, userDetails).pipe(
      catchError((error) => {
        console.error('Error registering user:', error);
        return throwError(error);
      })
    );
  }

  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`).pipe(
      catchError((error) => {
        console.error('Error getting user by email:', error);
        return throwError(error);
      })
    );
  }
}
