var signupModal = document.getElementById("signup-modal");

// Get the button that opens the modal
var signupButton = document.getElementById("signup");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
signupButton.onclick = function() {
  signupModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  signupModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signupModal) {
    signupModal.style.display = "none";
  }
}