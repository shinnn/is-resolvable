'use strict';

const isResolvable = require('.');
const test = require('tape');

test('isResolvable()', t => {
	t.equal(isResolvable('fs'), true, 'should regard a native module ID as resolvable.');

	t.equal(
		isResolvable('espree'),
		true,
		'should regard an installed module ID as resolvable.'
	);

	t.equal(
		isResolvable('eslint/bin/eslint'),
		true,
		'should regard a nested file path under the installed module ID as resolvable.'
	);

	t.equal(
		isResolvable('./test.js'),
		true,
		'should regard a relative file path beginning with `./` as resolvable.'
	);

	t.equal(
		isResolvable(__filename),
		true,
		'should regard an absolute file path as resolvable.'
	);

	t.equal(
		isResolvable('.'),
		true,
		'should regard a parent directory path of index.js as resolvable.'
	);

	t.equal(
		isResolvable('array-duplicated'),
		false,
		'should regard a module ID that isn\'t installed as unresolvable.'
	);

	t.equal(
		isResolvable('./index.json'),
		false,
		'should regard a relative path where no file exists as unresolvable.'
	);

	t.equal(
		isResolvable('node_modules'),
		false,
		'should regard a directory path that doesn\'t have index.js as unresolvable.'
	);

	t.throws(
		() => isResolvable(['./test.js']),
		/^TypeError.*\[ '\.\/test\.js' ] is not a string\. /,
		'should throw a type error when it takes a non-string argument.'
	);

	t.throws(
		() => isResolvable(),
		/^TypeError.* Expected a valid Node\.js module identifier \(<string>\), for example 'eslint', '\.\/index\.js', '\.\/lib'\./,
		'should throw a type error when it takes no arguments.'
	);

	t.end();
});
