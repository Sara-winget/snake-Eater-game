
//board
var blocksize=25;
var rows=20;
var cols=20;
var board;
var context;

//snake
var snakeX=blocksize*5;
var snakeY=blocksize*5;
var velocityX=0;
var velocityY=0;

//snakebody
var snakebody=[];

//food
var foodX=blocksize*10;
var foodY=blocksize*10;


//score

var score=document.getElementById('score');
var points=0;


window.onload = function(){
    board=document.getElementById('board');
    board.height=rows*blocksize;
    board.width=cols*blocksize;
    context=board.getContext("2d");
    placeFood();
    document.addEventListener('keyup',changeDirection);
    setInterval(update,1000/5)
    
}
function update(){
    context.fillStyle="black";
    context.fillRect(0,0,board.width,board.height);
    
        
    context.fillStyle="red";
    context.fillRect(foodX,foodY,blocksize,blocksize);
    
    if(snakeX==foodX && snakeY==foodY)
    {
        snakebody.push([foodX,foodY]);
        placeFood();
        points++;
      sessionStorage.setItem('point',points);
     // console.log(sessionStorage.getItem('point'))
    }
    for(let i=snakebody.length-1;i>0;i--){
        snakebody[i]=snakebody[i-1];}
    if(snakebody.length){
    snakebody[0]=[snakeX,snakeY];
    }
    context.fillStyle="lime";
    snakeX+=velocityX*blocksize;
    snakeY+=velocityY*blocksize;
    context.fillRect(snakeX,snakeY,blocksize,blocksize);
    for(let i=0;i<snakebody.length;i++){
    context.fillRect(snakebody[i][0],snakebody[i][1],blocksize,blocksize)
    }

    if(snakeX<=0||snakeX>cols*blocksize||snakeY<=0||snakeY>=rows*blocksize)
    window.location="gameover.html"
}

function placeFood(){
    foodX=Math.floor(Math.random()*cols)*blocksize;
    foodY=Math.floor(Math.random()*cols)*blocksize;
}
function changeDirection(e){
 if(e.code=="ArrowUp" && velocityY!=1){
    velocityX=0;
    velocityY=-1;
 }
 if(e.code=="ArrowDown" && velocityY!=-1){
    velocityX=0;
    velocityY=1;
 }
 if(e.code=="ArrowLeft" && velocityX!=1){
    velocityX=-1;
    velocityY=0;
 }
 if(e.code=="ArrowRight" && velocityX!=-1){
    velocityX=1;
    velocityY=0;
 }
}



   
    