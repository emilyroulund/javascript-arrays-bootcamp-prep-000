var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (array, element){
  return [element, ...array];
  } 
  //without changing or mutating original array
  
function destructivelyAddElementToBeginningOfArray(array, element){
 return array.unshift(element);
}
//alter original array 

function accessElementInArray(array, index){
  return array [index];
}
//accept an array and an index and return the element in that index

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift(1);
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1);
  return array; 
}