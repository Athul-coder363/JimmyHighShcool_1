var jimmy;
var ground;
var box,boxGroup;
function setup(){
createCanvas(windowWidth,windowHeight);
 jimmy = createSprite(200, height - 400, 50,50);
 ground = createSprite(width/2, 600,width,20); 
 boxGroup = new Group();
}
function draw(){
    background("white");
    if(keyDown(UP_ARROW)){
        jimmy.velocityY=-9
    }
    if(keyDown(DOWN_ARROW)){
        jimmy.velocityY=3
    }
    if(keyDown(LEFT_ARROW)){
        jimmy.velocityX=-3
    }
    if(keyDown(RIGHT_ARROW)){
        jimmy.velocityX=50
    }
    //console.log(windowWidth)
    jimmy.velocityY+=0.8
    jimmy.collide(ground);  
    if(boxGroup.isTouching(jimmy)){
        jimmy.velocityY=0
        jimmy.velocityX=0
        boxGroup.setLifetimeEach(-1);
        boxGroup.setVelocityXEach(0);
       //console.log("gameOver");
    }
    if(jimmy.x>windowWidth){
    background("black")
    }
    console.log(jimmy.x);
    Objects();  
    drawSprites();
}
function Objects(){
    if(frameCount %200 === 0){
        box = createSprite(width,570,50,50);
        box.velocityX=-4;
        var rand = Math.round(random(1,2));
        //console.log(rand)
        switch(rand){
            case 1: box.y=500;
            break;
            case 2: box.y=570;
            break;
            default: break;
        }
        box.lifetime=width/4
        boxGroup.add(box);
    }
}