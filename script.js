
let string = "";
let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerHTML;

        if (value == "=") {
            try {
                string = eval(string).toFixed(2); // Evaluate the expression and limit to 2 decimal places
                document.querySelector('.input').value = string;
            } catch (error) {
                document.querySelector('.input').value = "Error"; // Handle invalid expressions
            }
        } else if (value == 'C' || value == 'CLEAR') {
            string = ""; // Clearing the input
            document.querySelector('.input').value = string;
        } else {
            // Prevent multiple decimals in the current number
            if (value === '.') {
              const lastNumber = string.split(/[\+\-\*\/]/).pop();
              if (lastNumber.includes('.')) {
                  return;
              }
          }
            string = string + value; // Append the clicked button's value to the string
            document.querySelector('.input').value = string;
        }
    });
});


//for further calculations on result, taking result as the value
document.querySelector('.input').addEventListener('input', (e) => {
  string = e.target.value;
});