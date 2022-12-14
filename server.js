/* Importando las depedencias */
import express from 'express'

/* Instanciar nuestras constantes */
const app = express();

/* Funcionalidades del servidor */
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/datos', (req, res) => {
    res.render('nivel', req.query);
})

/* Configuramos el servidor */