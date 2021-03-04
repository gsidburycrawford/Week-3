
// To Do List
// Let's create a simple to do application 

// Show an unordered list of to do's 
// Show an input to enter a new to do 
// Show a button to add a to  do. When the button is clicked: 
// The text from the input box is used to add a list item to the bottom of the list 
// The text from the input box is cleared out.
// When the user clicks on a list item, it is removed

// Extra Credit: - When a list item is clicked, cross it out, then remove it after 1 second.
// **Submit: A link to your github repo for the project as well as screenshots of the project working in the browser


let taskList = document.querySelector('#tasks'); // This is our unorderered list of tasks
let newTask = document.querySelector('button'); // This is the submit button for adding a new class


/*
 When an item in the taskList is clicked, the event function targets the child 
object of the list, and removes it.
*/
taskList.addEventListener('click', function(event){
    event.target.remove();
});



newTask.addEventListener('click', function(event){
    // We declare a new list object
    var li = document.createElement('li'); 
	
    // We set the value of the list object to the text in the input box
    li.innerHTML = document.querySelector('input').value;

    // Add the list object to the to-do list.
	taskList.appendChild(li);

    // Remove the text in the input box
    document.querySelector('input').value = null;

});

