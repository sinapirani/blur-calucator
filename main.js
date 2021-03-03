//variables 
let keys = document.querySelectorAll("input")
let keysHome = document.getElementById("keysHome")
let lcd = document.getElementById("lcd")
let lcdText = document.getElementById("lcdText")
let numberWorkink = "yes";
let operators = document.getElementById("operators")
let iphoneSound = document.getElementById("iphoneSound")
let op = document.getElementsByClassName("op");
let equal = document.getElementById("equal")
clickWorking = true;
let body = document.getElementById("calucator");
resultDiv = document.getElementById("result")
resultText = document.getElementById("resultText")
resultbtn = document.getElementById("resultButton")

//eventListeners
keysHome.addEventListener("click",numberClicked);
operators.addEventListener("click",operatorClicked);
resultbtn.addEventListener("click",backToCalucator)

//functions
function numberClicked(event){
  let targetValue = event.target.value
  if(typeof targetValue != "undefined" && targetValue != "DEL" && clickWorking == true){
  let firstNum = lcdText.textContent;
  lcdText.textContent += targetValue
}
  switch(targetValue){
    case "C":
      lcdText.textContent =""
      break;
      
    case "DEL":
      lcdText.textContent = lcdText.textContent.substring(0,lcdText.textContent.length-1)
      break
  }
  if(lcdText.textContent.length < 10){
    lcdText.style.fontSize = "50px"
    clickWorking = true
  }else if(lcdText.textContent.length >= 10){
    lcdText.style.fontSize = "30px"
    clickWorking = true
  }
  if(lcdText.textContent.length >= 16){
    clickWorking = false
    alert("بیشتر از حد مجاز")
    
  }else {
    clickWorking = true
  }
}
//

function operatorClicked(event){
  const targetValue = event.target.value
  if(typeof targetValue != "undefined"){
    if (lcdText.textContent == "") {
      alert("Enter the number")
    }else{ 
      for(let i=0;i<op.length;i++){
        op[i].style.display = "none"
        equal.style.margin = "auto"
 }
    switch(targetValue){
      case "+":
        num1 = lcdText.textContent
        lcdText.textContent = "";
        operatorMode = "+"
        equal.style.display = "inline"
        break
      case "-":
        num1 = lcdText.textContent
        lcdText.textContent = "";
        operatorMode = "-";
        equal.style.display = "inline"
        break
      case "×":
        num1 = lcdText.textContent
        lcdText.textContent = "";
        operatorMode = "×"
        equal.style.display = "inline"
        break
      case "÷":
        num1 = lcdText.textContent
        lcdText.textContent ="";
        operatorMode = "÷"
        equal.style.display = "inline"
        break
      case "=":
        iphoneSound.play()
        lcdText.style.fontSize="80px";
        switch(operatorMode){
          case "+":
            lcdText.textContent = Number(num1) + Number(lcdText.textContent);
            break
          case "-":
            lcdText.textContent = Number(num1) - Number(lcdText.textContent);
            break
          case "×":
            lcdText.textContent = Number(num1) * Number(lcdText.textContent);
            break
          case "÷":
            lcdText.textContent = Number(num1) / Number(lcdText.textContent);
        }
      result = lcdText.textContent
      if(result.length > 6){
        resultText.style.fontSize = "50px"
      }
      if(result.length > 8){
        resultText.style.fontSize = "40px"
      }
      if(result.length >= 11){
        result = "Over limit!"
      }
      lcd.style.display = "none"
      body.style.display = "none"
      keysHome.style.display = "none"
      equal.style.display = "none"
      resultDiv.style.display = "block"
      resultText.textContent = result;
    }
  }
}
}

//

function backToCalucator(){
  lcdText.textContent = ""
  result = ""
  resultDiv.style.display = "none";
  calucator.style.display = "block"
    lcd.style.display = "flex"
    for (let i = 0; i < op.length; i++) {
      op[i].style.display = "flex"

    }
    keysHome.style.display = "flex"
    equal.style.display = "none"
}
