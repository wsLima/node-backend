const app = require('./src/config/custom-express');

app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000');
});

const requets = require('./src/app/providers/requests');
requets(app);

