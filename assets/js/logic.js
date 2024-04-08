// Generate the toggle element
const toggleButton = document.querySelector("input[name=toggle]");
const styleElement = document.querySelector('style');
const titleTag = document.querySelector('.title');

// Get the store value for the theme light/dark
let isLightTheme = (localStorage.getItem('isLightTheme') === 'true');

//////
//  Execute Code Flow
//////
changeToLightOrDarkTheme();

/////
// Event Listener Delcaration
/////
if ( titleTag.textContent === 'Blog Page') {
  toggleButton.addEventListener('change', (event) => {
    if (event.target.checked) {
      // Change the inline style within the HTML to dark mode
      styleElement.textContent = `html { background-color: black; color: white;}
      .linkExtra { color: white}`;    
      localStorage.setItem('isLightTheme', 'false');
      
    }
    else {// Change the inline style within the HTML to white mode
      styleElement.textContent = `html { background-color: white; color: black;}
      .linkExtra { color: black}`;
      localStorage.setItem('isLightTheme', 'true');
    }
    
  })
}


/////
//  Function Delcarations
/////

function changeToLightOrDarkTheme() {
  console.log("This is the light theme " + isLightTheme);
  if (isLightTheme) { // Change the inline style within the HTML to light mode
    styleElement.textContent = `html { background-color: white; color: black;}
    .linkExtra { color: black}`;
    console.log("In the light theme")
  }
  else {
    // Change the inline style within the HTML to dark mode
    styleElement.textContent = `html { background-color: black; color: white;}
    .linkExtra { color: white}`;
    console.log("In the dark theme")
    if (toggleButton) { // Getting the toggle button in the correct location if at start it's in dark mode
      toggleButton.checked = true;
      
    }
  }
}