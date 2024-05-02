// Fetch the translation of "hello" from the URL
// display it in the <div> element with the ID "hello"
$.get("https://hellosalut.stefanbohacek.dev/?lang=fr", (data) => {
  // Update the text of the <div> element with the translation of "hello"
  $("#hello").text(data.hello);
});
