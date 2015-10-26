/**
 * Created by cafeburger on 2015/10/20.
 */
import {bootstrap, Component, View} from "angular2/angular2";
import {TodoInput} from "./todoInput";
import {TodoService} from "./todoService";
import {TodoList} from "./todoList";

@Component({
    selector:'app'
})

@View({
    directives: [TodoInput, TodoList],
    template: `
        <div>
        <todo-input></todo-input>
        <todo-list></todo-list>
        </div>
    `
})

class App{
 
}

bootstrap(App, [TodoService]);