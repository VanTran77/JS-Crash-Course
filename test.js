var a = 1; 
var b = 10;

var arr = [1, 2, 3, 4, 5];

var a = a + b++;

console.log(a, b);

var a = a +2

console.log(a, b);
console.log(arr.length);
arr[2] = 9;
console.log(arr); 

function checkEven(num){
    if(num % 2 == 0) {
        console.log('This is Even number');
    } else {
        console.log('This is Odd number');
    };
}
checkEven(101);