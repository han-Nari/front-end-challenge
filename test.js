// function personName() {
//     const person = [
//         {
//             name: 'Felix',
//             age: 26,
//             gender: 'Male'
//         },
//         {
//             name: 'Leki',
//             age: 20,
//             gender: 'Male'
//         },
//         {
//             name: 'Lekioe',
//             age: 23,
//             gender: 'Male'
//         },
//     ]
//     let txt = '';
//     let filteredName = person.filter(({name}) => name === 'Leki');

//     filteredName.forEach(({name, age, gender}) => {
//         txt += `Your name is ${name}, your age is ${age} and your gender is ${gender} <br>`;
//     });

//     return document.getElementById('demo').innerHTML = txt;
// }

// personName();



const todoForm = document.querySelector('form');
const input = document.getElementById('input');
const add = document.getElementById('add');
const arr = [];

todoForm.addEventListener('submit', (e) => {
    alert('submitted');
});











