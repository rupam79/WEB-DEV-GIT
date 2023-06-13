// const title=document.getElementById('main-head');
// console.log(title);
// const litems=document.getElementsByClassName('list-items');
// console.log(litems);
// //getElementByTagName();
// const con=document.querySelector('div');
// const conall=document.querySelectorAll('div');


const title=document.querySelector('#main-head');
title.style.color='red';

const litems=document.querySelectorAll('.list-items');
for(i=0;i<litems.length;i++){
    litems[i].style.fontSize='1.5rem';
}

const ul=document.querySelector('ul');
const li=document.createElement('li');
ul.append(li);

//modify text

const flist=document.querySelector('.list-items');

// console.log(flist.innerText);
// console.log(flist.innerHTML);
// console.log(flist.textContent);
li.innerText='David Warner';

// //modifying attributes and classes
// li.setAttribute('class','list-items');

// li.removeAttribute('class');
// console.log(li.getAttribute('class'));

li.classList.add('list-items');
// li.classList.remove('list-items');
console.log(li.classList.contains('list-items'));

li.remove();

//DOM trversal

const ull=document.querySelector('ul');
// console.log(ull.parentNode);
// console.log(ull.parentElement);


// const html=document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement);
// //work on nodes
// console.log(ull.childNodes);
// console.log(ull.firstChild);
// console.log(ull.lastChild);
// ull.childNodes[1].style.background='blue';
// //work on elements
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);


//***************Event listeners*************


