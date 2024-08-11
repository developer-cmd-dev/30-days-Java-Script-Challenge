
// Poster Slider.

let posterPathArr = [
    '../Assests/Backgrounds/dragon-age-the-3840x2160-17329.jpg',
    'https://lifehacker.com/imagery/articles/01HF2GSGJWPV0KJFBZWF2YNQAP/hero-image.fill.size_1200x675.jpg',
    'https://dlcdnrog.asus.com/rog/media/1674705497799.webp',
    'https://dlcdnwebimgs.asus.com/files/media/6E60420A-1D50-4B33-AF9D-B10B6CBC710C/v1/img/gallery/gallery-1.jpg'
]

let posterNameArr = ['Games', 'Graphics Card.', 'Gaming Laptop.', 'PC Accessories.']
const allPosterContainers = document.querySelectorAll('.slider-poster')
function posterSlider() {

    allPosterContainers.forEach((Element, index) => {
        const backgroundImage = `linear-gradient(to bottom left,rgba(0,0,0,0),rgba(0,0,0,0.3)), url(${posterPathArr[index]})`
        Element.style.backgroundImage = backgroundImage;
        Element.firstElementChild.innerText = `# ${posterNameArr[index]}`



        let a = 1
        setInterval(() => {
            if (a == allPosterContainers.length) {
                Element.style.transform = `translate(${0}px )`
                a = 0
            }
            Element.style.transform = `translate(${a * -1377}px )`
            a++

        }, 4000);

    })


}

posterSlider()





// Data Handelling
async function data() {
    const gameData = await fetch('./JsonData/games.json')
    const gamingLaptopData = await fetch('./JsonData/gamingLaptop.json')
    const graphicsCardData = await fetch('./JsonData/graphicscard.json')
    const pcAccessoriesData = await fetch('./JsonData/pcAccess.json')
    const game = await gameData.json()
    const gamingLaptop = await gamingLaptopData.json()
    const graphicsCard = await graphicsCardData.json()
    const pcAccess = await pcAccessoriesData.json()
    return [game, graphicsCard, gamingLaptop, pcAccess]

}


const productContainer = document.querySelector('.product-container');
const goToProductPage = document.querySelectorAll('.go-to-page');
const mainPage = document.getElementsByTagName('main');
const productPage = document.querySelector('.all-items-page');
const productHeading = document.getElementById('product-heading');
const navMenu = document.querySelectorAll('.nav-menu');
const navigationProductPageBtn = document.getElementById('navigation-product-page')
let priceArr = [];
let nameArr = [];
let productPosterArr = [];

async function handleData() {
    const jsonData = await data()

    goToProductPage.forEach((e, index) => {


        e.addEventListener('click', (e) => {
            navBarMenu(2)
            mainPage[0].style.display = 'none'
            productPage.style.display = 'block'
            index == 0 ? productHeading.innerText = 'Games' : 'All items';
            index == 1 ? productHeading.innerText = 'Graphics Card' : 'All items';
            index == 2 ? productHeading.innerText = 'Gaming Laptop' : 'All items';
            index == 3 ? productHeading.innerText = 'PC Accesories' : 'All items';
            productContainer.innerHTML = ''
            jsonData[index].forEach((e) => {

                let html = `<div class="products">
                            <div class="products-poster" style="background-image:url(${e.poster});">
            
                            </div>
                            <div class="product-details">
                                <div class="product-name">
                                    <h4>${e.name}</h4>
                                </div>
                                <div class="product-menu">
                                    <div class="product-price">
                                        <p>Price- \u20b9 ${e.price}</p>
                                    </div>
                                    <div class="add-cart-btn" >
                                        <button id="add-cart" style="cursor:pointer;"><img style="width:1.5vw;" src="../Assests/Icones/ic--sharp-shopping-cart.png" alt=""> </button>
                                    </div>
                                </div>
                             
                            </div>
            
                        </div>`
                productContainer.innerHTML += html;
                nameArr.push(e.name)
                productPosterArr.push(e.poster)
                priceArr.push(e.price)


            })
            // console.log(posterPathArr,nameArr,priceArr)
            addCartFunc()
        })


    })


}

handleData()


function handleNavigation() {
    navigationProductPageBtn.addEventListener('click', () => {
        mainPage[0].style.display = 'flex'
        productPage.style.display = 'none'
        navBarMenu(0)
        priceArr = []
        nameArr = []
        productPosterArr = []
        // console.log(priceArr,productPosterArr,nameArr)
    })
}

handleNavigation()



function navBarMenu(value) {
    navMenu.forEach((e, index) => {
        e.style.backgroundColor = '#0000'
        if (index == value) {
            e.style.backgroundColor = '#A6140F'
        }

    })


}


const cartContainer = document.querySelector('.cart-container')
const totalProduct = document.querySelector('.totalProduct');
const totalAmount = document.querySelectorAll('.totalAmount')

let totalPriceArr = []
let totalAmountArr = []
let totalProductCount = 0
let totalPrice = 0
let storeCartItemArr = []

function addCartFunc() {

    const addCart = document.querySelectorAll('.add-cart-btn')
    addCart.forEach((e, index) => {

        e.addEventListener('click', () => {
            totalPriceArr.push(priceArr[index])
            totalProductCount++;
            let totalPriceCount = 0
            totalPrice = totalPriceArr.reduce((acc, currV) => acc + currV, totalPriceCount)
            let storeCartItem = {
                price: priceArr[index],
                name: nameArr[index],
                posterPath: productPosterArr[index],
                productAdded: totalProductCount
            }

            storeCartItemArr.push(storeCartItem)
            totalAmountDataFunc(totalPrice)
            checkOut(totalPrice)
        })
    })

}



function totalAmountDataFunc(totalPrice) {
    productContainer.style.height = '470px'
    cartContainer.style.display = 'flex'
    totalProduct.innerText = `${totalProductCount} `
    totalAmount.forEach((e) => e.innerText = `\u20B9 ${totalPrice} `)
}


const goToCartPageBtn = document.getElementById('cart-page-btn');
const cartpage = document.querySelector('.cart-page');
const cartpageItems = document.getElementById('cart-page-items')
function cartPage() {
    goToCartPageBtn.addEventListener('click', () => {
        productPage.style.display = 'none'
        cartpage.style.display = 'flex'
        navBarMenu(1)
        totalAmountDataFunc(totalPrice)
        cartpageData()
        handleCartPageItems()

    })
}
cartPage()





function cartpageData() {
    cartpageItems.innerHTML = ''
    storeCartItemArr.forEach((e, index) => {
        let html = `<div class="cart-items" >
            <div class="cart-item-poster" style="background-image:url(${e.posterPath});background-position:center;background-size:cover;background-repeat:no-repeat; width:10vw;">
          
            </div>
            <div class="quantity">
                <button class="increment"><img src="../Assests/Icones/ic--round-plus.png" alt=""></button>
                <p class="quantityCount" >1</p>
                <button class="decrement"><img src="../Assests/Icones/ic--baseline-minus.png" alt=""></button>
                <button class="deleteItem"><img src="../Assests/Icones/ic--baseline-delete (1).png" alt=""></button>

            </div>
            <div style="width:20%;display:flex;justify-content:center;">
                <div><p style="color:white;"> \u20B9 ${e.price}</p></div>

            </div>
         
            <div class="item-name" style=" width:30%;display:flex;justify-content:center;">
            
                <h3 style="color: white;">${e.name}</h3>
            </div>
        </div>`

        cartpageItems.innerHTML += html;
    })
    deleteCartItem()

}



function handleCartPageItems() {
    const increment = document.querySelectorAll('.increment')
    const decrement = document.querySelectorAll('.decrement')
    const countItems = document.querySelectorAll('.quantityCount')

 
    let inputValue = 1
    increment.forEach((e, index) => {
        e.addEventListener('click', () => {
             inputValue = Number(countItems[index].innerText)
            console.log(inputValue)
            inputValue++
            countItems[index].innerText = inputValue
            console.log(inputValue)

            totalAmountDataFunc(totalPrice += storeCartItemArr[index].price)
        })

        decrement[index].addEventListener('click', () => {
            inputValue = Number(countItems[index].innerText)
            inputValue--
            countItems[index].innerText = inputValue
            totalAmountDataFunc(totalPrice -= storeCartItemArr[index].price)
        })
     

    })
    console.log('handle cart page loaded',inputValue)
}

function deleteCartItem(){
    const deleteItem = document.querySelectorAll('.deleteItem')
    const countItems = document.querySelectorAll('.quantityCount')

    deleteItem.forEach((e,index)=>{
        e.addEventListener('click', () => {
            console.log(Number(countItems[index].innerText),storeCartItemArr[index].price)
            totalAmountDataFunc(totalPrice -=Number(countItems[index].innerText)*storeCartItemArr[index].price)
            storeCartItemArr.splice(index, 1)
            cartpageData()
            checkOut(totalPrice)
        })
       
    })
    // handleCartPageItems()

}


function checkOut(amount){
    localStorage.setItem('totalPrice',amount)

}