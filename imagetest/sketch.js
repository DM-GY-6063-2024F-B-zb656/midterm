let NUM_OBJS = 2;
let clouds = [];

function cloud(x, y) {
  rect(x, y, 100, 50, 20);
  ellipse(x + 20, y + 25, 50);
  ellipse(x + 30, y, 30);
  ellipse(x + 60, y, 50);
  ellipse(x + 80, y + 20, 50);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let cnt = 0; cnt < NUM_OBJS; cnt++) {
    let aCloud = {
      x: random(0, width/2),
      y: random(0, height/2),
    };
    clouds.push(aCloud);
  }
}

function draw() {
  background(0);
  for(let idx = 0; idx < clouds.length; idx ++) {
    let mCloud = clouds[idx];
    mCloud.x = frameCount / 10;
    fill(255);
    noStroke();
    cloud(mCloud.x % (width + 500), mCloud.y)
  }
}