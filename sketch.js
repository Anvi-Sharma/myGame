var wall1, wall2, wall3, wall4, wall5, wall6, wall7,wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17;
var trophy;
var ball;
var square1, square2,square3;
var edges;
var soccer;
var goal;
var death;
var winning;
var losing;
var field;
var gameState = "play";

function preload(){
    soccer=loadImage("soccer.png")
    goal=loadImage("goal.png")
    cone=loadImage("cone.png");
    winning=loadSound("winning.mp3")
    losing=loadSound("losing.mp3")
    field=loadImage("field.jpg")

}





function setup(){
 createCanvas(950,600);

death=0

ball= createSprite(25,25,25,25);
ball.addImage(soccer)
ball.scale=0.03

trophy= createSprite(180,270,20,20);
trophy.addImage(goal)
trophy.debug=true;
trophy.scale=0.2



square1=createSprite(400, 300, 20, 50);
square1.shapeColor="white";
square1.velocityY=5;

square2=createSprite(490, 340, 20,50);
square2.shapeColor="white";
square2.velocityY=-5

square3=createSprite(700, 440, 50,20);
square3.shapeColor="white";
square3.velocityX=-5


//wall1=createSprite(10,130,25,120);
 //wall1.shapeColor="yellow";

 wall2=createSprite(310,100,780,20)
 wall2.shapeColor="black";

 //wall3=createSprite(150,220,25,120);
 //wall3.shapeColor="aqua";

 wall4=createSprite(370,500,20,55)
 wall4.shapeColor="black";

 wall5=createSprite(490,570,20,70);
wall5.shapeColor="black";

 wall6=createSprite(603,510,20,60)
 wall6.shapeColor="black";

 wall7=createSprite(113,330,25,270);
 wall7.shapeColor="black";

 wall8=createSprite(890,225,145,25)
 //wall8.shapeColor="green";
 wall8.addImage(cone)
 wall8.scale=0.3
 //wall8.debug=true;
 wall8.setCollider("circle",0,0,130)

 wall9=createSprite(335,205,470,25);
 wall9.shapeColor="black";

 wall10=createSprite(690,280,20,370)
wall10.shapeColor="black";

 wall11=createSprite(400,470,600,20)
 wall11.shapeColor="black";

 wall12=createSprite(250,270,20,150)
 wall12.shapeColor="black";

 wall13=createSprite(150,335,70,20)
 wall13.shapeColor="black";

 wall14=createSprite(890,400,130,20)
 //wall14.shapeColor="green";
 wall14.addImage(cone)
 wall14.scale=0.2
 //wall14.debug=true;
 wall14.setCollider("circle",0,0,130)

 wall15=createSprite(735,315,100,20)
 //wall15.shapeColor="green";
 wall15.addImage(cone)
 wall15.scale=0.3

 //wall15.debug=true;
 wall15.setCollider("circle",0,0,130)

 wall16=createSprite(765,150,150,25)
 //wall16.shapeColor="green";
 wall16.addImage(cone)
 wall16.scale=0.2;
 //wall16.debug=true;
 wall16.setCollider("circle",0,0,130)

//wall17=createSprite(490,380,20,80)
//wall17.shapeColor="aqua";


edges=createEdgeSprites();

}


 
function draw(){
    if(gameState === "play"){
background(field)

textSize(30)
fill("black")
text("DEATH :"+ death ,780, 40)


if(keyDown("Right") && gameState === "play" ){
    ball.x = ball.x +3
   
}

if(keyDown("left") && gameState === "play" ){
    ball.x = ball.x -3
    
}

if(keyDown("up") && gameState === "play" ){
  
 ball.y = ball.y -3
}

if(keyDown("down") && gameState === "play" ){
    
    ball.y = ball.y +3
}
    


if( ball.isTouching(wall2) || ball.isTouching(wall4) || ball.isTouching(wall5) || ball.isTouching(wall6) || ball.isTouching(wall7) || ball.isTouching(wall8) || ball.isTouching(wall9) || ball.isTouching(wall10) || ball.isTouching(wall11) || ball.isTouching(wall12) || ball.isTouching(wall13) || ball.isTouching(wall14) || ball.isTouching(wall15) || ball.isTouching(wall16) || ball.isTouching(square1) || ball.isTouching(square2) || ball.isTouching(square3) ){

ball.x=25
ball.y=25
death=death+1
losing.play();

console.log("ball")

}

if (ball.isTouching(trophy)){
    textSize(30)
    fill("white")
    text("YOU WIN!", 200 ,400)
    winning.play();

}

if (death >= 5){
    gameStates = "end"
}




square1.bounceOff(wall9);
square1.bounceOff(wall11);
square2.bounceOff(wall9);
square2.bounceOff(wall11);
square3.bounceOff(wall10);
square3.bounceOff(edges);


drawSprites()
    }

    if(gameState === "end"){
        textSize(40)
        fill(random(0,255), random(0,255), random(0, 255))
        text("GAME OVER", 400,300 )
        square1.velocityY=0
        square2.velocityY=0
        square3.velocityX=0
        background("green")

    }

    console.log(gameState)

}




