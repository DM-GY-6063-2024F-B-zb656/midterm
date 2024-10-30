let traskfarm;
let traskhouse;
let traskroof;
let traskrock;
let roofmask;
let rock;

let horizon;
let houseEdge;

function preload() {
  traskfarm = loadImage("../assets/traskfarm2.jpg");
  traskhouse = loadImage("../assets/traskhouse.jpg");
  traskroof = loadImage("../assets/traskroof.jpg");
  traskrock = loadImage("../assets/traskrock.jpg");
  rock = loadImage("../assets/rock.png")
  roofmask = loadImage("../assets/roofmask.png");
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
  let xpos = map(daytime, 21600, 72000, width + 50, -50);
  fill(255,199,0);
  ellipse(xpos, 300, 100);
  // print(xpos);


  //DRAWINGS NOT RELIANT ON TIME:

  //FARMLAND
  traskfarm.resize(width, height/3);
  image(traskfarm, 0, horizon);

  //HOUSE
  traskhouse.resize(170,100);
  image(traskhouse, houseEdge, horizon - 50);

  //ROOF
  traskroof.resize(200, 0);
  traskroof.mask(roofmask);
  image(traskroof, houseEdge - 15, horizon - 250);

  //to do: door + windows?

  //ROCK or should the rock be replaced by a transparent img of a rock?
  rock.resize(300,300);
  image(rock, 300, horizon - 120);
  
  //fill with traskrock.jpg
  // traskrock.resize(500,0);
  // traskrock.mask(rock());
  // image(traskrock, 290, horizon + 10);
  // rock(); //HOW TO MAKE THE ROCK INTO AN OBJECT? or should i just get a transparent rock in here.
  //MAKE ROCK into object with vertices? this may be easier. but not for the hills...

  //TO-DO: draw pool of blood animation
}
