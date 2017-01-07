import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import { spy } from 'sinon';
import {
  curry,
  curryN,
  curry1,
  curry2,
  curry3,
  curry4
} from './index.js';

chai.use(sinonChai);

describe('fj-curry', () => {

  let spiedCallback;
  beforeEach(() => {
    spiedCallback = spy();
  });
  const a1 = (w) => spiedCallback();
  const a2 = (w, x) => spiedCallback();
  const a3 = (w, x, y) => spiedCallback();
  const a4 = (w, x, y, z) => spiedCallback();

  describe('curry', () => {

    it('should exist', () => {
      expect(curry).to.be.ok;
    });

    it('should return a function', () => {
      expect(curry(x => x)).to.be.a('function');
    });

    it('should accept functions of arbitrary arities', () => {
      expect(curry(a1)).to.be.a('function');
      expect(curry(a2)).to.be.a('function');
      expect(curry(a3)).to.be.a('function');
    });

    it('should delay invocation of curried functions', () => {
      const lift1 = curry(a1);
      const lift2 = curry(a2);
      const lift3 = curry(a3);

      lift2(null);
      lift3(null, null);
      lift3(null)(null);
      expect(spiedCallback).to.have.not.been.called;

      lift1(null);
      expect(spiedCallback).to.have.been.calledOnce;
      lift2(null);
      expect(spiedCallback).to.have.been.calledOnce;
      lift2(null)(null);
      expect(spiedCallback).to.have.been.calledTwice;
      lift3(null, null);
      expect(spiedCallback).to.have.been.calledTwice;
      lift3(null, null)(null);
      expect(spiedCallback).to.have.been.calledThrice;
      lift3(null)(null)(null);
      expect(spiedCallback).to.have.callCount(4);
      lift3(null, null, null);
      expect(spiedCallback).to.have.callCount(5);
    });
  });

  describe('curryN', () => {

    it('should accept two arguments', () => {
      expect(curryN.length).to.equal(2);
    });

    it('should be curriable', () => {
      expect(curry(curryN(1))).to.be.a('function');
    });

    it('should accept N of arbitrary size', () => {
      const lift1 = curryN(1, a1);
      const lift2 = curryN(2, a2);
      const lift3 = curryN(3, a3);

      lift1(1);
      lift2(2)(3);
      lift3(4)(5)(6);

      expect(spiedCallback).to.have.been.calledThrice;
    });
  })

  describe('curry1', () => {

    it('should invoke curried function after passed single argument', () => {
      const lift1 = curry1(a1);
      lift1(null);

      expect(spiedCallback).to.have.been.calledOnce;
    });
  });

  describe('curry2', () => {

    it('should invoke curried function after passed two arguments', () => {
      const lift2 = curry2(a2);
      lift2(null, null);

      expect(spiedCallback).to.have.been.calledOnce;
    });
  });

  describe('curry3', () => {

    it('should invoke curried function after passed three arguments', () => {
      const lift3 = curry3(a3);
      lift3(null, null, null);

      expect(spiedCallback).to.have.been.calledOnce;
    });
  });

  describe('curry4', () => {

    it('should invoke curried function after passed four arguments', () => {
      const lift4 = curry4(a4);
      lift4(null, null, null, null);

      expect(spiedCallback).to.have.been.calledOnce;
    });

    it('should invoke curried function irrespective of its arity', () => {
      const lift4 = curry4(a1);
      lift4(null)(null)(null)(null);

      expect(spiedCallback).to.have.been.calledOnce;
    });
  });
});
