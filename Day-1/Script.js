console.log('Day-1')

// Activity-1 
    // Task-1 Declare a variable using 'var', assign it a number, and log the value to the console.
    var number = 1;
    console.log(number)

    // Task-2 Declare a variable using 'let', assign it a string, and log the value to the console.
    let string = "Hitesh sir is great teacher"
    console.log(string)

// Activity-2 
    // Task-3 Declare a variable using 'const', assign it a boolean value, and log the value to the console.
    const boolValue = true;
    console.log(boolValue)

// Activity-3
    // Task-4 Create a variables of different data types(number, string, object, boolean, array) and log each value using typeof operator.
    let number2= 1234567;
    let string2= "Chai aur Code";
    let booleanValue2= true;
    let object = {
        id:1,
        name:'Dev kumar',
    }
    let arr = [1,2,3,4,5,6,7,8,9,0]

    console.log(number2, typeof number)
    console.log(string2, typeof string2)
    console.log(booleanValue2, typeof booleanValue2)
    console.log(object, typeof object)
    console.log(arr, typeof arr)

// Activity-4 
    // Task-5 Declare a variable using 'let', assign it initial value, reassign a new value, and log both values to the console.
    let name = 'Dev'

    function changeName (value){
        name = value
        console.log('Changed value -',name)
    }
    console.log('Old value -', name)
    changeName('Dev Kumar')

// Activity-5
    // Task-6 Try reassigning a variable declared with 'const' and observe the error.

    const constantVar= 45;
    constantVar = 56;
    console.log(constantVar);

// Reassignment Demo : Create a script that demonstrates the difference in behavior between 'let' and 'const' when it comes to reassigment

// let:
  let id = 12;
  let newid = 10;
    // Changing the old id value in let
    id = newid
    console.log(id)

// Const:
const address = 'Banglore'
const newAddress = 'Delhi'
    // Changing the old address in const
    address = newAddress
    console.log(address) //It will throw a error which is the dev cannot change the value of const because it is contant variable.



