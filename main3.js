
function checkEven(num){
    if(num % 2 == 0) {
        console.log('This is Even number');
    } else {
        console.log('This is Odd number');
    };
}
checkEven(101);



function addNums(num1 = 2, num2 = 1){
    return num1 + num2;
}
// same above
const addNums = (num1 =2, num2 = 1) => num1 + num2;

console.log(addNums(5,5));

// Switch
    const color = 'green';
    switch(color){
        case 'red':
            console.log('color is red');
            break;
        case 'blue':
            console.log('color is blue');
            break;
        default:
            console.log('color is not red or blue');
            break;
    }
// if else conditional
const x = 9;
if (x === 10){
    console.log('x is 10');
} else if(x > 10){
    console.log('x is greater than 10');
}else{
    console.log('x is less than 10');
}
   