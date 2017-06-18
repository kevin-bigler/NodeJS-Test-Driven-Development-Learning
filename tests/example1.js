var assert = require('chai').assert;

// describe "groups" tests
// lexical - "describe math module, it should add numbers"
describe('math module', function() {
	it('should add numbers', function() {

		assert.equal( (1 + 1), '2' );
		assert.strictEqual( 127 + 319, 446);

	});

	it('should increment, not equal its old value', function() {
		assert.notEqual(3, 2);
	});
});