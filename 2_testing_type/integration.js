const router = module.exports = require('express').Router();
const { test1 } = require('./logic');

router.get('/', function(req, res) {
	res.send('Hello World!');
});

router.get('/test/:a/:b', (req, res) => {
	try {
		res.send(test1(req.params.a, req.params.b));
	} catch (e) {
		res.status(400).send(e.message);
	}
});
