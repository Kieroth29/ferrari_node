module.exports.getArticle = function(application, req, res){
    var conn = application.config.db();
    var newsModel = new application.app.models.newsModel(conn);

    newsModel.getArticle(conn, req.query.id, function(err, article){
        newsModel.getRecentArticles(conn, req.query.id, function(err, recentArticles){
            res.render('news/article', {article: article, recentArticles: recentArticles});
        });
    });
}

module.exports.getArticles = function(application, req, res){
    var conn = application.config.db();
    var newsModel = new application.app.models.newsModel(conn);

    newsModel.getArticles(conn, function(err, result){
        res.render('news/articles', {articles: result});
    });
}