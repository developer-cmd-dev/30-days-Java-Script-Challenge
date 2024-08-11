console.log('Checkout')


function totalAmount(){
    const totalAmount = document.getElementById('showPrice')

    totalAmount.innerText = localStorage.getItem('totalPrice')
}

totalAmount()

const input = document.querySelectorAll('.input')
const placeorder = document.getElementById('place-order')
const name = document.getElementById('name')
const lastname = document.getElementById('last-name')
const address = document.getElementById('address')
const cardnumber = document.getElementById('card-number')
const expirydate = document.getElementById('expiry-date')
const cvv = document.getElementById('cvv')
const formSection = document.getElementsByTagName('form')
const paymentPage = document.querySelector('.payment-notification')


let userDataObj = {}
function userData(){
placeorder.addEventListener('click',(e)=>{
    e.preventDefault()
if(name.value ==''&&lastname.value == ''&&address.value == '' && cardnumber.value ==''&&expirydate.value ==''&&cvv.value ==''){
    alert('Please fill the details')
}else{
formSection[0].style.display='none'
paymentPage.style.display = 'block'
}


    console.log(userDataObj)
})
}

userData()