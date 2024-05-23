import { getDate, responses } from "./data.js"

// New JQuery
const $inputEl = $('#text-input')
const $submitBtn = $('#submit-btn')
const $chatField = $('#chat-display')

// const inputEl = document.getElementById('text-input')
// const submitBtn = document.getElementById('submit-btn')
// const chatField = document.getElementById('chat-display')

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

    // New JQuery
    $chatField.html($chatField.html() + newChatTwo(incomingMessage))
    $chatField.scrollTop($chatField.prop('scrollHeight'))

    // chatField.innerHTML += newChatTwo(incomingMessage)
    // chatField.scrollTop = chatField.scrollHeight
}

function sendMessage() {

    let currentDate = getDate()

    let displayDate = currentDate.displayDate
    let displayTime = currentDate.displayTime

    if($inputEl.val() === '') {
        return
    }

    const outgoingMessage = {
        sender: 'You',
        message: $inputEl.val(),
        displayDate: displayDate,
        displayTime: displayTime
    }

    // New JQuery
    $chatField.html($chatField.html() + newChat(outgoingMessage))
    $chatField.scrollTop($chatField.prop('scrollHeight'))

    // chatField.innerHTML += newChat(outgoingMessage)
    // chatField.scrollTop = chatField.scrollHeight
    
    // New JQuery
    $inputEl.val('')

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

// New JQuery
$submitBtn.on('click', sendMessage)

// submitBtn.addEventListener('click', sendMessage)


// New JQuery
$inputEl.on('keydown', function(e){
    if(e.keyCode === 13){
        e.preventDefault()
        sendMessage()
    }
})

// Used ChatGPT to help understand & implement the 'keydown' event listener & keyCode 13
/* inputEl.addEventListener('keydown', function(e){
    if(e.keyCode === 13){
        e.preventDefault()
        sendMessage()
    }
}) */