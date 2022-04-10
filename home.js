const wordArray = ["APPLE","GAMES","COLLAGE","DEVELOPMENT","WEB","PROGRAMMING"];
const questionArray = ["How many letters are there in the given word?",
                       "How many consonents are there in the given word?",
                       "How many vowels are there in the given word?"];

const wordDisplay = document.getElementById("word-display");
const noOfLetters = document.getElementById("letters");
const div2 = document.getElementById("div2");
const btn = document.getElementById("btn");
const ques = document.getElementById("ques");

var index = Math.floor(Math.random()*wordArray.length);
wordDisplay.innerText = wordArray[index];
var quesIndex = Math.floor(Math.random()*questionArray.length);
ques.innerText = questionArray[quesIndex];

var vowels = 0;
var consonents = 0;

btn.onclick = ()=>{
    const div = document.createElement("div");
    const node = document.createElement("h2");
    if(quesIndex===0){
      if(noOfLetters.value===wordArray[index].length+""){
        node.innerText = "Right    !Yay";
      }else{
        node.innerText = "Wrong    !Retry";
      }
    }else if(quesIndex===1){
      var word = wordArray[index];
      for(let i=0;i<word.length;i++){
        if(word.charAt(i)=='A' || word.charAt(i)=='E' || word.charAt(i)=='I'
        || word.charAt(i)=='O' || word.charAt(i)=='U')vowels++;
        else consonents++;
      }
      if(noOfLetters.value===consonents+""){
        node.innerText = "Right    !Yay";
      }else{
        node.innerText = "Wrong    !Retry";
      }
    }else{
      var word = wordArray[index];
      for(let i=0;i<word.length;i++){
        if(word.charAt(i)=='A' || word.charAt(i)=='E' || word.charAt(i)==''
        || word.charAt(i)=='O' || word.charAt(i)=='U')vowels++;
        else consonents++;
      }
      if(noOfLetters.value===vowels+""){
        node.innerText = "Right    !Yay";
      }else{
        node.innerText = "Wrong    !Retry";
      }
    }
    div.appendChild(node);
    div2.appendChild(div);
    div.id = "result-div";
    setTimeout(()=>{
      div2.removeChild(div2.lastChild);
    },1000);
}
