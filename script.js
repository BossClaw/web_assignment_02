// LAB 04 - FUNCTIONS

// HELPERS
function randi(exclusive_max) {
    return Math.floor(Math.random() * exclusive_max)
}

function isValidNumberRegex(input) {
    return /^-?\d{1,3}(,\d{3})*(\.\d+)?$|^-?\d+(\.\d+)?$/.test(input);
}


function update_name_display(output_div, targ_div) {
    // RUNS ON PAGE LOAD, REFRESH AND VALUE UPDATE
    // - When the page is loaded or refreshed, check if a name is saved in **localStorage** and display it.

    let name = localStorage.getItem('display_name');
    let name_str = "Your stored name will appear here!";

    // IF A NAME EXISTS IN STORAGE
    if (name != null) {
        name_str = wrap_name_str_with_mesg(name);
        console.log("GOT STORED NAME[" + name + "]");
        output_div.innerText = `Name ${name} retrieved`;
    }
    else {
        output_div.innerText = 'No name found in storage.';
    }

    targ_div.innerText = name_str
}



function wrap_name_str_with_mesg(name) {
    let hour = new Date().getHours();
    let greeting = "Hello";

    
    // TESTING
    // NOTE - DON'T ADD TO GITHUB WITOUT DISABLING THIS ...again
    // hour = 0;
    // hour = 4;
    // hour = 8;
    // hour = 12;
    // hour = 16;
    // hour = 20;
    // hour = 23;
    // hour = 28;
    // console.log(`HOUR ${hour}`);

    if (hour >= 0 && hour < 3) {
        greeting = "*yawn* [name]...";
    } else if (hour >= 3 && hour < 7) {
        greeting = "...10 more mins please [name]... ";
    } else if (hour >= 7 && hour < 12) {
        greeting = "Top o' the mornin' to ye [name]!";
    } else if (hour >= 12 && hour < 13) {
        greeting = "Lunchtime [name], OM NOM NOM!";
    } else if (hour >= 13 && hour < 17) {
        greeting = "Afternoon [name].";
    } else if (hour >= 17 && hour < 22) {
        greeting = "G'evenin [name].";
    }
    else if (hour >= 22 && hour <= 23) {
        greeting = "Getting late, eh [name]?";
    }
    else {
        greeting = "What planet is this [name] !?";
    }

    return greeting.replace("[name]", name);
}



function do_task(task_id, input_val_1, output_div, name_div) {

    // MAKE RETURN OUTPUT TEXT
    var resText = "";

    // 1. In `script.js`, write the JavaScript to handle user input:
    // [X] Use DOM manipulation to select the input field, buttons, and display area.
    // [ ] When the **"Save Name"** button is clicked, save the user’s input to **localStorage**.
    // [ ] When the page is loaded or refreshed, check if a name is saved in **localStorage** and display it.
    // [ ] When the **"Clear Name"** button is clicked, remove the saved name from **localStorage** and clear the display.


    switch (task_id) {
        case 1:
            // CHECK FOR NULL OR EMPTY
            if (input_val_1 == null || input_val_1.trim() == "") {
                resText = "Please enter a name!";
                break;
            }

            // SAVE
            // When the **"Save Name"** button is clicked, save the user’s input to **localStorage**.
            localStorage.setItem('display_name', input_val_1.trim());

            // UPDATE DISP & USER FEEDBACK
            update_name_display(output_div, name_div);
            resText = 'Name "' + input_val_1.trim() + '" stored';
            break;

        case 2:

            // CLEAR
            localStorage.removeItem('display_name');

            // UPDATE DISP & USER FEEDBACK
            update_name_display(output_div, name_div);
            resText = 'Name cleared';
            break;
    }

    // SET TEXT ON OUTPUT DIV & LOG
    output_div.innerText = resText;

    // LOG IT
    console.log(resText)
}