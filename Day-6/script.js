console.log('Day-6')

// Activity-1: Array creation and Access
// Task-1 Create an array of numbers from 1 to 5 and log the array to the console.
const arr = [1, 2, 3, 4, 5]
console.log(arr)

//Task-2 Access the first and last elements of the array and log them to the console.
const arr2 = [1, 2, 3, 4, 5]
console.log('First element = ', arr2[0], ' And second element is = ', arr[arr.length - 1])

// Activity-2: Array methods (Basic)
// Task-3 Use the push method to add a new number to the end of the array and log the result to the console.
const arr3 = [1, 2, 3, 4, 5]
arr3.push('Chai aur code')
console.log(arr3)

// Task-4 Use the pop method to remove the last element from the array and log the updated array.
const arr4 = [1, 2, 3, 4, 5, 6]
arr4.pop()
console.log(arr4)

// Task-5 Use the shift method to remove the first element from the array and log the updated array.
const arr5 = [1, 2, 3, 4, 5]
arr5.shift()
console.log(arr5)

//Task-6 Use the unshift method to add a new number at the begening in the array and log the updated array.
const arr6 = [1, 2, 3, 4, 5]
arr6.unshift(9)
console.log(arr6)

// Activity-3: Array Methods(Intermediate)
// Task-7 Use the map method to create a new array where each number is doubled and log the new array.
const arr7 = [1, 2, 3, 4, 5]
let newArray = []
arr7.map((element, index) => {
    newArray.push(element)
    newArray.push(arr7[index])
})
console.log('New Array', newArray)

// Task-8 Use the filter method to calculate the sum of all numbers in the array and log the result.
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const result = numArr.filter((num) => num % 2 === 0)
console.log(result)

// Task-9 Use the reduce method to calculate the sum of all numbers in the array and log the result.
const numArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const initialValue = 0
const sumArr = numArr2.reduce(( accumulator,currentValue) => accumulator + currentValue, initialValue)
console.log(sumArr)

// Activity-4: Array Iteration
// Task-10 Use a for loop to iterate over the array and log each element to the console.
const numArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for(let i =0;i<=numArr3.length-1;i++){
    console.log(numArr3[i])
}

// Task-11  Use a foreach to iterate over the array and log each element to the console.
numArr3.forEach((element)=>console.log(element))

// Activity-5 Multi-dimensional Arrays
// Task-12 Create a two-dimensional array (matrix) and log the entire array to the console.
let twodArray = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]
console.log(twodArray)

// Task-13 Access and log a specific element from two-dimensional array.
console.log('The value of 2d array is getting from 3rd index of row and 2nd index of coloumn = ',twodArray[2][1])
