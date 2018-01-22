# is-resolvable

[![npm version](https://img.shields.io/npm/v/is-resolvable.svg)](https://www.npmjs.com/package/is-resolvable)
[![Build Status](https://travis-ci.org/shinnn/is-resolvable.svg?branch=master)](https://travis-ci.org/shinnn/is-resolvable)
[![Build status](https://ci.appveyor.com/api/projects/status/ww1cdpignehlasbs?svg=true)](https://ci.appveyor.com/project/ShinnosukeWatanabe/is-resolvable)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/is-resolvable.svg)](https://coveralls.io/r/shinnn/is-resolvable)

A [Node.js](https://nodejs.org/) module to check if a given module ID is resolvable with [`require()`](https://nodejs.org/api/globals.html#globals_require)

```javascript
const isResolvable = require('is-resolvable');

isResolvable('fs'); //=> true
isResolvable('path'); //=> true

// When `./index.js` exists
isResolvable('./index.js') //=> true
isResolvable('./index') //=> true
isResolvable('.') //=> true
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/getting-started/what-is-npm).

```
npm install is-resolvable
```

## API

```javascript
const isResolvable = require('is-resolvable');
```

### isResolvable(*moduleId*)

*moduleId*: `string` (module ID)  
Return: `boolean`

It returns `true` if `require()` can load a file form a given module ID, otherwise `false`.

```javascript
const isResolvable = require('is-resolvable');

// When `./foo.json` exists
isResolvable('./foo.json'); //=> true
isResolvable('./foo'); //=> true

isResolvable('./foo.js'); //=> false

// When `eslint` module is installed but `jshint` isn't
isResolvable('eslint'); //=> true
isResolvable('jshint'); //=> false

// When `lodash` module is installed
isResolvable('lodash/isObject'); //=> true
isResolvable('lodash/fp/reject.js'); //=> true
```

## License

[ISC License](./LICENSE) © 2018 Shinnosuke Watanabe
