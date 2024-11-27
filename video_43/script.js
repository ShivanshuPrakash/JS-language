let a  = document.getElementsByTagName('div')[0]
a.innerHTML = a.innerHTML + '<h1> I am inserted later 1st </h1>'


//2nd way
 let d = document.createElement('div');
d.innerHTML ='<h2> i an 2nd insertion </h2> '
a.appendChild(d);

// apend will add at end 

//d.prepend ---> become 1st child or comes before it 


//  d.before -->  node sa phele bhar

//  d.after ----->  baad ma node ke  



// d.replaceWith  ->   changes / replaces it  