const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

// variables de entorno
const port = process.env.PORT || 3000;

app.use( express.static( __dirname + '/public'));

hbs.registerPartials( __dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    let options = {
        title: 'Redemptions Mind',
        ip: res.socket.remoteAddress
    };
    res.render('home', options);

});
app.get('/about', (req, res) => {

    let options = {
        title: 'Redemptions Mind',
        ip: res.socket.remoteAddress
    };
    res.render('about', options);

});
app.listen(port, () => {
    console.log(`Listenn on ${port}`);
});