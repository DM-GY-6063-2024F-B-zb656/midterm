//create the hills & river as functions up here?

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
  let xpos = map(daytime, 21600, 72000, -50, width + 50);
  fill(255,199,0);
  ellipse(xpos, 300, 100);
  // print(xpos);


  //draw hills and river
  //masked w/ images from web
  //hill should go from flower blooming to kind of dried out. use transparency to make flow between images smooth?
}
