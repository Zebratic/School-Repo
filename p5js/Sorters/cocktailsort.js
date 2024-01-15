let values = [];
let i = 0;
let j = 0;

function setup() {
    createCanvas(400, 400);
    values = new Array(width);
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height);
    }
    frameRate(60); // Adjust the frame rate to slow down the animation
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
        i++;
    } else {
        console.log("Finished sorting");
        noLoop();
        for (let i = values.length - 1; i >= 0; i--) {
            stroke(0, 255, 0);
            line(i, height, i, height - values[i]);
        }
    }
    
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
