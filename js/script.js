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

    /* Loop through the list of buttons and change the color to... */
    for (let i = 0; i < listOfButtons.length; i++) {
        listOfButtons[i].style.backgroundColor = '#EDC664';
        listOfButtons[i].style.color = 'black';
        
        
    }

    /* Change the color of the button that was clicked to... */
    document.getElementById(buttonId).style.backgroundColor = '#0a5c00';
    document.getElementById(buttonId).style.color = '#696c68';
    

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


/* 
Changes the theme of the web page. Calls the changeStyles fuction according to the theme.
*/
function changeTheme() {

    // Get the pages title
    let pageTitle = document.getElementsByTagName('title')[0].innerHTML;

    // If the page title includes harry potter...
    if (pageTitle.includes('Harry Potter')) {
        // Call the function accordingly
        changeStylesToHarryPotter();
    }
    // else, if the page title includes Halloween
    else if (pageTitle.includes('Halloween')) {
        // Call the function accordingly
        changeStylesToHalloween();
    }

}

/*
Changes the css styles to the halloween styles
*/
function changeStylesToHalloween() {
    console.log(`Setting the CSS styles to the halloween theme.`)
    
    /* BACKGROUND IMAGE */
    document.body.style.backgroundImage = "url('assets/jack-o-lantern.png')";
    document.body.style.backgroundColor = "#602749";

    /* LOAD IN THE NECESSARY FONTS */
    // Title font
    let titleFont = new FontFace('Creepster', 'url(fonts/Creepster-Regular.ttf)');
    titleFont.load().then(function(loaded_face) {
        // loaded_face holds the loaded FontFace
        document.fonts.add(loaded_face);
        // Change the font of the dummy data title 
        document.getElementById('dummy-data-title').style.fontFamily = "'Creepster', cursive";
        // Change the font of the copy buttons
        let listOfButtons = document.getElementsByClassName('copy-button');
        for (let i=0; i < listOfButtons.length; i++) {
            listOfButtons[i].style.fontFamily = "'Creepster', cursive";
        }
    }).catch(function(error) {
        // Error occured
        console.log("An error has occured loading the font");
    });

    // header font
    let headerFont = new FontFace('Sancreek', 'url(fonts/Sancreek-Regular.ttf)');
    headerFont.load().then(function(loaded_face) {
        // loaded_face holds the loaded FontFace
        document.fonts.add(loaded_face);
        // Change the font of the row names
        let listOfNames = document.getElementsByClassName('row-name');
        for (let i=0; i < listOfNames.length; i++) {
            listOfNames[i].style.fontFamily = "'Sancreek', cursive";
        }
    }).catch(function(error) {
        // Error occured
        console.log("An error has occured loading the font");
    });

    /* CHANGE THE COLORS */
    // Dummy title
    document.getElementById('dummy-data-title').style.color = '#ff5800';
    // Body
    document.body.style.backgroundColor = "#602749";
    // Header
    document.getElementById('header').style.backgroundColor = "#602749";
    // Hamburger menu
    let listOfLines = document.getElementsByClassName('hamburger-menu-line');
    for (let i=0; i < listOfLines.length; i++) {
        listOfLines[i].style.backgroundColor = "#ffa500";
    }
    // Buttons
    let listOfButtons = document.getElementsByClassName('copy-button');
        for (let i=0; i < listOfButtons.length; i++) {
            listOfButtons[i].style.backgroundColor = "#ffa500";
        }




    
    

}

/*
Changes the css styles to the harry potter styles
*/
function changeStylesToHarryPotter() {
    console.log(`Setting the CSS styles to the harry potter theme.`)
    /* BACKGROUND IMAGE */
    document.body.style.backgroundImage = "url('assets/hogwarts-crest.png')";

    

}

/*
Called when the user clicks a filter box.
Checks whether or not the box is checked.
If it is checked, it clears the elements according to the id.
If it isn't checked anymore, it makes those elements visible again.
*/
function checkFilter(checkBoxId) {
    console.log("Checking box!");
    // Store the checkbox in a variable.
    const checkBox = document.getElementById(checkBoxId);

    // If the box is checked...
    if (checkBox.checked) {
        
        // Check the id of the box. Call the appropriate function based on the id
        switch(checkBoxId) {
            // If the id is for the name elements...
            case 'checkbox-name':
                // Call the filterOutElements() function with "name-row" as the parameter
                filterOutElements('name-row');
                break;

            // If the id is for the address elements...
            case 'checkbox-address':
                // Call the filterOutElements() function with "address-row" as the parameter
                filterOutElements('address-row');
                break;

        }


    }
    // If it isn't checked...
    else {
        // Check the id of the box. Call the appropriate function based on the id
        switch(checkBoxId) {
            // If the id is for the name elements...
            case 'checkbox-name':
                // Call the filterInElements() function with "name-row" as the parameter
                filterInElements('name-row');
                break;

            // If the id is for the address elements...
            case 'checkbox-address':
                // Call the filterInElements() function with "address-row" as the parameter
                filterInElements('address-row');
                break;
        }

    }
}

/* 
Filters out elements based on the class name
*/
function filterOutElements(className) {
    // Create a list of all the elements on the page with this class name
    let listOfElements = document.getElementsByClassName(className);

    // Loop through the list...
    for (let i=0; i<listOfElements.length; i++) {
        // Set the display of each element to none
        listOfElements[i].style.display = 'none';
    }

}

/* 
Filters in elements based on the class name
*/
function filterInElements(className) {
    // Create a list of all the elements on the page with this class name
    let listOfElements = document.getElementsByClassName(className);

    // Loop through the list...
    for (let i=0; i<listOfElements.length; i++) {
        // Set the display of each element to an empty string, that way, we keep the original display properties
        listOfElements[i].style.display = '';
    }

}

// This code is called when the page loads.

// Call the changeTheme function
changeTheme();


