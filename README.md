# require-spy

Check if a given node module have been required.

[![Build status](https://travis-ci.org/watson/require-spy.svg?branch=master)](https://travis-ci.org/watson/require-spy)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install require-spy
```

## Usage

```js
var spy = require('require-spy')
var http = require('http')

// all modules required after spy.start is called are logged
spy.start()

var fs = require('fs')

console.log(spy.check('http')) // false
console.log(spy.check('fs')) // true
```

## API

### `spy.start()`

Start the spy.

Alternatively you can require the `require-spy/start` script either
inline or via the command line:

```
node -r require-spy/start app.js
```

This will auto-start the spy.

### `spy.check(name)`

Returns `true` if the given `name` have already been required. Otherwise
`false.

## License

MIT
