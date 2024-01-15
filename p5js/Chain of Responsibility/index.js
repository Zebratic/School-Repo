class Handler {
    handleRequest(request) {
    }
}

class ValueAddition extends Handler {
    handleRequest(request) {
        if (request.type === 'A') {
            // Add the request value to the global array
            console.log('Adding request A value to global array:', request.value);
            globalArray.push(request.value);
        } else {
            super.handleRequest(request);
        }
    }
}

class BubbleSort extends Handler {
    handleRequest(request) {
        if (request.type === 'B') {
            // Sort the global array using bubble sort
            console.log('Sorting global array using bubble sort');
            bubbleSort(globalArray);
        } else {
            super.handleRequest(request);
        }
    }
}

class ClearLastValuer extends Handler {
    handleRequest(request) {
        if (request.type === 'C') {
            // Remove the latest entry from the global array
            console.log('Removing latest entry from global array');
            globalArray.pop();
        } else {
            super.handleRequest(request);
        }
    }
}

class Chain {
    constructor() {
        this.handlers = [];
    }

    addHandler(handler) {
        this.handlers.push(handler);
    }

    processRequest(request) {
        for (const handler of this.handlers) {
            handler.handleRequest(request);
        }
    }
}

class Request {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}

// Bubble sort function
function bubbleSort(array) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Swap elements
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

// Create a chain and add the handlers
const chain = new Chain();
chain.addHandler(new ValueAddition());
chain.addHandler(new BubbleSort());
chain.addHandler(new ClearLastValuer());

// Create requests of different types and process them through the chain
const globalArray = [2, 5, 1, 3, 4];
chain.processRequest(new Request('A', 10));
chain.processRequest(new Request('A', 5));
chain.processRequest(new Request('A', 3));
chain.processRequest(new Request('A', 3));
chain.processRequest(new Request('A', 99));
chain.processRequest(new Request('B'));
chain.processRequest(new Request('C'));
chain.processRequest(new Request('A', 40));
chain.processRequest(new Request('A', 1));

console.log('Global array:', globalArray);