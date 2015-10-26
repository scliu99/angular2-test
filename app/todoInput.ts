/**
 * Created by cafeburger on 2015/10/20.
 */
import {Component, View, Inject, FORM_DIRECTIVES} from "angular2/angular2";
import {TodoService, TodoModel} from "./todoService"

@Component({
    selector: 'todo-input'
})

@View({
    directives: [FORM_DIRECTIVES],
    template: `
        <form (ng-submit)="onSubmit()">
            <input type="text" [(ng-model)]="todoModel.title">

            <button type="submit">Add to list</button>
        </form>
    `
})

export class TodoInput {
    todoModel:TodoModel = new TodoModel();
    todoService:TodoService;
    constructor(@Inject(TodoService) todoService){
        this.todoService = todoService;
        console.log(todoService)
    }
    onSubmit(){
        this.todoService.addTodo(this.todoModel);
        this.todoModel = new TodoModel();
    }

    onClick(event, value){
        this.todoService.addTodo(value);
        console.log(this.todoService.todos)
    }
}