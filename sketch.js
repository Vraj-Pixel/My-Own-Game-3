var road,roadImage;
var car,carImage;
var vehicleGroup,vehicleImage;
var lifeCounter=3;
var PLAY=1;
var END=0;
var gameState=PLAY;

function preload(){
  roadImage=loadImage('track.png');
  carImage=loadImage('Car2.png');
  vehicleImage=loadImage('Vehicle.png');
}

function setup(){
 createCanvas(600,600);

  vehicleGroup=new Group(); 

 road=createSprite(300,300);
 road.addImage(roadImage);
 road.scale=1;

 car=createSprite(370,350);
 car.addImage(carImage);
 car.scale=0.5
}

function draw(){
console.log(gameState);
  if(gameState===PLAY){
    road.velocityY=2;
    if(road.y>400){
      road.y=300;
    }

    if(keyIsDown(LEFT_ARROW)){
      car.x=car.x-5;
    }

    if(keyIsDown(RIGHT_ARROW)){
      car.x=car.x+5;
    }
    //console.log(road.y);
    spawnVehicles();

    if(vehicleGroup.isTouching(car)){
      vehicleGroup.destroyEach();
      lifeCounter--;
    }

    if(lifeCounter===0){
      gameState=END
    }
    drawSprites();

    textSize(20);
    fill(255)
    text("Lifes Remaining:"+lifeCounter,430,50);
}

if(gameState===END){
  vehicleGroup.setVelocityYEach(0);
}
  

  
}

function spawnVehicles(){   
  if(frameCount%100===0){
    
    vehicle1=createSprite(35,600,30,30);
    vehicle1.addImage(vehicleImage);
    vehicle1.scale=0.5
    var direction=Math.round(random(1,2));
    if(direction===1){
      var randX=Math.round(random(300,500));
      vehicle1.x=randX;
      vehicle1.y=600;
      vehicle1.velocityY=-2;
    }
    else{
      var randX=Math.round(random(100,300));
      vehicle1.x=randX;
      vehicle1.y=0; 
      vehicle1.velocityY=5;
    }
     vehicleGroup.add(vehicle1);
  }

}