let bubbleInstance = []
var r
var b
var x = 0
var y = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  r = random(20, 40)
}

function draw() {
  
  if (x < width) {
    b = new Bubbles(x, y, r)
    bubbleInstance.push(b)
    x += 60
  } else {
    x = 0
    y += 60
  }

  for (var i = 0; i < bubbleInstance.length ; i++) {
    bubbleInstance[i].display()
    bubbleInstance[i].move()
  }
}

class Bubbles {
  constructor(x,y,r){
  this.x = x
  this.y = y
  this.r = random(255)
  this.g = random(255)
  this.b = random(255)
  }

  display() {
    strokeWeight(0.4)
    fill(this.r,this.g,this.b,random(10,75))
    circle(this.x,this.y,r)
  }

  move() {
    if (frameCount < 960) {
    this.x += random(-5,5)
    this.y += random(-5,5)
    }
  }

  
  
}