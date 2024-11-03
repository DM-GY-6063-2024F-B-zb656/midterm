let flowers1;
let flowers2;
let grass1;
let grass2;
let dried1;
let dried2;
let hill1mask;
let hill2mask;

let fade;
let appear;

let NUM_OBJS = 100;
let circles = [];

let daytime;
let deg;

function preload() {
  flowers1 = loadImage("../assets/flowers1.png");
  flowers2 = loadImage("../assets/flowers2.png");
  grass1 = loadImage("../assets/grass1.jpg");
  grass2 = loadImage("../assets/grass2.jpg");
  dried1 = loadImage("../assets/dried1.jpg");
  dried2 = loadImage("../assets/dried2.jpg");
  hill1mask = loadImage("../assets/hill1mask.png");
  hill2mask = loadImage("../assets/hill2mask.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  let a = createA('https://dm-gy-6063-2024f-b-zb656.github.io/midterm/trask/', 'Go East');
  a.position(width - 150, 50);
  a.style('color', 'black');
  a.style('font-size', '20px');
  a.style('font-family', 'Georgia');

  flowers2.resize(width, height);
  flowers2.mask(hill2mask);
  flowers1.resize(width,height);
  flowers1.mask(hill1mask);
  grass2.resize(width, height); 
  grass2.mask(hill2mask);
  grass1.resize(width, height);
  grass1.mask(hill1mask);
  dried2.resize(width,height);
  dried2.mask(hill2mask);
  dried1.resize(width,height);
  dried1.mask(hill1mask);

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

  //SKY GRADIENT
  if (daytime < 18000 || daytime > 72000) { //night
    background(0,31,66)
    for(let idx = 0; idx < circles.length; idx ++) {
      let mCircle = circles[idx];
      fill(255, mCircle.a);
      noStroke();
      ellipse(mCircle.x, mCircle.y, mCircle.d);
  
      mCircle.a = (mCircle.a + mCircle.da) % 255;
    }
  } else if (daytime < 21600) { //night to day gradient
    let red = map(daytime, 18000, 21600, 0, 141);
    let green = map(daytime, 18000, 21600, 31, 186);
    let blue = map(daytime, 18000, 21600, 66, 237);
    background(red, green, blue);
  } else if (daytime > 68400) { //day to night gradient
    let red = map(daytime, 68400, 72000, 141, 0);
    let green = map(daytime, 68400, 72000, 186, 31);
    let blue = map(daytime, 68400, 72000, 237, 66);
    background(red, green, blue);
  } else { //day
    background(141,186,237);
  }

  //SUN ANIMATION
  //to do: how to make sun move in arc instead of straight line?
  //is there a way to put a kind of fuzziness aura around the sun?
  deg = map(daytime, 21600, 72000, 180, 360)
  let rad = sin(deg) * 8 + (width/1.8);
  let x = rad * cos(deg);
  let y = rad * sin(deg);

  push();
  translate(width/2, height * 1.25);
  fill(255,199,0);
  ellipse(x, y, 100);
  pop();
  print(x, y);

  if (daytime < 21600 || daytime > 72000) {
    x = 0;
    y = 0;
  }
  // let xpos = map(daytime, 21600, 72000, -50, width + 50);
  // fill(255,199,0);
  // ellipse(xpos, 300, 100);
  // print(xpos);


  //HILL TRANSITIONS you should make these faster?
  let hillcount = millis() % 3600000

  if (hillcount < 900000) { //full bloom
    image(flowers2, 0, 0);
    image(flowers1, 0, 0);
  } else if (hillcount < 1200000) { //bloom to grass transition
    fade = map(hillcount, 900000, 1200000, 255, 0);
    tint(255, fade);
    image(flowers2, 0, 0);
    image(flowers1, 0, 0);

    appear = map(hillcount, 900000, 1200000, 0, 255);
    tint(255, appear);
    image(grass2, 0, 0);
    image(grass1, 0, 0);
  } else if (hillcount < 2100000) { //full grass
    image(grass2, 0, 0);
    image(grass1, 0, 0);
  } else if (hillcount < 2400000) { //grass to dried transition
    fade = map(hillcount, 2100000, 2400000, 255, 0);
    tint(255, fade);
    image(grass2, 0, 0);
    image(grass1, 0, 0);

    appear = map(hillcount, 2100000, 2400000, 0, 255);
    tint(255, appear);
    image(dried2, 0, 0);
    image(dried1, 0, 0);
  } else if (hillcount < 3300000) { //full dried
    image(dried2, 0, 0);
    image(dried1, 0, 0);
  } else if (hillcount < 3600000) { //dried to bloom transition
    fade = map(hillcount, 3300000, 3600000, 255, 0);
    tint(255, fade);
    image(dried2, 0, 0);
    image(dried1, 0, 0);

    appear = map(hillcount, 3300000, 3600000, 0, 255);
    tint(255, appear);
    image(flowers2, 0, 0);
    image(flowers1, 0, 0);
  }
}
