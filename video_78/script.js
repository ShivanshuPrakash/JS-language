class Base {
    // By default all functions in js are public unless we explicitelymake them private 
    info(){
        console.log("This is base class function only base class object can inherit and also derived class object ")
    }
    category(){
        console.log("I am base class object ")
    }
    // usinh `#` can makes private functions
#notInheritable(){
console.log("              I am private function in class base i cant be inheritable by any derived class ")
    }

    demoPrivate(){
        this.#notInheritable(); 
    }
}

class Derived extends Base {

    // extend keyword is used for inheritance of class 
    // Derived class cannot access private members of the Base class (if any were defined).
    type(){
        console.log("Hey i am derived class object and i have all properties of Base class")
        }
    power(){
        console.log("See i can use category function of base class ")
    }
}
// creatinhg object 
let obj = new Base()
obj.info()
obj.category()
// obj.#notInheritable()     ---------> cant be accessed outside the class  as private member function 
obj.demoPrivate()


let obj_2 = new Derived()
obj_2.type()
obj_2.info()
obj_2.power()

