var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require("angular2/angular2");
var TodoSearch = (function () {
    function TodoSearch() {
        this.term = "";
    }
    TodoSearch = __decorate([
        angular2_1.Component({
            selector: 'todo-search'
        }),
        angular2_1.View({
            directives: [angular2_1.FORM_DIRECTIVES],
            template: "\n        Search: <input type=\"text\" [(ng-model)]=\"term\">\n    "
        })
    ], TodoSearch);
    return TodoSearch;
})();
exports.TodoSearch = TodoSearch;
