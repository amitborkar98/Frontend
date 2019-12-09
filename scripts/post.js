//function to edit the title and content of the post
edit.onclick = function(){
    var edit = document.getElementById("edit");
    var title = document.getElementsByClassName("post-title")[0];
    var description = document.getElementById("description");

    //changes the border of title and description of the posts to pink
    description.style.borderStyle = "solid";
    description.style.borderColor = "pink";
    title.style.borderColor = "pink";
    title.style.borderStyle = "solid";
    //chnages the text inside the edit button to save
    edit.innerHTML = " Save";
    edit.className = "fa fa-floppy-o";
    //adding text are to title and description to edit the text
    title.innerHTML = '<textarea cols="170" rows="5" id="text1">' +document.getElementById("post-title-content").innerHTML+ '</textarea>';
    description.innerHTML = '<textarea cols="170" rows="10" id="text2">' +description.innerHTML+ '</textarea>';
    
    //click the button again to save the edited content 
    edit.onclick =function(){
        //updates value of title and description of the post
        title.innerHTML = '<p>' +'UPDATED: '+ text1.value +'</p>' ;
        description.innerHTML = 'UPDATED: ' + '<br>' + text2.value; 
        //removing the border
        description.style.borderStyle = "";
        description.style.borderColor = "";
        title.style.borderColor = "";
        title.style.borderStyle = "";
        //changing the button text back to edit
        edit.innerHTML = " Edit";
        edit.className = "fa fa-pencil-square";
        }
}

//function to add new comments to the post
function addComments(id){
    //getting the comment from the textarea
    var comment = id.value +'<br>';
    var textarea = document.getElementById('userComments');
    document.getElementById('comments').style.padding = "10px";
    //adding the comment in the comment area section
    document.getElementById('comments').innerHTML = '<p class="comment-text">'+comment+'</p>' + document.getElementById('comments').innerHTML;          
    textarea.value=textarea.defaultValue;   
}

//function to display the like functionality
var numberOfClicks=0;
function postLiked(){
    //changing the text of like button to liked
    document.getElementById("like").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked!";
    numberOfClicks += 1;
    if(numberOfClicks != 0){
        if (numberOfClicks == 1){
            document.getElementById('like-desc').innerHTML = numberOfClicks + " person likes this!";
        }
        else {
            document.getElementById('like-desc').innerHTML = numberOfClicks + " people have liked this!";
        }
    }
}
