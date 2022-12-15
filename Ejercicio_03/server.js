/* Importar nuestras dependencias */
import express from 'express'

// Declarar constantes y arrays
let personas = []
const app = express();

// Funcionalidades de nuestro servidor
app.use(express.urlencoded({extended: true}))

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('formulario', {personas});
});

app.post('/datos', (req, res) => {
    personas.push(req.body)
    console.log(personas)
    res.redirect('/')
});

/* Configurar el servidor */
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto: ', PORT);
})
server.on('error', error => console.log('Error en el servidor: ', error));