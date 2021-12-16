
const todos = [
    {
        id: 1,
        text: 'Bus',
        isComplete: true
    },
    {
        id: 2,
        text: 'train',
        isComplete: true
    },
    {
        id: 3,
        text: 'car',
        inComplete: false
    },
];

//forEach, map, fitter
    
    const todoCompleted = todos.filter(function(todo){
                            return todo.isComplete === true;
                            }).map(function(todo){
                                return todo.text;
                            });
     console.log(todoCompleted);

    // const todoText = todos.map(function(todo){
    //     return todo.text;
    // });
    //  console.log(todoText);

    // todos.forEach(function(todo){
    //     console.log(todo.id);
    // })



// for (let todo of todos){
//     console.log(todo.id);
// }

// for(let i=0; i < todos.length; i++){
//     console.log(todos[i].text);
// }

// console.log(todos[1].text, todos[1].id);

// // For loop:
// for(let i=0; i < 6; i++){
//     console.log(`For loop number ${i}`);
// }
//While loop:
// let i=0;
// while(i < 5){
//     console.log(`While loop number ${i}`);
//     i++;
// }

// const todoJSON = JSON.stringify(todos)
// console.log(todoJSON);