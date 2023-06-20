var htmalNameSet = ['week1/studywork1.html','week2/youtubeMain.html','week3/baseball.html','week4/dragPuzzle.html']
init()

function init(){
    createTab()
}

function createTab() {
    for(var index =0;index <4; index++){
        var tmpBtn = document.createElement("input")
        tmpBtn.type = "button"
        tmpBtn.value = "week" + (index+1).toString()
        tmpBtn.classList.add("pageButton")
        tmpBtn.addEventListener('click', buttonEvent(index))
        document.getElementById("container").appendChild(tmpBtn)
    }
}

function buttonEvent(index) {
    return function(event) {
        location.href = htmalNameSet[index]
      }
}