//Get a single node
let el = document.getElementById('username');

//Get all inputs
let inputs = document.getElementsByTagName('head');
let inError = document.getElementsByClassName('error');

console.log(inputs.length); //2
console.log(inError.length); //1

//Get all inputs
let firstButton = document.querySelector('button');
let inError = document.querySelectorAll('input.error');

console.log(firstButton); //single button node
console.log(inError); //Node list of inputs with class 'error'

let links = document.querySelectorAll('a');
let arrayOfLinks = Array.from(links);

let listItems = document.querySelector('ul').children;
console.log(listItems.length); //2