var screen_x = 800;
var screen_y = 800;

var content = "Hello, World!";
var cursor_pos_x;
var cursor_pos_y;

function setup()
{
    createCanvas(screen_x, screen_y);
}

function keyPressed()
{
    // if key is pressed, update text
    if (key != "")
    {
        switch (key)
        {
            case "Backspace":
                content = content.substring(0, content.length - 1);    
                break;

            case "Enter":
                content += "\n";
                break;

            case "Shift":
                break;

            default:
                content += key;
        }
    }
}

function RenderLines()
{
    // render content
    var xoffset = 0;
    var yoffset = 0;

    // when clicking on text get cursor position and render cursor
    if (mouseIsPressed)
    {
        cursor_pos_x = mouseX;
        cursor_pos_y = mouseY;
    }
    
    // render lines until end of screen y
    for (var i = yoffset; i < screen_y; i += 20)
    {
        stroke(100, 100, 100);
        line(0, i, screen_x, i);
    }

    // render text
    stroke(0, 0);
    text(content, xoffset, yoffset + 20);
}

function draw()
{
    background(255, 255, 255);
    

    RenderLines();
}