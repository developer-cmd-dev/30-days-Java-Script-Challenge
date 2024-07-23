console.log('Day-10');


// Activity-1: Basic Event Handling.
// Task:1 Add a click event listener to a button that changes the text content of paragrah.
const paragrah = document.getElementById('paragraph')
const changeTxtBtn = document.getElementById('changeTxtBtn')
changeTxtBtn.addEventListener('click',()=>{
    paragrah.innerText='This is changed paragraph'
})

// Task:2 Add a double click event listener to an image that toggles its visibility.
const img = document.getElementById('img')
const visibility = document.getElementById('Visibility')
let display = 'block'
visibility.addEventListener('click',()=>{
display = display == 'block'?'none':'block'
   img.style.display= display
})




// Activity-2: Mouse-Events
// Task:3 Add a mouseover event listener to an element that changes its background color.
const mouseover = document.getElementById('Mouseover')

mouseover.addEventListener('mouseover',()=>{
    let randomHexColor = Math.floor(Math.random()*1000)
    mouseover.style.backgroundColor = `#${randomHexColor}`
})

// Task:4 Add a mouseout event listener to an element that resets its background color.
mouseover.addEventListener('mouseout',()=>{
    mouseover.style.backgroundColor = ''
})



// Activity-3: key-board event
// Task:5 Add a keydown event listener to an input field that logs the key pressed to the console.
const inputField = document.getElementById('inputField')
inputField.addEventListener('keydown',()=>{
    console.log(inputField.value)
})

// Task:6 Add a keyup event listener to an input field that displays the current value in a paragraph.
inputField.addEventListener('keyup',()=>{
    console.log(paragrah.innerText)
})



// Activity-4: Form Events.
// Task:7 Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const email = document.getElementById('email')
const password = document.getElementById('password')
const submitBtn = document.getElementById('submitBtn')
submitBtn.addEventListener('click',(e)=>{
e.preventDefault()
console.log('This is email', email.value,'and this is password ',password.value)

})

// Task:8 Add a change event listener to a select dropdown that displays the selected value in paragraph.
const animeList = document.getElementById('animeList')
animeList.addEventListener('change',()=>{
    console.log(animeList.value)
})



// Activity-5: Event deligation.
// Task:9 Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const chooseLang = document.getElementById('chooseLang')
chooseLang.addEventListener('click',(e)=>{
    
    if(e.target.tagName ==='P' ){
        console.log(e.target.innerText)
    }
    
})

// Task:10 Add an event listener to a parent element that listeners for events from dynamically added child element.
const frameWorks = document.getElementById('frameWorks')
frameWorks.addEventListener('click',(e)=>{
console.log(e.target)
})
