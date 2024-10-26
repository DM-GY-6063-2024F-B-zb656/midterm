//create the hills & river as functions up here?

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(141,186,237);
  //sky background that changes from light blue (daytime) to night sky black
  //map the speed at which it changes to the real life clock situation.

  //SUN ELLIPSE
  //I BELIEVE this is working. printing the xpos proves that it is increasing
  //and when i set the mod to 2000 instead of a day length it moved & restarted at beginning of screen
  //to do: how to make sun move in arc instead of straight line?
  //to do: how to map this to real day-time instead of just a days length?
  let aDay = millis() % 86400000
  let xpos = map(aDay, 21600000, 72000000, -50, width + 50);
  fill(255,199,0);
  ellipse(xpos, 300, 100);
  print(xpos);


  //hills and river shapes
  //masked w/ images from web
  //hill should go from flower blooming to kind of dried out. use transparency to make flow between images smooth?
}