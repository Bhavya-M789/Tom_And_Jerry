
function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    sittingCat = loadAnimation("images/cat1.png");
    runningCat = loadAnimation("images/cat2.png", "images/cat3.png");
    cat3 = loadAnimation("images/cat4.png");
    cheeseMouse = loadAnimation("images/mouse1.png");
    runningMouse = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouse3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(500, 400);
    garden.addImage("background", gardenImg);
    tom = createSprite(775, 630);
    tom.addAnimation("sitting", sittingCat);
    tom.scale = 0.15;
    mouse = createSprite(200, 630);
    mouse.addAnimation("cheese", cheeseMouse);
    mouse.scale = 0.15; 
    //create tom and jerry sprites here

}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide
    keyPressed();
    if(tom.x - mouse.x < (tom.width + mouse.width)/2 && 
    mouse.x - tom.x < (mouse.width + tom.width)/2 && 
    tom.y - mouse.y < (tom.height + mouse.height)/2 &&
    mouse.y - tom.y < (mouse.height + tom.height)/2) { 
        tom.addAnimation("touch", cat3);
        tom.changeAnimation("touch");
        mouse.addAnimation("look", mouse3);
        mouse.changeAnimation("look");
        tom.velocityX = 0;
    }
    
    drawSprites();
}


function keyPressed(){
   if(keyDown ("LEFT_ARROW")){
       tom.velocityX = -5;
       tom.addAnimation("catRunning", runningCat);
       tom.changeAnimation("catRunning");
       mouse.addAnimation("teasing", runningMouse);
       mouse.changeAnimation("teasing");
   } 
   else{
       tom.velocityX = 0;
   }
}
