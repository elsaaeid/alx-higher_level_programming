#!/usr/bin/node

const fs = require('fs');
const filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', function (err, body) {
	if (err) {
		console.log(err);

	} else {
		console.log(body);
	}
});
