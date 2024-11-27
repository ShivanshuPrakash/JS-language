// Callback Hell: The Pyramid of Doom

// Callback Hell refers to a situation where multiple nested callbacks make the code difficult to read, debug, and maintain. 
// This typically occurs when asynchronous operations (e.g., DOM manipulation, API calls, or file I/O) are chained together,
//  each depending on the result of the previous operation.

// The structure of such code resembles a pyramid or staircase, leading to the term "Pyramid of Doom." This happens when 
// callbacks are deeply nested, creating an indentation mess.



// Example of Callback Hell in DOM Manipulation

// Suppose we want to:
// Change the text of a <div> after 1 second.
// Change the background color of the <div> after 2 seconds.
// Add a new <p> tag after 3 seconds.
// // Using traditional callbacks, it might look like this:

                    // HTML Setup
                    // <div id="myDiv">Hello</div>

                    // function changeText(newText, callback) {
                    //     setTimeout(() => {
                    //         const div = document.getElementById('myDiv');
                    //         div.innerText = newText;
                    //         console.log('Text changed to:', newText);
                    //         callback();
                    //     }, 1000);
                    // }

                    // function changeBackgroundColor(color, callback) {
                    //     setTimeout(() => {
                    //         const div = document.getElementById('myDiv');
                    //         div.style.backgroundColor = color;
                    //         console.log('Background color changed to:', color);
                    //         callback();
                    //     }, 2000);
                    // }

                    // function addParagraph(text, callback) {
                    //     setTimeout(() => {
                    //         const div = document.getElementById('myDiv');
                    //         const p = document.createElement('p');
                    //         p.innerText = text;
                    //         div.appendChild(p);
                    //         console.log('Paragraph added:', text);
                    //         if (callback) callback();
                    //     }, 3000);
                    // }

                    // // Callback Hell
                    // changeText('Hello, World!', () => {
                    //     changeBackgroundColor('lightblue', () => {
                    //         addParagraph('This is a new paragraph.', () => {
                    //             console.log('All changes done!');
                    //         });
                    //     });
                    // });


//                     Problems with Callback Hell
// Readability: Nested callbacks create deeply indented, hard-to-read code.
// Scalability: Adding more steps requires further nesting.
// Error Handling: Managing errors across multiple callbacks is difficult.
// Maintenance: Modifying any step requires navigating the entire pyramid structure.


