import { Injectable } from '@angular/core';
import { UserDataInterface } from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})

export class TaskService {
  constructor() { }

  AllTasks() {}

  createTask(body: { title: string, content: string | undefined }) {
    // persit task:
    

  }

  taskById(idTask: string) {}

  deleteOne(idTask: string) {}

  updateOne(idTask: string, body: any) {}

  taskFiltered(filter: string) {}

  taskByDate(date: Date) {}

  login(loginData: UserDataInterface) {
    console.log({ username: loginData.username, password: loginData.password })
  } 
}
