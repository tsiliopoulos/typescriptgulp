/// <reference path="_reference.ts"/>

// JavaScript Logic

"use strict";

(function(){
    console.log("app started");
    
    var person:objects.Person;
    
    person = new objects.Person("Tom", 46);
    
    person.sayHello();
})();