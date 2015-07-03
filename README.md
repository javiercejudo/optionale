# optionale

[![Build Status](https://travis-ci.org/javiercejudo/optionale.svg)](https://travis-ci.org/javiercejudo/optionale)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/optionale/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/optionale?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/optionale/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/optionale)

Minimal loader of optional packages

## Install

    npm i optionale

## Usage

```js
var optionale = require('optionale');

optionale.optionale('invalid-package'); // => undefined
optionale.optionale('util'); // => {…}

optionale.any(['invalid-package', 'util']); // => {…}
optionale.any(['invalid-package', 'invalid-package2']); // => undefined

optionale.some(['invalid-package', 'util']); // => {…}
optionale.some(['invalid-package', 'invalid-package2']); // => throws Error
```

See [spec](test/spec.js).
