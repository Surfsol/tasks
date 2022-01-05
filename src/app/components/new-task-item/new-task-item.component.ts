import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/types/Tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-task-item',
  templateUrl: './new-task-item.component.html',
  styleUrls: ['./new-task-item.component.css']
})
export class NewTaskItemComponent implements OnInit {
 @Input() task: Task
 @Output() btnClick = new EventEmitter()
 faTimes = faTimes
  constructor() { }

  ngOnInit(): void {
  }
  deleteItem(id: number | undefined) {
    this.btnClick.emit()
    console.log({id})
  }
}