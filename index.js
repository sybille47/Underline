
var _ = {};

//ARRAYS

// _.first(array, [n])
// Returns an array with the first n elements of an array.
// If n is not provided it returns an array with just the first element.
_.first = function (array, n) {

  if (n == null) {
    return array[0]
  }
  else
  return array.slice(0, n);

};
console.log(_.first(['alpha', 'beta', 'gamma', 'next'], 7));

// _.last(array, [n])
// Returns an array with the last n elements of an array.
// If n is not provided it returns an array with just the last element.
_.last = function (array, n) {
   if (n == null) {
    return array[array.length - 1]
  }
   else
    return array.slice(array.length - n);
};
console.log(_.last(['alpha', 'beta', 'gamma', 'next'], 3)); // it does not provide the correct result if n > array.length

// _.uniq(array)
// Produces a duplicate-free version of the array, using === to test equality.
// In particular only the first occurrence of each value is kept.
_.uniq = function (array) {
const uniqueArray = array.filter((value, index, self) => self.indexOf(value) === index)
return uniqueArray;
};
console.log(_.uniq([1, 'a', 'a', 2, 2, 'd', 'd', 7, 8, 7, 'alpha']));

// OBJECTS

// _.extend(destination, source)
// Copies all the own enumerable properties in the source object over
// to the destination object, and returns it (without using `Object.assign`).


  let object1 = {
                  key1: 1,
                  key2: 2,
                  key3: 3
                }
  let object2 = {};

_.extend = function (destination, source) {

  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      destination[key] = source[key];
    }
  }
  return destination;
};
console.log(_.extend(object2, object1));

// _.defaults(destination, source)
// Fills in undefined properties in the destination object
// with own enumerable properties present in the source object,
// and returns the destination object.

    objectA = {
                  key1: 1,
                  key2: 2,
                  key3: 3
                }
    objectB = {
                  key1: undefined,
                  key2: 2,
                  key3: 3
                };


_.defaults = function (destination, source) {


  for (let key in source) {
    if (source.hasOwnProperty(key) && destination[key] === undefined) {
      destination[key] = source[key];
    }
    else {
      destination[key]
    }
  }
return destination;
};
console.log(_.defaults(objectB, objectA));

// COLLECTIONS

// _.each(collection, iteratee, [context])
// Iterates over a collection of elements (i.e. array or object),
// yielding each in turn to an iteratee function, that is called with three arguments:
// (element, index|key, collection), and bound to the context if one is passed.
// Returns the collection for chaining.
_.each = function (collection, iteratee, context) {

};
console.log(Math.random()*100);
// _.contains(collection, value)
// Returns an array of indexes / keys where value can be found in the collection.
// TIP: here's a demo of how you can re-use already implemented methods in clever ways.
_.contains = function (collection, value) {
  var res = [];
  _.each(collection, function (el, key) {
    el === value && res.push(key);
  });
  return res;
};

// _.map(collection, iteratee, [context])
// Returns a new array of values by mapping each value in collection through iteratee.
// Each invocation of iteratee is called with three arguments:
// (element, index|key, collection), and bound to the context if one is passed.
_.map = function (collection, iteratee, context) {

};

// _.reduce(collection, iteratee, [accumulator], [context])
// Reduce boils down a collection of values into a single value.
// Accumulator is the initial state of the reduction,
// and each successive step of it should be returned by iteratee.
// Iteratee is passed four arguments: (accumulator, element, index|key, collection),
// and bound to the context if one is passed. If no accumulator is passed
// to the initial invocation of reduce, iteratee is not invoked on the first element,
// and the first element is instead passed as accumulator for the next invocation.
_.reduce = function (collection, iteratee, accumulator, context) {

};

// _.filter(collection, predicate, [context])
// Looks through each value in the collection, returning an array of all the values
// that pass a truth test (predicate). Predicate is called with three arguments:
// (element, index|key, collection), and bound to the context if one is passed.
_.filter = function (collection, predicate, context) {

};

// _.reject(collection, predicate, [context])
// Looks through each value in the collection, returning an array of all the values
// that don't pass a truth test (predicate). Predicate is called with three arguments:
// (element, index|key, collection), and bound to the context if one is passed.
// TIP: can you reuse _.filter()?
_.reject = function (collection, predicate, context) {

};

// _.every(collection, [predicate], [context])
// Returns true if all values in the collection pass the predicate truth test.
// Predicate is called with three arguments:
// (element, index|key, collection), and bound to the context if one is passed.
// Short-circuits and stops traversing the list if a false element is found.
// TIP: without the short-circuiting you could reuse _.reduce(). Can you figure how?
// Because of the short-circuiting though, you need to implement it in a similar way as you did at _.each.
_.every = function (collection, predicate, context) {

};

// _.some(collection, [predicate], [context])
// Returns true if any value in the collection passes the predicate truth test.
// Predicate is called with three arguments:
// (element, index|key, collection), and bound to the context if one is passed.
// Short-circuits and stops traversing the list if a true element is found.
// TIP: what method that you have already implemented can be reused here?
_.some = function (collection, predicate, context) {

};

// _.invoke(collection, methodName, *arguments)
// Returns an array with the results of calling the method
// indicated by methodName on each value in the collection.
// Any extra arguments passed to invoke will be forwarded on to the method invocation.
_.invoke = function (collection, methodName) {

};

// _.pluck(collection, propertyName)
// A convenient version of what is perhaps the most common use-case for map:
// given an array of objects (collection), iterates over each element
// in the collection, and returns an array with all the values
// corresponding to the property indicated by propertyName.
_.pluck = function (collection, propertyName) {

};

// FUNCTIONS

// _.once(func)
// Creates a version of the function that can only be called one time
// (with any arguments). Repeated calls to the modified function
// will have no effect, returning the value from the original call.
// Useful for initialization functions, instead of having to set
// a boolean flag and then check it later.
_.once = function (func) {

};

// _.memoize(func)
// Memoizes a given function by caching the computed result.
// Useful for speeding up slow-running computations.
// You may assume that the memoized function takes only one argument
// and that it is a primitive. Memoize should return a function that when called,
// will check if it has already computed the result for the given argument
// and return that value instead of recomputing it.
_.memoize = function (func) {

};

// _.delay(function, wait, *arguments)
// Much like setTimeout(), invokes function after waiting milliseconds.
// If you pass the optional arguments, they will be forwarded
// on to the function when it is invoked.
_.delay = function (greet, wait)
};


// _.throttle(function, wait)
// Returns a new, throttled version of the passed function that,
// when invoked repeatedly (with any arguments), calls the original function
// at most once every wait milliseconds, and otherwise just returns
// the last computed result. Useful for rate-limiting events
// that occur faster than you can keep up with.
_.throttle = function (func, wait) {

};

// Allow tests to run on the server (leave at the bottom)
if (typeof window === 'undefined') {
  module.exports = _;
}