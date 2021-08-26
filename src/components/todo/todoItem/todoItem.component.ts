import {Component, Input, Output, EventEmitter} from '@angular/core';
import {TodoComponent} from '../todo.component';

@Component({
  selector: "todoItem-comp",
  templateUrl: "todoItem.component.html",
  styleUrls: ["./todoItem.component.scss"]
})

export class TodoItemComponent {
  @Input() item: any | undefined;
  //@Output() onToggleActivity = new EventEmitter<boolean>();
  //@Output() newItemEvent = new EventEmitter();
  name: string = "";
  isChecked = false;

  checkedItem(value: any): boolean {
    return value;
  }

  addItem(value: any){

  }

  deleteItem(i: any) {
    //this.items.remove(i);
    }
  generate() {
    const date = Date.now();
    const  time = new Date(date);
    return time.toUTCString();
  }
}
