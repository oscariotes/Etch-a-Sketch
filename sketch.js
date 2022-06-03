const container = document.querySelector(".container");
let userInput;


//creates div blocks
function rowColumn(userInput) {
  rows = userInput;
  cols = userInput;
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let i = 0; i < (rows * cols); i++) {
    let eachBox = document.createElement("div");
    eachBox.innerText = (i + 1);
    container.appendChild(eachBox).className = "box";
 }
}

rowColumn(32);


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
       box.style.backgroundColor = "blue";
    }
   })
  box.addEventListener("mousemove", function(){{
    if (mouseDown) {
      box.style.backgroundColor = "blue";
    }
  }
   })
 })
}

color();



