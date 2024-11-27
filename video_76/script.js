// Opps in js 

class jobApplication {

    apply(namee, id){
        this.namee = namee
        this.id = id 
    }

    submit(){
        confirm("Are you sure , you want to submit your form ")
        console.log(`${this.namee} form is submitted successfully `)
    }

    cancel(){
        alert("I am cancelling mhy job application form ")
        console.log(`${this.namee} your form is cancelled and your reference id is ${this.id}`)
    }
}

// creating object 
let obj = new jobApplication ()
// The new keyword is used to create instances of a class or constructor function in JavaScript.
// It allows you to initialize and use the properties and methods defined in the class or constructor.
obj.apply("Shivanshu" , 1111)
obj.submit()

// creating another object 
let obj2 = new jobApplication ()
obj2.apply("Dikshit", "09875")
obj2.submit()
obj2.cancel()