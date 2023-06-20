boardInit();

function boardInit(){
    boardTagInit();
}

function boardTagInit(){

    for(var i = 0; i < 30;i++){
        var postTitle = document.createElement("span");
        postTitle.classList.add("postTitle");
        postTitle.innerText = "테스트용 제목입니다. 추가해주세요.";

        var postDate = document.createElement("span");
        postDate.classList.add("elseGuide");
        postDate.innerText = "00:31";
        
        var postUser = document.createElement("span");
        postUser.classList.add("elseGuide");
        postUser.innerText = "최효석";

        var postItem = document.createElement("div");
        postItem.classList.add("postItem");
        postItem.appendChild(postTitle);
        postItem.appendChild(postDate);
        postItem.appendChild(postUser);
        document.getElementById("postList").appendChild(postItem);
        postItem.addEventListener('click',buttonEvent("/healthpartnerWeb/html/showPostPage.html"))
    }
    document.getElementById("postBtn").addEventListener('click',buttonEvent("/healthpartnerWeb/html/writePostPage.html"));
    
}
function buttonEvent(address) { // 사실 이것도 전 함수 공용으로 바꾸면 좋을 듯
    return function(event) {
        location.href = address;
      }
}