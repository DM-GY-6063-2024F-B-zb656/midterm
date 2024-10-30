let flowers1;
let flowers2;
let grass1;
let grass2;
let dried1;
let dried2;

let hill1mask;
let hill2mask;

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
  //is there a way to put a kind of fuzziness aura around the sun?
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

  //FLOWERED HILLS
  flowers2.resize(width, height);
  flowers2.mask(hill2mask);
  image(flowers2, 0, 0);

  flowers1.resize(width,height);
  flowers1.mask(hill1mask);
  image(flowers1, 0, 0);

  //GRASSY HILLS
  // grass2.resize(width, height); 
  // grass2.mask(hill2mask);
  // image(grass2, 0, 0);

  // grass1.resize(width, height); //maybe resize this image to be nicer
  // grass1.mask(hill1mask);
  // image(grass1, 0, 0);

  //DRIED HILLS
  // dried2.resize(width,height);
  // dried2.mask(hill2mask);
  // image(dried2, 0, 0);

  // dried1.resize(width,height);
  // dried1.mask(hill1mask);
  // image(dried1, 0, 0);


}

function mousePressed() {
  print(mouseX, mouseY);
}
