console.log("Day-14")


// Activity-1: Class definition.
// Task:1 Define a class "Person" with properties name and age, and a method return to a gretting message. Create an instance of the class and log the greeting message.

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Welcome ${this.name} and your age is ${this.age}`)

    }
    
    updates(value){
        this.age = value
        console.log(`${this.age} - age is updated.`)
    }

    static message(){
        return `This is static method.`  //Created static method and return his value.
    }

    get name(){         //Creted getter method to return new name
        return this._name
    }
    set name(value){    //Set new name in getter
        this._name = value
    }
 
}

const person1 = new Person('Dev Mandal',25)
console.log(person1)
person1.greet()

// Task:2 Add a method to the person class that updates the age property and logs the updated age.
person1.updates(28)




// Activity-2: Class Inheritance
// Task:3 Define a class students that extends the person class. Add property studentid and a method to return the student id. Create instance of the student class and log the student id

class students extends Person{
    static studentsCounts = 0  //Created static student counts properties.
    constructor(name,age,studentId){
        super(name,age)
        this.studentId = studentId
        students.studentsCounts++  //Updating Number of students.
    }


    id(){
        return `The studend id is ${this.studentId}`
    }

    greet(){
        console.log(`Welcome ${this.name} and your age is ${this.age} and the id is ${this.studentId}`) // Overriding greet message of person class.
    }
    

    


}

const student1 = new students('dev',24,34)
console.log(student1)
console.log(student1.id())

// Task:4 Override the greeting method in the student class to include the student id in the message.log the overridden greeting message.
student1.greet()



// Activity-3: Static Methods and properties.
// Task:5 Add a static method to the person class  that returns a generic message. Call the static method without creating instance of the class and log the message.

console.log(Person.message());


// Task:6 Add a static property to the student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

const studend2 = new students('Student1',34,45)
const studend3= new students('Student1',34,45)
const studend4 = new students('Student1',34,45)
console.log(`Total Number of students = ${students.studentsCounts}`)


// Activity-4: Getters and setters.
// Task:7 Add a getter method to the person class to return the full name (assume a firstname and lastname property). Create an instance and log the full name using the gatter.
console.log(person1.name)


// Task:8 Add a setter method to the person class to update the name properties (firstname and lastname). Update the name using the setter and log the updated full name.
console.log(person1._name)




// Activity-5: Private fields
// Task:9 Define a class account with private field for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
    #balance
    constructor(balance){
        this.#balance = balance
    }

    deposit(value){
        this.#balance += value
        return `${value} rupee is credited in your a/c. Total balance available in your a/c-${this.#balance }` 
    }

    withDraw(value){
        this.#balance-=value
        return `${value} rupee is withdraw from your a/c. Total balance is - ${this.#balance }`
    }

   

    

}

// Task:10 Create an instance of the account class and test the deposite and withdraw methods, logging the balance after each operation.
let accountHolder = new Account(10000)
console.log(accountHolder.deposit(5000))
console.log(accountHolder.withDraw(2000))
