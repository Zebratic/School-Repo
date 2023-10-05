const express = require('express');
const app = express();
var constants = require('./constants.js');
app.set('views', __dirname + '/pages');
app.set('view engine', 'ejs');

// ==================================== ASSETS ==================================== //
app.use('/assets', express.static('assets'));
app.get('/favicon.ico', (req, res) => { res.sendFile(__dirname + '/assets/img/favicon.ico'); });
app.use('/', express.static('node_modules'));


// ==================================== PAGE ROUTES ==================================== //
app.use((req, res, next) => {
    // /servers, attacks, etc
    var url = req.url.split('/')[1];

    // if url is empty
    if (url === '')
        url = 'index';        
    

    // check if file exists
    if (!require('fs').existsSync('./pages/' + url + '.ejs')) {
        res.status(404).render('404');
        return;
    }
    
    res.render(url);
});

app.listen(constants.port, () => {
    console.log(`Ready at: http://localhost:${constants.port}`);
});