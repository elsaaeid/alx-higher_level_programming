#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

const url = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request(url, error, response, body => {
  if (error) {
    console.log(error);
  } else {
    const movie = JSON.parse(body);
    const characters = movie.characters;

    characters.forEach(characterUrl => {
      request(characterUrl, function (error, response, body) {
        if (error) {
          console.log(error);
        } else {
          const character = JSON.parse(body);
          console.log(character.name);
        }
      });
    });
  }
});
