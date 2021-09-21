/* 
Copies the text according to the row in the table.
Changes the color of all the buttons to the default color.
Changes the color of the button that was clicked to the new color. 
*/
function copyText(elementId, buttonId) {
    console.log("Copying text!");

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