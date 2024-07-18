let x = 0;
function setup() {
  let cnv = createCanvas(800, 500);
  cnv.parent("p5-canvas-container")
}

function draw() {
  background(220, 20, 180);
  fill(10, 255, 100);
  circle(x, height/2, 59)
  x++;
  if(x>width){
    x=0;
  }
}