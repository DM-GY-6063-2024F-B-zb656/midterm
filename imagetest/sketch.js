let flowers1;

function preload() {
  flowers1 = loadImage("../assets/flowers1.jpg")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0);
  
  flowers1.resize(1200, 0);
  image(flowers1, 0, 100);

}

// function mousePressed() {
//   save();
// }