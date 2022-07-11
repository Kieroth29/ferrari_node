module.exports = function(application){

    application.get('/news', function(req, res){
        application.app.controllers.news.getArticles(application, req, res);
    });

}