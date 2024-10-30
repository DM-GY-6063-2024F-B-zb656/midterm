let flowers1;
let flowers2;

let hill1mask;
let hill2mask;

function preload() {
  flowers1 = loadImage("../assets/flowers1.png");
  flowers2 = loadImage("../assets/flowers2.png");

  hill1mask = loadImage("../assets/hill1mask.png");
  hill2mask = loadImage("../assets/hill2mask.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  print(width, height);
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
    background(0,31,66)
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
  let xpos = map(daytime, 21600, 72000, -50, width + 50);
  fill(255,199,0);
  ellipse(xpos, 300, 100);
  // print(xpos);


  //TEST SUN ARC not sure about the new x mapping?
  // push();
  // translate(width/2, height);
  // let xpos = map(daytime, 21600, 72000, (-width/2), width/2);
  // let ypos = sqrt(pow(width/2, 2) - pow(x, 2));
  // fill(255,199,0);
  // ellipse(xpos, ypos, 100);
  // pop();


  //draw hills and river
  //masked w/ images from web
  //hill should go from flower blooming to kind of dried out. use transparency to make flow between images smooth?

  //ATTEMPT TO DRAW HILL

  flowers2.resize(width, height);
  flowers2.mask(hill2mask);
  image(flowers2, 0, 0);

  flowers1.resize(width,height);
  flowers1.mask(hill1mask);
  image(flowers1, 0, 0);

  // fill('green');
  // noStroke();
  // ellipse(200, height, 1200, 700);
  // ellipse(width/2, height, 500, 400);
  // triangle(583, 481, 832, 556, 675, 626);
  // triangle(957, 619, 1133, 747, 1016, height);



}

function mousePressed() {
  print(mouseX, mouseY);
}
