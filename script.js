import { getDate, responses } from "./data.js"

const inputEl = document.getElementById('text-input')
const submitBtn = document.getElementById('submit-btn')
const chatField = document.getElementById('chat-display')

function getReply() {
    let reply = ''
    let randomNum = Math.floor(Math.random() * responses.length)
    reply = responses[randomNum]
    return reply
}

function receiveMessage() {

    let currentDate = getDate()

    let displayDate = currentDate.displayDate
    let displayTime = currentDate.displayTime

    let output = getReply()

    const incomingMessage = {
        sender: 'Danny',
        message: output,
        displayDate: displayDate,
        displayTime: displayTime
    }

    chatField.innerHTML += newChatTwo(incomingMessage)
    chatField.scrollTop = chatField.scrollHeight
}

function sendMessage() {

    let currentDate = getDate()

    let displayDate = currentDate.displayDate
    let displayTime = currentDate.displayTime

    if(inputEl.value === '') {
        return
    }

    const outgoingMessage = {
        sender: 'You',
        message: inputEl.value,
        displayDate: displayDate,
        displayTime: displayTime
    }

    chatField.innerHTML += newChat(outgoingMessage)
    chatField.scrollTop = chatField.scrollHeight

    inputEl.value = ''

    setTimeout(receiveMessage, 1000)
}

function newChat(outgoingMessage) {
    return `
        <div class="message-bubble" id="message-bubble">
            <p class="sender" id="sender">${outgoingMessage.sender}</p>
            <p class="message-content" id="message-content">${outgoingMessage.message}</p>
            <div class="date-time" id="date-time">
                <p class="date" id="date">${outgoingMessage.displayDate}</p>
                <p class="time" id="time">${outgoingMessage.displayTime}</p>
            <div>
        </div>`
}

function newChatTwo(incomingMessage) {
    return `
        <div class="message-bubble-incoming" id="message-bubble-incoming">
            <p class="sender" id="sender">${incomingMessage.sender}</p>
            <p class="message-content" id="message-content">${incomingMessage.message}</p>
            <div class="date-time" id="date-time">
                <p class="date" id="date">${incomingMessage.displayDate}</p>
                <p class="time" id="time">${incomingMessage.displayTime}</p>
            <div>
        </div>`
}

submitBtn.addEventListener('click', sendMessage)

// Used ChatGPT to help understand & implement the 'keydown' event listener & keyCode 13
inputEl.addEventListener('keydown', function(e){
    if(e.keyCode === 13){
        e.preventDefault()
        sendMessage()
    }
})