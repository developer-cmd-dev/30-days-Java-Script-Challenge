console.log('Day-8')

// Activity-1: Template Literals
// Task-1: Use template literals to create a string that includes variables for a person's name and his age, and log the string to the console.
 const name = 'Dev'
 const age = 23
 console.log(`Hi ${name} your age is ${age}`)

//  Task-2: Create a multiline string using template literals and log to the console.
const string = `This is multiline 
string and this is the challenge 
Question of 30Days javascript challenge 
by Hitesh Sir (chai aur code)` 
console.log(string)



// Activity-2 Destructuring
//Task-3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const arrayOfNum = [1,2,3,4,5,6,7,8,9,10]
const [first,second,...rest] = arrayOfNum
console.log(first,second)

// Task-4: Use object destructuring to extract the title and author from a book object and log them result to the console.
const bookObj = {
bookName:'Your name',
author:'Monkoto Shinkai',
publish:'2025'
}

const {bookName,author}=bookObj
console.log(bookName,author)



// Activity-3: Spread and rest Operators
// Task-5: Use the spread operator to create a new array that includes all elements of and existing array plus additionals elements, and log the result to the console.
const stringArray = ['Your name','Grave of Fire Flies','Demon Slayer']
console.log(stringArray);
const animeName = [...stringArray,'Attack On titan','Jujutsu Kaisen']
console.log(animeName)


// Task-6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...numbers){
let result = numbers.reduce((totalNum,num)=>totalNum+num,0)
return result
}

console.log(sum(1,2,3,4,5,6,7,8,9,10))



// Activity-4: Default Parameters.
// Task-7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. log the result of calling this function with and without the second parameter.
function product(a,b=5){

return a*b
}
console.log(product(10))
console.log(product(10,10))


// Activity-5: Enhanced Object literals
// Task-8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const pet = 'Dog'
const color = 'Brown'
const type = 'German Shepherd'
const ageofDog = 5

const  dog = {pet,color,type,ageofDog} 
console.log(dog)

// Task-9: Create an object with computed property name based on variable and log the object to the console.
const key = 'Channel'
const obj ={
[key]:'Chai aur code'
}
console.log(obj.Channel)

