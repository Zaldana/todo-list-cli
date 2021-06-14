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
let currentTodo = "Your to-do list is empty.";


//App Welcome
console.log(
"\n\
Welcome to the To-Do List Manager Application!\n\
\n\
=============================================");

//Current TO DOS
console.log(currentTodo);

//Action Selection
let actionSel = multiLinePrompt("\n\
~ Select an action ~\n\
[1] Create a to-do item\n\
[2] Complete a to-do item");

// Create a to do item
if (actionSel === "1") {
    
    newTodoprompt = multiLinePrompt("\n\
~ Creating a new to-do item ~\n\
What is this to-do item called?");

    newTodo = newTodoprompt

// Complete a todo item    
} if (actionSel === "2") {

    let checkPrompt = multiLinePrompt("\n\
\n\
You have 1 to-do item(s).\n\
1. [incomplete] Go to the dentist\n\
\n\
~ Select an action ~\n\
[1] Create a to-do item\n\
[2] Complete a to-do item")
    
}
