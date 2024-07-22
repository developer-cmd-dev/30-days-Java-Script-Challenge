console.log('Day-9')

// Activity-1: Selecting and Manipulating Elements
// Task:1  Select a html elements by its id and change its text color.
const textColor = document.getElementById('textColor')
textColor.style.color = 'blue'

// Task:2 Select and html element by its class and change its background color.
const backgroundColor = document.getElementsByClassName('backgroundColor')
backgroundColor[0].style.backgroundColor = 'red';


// Activity:2 Creating and appending elements
// Task:3 Create a div element with some text content and append it to body
const element = document.createElement('div')
element.innerText = 'Append Element'
document.body.appendChild(element)


// Task:4 Create a new li element and add it to an existing ul list.
const liElement = document.createElement('li')
const ulElement = document.getElementById('ulList')
liElement.innerText = 'Last Child'
ulElement.append(liElement)


// Activity:3 Removing Elements
// Task:5 Select and html element and remove it form the DOM.
const removeElement = document.getElementById('removeElement')
document.body.removeChild(removeElement)

// Task:6 Remove the last child of a specific html element.
const lastChild = ulElement.lastElementChild
ulElement.removeChild(lastChild)


// Activity:4 Modifying Attributes and classes
// Task:7 Select and html element and change one of ites attributes(e.g., src of and img tag.)
const img = document.getElementById('img')
img.setAttribute('src', 'https://images.pexels.com/photos/10147934/pexels-photo-10147934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')


// Task:8 Add and remove a css class to/from and html element
const classElem = document.getElementById('class')
classElem.classList.add('addClass')
classElem.removeAttribute('class')


// Activity-5: Event Handling
// Task:9 Add a click event listener to a button that changes the text content of a paragraph.
const changeText = document.getElementById('changeText')
changeText.addEventListener('click',()=>{
textColor.innerText = 'Changed text'
})

// Task:10 Add a mouseover event listener to an element that changes its border color.
const mouseOver = document.getElementById('mouseOver')
mouseOver.addEventListener('mouseover',()=>{
    let randomHexcolor = Math.floor(Math.random()*1000)
    mouseOver.style.border = `8px solid #${randomHexcolor}`
})



