// GLOBAL VARIABLES

// Declare a variable to keep track of whether or not the dropdown menu is open
let dropdownMenuOpen = false;

/* 
Copies the text according to the row in the table.
Changes the color of all the buttons to the default color.
Changes the color of the button that was clicked to the new color. 
*/
function copyText(elementId, buttonId) {

    /* COPY THE TEXT */

    /* Grab the text to copy */
    textToCopy = document.getElementById(elementId).innerHTML;
    /* Create a text area element to house the text to copy */
    const elem = document.createElement('textarea');
    /* Give the new text area a value of the text to copy */
    elem.value = textToCopy;
    /* Select the text area */
    elem.select();
    /* Copy the text inside of the text field to the clipboard */
    navigator.clipboard.writeText(elem.value);


    /* CHANGE THE BUTTON COLOR */

    /* Create a list of all of the buttons to copy */
    listOfButtons = document.getElementsByClassName('copy-button');
    console.log(listOfButtons);

    /* Loop through the list of buttons and change the color to... */
    for (let i = 0; i < listOfButtons.length; i++) {
        console.log(listOfButtons[i]);
        listOfButtons[i].style.backgroundColor = 'red';
    }

    /* Change the color of the button that was clicked to... */
    document.getElementById(buttonId).style.backgroundColor = 'green';

}

/* When the user clicks on the hamburger menu,
toggle between hiding and showing the dropdown content */
function displayOrRemoveDropdown(x) {

    // Toggle the animation
    x.classList.toggle("change");

    // If the dropdown menu is not open...
    if (!dropdownMenuOpen) {
        // Open the menu
        document.getElementById("myDropdown").classList.toggle("show");
        // Change the global variable to true
        dropdownMenuOpen = true;
    }
    // If the menu is open
    else {
        // Grab the menu
        var dropdowns = document.getElementsByClassName("dropdown-content");
        // Loop through each element in the menu and hide it
        for (let i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        // Set the global variable to false
        dropdownMenuOpen = false;
    }
}