// case 1


const funk =()=>{
    
    try{
        let a =0
        console.log("program run successfull")
        // no error in try and we are returning 
        return
        // means no execution of catch and below that part 
        // but still finally will run 
    }catch(error){
        console.log("This is error")
        console.log(p) // catch itself throwing error 
    
    }
    finally{
       console.log("Jab tak chalega nhi tab tak rukage nhi !!")
        console.log("No matter what i always run #sigma finally ")
    }
    }
    
    // calling arrow function 
    funk()



console.log("CASE_2 is NOW RUNNING >>>>>>>>>.........")

// case:2 when catch having error

try{
    let a =0
    console.log(program) // creating erro
    console.log("program run successfull")
    
}catch(error){
    console.log("This is error")
    console.log(p) // catch itself throwing error 

}
finally{
    console.log("this line execute even if finally keyword is not there then why this")
    console.log("No matter what i always run")
}
