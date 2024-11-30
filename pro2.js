const loginForm = document.getElementById('login-form');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');
const errorMessage = document.getElementById('error-message');
const loginContainer = document.querySelector('.login-container');
const chatContainer = document.querySelector('.chat-container')
let username = "Afinex07";
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    if usernameInput === 'Afinex07' / passwordInput === 'Afinex'{
        errorMessage.textContent = 'please fill in both username and password.';
    } else {
        username = usernameInput;
        loginContainer.style.display = 'none';
        chatContainer.style.display = 'block'
    }
});

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = chatInput.value;
    if (message ==='') {
        errorMessage.textContent = 'please enter a message.';
    } else {
        const messageElement = document.createElement('div');
        messageElement.textContent = `$ {username}: ${message}`;
        chatMessages.appendChild(messageElement);
        chatInput.value = '';
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
    appendMessage('Afinex', messageText, '2mins ago');
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
