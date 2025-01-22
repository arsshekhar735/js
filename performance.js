// Code 1: Adding 100 paragraphs directly to the body in each iteration
// This method involves creating each paragraph and immediately appending it to the body.
// Although simple, this method can be inefficient for larger numbers of elements due to frequent reflows and repaints.

// Start measuring time for Code 1
const t1 = performance.now();

// Loop to create and append 100 paragraphs directly to the body
for (let i = 0; i < 100; i++) {
    // Create a new paragraph element
    let para = document.createElement('p');
    
    // Set the text content of the paragraph to "This is para" followed by the index
    para.textContent = "This is para " + i;

    // Append the paragraph to the body of the document
    // Each append operation causes a reflow and repaint
    document.body.appendChild(para);
}

// End measuring time for Code 1
const t2 = performance.now();
console.log("Total time taken by Code 1 is: " + (t2 - t1)); 

// Code 2: Creating a div and appending paragraphs to it before appending the div to the body
// In this method, we first create a parent div and add all paragraphs to it, then append the div to the body all at once.
// This is slightly more efficient than Code 1 since it minimizes the number of reflows and repaints.

const t3 = performance.now();

// Create a new div element to hold all the paragraphs
let mydiv = document.createElement('div');

// Loop to create 100 paragraphs
for (let i = 1; i < 100; i++) {
    // Create a new paragraph element
    let para = document.createElement('p');
    
    // Set the text content for the paragraph
    para.textContent = "This is para " + i;

    // Append each paragraph to the div (no reflow/repaint yet)
    mydiv.appendChild(para);
}

// After the loop, append the div (containing all paragraphs) to the body at once
document.body.appendChild(mydiv);

// End measuring time for Code 2
const t4 = performance.now();
console.log("Total time taken by Code 2 is: " + (t4 - t3));

// Best Code: Using a DocumentFragment for optimal performance
// This method is the most efficient because it avoids multiple reflows and repaints.
// The DocumentFragment is a lightweight container for DOM elements, and appending to it doesn't trigger reflows/repaints until it's added to the document.

const t5 = performance.now();

// Create a new DocumentFragment to hold the paragraphs
let fragment = document.createDocumentFragment();

// Loop to create 100 paragraphs
for (let i = 0; i < 100; i++) {
    // Create a new paragraph element
    let para = document.createElement('p');
    
    // Set the text content for the paragraph
    para.textContent = "This is para " + i;

    // Append the paragraph to the fragment (no reflow/repaint occurs)
    fragment.appendChild(para);
}

// Once all paragraphs are added to the fragment, append the entire fragment to the body
// This triggers only 1 reflow and 1 repaint, making it more efficient
document.body.appendChild(fragment);

// End measuring time for the Best Code
const t6 = performance.now();
console.log("Total time taken by Best Code is: " + (t6 - t5));
