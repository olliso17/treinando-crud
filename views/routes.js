module.exports = app => {
    const cadastro = require('../src/model/cadastro');

    app.get('/', (req, res, err) => {

        res.render('login')

    });
    app.post('/', (req, res, err) => {
        cadastro.findAll().then(() => {
            res.render('calendario', { cadastro: cadastro })
        })
    });
    app.get('/calendario', (req, res, err) => {
        res.render('calendario');

    });

    app.get('/cadastro', (req, res, err) => {
        res.render('cadastro');

    });

    app.post('/cadastro', (req, res, err) => {
        cadastro.create({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: req.body.password
        }).then(() => {
            res.redirect('/');
        }).catch((err) => {
            console.log('erro' + err);
        });

    });

}


