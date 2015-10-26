import {Component, View, Input, NgClass} from "angular2/angular2";
import {TodoModel} from "./todoService";

@Component({
    selector: 'todo-item-renderer'
})

@View({
    directives: [NgClass],
    styles:[`
        .${TodoModel.STARTED}{
            color: red;
            font-weight: bold;
        }

        .${TodoModel.COMPLETED}{
            text-decoration: line-through;
        }`
    ],
    template: `
        <div>
            <span [ng-class]="todo.status" > {{todo.title}}</span>
            <!--<span [content-editable]="todo.status == 'completed'" > {{todo.title}}</span>-->
            <button (click)="todo.toggle()">Toggle</button>
        </div>
    `
})

export class TodoItemRenderer {
    @Input() todo: TodoModel;
}