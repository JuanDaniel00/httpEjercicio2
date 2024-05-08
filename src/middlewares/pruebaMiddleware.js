// MIddlewar para capoyar las comprobaciones en cada ruta

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Middleware para validar el ID
app.use((req, res, next) => {
    const id = req.body.id;
    if (!id) {
        return res.status(400).send({ error: 'ID requerido' });
    }
    if (typeof id !== 'number') {
        return res.status(400).send({ error: 'ID debe ser un número' });
    }
    next();
});

// Middleware para validar la contraseña
app.use((req, res, next) => {
    const password = req.body.password;
    if (!password) {
        return res.status(400).send({ error: 'Contraseña requerida' });
    }
    if (password.length < 8) {
        return res.status(400).send({ error: 'La contraseña debe tener al menos 8 caracteres' });
    }
    next();
});

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡Validación exitosa!');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});