import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url= 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient ) { }

  getUsers():Observable<User[]>{
    return this.http.get(this.url).pipe(
      map((res:any)=> res as User[])
      );

  }
}

export interface User{
  id?: number;
  name: string;
  email: string;
}