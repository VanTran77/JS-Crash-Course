const person = {
    firstName: 'Mike',
    lastName: 'Smith',
    age: 45,
    hobbies: ['movies', 'sports', 'travelling'],
    address: {
        street: 'Kinkelenburg 33',
        city: 'Dordrecht',
        postcode: 2222, 
    }
}

console.log(person);
console.log(person.firstName);
console.log(person.hobbies[1], person.address.postcode);

const {firstName, age, address:{city}} = person;
console.log(firstName, age, city);

person.email = 'mike@test.com'
console.log(person);




// // Array
//     const IT = ['software', 'hardware', 'network'];
//     IT[3] = 'system';
//     IT.push('helpdesk');
//     IT.unshift('security');
//     IT.pop()
//     console.log(IT);
//     console.log(Array.isArray(IT));
//     console.log(IT.indexOf('system'));


// const s = 'software, hardware, system, network, security';
// console.log(s.split(', '));

// const firstName = 'John';
// const age = 30;

// console.log('My name is ' + firstName + ' and I am ' + age);
// const hello = `My name is ${firstName} and I am ${age}`;
// console.log(hello);
// console.log(hello.length);
// console.log(hello.toUpperCase());
// console.log(hello.toLowerCase());
// console.log(hello.substring(11, 15).toUpperCase());
// console.log(hello.split(' '));
