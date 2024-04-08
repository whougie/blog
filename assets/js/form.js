const submitButtonElement = document.querySelector('#submitButton');
const usernameElement = document.querySelector('#username');
const titleElement = document.querySelector('#title');
const contentElement = document.querySelector('#content');

////
// Event listener(s)
////

submitButtonElement.addEventListener('click', handleSubmit);


/////
// Function delcaration(s)
/////

// The submit callback function to handle when the submit button is clicked
function handleSubmit(event) {
  
  // Check to see if all blog values have been set and if not alert the user
  if ( usernameElement.value === "" || titleElement.value === "" || contentElement.value == "") {
    alert("Please fill out all values the for the form and resubmit")
  } else {
    // Retrieve array with blog object(s) from localStorage
    let blogEntries = [ 
      {
        username: usernameElement.value,
        title: titleElement.value,
        content: contentElement.value
      }
    ]
    const blogEntriesFromLocalStorage = localStorage.getItem('blogEntries');
    
    // Save the blog entries to the localStorage
    if (blogEntriesFromLocalStorage) { // Generate blog entries array from the new entry and what's saved in localStorage
      blogEntries = JSON.parse(blogEntriesFromLocalStorage).concat(blogEntries);
      localStorage.setItem('blogEntries', JSON.stringify(blogEntries));
    } else { // This is the only item in the array for blogs so just insert it into localStorage
      localStorage.setItem('blogEntries', JSON.stringify(blogEntries)); 
      console.log("This is what localStorage is " + blogEntriesFromLocalStorage);  
    }
    
    // Navigate to the blog entries page
    location.href="blog.html";
  }
}