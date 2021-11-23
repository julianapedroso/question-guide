const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connetion = require('./database/database');

// database:
connetion
    .authenticate()
    .then(() => {
        console.log('Conexão realizada com sucesso!');
    })
    .catch((err) => {
        console.log(err);
    })

// adicionando ejs:
app.set('view engine', 'ejs');
// adicionando arquivos estáticos:
app.use(express.static('public'));
// adicionando body parser:
app.use(bodyParser.urlencoded({
    extended: false
}))
// adicionando leitura via json:
app.use(bodyParser.json());

// Rotas
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/ask', (req, res) => {
    res.render('ask');
});

app.post('/save-question', (req, res) => {
    let title = req.body.title;
    let description = req.body.description;

    res.send(`Formulário recebido com sucesso! Título: ${title}. Descrição: ${description}`);
})

// subindo servidor:
app.listen(8080, () => {
    console.log('Server running on port 8080');
});
