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
 * Created by cafeburger on 2015/10/21.
 */
var angular2_1 = require("angular2/angular2");
var todoService_1 = require("./todoService");
var todoItemRenderer_1 = require("./todoItemRenderer");
var startWith_1 = require("./startWith");
var todoSearch_1 = require("./todoSearch");
var simpleSearch_1 = require("./simpleSearch");
var TodoList = (function () {
    function TodoList(todoService) {
        this.letters = ["e", "c", "s"];
        this.selectedLetter = "e";
        this.todoService = todoService;
    }
    TodoList = __decorate([
        angular2_1.Component({
            selector: 'todo-list'
        }),
        angular2_1.View({
            pipes: [startWith_1.StartsWith, simpleSearch_1.SimpleSearch],
            directives: [angular2_1.NgFor, todoItemRenderer_1.TodoItemRenderer, angular2_1.FORM_DIRECTIVES, todoSearch_1.TodoSearch],
            template: "\n        <div>\n        <todo-search #todo-search></todo-search>\n        {{todoSearch.term}}\n            <todo-item-renderer *ng-for=\"#todo of (todoService.todos\n            | startsWith:'title':selectedLetter)\n            | simpleSearch: 'title':todoSearch.term\"\n            [todo]=\"todo\">\n            <!--<todo-item-renderer *ng-for=\"#todo of todoService.todos | startsWith:'title':selectedLetter\" [todo]=\"todo\">-->\n            </todo-item-renderer>\n            <select [(ng-model)]=\"selectedLetter\">\n                <option *ng-for=\"#letter of letters\">{{letter}}</option>\n            </select>\n        </div>\n    "
        }),
        __param(0, angular2_1.Inject(todoService_1.TodoService))
    ], TodoList);
    return TodoList;
})();
exports.TodoList = TodoList;
