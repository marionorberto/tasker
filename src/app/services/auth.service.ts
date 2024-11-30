import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface UserDataInterface { 
  username: string;
  password: string
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api: string = 'http://localhost:3000/api/v1/tasker';
  
  constructor(private http: HttpClient) { }

  login(userData: UserDataInterface): Observable<any> {
    console.log(userData);
    return this.http.post('http://localhost:3000/api/v1/tasker/signin', { username : 'diegofernandes3', password: '12345678'});
  }
}
