//DVD BOUNCE
let div;
let screenSizeY = 700;
let screenSizeX = 1190;
let imgSizeX = 200;
let imgSizeY = 100;
let img;
let speed = 5;
let c;
let speedSlider;

function preload(){
  img = loadImage("./DVD_logo.png");
}
class DVD{
  constructor({position, velocity, size}){
    this.position = position;
    this.velocity = velocity;
    this.size = size;
  }
  move(){
    if(this.velocity.x > 0){
      this.position.x += speed;
    }
    if(this.velocity.y > 0){
      this.position.y += speed;
    }
    if(this.velocity.x < 0){
      this.position.x -= speed;
    }
    if(this.velocity.y < 0){
      this.position.y -= speed;
    }
  }
  changeColor(){
    c =  color(random(255), random(255), random(255));
  }
  bounce(){
    if(this.position.x >= screenSizeX - this.size.x){
      this.velocity.x *= -1;
      this.changeColor();
    }
    if(this.position.x <= 0){
      this.velocity.x *= -1;
      this.changeColor();
    }
    if(this.position.y >= screenSizeY - this.size.y){
      this.velocity.y *= -1;
      this.changeColor();
    }
    if(this.position.y <= 0){
      this.velocity.y *= -1;
      this.changeColor();
    }
  }

  //926,472
  //463, 236
  draw(){
    tint(c);
    image(img, this.position.x, this.position.y);
  }
}
let dvd = new DVD({
  position: {x: 175, y: 155},
  velocity: {x: 1, y: 1},
  size: {x: imgSizeX, y: imgSizeY},
});

function setup() {
  speedSlider = createSlider(1,50,5);
  div = createDiv("Speed: " + speedSlider.value());
  div.style('font-size', '32px');
  div.position(speedSlider.position.x, speedSlider.position.y + 50);
  c = color(random(255), random(255), random(255));
  createCanvas(screenSizeX,screenSizeY);
  img.resize(imgSizeX,imgSizeY);
}

function draw() {
  div.html('Speed: ' + speedSlider.value());
  speed = speedSlider.value();
  background(0);
  dvd.draw();
  dvd.move();
  dvd.bounce();
}
