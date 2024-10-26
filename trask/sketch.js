function setup() {
  createCanvas(windowWidth, windowHeight);

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


  //pool of blood comes out of the bottom of rock
  //web images for this (collage-esque)
  //pool grows bigger over the course of the day
}
