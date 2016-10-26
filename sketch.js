var canvas;
var img;
var img2;
var img3;

var h2;
var h3;
var p2;
var p3;

var r = 0;
var b = 71;

var angle = 0.0;
var speed = 0.05;

var circle = {
  y: 520,
  diameter: 100
}


function setup() {
  
  canvas = createCanvas(1000, 1000);
  canvas.position (220,60);
  
  img = loadImage("smoke.png");  
  img2 = loadImage("sun.png");
  img3 = loadImage("halfmoon.png")
  
  
  h2 = createElement ('h2', 'A Train');
  h2.position (682,70);
  h2 = fill (255);
  console.log(textWidth(h2));
  p1 = createElement ('h3','click into the screen');
  p1.position (640,150);
  console.log(textWidth(h3));
  
  p2 = createElement('p2','Drag mouse for morning view')
  p2.position (270,300);
  
  p3 = createElement('p3','Drag mouse for evening view')
  p3.position (990,300);
}

function draw() {
 r = map(mouseX, 0, 1000, 200, 0);
 background(r, 0, b); 

  
  image(img, mouseX - 40, mouseY - 40, 100, 100);
  
  image(img2, 0, 0, 300, 300);
  image(img3, 780, 50, 150, 200);
  
noStroke();  
//train  
fill (255,166,70);  
rect (330,360,260,140);
fill (205,255,62);
rect (370,300,30,60);
rect (365,290,40,20);
rect (375,280,20,10);

//wheels
fill (255,0,138);  
ellipse (390,circle.y,circle.diameter,circle.diameter);
ellipse (510,circle.y,circle.diameter,circle.diameter);

//train
fill (255,224,43);
rect (575,230,140,270);

//window
fill (19,209,255);  
rect (600,255,90,90);

//moon
//fill (15,19,255); 
//ellipse (880, 150, 100, 100);

//back wheel
 var l0 = map(10, 0, 100, 10, 300);
  

  translate(647, 510);
  rotate(angle);
  
  for (var i=0; i<5; i++) {
    push();
    rotate(i*TWO_PI/5);
    translate(0,l0);
    noStroke();
    fill(255,0,66);
    ellipse(0,0,60,60);
    fill (205,255,62); 
    ellipse(0,0,25,25);
    pop();
  }
  
  angle += speed;


}

function mousePressed () {
p1.html ("Smoke");
p1.position (693,150);
}
