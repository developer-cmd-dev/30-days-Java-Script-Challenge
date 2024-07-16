console.log('Day-3')

// Activity-1 If-else Statement
// Task-1 Write a program to chekc if a number is positive, negative, or zero, and log the result to the console.
const positiveNum = 14;
if (Math.sign(positiveNum) === 1) {
    console.log('The number is positive')
} else {
    console.log('The number is negative')
}

const negativeNum = -100
if (Math.sign(negativeNum) === -1) {
    console.log('The number is negative')
} else {
    console.log('The nubmer is positive')
}

const zeroNum = 0
if (Math.sign(zeroNum) === 0) {
    console.log('The number is zero')
}

// Task-2 Write a program to check if a person is eligible to vote (age>= 28) and log the result to the console.
let getValue =  prompt('Enter Your age')
const age = Number.parseInt(getValue)
if (age >= 18) {
    console.log('You are eligible to vote')
} else {
    console.log('You are not eligible to vote')
}

// Activity-2 Nested if-else statement
// Task-3 Write a program to find the largest of three nubmers using nested if-else statements.
const num1 = 5;
const num2 = 18;
const num3 = 10;
if (num1 >= num2) {
    if (num1 >= num3) {
        console.log('the largest number is = ', num1)
    } else {
        console.log('the largest number is = ', num3)
    }
} else {
    if (num2 >= num1) {
        if (num2 >= num3) {
            console.log('The largest number is = ', num2)
        }
    } else {
        console.log('The largest number is = ', num1)
    }
}

// Activity-3
// Task-4 Write a program that uses the switch case to determine the day of the week based on nubmer(1-7) and log the result to the console.
const inputValue =  prompt('Enter week number from 1 - 7 to know the index of weeks ')
const weekIndex = Number.parseInt(inputValue)

switch (weekIndex) {
    case 1:
        console.log('The day name is Sunday')
        break;
    case 2:
        console.log('The day name in Monday')
        break;
    case 3:
        console.log('The day name is Tuesday')
        break;
    case 4:
        console.log('The day name is Wednesday')
        break
    case 5:
        console.log('The day name Thursday')
        break;
    case 6:
        console.log('The day name is Friday')
        break;
    case 7:
        console.log('The day name is Saturday')
        break;


    default:
        console.log('The input number in not from 1 to 7')
        break;
}

// Task-5 Write a program that uses the switch case to assign a grade (A,B,C,D,F) and log the result to the console.
const takeMarks = prompt('Enter your marks which you obtain in exam and know your grade.')
const marksValue = Number.parseInt(takeMarks)
switch (true) {
    case marksValue <= 100:
        console.log('Your grade is F.')
        break;
    case marksValue <= 200:
        console.log('Your grade is D.')
        break;
    case marksValue <= 300:
        console.log('Your grade is C.')
        break;
    case marksValue <=450:
        console.log('Your grade in B.')
        break;
    case marksValue <=499:
        console.log('Your grade is A')
        break;
    
        default:
            console.log('You enterred wrong marks.')
        break;
}

// Activity - 4 Conditonal (Ternary) Operator.
// Task-6 Write a program that uses the ternary operator to check if number is even or odd and log the result to the console.
const number= 14;
const checkNum = number%2
checkNum === 1 ?console.log('The number is Odd'):console.log('The number in even')

// Activity-5 Combining conditions
// Taks-7 Write a program to check if a year is leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

const takYear = prompt("Enter year to check the year is leap or not.")
const yearValue = Number.parseInt(takYear)
const normalYear = yearValue%4
const centuryYear = yearValue%400

if(normalYear === 0 || centuryYear === 0){
    console.log(yearValue,' this year is leap year.')
}else{
    console.log(yearValue, ' this year is not leap year.')
}