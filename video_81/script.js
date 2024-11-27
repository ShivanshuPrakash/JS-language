// Static methods in JavaScript are functions that belong to a class, not to objects created from the class.
//  You can call them directly using the class name without creating an instance(object) of the class.

// When to Use Static Methods
// 1) Utility tasks: For example, adding two numbers.
// 2)Factory methods: To create objects with default values.
// 3)Class-level data: To manage data shared across all objects of the class.

//----------------------------------------------------->IMPLEMENTATION<------------------------------------------------------

// 1) Utility tasks: For example, adding two numbers.
class Calculator {
    static add(a, b) {  // declaring static method for static keyword 
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }
}
console.log(Calculator.add(5, 3));       // Output: 8
console.log(Calculator.subtract(10, 6)); // Output: 4

// 2) Factory Methods: Create and return objects.
class User {
    constructor(name) {
        this.name = name;
    }

    static createGuest() {
        return new User("Guest");
    }
}

let guestUser = User.createGuest();
console.log(guestUser.name); // Output: Guest

// 3) Class-Level Information: For example, counting instances or returning metadata.
// Call the methods directly using the class name



class Counter {
    static count = 0;

    constructor() {
        Counter.count++;
    }

    static getCount() {
        return Counter.count;
    }
}

let c1 = new Counter();
let c2 = new Counter();
console.log(Counter.getCount()); // Output: 2



// // NOTE : 
// Key Concept:
// this normally refers to the specific object instance created from a class.
// Static methods are tied to the class itself, not to any particular object. So,
//  this in a static method does not point to an instance. Instead, it points to the class.

class MyClass {
    static greet() {
        console.log("Hello! This is a static method.");
        console.log(this); // Refers to the class itself
    }

    sayHi() {
        console.log("Hi! This is an instance method.");
        console.log(this); // Refers to the object instance
    }
}

MyClass.greet(); // Static method, 'this' refers to the class
// Output:
// Hello! This is a static method.
// [class MyClass]

const obj = new MyClass();
obj.sayHi(); // Instance method, 'this' refers to the object
// Output:
// Hi! This is an instance method.
// MyClass {}


































