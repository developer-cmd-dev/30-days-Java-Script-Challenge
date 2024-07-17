console.log('Day - 5')

// Activity-1 Function Declaration
// Task-1 Write a function to check if number is even or odd and log the result to the console.
let number = 4
    function checkNumber(){
        let checkOddEven = number%2
        if(checkOddEven === 0){
            return 'The number is even'
        }else{
            return 'The number is odd'
        }
       
    }
    console.log(checkNumber())

// Task-2 Write a function to calculate the square of a number and return the result.
const sqNum = 10;
function square(){
    let result = sqNum*sqNum
    return result
}
console.log('Square of',sqNum,' = ',square())



// Activity-2 Function Expression
// Task-3 Write a function expression to find the maximum of two numbers and log the result to the console.
const maximumValue = function findMaxValue(){
let num1=45;
let num2 = 66;
let num3=34;
return Math.max(num1,num2,num3)

}

console.log('The maximum value is :' , maximumValue()  )

// Task-4 Write a function expression to concatenate two strings and return the result.
const concatString= function concatStr(){
let str1='Chai'
let str2 = ' Code'
return str1.concat(str2)

}

console.log('The result of concatenation is : ',concatString())



// Activity-3 Arrow Function
// Task-5 Write a arrow function to calculate sum of two numbers and return the result.
const num1=2
const num2=3
const sumNum = ()=>{
return num1+num2
}

console.log('Sum of ',num1,' and ',num2,' is : ',sumNum())

// Task-6 Write a arrow function to check if a string contains a specific character and return a boolean value.
const string = 'Function comes from Functionality'
const checkStr = ()=>{
 return string.includes('Functionality')?true:false
}
console.log(checkStr())


// Activity-4 Function Parameters and default value.
// Task-7 Write a function that takes two parameters and return their product. provide default value for the second parameter.
const getProduct = (num1,num2)=>{
    !num2?num2=4:num2//default value of second parameter
return num1*num2
}

console.log('The product is : ',getProduct(2,10))

// Task-8 Write a function that takes a person's name and age and return a greeting message. Provide a default value fot the age.
const greetMsg = (name ,age)=>{
    !age?age=18:age
    return `Hi ${name} Welcome to our AI world, the AI know your age that is ${age} `
}
console.log(greetMsg('Hitesh Sir',30))





// Activity-5 High order functions
// Task-9 Write a hight order funtion that takes a function and a number, and calls the function many times.
function highOrderFunc(value1,secondFunc){

    for(let i=1;i<=value1;i++){

        secondFunc()
        

    }

}
function secondFunc(){
console.log('Hello world')

}

highOrderFunc(10,secondFunc)


// Task-10 Write a high order function that takes two function and value, applies the first function to the value , and the second function to the result

const func=(marks,precentageofMarks)=>{
return precentageofMarks(marks)

}

function precentageofMarks(value){
let precentage = (value*100)/500
return result(precentage) 

}
function result(value){

return `The precentage is ${value}`

}

console.log(func(453,precentageofMarks,result))