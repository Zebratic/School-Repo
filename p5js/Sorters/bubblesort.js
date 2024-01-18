let values = [];
let i = 0;
let j = 0;
let randomizeButton;
let sorted = false;
let greenColor;

function setup() {
    createCanvas(400, 400);
    values = new Array(width);
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height);
    }
    frameRate(60); // Adjust the frame rate to slow down the animation
    
    randomizeButton = createButton('Randomize');
    randomizeButton.position(10, 10);
    randomizeButton.mousePressed(randomizeValues);
}

function draw() {
    background(0);
    
    if (i < values.length) {
        for (let j = 0; j < values.length - i - 1; j++) {
            let a = values[j];
            let b = values[j + 1];
            if (a > b) {
                swap(values, j, j + 1);
            }
        }
    } else {
        if (!sorted) {
            console.log("Finished sorting");
            sorted = true;
            setTimeout(restartSorting, 3000); // Restart sorting after 3 seconds
        }
        for (let i = values.length - 1; i >= 0; i--) {
            greenColor = lerpColor(color(0, 255, 0, 0), color(0, 255, 0, 255), map(i, 0, values.length - 1, 0, 1));
            stroke(greenColor);
            line(i, height, i, height - values[i]);
        }
    }
    
    i++;
    
    for (let i = 0; i < values.length; i++) {
        if (i === j || i === j + 1) {
            stroke(0, 255, 0); // Change stroke color to green
        } else {
            stroke(255);
        }
        line(i, height, i, height - values[i]);
    }
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function randomizeValues() {
    // restart
    i = 0;
    j = 0;
    sorted = false;
    values = new Array(width);
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height);
    }
    loop();
}

function restartSorting() {
    randomizeValues();
}