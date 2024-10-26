let traskfarm;
let traskhouse;
let traskroof;
let traskrock;

let horizon;
let houseEdge;

function preload() {
  traskfarm = loadImage("../assets/traskfarm.jpg");
  traskhouse = loadImage("../assets/traskhouse.jpg");
  traskroof = loadImage("../assets/traskroof.jpg");
  traskrock = loadImage("../assets/traskrock.jpg")
}

function rock() {
  line(300, horizon + 50, 450, horizon + 50);
  line(450, horizon + 50, 440, horizon + 30);
  curve(290, horizon + 55, 300, horizon + 50, 310, horizon + 35, 320, horizon + 35);
  curve(315, horizon + 50, 310, horizon + 35, 325, horizon + 28, 340, horizon + 35);
  line(325, horizon + 28, 345, horizon + 22);
  line(345, horizon + 22, 360, horizon + 15);
  curve(290, horizon + 50, 360, horizon + 15, 440, horizon + 30, 460, horizon + 90);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  horizon = 2 * (height/3);
  houseEdge = 2 * (width/3);

  //ground(farmland etc) doesn't change w/ time
  //house also doesnt change w/ time
  //rock in farmland doesn't change over time
}

function draw() {
  background(141,186,237);

  //SUN ELLIPSE
  //I BELIEVE this is working. printing the xpos proves that it is increasing
  //and when i set the mod to 2000 instead of a day length it moved & restarted at beginning of screen
  //to do: how to make sun move in arc instead of straight line?
  //to do: how to map this to real day-time instead of just a days length?
  let aDay = millis() % 86400000
  let xpos = map(aDay, 21600000, 72000000, width + 50, -50);
  fill(255,199,0);
  ellipse(xpos, 300, 100);
  print(xpos);

  //DRAWINGS NOT RELIANT ON TIME:

  //FARMLAND AND HOUSE
  fill(255); //to do: FILL RECTANGLE WITH traskfarm.jpg
  rect(0, horizon, width, height/3);

  //HOUSE or should the house just be replaced by transparent img of house?
  fill(200); //to do: FILL HOUSE BODY WITH traskhouse.jpg
  rect(houseEdge, horizon - 50, 170, 100);

  fill(150); //to do: FILL ROOF WITH traskroof.jpg
  triangle(houseEdge - 10, horizon - 50, houseEdge + 180, horizon - 50, houseEdge + 85, horizon - 100);

  //to do: door + windows

  //ROCK
  //fill with traskrock.jpg
  rock();








  //pool of blood comes out of the bottom of rock
  //web images for this (collage-esque)
  //pool grows bigger over the course of the day
}
