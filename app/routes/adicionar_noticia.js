const { body, validationResult } = require('express-validator');

module.exports = function(application){
    
    application.get('/adicionar_noticia', function (req, res) {
        res.render("admin/adicionar_noticia")
    });

    application.post('/noticias/adicionar', 
    body('titulo').notEmpty().withMessage('Título obrigatório').isLength({min: 5, max: 100}).withMessage('O título deve ter entre 5 e 100 caracteres'),
    body('resumo').notEmpty().withMessage('Resumo obrigatório').isLength({min: 5, max: 250}).withMessage('O resumo deve ter entre 5 e 250 caracteres'),
    body('texto').notEmpty().withMessage('Texto obrigatório'),
    function (req, res) {
        const errors = validationResult(req).array();

        if (errors.length > 0) {
            res.render('admin/adicionar_noticia', {validation: errors});
            return;
        }

        var noticia = req.body;

        var conn = application.config.db();
        var noticiasModel = application.app.models.noticiasModel();

        noticiasModel.setNoticia(conn, noticia, function (err, result){
            res.redirect('/noticias');
        });
    });

};