// Attach a click event handler to the <div> element with the ID "toggle_header"
$("#toggle_header").click(() => {
  // Toggle the class "red" and "green" on the <header> element
  $("header").toggleClass("red green");
});
