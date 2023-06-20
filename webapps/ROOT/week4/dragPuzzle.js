var parent1 = null;
var element1 = null;
var rowCrop = 3;
var colCrop = 3;
init()

function init(){
    for(var i =1; i <= colCrop;i++){
        for (var j = 0; j< 2; j++ ){
            var imageLine = document.createElement("div")
            imageLine.id = "line" + (i+(j*colCrop)).toString()
            document.getElementById("container"+(j+1).toString()).appendChild(imageLine)
        }
        var lineTempRand = document.getElementById("line"+(i).toString())
        var lineTempAns = document.getElementById("line"+(i+colCrop).toString())
        
        for(var j = 0; j < rowCrop;j++){
            var canvasRand = document.createElement("canvas")
            canvasRand.id = "randImg" + (((i-1)*3)+j+1).toString()
            canvasRand.ondragstart = dragEvent(canvasRand.id)
            canvasRand.ondragover = overEvent
            canvasRand.ondrop = dropEvent(canvasRand.id)
            canvasRand.draggable = true;
            lineTempRand.appendChild(canvasRand)

            var canvasAns = document.createElement("canvas")
            canvasAns.id = "answerImg" + (((i-1)*3)+j+1).toString()
            canvasAns.ondragover = overEvent
            canvasAns.ondrop = dropEvent(canvasAns.id)
            lineTempAns.appendChild(canvasAns)
        }
    }
    for(var i =0; i < rowCrop*colCrop;i++){
        var image = new Image();
        image.src = "image_.jpeg";
        cropImage(image,i)
    }
    for(var i = 0; i <= 10; i++){
        shuffleImage()
    }
}

function cropImage(image,i){
    image.onload = function() {
        var width = 200;
        var height = (200)*(image.height/image.width);
        var tempIdAns = "answerImg" + (i+1).toString()
        var canvasAns = document.getElementById(tempIdAns);
        canvasAns.width = 200;
        canvasAns.height = 200*(image.height/image.width);
        var tempIdRand = "randImg" + (i+1).toString()
        var canvasRand = document.getElementById(tempIdRand);
        canvasRand.width = 200;
        canvasRand.height = 200*(image.height/image.width);
        var ctx1 = canvasRand.getContext('2d');
        var ctx2 = canvasAns.getContext('2d');
        ctx1.drawImage(image, (image.width/rowCrop)*((i%rowCrop)), (image.height/colCrop)*parseInt(i/colCrop), image.width/rowCrop, image.height/colCrop, 0, 0, width, height); 
        ctx2.fillStyle = 'silver';  // 회색으로 설정
        ctx2.fillRect(0, 0, width, height);  // 좌표 (50, 50)부터 가로 100, 세로 100 크기의 네모 그리기
    };
}

function dragEvent(id){
    console.log(id)
    return function(event){
        console.log(id)
        swap1(id)
    }
}
function overEvent(){
    event.preventDefault();
}
function dropEvent(id){
    return function(event){
        swap2(id)
        correctCheck()
    }
}

function shuffleImage(){
    var num1 = Math.floor(Math.random() * rowCrop*colCrop) + 1;
    var num2 = Math.floor(Math.random() * rowCrop*colCrop) + 1;
    while (num2 === num1) {
        num2 = Math.floor(Math.random() * rowCrop*colCrop) + 1;
    }
    var shuffleItem1 = "randImg" + num1.toString();
    var shuffleItem2 = "randImg" + num2.toString();
    swap1(shuffleItem1)
    swap2(shuffleItem2)
}

function swap1(id){
    element1 = document.getElementById(id);
    parent1 = element1.parentNode;
}
function swap2(id){
    var element2 = document.getElementById(id);
    parent2 = element2.parentNode;
    var sibling1 = element1.nextSibling;
    var sibling2 = element2.nextSibling;
    parent1.insertBefore(element2, sibling1);
    parent2.insertBefore(element1, sibling2);
}

function correctCheck(){
    var lineCorrectCount = 0;
    for(var i = 1; i <= rowCrop; i++){
        var lineName = "line" + (i+3).toString();
        var lineTemp = document.getElementById(lineName);
        var check = 1;
        for(var j = 1;j<=colCrop;j++){
            if(lineTemp.children[j-1].id != "randImg" + ((i-1)*rowCrop +j).toString()){
                check = 0;
            }
        }
        if(check == 1) lineCorrectCount += 1;
    }
    if(lineCorrectCount == colCrop){
        var lineTemp = document.getElementById("correctMessage").innerText = "correct!";
    }else{
        var lineTemp = document.getElementById("correctMessage").innerText = "";
    }
}