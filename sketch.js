function setup() {  
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  smooth();

  lbl_flag = false;
  spacing = 0;
}

//--- Main drawing function
function draw() {
  // Refresh the background;
  background(0);

  // Figure out the drawing dimensions
  var margin_x = windowWidth * 0.10;
  var margin_y = 50;
  var padding = windowWidth * 0.10;
  spacing = (windowWidth - 2 * margin_x - 2 * padding ) / 3;


  // Get the time
  hr = hour();
  hr_str = String("00" + hr).slice(-2);
  mn = minute();
  mn_str = String("00" + mn).slice(-2);
  sc = second();
  sc_str = String("00" + sc).slice(-2);

  // draw the clock
  push()
  textAlign(LEFT, TOP);
  var fontsize1 = spacing * 0.50;
  textSize(fontsize1);
  fill(255);
  text("The time is...", margin_x * 0.9, margin_y);
  var fontsize2 = spacing * 0.15;
  textSize(fontsize2);
  fill(50);
  text(hr_str + ":" + mn_str + ":" + sc_str, margin_x * 1.08, margin_y + fontsize1);
  pop()

  // Grid graphs
  clock_pos_y = 
  translate(margin_x, margin_y + fontsize1 + fontsize2 + 75);
  drawGridGraphNo(hr, no_lbl = lbl_flag);
  translate(spacing + padding, 0);
  drawGridGraphNo(mn, no_lbl = lbl_flag);
  translate(spacing + padding, 0);
  drawGridGraphNo(sc, no_lbl = lbl_flag);
}

function mouseClicked() {
  lbl_flag = !lbl_flag;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
