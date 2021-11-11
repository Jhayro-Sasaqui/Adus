const express = require('express');
const path = require('path');

// inicializaciones
const app = express();

//ajustes
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//rutas
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/subir', (req, res) => {
    res.send('imagen subida');
});

//iniciar el servidor
app.listen(app.get('port'), () =>{
   console.log('server on port');
});