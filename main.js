function createBoard(size){
        const board = document.querySelector(".board");

        board.style.gridTemplateColumns=`repeat(${size},1fr)`;
        board.style.gridTemplateRows=`repeat(${size},1fr)`;

        let numDivs = size * size;

        for(let i = 0;i < numDivs;i++){
            let div = document.createElement("div");
            div.addEventListener("mouseover",colordiv);
            board.insertAdjacentElement("beforeend",div);
        }
}
 
function getsize(){
    let input = prompt("What will be The Size?")
    let message = document.querySelector("#message");

    if(input == ""){
        message.innerHTML="Please Enter Valid Number";
    }else if(input < 0 || input > 100){
        message.innerHTML="Enter Number Between 0 and 100";
    }else{
        message.innerHTML="Now You can play!";
        return input;
    }
}

function colordiv(){
    if(click){
        if(color == "random"){
            this.style.backgroundColor =   `hsl(${Math.random()*360},100%,50%)`
        }else{
            this.style.backgroundColor = 'black'
        }
    }
}

function setcolor(colorchoice){
    color = colorchoice;
}

let color = "black";

let btnpopup = document.querySelector("#popup");
btnpopup.addEventListener("click",function(){
    let size = getsize();
    createBoard(size);

})


function resetboard(){
    let divs =document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
    };

let click = false;

document.querySelector("body").addEventListener("click",function(e){
    if(e.target.tagName != "BUTTON")
    {
        click = !click;
        let draw = document.querySelector("draw");
        if(click){
            draw.innerHTML = "Now you can Draw";
        }
        else{
            draw.innerHTML = "You cant Draw";
        }
    }
})