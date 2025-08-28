
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        message: 'Practica de docker - Grupo 5 Prácticas Iniciales F-',
        status: 'OK',
        timestamp: new Date().toISOString()
    });
});

app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        service: 'docker-app',
        team: 'Grupo 5'
    });
});

app.get('/api/test', (req, res) => {
    res.json({
        message: 'Funciona en Docker',
        environment: 'production'
    });
});

app.listen(PORT, () => {
    console.log(`Servidor de docker corriendo en puerto ${PORT}`);
    console.log(`URL: http://localhost:${PORT}`);
});
