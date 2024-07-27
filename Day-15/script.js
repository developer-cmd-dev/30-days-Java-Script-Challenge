console.log('Day-15')

// Activity-1: Understanding clousers.
// Task:1 Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function log the result.

function outer() {
    let outerVar = 'OuterVariable.';

    function inner() {
        console.log(outerVar)

    }

    inner()
}

outer()



// Task:2 Create a closure that maintains private counter. Implement funtion to increment and get the current value of the counter.

function counter() {
    let privateCounter = 0;
    function incrementCount() {
        privateCounter++
        console.log(privateCounter)

    }
    return incrementCount;
}

const result = counter()
result()
result()
result()
result()




// Activity-4: Practical clouser
// Task:3 Write a function that generates unique IDs. use a clouser to keep track the last generated id and increment it with all each call.

function id() {
    let id = Math.floor(Math.random() * 10)
    console.log(`Last generated id is ${id}`)
    function changeId() {
        id++
        console.log(id)
    }
    return changeId;
}

const checkGeneratedId = id()
checkGeneratedId()
checkGeneratedId()
checkGeneratedId()
checkGeneratedId()

// Task:4 create a closure that captures a user's name and return a function that greets the user by name.

function userName(value) {

    function greetmsg() {
        console.log(`Hey ${value} welcome to tech world. Let's make something different together.`)

    }
    return greetmsg;

}

const msg = userName('AI')
msg()



// Activity-3: Clousers in Loops
// Task:5 Write a loop that create a array of function. Each function should log its index when called. Use a clouser to ensure each function logs the current index.

function createFunc(value) {
    let arrayOfFunc = []
    for (let i = 0; i <= value; i++) {
        arrayOfFunc.push(function mainFunc() {
            console.log(`Index of this funciton is ${i}`)
        })
    }
    return arrayOfFunc
}

const collectionOfFunc = createFunc(10)
collectionOfFunc.forEach((element, index) => {
    element()
})



// Activity-4: Module Pattern
// Task:6 Use closures to create a simple module for managing collection of items. Implement methods to add,remove,and list items.

function module() {
    const items = []
    function addItem(value) {
        value.forEach((element) => items.push(element))
        console.log('Items ADDED! New list is ', items)
    }
    function removeItem(value) {
        if (items.includes(value)) {
            const newList = items.filter(element => element != value)
            console.log('Value is removed and the new list is ', newList)
        } else {
            console.log('The item is not found on the list.')
        }

    }
    function listItem() {
        items.forEach((element) => console.log(element))
    }
    return [addItem, removeItem, listItem]
}
const addItem = module()[0]
const removeItem = module()[1]
const listItem = module()[2]
addItem(['Mother board.', 'Mouse', 'Keyboard', "Monitor", 'Javascipt', 'Java'])



// Activity-5: Memoization 
// Task:7 Write the function that memorize the results of another function. Use a closure to store the result of previous computations.

let sum = 0
function sumOfNumber(n) {
    for (let i = 0; i <= n; i++) {
        sum += i
    }
    return sum;
}


const memoize = (fn) => {

    let cache = {}
    return function calulation(...args) {
        console.log(args)
        let n = args[0]
        if (n in cache) {
            return cache[n]
        } else {
            let result = fn(n)
            cache[n] = result
            return result
        }


    }


}

const value = memoize(sumOfNumber)
console.log(value(5))









// Task:8 Create a memoised version of a function that calculates the factorial of a number.
function factorial(n) {
    let num = 1;
    for (let i = 1; i <= n; i++) {
        num = num * i
    }
    return num
}

function memoised(fn) {
    let cache = {}

    function calc(...args) {
        let n = args[0]
        if (n in cache) {
            return cache[n]
        } else {
            let result = fn(n)
            cache[n] = result
            return result;
        }

    }

    return calc

}

const facValue = memoised(factorial)
console.log(facValue(5))