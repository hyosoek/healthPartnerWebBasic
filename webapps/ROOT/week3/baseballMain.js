//중복 안되는게 맞다 너무 어려워서
state = 0; // 0 : 비어있는 상태,  1 : 1번째에 차 있는 상태, 2 : 2번째까지 차 있는 상태, 3 : 꽉찬 상태
var answerNumList = []
var inputNumList =[]
createTag()
eventInit()

function createTag(){
    //출력창
    for(var i = 1; i <= 3;i++){
        var ansSpan = document.createElement("span")
        ansSpan.id = "num" + i.toString()
        ansSpan.classList.add("num")
        ansSpan.innerText="_"
        console.log(ansSpan.id)
        document.getElementById("myInput").appendChild(ansSpan)
    }
    //1~9
    for(var i = 1; i <= 3;i ++ ){
        var tmpLine = document.createElement("tr")
        document.getElementById("keyPad").appendChild(tmpLine)
        tmpLine.id = "line" + i.toString()
        for(var j = 1; j <= 3;j ++ ){
            var numBtn = document.createElement("input")
            numBtn.id = "key" + (((i-1)*3)+j).toString()
            numBtn.classList.add("keyPadInput")
            numBtn.type = "button"
            numBtn.value = ((i-1)*3)+j
            document.getElementById("line" + i.toString()).appendChild(numBtn)
            numBtn.addEventListener('click', numBtnEvent(((i-1)*3)+j))
        }
    }
    //0, del
    var tmpLine = document.createElement("tr")
    document.getElementById("keyPad").appendChild(tmpLine)
    tmpLine.id = "line4"

    var zeroBtn = document.createElement("input")
    zeroBtn.id = "key0"
    zeroBtn.classList.add("keyPadInput")
    zeroBtn.type = "button"
    zeroBtn.value = 0
    document.getElementById("line4").appendChild(zeroBtn)
    zeroBtn.addEventListener('click', numBtnEvent(0))

    var delBtn = document.createElement("input")
    delBtn.classList.add("keyPadInput")
    delBtn.type = "button"
    delBtn.value = "Del"
    document.getElementById("line4").appendChild(delBtn)
    delBtn.addEventListener('click', delBtnEvent)
}

//버튼 생성까지 모듈화하기는 귀찮다...

function eventInit(){
    while(answerNumList.length!=0){
        answerNumList.pop()
    }
    while (answerNumList.length < 3) {
        var randomNum = Math.floor(Math.random() * 10);
        if (!answerNumList.includes(randomNum)) {
            answerNumList.push(randomNum);
        }
    }
    console.log(answerNumList[0])
    console.log(answerNumList[1])
    console.log(answerNumList[2])    
}


function numBtnEvent(number) {
    return function(event){
        if(state == 0 ){
            document.getElementById("num1").innerText = number.toString()
            inputNumList[0] = number
            state = 1
        } else if(state == 1 && number!=inputNumList[0]){ //귀찮으니 중복허용 ㄴㄴ
            document.getElementById("num2").innerText = number.toString()
            inputNumList[1] = number
            state = 2
        } else if(state == 2 && (number!=inputNumList[0] &&number!=inputNumList[1])){//귀찮으니 중복허용 ㄴㄴ
            document.getElementById("num3").innerText = number.toString()
            inputNumList[2] = number
            makeResultTag(arrayCompare())
            clearInput()
        }
    }
}

function delBtnEvent(){
    if(state == 1){
        document.getElementById("num1").innerText = "_"
        state = 0
    }else if(state == 2){
        document.getElementById("num2").innerText = "_"
        state = 1
    }else if(state == 3){
        document.getElementById("num3").innerText = "_"
        state = 2
    }
}

function arrayCompare(){
    var strikeBall = [0,0]
    for(var i =0;i<3;i++){
        for(var j =0;j<3;j++){
            if(inputNumList[i] == answerNumList[j]){
                if(i == j){
                    strikeBall[0] +=1
                }else{
                    strikeBall[1] +=1
                }
                break
            }
        }
    }
    return strikeBall
}

function makeResultTag(strikeBall){
    if(strikeBall[0] == 3){//all strike
        var tmpDiv = document.createElement("div")
        document.getElementById("gameBoard").appendChild(tmpDiv)
        tmpDiv.innerHTML = "스트라이크! 경기 종료!"
        tmpDiv.style.color = "green"
        eventInit()
    }else if(strikeBall[0] == 0 && strikeBall[1] == 0){
        var tmpDiv = document.createElement("div")
        document.getElementById("gameBoard").appendChild(tmpDiv)
        tmpDiv.innerHTML = "파울!"
        tmpDiv.style.color = "red"
    }else{
        var tmpDiv = document.createElement("div")
        document.getElementById("gameBoard").appendChild(tmpDiv)
        tmpDiv.innerHTML = strikeBall[0].toString() + "스트라이크, " + strikeBall[1].toString() + "볼!"
    }
}

function clearInput(){
    state = 0
    document.getElementById("num1").innerText = "_"
    document.getElementById("num2").innerText = "_"
    document.getElementById("num3").innerText = "_"
}