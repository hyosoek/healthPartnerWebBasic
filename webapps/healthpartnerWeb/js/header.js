headerInit();
headerMenuItemEvent();
console.log("test");
//원래 import 하려했는데 import 설정 문제로 안됨

function headerInit(){
    var headerMenuList = ["매칭","게시판","FAQ","지원"];
    for (var i = 0; i < 4; i++){
        var headerMenuItem = document.createElement("input");
        headerMenuItem.type="button";
        headerMenuItem.value = headerMenuList[i];
        headerMenuItem.classList.add("headerMenuItem");
        headerMenuItem.id = "headerMenuItem" + i.toString();
        document.getElementById("headerMenu").appendChild(headerMenuItem);
    }
}
function headerMenuItemEvent(){
    var addressList = ["","/healthpartnerWeb/html/boardPage.html","",""];
    for(var i = 0; i< 4;i ++ ){
        let headerMenuItem = document.getElementById("headerMenuItem" + i.toString());
        //var로 하면 안됩니다. var과 let의 차이인데, var 전역변수처럼 데이터셋이 갱신되고, let은 임시적입니다.
        headerMenuItem.addEventListener('mouseover', function() {
            headerMenuItem.style.textDecoration = 'underline';
            headerMenuItem.style.color = '#4855E2';
        });
        headerMenuItem.addEventListener('mouseleave', function() {
            headerMenuItem.style.textDecoration = 'none';
            headerMenuItem.style.color = '#46494F';
        });
        headerMenuItem.addEventListener('click', buttonEvent(addressList[i]))
    }
    
    var logoImage = document.getElementById("headerLogo");
    logoImage.addEventListener('click',buttonEvent("/healthpartnerWeb/index.html"))

    var logInBtn = document.getElementById("logInBtn");
    logInBtn.addEventListener('click',buttonEvent("/healthpartnerWeb/logInPage.html"))
}

function buttonEvent(address) {
    return function(event) {
        location.href = address;
      }
}
