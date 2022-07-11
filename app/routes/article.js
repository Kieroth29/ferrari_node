module.exports = function(application){

    application.get('/article', function(req, res){
        application.app.controllers.news.getArticle(application, req, res);
    });

}