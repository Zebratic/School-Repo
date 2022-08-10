var anim_frame = 0;
var mouthopen = false;
var smiley_size = 50; 
var mx;
var my;
var screen_x = 800;
var screen_y = 800;

function setup()
{
  createCanvas(screen_x, screen_y);
}

function GetMousePos()
{
  mx = map(mouseX, 0, width, 0, screen_x);
  my = map(mouseY, 0, height, 0, screen_y);
}

function DrawSmiley()
{
  // draw triangle
  ellipse(mx, my, smiley_size, smiley_size);


  // draw a smiley
  fill(255, 255, 0);
  circle(mx, my, smiley_size * 2);

  // draw eyes 
  fill(0, 0, 0);
  circle(mx - (smiley_size / 3), my - (smiley_size / 5), smiley_size / 4);
  circle(mx + (smiley_size / 3), my - (smiley_size / 5), smiley_size / 4);
  
  // draw nose
  fill(0, 0, 255);
  // draw line from middle to nose tip
  line(mx, my, mx - (smiley_size / 8), my + (smiley_size / 8));
  // draw line from nose tip to mouth
  line(mx - (smiley_size / 8), my + (smiley_size / 8), mx, my + (smiley_size / 8));

  if (mouthopen)
  {
    // draw mouth
    fill(255, 0, 0);
    circle(mx, my + (smiley_size / 2), smiley_size / 2);
  }
  else
  {
    // draw mouth line
    fill(255, 0, 0);
    line(mx - (smiley_size / 2), my + (smiley_size / 2), mx + (smiley_size / 2), my + (smiley_size / 2));
  }
}
  
function draw()
{
  background(220);
  
  // getting mouse position on canvas
  GetMousePos();

  // draw 2 lines at mouse position ()
  line(mx - smiley_size / 4, my, mx + smiley_size / 4, my);
  line(mx, my - smiley_size / 4, mx, my + smiley_size / 4,);

  // draw 4 lines from each corner to mouse position
  //line(0, 0, mx, my);
  //line(width, 0, mx, my);
  //line(0, height, mx, my);
  //line(width, height, mx, my);

  // on click
  if (mouseIsPressed) // true for debugging
  {
    DrawSmiley();
  }

  // flip bool to toggle mouth open/closed
  if (anim_frame == 10)
  {
    anim_frame = 0;
    mouthopen = !mouthopen;
  }

  anim_frame++;
}