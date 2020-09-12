var car1,car2,car3 , wall;

var speed , weight ;



function setup() {

  createCanvas(1600,400);
  
  
 
  speed = random (55,90);
  weight = random (400,1500);

  
  wall = createSprite (1200,100,10,width/2);

  car1 = createSprite (39,50,50,50);
  
  car2 = createSprite (39,200,50,50);

  car3 = createSprite (39,350,50,50);


  car1.velocityX = speed/5;
  car2.velocityX = speed/5;
  car3.velocityX = speed/5;


  car1.collide (wall);
  car2.collide (wall);
  car3.collide (wall);


  

  

  

  

}



function draw() {


  background(0);  


  if(wall.x - car1.x  < car1.width/2 * wall.width/2){

    car1.velocityX-0;
  
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation<180)
  
  {
  
    car1.shapeColor = color (255,0,0);

    car1.velocityX = 0;

  
  }
  
  
  if(deformation<180 && deformation<100) {
  
    car2.shapeColor = color (230,230,0);
    car2.velocityX = 0;
  }
  
  if(deformation <100) {
  
    car3.shapeColor = color (0,255,0,);
    car3.velocityX = 0;
  
  }
  
  }
  

  drawSprites();
}
