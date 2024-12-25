const greetButton = document.getElementById('greetButton');
const greetingMessage = document.getElementById('greetingMessage');
greetButton.addEventListener('click', function() {
    if (greetingMessage.style.display === 'none') {
        greetingMessage.style.display = 'block'; 
    } else {
        greetingMessage.style.display = 'none';
    }
});