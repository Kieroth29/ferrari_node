const { body, validationResult } = require('express-validator');

module.exports = function(application){
    
    application.get('/create_article', function (req, res) {
        res.render("admin/create_article", {validation: null});
    });

    application.post('/news/create', 
    body('titulo').notEmpty().withMessage('Article title is required.').isLength({min: 5, max: 100}).withMessage('Title size must be between 5 and 100 characters.'),
    body('resumo').notEmpty().withMessage('Article summary is required.').isLength({min: 5, max: 250}).withMessage('Summary size must be between 5 and 250 characters.'),
    body('texto').notEmpty().withMessage('Article body is required.'),
    function (req, res) {
        const errors = validationResult(req).array();

        if (errors.length > 0) {
            res.render('admin/create_article', {validation: errors});
            return;
        }

        var article = req.body;

        var conn = application.config.db();
        var newsModel = new application.app.models.newsModel(conn);

        newsModel.setArticle(conn, article, function (err, result){
            res.redirect('/news');
        });
          
    });

};