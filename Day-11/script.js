console.log('Day-11')

// Activity-1: Understanding promise
// Task-1: Create a promise that resolve with a message after a 2 second timeout and log the message to the console.

const promise = new Promise((resolve, reject) => setTimeout(() => resolve('Promise Resolved'), 2000)).then((result) => console.log(result))


// Task:2 Create a promise that rejects with an error message after 2-second timeout and handle the using .catch()
const promiseTwo = new Promise((resolve, reject) => setTimeout(() => reject('Promise Rejected'), 3000))
promiseTwo.then((result) => console.log(result)).catch((error) => console.error(error))



// Activity-2: Chaining Promises
// Task-3: Create a sequence of promises that simulating fetching data from server. Chain the promises to log the message in a specific order.

const chainPromise = new Promise((resolve, reject) => {
    const error = false
    if (!error) {
        setTimeout(() => {
            resolve({ username: 'user@example.com', password: '12345', id: 1, address: 'Delhi' })
        }, 4000);
    } else {
        reject('Data did not fetch')
    }

}).then((user) => {
    console.log(user)
    return user
}).then((user) => {
    console.log(user.username)
    return user
}).then((user) => {
    console.log(user.password)
    return user
}).then((user) => {
    console.log(user.id)
}).catch((error) => console.log(error))



// Activity-3: Using Async Await
// Task-4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const asyncPromise = new Promise((resolve, reject) => setTimeout(() => resolve('Promise resolved for async function'), 5000))

const asyncFunction = async () => {
    const resolvedResult = await asyncPromise
    console.log(resolvedResult)
}

asyncFunction()


// Task-5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const asyncPromise2 = new Promise((resolve, reject) => setTimeout(() => reject('Promise rejected for async function'), 6000))
const asyncFunction2 = async () => {
    try {
        const resolvedResult2 = await asyncPromise2
        console.log(resolvedResult2)

    } catch (error) {
        console.log(error)
    }

}

asyncFunction2()



// Activity-4: Fetching Data from an Api.

// Task-6: Use the fetch api to get data from public api and log the response data to the console using promise.
const gitRepo = fetch('https://api.github.com/users/developer-cmd-dev')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log( 'Api not fetched in Promise'))

// Task-7: Use the fetch api to get data from public api and log the response data to the console using async await.

const gitRepo2 = async () => {
    try {
        const response = await fetch('https://api.github.com/users/developer-cmd-dev')
        const data = await response.json()
        console.log(data)
        
    } catch (error) {
       return 'Api not fetched in Async Await'
    }

}
gitRepo2()


// Activity-5: Concurrent Promises
// Task-8: Use promise.all to wait for multiple promises to resolve and then log all their value.
const prOne = new Promise((resolve,reject)=>setTimeout(()=>resolve(45),2000))
const prTwo = new Promise((resolve,reject)=>setTimeout(()=>resolve('Promise Resolved'),4000))
const prthree = new Promise((resolve,reject)=>setTimeout(()=>resolve('api data'),6000))

Promise.all([prOne,prTwo,prthree]).then((response)=>console.log(response)).catch((error)=>console.log(error))



// Task-9: Use promise.race to log the value of the first promise that resolves among multiple promises.

Promise.race([prOne,prTwo,prthree]).then((response)=>console.log(response,'First winner'))