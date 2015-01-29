"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var test = _interopRequire(require("prova"));

var stub = require("sinon").stub;
var _ = require("./");

var curry1 = _.curry1;
var curry2 = _.curry2;
var curry3 = _.curry3;
var curry4 = _.curry4;



test("fd-curry#curry1", function (t) {
  t.plan(3);

  var spy = stub().returns(true);

  t.equal(typeof curry1, "function");
  t.equal(curry1(spy)(1, 2), true);
  t.ok(spy.calledWith(1));
});

test("fd-curry#curry2", function (t) {
  t.plan(3);

  var spy = stub().returns(true);

  t.equal(typeof curry2, "function");
  t.equal(curry2(spy)(1)(2, 3), true);
  t.ok(spy.calledWith(1, 2));
});

test("fd-curry#curry3", function (t) {
  t.plan(3);

  var spy = stub().returns(true);

  t.equal(typeof curry3, "function");
  t.equal(curry3(spy)(1)(2)(3, 4), true);
  t.ok(spy.calledWith(1, 2, 3));
});

test("fd-curry#curry4", function (t) {
  t.plan(3);

  var spy = stub().returns(true);

  t.equal(typeof curry4, "function");
  t.equal(curry4(spy)(1)(2)(3)(4, 5), true);
  t.ok(spy.calledWith(1, 2, 3, 4));
});