var apiUrl = "https://www.loc.gov/search/";
var searchQuery = "";
var format = "json"; 
var fullUrl = `${apiUrl}?q=${searchQuery}&fo=${format}`;


fetch(fullUrl)
  .then(response => response.json())
  .then(data => {
    displaySearchResults(data);
  })

  function displaySearchResults(data) {
    
  }