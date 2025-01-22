// in thisa we will add the 100para in body using js.
// for that we will write the code in method
//code 1
const t1 = performance.now();
for(let i = 0; i < 100; i++)
{
    let para = document.createElement('p');//here p created
    para.textContent = "This is para" + i;//p value inseterd
    document.body.appendChild(para);//here p added into html body as child of the body tag. 
}
const t2 = performance.now();
console.log("total time taken is :" + (t2-t1)); 

//code 2
const t3 = performance.now();
let mydiv=document.createElement('div');
for(let i = 1; i < 100; i++)
{
    let para = document.createElement('p');
    para.textContent="This is para" + i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);
const t4 = performance.now();
console.log("total time taken by code is :" + (t4-t3));

//best code
const t5 = performance.now();
let fragment = document.createDocumentFragment();

for(let i = 0; i < 100; i++)
{
    let para = document.createElement('p');
    para.textContent = "This is para" + i;
    //No reflow and repaint
    fragment.appendChild(para);
}
   //1 reflow and 1 repaint
document.body.appendChild(fragment);
const t6 = performance.now();
console.log("total time taken by best code is :" + (t6-t5));