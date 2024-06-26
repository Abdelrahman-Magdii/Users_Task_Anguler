import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  
  getAllUsers(){
    // return this.http.get('https://reqres.in/api/users');
    return this.http.get('https://reqres.in/api/users?page={page}');
  }   

  getUsersById(id: number){
    return this.http.get(`https://reqres.in/api/users/${id}`);
  }

  // 'https://reqres.in/api/users/{id}'

}
