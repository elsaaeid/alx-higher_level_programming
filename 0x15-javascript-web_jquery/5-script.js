// Attach a click event handler to the <div> element with the ID "add_item"
$("#add_item").click(() => {
  // Create a new <li> element with the text "Item"
  const newListItem = $("<li>").text("Item");
  // Add the new <li> element to the <ul> with the class "my_list"
  $("ul.my_list").append(newListItem);
});
