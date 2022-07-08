module.exports = function(application){

    application.get('/news', function(req, res){
        var conn = application.config.db();
        var newsModel = new application.app.models.newsModel(conn);

        newsModel.getArticles(conn, function(err, result){
            res.render('news/articles', {articles: result});
        });
    });

}