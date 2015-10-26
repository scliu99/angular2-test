/**
 * Created by cafeburger on 2015/10/21.
 */
var TodoModel = (function () {
    function TodoModel(title) {
        if (title === void 0) { title = ""; }
        this.title = title;
        this.status = TodoModel.STARTED;
    }
    TodoModel.prototype.toggle = function () {
        if (this.status == TodoModel.STARTED)
            this.status = TodoModel.COMPLETED;
        else
            this.status = TodoModel.STARTED;
    };
    TodoModel.STARTED = "started";
    TodoModel.COMPLETED = "completed";
    return TodoModel;
})();
exports.TodoModel = TodoModel;
var TodoService = (function () {
    function TodoService() {
        this.todos = [
            new TodoModel("eat"),
            new TodoModel("sleep"),
            new TodoModel("code")
        ];
    }
    TodoService.prototype.addTodo = function (value) {
        this.todos.push(value);
    };
    return TodoService;
})();
exports.TodoService = TodoService;
