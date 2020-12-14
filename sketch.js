function setup(){

stand = new Ground(200,380,400,20);
// level 1
box1 = new Box(120,275,30,40);
box2 = new Box(150,275,30,40);
box3 = new Box(180,275,30,40);
box4 = new Box(210,275,30,40);
box5 = new Box(240,275,30,40);
box6 = new Box(270,275,30,40);
box7 = new Box(300,275,30,40);

// level 2
box8 = new Box(330,235,30,40);
box9 = new Box(360,235,30,40);
box10 = new Box(390,235,30,40);
box11 = new Box(420,235,30,40);
box12 = new Box(450,235,30,40);

// level 3
box13 = new Box(360,195,30,40);
box14 = new Box(390,195,30,40);
box15 = new Box(420,195,30,40);

// top
box16 = new Box(390,155,30,40);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);
polygon.addImage = "polygon.png";
imageMode = (CENTER) 
image(polygon_img,polygon.position.x,polygon.position.y,40,40);

drawSprites();
}

function draw(){
    setup();
    if(mouseDragged){
        polygon.y = World.mouseY;
        polygon.x = World.mouseX;
    }
    if(mouseReleased){
        polygon.velocityY = 10;
        polygon.velocityX = 5;
    }
}


