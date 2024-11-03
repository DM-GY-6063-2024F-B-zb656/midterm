let NUM_OBJS = 100;
let circles = [];
let blinkTime;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let cnt = 0; cnt < NUM_OBJS; cnt++) {
    let aCircle = {
      x: random(width),
      y: random(height),
      d: random(1,5),
      a: 0,
      da: random(1,3),
    };
    circles.push(aCircle);
  }
}

function draw() {
  background(0);
  for(let idx = 0; idx < circles.length; idx ++) {
    let mCircle = circles[idx];
    fill(255, mCircle.a);
    noStroke();
    ellipse(mCircle.x, mCircle.y, mCircle.d);

    blinkTime = millis() % 300000;
    mCircle.a = (mCircle.a + map(blinkTime, 0, 300000, mCircle.da, 255)) % 255;
    // print(mCircle.a);

    // let blink = map(blinktime, 0, 300000, mCircle.da, 255)

    // mCircle.a = (mCircle.a + mCircle.da) % 255;
  }
}