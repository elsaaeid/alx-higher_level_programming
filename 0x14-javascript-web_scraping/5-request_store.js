#!/usr/bin/node

const request = require('request');
const fs = require('fs');

let url = process.argv[2];
let filePath = process.argv[3];

request(url, function (error, response, body) {
	if (error) {
		console.log(error);
	} else {
		fs.writeFile(filePath, body, 'utf8', function (err) {
			if (err) {
				console.log(err);
			}
		});
	}
});
