// // //If you want to see the event that going on the page.
// // monitorEvents(document);
// // //If you donot want to see the event that going on the page.
// // unmonitorEvents(document);
// let ppara = document.querySelector('p');//here we fetch the p tag
// function changetext(event)
// {
//     console.log(event);
//     // let ppara = document.querySelector('p');//here we fetch the p tag
//     ppara.textContent="Radhe Radhe";//here we change the content of p tag.
// }


// ppara.addEventListener('click',changetext);

// // If you want to remove the event listener.

// // ppara.removeEventListener('click',changetext);
// // Selecting the anchor element using its ID 'anchor' and storing it in the 'anchorelement' variable
// let anchorelement = document.querySelector('#anchor');

// // Function to stop the default behavior of the anchor link
// function stopdefault(event) {
//     // Prevents the default behavior of the event (e.g., preventing the page from navigating when the anchor is clicked)
//     event.preventDefault();

//     // Changes the text content of the anchor element to "Click Done"
//     anchorelement.textContent = "Click Done";
// }

// // Adding an event listener to the anchor element to listen for a 'click' event
// // When the anchor element is clicked, the stopdefault function will be called
// anchorelement.addEventListener('click', stopdefault);


// //On whatever we click then para get printed
// let paras = document.querySelectorAll('p');

function tellpara(event){
    alert("You have clicked on the para: "+event.target.textContent);
}
// for(let i = 0; i<paras.length;i++)
// {
//     let para = paras[i];
//     para.addEventListener('click',tellpara);
// }
//above code used to add listener on every para.
//But now we will add listener on the div directly.

let mydiv= document.getElementById('wrapper');
mydiv.addEventListener('click',tellpara);
