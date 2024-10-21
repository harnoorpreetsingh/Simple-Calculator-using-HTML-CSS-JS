let string = "0"; // Initialize with "0"
let buttons = document.querySelectorAll(".btn");

// Set the default value of the input field to "0"
document.querySelector('.input').value = string;

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
            string = "0"; // Reset to "0" instead of empty
            document.querySelector('.input').value = string;
        } else {
            // Prevent multiple decimals in the current number
            if (value === '.') {
                const lastNumber = string.split(/[\+\-\*\/]/).pop();
                if (lastNumber.includes('.')) {
                    return;
                }
            }

            // Prevent multiple consecutive operators or invalid sequences
            const operators = ['+', '-', '*', '/', '%'];
            if (operators.includes(value) && (operators.includes(string.slice(-1)) || string.slice(-1) === '.')) {
                return;
            }

            // Allow leading zero if followed by a decimal point
            if (value === '0' && string === "0") {
                return;
            }

            // Replace initial "0" with the new value unless it's a decimal point
            if (string === "0" && value !== '.') {
                string = value;
            } else {
                string += value; // Append the clicked button's value to the string
            }

            document.querySelector('.input').value = string;
        }
    });
});

// Update the input field with the result and allow further calculations
document.querySelector('.input').addEventListener('input', (e) => {
    string = e.target.value;
    if (string === "") {
        string = "0"; // Ensure at least one "0" is present
        document.querySelector('.input').value = string;
    }
});
