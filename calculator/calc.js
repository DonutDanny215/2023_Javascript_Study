// Setup Access to HTML Elements
const buttons= document.querySelectorAll('button');
const display = document.querySelector('.display');

// Add listeners to all buttons
buttons.forEach(
  function (button){
      button.addEventListener("click", calculate);
  }
);

// Calculate Function - Event Handler for all buttons.
function calculate(event){
    //What button was clicked?
    const clickedValue = event.target.value;

    // Check if = Sign was clicked
    if(clickedValue === "="){
        //is the display empty?
        if(display.value !== ""){
            //Display the value in the top of the calculator
            display.value = eval(display.value);
        }
    }else if (clickedValue === "C") {
        //Clear the display
        display.value = "";
    }else{
    //Concatenate the clicked value to the display
    display.value += clickedValue;
    }
}