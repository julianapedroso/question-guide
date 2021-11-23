const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connetion = require('./database/database');
// model:
const Question = require('./database/Question');

// database:
connetion
    .authenticate()
    .then(() => {
        console.log('Conexão realizada com sucesso!');
    })
    .catch((err) => {
        console.log(err);
    });

// adicionando ejs:
app.set('view engine', 'ejs');
// adicionando arquivos estáticos:
app.use(express.static('public'));
// adicionando body parser:
app.use(bodyParser.urlencoded({
    extended: false
}));
// adicionando leitura via json:
app.use(bodyParser.json());

// Rotas
app.get('/', (req, res) => {
    Question.findAll({
        raw: true, order: [
            ['id', 'DESC']
        ]
    }).then((questions) => {
        res.render('index', {
            questions: questions,
        })
    })
});

app.get('/ask', (req, res) => {
    res.render('ask');
});

app.post('/save-question', (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    Question.create({
        title: title,
        description: description,
    }).then(() => {
        res.redirect('/');
    }).catch((err) => {
        console.log(err);
    })
});

app.get('/question/:id', (req, res) => {
    let id = req.params.id;
    Question.findOne({
        where: { id: id }
    }).then((question) => {
        if (question != undefined) {
            res.render('question', {
                question: question
            });
        } else {
            res.redirect('/');
        }
    })
});

// subindo servidor:
app.listen(8080, () => {
    console.log('Server running on port 8080');
});
