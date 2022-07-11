const { body } = require('express-validator');

module.exports = function(application){
    
    application.get('/create_article', function (req, res) {
        application.app.controllers.admin.articleCreationForm(application, req, res);
    });

    application.post('/news/create', 
    body('titulo').notEmpty().withMessage('Article title is required.').isLength({min: 5, max: 100}).withMessage('Title size must be between 5 and 100 characters.'),
    body('resumo').notEmpty().withMessage('Article summary is required.').isLength({min: 5, max: 250}).withMessage('Summary size must be between 5 and 250 characters.'),
    body('texto').notEmpty().withMessage('Article body is required.'),
    function (req, res) {
        application.app.controllers.admin.createArticle(application, req, res);
    });

};