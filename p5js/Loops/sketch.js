var x = 0;

var circles = [];
var drawindex = 0;

class Circle
{
    constructor(x, y, size)
    {
        this.x = x; 
        this.y = y; 
        this.size = size;
    }
}


function setup()
{
    circles.push(new Circle(100, 100, 20));
    circles.push(new Circle(100, 100, 19));
    circles.push(new Circle(100, 100, 18));
    circles.push(new Circle(100, 100, 17));
    circles.push(new Circle(100, 100, 16));
    circles.push(new Circle(100, 100, 15));
    circles.push(new Circle(100, 100, 14));
    circles.push(new Circle(100, 100, 13));
    circles.push(new Circle(100, 100, 12));
    circles.push(new Circle(100, 100, 11));
    circles.push(new Circle(100, 100, 10));
    circles.push(new Circle(100, 100, 9));
    circles.push(new Circle(100, 100, 8));
    circles.push(new Circle(100, 100, 7));
    circles.push(new Circle(100, 100, 6));
    circles.push(new Circle(100, 100, 5));
    circles.push(new Circle(100, 100, 4));
    circles.push(new Circle(100, 100, 3));
    circles.push(new Circle(100, 100, 2));
    circles.push(new Circle(100, 100, 1));
}

function drawCircles()
{
    for (var i = 0; i < circles.length; i++) // Entity loop (circles lol)
    {
        stroke(255);
        fill(255, 255, 255);
        ellipse(circles[i].x, circles[i].y, circles[i].size, circles[i].size);

        // connect all circles to each other
        for (var j = 0; j < circles.length; j++)
        {
            if (i != j)
            {
                line(circles[i].x, circles[i].y, circles[j].x, circles[j].y);
            }
        }

        /* Connect circle to previous circle with a line
        if (i > 0)
        {
            line(circles[i].x, circles[i].y, circles[i - 1].x, circles[i - 1].y);
        }
        */
    }

    // Updating drawindex
    drawindex++;
    if (drawindex >= circles.length)
        drawindex = 0;

    circles[circles.length - 1].x = mouseX;
    circles[circles.length - 1].y = mouseY;

    // Update previous circles with last circles position (wave effect :) )
    for (var i2 = 0; i2 < circles.length - 1; i2++)
    {
        circles[i2].x = circles[i2 + 1].x;
        circles[i2].y = circles[i2 + 1].y;
    }
}

function draw() // Main Renderer
{
    background(0);
    drawCircles();
}