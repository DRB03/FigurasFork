let player;
let objects = [];//almacena la posicion de los objetos
let obstacles = [];//almacena la posicion de los obtaculos
let score = 0;

function setup() //creo el canvas y el jugador
{
  createCanvas(600, 600);
  player = createVector(width/2, height/2);
}

function draw()
{
  background(100);
  movePlayer();//movimiento del jugador
  drawPlayer();//la apariencia 
  drawObjects();//dibuja los objetos
  drawObstacles();//dibuja los obtaculos
  checkCollisions();//verifica una colision y modifica el puntaje 
  drawScore();//muestra la puntuacion
}

function movePlayer()//permite que el jugador se pueda mover con el teclado
{
  
  if (keyIsDown(LEFT_ARROW)) {
    player.x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.x += 5;
  }
  if (keyIsDown(UP_ARROW)) {
    player.y -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    player.y += 5;
  }
}

function drawPlayer()//creo al jugador
{
  fill(0, 255, 0);
  ellipse(player.x, player.y, 20, 20);
}

function drawObjects()//creo los objetos que suman puntos
{
  fill(255, 0, 0);
  for (let i = 0; i < objects.length; i++) {
    ellipse(objects[i].x, objects[i].y, 10, 10);
  }
}

function drawObstacles()//creo obstaculos que restan puntos
{
  fill(0, 0, 255);
  for (let i = 0; i < obstacles.length; i++) {
    rect(obstacles[i].x, obstacles[i].y, 20, 20);
  }
}

function checkCollisions()
//verifico si choco con un objeto u obstaculo y sumo o resto puntos
{
  for (let i = 0; i < objects.length; i++) 
  {
    let d = dist(player.x, player.y, objects[i].x, objects[i].y);
    if (d < 15) {
      objects.splice(i, 1);
      score += 10;
    }
  }
  
  for (let i = 0; i < obstacles.length; i++) 
  {
    let d = dist(player.x, player.y, obstacles[i].x, obstacles[i].y);
    if (d < 20) {
      obstacles.splice(i, 1);
      score -= 5;
    }
  }
}

function drawScore() //muestra la puntuacion actual del jugador
{
  textSize(20);
  textAlign(RIGHT);
  fill(0);
  text("Puntaje(: " + score, width - 20, 30);
}

function spawnObject()
//creo objetos en posiciones random cada segundo
{
  let object = createVector(random(width), random(height));
  objects.push(object);
}

setInterval(spawnObject, 800);

function spawnObstacle()
//creo obtaculos en posicion random cada segundo y medio
{
  let obstacle = createVector(random(width), random(height));
  obstacles.push(obstacle);
}

setInterval(spawnObstacle, 1000);