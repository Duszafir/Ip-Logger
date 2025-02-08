const express = require('express');
const fs = require('fs');
const readline = require('readline');
const app = express();
const PORT = 3000;

const BASE_URL = 'http://localhost:' + PORT;

const links = new Map();

app.use(express.json());

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor ingrese un enlace de destino: ', (targetUrl) => {
    if (!targetUrl) {
        console.log('Falta la URL de destino');
        rl.close();
        return;
    }

    const id = Math.random().toString(36).substring(7);
    links.set(id, targetUrl);

    app.post('/generate', (req, res) => {
        res.json({ shortUrl: `${BASE_URL}/${id}` });
    });

    app.get('/:id', (req, res) => {
        const id = req.params.id;
        const targetUrl = links.get(id);

        if (!targetUrl) {
            return res.status(404).send('Error 404: Enlace no encontrado');
        }

        // Registra la IP de quien accede al enlace
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log("-----------------------------")
        console.log(`IP: ${ip} - URL: ${targetUrl}`);
        console.log("-----------------------------")

        res.redirect(targetUrl);
    });

    app.listen(PORT, () => {
        console.log(`Servidor corriendo en ${BASE_URL}`);
        console.log(`Enlace corto generado: ${BASE_URL}/${id}`);
    });

    rl.close();
});
