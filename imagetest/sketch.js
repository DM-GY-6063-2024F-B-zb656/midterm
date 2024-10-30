let rock;

function preload() {
  rock = loadImage("../assets/rock.png");
}
function setup() {

  createCanvas(windowWidth, windowHeight);
  background(0,0);

  image(rock, 0, 0);

}

// function mousePressed() {
//   save();
// }