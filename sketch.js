let pt1 =100;
let pt2 = 300
let y = 200;
function setup() {
  createCanvas(400, 400);
  pt1=createVector(200,200);
  pt2=createVector(0,200);
}

function draw() {
  background(220);
  fill(255);
  pt1.x= mouseX;
  pt1.y= mouseY;
  ellipse(pt1.x,pt1.y,50,50);
  fill(255,255,0);
  
  print(pt2.x);
  
  pt2.x=lerp(pt2.x, pt1.x, 0.1);
  pt2.y=lerp(pt2.y, pt1.y, 0.1);
  
  ellipse(pt2.x,pt2.y,50,50);
}