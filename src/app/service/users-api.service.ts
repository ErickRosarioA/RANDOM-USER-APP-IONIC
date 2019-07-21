import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(public http: HttpClient) { }

  getUsers() {
    return this.http.get(`https://randomuser.me/api/?results=30`);
  }
}
