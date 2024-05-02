// Fetch and print how to say "Hello" depending on the language
$("#btn_translate").click(() => {
  const languageCode = $("#language_code").val();
  const url = `https://www.fourtonfish.com/hellosalut/hello/?lang=${languageCode}`;
  
  // Make a GET request to the API service
  $.get(url, (data) => {
    // Update the text of the <div> element with the translated "Hello"
    $("#hello").text(data.hello);
  });
});
