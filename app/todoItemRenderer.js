var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require("angular2/angular2");
var todoService_1 = require("./todoService");
var TodoItemRenderer = (function () {
    function TodoItemRenderer() {
    }
    __decorate([
        angular2_1.Input()
    ], TodoItemRenderer.prototype, "todo");
    TodoItemRenderer = __decorate([
        angular2_1.Component({
            selector: 'todo-item-renderer'
        }),
        angular2_1.View({
            directives: [angular2_1.NgClass],
            styles: [("\n        ." + todoService_1.TodoModel.STARTED + "{\n            color: red;\n            font-weight: bold;\n        }\n\n        ." + todoService_1.TodoModel.COMPLETED + "{\n            text-decoration: line-through;\n        }")
            ],
            template: "\n        <div>\n            <span [ng-class]=\"todo.status\" > {{todo.title}}</span>\n            <!--<span [content-editable]=\"todo.status == 'completed'\" > {{todo.title}}</span>-->\n            <button (click)=\"todo.toggle()\">Toggle</button>\n        </div>\n    "
        })
    ], TodoItemRenderer);
    return TodoItemRenderer;
})();
exports.TodoItemRenderer = TodoItemRenderer;
