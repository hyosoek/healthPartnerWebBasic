initSidebarItem();

function initSidebarItem(){
    //항목에서 입력받은 만큼만 세부 만들기
    var sideBarItemList = ["우리동네 게시판","운동 TIP 게시판"];
    for(var i = 0; i < 2;i++){
        var sideBarItem = document.createElement("div");
        sideBarItem.innerText = sideBarItemList[i];
        sideBarItem.classList.add("sideBarItemList");
        sideBarItem.id = "sideBarItem" + i.toString();
        document.getElementById("sideBarItemList").appendChild(sideBarItem);
    }
    var firstItem = document.getElementById("sideBarItem0");
    firstItem.style.textDecoration = 'underline';
    firstItem.style.color = '#4855E2';
    firstItem.style.fontWeight = 'bold';

}