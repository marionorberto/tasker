import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  AllTasks() {}

  createTask(body: { title: string, content: string }) {
    return {
      title: body.title,
      content:  body.content,
    }
  }

  taskById(idTask: string) {}

  deleteOne(idTask: string) {}

  updateOne(idTask: string, body: any) {}

  taskFiltered(filter: string) {}

  taskByDate(date: Date) {}
}
