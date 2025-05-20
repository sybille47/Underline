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

  if (context !== undefined) {
    iteratee.bind(context)
  }

    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        iteratee(collection[i], i, collection)
      }
    }

    else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          iteratee(collection[key], key, collection)
        }
      }
    }
    return collection;
  }