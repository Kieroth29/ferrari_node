module.exports = function(application){

    application.get('/article', function(req, res){
        var conn = application.config.db();
        var newsModel = new application.app.models.newsModel(conn);

        newsModel.getArticle(conn, req.query.id, function(err, article){
            newsModel.getRecentArticles(conn, req.query.id, function(err, recentArticles){
                res.render('news/article', {article: article, recentArticles: recentArticles});
            });
        });
    });

}