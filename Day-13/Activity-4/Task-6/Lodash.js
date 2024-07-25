import _  from 'lodash'


// Performing some operation in Array using lodash module.

const Array = [1,3,3,4,5,6,7,8,9]
console.log(_.first(Array)) //Shows the first value of array.

console.log(_.last(Array)) //Shows the last value of array.

console.log(_.chunk(Array,1)) //Makin chunks of size 1.

const array2 = [false,1,2,3,4,5,null,true]
console.log(_.compact(array2)) //Removes all false value from an array an returns the new array

console.log(_.concat(array2,['newValue','newValue2'])) //It returns new array adding given value. 

console.log(_.difference((array2),[null,false,true])) //It removes value using given value from an array.



// Performing some operations in Object using lodash module.

let obj = {a:1,b:2,c:3}
console.log(_.assign(obj,{a:'This is a'})) //You can change value using old obj key






