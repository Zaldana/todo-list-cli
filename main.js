// Prompt Sync =========================================================

const prompt = require('prompt-sync')({sigint: true});

// Multiline Bug Fix ===================================================

const multiLinePrompt = ask => {                                                          
    const lines = ask.split(/\r?\n/);                                                     
    const promptLine = lines.pop();                                                       
    console.log(lines.join('\n'));                                                        
    return prompt(promptLine);                                                            
}; 

// Statement definiition
let createTodo = '';
let completeTodo = '';
let isTodocomplete = 'true';
let actionSel = '';
let toDosoutput ='';
const emptyTodo = "Your to-do list is empty.";

//App Welcome
console.log(
"\n\
Welcome to the To-Do List Manager Application!\n\
\n\
=============================================");

//todo array
let array = [];
//complete array
let compArray = [];

while (actionSel !== 3) {

// log out to do array
if (array.length === 0) {
    
console.log(emptyTodo);

} else {

    for (i = 0; i < array.length; i++) {

        //toDosoutput = array[i];
console.log([i + 1] + ' [Incomplete] ' + array[i]);

    }
}

//Action Selection
actionSel = multiLinePrompt("\n\
~ Select an action ~\n\
[1] Create a to-do item\n\
[2] Complete a to-do item\n\
[3]\n\
\n\
");

// Create a to do item
if (actionSel === "1") {
    
    newTodoprompt = multiLinePrompt("\n\
~ Creating a new to-do item ~\n\
What is this to-do item called?\n\
\n\
");

    console.log(array.push(newTodoprompt));

    } if (actionSel === "2") {

        console.log("You have", array.length, "to-do items(s)");
       
        for (i = 0; i < array.length; i++) {

            console.log(array[i]);
        
        }

        completeTodoprompt = multiLinePrompt("\n\
which item would you like to complete?");



    // for (let toDos of array) {

    //     toDosoutput += toDos;
    //     console.log("~ Select an action ~");
    //     console.log(toDosoutput);
    // }
    }
}