var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return function callNewArray(){
    console.log(array)
  }
}
function addElementToBeginningOfArray(array, element){
  newarray =  [element,...array]
  return function callNewArray(){
    console.log(newarray)
  }
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return function callNewArray(){
    console.log(array)
  }
}
function addElementToEndOfArray(array, element){
  newarray =  [...array, element]
  return function callNewArray(){
    console.log(newarray)
  }
}
function accessElementInArray(array, index){
  return array[index]
  return function callIndex(array, index){
    console.log(array[index])
  }
}

accessElementInArray(chocolateBars, 3)(chocolateBars, 3)
destructivelyAddElementToEndOfArray(chocolateBars, "rolos")()