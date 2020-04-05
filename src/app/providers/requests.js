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
        resp.send(
            `
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Listagem de livros </h1>
                    </body> 
                </html>
            `
        );
    });
};

