
let string = "";
let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      try {
        string = eval(string); 
        document.querySelector(".input").value = string;
      } catch (error) {
        document.querySelector(".input").value = "Error"; 
      }
    } else if (e.target.innerHTML == "C" || e.target.innerHTML == "CLEAR") {
      string = ""; // Clear the input
      document.querySelector(".input").value = string;
    } else {
      string = string + e.target.innerHTML; // Append the clicked button's value to the string
      document.querySelector(".input").value = string;
    }
  });
});
