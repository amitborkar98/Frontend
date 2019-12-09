var edit = document.getElementById("edit");
var title = document.getElementsByClassName("post-title")[0];
var description = document.getElementById("description");

edit.onclick = function(){
    description.style.borderStyle = "solid";
    description.style.borderColor="pink";
    title.style.borderColor="pink";
    title.style.borderStyle="solid";
    edit.innerHTML=" Save";
    edit.className="fa fa-floppy-o";
    
    
    title.innerHTML= '<textarea cols="170" rows="5" id="text1">'+document.getElementById("post-title-content").innerHTML+'</textarea>';
    description.innerHTML = '<textarea cols="170" rows="10" id="text2">'+description.innerHTML+'</textarea>';
    edit.onclick =function(){
        title.innerHTML= '<p>' +'UPDATED :'+ text1.value +'</p>' ;
        description.innerHTML = text2.value; 
        description.style.borderStyle = "";
        description.style.borderColor="";
        title.style.borderColor="";
        title.style.borderStyle="";
        edit.innerHTML=" Edit";
        edit.className="fa fa-pencil-square";
        }
}

function addComments(id){
    var comment = id.value +'<br>';
    var textarea = document.getElementById('userComments');
    document.getElementById('comments').style.padding="10px";
    document.getElementById('comments').innerHTML = '<p class="comment-text">'+comment+'</p>' + document.getElementById('comments').innerHTML;          
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
