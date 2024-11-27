// NOTE:
// 1) If no constructor is defined in the derived class, the base class constructor is called automatically.
// 2) If we define a constructor in the derived class, we must explicitly call the base class constructor using `super()`.
// 3) Method overriding allows a derived class to provide a specific implementation of a method already defined in its base 
// class.
// 4) A class can have only one constructor 
class Animal {
    // Constructor 
        constructor(namee){
        this.namee = namee
    console.log(`You choose ${this.namee} as your animal `)
        }
    
    // Member function
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
    // In your case, super.constructor() is trying to call the constructor of the parent class,
    // but it should be super() instead (without .constructor()), which is the correct way to call the parent class constructor.
       
   // Single constructor handling multiple cases
   constructor(namee, num = null) {
    // Call the parent class constructor
    super(namee);

    // Additional logic for specific cases
    if (num !== null) {
        this.num = num;
        console.log(`Derived class constructor: Additional parameter num = ${num}`);
    }
}
       
    // member functions 
    type()
        {
            console.log(`${this.namee} give birth to live babies, eggs and feeds them on their body `)
        }
    
    
    }
    // 2nd derived class 
    class Aquatic extends Animal {
        // -----> already having derived class constructor no need 


        // Method Overriding:
    //In JavaScript, method overriding occurs when a method in a derived class has the same name as a method in its base class.
    //When this happens, the method in the derived class replaces the one in the base class for objects created from the derived class.
    
    // This function overriding on base class info function      
    info(){
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
    // using derived class constructor
    let rabbit = new Mammal("rabbit",1)
    rabbit.info()
    rabbit.type()
    
    // creating object of aquatic class
    
    let Blue_whale =  new Aquatic("Blue whale")
    
    Blue_whale.info()
    Blue_whale.type()