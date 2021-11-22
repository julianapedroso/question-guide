const express = require('express');
const app = express();
const bodyParser = require('body-parser');

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
    res.send("Formulário recebido");
})

// subindo servidor:
app.listen(8080, () => {
    console.log('Server running on port 8080');
});
