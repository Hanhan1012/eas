
let click = false;

document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);

    document.querySelector("body").addEventListener("click", function(e){
        if(e.target.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector("#draw");
            if(click){
                draw.innerHTML = " Draw";
            }
            else{
                draw.innerHTML = "Allowed To Draw"
            }
        }
    })

    let select = document.querySelector("#select");
    select.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    })
})
function getSize(){
    let input = prompt("Choose the size of the board?");
    let mess = document.querySelector("#mess");
    if(input == ""){
        mess.innerHTML = "choose a number";
    }
    else if(input < 0 || input > 100){
        mess.innerHTML = "between 1 and 100"
    }
    else{
        mess.innerHTML = "GO!"
        return input;
    }
}
function createBoard(size){
    let container = document.querySelector(".container");

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`; 

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        container.insertAdjacentElement("beforeend", div);
    }

}
function colorDiv(){
    if(click){
        if(color == "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else{
            this.style.backgroundColor = 'purple'
        }
    }
}
let color = "purple";
function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}
