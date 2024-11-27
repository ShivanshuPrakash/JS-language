// objects
var mydog = {
    "Name" : "Husky",
    "legs" : 4,
    "tail" : 2,
    "bread" : ["desi"],
};

// assessing object properties with 
// dot Notation 

var Pronountation  = mydog.Name;
var pravarti = mydog.bread;
console.log(Pronountation);
console.log(pravarti);

// Accessing Object properties with bracket Notation

 var puch = mydog["tail"];
 var late = mydog["legs"];
 console.log(puch);
 console.log(late);

//  assessing object properties with variables

var goodName = "Name";
var sigma = mydog[goodName];
console.log(goodName);  //output Name
console.log(sigma);     // output husky


// Updating object properties 
 
var testobj = {
    "Name" : 'Shivanshu',
    "card" : 'ACE',
    "FavNum" : ['18'],
     "Profession" : 'Coder',
    }

    testobj.Profession = "Gennius Coder";

    var updated = testobj.Profession;
    console.log(updated);

    // Add new properties to an object
    testobj["Post"]= "CEO";  // now above object have 5 sub quantities
    console.log(testobj.Post);
    // delete properties from object
    delete testobj.Post;
    console.log(testobj.Post);   
    
    // using objects for lookups
     function lookup(value){
        var result ;
     
    var btec = {
        "computer science" : "Easy Peasy",
        "Information technology": "Easy",
        "Electronics": "Moderate",
        "Electricla and communication" : "Hard",  
    };
    result = btec[value];
    return result;
}
console.log(lookup("Information technology"));

// testing objects for properties 
var object = {
    "gift" : "din-dong",
    "surprise" : "lambo",
    "shock" : "7 core",
    "dalla": "Aditya",
};
function checkobj(checkprop){
    if(object.hasOwnProperty(checkprop)){
    return object[checkprop];
    }
    else{
        return "Not found"
    }
    
}
console.log(checkobj("hello"));

// manupulating complex Object

var MyMusic = [
    {
    "artist" : "billy elish",
    "title"  : "Piano Man",
    "Release_Year" : 1973,
    "formats" : ["CD",
                 "GT",
                 "8T",
    ],
    "gold" : true 
},
{
    "artist" : "Beau carnes",
    "title"  : "cereal man",
    "release_year" :  2003,
    "formats" : [
        "You tube video",
        " discord derver",
        " linked tree",
    ]
}
]  
// nested objects
var storage = {
    "car" : {
        "inside" : {
        "glove box" : "maps",
        "passenger seat" : "crumbs"
    },
    "outside" : {
        "trunk" : "jack"
    }
}
};
 var box = storage.car.inside;
 var box_contents = storage.car.inside["glove box"];
var hehe = storage.car; 


 console.log(box);
 console.log(box_contents);
 console.log(hehe);

//  accessing nested arrays

var nested = [
    {
        types: "flowers",
        list : [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        types : "trees",
        list : [
            "fir",
            "pine",
            "birch"
        ]
    }
];

 var wasted = nested[1].list[1];
 var mast = nested[1];

 console.log(wasted);
console.log(mast);

// Prevent Object Mutation  by using object freez
function frzobj(){
    "use strict";
    const MATH_CONSTANT = {
        PI : 3.14
    };
    object.freeze(MATH_CONSTANT);
    try {
        MATH_CONSTANT.PI=99;
    }    catch (ex){
        console.log(ex);
    }
  return MATH_CONSTANT.PI;
}
const PI = frzobj();


// use of destructing assignment to asign variables from object 
