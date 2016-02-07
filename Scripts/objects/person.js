var objects;
(function (objects) {
    // PERSON class
    var Person = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++
        function Person(name, age) {
            this._name = name;
            this._age = age;
        }
        Person.prototype.sayHello = function () {
            console.log(this._name + " says hello!");
        };
        Person.prototype.showAge = function () {
            console.log(this._name + " is " + this._age + " years old");
        };
        return Person;
    })();
    objects.Person = Person;
})(objects || (objects = {}));

//# sourceMappingURL=person.js.map
