// your code here
const urlForm = document.getElementById("urlForm");
        const urlElement = document.getElementById("url");

        // Add a submit event listener to the form
        urlForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting

            // Get the values from the input fields
            const name = document.getElementById("name").value;
            const year = document.getElementById("year").value;

            // Construct the query string
            const queryString = `?name=${name}&year=${year}`;

            // Update the text in the h3 element with the updated URL
            urlElement.textContent = `https://localhost:8080/${queryString}`;
        });