// Add new LI element to UL.my_list
// when the user clicks on DIV#add_item
$("#add_item").click(() => {
  $("ul.my_list").append("<li>Item</li>");
});

// Remove the last LI element from UL.my_list
// when the user clicks on DIV#remove_item
$("#remove_item").click(() => {
  $("ul.my_list li:last-child").remove();
});

// Clear all LI elements from UL.my_list
// when the user clicks on DIV#clear_list
$("#clear_list").click(() => {
  $("ul.my_list").empty();
});
