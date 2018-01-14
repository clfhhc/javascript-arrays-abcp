var chocolateBars=["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array,element) {
<<<<<<< HEAD
  return [element,...array];
=======
  return [element,...array]
>>>>>>> f0a60d3b4cbfdbc38b8d33f77446d3f1a09cc868
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element);
<<<<<<< HEAD
  return array;
}

function addElementToEndOfArray(array,element) {
  return [...array,element];
}

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element);
=======
>>>>>>> f0a60d3b4cbfdbc38b8d33f77446d3f1a09cc868
  return array
}

function accessElementInArray(array,index) {
<<<<<<< HEAD
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0,array.length-1);
=======
  
>>>>>>> f0a60d3b4cbfdbc38b8d33f77446d3f1a09cc868
}