let NUM_OBJS = 100;
let circles = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let cnt = 0; cnt < NUM_OBJS; cnt++) {
    let aCircle = {
      x: random(width),
      y: random(height),
      d: random(25,50),
      a: 0,
      da: random(1,10), //you could totally make like a night city skyline with blinking neon signs with this
    };
    circles.push(aCircle);
  }
  print(circles);
}

function draw() {
  background(0);  
  noStroke();

  for(let idx = 0; idx < circles.length; idx ++) {
    let mCircle = circles[idx];
    fill(255, mCircle.a);
    ellipse(mCircle.x, mCircle.y, mCircle.d);

    mCircle.a = (mCircle.a + mCircle.da) % 255;
  }
}