const apiKey = 'VF.DM.66a56ef45c0c46284602c180.iW0E2jUdCKLHEAIj';
const apiUrl = 'https://general-runtime.voiceflow.com/runtime/66954781f903b5ab22255426/interact';

async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (!userInput) return;

    displayMessage(userInput, 'user');
    document.getElementById('user-input').value = '';

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({ message: userInput })
    });

    const data = await response.json();
    displayMessage(data.queryResult.fulfillmentText, 'bot');
}

function displayMessage(message, sender) {
    const messageContainer = document.createElement('div');
    messageContainer.className = `message ${sender}`;
    messageContainer.innerText = message;
    document.getElementById('messages').appendChild(messageContainer);
    document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
}
