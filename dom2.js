// Click buttons to hide or show a text
document.getElementById('hider').onclick = function(){
    document.getElementById('text').hidden=true;
}
document.getElementById('shower').onclick = function(){
    document.getElementById('text').hidden = false;
}


// class Menu {
//     handleEvent(event) {
//       switch(event.type) {
//         case 'mousedown':
//           elem3.innerHTML = "Mouse button pressed";
//           break;
//         case 'mouseup':
//           elem3.innerHTML += "...and released.";
//           break;
//       }
//     }
// }
//   let menu = new Menu();
//   elem3.addEventListener('mousedown', menu);
//   elem3.addEventListener('mouseup', menu);


// //Count Rabbits
// function countRabbits(){
//     for (i = 1; i <= 3; i++){
//         alert("Rabbits number " + i);
//     }
// }

// testAA.onclick = function(){
//     alert('Thank you');
// }

// //addEvenListener
// function handler1() {
//     alert('Thanks!');
//   };
// function handler2() {
//     alert('Thanks again!');
//   }
// elem.onclick = () => alert("Hello");
// elem.addEventListener("click", handler1);
// elem.addEventListener("click", handler2);


// const body = document.querySelector('body');
// const newPara = document.createElement('p');
// newPara.innerText = 'This paragraph is inserted by DOM';
// newPara.style.background = 'red';
// body.appendChild(newPara);

// var newDiv = document.createElement('div');
// //Add class
// newDiv.className = 'Hello';
// //Add id
// newDiv.id = 'World';
// //Add attr
// newDiv.setAttribute('title', 'I am Van');

// // add text node
// var newDivText = document.createTextNode('Good morning');
// // add text to div
// newDiv.appendChild(newDivText);
// // console.log(newDiv);
// var container1 = document.querySelector('header .container');
// var new_h1 = document.querySelector('header h1');
// //insert div 
// container1.insertBefore(newDiv, new_h1).style.color = 'orange';
// newDiv.style.fontSize = '40px';


//ParentNodes:
// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.background = 'lightblue';

// console.log(itemList.parentNode.parentNode);

// var itemList = document.querySelector('#items');
// console.log(itemList.parentElement);
// itemList.parentElement.style.background = 'lightblue';
// var itemList = document.querySelector('#items');
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.children[2].textContent = 'Hello2';
// itemList.children[1].style.color = 'blue';
// itemList.children[1].style.color = 'blue';
// itemList.firstElementChild.textContent = 'Hello1';

// console.log(itemList.nextElementSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'red';


// console.log(document.URL);
// // console.log(document.all[9]);
// // change header content
// document.all[9].textContent = 'Hello';
// console.log(document.images);
// console.log(document.form[0]);
// console.log(document.getElementById('main-header'));
// var headerTitle = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'List Items';
// headerTitle.innerHTML = '<h2> Hello world</h2>';
// headerTitle.style.border='2px solid yellow';

// var items1 = document.getElementsByClassName('list-group-item');
// console.log(items1);
// items1[1].textContent = 'Orange';
// for(i = 0; i < items1.length; i++){
//     items1[i].style.background = 'lightblue';
//    }

// var li = document.getElementsByTagName('li');
// console.log(li);
// li[2].style.backgroundColor = 'orange';

// var item2 = document.querySelector('.list-group-item');
// item2.style.color = 'red';
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'yellow';

// var input = document.querySelector('input');
// input.value = 'how are you ?';
// var submit1 = document.querySelector('input[type=submit]');
// submit1.value = "SEND";

// var titles = document.querySelectorAll('.title')
// console.log(titles);

// var odd = document.querySelectorAll('li:nth-child(odd)')
// var even = document.querySelectorAll('li:nth-child(even)')
// console.log(odd);
// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'gray';
//     even[i].style.backgroundColor = 'yellow';
// }
