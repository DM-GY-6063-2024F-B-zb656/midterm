let traskfarm;

function preload() {
  traskfarm = loadImage("../assets/traskfarm.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  image(traskfarm, 100, 100, 100, 100);
}