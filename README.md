# curry [![build status](https://secure.travis-ci.org/kirstein/curry.png)](http://travis-ci.org/kirstein/curry)

Implementation of one of the core concepts in functional programming in JavaScript.
Curry will add `#curry` method to `Function.prototype`.

It can be used with the required `curry` method or by calling the _monkey-patched_ `fn.curry` method.


## Installation

Not yet...


## Example Usage


* function prototype  

``` js
require('curry');
var equals = function(x, y) { return x === y; }
var equalsHundred = equals.curry(100);

equalsHundred(100) === 100;
// true

equalHundred(200) === 100;
// false
```

* require response   

``` js
var curry = require('curry');  
var equals = function(x, y) { return x === y; }
var equalsHundred = curry(equals, 100);

equalsHundred(100) === 100;
// true

equalHundred(200) === 100;
// false
```
