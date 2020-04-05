const LivroDao = require('../persistence/livro-dao');
const db = require('../../config/database');

module.exports = (app) =>{
    app.get('/', function(req, resp) {
        resp.send(
            `
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Olá mundo! </h1>
                    </body> 
                </html>
            `
        );
    });
    
    app.get('/livros', function(req, resp) {

        const livroDao = new LivroDao(db);
        livroDao.lista(function(error, result) {
            
            resp.marko(
                require('../views/livros/lista/lista.marko'),
                {
                    livros: result
                }
            );
        });

    });
};

