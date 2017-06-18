var assert = require('chai').assert;

describe('truthy module', function() {
	it('should be truthy (empty array)', function() {
		assert.ok([]);
	});

	it('should be truthy (abc)', function() {
		assert.ok('abc');
	});

	it('should be truthy (boolean true)', function() {
		assert.ok(true);
	});

	it('should be truthy (undefined)', function() {
		assert.ok(undefined);
	});

	it('should be null', function() {
		assert.isNull(null);
	});

	it('should be true', function() {
		assert.true(true);
	});

	it('should fail', function() {
		assert.fail('I made this one fail, hehe');
	});
});