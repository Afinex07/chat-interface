




// pro2.js

// Sample username and password for validation (you can replace these with real values or use an API)
const validUsername = 'Afinex07';
const validPassword = 'Afinex';

// Get references to the HTML elements
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
const loginContainer = document.querySelector('.login-container');
const chatContainer = document.querySelector('.chat-container');

// Listen for the form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission and page reload

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Validate the login credentials
    if (username === validUsername && password === validPassword) {
        // If credentials are correct, hide the login form and show the chat interface
        loginContainer.style.display = 'none';
        chatContainer.style.display = 'block';
    } else {
        // If credentials are incorrect, show an error message
        errorMessage.textContent = 'Invalid username or password. Please try again.';
        errorMessage.style.color = 'red';
    }
});

// Chat functionality (basic)
const sendButton = document.getElementById('send-btn');
const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');

sendButton.addEventListener('click', function() {
    const message = chatInput.value;
    if (message) {
        // Create a new message element and append it to the chat box
        const newMessage = document.createElement('div');
        newMessage.textContent = message;
        chatBox.appendChild(newMessage);
        chatInput.value = ''; // Clear input field
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
    }
});

// Optional: Allow pressing "Enter" to send a message
chatInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});

let btn = document.getElementById('send-btn')
btn.addEventListener('click', sendMessage);

function sendMessage(){
   //alert("Button Clicked")
   const chatInput = document.getElementById('chat-input');
   const messageText = chatInput.value
   console.log(messageText)
   if(messageText !== ''){
g    appendMessage('Afinex', messageText, '2mins ago');
    chatInput.value = '';
    setTimeout(()=>{
        appendMessage('Afinex enterprise', 'your next bill is due on dec 12', 'just now');
    },1000)
   }
}
document.addEventListener('keydown', function(e){
    if(e.key== "Enter"){
        sendMessage()
    }
})

function appendMessage(userName, messageText, time){
    const chatInput = document.getElementById('chat-box')

    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    //console.log(messageElement)

    const avatarElement = document.createElement('div');
    avatarElement.classList.add('avatar');
    avatarElement.innerHTML = `<img src="th.jpg">`;
   // console.log(avatarElement)
   
   const messageContentElement = document.createElement('div');
   messageContentElement.classList.add('message-content');
   messageContentElement.innerHTML = `
   <div>${messageText}</div>
   <div class="user-name">${userName} - <span class="time">${time}</span><div>
   `;


   messageElement.appendChild(avatarElement);
   messageElement.appendChild(messageContentElement);
   chatInput.appendChild(messageElement);
}
