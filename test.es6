import test from 'prova';
import { stub } from 'sinon';
import { curry1, curry2, curry3, curry4 } from './';


test('fd-curry#curry1', (t) => {
  t.plan(3);

  let spy = stub().returns(true);
 
  t.equal(typeof curry1, 'function');
  t.equal(curry1(spy)(1, 2), true);
  t.ok(spy.calledWith(1));
});

test('fd-curry#curry2', (t) => {
  t.plan(3);

  let spy = stub().returns(true);
 
  t.equal(typeof curry2, 'function');
  t.equal(curry2(spy)(1)(2, 3), true);
  t.ok(spy.calledWith(1, 2));
});

test('fd-curry#curry3', (t) => {
  t.plan(3);

  let spy = stub().returns(true);
 
  t.equal(typeof curry3, 'function');
  t.equal(curry3(spy)(1)(2)(3, 4), true);
  t.ok(spy.calledWith(1, 2, 3));
});

test('fd-curry#curry4', (t) => {
  t.plan(3);

  let spy = stub().returns(true);
 
  t.equal(typeof curry4, 'function');
  t.equal(curry4(spy)(1)(2)(3)(4, 5), true);
  t.ok(spy.calledWith(1, 2, 3, 4));
});
