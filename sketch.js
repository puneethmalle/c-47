
var zombieimg, zombie;
var bg,bgImg;
var engine;
var player, playerimg;
var playerGun, gunimg;
var playerBullets, bulletimg;
var score = 0;
var bulletGroup, zombieGroup;


function preload(){
zombieimg = loadImage("zombie1.png");
bgImg = loadImage("background.jpg");
playerimg = loadImage("player.png");
gunimg = loadImage("gun.png")
bulletimg = loadImage("bullet.png");


}

function setup(){


    createCanvas(1000,500)

    //engine = Engine.create();
    //world = engine.world;


bg = createSprite(500,250);
bg.addImage(bgImg);
bg.scale =3.0;

player = createSprite(200,355);
player.addImage(playerimg);
player.scale = 1.25;


bulletGroup = new Group;
zombieGroup = new Group;

score  = 0  ;
stroke("red");
fill("red");
textSize(30);
    
   
    
}

function draw(){
    background(0);
    //Engine.update(engine);
    rectMode(CENTER);
    //spawnZombies();
    drawSprites();
    text("Score:"+score,100,50);


    player.debug= true;
    player.setCollider("circle",0,0,90);
    
    
    if(keyIsDown(32)){
        //playerBullets.velocityX = 10;
        //playerBullets.x=playerBullets.x;
        //playerBullets.y=playerBullets.y;
        shootBullet();

    }
    if(zombieGroup.isTouching(bulletGroup)){
        playerBullets.x=player.x+50
        playerBullets.y = player.y+25
        playerBullets.velocityX = 0;
        zombie.remove();
        bulletGroup.destroyEach(playerBullets);   
        score+=1; 
    }
    if(keyIsDown(UP_ARROW) && player.y>100 ){
        player.y-=10;
    }
    if(keyIsDown(DOWN_ARROW) && player.y<400 ){
        player.y+=10; 
    }
    if(bulletGroup.velocityX=0){
        playerBullets.delete();
    }
    if (frameCount % 50 === 0) {
        spawnZombies();
      }

   
}
function shootBullet(){
    playerBullets = createSprite(250,380);
    playerBullets.y= player.y+25;
    playerBullets.addImage(bulletimg);
    playerBullets.velocityX= 10;
    playerBullets.setCollider("circle",0,0,30);
    playerBullets.scale=0.25;  
    bulletGroup.add(playerBullets);
  }
  function spawnZombies(){
    if(World.frameCount % 10 === 0){
    zombie = createSprite(800,355);
    zombie.addImage(zombieimg);
    zombie.velocityX = -3;
    zombieGroup.add(zombie);
  }
}