/* jshint expr:true */
var should = require('should'),
    expect = require('expect.js'),
    curry  = require('..');

describe('curry', function() {
  describe ('commonjs', function() {
    it ('should return a function', function() {
      curry.should.be.instanceOf(Function);
    });

    it ('should throw when the first param is not defined', function() {
      (function() {
        curry();
      }).should.throw('Cannot curry non functions');
    });

    it ('should throw when the first param is not a function', function() {
      (function() {
        curry({});
      }).should.throw('Cannot curry non functions');
    });

    it ('should not throw when the first param is not a function', function() {
      (function() {
        curry(function() {});
      }).should.not.throw('Cannot curry non functions');
    });

    it ('should curry the params etcetc', function() {
      var equals = function(x, y) { return x === y; };
      var equalsHundred = curry(equals, 100);

      equalsHundred(100).should.be.true;
      equalsHundred(200).should.be.false;
    });
  });
  describe ('prototype', function() {

    it('should add curry function to function prototype', function() {
      var func = function() {};
      func.curry.should.be.instanceOf(Function);
    });

    it ('should return a function when called', function() {
      var func = function() {};
      func.curry().should.be.instanceOf(Function);
    });

    it ('should set the "this" value of function to itself', function() {
      var func = function() { return this; };
      func.curry()().should.be.eql(func);
    });

    it ('should return callable function if no params are given', function() {
      var func = function() { return "test"; };
      func.curry()().should.be.eql('test');
    });

    it ('should return the same function that has the same value by default', function() {
      var func = function(value) { return "test-" + value; };
      func.curry('value')().should.be.eql("test-value");
    });

    it ('should return the same function that has the same value by default (multiple args)', function() {
      var func = function(value, val2) { return "test-" + value + "-" + val2; };
      func.curry('value', 'something')().should.be.eql("test-value-something");
    });

    it ('should curry arguments', function() {
      var func = function(value, val2) { return "test-" + value + "-" + val2; };
      func.curry('value')('something').should.be.eql("test-value-something");
    });

    it ('should be able to link function callbacks', function() {
      var equals = function(x, y) { return x === y; };
      var equalsHundred = equals.curry(100);

      equalsHundred(100).should.be.true;
      equalsHundred(200).should.be.false;
    });
  });
});
