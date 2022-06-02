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
  };
};

rowColumn(6);

let eachBox = document.querySelectorAll(".box");


function color (){
  eachBox.forEach(box =>{
    box.addEventListener("click", function(){
      box.style.backgroundColor = "blue";
    })
  })
}
 
  color();

/*const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', function handleClick(event) {
    console.log('box clicked', event);

    box.setAttribute('style', 'background-color: yellow;');
  });
});


/*[...document.querySelectorAll(".round")].forEach((round) => {
  round.addEventListener("click", function() {
    round.style.backgroundColor = "blue";
  })
})*/
