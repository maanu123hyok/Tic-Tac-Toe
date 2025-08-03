let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGame=document.querySelector("#newGame");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector("#msg");
let turn="O";
let winningPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn==="O"){
            box.innerText="O";
            box.style.color="#5a100e";
            winner();
            turn="X";
        }
        else{
            box.innerText="X";
            box.style.color="chocolate";
            winner();
            turn="O";
        }
        box.disabled=true;
    })
})
let winner=()=>{winningPattern.forEach((win)=>{
    if((boxes[win[0]].innerText===boxes[win[1]].innerText) && (boxes[win[0]].innerText===boxes[win[2]].innerText)&&(boxes[win[0]].innerText!="")){
        msg.innerText=`WINNER IS PLAYER ${turn}`;
        msgContainer.setAttribute("class","msgContainer");
        boxes.forEach((box)=>{
            box.disabled=true;
        })
    }
})}
newGame.addEventListener("mouseenter",()=>{
    newGame.style.borderWidth="2.5px";
    newGame.style.borderColor="goldenrod";
    newGame.style.borderStyle="solid";
})
newGame.addEventListener("mouseleave",()=>{
    newGame.style.border="none";
})
reset.addEventListener("mouseenter",()=>{
    reset.style.borderWidth="2.5px";
    reset.style.borderColor="goldenrod";
    reset.style.borderStyle="solid";
})
reset.addEventListener("mouseleave",()=>{
    reset.style.border="none";
})
let resetGame=()=>{
    msgContainer.setAttribute("class","msgContainer hide");
    turn="O";
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    })
}
newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame)