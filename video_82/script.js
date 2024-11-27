// Getters and Setters are special methods that allow you to define how to access and modify the properties of an object.

// Getters:
// Getters allow you to access a property in a controlled way.
// They act like properties but are defined using the get keyword.

// Setters:
// Setters allow you to set a value to a property with additional logic or checks.
// They act like properties but are defined using the set keyword.

class Person {
    constructor(name) {
// underscore " _" is used to define data member( property ) as private 
        this._name = name;  // Notice the underscore (convention for private-like properties) [can be accessed outside the class ]
// only convention if u want declare something private use # for it 
    }

    // Getter for 'name'
    get name() {
        return this._name;
    }

    // Setter for 'name'
    set name(newName) {
        this._name = newName;
    }

   
}

let person = new Person("Shivanshu", 19);
console.log(person.name);  // Accessing with getter => Shivanshu

person.name = "Ashish";    // Using setter
console.log(person.name);  // Now "Ashish"

// 2. instanceof Operator:
// The instanceof operator is used to check whether an object is an instance of a specific class or constructor function.

// Syntax:
// object instanceof Constructor

// It checks if the prototype property of the constructor is found in the prototype chain of the object.
// Returns true if the object is an instance of the specified class; otherwise, false.


class Animal {}
class Dog extends Animal {}

let dog = new Dog();
console.log(dog instanceof Dog);     // true
console.log(dog instanceof Animal);  // true (because Dog is a subclass of Animal)
console.log(dog instanceof Object);  // true (all objects are instances of Object)
console.log(dog instanceof Array);   // false (Dog is not an instance of Array)
