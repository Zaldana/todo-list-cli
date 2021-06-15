// Prompt Sync =========================================================

const prompt = require('prompt-sync')({sigint: true});

// Multiline Bug Fix ===================================================

const multiLinePrompt = ask => {                                                          
    const lines = ask.split(/\r?\n/);                                                     
    const promptLine = lines.pop();                                                       
    console.log(lines.join('\n'));                                                        
    return prompt(promptLine);                                                            
}; 

//Blank action selection
let actionSel = '';

//Empty todo statement
const emptyTodo = "Your to-do list is empty.";

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
if (actionSel !== 3) {

//Empty array if statement
if (array.length === 0) {

//Empty array log
console.log(emptyTodo);

//Else statement to display current To-Dos in array
} else {

    //Array for loop
    for (i = 0; i < array.length; i++) {

//Add incomplete tag to ToDo in array;
console.log(' [Incomplete] ' + array[i]);

    }
}

if (compArray.length === 0) {

    console.log();

} else {

    //Array for loop
    for (i = 0; i < compArray.length; i++) {

//Add incomplete tag to ToDo in array;
console.log(' [Complete] ' + compArray[i]);

    }

}

//Action Selection////////////////////////////
let actionSel = multiLinePrompt("\n\
~ Select an action ~\n\
[1] Create a to-do item\n\
[2] Complete a to-do item\n\
[3] Procrastination is the way! (close program)\n\
\n\
");

//Create a to do item if statement
if (actionSel === "1") {
    
//New ToDo prompt    
    newTodoprompt = multiLinePrompt("\n\
~ Creating a new to-do item ~\n\
What is this to-do item called?\n\
\n\
");

//Push new item into array
    array.push(newTodoprompt);
    console.log();

//Select to complete a to do item
    } if (actionSel === "2") {

        //Amount of current TODOs in array
        console.log("You have", array.length, "to-do items(s)");
       
        //Array for loop
        for (i = 0; i < array.length; i++) {

            //Number label for Todo
            const compNum = i + 1;

            //List of current Todos in array;
            console.log('[' + compNum + '] ' + array[i]);
        
        }

        completeTodoprompt = multiLinePrompt("\n\
which item would you like to complete?\n\
\n\
");

console.log();
    const compNum = Number(completeTodoprompt) - 1;

    // console.log(compNum);  

    const removedItem = array.splice(compNum, 1);

    // console.log(removedItem);

    compArray.push(removedItem);

    }
}