console.log('Day-13');

// Acitivity-2 Named and default exports.
const  {sum,product,division} = require('./Script-2')  

// Task:3 Create a module that exports multiple functions using named exports. Import and use these functions in another script.
console.log(`Sum of 10+10 = ${sum(10,10)} and Product of 10*10 = ${product(10,10)} and Division of 10/10 = ${division(10,10)}`)


