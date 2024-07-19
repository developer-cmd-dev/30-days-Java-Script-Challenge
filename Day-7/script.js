console.log('Day-7')

// Activity-7: Object Creation and Access

// Task-1 Create and object representing a book with properties like title,author,year and log the value to the console.
const books = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
}

console.log(books)

// Task-2 Access and log the title and author properties of the book object.
console.log('The title of the books is ', books.title, ' and the author name is ', books.author)


// Activity-2: Object Methods
// Task-3 Add a method to the book object that returns a string with the books title and author, and log the result of calling this method.

const books2 = {
    title: "1984",
    author: "George Orwell",
    year: 1949
}

function getBooksDetail() {

    return `The title of the book is "${books.title}" and the author name is- ${books.author} `

}
console.log(getBooksDetail())

// Task-4: Add a method to the book object that takes a paremeter and updates the books year property, and log the result of calling this method.

let books3 = { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }

function changeProp(value) {
    books3.year = value
    return books3
}
console.log(changeProp(2024))

// Activity-3: Nested Objects
// Task-5: Create a nested objects representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
    authorName: {
        1: "F. Scott Fitzgerald",
        2: "Harper Lee",
        3: "George Orwell",
        4: "Leo Tolstoy"
    },
    books: {
        1: "The Great Gatsby",
        2: "To Kill a Mockingbird",
        3: "1984",
        4: "War and Peace"
    },
    year: {
        1: 1925,
        2: 1960,
        3: 1949,
        4: 1869
    }
}

console.log(library)

// Task-6: Access and log the name of the library and the titles of all the books in the library.

console.log('Author names of the books in the library are ', library.authorName, ' And the books name are ', library.books, ' and the publishing date of these books are ', library.year)


// Activity-5: Object iteration.
// Task-8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

const booksCollection = {
    1: {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    },
    2: {
        title: "1984",
        author: "George Orwell",
        year: 1949
    },
    3: {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald"
        , year: 1925
    },
    4: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951
    },
    5: {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813
    },
    6: {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937
    },
    7: {
        title: "Moby Dick",
        author: "Herman Melville",
        year: 1851
    },
    8: {
        title: "War and Peace",
        author: "Leo Tolstoy",
        year: 1869
    },
    9: {
        title: "The Odyssey",
        author: "Homer",
        year: 800
    },
    10: {
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        year: 1866
    }
}

 for(let keys in booksCollection){
    let key = booksCollection[keys]
    console.log(`The book name is "${key.title}" and the author name is ${key.author} and the publishing date is ${key.year}`)
 }

//  Task-9: Use object.keys and object.value methosds to log all the keys and values of the book object.

console.log(Object.keys(booksCollection),Object.values(booksCollection))
