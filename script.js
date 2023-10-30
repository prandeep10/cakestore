document.getElementById('menuBtn').addEventListener('click', function(event) {
    event.stopPropagation();
    document.querySelector('.nav-links').classList.toggle('active');
});

// Add a click event listener to close the menu when clicking anywhere else on the screen
document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.classList.contains('active') && !event.target.closest('nav')) {
        navLinks.classList.remove('active');
    }
});


// Call Button JS 
const callButton = document.getElementById('callButton');
const callOptions = document.getElementById('callOptions');
const body = document.body;

callButton.addEventListener('click', () => {
    callButton.classList.add('clicked');
    body.classList.add('blur');
    callOptions.style.display = 'block';
});

// Close the options if clicked outside
document.addEventListener('click', (e) => {
    if (!callOptions.contains(e.target) && e.target !== callButton) {
        callOptions.style.display = 'none';
        callButton.classList.remove('clicked');
        body.classList.remove('blur');
    }
});
