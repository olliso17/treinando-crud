const db = require('./config/conexao');


const Cadastro = db.conecction.define('cadastros', {
    name: { type: db.Sequelize.STRING },
    surname: { type: db.Sequelize.STRING },
    email: { type: db.Sequelize.STRING },
    password: { type: db.Sequelize.STRING },
});

//criar tabela
//Cadastro.sync({force:true})
module.exports = Cadastro;

