module.exports = function(application){

    application.get('/noticias', function(req, res){
        var conn = application.config.db();
        var noticiasModel = new application.app.models.noticiasModel(conn);

        noticiasModel.getNoticias(conn, function(err, result){
            res.render('noticias/noticias', {noticias: result});
        });
    });

}