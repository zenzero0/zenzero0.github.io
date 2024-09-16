document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message, ' + document.getElementById('name').value + '!');
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Basic validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields!');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address!');
        return;
    }

    alert('Thank you for your message, ' + name + '!');
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
