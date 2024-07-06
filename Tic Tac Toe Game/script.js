let boxes=document.querySelectorAll(".box");
let msg=document.querySelector(".msg");
let message=document.querySelector(".firstmessage");
let winnergif=document.querySelector(".img");
let newgamebtn=document.querySelector(".NewGame");
let resetbtn=document.querySelector(".reset");
let turn0=true;
let count=0;


const winnerpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
Array.from(boxes).forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
            
        }
        else {
            box.innerText="X";
            turn0=true;
        }
        count++;
        box.disabled=true;
        winner();
        newgame();
        reset();
        draw();
        
    });
});

    const disablebox=()=>{
        for(box of boxes){
            box.disabled=true;
        }
    }
    const enablebox=()=>{
        for(box of boxes){
            box.disabled=false;
            box.innerText="";
        }
    }
   
       
   const showWinner=(value)=>{
    message.innerText="CONGRATULATION!";
    msg.innerText="Winner is:"+""+value;
    message.classList.remove("hide");
    msg.classList.remove("hide");
    winnergif.classList.remove("hide");
    newgamebtn.classList.remove("hide");

    disablebox();
          
   }
   const reset=()=>{
    resetbtn.addEventListener("click",()=>{
        for(box of boxes){
            box.innerText="";
            enablebox();
        }
    });
   }



   const draw=()=>{
    let iswinner=winner();
    
    if(count===9 && count!==iswinner){
        msg.innerText="Draw";
        message.innerText="GAME OVER";
        message.classList.remove("hide");
        msg.classList.remove("hide");
        newgamebtn.classList.remove("hide");
        disablebox();
     }
     removenewbtn();

   }

   const newgame=()=>{
    newgamebtn.addEventListener("click",()=>{
        message.classList.add("hide");
        msg.classList.add("hide");
        winnergif.classList.add("hide");
        turn0=true;
        enablebox();
        for(box of boxes){
            box.innerText="";
        } 
        // let iswinner=winner();
    });
   }



    const winner=()=>{
        for (pattern of winnerpattern){
            let val1=boxes[pattern[0]].innerText;
            let val2=boxes[pattern[1]].innerText;
            let val3=boxes[pattern[2]].innerText;

            if(val1 !="" &&val2!=" " && val3!=""){
                if(val1===val2 && val1===val3){
                    console.log("winner is",val1);
                    showWinner(val1);
                   return true;
                
                }
            }
        }
        
    }

   const removenewbtn=()=>{
    newgamebtn.addEventListener("click",()=>{
        newgame();
        newgamebtn.classList.add("hide");
    });

    }
    

   
