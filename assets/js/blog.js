// Setup the elements needed
const bodyContainerElement = document.querySelector('.bodyContainer');

const blogEntries = JSON.parse(localStorage.getItem('blogEntries'));

//////
// Execute Code Flow
//////

// Generate a new row for the blog entries
if (blogEntries) {
  generateBlogRow();
} else {
  const pTag = document.createElement('p');
  pTag.textContent = "No Blog Entries Exist Yet.  Please go to the form page, using the back button, to enter blog entries";
  bodyContainerElement.appendChild(pTag);
}
  

//////
// Function Delcaration(s)
//////

function generateBlogRow() {
  for (let i = 0; i < blogEntries.length; i++) {
    // Create the elements need for a row with the values
    const divTag = document.createElement('div');
    divTag.setAttribute('class', 'blogEntry');
    
    const titleTag = document.createElement('p');
    titleTag.textContent = "Blog Title: " + blogEntries[i].title;
    
    const contentTag = document.createElement('span');
    contentTag.textContent = "Content:";
    
    const brTag = document.createElement('br');
    
    const contentTextTag = document.createElement('span');
    contentTextTag.textContent = blogEntries[i].content;
    
    const usernameTag = document.createElement('p');
    usernameTag.textContent = "Posted by: " + blogEntries[i].username;
    
    // Link the new elements to the blog page
    // Linking the children elements to the div tag
    divTag.appendChild(titleTag);
    divTag.appendChild(contentTag);
    divTag.appendChild(brTag);
    divTag.appendChild(contentTextTag);
    divTag.appendChild(usernameTag);
    
    // Linking the div tag to the HTML bodyContainer tag
    bodyContainerElement.appendChild(divTag);
  }
}
