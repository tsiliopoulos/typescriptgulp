module objects {
    // PERSON class
    export class Person{
        // PRIVATE INSTANCE VARIABLES 
        private _name: string;
        private _age: number;
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor(name:string, age:number) {
            this._name = name;
            this._age = age;
        }
        
        public sayHello():void {
           console.log(this._name + " says hello!"); 
        }
        
        public showAge():void {
            console.log(this._name + " is " + this._age + " years old");
        }
    }
}