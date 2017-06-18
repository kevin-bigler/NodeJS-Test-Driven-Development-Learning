var assert = require('chai').assert;

var countdown = require('../countdown.js');

describe('countdown module', function() {
	it('should count down from 10', function() {
		assert.deepEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], countdown(10));
	});

	it('should count down from 3', function() {
		assert.deepEqual([3, 2, 1, 0], countdown(3));
	});

	it('should count down from 3, no zero', function() {
		assert.deepEqual([3, 2, 1], countdown(3, false));
	});

	it('should throw TypeError (string as start)', function() {
		assert.throws(countdown, 'some non-number');
	});

	it('should throw TypeError (negative starting number)', function() {
		assert.throws(countdown, -15);
	});

	it('should throw TypeError (jk)', function() {
		assert.throws(countdown, 15);
	});
});