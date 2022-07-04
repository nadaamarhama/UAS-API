const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const appRoute = require('./src/routes/route-barang');
app.use('/', appRoute);

app.set('port', (process.env.PORT || 4000));
app.listen(app.get('port'), ()=>{
    console.log('Server Berjalan di Port : ', app.get('port'));
});