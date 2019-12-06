var postModal = document.getElementById("post-modal");
var createButton = document.getElementById("create");
var post_close = document.getElementById("c");

// When the user clicks on the button, open the modal
createButton.onclick = function() {
    postModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
post_close.onclick = function() {
    postModal.style.display = "none";
}