document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM to be fully loaded before executing the code.
    
    const display = document.getElementById('snap');
    // Get the HTML element with the id 'snap' and store it in the 'display' variable.
  
    const hosturl = "http://localhost:3009/post";
    // Define the base URL for the API you want to fetch data from.
  
    async function viewPosts() {
      // Define an asynchronous function 'viewPosts' to fetch and display posts.
  
      try {
        // Start a try-catch block to handle potential errors.
        const host = await axios.get(`${hosturl}`);
        // Send an HTTP GET request to the 'hosturl' and store the response in 'host'. 'axios' is presumably a library used for making HTTP requests.
  
        if (host.data.length > 0) {
          // Check if there are posts in the response data.
          display.innerHTML = "";
          // Clear the inner HTML content of the 'display' element.
  
          host.data.forEach(x => {
            // Loop through the data and create HTML elements for each post.
            display.innerHTML += 
            `
            <h3>${x.username}</h3>
            <p>${x.post}</p>
            `
          });
        } else {
          // If no posts are found, display a message.
          display.innerHTML = "No posts found";
        }
      } catch (e) {
        // Handle errors that may occur during the execution of the try block.
        const postsContent = document.getElementById('snap');
        console.error("Error:", e);
        // Log the error to the console.
  
        postsContent.innerHTML = "Error"; e
        // Display an error message in the 'snap' element.
      }
    }
  
    viewPosts();
    // Call the 'viewPosts' function to start fetching and displaying posts.
  });
  