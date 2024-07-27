let boxs = document.querySelectorAll(".box");
let reset  = document.querySelector("#reset");
let newbt  = document.querySelector("#new");
let container = document.querySelector(".win");
let msg = document.querySelector(".msg");

let turnO = true;
let arr =  [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetgame = ()=>{
 turnO = true;
 enable();
 container.classList.add("hide");
};
boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO)
        {
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "blue";
            turnO = true;
        }
        box.disabled = true;
        check();
    });
});
const disable = ()=>{
    for(let box of boxs)
    {
        box.disabled = true;
    }
};

const enable = ()=>{
    for(let box of boxs)
    {
        box.disabled = false;
        box.innerText= "";
    }
};

const showwinner = (winner)=>{
    msg.innerText = `congratulations the winner is ${winner}`;
    container.classList.remove("hide");
    disable();
};

const check =() =>{
for(let i of  arr){
    let v1 = boxs[i[0]].innerText;
    let v2 = boxs[i[1]].innerText;
    let v3 = boxs[i[2]].innerText;
    
    if(v1 != "" && v2 !="" && v3 != "")
    {
        if(v1 === v2 && v2 === v3)
        {
            console.log("Winner",v1);
            showwinner(v1);
        }
    }
}
};
newbt.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame)