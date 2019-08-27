const { test1 } = require('./logic');

describe('unit test', () => {
	describe('test1', () => {
		it('basic case', () => {
			expect(test1('1', '2')).toBe('3');
		});
		it('handle non-numeric case', () => {
			try {
				test1('a', '1');
				fail()
			} catch (e) {
				expect(e.message).toBe('input not a number');
			}
			try {
				test1();
				fail()
			} catch (e) {
				expect(e.message).toBe('input not a number');
			}
		});
	});
});

describe('unit test', () => {
	describe('dummy', () => {
		it('dummy', () => {});
	});
});
