console.log('Day-2')

// Activity-1 Arithmetic Operators.
    // Task-1 Write a program to add two numbers and log the result to the console.
    const add1= 10;
    const add2= 10;
    
    let addition = add1+add2 
    console.log('Addition 10 + 10 =',addition)

    // Task-2 Write a program to substract two numbers and log the result to the console.
    const subs1= 10;
    const subs2= 8;
    
    let substraction = subs1-subs2
    console.log('Substract 10-8 = ',substraction)

    // Task-3 Write a program to multiply two numbers and log the result to the console.
    const multi1= 10;
    const multi2= 8;
    
    let multiply = multi1*multi2
    console.log('Multiply 10 * 8 = ',multiply)

    // Task-4 Write a program to divide two numbers and log the result to the console.
    const divide1= 10;
    const divide2= 2;
    
    let divide = divide1/divide2
    console.log('Divide 2 / 10 = ',divide)

    // Task-5 Write a program to find the remainder when one number is divided by another and log the result to the console.

    const num1 =11;
    const num2 = 2;
    
    let remainder = num1%num2
    console.log('Remainder of 11 /2 = ',remainder)

// Activity - 2 : Assignment Operator
    // Task-6 Use the += operator to add a number to a variable and log the result to the console.
    let number = 10
    number +=14
    console.log('10 += 14 : ',number)
    
    // Task-7 Use the -= operator to add a number to a variable and log the result to the console.
    let number2 = 10
    number2 -= 5
    console.log('10 -= 5 : ',number2)

// Activity - 3 : Comparison Operator
    // Task-8 Write a program to compare two number using > and < and log the result to the console
    const comp1 =12;
    const comp2 = 10

    const result1 = comp1 > comp2
    console.log('12 > 10 = ',result1)
    
    const result2 = comp1 < comp2
    console.log('12 < 10 = ',result2)

    // Task-9  Write a program to compare two number using >= and <= and log the result to the console

    const comp3 = 14;
    const comp4 = 15;
    const result3 = comp3 >= comp4
    console.log('14 >= 15 : ',result3)

    const comp5 = 16;
    const comp6 = 16;
    const result4 = comp5 <= comp6
    console.log('16 <= 16 : ',result4)

    // Task-10 Write a program to compare two number using == and === and log the result to the console.

    const comp7 = '15';
    const comp8 = 15;
    console.log(`'15' == 15 : `,comp7 == comp8 ,`'15' === 15 : `, comp7 === comp8)

// Activity-4 Logical Operator
    // Task-11 Write a program that uses the && Operator to combine two conditions and log the result to the console.
    const logical1 = 15
    const logical2 ='15'
    const logicalResult = logical1 == logical2 && logical1 === logical2
    console.log('Condition 1 is correct and Condition 2 is wrong thats why the result is : ',logicalResult ,' in && Operator.')

    // Task-12 Write a program that uses the || Operator to combine two conditions and log the result to the console.
    const logicalResult2 = logical1 == logical2 || logical1 === logical2
    console.log('Condition 1 is correct and Condition 2 is but the result is : ',logicalResult ,' in || Operator.')

    // Task-13 Write a program that uses the ! Operator to negate a condition and log the result to the console.
    const bool = false 
    if(!bool){
        console.log('The bool value is false')
    }else{
        console.log('The bool value is true')
    }

// Activity -5 Ternary Operator
    // Task-14 Write a program that use the ternary operator to check if number is positive or negative and log the result to the console.
    const ternaryOpt = -134434
    Math.sign(ternaryOpt) === -1?console.log('The number is negative'):console.log('The number is positive')