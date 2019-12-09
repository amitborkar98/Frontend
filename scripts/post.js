var edit = document.getElementById("edit");
var title = document.getElementsByClassName("post-title")[0];
var description = document.getElementById("description");

edit.onclick = function(){
    description.style.borderStyle = "solid";
    description.style.borderColor="pink";
    title.style.borderColor="pink";
    title.style.borderStyle="solid";
    edit.innerHTML=" Save";
    edit.onclick = function(){
        description.style.borderStyle = "";
        description.style.borderColor="";
        title.style.borderColor="";
        title.style.borderStyle="";
        edit.value=edit.defaultValue;
    }
}

function addComments(id){
    var comment = id.value +'<br>';
    var textarea = document.getElementById('userComments');
    document.getElementById('comments').style.padding="10px";
    document.getElementById('comments').innerHTML += '<p class="comment-text">'+comment+'</p>';          
    textarea.value=textarea.defaultValue;   
}

var numberOfClicks=0;
function postLiked(){
    document.getElementById("like").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked!";
    numberOfClicks += 1;
    if(numberOfClicks!=0){
        if (numberOfClicks==1){
            document.getElementById('like-desc').innerHTML = numberOfClicks + " person likes this!";
        }
        else {
            document.getElementById('like-desc').innerHTML = numberOfClicks + " people have liked this!";
        }
        }
    }