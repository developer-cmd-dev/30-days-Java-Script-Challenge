console.log('Day-4')

// Activity-1 For loop
// Task-1 Write a program to print number from 1-10 using a for loop
let number = 10;
for(let i=1;i<=number;i++){
    console.log('Number = ',i)
}

// Task-2 Write a program to print the multiplication table of 5 using for loop
let multiplicationNum = 10
let multiplyBy = 5
for(let i=1;i<=multiplicationNum;i++){
    console.log(`5 * ${i} = `,multiplyBy * i)
}

// Activity-2 While loop
// Task-3 Write a program to calculate the sum of nubmers from 1 to 10 using while loop.
let addNum = 0;
let sumOfNum=0
while (addNum <10) {
    addNum ++
    sumOfNum +=addNum
}

console.log('Sum of number from 1 to 10',sumOfNum)

//Task-4 Write a program to print the number from 10 to 1 using a while loop
let num = 10;
while (num > 0) {
  
    console.log('Decreasing Number from 10 to 1',num)
    num--
    
}

// Activity-3 Do...While Loop
// Task-5 Write a program to print number 1 to 5 using a do while loop.
let num2 = 0
do {
    num2++
    console.log('Printing number using do while loop = ', num2)
    
} while (num2 < 10);

// Task-6 Write a program to calculate of factorial of number using do while loop.
let multiplyNum = 0
let factorialNum = 5
do {
    multiplyNum++ 
    factorialNum*=multiplyNum
    console.log(multiplyNum)
    
} while (multiplyNum < 4);
console.log(factorialNum)

// Activity-4 Nested Loop
// Task-7 Write a program to print a star pattern using nested for loops:

let row = 5

let printStar=''
for(let i = 1 ;i<=row;i++){
    let star = ''
    for(let z =1; z<=i;z++){
    star+="*"     
    }
    console.log(star)

}

// Activity-5 Loop control statement.
// Task-8 Write a program to print numbers from 1 to 10, but skip the nubmer 5 using the continute statement.

for(let i=1;i<=10;i++){
    if(i === 5){
        i=6
    }
    console.log(i)
}

// Task-8 Write a program to print numbers from 1 to 10, but stop the loop when nubmer is 7 using the break statement.

for(let i=1;i<=10;i++){
    if(i === 7){
        break
    }
    console.log(i)
}