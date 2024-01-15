let values = [];
let i = 0;
let j = 0;
let sorted = false;

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
    
    if (!sorted) {
        if (isSorted(values)) {
            sorted = true;
            console.log("Finished sorting");
            noLoop();
            for (let i = values.length - 1; i >= 0; i--) {
                stroke(0, 255, 0);
                line(i, height, i, height - values[i]);
            }
        } else {
            slowSort(values);
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

function slowSort(arr) {
    if (i >= arr.length) {
        i = 0;
        j = 0;
    }
    
    if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    j++;
    if (j >= arr.length - i - 1) {
        j = 0;
        i++;
    }
}

function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
