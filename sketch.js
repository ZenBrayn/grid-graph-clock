function setup() {  
  // Using a fixed size for consistent display
  // across devices
  dwidth = 900;
  dheight = 500;
  createCanvas(dwidth, dheight);

  background(0);
  noStroke();
  smooth();
  
  n_rows = 0;
  n_cols = 0;
  
  margin_left = 100;
  margin_top = 200;
  
  padding_x = 50;
  spacing = 200;

  lbl_flag = false;

  frameRate(4);
}

//--- Main drawing function
function draw() {
  // Refresh the background;
  background(0);

  hr = hour();
  mn = minute();
  sc = second();

  push()
  textAlign(LEFT, TOP);
  textSize(72);
  fill(255);
  text("The time is...", margin_left * 0.9, 50);
  textSize(18);
  fill(50);
  text(hr + ":" + mn + ":" + sc, margin_left * 1.08, 125);
  pop()

  // Grid graphs
  translate(margin_left, margin_top)
  drawGridGraphNo(hr, no_lbl = lbl_flag);
  translate(spacing + padding_x, 0);
  drawGridGraphNo(mn, no_lbl = lbl_flag);
  translate(spacing + padding_x, 0);
  drawGridGraphNo(sc, no_lbl = lbl_flag);
}

function mouseClicked() {
  lbl_flag = !lbl_flag;
}
