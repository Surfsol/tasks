import { Injectable } from '@angular/core';
import { Task } from 'src/types/Tasks';
import { Tasks } from 'src/mock-people';
import { Observable, of } from 'rxjs'; // when fetching data from an api
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }
}
