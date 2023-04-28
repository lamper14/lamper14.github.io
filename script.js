// Define global variables for the search input and results container
const searchInput = document.getElementById("search-location");
const searchResultsContainer = document.getElementById("search-results-container");

// Define event listeners for the search button and the "Sort By" dropdown
document.getElementById("search-button").addEventListener("click", searchEvents);
document.getElementById("sort-by").addEventListener("change", searchEvents);

// Define a function to search for events based on the user's input
function searchEvents() {
        const location = searchInput.value;
        const searchType = document.getElementById("search-type").value;

        // Make a request to the Polisen API using the user's location input and search type
        // ...

        // Sort the results by the selected sort option
        const sortBy = document.getElementById("sort-by").value;
        results.sort((a, b) => {
            if (sortBy === "type") {
                if (a.type > b.type) return 1;
                if (a.type < b.type) return -1;
                return 0;
            } else if (sortBy === "time") {
                return new Date(b.datetime) - new Date(a.datetime);
            }
        });

        // Filter the results by the selected search type
        if (searchType) {
            results = results.filter(event => event.type === searchType);
        }

        // Create HTML elements to display the search results
        displaySearchResults(results);
    }



// Define a function to create HTML elements to display the search results
function displaySearchResults(results) {
    // Clear any existing search results from the container
    searchResultsContainer.innerHTML = "";

    // Create a new div to hold the search results
    const resultsDiv = document.createElement("div");
    resultsDiv.setAttribute("class", "search-results");

    // Loop through each event in the search results and create a new div to display it
    results.forEach(event => {
        const eventDiv = document.createElement("div");
        eventDiv.setAttribute("class", "event");

        // Create HTML elements to display the event data
        const datetimeDiv = document.createElement("div");
        datetimeDiv.setAttribute("class", "datetime");
        datetimeDiv.textContent = event.datetime;

        const summaryDiv = document.createElement("div");
        summaryDiv.setAttribute("class", "summary");
        summaryDiv.textContent = event.summary;

        const typeDiv = document.createElement("div");
        typeDiv.setAttribute("class", "type");
        typeDiv.textContent = event.type;

        const addressDiv = document.createElement("div");
        addressDiv.setAttribute("class", "address");
        addressDiv.textContent = event.address;

        // Add the event data to the event div
        eventDiv.appendChild(datetimeDiv);
        eventDiv.appendChild(summaryDiv);
        eventDiv.appendChild(typeDiv);
        eventDiv.appendChild(addressDiv);

        // Add the event div to the results div
        resultsDiv.appendChild(eventDiv);
    });

    // Add the results div to the search results container
    searchResultsContainer.appendChild(resultsDiv);
}
