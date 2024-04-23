#!/usr/bin/node

const fs = require('fs');
const filePath = process.argv[2];
const body = process.argv[3];

fs.writeFile(filePath, body, 'utf-8', function (err) {
	if (err) console.log(err);
});
