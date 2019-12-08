var signupModal = document.getElementById("signup-modal");
var signupButton = document.getElementById("signup");
var signup_close = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
signupButton.onclick = function() {
  signupModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
signup_close.onclick = function() {
  signupModal.style.display = "none";
}

var signinModal = document.getElementById("signin-modal");
var signinButton = document.getElementById("signin");

// When the user clicks on the button, open the modal
signinButton.onclick = function() {
  signinModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
var signin_close = document.getElementsByClassName("close")[1];
signin_close.onclick = function() {
  signinModal.style.display = "none";
}

var hyperlink = document.getElementById("b");

//when the user clicks on sign up hyperlink, close the sigin modal and opens the signup modal
hyperlink.onclick = function() {
  signinModal.style.display = "none";
  signupModal.style.display = "block";
}