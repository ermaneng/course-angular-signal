import { Component, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mutate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mutate.component.html',
  styleUrls: ['./mutate.component.css']
})
export class MutateComponent {
  person:WritableSignal<Person> = signal({name:"John", age:20});
  todos:WritableSignal<Todo[]> = signal([{title:"Breakfast",done:false}]);

  mutatePerson(){
    this.person.mutate((item:Person)=>item.age=30);
  }
  mutateTodos(){
    this.todos.mutate(
      (items:Todo[])=>items[0].done = true
      );
  }

}

export interface Person{
  name:string;
  age:number;
}

export interface Todo{
  title:string;
  done:boolean;
}