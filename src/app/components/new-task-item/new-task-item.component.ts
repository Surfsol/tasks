import { Component, OnInit, Input, EventEmitter, Output, OnDestroy, OnChanges, DoCheck } from '@angular/core';
import { Task } from 'src/types/Tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-task-item',
  templateUrl: './new-task-item.component.html',
  styleUrls: ['./new-task-item.component.css']
})
export class NewTaskItemComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
 @Input() task: Task
 @Output() onDeleteTask: EventEmitter<string> = new EventEmitter()
 faTimes = faTimes
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void{
    // when outside variable changes the input variable value
  }

  ngDoCheck(): void {
      // called after init and when values in component are changed
  }

  ngOnDestroy(): void{
    // called when component removed from dom
  }

  deleteItem(id: string) {
    this.onDeleteTask.emit(id)
  }
}
