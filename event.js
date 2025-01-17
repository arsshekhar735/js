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

let anchorelement = document.querySelector('#anchor');

function stopdefault(event)
{
    event.preventDefault();
    anchorelement.textContent="Click Done";
}
anchorelement.addEventListener('click',stopdefault);