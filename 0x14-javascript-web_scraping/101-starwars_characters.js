const request = require('request');

const movieId = process.argv[2];

const url = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request(url, function (error, response, body) {
  if (error) {
    console.error('Error:', error);
  } else {
    const film = JSON.parse(body);
    const characters = film.characters;

    const characterPromises = characters.map(function (characterUrl) {
      return new Promise(function (resolve, reject) {
        request({ url: characterUrl, json: true }, function (error, response, body) {
          if (error) {
            reject(error);
          } else {
            resolve(body.name);
          }
        });
      });
    });

    Promise.all(characterPromises)
      .then(function (characterNames) {
        characterNames.forEach(function (characterName) {
          console.log(characterName);
        });
      })
      .catch(function (error) {
        console.error('Error:', error);
      });
  }
});
