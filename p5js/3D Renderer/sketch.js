var angle = 0;
var funnytexture;

function setup()
{
    createCanvas(width, height, WEBGL);
    background(255, 255, 255);
    funnytexture = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg");
}

function draw()
{
    background(255, 255, 255);

    rotateX(angle);
    rotateY(angle);
    rotateZ(angle);
    normalMaterial();
    texture(funnytexture);
    box(300);
    angle += 0.05;

    normalMaterial();
}