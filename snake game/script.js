
let tilesize=15;
let rows=32;
let columns=32;
let canvas;
let canvasheigth=tilesize*rows;
let canvaswidth=tilesize*columns;

let snakex=tilesize*5;
let snakey=tilesize*5;
let snakewidth=tilesize*1;
let snakeheight=tilesize*1;
let snakevelocityx=0;
let snakevelocityy=0;

let count=0;
let snakewithbody=[];

let gameover=false;

let frogwidth=tilesize;
let frogheight=tilesize;
 
let frogx=Math.floor(Math.random() *columns)*tilesize;
let frogy=Math.floor(Math.random() *rows)*tilesize;
let frog={
    x:frogx,
    y:frogy,
    width:frogwidth,
    height:frogheight

};
let snake={
    x:snakex,
    y:snakey,
    width:snakewidth,
    height:snakeheight

};

let context;
let messege;
function points(){
    messege="congrats!you have crossed 20 points"
    context.fillStyle="black";
    context.font="20px courier"
    context.fillText(messege,columns/2,tilesize*rows/2);
    

}

function messege2(){
    messege="this game is made by souvik"
    context.fillStyle="black";
    context.font="20px courier"
    context.fillText(messege,columns/2,tilesize*rows/2);
 
}

function messege3(){
    messege="hopefully you are enjoying it"
    context.fillStyle="black";
    context.font="20px courier"
    context.fillText(messege,columns/2,tilesize*rows/2);
    
}
function gameoverdesign(){
    messege="GAME OVER"
    context.fillStyle="red";
    context.font="80px courier"
    context.fillText(messege,columns/2,tilesize*rows/2);
}
function updatesnakefrog(){
if(gameover==true){
    return;
}

    snakex+=snakevelocityx*tilesize;
    snakey+=snakevelocityy*tilesize;

    
    if(snakex==frogx && snakey==frogy ){
        
        count++;
            frogx=Math.floor(Math.random() *columns)*tilesize;
            frogy=Math.floor(Math.random() *rows)*tilesize;
                snakewithbody.push([frogx,frogy]);
            
                }
                for(let i=snakewithbody.length-1;i>0;i--){
                    snakewithbody[i]=snakewithbody[i-1];

            }
            if(snakewithbody.length){
                snakewithbody[0]=[snakex,snakey];
            }
            frog={
                x:frogx,
                y:frogy,
                width:frogwidth,
                height:frogheight
             }
    

     snake={
        x:snakex,
        y:snakey,
        width:snakewidth,
        height:snakeheight
    
    };
    context.fillStyle="rgba(68, 157, 121, 0.829)";
    context.fillRect(0,0,canvaswidth,canvasheigth);
    context.fillStyle="lime"
    context.fillRect(frog.x,frog.y,frog.width,frog.height);
    context.fillStyle="rgb(11, 98, 212)";
    for(let i=0;i<snakewithbody.length;i++){
        context.fillRect(snakewithbody[i][0],snakewithbody[i][1],tilesize,tilesize);
     }
     context.fillRect(snake.x,snake.y,snake.width,snake.height,);  

     

     if(snakex<0 ||snakex>columns*tilesize ||snakey<0|| snakey>rows*tilesize){
        gameover=true;
        gameoverdesign();
        
     }
     for(let i=1;i<snakewithbody.length;i++){
        if(snakex==snakewithbody[i][0] && snakey==snakewithbody[i][1]){
            gameover=true;
             gameoverdesign();
           
        }
     }
    context.fillStyle="black";
    context.font="15px courier";
    context.fillText(count,10,20);

    if(count==20){
        points();
    }
    if(count==1){
        messege2();
    } 
    if(count==2){
        messege3();
    } 
}



window.onload=function(){
    canvas=document.getElementById("canvasid");
    canvas.width=canvaswidth;
    canvas.height=canvasheigth;
    context= canvas.getContext("2d");
     updatesnakefrog();   

      document.addEventListener("keydown",(e)=>{
        if(e.code=="ArrowUp" && snakevelocityy!=1){
            snakevelocityx=0;
            snakevelocityy=-1;
        }
        else if(e.code=="ArrowDown" && snakevelocityy!=-1){
            snakevelocityx=0;
            snakevelocityy=1;
        }
        else if(e.code=="ArrowLeft" && snakevelocityx!=1){
            snakevelocityx=-1;
            snakevelocityy=0;
         }
        else if(e.code=="ArrowRight" && snakevelocityx!=-1){
            snakevelocityx=1;
            snakevelocityy=0;
        }
       
        
      });
      setInterval(updatesnakefrog,100);
    
        
      }
    
    
  
    
  
  
   
      

  

