// //If you want to see the event that going on the page.
// monitorEvents(document);
// //If you donot want to see the event that going on the page.
// unmonitorEvents(document);
let ppara = document.querySelector('p');//here we fetch the p tag
function changetext(event)
{
    console.log(event);
    // let ppara = document.querySelector('p');//here we fetch the p tag
    ppara.textContent="Radhe Radhe";//here we change the content of p tag.
}


ppara.addEventListener('click',changetext);

// If you want to remove the event listener.

// ppara.removeEventListener('click',changetext);
// Selecting the anchor element using its ID 'anchor' and storing it in the 'anchorelement' variable
let anchorelement = document.querySelector('#anchor');

// Function to stop the default behavior of the anchor link
function stopdefault(event) {
    // Prevents the default behavior of the event (e.g., preventing the page from navigating when the anchor is clicked)
    event.preventDefault();

    // Changes the text content of the anchor element to "Click Done"
    anchorelement.textContent = "Click Done";
}

// Adding an event listener to the anchor element to listen for a 'click' event
// When the anchor element is clicked, the stopdefault function will be called
anchorelement.addEventListener('click', stopdefault);
