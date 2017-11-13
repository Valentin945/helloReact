var speak = /** @class */ (function () {
    function speak() {
    }
    speak.hello = function (person) {
        return "Hello, " + person + ".";
    };
    return speak;
}());
var user = "World";
console.log(speak.hello(user));
//# sourceMappingURL=test.js.map