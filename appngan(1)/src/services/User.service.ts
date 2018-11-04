import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../model/user';
import { Result } from '../model/result';
import { Http } from '@angular/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private getAllUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.getAllUrl + "view")
  }

  createUser(user: User) {
    return this.http.post<Result>(this.getAllUrl + "create", user, httpOptions);
  }

  updateUser(user: User) {
    return this.http.post<Result>(this.getAllUrl + "update", user, httpOptions);
  }

  getUserById(id: number) {
    return this.http.get(this.getAllUrl + "view/" + id);
  }
  deleteUser(id: number) {
    return this.http.get<Result>(this.getAllUrl + "delete/"+id);
  }

}

