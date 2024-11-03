let traskfarm;
let traskhouse;
let traskroof;
let traskrock;
let roofmask;
let rock;
let pool1mask;
let pool2mask;
let pool3mask;
let pool4mask;
let pool1;
let pool2;
let pool3;
let pool4;

let horizon;
let houseEdge;

let clicks;
let fade;
let appear;
let poolcount;

let NUM_OBJS = 100;
let circles = [];

function preload() {
  traskfarm = loadImage("../assets/traskfarm2.jpg");
  traskhouse = loadImage("../assets/traskhouse.jpg");
  traskroof = loadImage("../assets/traskroof.jpg");
  traskrock = loadImage("../assets/traskrock.jpg");
  rock = loadImage("../assets/rock.png")
  roofmask = loadImage("../assets/roofmask.png");
  pool1mask = loadImage("../assets/pool1mask.png");
  pool2mask = loadImage("../assets/pool2mask.png");
  pool3mask = loadImage("../assets/pool3mask.png");
  pool4mask = loadImage("../assets/pool4mask.png");
  pool1 = loadImage("../assets/pool1.png");
  pool2 = loadImage("../assets/pool2.png");
  pool3 = loadImage("../assets/pool3.png");
  pool4 = loadImage("../assets/pool4.png");
}

// function rock() {
//   line(300, horizon + 50, 450, horizon + 50);
//   line(450, horizon + 50, 440, horizon + 30);
//   curve(290, horizon + 55, 300, horizon + 50, 310, horizon + 35, 320, horizon + 35);
//   curve(315, horizon + 50, 310, horizon + 35, 325, horizon + 28, 340, horizon + 35);
//   line(325, horizon + 28, 345, horizon + 22);
//   line(345, horizon + 22, 360, horizon + 15);
//   curve(290, horizon + 50, 360, horizon + 15, 440, horizon + 30, 460, horizon + 90);
// }

function setup() {
  createCanvas(windowWidth, windowHeight);

  horizon = 2 * (height/3);
  houseEdge = 2 * (width/3);
  clicks = 0;

  for (let cnt = 0; cnt < NUM_OBJS; cnt++) {
    let aCircle = {
      x: random(width),
      y: random(height),
      d: random(1,5),
      a: 0,
      da: random(1,10),
    };
    circles.push(aCircle);
  }
}

function draw() {
  //REAL TIME in CURRENT SECOND
  let h = hour() * 3600;
  let m = minute() * 60;
  let s = second();
  let daytime = h + m + s;
  // print(time);

  //SKY GRADIENT (check functioning)
  //TO-DO: add nice blinking stars?
  if (daytime < 18000 || daytime > 72000) {
    background(0,31,66);

    for(let idx = 0; idx < circles.length; idx ++) {
      let mCircle = circles[idx];
      fill(255, mCircle.a);
      noStroke();
      ellipse(mCircle.x, mCircle.y, mCircle.d);
  
      mCircle.a = (mCircle.a + mCircle.da) % 255;
    }
  } else if (daytime < 21600) {
    //gradient from night to normal
    let red = map(daytime, 18000, 21600, 0, 141);
    let green = map(daytime, 18000, 21600, 31, 186);
    let blue = map(daytime, 18000, 21600, 66, 237);
    background(red, green, blue);
  } else if (daytime > 68400) {
    //gradient from normal to night
    let red = map(daytime, 68400, 72000, 141, 0);
    let green = map(daytime, 68400, 72000, 186, 31);
    let blue = map(daytime, 68400, 72000, 237, 66);
    background(red, green, blue);
  } else {
    background(141,186,237);
  }
  
  //SUN ANIMATION
  //to do: how to make sun move in arc instead of straight line?
  let xpos = map(daytime, 21600, 72000, width + 50, -50);
  fill(255,199,0);
  ellipse(xpos, 300, 100);
  // print(xpos);

  //FARMLAND
  traskfarm.resize(width, height/3);
  image(traskfarm, 0, horizon);

  //HOUSE  //to do: door + windows?
  traskhouse.resize(170,100);
  image(traskhouse, houseEdge, horizon - 50);

  //ROOF
  traskroof.resize(200, 0);
  traskroof.mask(roofmask);
  image(traskroof, houseEdge - 15, horizon - 250);

  //POOLS OF BLOOD
  push();
  let poolcount = millis() % 60000;
  
  if (poolcount < 7000) {
    pool1.resize(width, height);
    pool1.mask(pool1mask);
    image(pool1, 0,0);
  } else if (poolcount < 10000) {
    pool1.resize(width, height);
    pool1.mask(pool1mask);
    image(pool1, 0,0);

    appear = map(poolcount, 7000, 10000, 0, 255);
    tint(255, appear);
    pool2.resize(width, height);
    pool2.mask(pool2mask);
    image(pool2, 0,0);
  } else if (poolcount < 17000) {
    pool2.resize(width, height);
    pool2.mask(pool2mask);
    image(pool2, 0,0);
  } else if (poolcount < 20000) {
    pool1.resize(width, height);
    pool1.mask(pool1mask);
    image(pool1, 0,0);

    pool2.resize(width, height);
    pool2.mask(pool2mask);
    image(pool2, 0,0);

    appear = map(poolcount, 17000, 20000, 0, 255);
    tint(255, appear);
    pool3.resize(width, height);
    pool3.mask(pool3mask);
    image(pool3, 0,0);
  } else if (poolcount < 27000) {
    pool3.resize(width, height);
    pool3.mask(pool3mask);
    image(pool3, 0,0);
  } else if (poolcount < 30000) {
    pool1.resize(width, height);
    pool1.mask(pool1mask);
    image(pool1, 0,0);

    pool2.resize(width, height);
    pool2.mask(pool2mask);
    image(pool2, 0,0);

    pool3.resize(width, height);
    pool3.mask(pool3mask);
    image(pool3, 0,0);

    appear = map(poolcount, 27000, 30000, 0, 255);
    tint(255, appear);
    pool4.resize(width, height);
    pool4.mask(pool4mask);
    image(pool4, 0,0);
  } else if (poolcount < 37000) {
    pool4.resize(width, height);
    pool4.mask(pool4mask);
    image(pool4, 0,0);
  } else if (poolcount < 40000) {
    pool3.resize(width, height);
    pool3.mask(pool3mask);
    image(pool3, 0,0);

    fade = map(poolcount, 37000, 40000, 255, 0);
    tint(255, fade);
    pool4.resize(width, height);
    pool4.mask(pool4mask);
    image(pool4, 0,0);
  } else if (poolcount < 47000) {
    pool3.resize(width, height);
    pool3.mask(pool3mask);
    image(pool3, 0,0);
  } else if (poolcount < 50000) {
    pool2.resize(width, height);
    pool2.mask(pool2mask);
    image(pool2, 0,0);

    fade = map(poolcount, 47000, 50000, 255, 0);
    tint(255, fade);
    pool3.resize(width, height);
    pool3.mask(pool3mask);
    image(pool3, 0,0);
  } else if (poolcount < 57000) {
    pool2.resize(width, height);
    pool2.mask(pool2mask);
    image(pool2, 0,0);
  } else if (poolcount < 60000) {
    pool1.resize(width, height);
    pool1.mask(pool1mask);
    image(pool1, 0,0);

    fade = map(poolcount, 57000, 60000, 255, 0);
    tint(255, fade);
    pool2.resize(width, height);
    pool2.mask(pool2mask);
    image(pool2, 0,0);
  }
  pop();

  //ROCK
  rock.resize(300,300);
  image(rock, 300, horizon - 120);
}

function mouseClicked() {
  // clicks++
  // let oddEven = clicks % 2;
  // print(oddEven);
}

//should the pools of blood be in mouseclicked and that would start the cycle?
//like hills go no matter what but the choice to enact violence is on the user