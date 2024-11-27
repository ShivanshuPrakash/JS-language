// Creating an object `a` with properties and a method


let a = {
    name2: "shivanshu", 
    language: "Java-script", 
    run: ()=>{ // Method: `run` is defined inside `a`
        alert("self run"); // When called, it alerts "self run"
    }
}

// Logs the object `a` to the console, including its properties and methods.
// You can also inspect its prototype in the browser console.
console.log(a);

// Creating another object `p` with its own `run` method
let p = {
    run: ()=> {
        alert("outer- run"); // When called, it alerts "outer-run"
    }
}

// Setting a prototype chain for `p`
// `p.__proto__` now points to an object containing a property `name1`
p.__proto__ = {
    name1: "Shourya" // Adds a `name1` property to the prototype of `p`
}

// Setting `p` as the prototype of `a`
// This establishes prototypal inheritance, so `a` can now access properties and methods in `p` and its prototype.
a.__proto__ = p;

// Calling the `run` method on `a`
// Explanation:
// - First, JavaScript checks if `run` exists on `a`. It finds `run` in `a` itself (alerts "self run").
// - If `run` wasn't in `a`, it would check the prototype (`p`) for the `run` method.
a.run();

// Accessing `name1` on `a`
// Explanation:
// - `name1` is not defined directly in `a`.
// - JavaScript looks at `a.__proto__`, which is `p`, and further up to `p.__proto__`, where it finds `name1`.
// The console will log: "Shourya"
console.log(a.name1);
