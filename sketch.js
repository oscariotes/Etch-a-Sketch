let colorPick = document.getElementById("pickAcolor");
let myColor;
let userInput;
let defaultValue = 20;
const mainContainer = document.querySelector("mainContainer")
const container = document.querySelector(".container");
const warning = document.querySelector(".warning");
let erase = document.getElementById(".erase");


//creates div blocks
function rowColumn(userInput) {
  rows = userInput;
  cols = userInput;
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i++) {
    let eachBox = document.createElement("div");
    //eachBox.innerText = (i + 1);
    container.appendChild(eachBox).className = "box";
 }
}



rowColumn(defaultValue);

//Change number of grid

  document.getElementById("gridCount").onclick = function gridCount(){
    let userInput = prompt("type any number to replace number of grid");
      if (userInput <= 100) {
        container.replaceChildren();
        warning.replaceChildren();
        rowColumn(userInput);
        color();
      } if (userInput > 100) {
        //container.replaceChildren();
        let para = document.createElement("p");
        para.innerText = "Grids exceeds a humdred.";
        warning.appendChild(para);
      }
     
         
  }
  




colorPick.addEventListener("input", function() {
  myColor = colorPick.value;
}, false);
 
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
       box.style.backgroundColor = "gray";
       box.style.backgroundColor = myColor;
    }
   })
  box.addEventListener("mousemove", function(){{
    if (mouseDown) {
      box.style.backgroundColor = "gray";
      box.style.backgroundColor = myColor;
    }
  }
   })
 })
}

color();





