import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TodoComponent} from '../components/todo/todo.component';
import {FormsModule} from '@angular/forms';
import {TodoItemComponent} from '../components/todo/todoItem/todoItem.component';
import {TodoCompletedItemComponent} from '../components/todo/todoCompletedItem/todoCompletedItem.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    TodoCompletedItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
