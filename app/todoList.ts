/**
 * Created by cafeburger on 2015/10/21.
 */
import {Component, View, Inject, NgFor, FORM_DIRECTIVES} from "angular2/angular2";
import {TodoService} from "./todoService";
import {TodoItemRenderer} from "./todoItemRenderer";
import {StartsWith} from "./startWith"
import {TodoSearch} from "./todoSearch";
import {SimpleSearch} from "./simpleSearch";

@Component({
    selector: 'todo-list'
})

@View({
    pipes:[StartsWith, SimpleSearch],
    directives: [NgFor, TodoItemRenderer, FORM_DIRECTIVES, TodoSearch],
    template:`
        <div>
        <todo-search #todo-search></todo-search>
        {{todoSearch.term}}
            <todo-item-renderer *ng-for="#todo of (todoService.todos
            | startsWith:'title':selectedLetter)
            | simpleSearch: 'title':todoSearch.term"
            [todo]="todo">
            <!--<todo-item-renderer *ng-for="#todo of todoService.todos | startsWith:'title':selectedLetter" [todo]="todo">-->
            </todo-item-renderer>
            <select [(ng-model)]="selectedLetter">
                <option *ng-for="#letter of letters">{{letter}}</option>
            </select>
        </div>
    `
})

export class TodoList{
    letters:string[] = ["e", "c", "s"];
    selectedLetter:string = "e";
    todoService:TodoService;
    constructor(
        @Inject(TodoService) todoService
    ){
        this.todoService = todoService;
    }

}