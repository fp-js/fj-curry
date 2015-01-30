# fj-curry

[![Build Status](https://travis-ci.org/fp-js/fj-curry.svg)](https://travis-ci.org/fp-js/fj-curry) [![npm version](https://badge.fury.io/js/fj-curry.svg)](http://badge.fury.io/js/fj-curry)
> Curry a function

## Installation

`npm install fj-curry --save`

## Usage

```js
var curry = require('fj-curry').curry;
function add(a, b, c) { return a+b+c; }

curry(add)(2)(3)(4); // => 9
curry(add)(2, 3)(4); // => 9
curry(add)(2, 3, 4); // => 9
curry(add)(2)(3, 4); // => 9

var curryN = require('fj-curry').curryN;
function add(a, b, c, d) { d = d || 0; return a+b+c; }

// curry only 3 of the 4 arguments
curryN(3, add)(2)(3)(4); // => 9
curryN(3, add)(2, 3)(4); // => 9
curryN(3, add)(2, 3, 4); // => 9
curryN(3, add)(2)(3, 4); // => 9

var curry1 = require('fj-curry').curry1;

parseInt('2', 2); // => NaN
curry1(parseInt)('2', 2); // => 2

var curry2 = require('fj-curry').curry2;
function add(a, b) { return a+b; }
curry2(add)(2)(3); // => 5

var curry3 = require('fj-curry').curry3;
function add(a, b, c) { return a+b+c; }
curry3(add)(2)(3)(4); // => 9

var curry4 = require('fj-curry').curry4;
function add(a, b, c, d) { return a+b+c+d; }
curry4(add)(2)(3)(4)(5); // => 14
```

## API

### curry

Curry all arguments (`fn.length`) of a function.

`curry(fn)`

***Parameters***

| Name          | Type        | Description                 |
| ------------- | ----------- | --------------------------  |
| fn            | function    | The function to be curryied |

***Returns***

| Type        | Description                |
| ----------- | -------------------------- |
| function    | A curryied function        |


### curryN

Curry n arguments of a function

`curryN(n, fn)`

***Parameters***

| Name          | Type        | Description                    |
| ------------- | ----------- | --------------------------     |
| n             | int         | `n` arguments will be curryied |
| fn            | function    | The function to be curryied    |

***Returns***

| Type        | Description                |
| ----------- | -------------------------- |
| function    | A curryied function        |


### curry1-4

Curry 1, 2, 3, or 4 arguments of a function.

`curry1(fn)`
`curry2(fn)`
`curry3(fn)`
`curry4(fn)`

***Parameters***

| Name          | Type        | Description                   |
| ------------- | ----------- | --------------------------    |
| fn            | function    | The function to be curryied   |

***Returns***

| Type        | Description                |
| ----------- | -------------------------- |
| function    | A curryied function        |
