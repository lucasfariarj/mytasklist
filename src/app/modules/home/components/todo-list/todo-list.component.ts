import { Component, OnInit } from '@angular/core';
//Interface
import { TaskList } from 'src/app/model/home/model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
    {
      task: "Minha Task",
      checked:true,
    },
    {
      task: "Minha Task 2",
      checked:false,
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({task: event, checked: false})
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Do you really want to delete all items?");
    if(confirm) {
      this.taskList = [];
    }
  }

}
