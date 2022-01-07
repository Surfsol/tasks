import { Injectable } from '@angular/core';
import { Task } from 'src/types/Tasks';
import { Tasks } from 'src/mock-people';
import { Observable, of } from 'rxjs'; // when fetching data from an api
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({ //makes available throughout app
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'  // private only available within class

  constructor(private http:HttpClient) { }

  // observable used to pass values and for asynchronous programming
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteItem(id: string): Observable<string>{
    const url = `${this.apiUrl}/${id}`
    return this.http.delete<any>(url)
  }
}
