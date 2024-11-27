

// Opps in js 

class jobApplication {

    // apply(namee, id){
    //     this.namee = namee
    //     this.id = id 
    // } -----------------------------------> INsted this we use constructor 

    // Declaring constructor 
    
    constructor( namee , id ){
        console.log("Constructor is called ")
        this.namee =  namee
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
let obj = new jobApplication ("Shivanshu" , 1111)

obj.submit()

// creating another object 
let obj2 = new jobApplication ("Dikshit", "09875")

obj2.submit()
obj2.cancel()