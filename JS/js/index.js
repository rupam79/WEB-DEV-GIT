//getelementbyid
let button1=document.getElementById('click');
let eclass=document.getElementsByClassName('container');
eclass[0].style.background="yellow";

//eclass[0].classList.add(newclass) 
//button1.innerHTML
//button1.innertext
let newc=document.createElement('p');
newc.innerText="this is created";
eclass[0].appendChild(newc);
let new2=document.createElement('b');
new2.innerText="this is text in bold";
eclass[0].replaceChild(new2,newc);
eclass[0].removeChild(new2);

function clicked(){
    alert("why are you clicking");
}
