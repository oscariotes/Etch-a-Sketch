let colorPick = document.getElementById("pickAcolor");
let myColor;
let erase = document.getElementById("erase");
const dColor = document.getElementById("dColor");
let randomColor = document.getElementById("randomColor");
let eraseColor;
let userInput;
let defaultValue = 20;
const mainContainer = document.querySelector("mainContainer")
const container = document.querySelector(".container");
const warning = document.querySelector(".warning");

//creates div blocks
function rowColumn(userInput) {
  rows = userInput;
  cols = userInput;
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i++) {
    let eachBox = document.createElement("div");
    container.appendChild(eachBox).className = "box";
 }
}

rowColumn(defaultValue);

//Change number of grid
  document.getElementById("gridCount").onclick = function gridCount(){
    let userInput = prompt("Type grid number. It should be less than a hundred.");
      if (userInput <= 100) {
        container.replaceChildren();
        warning.replaceChildren();
        rowColumn(userInput);
        color();
      } if (userInput > 100) {
        let para = document.createElement("p");
        alert ("Grids exceeds a hundred. It should be 100 or less");
      }       
  }


let newColor = "#a9a9a9";

dColor.addEventListener("click", function(){
  newColor = dColor.value;
}, false)  

erase.addEventListener("click", function(){
  newColor = erase.value;
}, false)

colorPick.addEventListener("input", function() {
  newColor = colorPick.value;
}, false);

randomColor.addEventListener("click", function(){
  newColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
}, false)

var mouseDown = false;
document.body.onmousedown = function() {
mouseDown = true;
};
document.body.onmouseup = function() {
mouseDown = false;
};

//basic grid block color function
function color (){
  
  let eachBox = document.querySelectorAll(".box");
  eachBox.forEach(box =>{
    box.addEventListener("mouseover", function(){ 
    })
    box.addEventListener("mousedown", function(){{    
       box.style.backgroundColor = newColor;      
    }
   })
  box.addEventListener("mousemove", function(){
    if (mouseDown) {
    box.style.backgroundColor = newColor; 
  }
   })
 })
}
color();
