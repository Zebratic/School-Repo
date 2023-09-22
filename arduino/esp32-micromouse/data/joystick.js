var connection = new WebSocket(`ws://${window.location.hostname}/ws`, ['arduino']);
connection.onopen = function () {
    console.log('WebSocket Client Connected');
};
connection.onerror = function (error) {
    console.log('WebSocket Error ', error);
};
connection.onmessage = function (e) {
    console.log('Server: ', e.data);
};
connection.onclose = function () {
    // retry connection after 1 second
    setTimeout(function () {
        console.log('reconnecting...');
        connection = new WebSocket(`ws://${window.location.hostname}/ws`, ['arduino']);
    }, 1000);
};

function send(data) {
    console.log(data);
    connection.send(data);
}

function sendMessage(data) {
    data = JSON.stringify(data);
    connection.send(data);
}

// when butotn is held down, spam the dir as json {"dir": "forward"}
document.querySelectorAll('#controller-button').forEach(function (button) {
    button.addEventListener('touchstart', function (e) {
        e.preventDefault();
        var dir = button.getAttribute('dir');
        sendMessage({ dir: dir });
    });
});

// on #manual-mode-button click, send manual mode command, and toggle button text between "Manual" and "Auto"
document.querySelector('#manual-mode-button').addEventListener('click', function (e) {
    e.preventDefault();
    var button = document.querySelector('#manual-mode-button');
    var mode = button.getAttribute('mode');
    if (mode == 'manual') {
        sendMessage({ manual: 'off' });
        button.setAttribute('mode', 'auto');
        button.classList.remove('button-green');
        button.innerHTML = 'Auto';
    } else {
        sendMessage({ manual: 'on' });
        button.setAttribute('mode', 'manual');
        button.classList.add('button-green');
        button.innerHTML = 'Manual';
    }
});