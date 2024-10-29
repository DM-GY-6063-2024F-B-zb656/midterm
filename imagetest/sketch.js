function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0);

  fill(150);
  triangle((2 * (width/3)) - 10, (2 * (height/3)) - 50, (2 * (width/3)) + 180, (2 * (height/3)) - 50, (2 * (width/3)) + 85, (2 * (height/3)) - 100);
}

function mousePressed() {
  save();
}