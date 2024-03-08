//Functie pentru a aparea chatbox-ul cand butonul este apasat
document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById("check1");
    var messageInput = document.getElementById('message-input');
    var sendButton = document.getElementById('send-button');

    if (checkbox && messageInput && sendButton) {
        checkbox.addEventListener("change", toggleChatElements);
        messageInput.addEventListener('input', adjustTextAreaHeight);
    }



    function toggleChatElements() {
        var checkbox = document.getElementById('check1');
        var messageInput = document.getElementById('message-input');
        var sendButton = document.getElementById('send-button');

        if (checkbox.checked) {
            messageInput.style.display = 'inline-block';
            sendButton.style.display = 'inline-block';
        } else {
            messageInput.style.display = 'none';
            sendButton.style.display = 'none';
        }
    }

    function adjustTextAreaHeight() {
        var textarea = document.getElementById('message-input');
        textarea.style.overflowY = 'hidden'; // Hide vertical scrollbar
        textarea.scrollTop = 0; // Set scrollTop to 0
        textarea.style.height = 'auto'; // Reset the height to auto
        textarea.style.height = textarea.scrollHeight + 'px'; // Set the height to the scroll height
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById("check2");
    var messageInput = document.getElementById('email-input');
    var sendButton = document.getElementById('send-email-button');

    if (checkbox && messageInput && sendButton) {
        checkbox.addEventListener("change", toggleChatElements);
        messageInput.addEventListener('input', adjustTextAreaHeight);
    }



    function toggleChatElements() {
        var checkbox = document.getElementById('check2');
        var messageInput = document.getElementById('email-input');
        var sendButton = document.getElementById('send-email-button');

        if (checkbox.checked) {
            messageInput.style.display = 'inline-block';
            sendButton.style.display = 'inline-block';
        } else {
            messageInput.style.display = 'none';
            sendButton.style.display = 'none';
        }
    }

    function adjustTextAreaHeight() {
        var textarea = document.getElementById('email-input');
        textarea.style.overflowY = 'hidden'; // Hide vertical scrollbar
        textarea.scrollTop = 0; // Set scrollTop to 0
        textarea.style.height = 'auto'; // Reset the height to auto
        textarea.style.height = textarea.scrollHeight + 'px'; // Set the height to the scroll height
    }
});

// Password

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById("check2");
    var messageInput = document.getElementById('password-input');
    var sendButton = document.getElementById('send-password-button');

    if (checkbox && messageInput && sendButton) {
        checkbox.addEventListener("change", toggleChatElements);
        messageInput.addEventListener('input', adjustTextAreaHeight);
    }

    function toggleChatElements() {
        var checkbox = document.getElementById('check2');
        var messageInput = document.getElementById('password-input');
        var sendButton = document.getElementById('send-password-button');

        if (checkbox.checked) {
            messageInput.style.display = 'inline-block';
            sendButton.style.display = 'inline-block';
        } else {
            messageInput.style.display = 'none';
            sendButton.style.display = 'none';
        }
    }

    function adjustTextAreaHeight() {
        var textarea = document.getElementById('password-input');
        textarea.style.overflowY = 'hidden'; // Hide vertical scrollbar
        textarea.scrollTop = 0; // Set scrollTop to 0
        textarea.style.height = 'auto'; // Reset the height to auto
        textarea.style.height = textarea.scrollHeight + 'px'; // Set the height to the scroll height
    }
});