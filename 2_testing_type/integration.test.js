const controller = require('./controller');
const request = require('supertest');
const app = require('express')().use('/', controller);

describe('intgration test', () => {
	describe('GET /', () => {
		it('simple case', async() => {
			await request(app)
				.get('/')
				.expect(200)
				.expect(/Hello World!/)
		});
	});
	describe('GET /test/:a/:b', () => {
		it('simple case', async() => {
			await request(app)
				.get('/test/1/2')
				.expect(200)
				.expect(/3/)
		});
		it('400 for non-numeric', async() => {
			await request(app)
				.get('/test/1/a')
				.expect(400)
				.expect(/input not a number/)
		});
	});
});
