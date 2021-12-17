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

var odd = document.querySelectorAll('li:nth-child(odd)')
var even = document.querySelectorAll('li:nth-child(even)')
console.log(odd);
for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'gray';
    even[i].style.backgroundColor = 'lightyellow';
}
