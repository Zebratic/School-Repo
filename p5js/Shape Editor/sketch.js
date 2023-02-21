
CubeX = createSlider(-800, 800, 300);
CubeY = createSlider(-800, 800, 300);
CubeW = createSlider(-800, 800, 100);
CubeH = createSlider(-800, 800, 100);

TriangleX = createSlider(-800, 800, 300);
TriangleY = createSlider(-800, 800, 300);
TriangleW = createSlider(-800, 800, 100);
TriangleH = createSlider(-800, 800, 100);

GroundH = createSlider(0, 800, 300);

CircleColorR = createSlider(0, 255, 0);
CircleColorG = createSlider(0, 255, 0);
CircleColorB = createSlider(0, 255, 0);
CircleX = createSlider(-800, 800, 300);
CircleY = createSlider(-800, 800, 300);

function setup()
{
    createCanvas(canvas.width, canvas.height);
}


function DrawSliders()
{
    ///// CUBE /////
    // X label
    fill(0);
    textSize(16);
    text("Cube X", 140, 22);
    CubeX.position(20, 25);

    // Y label
    fill(0);
    textSize(16);
    text("Cube Y", 140, 52);
    CubeY.position(20, 55);

    // W label
    fill(0);
    textSize(16);
    text("Cube W", 140, 82);
    CubeW.position(20, 85);

    // H label
    fill(0);
    textSize(16);
    text("Cube H", 140, 112);
    CubeH.position(20, 115);

    ///// TRIANGLE /////
    // X label
    fill(0);
    textSize(16);
    text("Triangle X", 140, 142);
    TriangleX.position(20, 145);
    
    // Y label
    fill(0);
    textSize(16);
    text("Triangle Y", 140, 172);
    TriangleY.position(20, 175);

    // W label
    fill(0);
    textSize(16);
    text("Triangle W", 140, 202);
    TriangleW.position(20, 205);

    // H label
    fill(0);
    textSize(16);
    text("Triangle H", 140, 232);
    TriangleH.position(20, 235);


    ///// GROUND /////
    // H label
    fill(0);
    textSize(16);
    text("Ground H", 140, 262);
    GroundH.position(20, 265);


    ///// CIRCLE COLOR /////
    // R label
    fill(0);
    textSize(16);
    text("Circle Color R", 140, 322);
    CircleColorR.position(20, 325);

    // G label
    fill(0);
    textSize(16);
    text("Circle Color G", 140, 352);
    CircleColorG.position(20, 355);

    // B label
    fill(0);
    textSize(16);
    text("Circle Color B", 140, 382);
    CircleColorB.position(20, 385);

    // X label
    fill(0);
    textSize(16);
    text("Circle X", 140, 412);
    CircleX.position(20, 415);

    // Y label
    fill(0);
    textSize(16);
    text("Circle Y", 140, 442);
    CircleY.position(20, 445);
}

function DrawShapes()
{
    let cx = CubeX.value();
    let cy = CubeY.value();
    let cw = CubeW.value();
    let ch = CubeH.value();

    fill(0, 0, 0);
    rect(cx, cy, cw, ch);

    // draw rectangle inside rectangle which is half the size
    fill(255, 0, 0);
    rect(cx + cw / 4, cy + ch / 4, cw / 2, ch / 2);

    let tx = TriangleX.value();
    let ty = TriangleY.value();
    let tw = TriangleW.value();
    let th = TriangleH.value();

    // draw triangle pointing upwards
    fill(0, 0, 255);
    triangle(tx, ty, tx + tw, ty, tx + tw / 2, ty - th);

    // draw circles in a cluster with a bit of randomisation
    fill(0, 255, 0);
    for (let i = 0; i < 10; i++)
    {
        let x = tx + tw / 2 + random(-tw / 4, tw / 4);
        let y = ty - th / 2 + random(-th / 4, th / 4);
        circle(x, y, 10);
    }

    let gh = GroundH.value();

    // draw ground
    fill(0, 255, 0);
    rect(0, height - gh, width, gh);

    let cr = CircleColorR.value();
    let cg = CircleColorG.value();
    let cb = CircleColorB.value();
    let cx2 = CircleX.value();
    let cy2 = CircleY.value();

    // draw circle on ground
    fill(cr, cg, cb);
    circle(cx2, cy2, 50);
}


function draw()
{
    background(255);

    DrawSliders();

    DrawShapes();
}