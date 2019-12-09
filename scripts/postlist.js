var deleteModal = document.getElementById("delete-modal");

//deletes the post 
function del(id) {
    deleteModal.style.display = "block";  
    var yes = document.getElementById("yes");
    yes.onclick = function() {
    var post=document.getElementById(id.id);
    post.remove();
    deleteModal.style.display = "none";
    } 
  }

//after clicking the no button, same page is displayed without being refreshed
var no = document.getElementById("no");
no.onclick = function() {
    deleteModal.style.display = "none";
  } 

//function to display the box shadow over post on mouseover event
function boxShadow(id){
  var post = document.getElementById(id.id);
  post.style.boxShadow = "2px 20px lightgray";
  }

//function to remove box shadow of post on mouseout event
function removeShadow(id){
  var post = document.getElementById(id.id);
  post.style.boxShadow = "0px 0px";
  }


  