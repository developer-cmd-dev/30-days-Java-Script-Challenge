console.log('Day-12')

// Activity-1: Basic error handling with try-catch

// Task:1 Write a function that intentionally throws error and use try cathc block to handle the error and log an appropriate message to the console.
const name = 'Dev'
function handleError(){
try{
name = 'Dev Mandal'
console.log(name)
}catch(error){
console.log('This is error')
}
}

handleError()


// Task:2 Create a function that divides two numbers and throws an error if the denominator is zero. Use try catch block to handle this error.

function devideNum (num1,num2){
    try{
        if(num2 === 0){
            throw Error
        }
        let divide = num1/num2
        console.log(divide)
    }catch(error){

        console.log('The denominator is zero')

    }
}

devideNum(10,0)


// Activity-2: Finally block
// Task:3 Write a script that includes a try-catch block and a finally block, log message in the try,catch, and finally blocks the observe the execution flow.
const date = 2024
try {
    date = 2025
    console.log(date)
} catch (error) {
    console.log(error)
}finally{
    console.log('This code is always run')
}



// Activity-3: Custom error objects
// Task:4 Create a custom error class that extends the built-in Error class. Throw and instance of this custom error in a function and handle it using try-catch block.

class customError extends Error{
    constructor(message){
        super(message)
        this.name = 'customError'
    }

}

function error(){
try {
    throw new Error('This is custom error')
} catch (error) {
    if(error instanceof customError){
        console.eror(`Caught a custom error ${error.message}`)
    }else{
        console.error(`Caught an unexpected error: ${error.message}`);

    }
}

}

error()


// Task:5 Write a function that validates user input(e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using try-cathc block
// const prompt = require('prompt-sync')()

function checkString(){
    let userInput = prompt('Type your name')

try {
    if(userInput != String){
        throw new Error('This is not string','error')
    }else{
        console.log(userInput)
    }
} catch (error) {
    console.log(error)
}

}
checkString()



// Activity-4: Error handling in promises.
// Task:6 Create a promise that randomly resolves reject. Use .catch() to handle the rejection and log an appropriate message to the console.

new Promise((resolve,reject)=>reject(new Error('The promise is rejected','Promise Error'))).catch((error)=>console.log(`${error.message} and the name of promise is ${error.name}`))

// Tasks:7 Use try-catch within an async/function to handle errors from a promise that randomly resolved and rejects, and log the error message.

const promise = new Promise((resolve,reject)=>reject(new Error('Server Issue')))

async function asyncFunction(){
    try {
        const response = await promise
       
    } catch (error) {
        console.log(error.message)
    }


}

asyncFunction()


// Activity-5: Graceful Error handling in fetch
// Task:8 Use the fetch API to request data from an invalid URl and handle the error using .catch(). log the appropriate error message to the console.
 const fetchData = fetch('https://api.github.com/us/developer-cmd-dev')
 .then((response)=>response.json())
 .then((data)=>console.log(data))
 .catch((error)=>console.log(error.message))

// Task:9 Use the fetch API to request data from an invalid URl using async await function and handle the error using try catch. log the appropriate error message to the console.

async function githubData(){
    try{
        const fetchData = await fetch('https://api.github.com/us/developer-cmd-dev')
        const data = await fetchData.json()
        console.log(data)

    }catch(error){

        console.log(error.message)

    }

}

githubData()
 



     

