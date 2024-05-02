// Fetch the character name from the SWAPI URL and display it in the <div> element with the ID "character"
$.get("https://swapi-api.alx-tools.com/api/people/5/?format=json", function(data) {
  // Update the text of the <div> element with the character name
  $("#character").text(data.name);
});
