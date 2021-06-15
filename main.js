// Prompt Sync =========================================================

const prompt = require('prompt-sync')({sigint: true});

// Multiline Bug Fix ===================================================

const multiLinePrompt = ask => {                                                          
    const lines = ask.split(/\r?\n/);                                                     
    const promptLine = lines.pop();                                                       
    console.log(lines.join('\n'));                                                        
    return prompt(promptLine);                                                            
}; 

//Empty todo statement
const emptyTodo = "Your to-do list is empty.";

//Empty Action Selection
let actionSel ='';

//ARRAYS///////////////////////////////

//To-Do array
let array = [];

//Complete array
let compArray = [];

//App Welcome//////////////////////////
console.log();
console.log("/$$$$$$$$                            /$$$$$$$   /$$$$$$");
console.log("|__  $$__/                           | $$__  $$ /$$__  $$");
console.log("   | $$  /$$$$$$                     | $$  \\ $$| $$  \\ $$");
console.log("   | $$ /$$__  $$       /$$$$$$      | $$  | $$| $$  | $$");
console.log("   | $$| $$  \\ $$      |______/      | $$  | $$| $$  | $$");
console.log("   | $$| $$  | $$                    | $$  | $$| $$  | $$");
console.log("   | $$|  $$$$$$/                    | $$$$$$$/|  $$$$$$/");
console.log("   |__/ \\______/                     |_______/  \\______/");
console.log("\n\
==========================================================\n\
\n\
      Welcome to the To-Do List Manager Application!\n\
\n\
==========================================================\n\
");

//While loop start/////////////////////
while (actionSel !== "4") {

//Empty array if statement
if (array.length === 0) {

//Empty array log
console.log(emptyTodo);

//Else statement to display current To-Dos in array
} if (array.length > 0) {

    //Array for loop
    for (i = 0; i < array.length; i++) {

//Add incomplete tag to ToDo in array;
console.log(' [Incomplete] ' + array[i]);

    }
}

//If statement to display empty completed TODOs
if (compArray.length === 0) {

    //Space
    console.log();

//If statement to display items in completed TODos array
} if (compArray.length > 0) {

    //compArray FOR loop
    for (i = 0; i < compArray.length; i++) {

//Add complete tag and display completed array;
console.log(' [Complete] ' + compArray[i]);

    }

}

//Action Selection//Option 4 terminates WHile loop//////////////////////////
actionSel = multiLinePrompt("\n\
~ Select an action ~\n\
[1] Create a to-do item.\n\
[2] Complete a to-do item.\n\
[3] Uncomplete a to-do item.\n\
[4] Procrastination is THE WAY (close program).\n\
\n\
");

//ERROR EDGE CASSES///////////////////////////////////////////

//Error if user tries to complete without a to-do item
if (actionSel === '2' && array.length === 0) {

    //Space
    console.log();
    //Error message if user tries to complete without a to-do item
    console.log('ERROR, you do not have to-do items');

}

//Error if user tries to uncomplete without a completed item
if (actionSel === '3' && compArray.length === 0) {
    
    //Space
    console.log();
    //Error message if user tries to uncomplete without a completed item
    console.log('ERROR, you do not have ant completed to-do items');

}

//Create a to do item if user selected option 1
if (actionSel === "1") {
    
//New ToDo prompt    
let newTodoprompt = multiLinePrompt("\n\
~ Creating a new to-do item ~\n\
What is this to-do item called?\n\
\n\
");

//Push new item into array
    array.push(newTodoprompt);
    console.log();

//Complete a to do item if user selects option 2
    } if (actionSel === "2" && array.length > 0) {

        //Space
        console.log();
        //Amount of current TODOs in array
        console.log("You have", array.length, "to-do items(s)");
       
        //Array for loop
        for (i = 0; i < array.length; i++) {

            //Number label for Todo
            const compNum = i + 1;

            //List of current Todos in array;
            console.log('[' + compNum + '] ' + array[i]);
        
        }

        //Prompt for user to select incomplete item
        completeTodoprompt = multiLinePrompt("\n\
which item would you like to complete?\n\
\n\
");

//Matching selected number to Index number
console.log();
    const compNum = Number(completeTodoprompt) - 1;

    //Remove and hold ToDO item from array using SPLICE
    const removedItem = array.splice(compNum, 1);

    //PUSH removed item into completed array
    compArray.push(removedItem);

    }

    //If statement if user wants to uncomplete item, option 3
    if (actionSel === '3' && compArray.length > 0) {
    
    //Space    
    console.log();
    
    //Amount of current TODOs in array
     console.log("You have", compArray.length, "completed items(s)");
       
     //compArray for loop
     for (i = 0; i < compArray.length; i++) {

         //Number label for completed Todos
         const uncompNum = i + 1;

         //Display list of current Todos in array with number label
         console.log('[' + uncompNum + '] ' + compArray[i]);
     
     }
   
//Prompt for user to select which item to uncomplete
uncompleteTodoprompt = multiLinePrompt("\n\
which item would you like to uncomplete?\n\
\n\
");
    //Space
    console.log();
    //Match user selection with index number
    const uncompNum = Number(uncompleteTodoprompt) - 1;

    //Remove and hold ToDO item from compArray using SPLICE  
    const removedComitem = compArray.splice(uncompNum, 1);

    //PUSH removed item back into Incomplete array
    array.push(removedComitem);

    }

}