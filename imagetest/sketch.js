let pool1;
let pool2;
let pool3;
let pool4;

function preload() {
  pool1 = loadImage("../assets/flesh.jpg");
  pool2 = loadImage("../assets/dragonskinred.jpg");
  pool3 = loadImage("../assets/abstract8.jpg");
  pool4 = loadImage("../assets/bloodcells-1.jpg");
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(0,0);
  fill(0);
  // pool3.resize(400,400);
  // image(pool3, 245, (2 * (height/3)) - 100)

  // pool2.resize(310,310);
  // image(pool2, 295, (2 * (height/3)) - 100)

  pool1.resize(210,210);
  image(pool1, 345, (2 * (height/3)))

  // ellipse(450, (2 * (height/3)) + 70, 200, 70) //pool 1
  // ellipse(450, (2 * (height/3)) + 70, 300, 100) // pool 2
  // ellipse(450, (2 * (height/3)) + 80, 350, 120) // pool 3

}

function mousePressed() {
  save();
}