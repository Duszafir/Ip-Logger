const express = require('express');
const fs = require('fs');
const readline = require('readline');
const path = require('path');
const ngrok = require('ngrok');
const app = express();
const PORT = 8080;

const links = new Map();

app.use(express.json());
app.use(express.static('public'));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function startNgrok() {
    try {
        const publicUrl = await ngrok.connect({
            addr: PORT,
            log_level: 'error'
        });
        return publicUrl;
    } catch (err) {
        console.error("Error al conectar con ngrok: ", err);
        process.exit(1);
    }
}

rl.question('Link del destino: ', async (targetUrl) => {
    if (!targetUrl) {
        console.log('Falta la URL de destino');
        rl.close();
        return;
    }

    const id = Math.random().toString(36).substring(7);
    links.set(id, targetUrl);

    const publicUrl = await startNgrok();
    const BASE_URL = publicUrl;

    app.post('/generate', (req, res) => {
        const shortUrl = `${BASE_URL}/${id}`;
        res.json({ shortUrl });
    });

    app.get('/:id', (req, res) => {
        const id = req.params.id;
        const targetUrl = links.get(id);

        if (!targetUrl) {
            return res.sendFile(path.join(__dirname, 'public', '404.html'));
        }

        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log("----------------------------------------------------------");
        console.log(`IP: ${ip} - URL: ${targetUrl}`);
        console.log("----------------------------------------------------------");

        res.redirect(targetUrl);
    });

    app.listen(PORT, '0.0.0.0', () => {
        const shortUrl = `${BASE_URL}/${id}`;
        console.log(`Servidor corriendo en ${BASE_URL}`);
        console.log(`Enlace corto generado: ${shortUrl}`);
    });

    rl.close();
});
