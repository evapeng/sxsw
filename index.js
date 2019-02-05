
const path = require('path');

const express = require('express');
const CLIENT_PORT = 3000;
const app = express().use(express.static(path.resolve(__dirname, '.', 'client/build')))
	.use(function(req, res, next) {
	if (req.method === 'GET' && req.accepts('html') && !req.is('json') && !req.path.includes('.')) {
			res.sendFile(path.resolve(__dirname, '.', 'client/build', 'index.html'))
		} else next()
	})
	.listen(CLIENT_PORT, () => console.log(`Listening on ${ CLIENT_PORT }`))
const port = 3000;