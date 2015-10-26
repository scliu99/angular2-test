var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by cafeburger on 2015/10/20.
 */
var angular2_1 = require("angular2/angular2");
var todoService_1 = require("./todoService");
var TodoInput = (function () {
    function TodoInput(todoService) {
        this.todoModel = new todoService_1.TodoModel();
        this.todoService = todoService;
        console.log(todoService);
    }
    TodoInput.prototype.onSubmit = function () {
        this.todoService.addTodo(this.todoModel);
        this.todoModel = new todoService_1.TodoModel();
    };
    TodoInput.prototype.onClick = function (event, value) {
        this.todoService.addTodo(value);
        console.log(this.todoService.todos);
    };
    TodoInput = __decorate([
        angular2_1.Component({
            selector: 'todo-input'
        }),
        angular2_1.View({
            directives: [angular2_1.FORM_DIRECTIVES],
            template: "\n        <form (ng-submit)=\"onSubmit()\">\n            <input type=\"text\" [(ng-model)]=\"todoModel.title\">\n\n            <button type=\"submit\">Add to list</button>\n        </form>\n    "
        }),
        __param(0, angular2_1.Inject(todoService_1.TodoService))
    ], TodoInput);
    return TodoInput;
})();
exports.TodoInput = TodoInput;
