

const socket = io()




const userInputContainer = document.getElementById('userName')
const blurEffect = document.getElementById('blurEffect')
const name = document.getElementById('username')
const enterChatAppBtn = document.getElementById('setUsernameBtn')
let totalUserCount = 0

function getUserName() {

    enterChatAppBtn.addEventListener('click', () => {
        socket.emit('new-user-joined', name.value)
        userInputContainer.style.display = 'none'
        blurEffect.style.display = 'none'
        totalUserCount++
        joinedUserCount.innerText = totalUserCount

    })



}

getUserName()






let userInfoContainer = document.querySelector('.joined-user-detail')
let joinedUserCount = document.getElementById('user-count')

async function joinedUserInfo() {
    let joinedUsersArray = []
    socket.on('user-joined', name => {
        joinedUsersArray.push(name)
        totalUserCount++

        let html = `   <div class="users">
            <img src="./assests/Icones/emojisky.com-89987.png" alt="">
           <p>${name}</p>
        </div>`
        userInfoContainer.innerHTML += html




        joinedUserCount.innerText = totalUserCount
    })


}

joinedUserInfo()



const sendBtn = document.getElementById('sndMessageBtn')
const messageInput = document.getElementById('messageInp')
const displayMessage = document.querySelector('.see-user-messages')
function sendMessage() {
    sendBtn.addEventListener('click', (e) => {
        const message = messageInput.value
        socket.emit('user-message', message)
        const dispmessage = `<div class="msg-2"><p>${messageInput.value} </p></div>`
        displayMessage.innerHTML += dispmessage
        messageInput.value = ""
    })



    socket.on('message', messageObj => {
        const userMessage = `   <div class="msg-1"><span><p style="color:green;font-size:0.9rem;font-weight:bold;font-style:italic; margin-left:5px; margin-right: 10px;">@${messageObj.name.toLowerCase()} - </p><p>${messageObj.message}</p></span></div>`
        displayMessage.innerHTML += userMessage
      
    })
  

}

sendMessage()







console.log('this is script.js')

