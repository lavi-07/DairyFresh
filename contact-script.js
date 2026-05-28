document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('messageBox').value;

  const messageDiv = document.getElementById('message');
  messageDiv.textContent = 'Thank you ' + name + '! Your message has been sent. We will get back to you soon.';
  messageDiv.classList.add('success');
  messageDiv.style.display = 'block';

  document.getElementById('contactForm').reset();

  // Clear message after 5 seconds
  setTimeout(function() {
    messageDiv.style.display = 'none';
  }, 5000);
});
