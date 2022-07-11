const { validationResult } = require('express-validator');

module.exports.articleCreationForm = function(application, req, res){
    res.render("admin/create_article", {validation: null});
}

module.exports.createArticle = function(application, req, res){
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
}

module.exports.deleteArticle = function(application, req, res){
    var conn = application.config.db();

    var articleId = req.query.articleId;

    if(!articleId){
        return res.status(404).json({error: 'Request missing article ID.'}).send();
    }
    
    conn.query("SELECT * FROM noticias WHERE id = " + articleId + ";", function (err, result) {  
        if(result.length == 0){
            return res.status(400).json({error: "Article with provided ID does not found."}).send();
        }else{
            conn.query("DELETE FROM noticias WHERE id = " + articleId + ";", function (err, result) {
                if (err) throw err;
                return res.redirect('/news');
            });
        }
    });
}