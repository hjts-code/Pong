var playerPaddle, computerPaddle, ball, edges;

function setup(){
  playerPaddle = createSprite(390, 200, 10, 100);
  computerPaddle = createSprite(10, 200, 10, 100);
  ball = createSprite(200,200,10,10);
  
  edges = createEdgeSprites(); 
}

function draw(){
  background(220);
  
  if(keyDown("space")){
    ball.velocityX = 2;
    ball.velocityY = 3;
  }
  
  playerPaddle.y = mouseY;
  computerPaddle.y = ball.y;
  
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(playerPaddle);
  ball.bounceOff(computerPaddle);
  
  if(ball.x > 400 || ball.x < 0){
    
    ball.velocityX = 0;
    ball.velocityY = 0;
    
    ball.x = 200;
    ball.y = 200;
  }
  
  drawSprites();
}
