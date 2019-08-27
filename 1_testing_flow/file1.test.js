const { add } = require('./file1');

describe('add', () => {
	it('simple case', () => {
		expect(add(1, 1)).toBe(2);
	});
});
