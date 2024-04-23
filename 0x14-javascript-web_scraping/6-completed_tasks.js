#!/usr/bin/node

const request = require('request');

let url = process.argv[2];

request(url, function (error, response, body) {
	if (error) {
		console.log(error);
	} else {
		let todos = JSON.parse(body);
		let completedTasks = {};

		todos.forEach(todo => {
			if (todo.completed) {
				if (completedTasks[todo.userId]) {
					completedTasks[todo.userId]++;
				} else {
					completedTasks[todo.userId] = 1;
				}
			}
		});

		console.log(completedTasks);
	}
});

