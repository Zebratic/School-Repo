minesweeper = null;

class tile
{
    constructor(x, y, isMine, minesAround)
    {
        this.x = x;
        this.y = y;
        this.size = 25;
        this.isMine = isMine;
        this.isFlagged = false;
        this.isRevealed = false;
        this.minesAround = minesAround;
    }
    
    draw()
    {
        fill(255);
        stroke(0);
        rect(this.x, this.y, this.size, this.size);

        if (this.isRevealed)
        {
            fill(180);
            rect(this.x, this.y, this.size, this.size);

            if (this.isMine)
            {
                fill(0);
                ellipse(this.x + this.size / 2, this.y + this.size / 2, this.size / 2, this.size / 2);
            }
            else if (this.minesAround > 0)
            {
                fill(0);
                textAlign(CENTER, CENTER);
                text(this.minesAround, this.x + this.size / 2, this.y + this.size / 2);
            }
        }
        else if (this.isFlagged)
        {
            // black line from top left to bottom left
            fill(0);
            line(this.x + 10, this.y, this.x + 10, this.y + this.size);

            // red triangle from top left to top right
            fill(255, 0, 0);
            triangle(this.x + 10, this.y + 10, this.x + 10, this.y, this.x + this.size, this.y + 10);




            //fill(0);
            //line(this.x + this.size / 2, this.y + this.size / 2, this.x + this.size / 2, this.y + this.size);
            //fill(255, 0, 0);
            //triangle(this.x + this.size / 2, this.y + this.size / 2, this.x + this.size / 2, this.y, this.x + this.size, this.y + this.size / 2);

        }
    }

    click(x, y, flag)
    {
        if (x > this.x && x < this.x + this.size && y > this.y && y < this.y + this.size)
        {
            console.log("clicked on tile at " + this.x + ", " + this.y);
            if (flag)
                this.isFlagged = !this.isFlagged;
            else
                this.isRevealed = true;
        }
    }
}


class board
{
    constructor()
    {
        this.tiles = [];
    }
    
    draw()
    {

        for (var i = 0; i < minesweeper.board.tiles.length; i++)
        {
            this.tiles[i].draw();
        }
    }
    
    setup(minecount)
    {
        let minesplaced = 0;

        // Create tiles and place mines, calculate numbers of non mine tiles
        for (var i = 0; i < minesweeper.sizex; i++)
        {
            for (var j = 0; j < minesweeper.sizey; j++)
            {
                this.tiles.push(new tile(i * 25, j * 25, false, 0));
            }
        }

        // place mines 
        while (minesplaced < minecount)
        {
            let tile = this.tiles[Math.floor(Math.random() * this.tiles.length)];

            if (!tile.isMine)
            {
                tile.isMine = true;
                minesplaced++;
            }
        }

        // calculate numbers
        for (var i2 = 0; i2 < this.tiles.length; i2++)
        {
            let tile = this.tiles[i2];

            if (!tile.isMine)
            {
                let mines = 0;

                // check all tiles around
                for (var i3 = 0; i3 < this.tiles.length; i3++)
                {
                    let tile2 = this.tiles[i3];

                    if (tile2.isMine)
                    {
                        if (tile2.x == tile.x - 25 && tile2.y == tile.y - 25) mines++;
                        if (tile2.x == tile.x && tile2.y == tile.y - 25) mines++;
                        if (tile2.x == tile.x + 25 && tile2.y == tile.y - 25) mines++;
                        if (tile2.x == tile.x - 25 && tile2.y == tile.y) mines++;
                        if (tile2.x == tile.x + 25 && tile2.y == tile.y) mines++;
                        if (tile2.x == tile.x - 25 && tile2.y == tile.y + 25) mines++;
                        if (tile2.x == tile.x && tile2.y == tile.y + 25) mines++;
                        if (tile2.x == tile.x + 25 && tile2.y == tile.y + 25) mines++;
                    }
                }

                tile.minesAround = mines;
            }

        }

        console.log(minesweeper.board.tiles);


    }

    click(x, y, flag)
    {
        for (var i = 0; i < this.tiles.length; i++)
        {
            this.tiles[i].click(x, y, flag);
        }
    }
}

class game
{
    constructor(x, y)
    {
        this.board = new board();
        this.sizex = 10;
        this.sizey = 10;
    }

    draw()
    {
        this.board.draw();
    }
}


function setup()
{
    createCanvas(canvas.width, canvas.height);
    minesweeper = new game(10, 10);

    // setup the game
    minesweeper.board.setup(10);
}

function draw()
{
    background(220);
    
    // Minesweeper game
    minesweeper.draw();



}

function mouseClicked() { minesweeper.board.click(mouseX, mouseY, false); }

// keyboard press
function keyPressed()
{
    if (key == ' ')
    {
        minesweeper.board.click(mouseX, mouseY, true);
    }
}