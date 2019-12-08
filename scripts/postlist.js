var deleteModal = document.getElementById("delete-modal");

//deletes the post 
function del(id) {
    deleteModal.style.display = "block";  
    var yes = document.getElementById("yes");
    yes.onclick = function() {
    var post=document.getElementById(id);
    post.remove();
    deleteModal.style.display = "none";
    } 
  }

//after clicking the no button, same is displayed without being refreshed
var no = document.getElementById("no");
no.onclick = function() {
    deleteModal.style.display = "none";
  } 
