
let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);

    document.querySelector("body").addEventListener("click", function(e){
        if(e.target.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector("#draw");
            if(click){
                draw.innerHTML = "Now You Can Draw";
            }
            else{
                draw.innerHTML = "You're Now Allowed To Draw"
            }
        }
    })

    let btn = document.querySelector("#btn");
    btn.addEventListener("click", function(){
    
        let size = getSize();
        createBoard(size);
    })
})

function createBoard(size){
    let board = document.querySelector(".board");

    board.Style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`; 

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.classList.add('grid-element')
        div.addEventListener("mouseover", colorDiv)
        div.addEventListener('mousedown', changeColor)
        board.appendChild( div);
    }

}
  

    const ncolor = '#333333'
    const nmode = 'color'
    const size = 16
    
    let cColor = ncolor
    let cMode = nmode
    let cSize = size
    
    function setCurrentColor(newColor) {
      cColor = newColor
    }
    
    function setCurrentMode(newMode) {
      activateButton(newMode)
      cMode = newMode
    }
    
    function setCurrentSize(newSize) {
      cSize = newSize
    }
    const btn = document.getElementById('btn')
    const btn1 = document.getElementById('btn1')
    const btn2 = document.getElementById('btn2')
    const btn3 = document.getElementById('btn3')
    const btn4 = document.getElementById('btn4')
    const sizeValue = document.getElementById('sizeValue')
    const sizeSlider = document.getElementById('sizeSlider')
    const container = document.getElementById('container')

btn.oneclick = (e) => setCurrentColor(e.target.value)
btn1.onclick = () => setCurrentMode('color')
btn2.onclick = () => setCurrentMode('rainbow')
btn3.onclick = () => setCurrentMode('eraser')
btn4.onclick = () => reloadGrid()
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)

  let mouseDown = false
    document.body.onmousedown = () => (mouseDown = true)
    document.body.onmouseup = () => (mouseDown = false)

    function changeSize(value) {
        setCurrentSize(value)
        updateSizeValue(value)
        reloadGrid()
      }
      function updateSizeValue(value) {
        sizeValue.innerHTML = `${value} x ${value}`
      }
      function reloadGrid() {
        clearGrid()
        createBoard(cSize)}

    function clearGrid() {
            container.innerHTML = ''
          }
    function createBoard(size){
            container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
            container.style.gridTemplateRows = `repeat(${size}, 1fr)`; 
        
            let numDivs = size * size;
        
            for(let i = 0; i < numDivs; i++){
                let div = document.createElement("div");
                div.classList.add('grid-element')
                div.addEventListener("mouseover", changeColor)
                div.addEventListener('mousedown', changeColor)
                container.appendChild( div);
            }      
        }

    
        function changeColor(e) {
            if (e.type === 'mouseover' && !mouseDown) return
            if (cMode === 'btn2') {
              const randomR = Math.floor(Math.random() * 256)
              const randomG = Math.floor(Math.random() * 256)
              const randomB = Math.floor(Math.random() * 256)
             console.log(`rgb(${randomR}, ${randomG}, ${randomB})`)
            } else if (cMode === 'btn1') {
              console.log(e)= cColor
            } else if (cMode === 'btn3') {
              console.log(e) = '#fefefe'
            }
          }
          function activateButton(newMode) {
            if (cMode === 'btn2') {
              btn2.classList.remove('active')
            } else if (cMode === 'color') {
              btn1.classList.remove('active')
            } else if (cMode === 'eraser') {
             btn3.classList.remove('active')
            }
          
            if (newMode === 'btn2') {
              btn2.classList.add('active')
            } else if (newMode === 'btn1') {
              btn1.classList.add('active')
            } else if (newMode === 'btn3') {
              btn3.classList.add('active')
            }
          }
          
          window.onload = () => {
            createBoard(size)
            activateButton(nmode)
          }
