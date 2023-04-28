let shapes = [];
let isCircle = true;
let player;

class Shape
//Clase base que define las propiedades y los metodos a todas las formas 
 {
  constructor(x, y, size, speed) 
  {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
  }

  move() 
  {
    this.x += this.speed;
    if (this.x > width + this.size) 
    {
      this.x = -this.size;
    }
  }

  display() 
  {
    // La clase Shape no tiene una implementación específica de display
    // En cambio, cada subclase de Shape implementará su propia versión de display
  }

  collide(playerX, playerY, playerSize) 
  {
    let d = dist(this.x, this.y, playerX, playerY);
    if (d < this.size/2 + playerSize/2) {
      return true;
    } else {
      return false;
    }
  }
}

class Circle extends Shape
//Hereda de la clase Shape y tambien tiene sus propios metodos 
 {
  constructor(x, y, size, speed) 
  {
    super(x, y, size, speed);
  }

  display() //hereda de la clase shape pero la sobreescribo para dar una vista unica a cada forma
  {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.size);
  }
}

class Square extends Shape 
//Hereda de la clase Shape y tambien tiene sus propios metodos
{
  constructor(x, y, size, speed) 
  {
    super(x, y, size, speed);
  }

  display()//hereda de la clase shape pero la sobreescribo para dar una vista unica a cada forma 
  {
    fill(0, 0, 255);
    rect(this.x, this.y, this.size, this.size);
  }
}

class Player
//clase para el jugador
 {
  constructor(x, y, size, speed) 
  {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
  }

  move() 
  //permite mover al jugador con los botones del teclado
  {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.speed;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += this.speed;
    }

    this.x = constrain(this.x, this.size/2, width - this.size/2);
    this.y = constrain(this.y, this.size/2, height - this.size/2);
  }

  display()
  {
    fill(0, 255, 0);
    ellipse(this.x, this.y, this.size);
  }

  collide(shape) 
  {
    return shape.collide(this.x, this.y, this.size);
  }
}

function setup() 
//incia el canvas y creo los circulos y cuadrados
{
  createCanvas(500, 500);

  for (let i = 0; i < 10; i++) 
  {
    if (isCircle) {
      shapes.push(new Circle(random(width), random(height), 30, random(1, 2)));
    } else {
      shapes.push(new Square(random(width), random(height), 30, random(1, 2)));
    }
  }

  player = new Player(width/2, height/2, 30, 5);
}

function draw()
//actualiza la posicion de las formas y dibuja el canvas 
 {
  background(100);

  player.move();
  player.display();

  for (let i = 0; i < shapes.length; i++) 
  {
    shapes[i].move();
    shapes[i].display();

    if (player.collide(shapes[i])) {
      textSize(50);
      fill(0);
      text("Fin del Juego ):", width/2 - 120, height/2);
      noLoop();
    }
  }
}

function keyPressed()
//Al presionar la barra de espacio se cambian las figuras de cuadrados a circulos o viceversa
 {
  if (key == ' ') {
    isCircle = !isCircle; // Invertir el valor de isCircle al presionar la barra espaciadora
    shapes = []; // Limpiar el arreglo de formas existentes
    for (let i = 0; i < 10; i++) {
      if (isCircle) {
        shapes.push(new Circle(random(width), random(height), 30, random(1, 5)));
      } else {
        shapes.push(new Square(random(width), random(height), 30, random(1, 5)));
      }
    }
  }
}
