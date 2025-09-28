// Target the display input field using its new unique ID
let input = document.getElementById('displayBox'); 

// Select all button inputs
let buttons = document.querySelectorAll('input[type="button"]'); 

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        // Use e.target.value instead of e.target.innerHTML for input type="button"
        const buttonValue = e.target.value;

        if (buttonValue == '=') {
            try {
                // Replace % with /100 for percentage calculation before eval
                string = string.replace(/%/g, '/100');
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = ""; // Reset string after error
            }
        } 
        else if (buttonValue == 'AC') {
            string = "";
            input.value = string;
        } 
        else if (buttonValue == 'DEL') {
            string = string.toString().slice(0, -1); // Ensure string is a string
            input.value = string;
        } 
        else if (buttonValue == '%') {
             // Handle % input: allow it, but evaluation will handle its meaning
            string += buttonValue;
            input.value = string;
        }
        else {
            // Append the button's value to the string
            string += buttonValue;
            input.value = string;
        }
    });
});