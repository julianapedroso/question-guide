const Sequelize = require('sequelize');
const connetion = require('./database');

const Answer = connetion.define('answers', {
    body: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    questionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

Answer.sync({ force: false });

module.exports = Answer;