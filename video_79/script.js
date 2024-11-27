// Overriding in java script 


// Base class 
class Animal {
// Constructor 
    constructor(namee){
    this.namee = namee
console.log(`You choose ${this.namee} as your animal `)
    }

// Member function of base class 
    info(){
        console.log("This is an amimal which live on land ")
    }

    category(){
        console.log(`${this.namee} is a Domestic Animal you can tame it `)
    }
}

// inherit Animal class 
class Mammal extends Animal{
    // calling Parent class constructor 




// The super() Keyword:
// The super keyword allows access to the parent class's methods and constructor.
 
// Calling Parent class constructor 
constructor(namee){
        super(namee)
    }

// member functions 
type()
    {
        console.log(`${this.namee} give birth to live babies, eggs and feeds them on their body `)
    }


}
// 2nd derived class 
class Aquatic extends Animal {
    // calling Parent class constructor 
    constructor(namee){
        super(namee)  
    }




    // Method Overriding:
//In JavaScript, method overriding occurs when a method in a derived class has the same name as a method in its base class.
//When this happens, the method in the derived class replaces the one in the base class for objects created from the derived class.

// This function overriding on base class info function      
info(){ //-------->Method overriding can be done just by redefining it in derived class 
        console.log("This type of animals live on water ")
        }

    type(){
        console.log(`Some of then give birth to live babies, eggs and feeds them on their body `)

    }
}

// creating object 

let Dog = new Animal("Dog")
Dog.category()
Dog.info()

// creating object of mammal class 
let Elephant = new Mammal("Elephant")

Elephant.info()
Elephant.category()
Elephant.type()

// creating object of aquatic class

let Blue_whale =  new Aquatic("Blue whale")

Blue_whale.info()
Blue_whale.type()