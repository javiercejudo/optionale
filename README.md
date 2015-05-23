# optionale

[![Build Status](https://travis-ci.org/javiercejudo/optionale.svg)](https://travis-ci.org/javiercejudo/optionale)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/optionale/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/optionale?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/optionale/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/optionale)

Minimal loader of optional packages

## Install

    npm i optionale

## Usage

```js
var optionale = require('optionale').optionale;

optionale('invalid-package'); // => undefined
optionale('util'); // => {…}
```

See [spec](test/spec.js).
