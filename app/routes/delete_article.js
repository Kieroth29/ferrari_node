module.exports = function(application){

    application.delete('/delete_article', function (req, res){
        application.app.controllers.news.deleteArticle(application, req, res);
    });

}
