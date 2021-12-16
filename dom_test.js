//Single element
// console.log(document.getElementById('categories'));
// console.log(document.querySelector('categories'));
// console.log(document.querySelector('.my-list'));
// console.log(document.querySelectorAll('.my-list'));
// console.log(document.getElementsByClassName('myList'));
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementsByTagName('label'));

const ul = document.querySelector('.myList');
// ul.lastElementChild.remove();
ul.firstElementChild.textContent='changed by DOM';
ul.children[3].innerText="Good morning";
ul.children[5].innerHTML='<h3>Hello<h3>';

//change background button
const btn1 = document.querySelector('.btn');
btn1.style.background = 'yellow';
btn1.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('body').classList.add('bg-dark');
});

//change background button color if we click to button.
const btn2 = document.querySelector('.fix-me');
btn2.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.p-box').style.background='#ccc';
    document.querySelector('.fix-me').style.background = 'green';
    // document.querySelector('body').classList.add('bg-dark');
});