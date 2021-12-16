// //constructor function
// function person(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob); 
//         // this.getBirthYear = function(){
//         //     return this.dob.getFullYear();
//         // }
//         // this.getFullName = function(){
//         //     return `${firstName} ${lastName}`;
//         // }
// }
// person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear(); 
// }
// person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`; 
// }

// same above
class person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob); 
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`; 
    }
} 

const person1 = new person('John', 'Doe', '5-22-1983');
const person2 = new person('Mike', 'Smith', '7-22-1986');

// console.log(person1.dob.getFullYear());
console.log(person1.getFullName());
console.log(person1.getBirthYear());
console.log(person2);