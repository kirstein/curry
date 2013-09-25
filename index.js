// If the curry function already exists then lets use that one
if (!Function.prototype.curry) {

  /**
   * Attach curry function to argument prototype
   *
   * The curry function takes in X arguments and produces function that will invoke the missing arguments.
   * The this value of the called function will remain the function itself.
   *
   * @return {Function} curried function
   */
  Function.prototype.curry = function() {
    var args = [].slice.call(arguments);
    return (function() {
      return this.apply(this, args.concat([].slice.call(arguments)));
    }).bind(this);
  };
}

/**
 * Exposes a curry function that takes the function to curry as the first param.
 * Will throw if the first argument is not a function.
 *
 * Will use Function prototype curry as currying platform.
 *
 * @throws {Error} exception if the first argument is not a function
 * @param {Function} fn function to curry
 * @return {Function} curried function
 */
module.exports = function(fn) {
  if (typeof fn !== "function") {
    throw new Error("Cannot curry non functions");
  }

  return fn.curry.apply(fn, [].slice.call(arguments, 1));
};

