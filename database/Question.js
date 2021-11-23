const Sequelize = require('sequelize');
const connetion = require('./database');

const Question = connetion.define('question', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
});

// cria tabela no banco:
Question.sync({ force: false }) // force para não forçar a criação da tabela, caso ela já exista
    .then(() => { });

module.exports = Question;