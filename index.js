let boxes=document.querySelectorAll(".btn");
let resetBtn=document.querySelector("#reset-button");
let turn0=true; //playerX,playerO
let arr=["apple","banana","litchi"];
let newGameBtn=document.querySelector(".game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


for(var i=0;i<boxes.length;i++){
boxes[i].addEventListener("click",function(){
    console.log("Box was clicked");
    var count=0;
    if(turn0===true){
        this.innerText="O";
        turn0=false;
    }else{
        this.innerText="X";
        turn0=true;
    }
    this.disabled=true;
    checkWinner(); 
    
})
}

function disableBtn(){
for(let box of boxes){
    box.disabled=true;
}
}
function enableBtn(){
for(let box of boxes){
    box.disabled=false;
}
}

function resetGame(){
    turn0=true;
    enableBtn();
    msgContainer.classList.add("hide");
    for(let box of boxes){
        box.innerText="";
    }
}

function showWinner(winner){
    msg.innerText="Congratulations, winner is "+winner;
    msgContainer.classList.remove("hide");
    disableBtn();
}

function draw(){
    msg.innerText="Draw";
    msgContainer.classList.remove("hide");
}




function checkWinner(){
    for(let pattern of winPattern){
        let pos1=boxes[pattern[0]].innerHTML;
        let pos2=boxes[pattern[1]].innerHTML;
        let pos3=boxes[pattern[2]].innerHTML;
        
        if(pos1!="" && pos2!="" && pos2!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner",pos1);
                showWinner(pos1);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
 
